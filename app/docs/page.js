import InstallationStepper from "./InstallationStepper";

export const metadata = {
  title: "KOCLO AI | Deployment & Resources",
};

const downloads = [
  {
    icon: "hub",
    iconBg: "bg-primary-container/10 text-primary",
    version: "v2.4.1",
    title: "Backend Server",
    desc: "Core orchestration engine and database manager for poultry telemetry.",
    size: "450MB",
    date: "2024-10-15",
    action: { icon: "download", label: "Download Core", filled: true },
  },
  {
    icon: "dashboard",
    iconBg: "bg-secondary-container/10 text-secondary",
    version: "v2.4.0",
    title: "KOCLO AI App",
    desc: "Advanced desktop dashboard for real-time visualization and AI control.",
    size: "1.2GB",
    date: "2024-10-12",
    action: { icon: "desktop_windows", label: "Get Desktop App", filled: false },
  },
  {
    icon: "sensors",
    iconBg: "bg-tertiary-container/10 text-tertiary",
    version: "v1.1.0",
    title: "Collect_KOCLO",
    desc: "Edge node firmware for data harvesting and initial biological preprocessing.",
    size: "12MB",
    date: "2024-09-30",
    action: { icon: "memory", label: "Download Firmware", filled: true },
  },
  {
    icon: "psychology",
    iconBg: "bg-primary-container/10 text-primary",
    version: "v3.0.x",
    title: "AI Models (Base)",
    desc: "Pre-trained weights for bird health detection and behavioral analysis.",
    size: "3.4GB",
    date: "2024-11-01",
    action: { icon: "model_training", label: "Download Weights", filled: false },
  },
  {
    icon: "code",
    iconBg: "bg-secondary-container/10 text-secondary",
    version: "v0.8-beta",
    title: "API / SDK",
    desc: "Client libraries for Python, Node.js, and C++ for custom integrations.",
    size: "85MB",
    date: "2024-10-20",
    action: { icon: "terminal", label: "Access SDK", filled: true },
  },
  {
    icon: "auto_stories",
    iconBg: "bg-tertiary-container/10 text-tertiary",
    version: "LATEST",
    title: "Documentation",
    desc: "Complete PDF bundle of technical guides and user manuals for offline use.",
    size: "48MB",
    date: "2024-11-05",
    action: { icon: "picture_as_pdf", label: "Download PDFs", filled: false },
  },
];

const roadmap = [
  {
    version: "v1: Genesis",
    desc: "Initial data collection framework and basic hardware communication protocols.",
    status: "COMPLETED - Q1 2024",
    icon: "check",
    state: "done",
  },
  {
    version: "v2: Intelligent Vision",
    desc: "Integration of Edge AI and real-time behavioral alerting systems for diverse poultry types.",
    status: "ACTIVE RELEASE",
    icon: "play_arrow",
    state: "active",
  },
  {
    version: "v3: Predictive Growth",
    desc: "Advanced forecasting models for growth cycles and resource optimization.",
    status: "PLANNED - Q1 2025",
    icon: "hourglass_empty",
    state: "planned",
  },
  {
    version: "v4: Multi-Site Fleet",
    desc: "Management dashboard for large-scale operations across multiple geographic locations.",
    status: "PLANNED - Q2 2025",
    icon: "layers",
    state: "planned",
  },
  {
    version: "v5: Bio-Cloud Sync",
    desc: "Decentralized bio-data storage and global poultry health collaborative network.",
    status: "RESEARCH PHASE - 2026",
    icon: "cloud",
    state: "planned",
  },
];

export default function DocsPage() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
        <div className="flex justify-between items-center h-full px-gutter max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-headline-md font-bold text-primary">KOCLO AI</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/">Project</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/#modules">Modules</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/#architecture">AI</a>
            <a className="text-primary font-semibold border-b-2 border-primary py-1" href="/docs">Docs</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#roadmap">Roadmap</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#contact">Contact</a>
            <button className="ml-4 bg-primary text-on-primary px-6 py-2 rounded-full font-semibold hover:scale-95 transition-transform">Get Started</button>
          </div>
          <button className="md:hidden p-2 text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-section-gap">
        <div className="max-w-7xl mx-auto px-gutter">
          {/* Hero Header */}
          <header className="mb-section-gap text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary-container/10 text-secondary mb-6 border border-secondary/20">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="font-mono-label text-mono-label">VERSION 2.4.0 STABLE</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg md:text-display-xl md:font-display-xl mb-6 tracking-tight">Deployment &amp; Resources</h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              Access the complete high-performance poultry surveillance ecosystem. Download core modules, review documentation, and follow the guided integration process.
            </p>
          </header>

          {/* Downloads Center */}
          <section className="mb-section-gap" id="downloads">
            <div className="flex items-center justify-between mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg">Downloads Center</h2>
              <span className="text-body-md text-on-surface-variant">{downloads.length} Available Assets</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloads.map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-container-lowest p-stack-lg rounded-card border border-outline-variant/30 hover:border-primary/40 transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl ${item.iconBg}`}>
                      <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
                    </div>
                    <span className="text-mono-label font-mono-label bg-surface-container px-3 py-1 rounded-full text-on-surface-variant">
                      {item.version}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant mb-6 text-body-md">{item.desc}</p>
                  <div className="flex items-center gap-4 mb-8 text-on-surface-variant/70 text-[14px]">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">save</span> {item.size}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> {item.date}</span>
                  </div>
                  {item.action.filled ? (
                    <button className="w-full bg-primary text-on-primary py-4 rounded-full font-bold flex items-center justify-center gap-2 group-hover:scale-[0.98] transition-transform">
                      <span className="material-symbols-outlined">{item.action.icon}</span> {item.action.label}
                    </button>
                  ) : (
                    <button className="w-full border-2 border-primary text-primary py-4 rounded-full font-bold flex items-center justify-center gap-2 group-hover:bg-primary/5 transition-colors">
                      <span className="material-symbols-outlined">{item.action.icon}</span> {item.action.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Installation Guide Interactive Stepper */}
          <section className="mb-section-gap" id="installation">
            <div className="bg-surface-container rounded-card p-stack-lg border border-outline-variant/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="mb-stack-lg">
                <h2 className="font-headline-lg text-headline-lg mb-2">Installation Guide</h2>
                <p className="text-on-surface-variant">Complete these 8 steps to fully deploy the KOCLO ecosystem.</p>
              </div>
              <InstallationStepper />
            </div>
          </section>

          {/* Documentation Cards (Bento) */}
          <section className="mb-section-gap" id="docs">
            <h2 className="font-headline-lg text-headline-lg mb-stack-lg">Documentation Suite</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-surface-container-highest p-10 rounded-card border border-outline-variant/30 flex flex-col justify-between h-80">
                <div>
                  <span className="material-symbols-outlined text-primary text-[48px] mb-4">book_2</span>
                  <h3 className="font-headline-lg text-headline-lg mb-2">Technical Whitepaper</h3>
                  <p className="text-on-surface-variant max-w-lg">Deep dive into the architecture, bio-sensor methodologies, and AI inference logic used to track avian health at scale.</p>
                </div>
                <a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">Read Architecture Guide <span className="material-symbols-outlined">open_in_new</span></a>
              </div>
              <div className="md:col-span-4 bg-white p-10 rounded-card border border-outline-variant/30 h-80">
                <span className="material-symbols-outlined text-secondary text-[40px] mb-4">terminal</span>
                <h3 className="font-headline-md text-headline-md mb-2">API Reference</h3>
                <p className="text-on-surface-variant mb-6">Explore the REST and GraphQL endpoints for data consumption.</p>
                <a className="inline-block px-6 py-2 bg-surface-container text-on-surface font-bold rounded-full text-label-sm hover:bg-outline-variant/30" href="#">View Endpoints</a>
              </div>
              <div className="md:col-span-4 bg-white p-10 rounded-card border border-outline-variant/30 h-80 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-tertiary text-[40px] mb-4">help</span>
                  <h3 className="font-headline-md text-headline-md mb-2">FAQ</h3>
                  <p className="text-on-surface-variant">Common troubleshooting and setup questions.</p>
                </div>
                <a className="text-tertiary font-bold flex items-center gap-2" href="#">Visit Help Center</a>
              </div>
              <div className="md:col-span-4 bg-primary-container p-10 rounded-card text-on-primary-container h-80">
                <span className="material-symbols-outlined text-[40px] mb-4">assignment</span>
                <h3 className="font-headline-md text-headline-md mb-2">Project Report</h3>
                <p className="opacity-80 mb-6">Comprehensive review of development phases, metrics, and experimental results from the field.</p>
                <button className="bg-white text-primary px-6 py-2 rounded-full font-bold">Download v1.0</button>
              </div>
              <div className="md:col-span-4 bg-white p-10 rounded-card border border-outline-variant/30 h-80">
                <span className="material-symbols-outlined text-on-surface-variant text-[40px] mb-4">account_circle</span>
                <h3 className="font-headline-md text-headline-md mb-2">User Manual</h3>
                <p className="text-on-surface-variant">A step-by-step guide for non-technical farm operators and supervisors.</p>
              </div>
            </div>
          </section>

          {/* Roadmap Vertical Timeline */}
          <section className="mb-section-gap" id="roadmap">
            <h2 className="font-headline-lg text-headline-lg mb-16 text-center">Development Roadmap</h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-outline-variant/30"></div>
              <div className="space-y-24">
                {roadmap.map((item, index) => {
                  const alignLeft = index % 2 === 0;
                  const dotClass =
                    item.state === "planned"
                      ? "bg-white border-4 border-outline-variant shadow-sm"
                      : "bg-primary border-4 border-white shadow-lg";
                  const iconClass = item.state === "planned" ? "text-outline" : "text-white";
                  const statusClass =
                    item.state === "planned" ? "text-on-surface-variant" : "text-primary";

                  const content = (
                    <>
                      <h3 className="font-headline-md text-headline-md mb-2">{item.version}</h3>
                      <p className="text-on-surface-variant">{item.desc}</p>
                    </>
                  );

                  return (
                    <div key={item.version} className="relative flex items-center justify-between group">
                      <div className={`w-5/12 pr-12 hidden md:block ${alignLeft ? "text-right" : ""}`}>
                        {alignLeft ? content : <span className={`text-mono-label font-mono-label ${statusClass}`}>{item.status}</span>}
                      </div>
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 ${dotClass} ${
                          item.state === "active" ? "animate-pulse" : ""
                        }`}
                      >
                        <span className={`material-symbols-outlined text-[16px] ${iconClass}`}>{item.icon}</span>
                      </div>
                      <div className="w-5/12 pl-12">
                        <div className="bg-surface-container p-6 rounded-card border border-outline-variant/30 md:hidden mb-4">
                          {content}
                        </div>
                        <span className={`text-mono-label font-mono-label ${statusClass} ${alignLeft ? "" : "md:hidden"}`}>
                          {item.status}
                        </span>
                        {!alignLeft && <div className="hidden md:block">{content}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* About & Contact Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-start" id="contact">
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-6">About the Project</h2>
                <p className="text-body-lg text-on-surface-variant leading-relaxed">
                  KOCLO AI was developed as a senior research initiative focused on applying Computer Vision to high-density agricultural environments. Developed at the <span className="text-secondary font-semibold">Institute of Advanced Bio-Tech</span> under the supervision of <span className="text-on-surface font-semibold">Dr. Julian Vance</span>.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-headline-md text-headline-md">Author Information</h4>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-outline-variant/30">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover"
                      alt="Portrait professionnel d'un jeune chercheur tech, fond minimaliste clair, tenue moderne, éclairage studio doux."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpkTIJfDdb2uLAF6uOhrqhbMgNgGmyb6aeYBVK6HWoSveye7anECNoIU71bLHonlovo54UvfStzsu6_kJ-bnXmWM_yyEP3idP2vWZmSG8Q9jQnj37VCajtahkxZziqUlbqIo-g2R5nBJSDQ6Pt7E9LqW9o9AX9NgEPhA6rV1gkHYVOrZwMvQ3yWftFKNPBg0UD_dRECRqy0T5UiywJxQuOI3pUcIoNT760PcCzXVNJSrtvfeqQhweF"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Alex Rivera</p>
                    <p className="text-on-surface-variant text-label-sm">Lead Developer &amp; Researcher</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a className="p-4 bg-surface-container-high rounded-full hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined">alternate_email</span>
                </a>
                <a className="p-4 bg-surface-container-high rounded-full hover:bg-on-surface hover:text-white transition-all" href="#">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a className="p-4 bg-surface-container-high rounded-full hover:bg-secondary hover:text-white transition-all" href="#">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-10 rounded-card border border-outline-variant/30 shadow-sm">
              <h3 className="font-headline-md text-headline-md mb-8">Direct Contact</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Full Name</label>
                    <input className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/10 outline-none transition-all" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Email Address</label>
                    <input className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/10 outline-none transition-all" placeholder="john@example.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Inquiry Type</label>
                  <select className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/10 outline-none transition-all appearance-none">
                    <option>Technical Integration</option>
                    <option>Commercial Licensing</option>
                    <option>Research Collaboration</option>
                    <option>Bug Reporting</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Message</label>
                  <textarea className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/10 outline-none transition-all" placeholder="How can we help your facility?" rows="5"></textarea>
                </div>
                <button className="w-full bg-secondary text-on-primary py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  Send Inquiry <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-xl bg-surface-container border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-start gap-stack-lg px-gutter py-stack-lg max-w-7xl mx-auto">
          <div className="max-w-md">
            <span className="text-headline-md font-bold text-on-surface">KOCLO AI</span>
            <p className="mt-4 text-on-surface-variant font-body-md leading-relaxed">© 2024 KOCLO AI. High-performance poultry surveillance for the modern agricultural enterprise. Developed for intelligent biological monitoring.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-3">
              <span className="font-bold text-on-surface">Resources</span>
              <a className="text-on-surface-variant hover:text-primary hover:underline decoration-primary transition-all" href="#">Architecture</a>
              <a className="text-on-surface-variant hover:text-primary hover:underline decoration-primary transition-all" href="#">Tech Stack</a>
              <a className="text-on-surface-variant hover:text-primary hover:underline decoration-primary transition-all" href="#">Downloads</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-on-surface">Community</span>
              <a className="text-on-surface-variant hover:text-primary hover:underline decoration-primary transition-all" href="#">GitHub</a>
              <a className="text-on-surface-variant hover:text-primary hover:underline decoration-primary transition-all" href="#">LinkedIn</a>
              <a className="text-on-surface-variant hover:text-primary hover:underline decoration-primary transition-all" href="#">Twitter</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-on-surface">Legal</span>
              <a className="text-on-surface-variant hover:text-primary hover:underline decoration-primary transition-all" href="#">Privacy</a>
              <a className="text-on-surface-variant hover:text-primary hover:underline decoration-primary transition-all" href="#">Licensing</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
