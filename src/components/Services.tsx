import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/contentData';
import { ServiceItem } from '../types';
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
  CheckCircle2,
  X,
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForContact: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon mapping helper
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
    <section id="services" className="py-24 relative bg-dark-950 overflow-hidden">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            CORE ENGINEERING CAPABILITIES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Solutions Built for the{' '}
            <span className="text-gradient-cyan-blue">Intelligent Era</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            From autonomous agent orchestrators and custom RAG infrastructure to high-throughput Java microservices and security firewalls.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative rounded-2xl bg-gradient-to-b from-dark-850/90 to-dark-900/90 border border-slate-800 hover:border-brand-blue/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-blue/10 cursor-pointer flex flex-col justify-between"
              >
                {/* Highlight Glow Border for Key Services */}
                {service.highlight && (
                  <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet rounded-t-2xl" />
                )}

                <div>
                  {/* Top Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-dark-800 border border-slate-700/80 group-hover:border-brand-cyan/40 group-hover:bg-brand-blue/20 transition-all duration-300 shadow-glow-sm">
                      <IconComponent className="w-6 h-6 text-brand-cyan group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-brand-cyan transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-cyan mb-2">
                    {service.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 border border-slate-800 text-slate-400 group-hover:border-slate-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action link */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 text-brand-cyan transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detailed Modal / Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-dark-900 border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-blue/20 border border-brand-blue/40 text-brand-cyan">
                  {React.createElement(getIcon(selectedService.iconName), { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-brand-cyan font-bold tracking-wider">
                    {selectedService.category} • {selectedService.number}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg bg-dark-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Detailed Body */}
            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {selectedService.detailedDescription}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  KEY TECHNICAL DELIVERABLES & CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 bg-dark-950 p-3 rounded-xl border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  TECHNOLOGY ENGINES USED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-brand-blue/15 text-brand-cyan border border-brand-blue/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForContact(serviceName);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all shadow-glow-sm"
              >
                Request Architecture Proposal for {selectedService.title}
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
