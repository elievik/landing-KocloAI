#include "esp_camera.h"
#include <DNSServer.h>
#include <Preferences.h>
#include <WebServer.h>
#include <WebSocketsClient.h>
#include <WiFi.h>

// ==========================================
// CONFIGURATION DYNAMIQUE (PERSISTÉE EN FLASH)
// ==========================================
String wifi_ssid = "";
String wifi_pass = "";
String server_host = "";
int server_port = 8000;
String camera_id = "zone_a";

char ws_host[64];
char ws_path[128];

// ==========================================
// CONFIGURATION DE LA CAMÉRA (AI THINKER)
// ==========================================
#define PWDN_GPIO_NUM 32
#define RESET_GPIO_NUM -1
#define XCLK_GPIO_NUM 0
#define SIOD_GPIO_NUM 26
#define SIOC_GPIO_NUM 27
#define Y9_GPIO_NUM 35
#define Y8_GPIO_NUM 34
#define Y7_GPIO_NUM 39
#define Y6_GPIO_NUM 36
#define Y5_GPIO_NUM 21
#define Y4_GPIO_NUM 19
#define Y3_GPIO_NUM 18
#define Y2_GPIO_NUM 5
#define VSYNC_GPIO_NUM 25
#define HREF_GPIO_NUM 23
#define PCLK_GPIO_NUM 22

#define LED_BUILTIN 33  // LED rouge AI-Thinker (logique inversée)
#define LED_FLASH   4   // Flash blanc puissant

// ==========================================
// SYSTÈME DE QUALITÉ ADAPTATIVE
// ==========================================
// La caméra ajuste automatiquement sa qualité en fonction
// du débit réseau mesuré en temps réel.
//
// Profils disponibles (du meilleur au plus économe) :
//   ULTRA  → VGA 640×480, JPEG qualité 8   (~25-40 Ko/frame)
//   HIGH   → VGA 640×480, JPEG qualité 12  (~15-25 Ko/frame)
//   MEDIUM → HVGA 480×320, JPEG qualité 14 (~8-15 Ko/frame)
//   LOW    → QVGA 320×240, JPEG qualité 18 (~4-8 Ko/frame)
//
// Le système monte en qualité quand le réseau est bon,
// et descend automatiquement si les frames ne passent pas.

enum QualityProfile { Q_ULTRA, Q_HIGH, Q_MEDIUM, Q_LOW };
QualityProfile currentProfile = Q_HIGH;

struct ProfileConfig {
  framesize_t frameSize;
  int jpegQuality;       // 0-63, plus petit = meilleure qualité
  int targetFps;
  const char* name;
};

const ProfileConfig PROFILES[] = {
  { FRAMESIZE_VGA,    8,   6,  "ULTRA  640x480 Q8"  },  // Q_ULTRA
  { FRAMESIZE_VGA,   12,   8,  "HIGH   640x480 Q12" },  // Q_HIGH
  { FRAMESIZE_HVGA,  14,  10,  "MEDIUM 480x320 Q14" },  // Q_MEDIUM
  { FRAMESIZE_QVGA,  18,  12,  "LOW    320x240 Q18" },  // Q_LOW
};

// Compteurs pour l'adaptation automatique
int consecutiveSuccess = 0;   // Nombre de frames envoyées avec succès d'affilée
int consecutiveFails   = 0;   // Nombre d'échecs d'affilée
unsigned long lastProfileChange = 0;
const unsigned long PROFILE_CHANGE_COOLDOWN = 5000; // 5s minimum entre changements

// ==========================================
// ÉTAT GLOBAL
// ==========================================
WebSocketsClient webSocket;
bool wsConnected = false;
bool hasPsram = false;

// Statistiques
unsigned long totalFramesSent = 0;
unsigned long totalBytesSent = 0;
unsigned long lastStatsTime = 0;

void startPortal();
void blinkLed(int times, int delayMs);
void applyProfile(QualityProfile profile);
void adaptQuality(bool sendSuccess, size_t frameSize);
void optimizeSensor();

// ==========================================
// UTILITAIRE LED
// ==========================================
void blinkLed(int times, int delayMs) {
  for (int i = 0; i < times; i++) {
    digitalWrite(LED_BUILTIN, LOW);
    delay(delayMs);
    digitalWrite(LED_BUILTIN, HIGH);
    if (i < times - 1) delay(delayMs);
  }
}

// ==========================================
// OPTIMISATION AVANCÉE DU CAPTEUR OV2640
// ==========================================
// Configure tous les registres du capteur pour obtenir
// la meilleure image possible en conditions variées.
void optimizeSensor() {
  sensor_t *s = esp_camera_sensor_get();
  if (!s) {
    Serial.println("❌ Impossible d'accéder au capteur !");
    return;
  }

  // ── Balance des blancs automatique (AWB) ──
  // Corrige les dominantes de couleur (jaune en intérieur, bleu en extérieur)
  s->set_whitebal(s, 1);       // Activer AWB
  s->set_awb_gain(s, 1);       // Activer le gain AWB
  s->set_wb_mode(s, 0);        // 0=Auto, 1=Sunny, 2=Cloudy, 3=Office, 4=Home

  // ── Exposition automatique (AEC) ──
  // Adapte la luminosité de l'image à l'éclairage ambiant
  s->set_exposure_ctrl(s, 1);  // Activer l'exposition automatique
  s->set_aec2(s, 1);           // Activer l'AEC DSP (algorithme avancé)
  s->set_ae_level(s, 1);       // Légèrement surexposer (+1) pour plus de clarté
                                 // Plage: -2 à +2

  // ── Contrôle automatique du gain (AGC) ──
  // Monte le gain (sensibilité) dans les environnements sombres
  s->set_gain_ctrl(s, 1);      // Activer le gain automatique
  s->set_agc_gain(s, 0);       // Gain de base (0-30), 0 = auto gère tout
  s->set_gainceiling(s, (gainceiling_t)6);  // Plafond de gain max
                                 // 0=2x, 1=4x, 2=8x, 3=16x, 4=32x, 5=64x, 6=128x
                                 // 6 (128x) = excellente vision nocturne mais plus de bruit

  // ── Qualité d'image ──
  s->set_brightness(s, 1);     // Luminosité +1 (plage: -2 à +2)
  s->set_contrast(s, 1);       // Contraste +1 — rend l'image plus "nette" visuellement
  s->set_saturation(s, 0);     // Saturation neutre (plage: -2 à +2)
  s->set_sharpness(s, 1);      // Netteté +1 — améliore les détails fins
  s->set_denoise(s, 1);        // Réduction du bruit activée (élimine le grain)

  // ── Corrections optiques ──
  s->set_lenc(s, 1);           // Correction de l'assombrissement sur les bords (vignettage)
  s->set_raw_gma(s, 1);        // Correction gamma — meilleure perception des tons sombres
  s->set_dcw(s, 1);            // Downsize Enable — meilleur redimensionnement interne

  // ── Options spéciales (désactivées pour image naturelle) ──
  s->set_bpc(s, 1);            // Correction des pixels défectueux (supprime les points chauds)
  s->set_wpc(s, 1);            // Correction des pixels blancs défectueux
  s->set_colorbar(s, 0);       // Pas de mire de test
  s->set_special_effect(s, 0); // 0=Normal (pas de sépia, négatif, etc.)
  s->set_hmirror(s, 0);        // Pas de miroir horizontal
  s->set_vflip(s, 0);          // Pas de retournement vertical

  Serial.println("✅ Capteur OV2640 optimisé :");
  Serial.println("   AWB=Auto | AEC=Auto(+1) | AGC=Auto(plafond 128x)");
  Serial.println("   Luminosité=+1 | Contraste=+1 | Netteté=+1 | Denoise=ON");
  Serial.println("   Corrections: Vignette=ON | Gamma=ON | PixelsDéfectueux=ON");
}

// ==========================================
// APPLICATION D'UN PROFIL DE QUALITÉ
// ==========================================
void applyProfile(QualityProfile profile) {
  if (!hasPsram && (profile == Q_ULTRA || profile == Q_HIGH)) {
    // Sans PSRAM, on ne peut pas dépasser HVGA en continu de manière fiable
    profile = Q_MEDIUM;
  }

  sensor_t *s = esp_camera_sensor_get();
  if (!s) return;

  const ProfileConfig &cfg = PROFILES[profile];

  s->set_framesize(s, cfg.frameSize);
  s->set_quality(s, cfg.jpegQuality);

  if (currentProfile != profile) {
    Serial.printf("📸 Profil qualité → %s (FPS cible: %d)\n", cfg.name, cfg.targetFps);
    currentProfile = profile;
    lastProfileChange = millis();
  }
}

// ==========================================
// ADAPTATION AUTOMATIQUE DE LA QUALITÉ
// ==========================================
// Algorithme : 
//   - Si 20 frames passent d'affilée → monter d'un cran
//   - Si 3 échecs d'affilée → descendre d'un cran
//   - Cooldown de 5 secondes entre les changements
void adaptQuality(bool sendSuccess, size_t frameBytes) {
  unsigned long now = millis();
  bool cooldownOk = (now - lastProfileChange) > PROFILE_CHANGE_COOLDOWN;

  if (sendSuccess) {
    consecutiveFails = 0;
    consecutiveSuccess++;

    // Monter en qualité après 20 succès consécutifs
    if (consecutiveSuccess >= 20 && cooldownOk && currentProfile > Q_ULTRA) {
      QualityProfile newProfile = (QualityProfile)(currentProfile - 1);
      applyProfile(newProfile);
      consecutiveSuccess = 0;
      Serial.printf("   ⬆ Qualité augmentée (frames ~%lu octets)\n", (unsigned long)frameBytes);
    }
  } else {
    consecutiveSuccess = 0;
    consecutiveFails++;

    // Descendre en qualité après 3 échecs consécutifs
    if (consecutiveFails >= 3 && cooldownOk && currentProfile < Q_LOW) {
      QualityProfile newProfile = (QualityProfile)(currentProfile + 1);
      applyProfile(newProfile);
      consecutiveFails = 0;
      Serial.printf("   ⬇ Qualité réduite pour stabiliser le flux\n");
    }
  }
}

// ==========================================
// CALLBACK WEBSOCKET
// ==========================================
void webSocketEvent(WStype_t type, uint8_t *payload, size_t length) {
  switch (type) {
  case WStype_CONNECTED:
    wsConnected = true;
    consecutiveSuccess = 0;
    consecutiveFails = 0;
    Serial.println("\n✅ [WebSocket] Connecté au backend !");
    Serial.printf("   Profil actif : %s\n", PROFILES[currentProfile].name);
    digitalWrite(LED_BUILTIN, LOW);
    break;

  case WStype_DISCONNECTED:
    if (wsConnected) {
      Serial.println("\n❌ [WebSocket] Déconnecté.");
    }
    wsConnected = false;
    digitalWrite(LED_BUILTIN, HIGH);
    break;

  case WStype_TEXT:
    Serial.printf("📨 [Backend] %s\n", payload);
    break;

  case WStype_ERROR:
    Serial.println("⚠️ [WebSocket] Erreur !");
    break;

  default:
    break;
  }
}

// ==========================================
// PORTAIL DE CONFIGURATION CAPTIF
// ==========================================
void startPortal() {
  WebServer server(80);
  DNSServer dnsServer;

  Serial.println("\n📡 Lancement du Point d'Accès WiFi 'Koclo_Camera_Setup'...");
  WiFi.mode(WIFI_AP);
  WiFi.softAP("Koclo_Camera_Setup");

  IPAddress apIP(192, 168, 4, 1);
  WiFi.softAPConfig(apIP, apIP, IPAddress(255, 255, 255, 0));
  dnsServer.start(53, "*", apIP);

  server.on("/", HTTP_GET, [&server]() {
    String html =
        "<!DOCTYPE html><html lang='fr'><head>"
        "<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>"
        "<title>KocloAI - Configuration</title>"
        "<style>"
        "body{font-family:sans-serif;background:#0F1419;color:white;padding:20px;text-align:center}"
        ".c{max-width:400px;margin:0 auto;background:#1E1E1E;padding:25px;border-radius:15px;box-shadow:0 4px 10px rgba(0,0,0,.3);text-align:left}"
        "h1{color:#00D084;font-size:22px;margin-bottom:20px;text-align:center}"
        "input{width:100%;padding:12px;margin:10px 0 18px 0;border:none;border-radius:8px;box-sizing:border-box;background:#2D2D2D;color:white;font-size:14px}"
        "button{background:#00D084;color:#003822;border:none;padding:14px;width:100%;border-radius:8px;font-weight:bold;cursor:pointer;font-size:16px;margin-top:15px}"
        "label{font-size:12px;color:#8E9AA4;font-weight:bold;text-transform:uppercase}"
        "</style></head><body>"
        "<div class='c'>"
        "<h1>🐔 KocloAI Caméra</h1>"
        "<form action='/save' method='POST'>"
        "<label>SSID (Nom du Wi-Fi)</label>"
        "<input type='text' name='ssid' value='" + wifi_ssid + "' required>"
        "<label>Mot de Passe Wi-Fi</label>"
        "<input type='password' name='pass' value='" + wifi_pass + "'>"
        "<label>IP du Serveur Backend</label>"
        "<input type='text' name='host' value='" + server_host + "' required>"
        "<label>Port du Serveur</label>"
        "<input type='number' name='port' value='" + String(server_port) + "' required>"
        "<label>ID Caméra</label>"
        "<input type='text' name='cam_id' value='" + camera_id + "' required>"
        "<button type='submit'>Enregistrer et Redémarrer</button>"
        "</form></div></body></html>";
    server.send(200, "text/html", html);
  });

  server.on("/save", HTTP_POST, [&server]() {
    String req_ssid   = server.arg("ssid");
    String req_pass   = server.arg("pass");
    String req_host   = server.arg("host");
    String req_port   = server.arg("port");
    String req_cam_id = server.arg("cam_id");

    req_host.replace("http://", "");
    req_host.replace("https://", "");
    if (req_host.endsWith("/")) req_host = req_host.substring(0, req_host.length() - 1);

    Preferences prefs;
    if (prefs.begin("koclo", false)) {
      prefs.putString("ssid", req_ssid);
      prefs.putString("pass", req_pass);
      prefs.putString("host", req_host);
      prefs.putInt("port", req_port.toInt());
      prefs.putString("cam_id", req_cam_id);
      prefs.end();
    }

    server.send(200, "text/html",
        "<!DOCTYPE html><html><body style='background:#0F1419;color:white;text-align:center;padding:40px;font-family:sans-serif'>"
        "<h1 style='color:#00D084'>Configuration Enregistree !</h1>"
        "<p>La camera redemarre...</p></body></html>");
    delay(2000);
    ESP.restart();
  });

  server.onNotFound([&server]() {
    server.sendHeader("Location", "http://192.168.4.1/", true);
    server.send(302, "text/plain", "");
  });

  server.begin();
  Serial.println("📢 Portail captif → http://192.168.4.1");

  while (true) {
    dnsServer.processNextRequest();
    server.handleClient();
    blinkLed(1, 100);
    delay(200);
  }
}

// ==========================================
// SETUP
// ==========================================
void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(LED_FLASH, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH); // Éteint
  digitalWrite(LED_FLASH, LOW);    // Flash éteint
  delay(1000);

  Serial.println("\n\n══════════════════════════════════════");
  Serial.println("  🐔 ESP32-CAM KOCLOAI — Démarrage");
  Serial.println("══════════════════════════════════════");

  // ── 1. Détection PSRAM ────────
  hasPsram = psramFound();
  Serial.printf("   PSRAM : %s (%d octets libres)\n",
      hasPsram ? "✅ Détectée" : "❌ Absente",
      hasPsram ? ESP.getFreePsram() : 0);

  // ── 2. Chargement des Préférences ────────
  Preferences prefs;
  prefs.begin("koclo", true);
  wifi_ssid   = prefs.getString("ssid", "");
  wifi_pass   = prefs.getString("pass", "");
  server_host = prefs.getString("host", "192.168.0.100");
  server_port = prefs.getInt("port", 8000);
  camera_id   = prefs.getString("cam_id", "zone_a");
  prefs.end();

  Serial.printf("   WiFi  : '%s'\n", wifi_ssid.c_str());
  Serial.printf("   Server: %s:%d\n", server_host.c_str(), server_port);
  Serial.printf("   Cam ID: '%s'\n", camera_id.c_str());

  if (wifi_ssid == "") {
    Serial.println("\n⚠️ Aucun WiFi configuré.");
    startPortal();
  }

  // ── 3. Connexion Wi-Fi ──────────────────
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(500);

  Serial.printf("\n📶 Connexion WiFi '%s'", wifi_ssid.c_str());
  WiFi.begin(wifi_ssid.c_str(), wifi_pass.c_str());

  int attempts = 0;
  while (WiFi.status() != WL_CONNECTED && attempts < 25) {
    delay(500);
    Serial.print(".");
    blinkLed(1, 80);
    attempts++;
  }

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("\n❌ Échec WiFi. Portail captif...");
    startPortal();
  }

  Serial.println("\n✅ WiFi connecté !");
  Serial.printf("   IP locale : %s\n", WiFi.localIP().toString().c_str());
  Serial.printf("   RSSI      : %d dBm\n", WiFi.RSSI());

  // ── 4. Initialisation de la caméra (haute résolution) ──────
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer   = LEDC_TIMER_0;
  config.pin_d0       = Y2_GPIO_NUM;
  config.pin_d1       = Y3_GPIO_NUM;
  config.pin_d2       = Y4_GPIO_NUM;
  config.pin_d3       = Y5_GPIO_NUM;
  config.pin_d4       = Y6_GPIO_NUM;
  config.pin_d5       = Y7_GPIO_NUM;
  config.pin_d6       = Y8_GPIO_NUM;
  config.pin_d7       = Y9_GPIO_NUM;
  config.pin_xclk     = XCLK_GPIO_NUM;
  config.pin_pclk     = PCLK_GPIO_NUM;
  config.pin_vsync    = VSYNC_GPIO_NUM;
  config.pin_href     = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn     = PWDN_GPIO_NUM;
  config.pin_reset    = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  config.grab_mode    = CAMERA_GRAB_LATEST;  // Toujours la frame la plus récente

  if (hasPsram) {
    // Avec PSRAM : on initialise en VGA pour la meilleure qualité
    config.frame_size  = FRAMESIZE_VGA;   // 640×480
    config.jpeg_quality = 10;              // Haute qualité
    config.fb_count    = 2;               // Double buffer pour la fluidité
    config.fb_location = CAMERA_FB_IN_PSRAM;
  } else {
    // Sans PSRAM : on reste raisonnable
    config.frame_size  = FRAMESIZE_QVGA;  // 320×240
    config.jpeg_quality = 14;
    config.fb_count    = 1;
    config.fb_location = CAMERA_FB_IN_DRAM;
  }

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("❌ Erreur caméra : 0x%x — Redémarrage...\n", err);
    delay(3000);
    ESP.restart();
  }
  Serial.println("✅ Caméra OV2640 initialisée.");

  // ── 5. Optimisation du capteur ──────
  optimizeSensor();

  // ── 6. Appliquer le profil initial ──────
  QualityProfile initialProfile = hasPsram ? Q_HIGH : Q_MEDIUM;
  applyProfile(initialProfile);

  // ── 7. Connexion WebSocket ───────────────
  String serverPath = "/ws/esp32-stream?cam=" + camera_id;
  server_host.toCharArray(ws_host, 64);
  serverPath.toCharArray(ws_path, 128);

  Serial.printf("\n🔌 WebSocket → ws://%s:%d%s\n", ws_host, server_port, ws_path);

  webSocket.begin(ws_host, server_port, ws_path);
  webSocket.onEvent(webSocketEvent);
  webSocket.setReconnectInterval(5000);

  lastStatsTime = millis();

  Serial.println("\n══════════════════════════════════════");
  Serial.println("  🟢 PRÊT — En attente de connexion...");
  Serial.println("══════════════════════════════════════\n");
}

// ==========================================
// BOUCLE PRINCIPALE
// ==========================================
void loop() {
  webSocket.loop();
  unsigned long now = millis();

  // ── Watchdog WiFi ──
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("❌ Perte du WiFi ! Redémarrage...");
    delay(2000);
    ESP.restart();
  }

  // ── Capture et envoi ──
  const ProfileConfig &cfg = PROFILES[currentProfile];
  unsigned long interval = 1000 / cfg.targetFps;

  static unsigned long lastCapture = 0;
  if (wsConnected && (now - lastCapture >= interval)) {
    lastCapture = now;

    camera_fb_t *fb = esp_camera_fb_get();
    if (!fb) {
      Serial.println("⚠️ Échec capture.");
      return;
    }

    bool sent = webSocket.sendBIN(fb->buf, fb->len);
    size_t frameLen = fb->len;
    esp_camera_fb_return(fb);

    // Adapter la qualité en fonction du résultat
    adaptQuality(sent, frameLen);

    if (sent) {
      totalFramesSent++;
      totalBytesSent += frameLen;
    }
  }

  // ── Statistiques toutes les 30 secondes ──
  if (now - lastStatsTime >= 30000) {
    float elapsed = (now - lastStatsTime) / 1000.0;
    float fps = totalFramesSent / elapsed;
    float kbps = (totalBytesSent * 8.0) / (elapsed * 1000.0);

    Serial.println("────────────────────────────────");
    Serial.printf("📊 Stats (%.0fs) : %.1f FPS | %.0f kbps | %lu frames\n",
        elapsed, fps, kbps, totalFramesSent);
    Serial.printf("   Profil: %s | WiFi: %d dBm | RAM libre: %lu\n",
        PROFILES[currentProfile].name, WiFi.RSSI(),
        (unsigned long)ESP.getFreeHeap());
    Serial.println("────────────────────────────────");

    totalFramesSent = 0;
    totalBytesSent = 0;
    lastStatsTime = now;
  }
}
