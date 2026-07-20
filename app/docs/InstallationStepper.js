"use client";

import { useState } from "react";

const steps = [
  {
    title: "Download Backend Core",
    label: "Download Backend",
    desc: "Obtain the latest stable release of the KOCLO AI Backend. This module handles all WebSocket communications between your hardware sensors and the central visualization dashboard. Use the CLI or the direct link in the Downloads Center above.",
    code: [
      "# Clone the repository or download ZIP",
      "curl -L https://get.koclo.ai/backend/stable -o koclo-core.tar.gz",
      "tar -xvf koclo-core.tar.gz",
    ],
  },
  {
    title: "Environment Configuration",
    label: "Environment Config",
    desc: "Navigate to the extracted directory and set up your environment variables. You will need to define your API keys and local network parameters for hardware discovery.",
    code: ["cp .env.example .env", "nano .env # Edit your config here"],
  },
  {
    title: "Database Setup",
    label: "Database Setup",
    desc: "Initialize the local PostgreSQL or MongoDB instance. KOCLO AI uses a dual-db strategy for high-frequency sensor logs and relational configuration storage.",
    code: ["docker-compose up -d db", "npm run db:init"],
  },
  {
    title: "Edge Connectivity",
    label: "Edge Connectivity",
    desc: "Flash the Collect_KOCLO firmware to your IoT nodes. Ensure they are on the same subnet as the backend for the auto-discovery protocol to function correctly.",
    code: ["koclo-cli flash --device /dev/ttyUSB0 --firmware v1.1.0"],
  },
  {
    title: "AI Model Synchronization",
    label: "AI Model Sync",
    desc: "Pull the latest pre-trained health models. These are served via our global CDN and will be cached locally on your machine for low-latency inference.",
    code: ["koclo-cli models sync --profile standard-avian"],
  },
  {
    title: "Desktop Client Link",
    label: "Desktop Client Link",
    desc: "Launch the KOCLO AI Desktop App and enter your local server IP. This creates a secure tunnel for real-time video and data visualization.",
    code: ["koclo-app --link 192.168.1.100"],
  },
  {
    title: "User Authentication",
    label: "User Authentication",
    desc: "Create your primary administrative account. This account will have full access to farm parameters, alert thresholds, and system logs.",
    code: ["koclo-cli user create --role admin --email admin@farm.local"],
  },
  {
    title: "Final System Test",
    label: "Final System Test",
    desc: "Run the end-to-end diagnostic suite. This checks sensor heartbeat, database throughput, AI inference latency, and UI responsiveness.",
    code: ["koclo-cli doctor --full-report"],
  },
];

export default function InstallationStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const total = steps.length;
  const active = steps[currentStep - 1];
  const progress = (currentStep / total) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1 space-y-4">
        <div className="flex flex-col gap-2">
          {steps.map((step, index) => {
            const num = index + 1;
            const isActive = num === currentStep;
            return (
              <button
                key={step.label}
                className={`flex items-center gap-3 p-3 rounded-xl border-l-4 text-left transition-all ${
                  isActive
                    ? "border-primary bg-primary/5 text-primary font-bold"
                    : "border-transparent text-on-surface-variant hover:bg-surface-container-high"
                }`}
                onClick={() => setCurrentStep(num)}
              >
                <span className="font-mono-label">
                  {String(num).padStart(2, "0")}
                </span>{" "}
                {step.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-3 bg-white p-10 rounded-2xl shadow-sm min-h-[400px] flex flex-col justify-between border border-outline-variant/20">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              {currentStep}
            </span>
            <h3 className="font-headline-md text-headline-md">{active.title}</h3>
          </div>
          <p className="text-body-lg text-on-surface mb-8 leading-relaxed">
            {active.desc}
          </p>
          <div className="bg-surface-container rounded-lg p-6 font-mono-label text-mono-label text-secondary mb-8">
            <p className="mb-2 opacity-50"># Terminal Output / Configuration</p>
            <pre className="whitespace-pre-wrap">{active.code.join("\n")}</pre>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-mono-label text-on-surface-variant">
              Step {currentStep} of {total}
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-12">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full text-on-surface-variant font-bold hover:bg-surface-container-high transition-all disabled:opacity-40"
            onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
            disabled={currentStep === 1}
          >
            <span className="material-symbols-outlined">arrow_back</span> Previous
          </button>
          <button
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-on-primary font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20 disabled:opacity-40"
            onClick={() => setCurrentStep((s) => Math.min(total, s + 1))}
            disabled={currentStep === total}
          >
            Next Step <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
