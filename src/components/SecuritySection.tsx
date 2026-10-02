import React, { useState } from 'react';
import { SECURITY_FEATURES } from '../data/contentData';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  Key, 
  Terminal, 
  Eye, 
  CheckCircle,
  FileCheck,
  AlertTriangle
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0);

  const activeFeature = SECURITY_FEATURES[activeFeatureIndex];

  return (
    <section id="security" className="py-24 relative bg-dark-950 overflow-hidden border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            ZERO-TRUST SECURITY & AI PROTECTION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Security-First Engineering for <span className="text-gradient-violet">AI & Cloud Systems</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            We build defense-in-depth security into every layer of software—from OWASP LLM prompt injection firewalls to zero-trust microservice gateways and applied cryptography.
          </p>
        </div>

        {/* Security Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Security Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {SECURITY_FEATURES.map((feat, idx) => {
              const isSelected = activeFeatureIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFeatureIndex(idx)}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-dark-850 border-purple-500 shadow-glow-md'
                      : 'bg-dark-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-dark-850'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {feat.badge}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> ACTIVE INSPECTOR
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Live Security Code & Dashboard Visualizer */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-dark-900 border border-slate-800 p-6 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-xs text-slate-300 font-bold">
                    AegisShield Security Proxy Code Spec
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">TypeScript / Rust API</span>
              </div>

              {/* Code Snippet Box */}
              <div className="bg-dark-950 p-4 rounded-xl border border-slate-800/90 font-mono text-xs overflow-x-auto">
                <pre className="text-slate-300 leading-relaxed">
                  <code>{activeFeature.codeSnippet}</code>
                </pre>
              </div>

              {/* Live Threat Telemetry Counter */}
              <div className="grid grid-cols-3 gap-3 text-center font-mono">
                <div className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                  <div className="text-xs text-slate-400">PROMPT SHIELD</div>
                  <div className="text-lg font-bold text-emerald-400 mt-1">100% CLEAN</div>
                </div>

                <div className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                  <div className="text-xs text-slate-400">TOOL EXECUTION</div>
                  <div className="text-lg font-bold text-purple-400 mt-1">SANDBOXED</div>
                </div>

                <div className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                  <div className="text-xs text-slate-400">ENCRYPTION</div>
                  <div className="text-lg font-bold text-cyan-400 mt-1">AES-256-GCM</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
