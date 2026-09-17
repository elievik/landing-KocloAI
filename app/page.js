import ScrollReveal from "./ScrollReveal";

const revealClass =
  "opacity-0 translate-y-10 transition-all duration-1000";

export default function Home() {
  return (
    <>
      <ScrollReveal />

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
        <div className="flex justify-between items-center h-full px-gutter max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              monitoring
            </span>
            <span className="text-headline-md font-bold text-primary">KOCLO AI</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-on-surface-variant hover:text-primary font-medium transition-colors" href="#project">Projet</a>
            <a className="text-on-surface-variant hover:text-primary font-medium transition-colors" href="#modules">Modules</a>
            <a className="text-on-surface-variant hover:text-primary font-medium transition-colors" href="#network">Réseau</a>
            <a className="text-on-surface-variant hover:text-primary font-medium transition-colors" href="#tech">Tech</a>
            <a className="text-on-surface-variant hover:text-primary font-medium transition-colors" href="#technician" className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base">download</span> Télécharger
            </a>
            <a href="#technician" className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform active:scale-95 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">rocket_launch</span> Déployer
            </a>
          </div>
        </div>
      </nav>

      <main className="mt-20">
        {/* Hero Section */}
        <section className={`max-w-7xl mx-auto px-gutter py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center ${revealClass}`}>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Poultry Surveillance
            </div>
            <h1 className="text-display-xl text-on-surface leading-tight">
              Surveillance Avicole <br />
              <span className="text-primary">Pilotée par l&apos;IA</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg">
              Plateforme intelligente de collecte, de validation et de surveillance avicole basée sur la vision par ordinateur. Transformez vos données biologiques en insights actionnables avec une précision inégalée.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all">
                Explorer la Démo
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="border-2 border-outline-variant text-on-surface px-8 py-4 rounded-2xl font-bold hover:bg-surface-container transition-all">
                Voir Documentation
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary/10 rounded-[40px] blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-700"></div>
            <div className="glass-card p-4 overflow-hidden border-none shadow-2xl">
              <img
                className="w-full rounded-2xl shadow-sm"
                alt="Illustration 3D d'une ferme avicole moderne : caméra ESP32 fixée au mur surveillant les poules, avec une interface smartphone affichant la détection YOLOv11et le diagnostic santé EfficientNetB0."
                src="/images/hero_poultry.png"
              />
            </div>
          </div>
        </section>

        {/* Section: Pourquoi KOCLO AI (Project Presentation) */}
        <section className={`section-padding bg-white ${revealClass}`} id="project">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-headline-lg text-on-surface">Pourquoi choisir <span className="text-primary">KOCLO AI ?</span></h2>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Une infrastructure robuste conçue pour répondre aux défis complexes de l&apos;élevage avicole moderne.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="glass-card p-stack-lg text-center hover:translate-y-[-8px] transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>view_module</span>
                <h3 className="text-headline-md mb-2">4 Modules</h3>
                <p className="text-on-surface-variant">Koclo AI, Koclo Collect, Admin Web & Backend IA.</p>
              </div>
              <div className="glass-card p-stack-lg text-center hover:translate-y-[-8px] transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                <h3 className="text-headline-md mb-2">Multi-Tech</h3>
                <p className="text-on-surface-variant">FastAPI, React/Next.js, Flutter &amp; ESP32.</p>
              </div>
              <div className="glass-card p-stack-lg text-center hover:translate-y-[-8px] transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl text-tertiary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
                <h3 className="text-headline-md mb-2">IA State-art</h3>
                <p className="text-on-surface-variant">YOLOv11(surveillance vidéo) + EfficientNetB0 (diagnostic scan).</p>
              </div>
              <div className="glass-card p-stack-lg text-center hover:translate-y-[-8px] transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>devices</span>
                <h3 className="text-headline-md mb-2">Multi-Platform</h3>
                <p className="text-on-surface-variant">Accès Web, Mobile et Desktop temps réel.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className={`section-padding ${revealClass}`} id="modules">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-headline-lg">L&apos;Écosystème <span className="text-primary">Modulaire</span></h2>
                <p className="text-body-lg text-on-surface-variant">Quatre piliers fondamentaux pour une gestion de bout en bout de votre ferme avicole, tous fonctionnant en réseau local.</p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-outline-variant mx-12 mb-5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Module 1 - Koclo AI */}
              <div className="glass-card overflow-hidden group flex flex-col">
                <div className="h-44 bg-surface-container relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Application Koclo AI Mobile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-GdrFyaFgXfPujhiTKzfWsleC7rF8yFPz17cp_BRM36fLm_cBx-0NoNKcm0OcN9HGC2VF_rq8LJDKOzt-8eWpSKkt-V-RnrnS7ogmEfgUF6gBD21cTpywyEXL81NnfUqZiAyzWqat6iCffrT1-S7oXSTZoKS3Q12_TZ3aJzd9uIyqsaom6UmyoRWJM_RjYt_-bWJ50AzgA3opw0mvS-VES6lVpaAIzVOPVEvpdRrjoMGfeAf_wVn3" />
                  <div className="absolute top-4 left-4 chip bg-primary text-white">Surveillance</div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-headline-md">Koclo AI Mobile</h3>
                  <p className="text-on-surface-variant text-sm flex-1">App Flutter de surveillance vidéo temps réel, alertes IA et diagnostics par scan photo. Se connecte au backend local via Wi-Fi.</p>
                  {/* Two-screen badges */}
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      <span className="material-symbols-outlined text-xs">videocam</span> Écran Surveillance
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
                      <span className="material-symbols-outlined text-xs">photo_camera</span> Écran Scan
                    </span>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Surveillance multizones ESP32 (YOLOv8)</li>
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Diagnostic par photo (EfficientNetB0)</li>
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Mode 100% hors ligne</li>
                  </ul>
                  <div className="flex gap-2 pt-2">
                    <a href="/assets/KocloAI.apk" download className="flex-1 bg-primary/10 text-primary text-center py-1.5 rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-colors">APK</a>
                  </div>
                </div>
              </div>
              {/* Module 2 - Poultry Collect */}
              <div className="glass-card overflow-hidden group flex flex-col">
                <div className="h-44 bg-surface-container relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Application Koclo Collect" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Tx8ewqkz_KKToA-5Pn4xNjWRI48A9vU88uQkee-YlMxhbVMsy00KRQQ2GyMHMq1GKG48p0VALiZsuG3OLcJJJZ5F2NI1X6qqlP6S69go6U1MphFyVK6_ai0lWCLSu9keIbQZWzXiMuqAxDFEd40Mjinz3zIKSKhjl-Qbe8epldU-T49OYYXEzCdZpzCD-mNVOedLhd3SPx4fNMrzXH-56G-M8a5UByUn1hKlQmqesM0wt8drlECc" />
                  <div className="absolute top-4 left-4 chip bg-secondary text-white">Collecte</div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-headline-md">koclo_collect</h3>
                  <p className="text-on-surface-variant text-sm flex-1">App Flutter de collecte de données de santé sur le terrain. Capture guidée et envoi synchronisé vers le backend.</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Prise de vue guidée</li>
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Évaluation santé détaillée</li>
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Synchronisation FastAPI</li>
                  </ul>
                  <div className="flex gap-2 pt-2">
                    <a href="/assets/collect_koclo.apk" download className="flex-1 bg-secondary/10 text-secondary text-center py-1.5 rounded-lg text-xs font-bold hover:bg-secondary hover:text-white transition-colors">APK</a>
                  </div>
                </div>
              </div>
              {/* Module 3 - Backend IA */}
              <div className="glass-card overflow-hidden group flex flex-col">
                <div className="h-44 bg-gradient-to-br from-[#003822] to-[#00D084] relative overflow-hidden flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-8xl opacity-20">dns</span>
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-4">
                    <code className="text-green-300 text-xs font-mono">$ uvicorn app:app --host 0.0.0.0 --port 8000</code>
                    <code className="text-green-400 text-xs font-mono mt-1">INFO: Application startup complete.</code>
                  </div>
                  <div className="absolute top-4 left-4 chip bg-[#00D084] text-white">Backend IA</div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-headline-md">Koclo Backend IA</h3>
                  <p className="text-on-surface-variant text-sm flex-1">Serveur FastAPI Python embarquant YOLOv11(surveillance vidéo) et EfficientNetB0 (diagnostic santé par photo). Tourne en local sur un PC ou Raspberry Pi.</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-[#00D084] text-sm">check_circle</span> Inférence YOLOv11locale</li>
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-[#00D084] text-sm">check_circle</span> WebSocket temps réel</li>
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-[#00D084] text-sm">check_circle</span> Zéro dépendance cloud</li>
                  </ul>
                  <a href="https://github.com/elievik/koclo_backend_ia" target="_blank" rel="noopener noreferrer" className="w-full bg-[#003822]/10 text-[#003822] text-center py-1.5 rounded-lg text-xs font-bold hover:bg-[#003822] hover:text-white transition-colors flex items-center justify-center gap-1 mt-2">
                    <span className="material-symbols-outlined text-sm">code</span> Voir le code sur GitHub
                  </a>
                </div>
              </div>
              {/* Module 4 - Admin */}
              <div className="glass-card overflow-hidden group flex flex-col">
                <div className="h-44 bg-surface-container relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Admin Dashboard Koclo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_2PwQl7jqj0MW2yDfRBL2pr1DXh83wD6eVSdC5zFzXgQEgokSNmJj9tbejN8I5ki4IOi3vtDClUHv_uN9kxqf2fzFJ9GYyoGCvyAWYc9cFIA8umeMQNWLaZmxu4arwWMecB3K6FmrajiWVXDRM0G_13kQ9ZQY4D7NxGhkvvbpCCntTnnGjs4ZFHP6kbES76Pm6fuk8QyEXG4nr_VL6TUAnvkudf3fsJtfJmq9Mt7ZBk45dBR7-3gy" />
                  <div className="absolute top-4 left-4 chip bg-blue-600 text-white">Admin Web</div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-headline-md">Koclo Admin</h3>
                  <p className="text-on-surface-variant text-sm flex-1">Dashboard React/Vite en ligne pour la gestion des datasets, utilisateurs et le monitoring global des fermes.</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-blue-600 text-sm">check_circle</span> Gestion des datasets IA</li>
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-blue-600 text-sm">check_circle</span> Visualisation analytique</li>
                    <li className="flex items-center gap-2 text-xs font-medium"><span className="material-symbols-outlined text-blue-600 text-sm">check_circle</span> Accessible sur internet</li>
                  </ul>
                  <a href="https://huggingface.co/spaces/vikoumkoudzo/admin-collect" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white text-center py-1.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 mt-2">
                    Accéder au Dashboard <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Network Architecture Section */}
        <section className={`section-padding bg-surface-container-low ${revealClass}`} id="network">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <span className="material-symbols-outlined text-sm">router</span>
                Architecture Réseau Local (LAN)
              </div>
              <h2 className="text-headline-lg">Comment les composants <span className="text-primary">se connectent</span></h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto mt-2">Tous les composants (ESP32-CAM, Backend IA, App Mobile) communiquent via le même réseau Wi-Fi local. Aucune donnée ne sort de votre réseau.</p>
            </div>
            {/* Réseau Diagram */}
            <div className="glass-card p-8 md:p-12 bg-white border border-outline-variant">
              {/* Row 1: ESP32 Cameras */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {["Zone A", "Zone B", "Zone C"].map((zone) => (
                  <div key={zone} className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-orange-500/10 border-2 border-orange-400 rounded-2xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-orange-500 text-3xl">videocam</span>
                    </div>
                    <span className="text-xs font-bold text-orange-600">ESP32-CAM</span>
                    <span className="text-xs text-on-surface-variant">{zone}</span>
                  </div>
                ))}
              </div>
              {/* Arrow down + Wi-Fi label */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent to-orange-300"></div>
                <div className="flex flex-col items-center gap-1 px-4 py-2 bg-surface-container rounded-xl border border-outline-variant">
                  <span className="material-symbols-outlined text-primary text-2xl">wifi</span>
                  <span className="text-xs font-bold text-primary">Réseau Wi-Fi Local</span>
                  <span className="text-xs text-on-surface-variant">MJPEG Stream / HTTP</span>
                </div>
                <div className="flex-1 max-w-xs h-px bg-gradient-to-l from-transparent to-orange-300"></div>
              </div>
              {/* Row 2: Backend IA */}
              <div className="flex justify-center mb-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-32 h-24 bg-[#003822]/10 border-2 border-[#00D084] rounded-2xl flex flex-col items-center justify-center gap-1 relative">
                    <span className="material-symbols-outlined text-[#003822] text-3xl">dns</span>
                    <span className="text-xs font-bold text-[#003822]">Backend IA</span>
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-xs">check</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#00D084]">koclo_backend_ia</span>
                  <span className="text-xs text-on-surface-variant">FastAPI · Port :8000 · YOLOv11+ EfficientNetB0</span>
                </div>
              </div>
              {/* Arrow bidirectional */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent to-primary/30"></div>
                <div className="flex flex-col items-center gap-1 px-4 py-2 bg-surface-container rounded-xl border border-outline-variant">
                  <span className="material-symbols-outlined text-secondary text-2xl">swap_vert</span>
                  <span className="text-xs font-bold text-secondary">WebSocket + REST API</span>
                  <span className="text-xs text-on-surface-variant">ws://[IP]:8000 / http://[IP]:8000</span>
                </div>
                <div className="flex-1 max-w-xs h-px bg-gradient-to-l from-transparent to-primary/30"></div>
              </div>
              {/* Row 3: Koclo AI App — two screens */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Koclo AI Mobile · Flutter (iOS / Android)</span>
                  <div className="flex gap-6">
                    {/* Screen 1: Surveillance — YOLOv11*/}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-24 h-28 bg-primary/10 border-2 border-primary rounded-2xl flex flex-col items-center justify-center gap-1 px-2">
                        <span className="material-symbols-outlined text-primary text-3xl">videocam</span>
                        <span className="text-[10px] font-bold text-primary text-center leading-tight">Écran Surveillance</span>
                        <span className="text-[9px] text-primary/70 font-mono text-center leading-tight">YOLOv8</span>
                      </div>
                      <span className="text-[10px] text-on-surface-variant text-center">Flux vidéo + alertes</span>
                    </div>
                    {/* Divider */}
                    <div className="flex items-center">
                      <div className="w-6 h-px bg-outline-variant"></div>
                    </div>
                    {/* Screen 2: Scan — EfficientNetB0 */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-24 h-28 bg-secondary/10 border-2 border-secondary rounded-2xl flex flex-col items-center justify-center gap-1 px-2">
                        <span className="material-symbols-outlined text-secondary text-3xl">photo_camera</span>
                        <span className="text-[10px] font-bold text-secondary text-center leading-tight">Écran Scan</span>
                        <span className="text-[9px] text-secondary/70 font-mono text-center leading-tight">EfficientNetB0</span>
                      </div>
                      <span className="text-[10px] text-on-surface-variant text-center">Diagnostic par photo</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Configuration Note */}
              <div className="mt-10 p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                <h4 className="font-bold text-sm text-primary mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">settings</span>
                  Configuration de Connexion — Comment ça fonctionne
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="space-y-1">
                    <p className="font-semibold text-orange-600">① ESP32-CAM → Backend</p>
                    <p className="text-on-surface-variant">Chaque ESP32-CAM est configuré avec l'IP fixe du PC backend dans son firmware Arduino. Il envoie son flux MJPEG au Backend qui le traite avec YOLOv8.</p>
                    <code className="block bg-surface-container p-2 rounded font-mono text-on-surface mt-1">const char* serverIP = &quot;192.168.1.100&quot;;</code>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-[#003822]">② Backend → Koclo AI</p>
                    <p className="text-on-surface-variant">L'application Koclo AI se connecte via WebSocket à l'IP du PC backend. Elle entre l'IP dans l'écran de surveillance. Le backend pousse les frames analysées et les alertes en temps réel.</p>
                    <code className="block bg-surface-container p-2 rounded font-mono text-on-surface mt-1">ws://192.168.1.100:8000/ws</code>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-primary">③ ESP32-CAM → Koclo AI (direct)</p>
                    <p className="text-on-surface-variant">Pour la consultation directe sans analyse IA, Koclo AI peut accéder au flux brut de chaque ESP32-CAM directement via son URL MJPEG sur le réseau local.</p>
                    <code className="block bg-surface-container p-2 rounded font-mono text-on-surface mt-1">http://192.168.1.101/stream</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Lifecycle Section */}
        <section className={`section-padding ${revealClass}`}>
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-headline-lg">Cycle de vie de la <span className="text-primary">Donnée</span></h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-lg">Collecte Intelligente</h4>
                      <p className="text-on-surface-variant text-sm">Captation via ESP32-CAM et terminaux mobiles pour une couverture totale.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-lg">Validation &amp; Etiquetage</h4>
                      <p className="text-on-surface-variant text-sm">Contrôle qualité via la plateforme web pour garantir l&apos;intégrité des datasets.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-lg">Entraînement &amp; Déploiement</h4>
                      <p className="text-on-surface-variant text-sm">Mise à jour continue des modèles IA pour des prédictions toujours plus précises.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="w-full aspect-square max-w-md relative">
                  <div className="absolute inset-0 border-[16px] border-primary/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-0 border-[2px] border-dashed border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>sync</span>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-outline-variant">
                    <span className="material-symbols-outlined text-primary">camera_alt</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-outline-variant">
                    <span className="material-symbols-outlined text-secondary">cloud_upload</span>
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-outline-variant">
                    <span className="material-symbols-outlined text-tertiary">analytics</span>
                  </div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-outline-variant">
                    <span className="material-symbols-outlined text-primary">psychology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Core Section */}
        <section className={`section-padding bg-surface-container-highest ${revealClass}`}>
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="text-center mb-16">
              <h2 className="text-headline-lg">Cœur de l&apos;<span className="text-primary">Intelligence</span></h2>
              <p className="text-on-surface-variant">L&apos;alliance de deux modèles de pointe pour une détection et une classification sans erreur.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="glass-card p-stack-lg bg-white border-l-8 border-primary">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded">Object Detection</span>
                  <span className="material-symbols-outlined text-primary text-4xl">select_check_box</span>
                </div>
                <h3 className="text-headline-md mb-4">YOLOv11Engine</h3>
                <p className="text-on-surface-variant mb-6">Implémentation temps réel pour la détection précise des volailles, des intrus et des anomalies de comportement dans des environnements denses.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface p-3 rounded-xl text-xs font-bold text-center">98.5% Accuracy</div>
                  <div className="bg-surface p-3 rounded-xl text-xs font-bold text-center">30 FPS Video</div>
                </div>
              </div>
              <div className="glass-card p-stack-lg bg-white border-l-8 border-secondary">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm font-mono text-secondary bg-secondary/10 px-3 py-1 rounded">Diagnostic par Photo</span>
                  <span className="material-symbols-outlined text-secondary text-4xl">photo_camera</span>
                </div>
                <h3 className="text-headline-md mb-4">EfficientNetB0</h3>
                <p className="text-on-surface-variant mb-6">Utilisé dans l&apos;app <strong>Koclo AI</strong> pour le <strong>diagnostic santé par scan photo</strong>. L&apos;éleveur prend une photo d&apos;un sujet (poule, coq...) et le modèle classifie instantanément : <span className="text-green-600 font-semibold">Sain ✓</span> ou <span className="text-red-500 font-semibold">Malade ✗</span>.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface p-3 rounded-xl text-xs font-bold text-center">Scan en 1 Photo</div>
                  <div className="bg-surface p-3 rounded-xl text-xs font-bold text-center">Résultat Instantané</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Previews (Bento Grid Style) */}
        <section className={`section-padding ${revealClass}`}>
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="bento-grid">
              <div className="col-span-12 md:col-span-8 glass-card overflow-hidden group">
                <div className="p-8 flex justify-between items-center">
                  <div>
                    <h3 className="text-headline-md">Interface de Monitoring Web</h3>
                    <p className="text-on-surface-variant">Visualisez vos données en temps réel</p>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">north_east</span>
                  </button>
                </div>
                <div className="px-8 pb-0">
                  <img
                    className="w-full rounded-t-2xl shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    alt="Interface de tableau de bord web ultra-moderne pour la gestion avicole, avec une barre latérale sombre, des graphiques interactifs, une carte des secteurs de la ferme et des flux vidéo en direct avec détection IA."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmPDuzHGBEAwPMaELOMM5izcKdUSC26nc0tluRw2zxn60APGsvxM8iKGIGzey9g8LvlXu6s8hybLacfqBb_eg0m2A2Lh2ceDcU3L2nmDZvOHMZIRelEDTe1FEHrOFBOx7ycBcPwqtatGkinrC2tnVl6JIU3UmSmMXabmxc5NydUUyOWcs9kI946JholrZZWM4X6_wZGNfA2acgflrKuxy2XjaT7CxT8C0voI2Hu0SQ77vK2yJgVc4A"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 glass-card bg-primary text-white p-8 relative overflow-hidden flex flex-col justify-between">
                <div className="relative z-10">
                  <h3 className="text-headline-md">Alertes Critiques</h3>
                  <p className="text-white/80 mt-2">Réactivité maximale face aux imprévus.</p>
                </div>
                <div className="mt-8 relative z-10 flex justify-center">
                  <img
                    className="w-48 drop-shadow-2xl"
                    alt="Rendu haute résolution d'un smartphone affichant une notification d'alerte critique dans l'app mobile KOCLO AI, avec une icône d'avertissement rouge pour détection de maladie dans le secteur A."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfwKxo9M6sX2rl8L0V1D08wKP4c4ewxULZoUf8qrJD_gtftnaThusg7D6359xdhiHHVLA6NneYS299VhLUoTpiLxDwf0O_rR1PrXTcyETyNAz6QI_pt8kvN8NehBoFaN5fNpgirYqdgOYW4hj_uHtRoS4TC6r19kekh5G3cqa_puRhOtQUYHDyuzkHNcOMkQBYNIIS2ATOKxv285n382dVa9iYs5c4A8jtZv6LGcJWB5XgtUpwSJQg"
                  />
                </div>
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className={`section-padding bg-white border-y border-outline-variant/30 ${revealClass}`} id="tech">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="text-center mb-16">
              <h2 className="text-headline-md text-on-surface-variant uppercase tracking-widest font-bold">Technologies au Cœur du Système</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-primary">bolt</span>
                </div>
                <span className="text-xs font-bold font-mono">FastAPI</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-secondary">flutter_dash</span>
                </div>
                <span className="text-xs font-bold font-mono">Flutter</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-on-surface">code</span>
                </div>
                <span className="text-xs font-bold font-mono">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-blue-600">database</span>
                </div>
                <span className="text-xs font-bold font-mono">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-orange-500">memory</span>
                </div>
                <span className="text-xs font-bold font-mono">ESP32</span>
              </div>
            </div>
          </div>
        </section>

        {/* Espace Technicien & Téléchargements */}
        <section className={`section-padding bg-surface-container-low ${revealClass}`} id="technician">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6">
                <span className="material-symbols-outlined text-sm">wifi_off</span>
                Fonctionnement 100% Hors Ligne
              </div>
              <h2 className="text-headline-lg">Espace <span className="text-primary">Technicien</span></h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto mt-4">
                L'écosystème Koclo AI (Application et Backend) est conçu pour fonctionner intégralement en local sur votre réseau, sans nécessité de connexion internet. Téléchargez les modules ci-dessous pour déployer l'infrastructure sur votre ferme.
              </p>
            </div>

            {/* Grille de téléchargements */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              
              {/* Koclo AI */}
              <div className="glass-card p-6 bg-white border border-outline-variant hover:border-primary transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">smartphone</span>
                    </div>
                    <h3 className="text-title-lg font-bold">Koclo AI Mobile</h3>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mb-6">Application principale de surveillance vidéo en temps réel et alertes intelligentes.</p>
                </div>
                <div className="flex gap-2">
                  <a href="/assets/KocloAI.apk" download className="flex-1 bg-surface-container hover:bg-primary hover:text-white transition-colors text-center py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">android</span> APK
                  </a>
                </div>
              </div>

              {/* Koclo Collect */}
              <div className="glass-card p-6 bg-white border border-outline-variant hover:border-primary transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">dataset</span>
                    </div>
                    <h3 className="text-title-lg font-bold">koclo_collect</h3>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mb-6">Application dédiée à la collecte d'images et données de santé sur le terrain.</p>
                </div>
                <div className="flex gap-2">
                  <a href="/assets/collect_koclo.apk" download className="flex-1 bg-surface-container hover:bg-secondary hover:text-white transition-colors text-center py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">android</span> APK
                  </a>
                </div>
              </div>

              {/* Koclo Backend IA */}
              <div className="glass-card p-6 bg-white border border-outline-variant hover:border-primary transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined">dns</span>
                    </div>
                    <h3 className="text-title-lg font-bold">Backend IA Local</h3>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mb-6">Serveur FastAPI embarquant YOLOv11(surveillance) et EfficientNetB0 (diagnostic santé par photo) pour le traitement entièrement local.</p>
                </div>
                <a href="https://github.com/elievik/koclo_backend_ia" target="_blank" rel="noopener noreferrer" className="w-full bg-surface-container hover:bg-tertiary hover:text-white transition-colors text-center py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">code</span> Voir le code sur GitHub
                </a>
              </div>

              {/* ESP32 Firmware */}
              <div className="glass-card p-6 bg-white border border-outline-variant hover:border-primary transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <span className="material-symbols-outlined">memory</span>
                    </div>
                    <h3 className="text-title-lg font-bold">Firmware ESP32-CAM</h3>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mb-6">Code source C++ (Arduino) pour les caméras de surveillance du poulailler.</p>
                </div>
                <a href="/assets/esp32_cam_client.ino" download className="w-full bg-surface-container hover:bg-orange-500 hover:text-white transition-colors text-center py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">code</span> Firmware (.ino)
                </a>
              </div>

              {/* Admin Collect */}
              <div className="glass-card p-6 bg-white border border-outline-variant hover:border-primary transition-colors flex flex-col justify-between lg:col-span-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600">
                      <span className="material-symbols-outlined">admin_panel_settings</span>
                    </div>
                    <h3 className="text-title-lg font-bold">Koclo Admin Dashboard</h3>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mb-6">Interface d'administration Web pour la gestion globale des datasets et des utilisateurs de la ferme.</p>
                </div>
                <a href="https://admin.koclo.ai" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                  Accéder au Dashboard Web <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>

            </div>

            {/* Vidéo de Déploiement */}
            <div className="glass-card p-8 bg-surface-container-highest border border-outline-variant rounded-[32px]">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-headline-md">Guide de Déploiement Complet</h3>
                  <p className="text-on-surface-variant">
                    Découvrez dans cette vidéo comment configurer le routeur local, téléverser le firmware sur l'ESP32-CAM, lancer le serveur backend IA et connecter les applications mobiles sans aucun accès à internet.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-primary text-sm">check</span> Flash de l'ESP32-CAM</li>
                    <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-primary text-sm">check</span> Lancement de l'environnement virtuel Python</li>
                    <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-primary text-sm">check</span> Synchronisation IP Mobile & Backend</li>
                  </ul>
                </div>
                <div className="flex-1 w-full aspect-video bg-black rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl">
                  {/* Placeholder Vidéo */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-white text-3xl ml-1">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-xs font-semibold">
                    <span>Tutoriel de Déploiement Local</span>
                    <span>12:45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section-padding ${revealClass}`}>
          <div className="max-w-5xl mx-auto px-gutter">
            <div className="bg-on-surface rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10 space-y-8">
                <h2 className="text-display-xl text-white">Prêt à moderniser votre élevage ?</h2>
                <p className="text-white/60 text-body-lg max-w-xl mx-auto">Rejoignez le projet KOCLO AI et participez à la révolution technologique du secteur avicole.</p>
                <div className="flex justify-center gap-4">
                  <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-container transition-colors">Débuter l&apos;Intégration</button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-surface-container-highest w-full rounded-t-xl border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-start gap-stack-lg px-gutter py-stack-lg max-w-7xl mx-auto">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
              <span className="text-headline-md font-bold text-on-surface">KOCLO AI</span>
            </div>
            <p className="text-on-surface-variant font-body-md text-body-md">© 2026 KOCLO AI. Système de surveillance avicole intelligent, 100% hors ligne.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8">
            <div className="space-y-4">
              <h4 className="font-bold uppercase text-xs tracking-widest text-on-surface-variant">Produit</h4>
              <ul className="space-y-2">
                <li><a className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:underline decoration-primary" href="#modules">Modules</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:underline decoration-primary" href="#network">Architecture Réseau</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:underline decoration-primary" href="#tech">Stack Tech</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:underline decoration-primary" href="#technician">Téléchargements</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold uppercase text-xs tracking-widest text-on-surface-variant">Communauté</h4>
              <ul className="space-y-2">
                <li><a className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:underline decoration-primary" href="#">GitHub</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:underline decoration-primary" href="#">LinkedIn</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold uppercase text-xs tracking-widest text-on-surface-variant">Légal</h4>
              <ul className="space-y-2">
                <li><a className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:underline decoration-primary" href="#">Confidentialité</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:underline decoration-primary" href="#">Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
