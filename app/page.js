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
            <a className="text-on-surface-variant hover:text-primary font-medium transition-colors" href="#architecture">Architecture</a>
            <a className="text-on-surface-variant hover:text-primary font-medium transition-colors" href="#tech">Tech</a>
            <a className="text-on-surface-variant hover:text-primary font-medium transition-colors" href="/docs">Docs</a>
            <button className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform active:scale-95">
              Get Started
            </button>
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
                alt="Illustration isométrique 3D d'une infrastructure agricole high-tech montrant une caméra ESP32-CAM connectée à un serveur, diffusant des données vers un smartphone et un tableau de bord web, dans des tons verts émeraude et bleus sur fond blanc minimaliste."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBRHs293kvgQTfnZwY8Obg6HcUyzvMClk0YPGtlpMWT34eW_bhoWvEYrntJ4kYLo2TUlbXT1uErJIxfnxrBtJOasdMUz7O_FWvEYYivwdGcd_hF77cW_65YwWIyCmpKEsksvKmABuz4uHSIVEcZXFhYWyvDqwq_j9zqcp74GAgnt7P20f6buEmZI0DDENCcJYPkCQw5kysIua_ikIDgH1eAaR5FHwH9AYM0jxjGamlLC8o3pyxNFup"
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
                <h3 className="text-headline-md mb-2">3 Modules</h3>
                <p className="text-on-surface-variant">Intégration verticale de la capture à l&apos;analyse.</p>
              </div>
              <div className="glass-card p-stack-lg text-center hover:translate-y-[-8px] transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                <h3 className="text-headline-md mb-2">Multi-Tech</h3>
                <p className="text-on-surface-variant">FastAPI, Next.js, Flutter &amp; ESP32.</p>
              </div>
              <div className="glass-card p-stack-lg text-center hover:translate-y-[-8px] transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl text-tertiary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
                <h3 className="text-headline-md mb-2">IA State-art</h3>
                <p className="text-on-surface-variant">Modèles YOLOv8 et EfficientNetB0.</p>
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
                <p className="text-body-lg text-on-surface-variant">Trois piliers fondamentaux pour une gestion de bout en bout de votre ferme avicole.</p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-outline-variant mx-12 mb-5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="glass-card overflow-hidden group">
                <div className="h-64 bg-surface-container relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Un travailleur dans une ferme avicole moderne capture des images de poulets avec un smartphone, l'interface affichant des cadres de détection en temps réel."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Tx8ewqkz_KKToA-5Pn4xNjWRI48A9vU88uQkee-YlMxhbVMsy00KRQQ2GyMHMq1GKG48p0VALiZsuG3OLcJJJZ5F2NI1X6qqlP6S69go6U1MphFyVK6_ai0lWCLSu9keIbQZWzXiMuqAxDFEd40Mjinz3zIKSKhjl-Qbe8epldU-T49OYYXEzCdZpzCD-mNVOedLhd3SPx4fNMrzXH-56G-M8a5UByUn1hKlQmqesM0wt8drlECc"
                  />
                  <div className="absolute top-4 left-4 chip bg-primary text-white">Capture</div>
                </div>
                <div className="p-stack-lg space-y-4">
                  <h3 className="text-headline-md">Collect_KOCLO</h3>
                  <p className="text-on-surface-variant">Application mobile dédiée à la capture haute fidélité et au pré-étiquetage sur le terrain.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Validation temps réel</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Synchronisation hors-ligne</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Métadonnées automatiques</li>
                  </ul>
                </div>
              </div>
              <div className="glass-card overflow-hidden group">
                <div className="h-64 bg-surface-container relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Un tableau de bord web sophistiqué sur un large écran affichant des visualisations de données complexes, des cartes de chaleur et des statistiques de santé avicole, dans une palette blanc et vert émeraude."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_2PwQl7jqj0MW2yDfRBL2pr1DXh83wD6eVSdC5zFzXgQEgokSNmJj9tbejN8I5ki4IOi3vtDClUHv_uN9kxqf2fzFJ9GYyoGCvyAWYc9cFIA8umeMQNWLaZmxu4arwWMecB3K6FmrajiWVXDRM0G_13kQ9ZQY4D7NxGhkvvbpCCntTnnGjs4ZFHP6kbES76Pm6fuk8QyEXG4nr_VL6TUAnvkudf3fsJtfJmq9Mt7ZBk45dBR7-3gy"
                  />
                  <div className="absolute top-4 left-4 chip bg-secondary text-white">Dashboard</div>
                </div>
                <div className="p-stack-lg space-y-4">
                  <h3 className="text-headline-md">Plateforme Web</h3>
                  <p className="text-on-surface-variant">Tour de contrôle centralisée pour la gestion des datasets et le monitoring des performances.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm font-medium"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Gestion de datasets</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Visualisation analytique</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Administration utilisateur</li>
                  </ul>
                </div>
              </div>
              <div className="glass-card overflow-hidden group">
                <div className="h-64 bg-surface-container relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Un écran de smartphone affichant des alertes actives pour des problèmes de santé avicole, avec des icônes claires pour la température, la densité des oiseaux et la détection de maladies."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-GdrFyaFgXfPujhiTKzfWsleC7rF8yFPz17cp_BRM36fLm_cBx-0NoNKcm0OcN9HGC2VF_rq8LJDKOzt-8eWpSKkt-V-RnrnS7ogmEfgUF6gBD21cTpywyEXL81NnfUqZiAyzWqat6iCffrT1-S7oXSTZoKS3Q12_TZ3aJzd9uIyqsaom6UmyoRWJM_RjYt_-bWJ50AzgA3opw0mvS-VES6lVpaAIzVOPVEvpdRrjoMGfeAf_wVn3"
                  />
                  <div className="absolute top-4 left-4 chip bg-tertiary text-white">Monitoring</div>
                </div>
                <div className="p-stack-lg space-y-4">
                  <h3 className="text-headline-md">KOCLO AI Mobile</h3>
                  <p className="text-on-surface-variant">Alertes proactives et historique complet pour une intervention rapide en tout lieu.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm font-medium"><span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> Notifications Push</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> Historique d&apos;incidents</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> Accès API sécurisé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Architecture Section */}
        <section className={`section-padding bg-surface-container-low ${revealClass}`} id="architecture">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="text-center mb-16">
              <h2 className="text-headline-lg">Architecture <span className="text-primary">Globale</span></h2>
              <p className="text-on-surface-variant">Un flux de données fluide et sécurisé, du hardware à l&apos;interface utilisateur.</p>
            </div>
            <div className="glass-card p-12 bg-white relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error/40"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary-container/40"></div>
                <div className="w-3 h-3 rounded-full bg-primary/40"></div>
              </div>
              <img
                className="w-full"
                alt="Diagramme d'architecture détaillé pour un système de surveillance IA, avec des nœuds pour les caméras ESP32-CAM, des serveurs edge locaux, un moteur cloud IA central YOLOv8, et des points de livraison vers les applications mobile et web."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDghzW9TyprzWIs4_5aNxB082w87DQytu-lMfV9nYXgQFbK6Vz_zx8VcKf-M-5gXe50H-zTBn-g14J2RI67zuX37RFNtFRPLz-HCurByCOU72MNBQbzAMjkNovNZaR-5VNYwhzyfzi0IjuDLyvbhIrkw75Hr84H_Y2YKUhMGM4a0BB5-FyHMZwG5RtDcOPgcaxmFugAa-zjYw4yjMo6BHVM4Vh_gidPDWW79VEMhM9hws54UoBPfbIg"
              />
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
                <h3 className="text-headline-md mb-4">YOLOv8 Engine</h3>
                <p className="text-on-surface-variant mb-6">Implémentation temps réel pour la détection précise des volailles, des intrus et des anomalies de comportement dans des environnements denses.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface p-3 rounded-xl text-xs font-bold text-center">98.5% Accuracy</div>
                  <div className="bg-surface p-3 rounded-xl text-xs font-bold text-center">30 FPS Video</div>
                </div>
              </div>
              <div className="glass-card p-stack-lg bg-white border-l-8 border-secondary">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm font-mono text-secondary bg-secondary/10 px-3 py-1 rounded">Image Classification</span>
                  <span className="material-symbols-outlined text-secondary text-4xl">schema</span>
                </div>
                <h3 className="text-headline-md mb-4">EfficientNetB0</h3>
                <p className="text-on-surface-variant mb-6">Optimisation pour l&apos;analyse de santé. Identification des pathologies aviaires et stades de croissance avec une efficacité de calcul maximale.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface p-3 rounded-xl text-xs font-bold text-center">Lightweight Model</div>
                  <div className="bg-surface p-3 rounded-xl text-xs font-bold text-center">Cloud &amp; Edge Ready</div>
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
            <p className="text-on-surface-variant font-body-md text-body-md">© 2024 KOCLO AI. High-performance poultry surveillance. Solution intelligente de vision par ordinateur pour l&apos;industrie avicole.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8">
            <div className="space-y-4">
              <h4 className="font-bold uppercase text-xs tracking-widest text-on-surface-variant">Produit</h4>
              <ul className="space-y-2">
                <li><a className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:underline decoration-primary" href="#">Architecture</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:underline decoration-primary" href="#">Tech</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:underline decoration-primary" href="#">Downloads</a></li>
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
