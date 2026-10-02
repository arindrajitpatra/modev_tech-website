import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/contentData';
import { 
  Cpu, 
  Bot, 
  Database, 
  Layers, 
  MessageSquareCode, 
  Zap, 
  ShieldCheck, 
  Lock, 
  Server, 
  Code,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return Cpu;
      case 'Bot': return Bot;
      case 'Database': return Database;
      case 'Layers': return Layers;
      case 'MessageSquareCode': return MessageSquareCode;
      case 'Zap': return Zap;
      case 'ShieldCheck': return ShieldCheck;
      case 'Lock': return Lock;
      case 'Server': return Server;
      default: return Code;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      
      {/* Background ambient glowing background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            ENTERPRISE CAPABILITIES DIRECTORY
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Services Built for the <span className="text-gradient-cyan-blue">Intelligent Era</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300">
            Select a service capability below to inspect architecture specifications, deliverables, and production case studies.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-gradient-to-b from-dark-850/90 to-dark-900/90 border border-slate-800 hover:border-brand-blue/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-blue/10 flex flex-col justify-between"
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet rounded-t-2xl" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-xl bg-dark-800 border border-slate-700/80 group-hover:border-brand-cyan/40 group-hover:bg-brand-blue/20 transition-all duration-300 shadow-glow-sm">
                      <IconComponent className="w-6 h-6 text-brand-cyan group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-brand-cyan transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-cyan mb-2">
                    {service.category}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 border border-slate-800 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-cyan group-hover:text-white transition-colors"
                >
                  <span>Explore Architecture Specifications</span>
                  <ArrowRight className="w-4 h-4 text-brand-cyan transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Callout */}
        <div className="rounded-3xl bg-dark-900 border border-slate-800 p-8 text-center max-w-4xl mx-auto space-y-4 shadow-xl">
          <h3 className="text-xl font-bold text-white">Need a Multi-Domain Engineering Solution?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            We frequently combine Agentic AI, MCP Tool Integration, Java Backends, and Prompt Injection Defense into unified custom solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all shadow-glow-sm"
          >
            <span>Request Custom Architecture Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
