import React from 'react';
import { Cpu, Bot, Database, Shield, Layers, Code, Server, Lock } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const capabilities = [
    { label: 'AI Engineering', icon: Cpu },
    { label: 'Agentic AI', icon: Bot },
    { label: 'LLM Systems', icon: Database },
    { label: 'Advanced RAG', icon: Layers },
    { label: 'MCP Integration', icon: Code },
    { label: 'Cybersecurity', icon: Shield },
    { label: 'Cloud & Backend', icon: Server },
    { label: 'Blockchain & ZK', icon: Lock },
  ];

  return (
    <div className="relative z-20 border-y border-slate-800/80 bg-dark-900/90 backdrop-blur-xl py-4 overflow-hidden">
      <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={index}>
                <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-slate-200 hover:text-brand-cyan transition-colors cursor-default group">
                  <span className="p-1.5 rounded-lg bg-brand-blue/10 border border-brand-blue/20 group-hover:border-brand-cyan/40 group-hover:bg-brand-cyan/15 transition-all">
                    <Icon className="w-4 h-4 text-brand-cyan" />
                  </span>
                  <span className="uppercase text-[11px] font-mono tracking-wider">{item.label}</span>
                </div>
                {index < capabilities.length - 1 && (
                  <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-brand-blue/40 shadow-glow-sm" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
