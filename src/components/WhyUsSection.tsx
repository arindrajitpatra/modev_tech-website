import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { 
  CheckCircle2, 
  XCircle, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Zap, 
  Sparkles,
  TrendingUp,
  Terminal
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'AI System Design',
      traditional: 'Basic wrapper around standard ChatGPT API calls without memory or guardrails.',
      modev: 'Production Multi-Agent Mesh, Hybrid Graph RAG, Model Context Protocol (MCP), and custom fine-tuning.',
    },
    {
      feature: 'Security & Vulnerabilities',
      traditional: 'Standard web SSL only, prone to prompt injection and unauthorized API execution.',
      modev: 'AegisShield real-time prompt firewall, sandboxed tool execution, zero-trust JWT/mTLS microservices.',
    },
    {
      feature: 'Backend & Scalability',
      traditional: 'Simple monolithic CMS or basic Node scripts struggling above 1,000 requests.',
      modev: 'Scalable Java Spring Boot microservices, Python FastAPI event loops, Kafka streaming (50k+ req/sec).',
    },
    {
      feature: 'Knowledge Retrieval',
      traditional: 'Naive keyword or basic vector search suffering high hallucination rates.',
      modev: 'Hybrid Dense + Neo4j Graph RAG with Cohere v3.5 re-ranking and citation audit tracking.',
    },
    {
      feature: 'Engineering Rigor',
      traditional: 'No automated tests, un-typed code, lack of CI/CD deployment pipelines.',
      modev: 'Strict end-to-end TypeScript, SAST security scans, automated unit & benchmark suites.',
    }
  ];

  return (
    <section id="why-us" className="py-24 relative bg-dark-900 overflow-hidden border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            ENGINEERING PHILOSOPHY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why <span className="text-gradient-cyan-blue">{SITE_CONFIG.shortName} Technology</span>?
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            We are serious software engineers building production systems, not low-code marketers or generic web agencies.
          </p>
        </div>

        {/* Comparative Grid Table */}
        <div className="rounded-3xl bg-dark-950 border border-slate-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-12 bg-dark-850 p-4 border-b border-slate-800 text-xs font-mono font-bold uppercase text-slate-400">
            <div className="col-span-3 sm:col-span-3">CRITERIA</div>
            <div className="col-span-4 sm:col-span-4 text-slate-500">TRADITIONAL AGENCIES</div>
            <div className="col-span-5 sm:col-span-5 text-brand-cyan font-extrabold">MODEV INTELLIGENT ENGINEERING</div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 p-5 text-xs sm:text-sm items-center hover:bg-dark-900/60 transition-colors">
                
                {/* Feature Column */}
                <div className="col-span-3 font-bold text-white font-mono pr-2">
                  {item.feature}
                </div>

                {/* Traditional Column */}
                <div className="col-span-4 text-slate-400 flex items-start gap-2 pr-3">
                  <XCircle className="w-4 h-4 text-red-500/80 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item.traditional}</span>
                </div>

                {/* MoDEV Column */}
                <div className="col-span-5 text-slate-200 font-medium flex items-start gap-2 bg-brand-blue/10 p-3 rounded-xl border border-brand-blue/20">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item.modev}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
