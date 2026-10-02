import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/contentData';
import { ProcessStep } from '../types';
import { 
  Compass, 
  Cpu, 
  Code, 
  CheckCircle2, 
  Rocket, 
  RefreshCw,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Compass': return Compass;
      case 'Cpu': return Cpu;
      case 'Code': return Code;
      case 'CheckCircle2': return CheckCircle2;
      case 'Rocket': return Rocket;
      default: return RefreshCw;
    }
  };

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 relative bg-dark-900 overflow-hidden border-t border-slate-800">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/30 text-brand-violet text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            METHODOLOGY & REPEATABILITY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Engineering <span className="text-gradient-violet">Process</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A disciplined, production-focused lifecycle ensuring technical clarity, robust security, rapid iteration, and deterministic outcomes.
          </p>
        </div>

        {/* Desktop Horizontal Process Pipeline Selector */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getStepIcon(step.iconName);
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative rounded-2xl p-4 transition-all duration-300 text-left border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-dark-800 border-brand-cyan shadow-glow-md scale-105 z-10'
                    : 'bg-dark-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-dark-850'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-slate-500">
                      {step.number}
                    </span>
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-brand-blue/20 text-brand-cyan' : 'bg-dark-900 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">
                    {step.title}
                  </div>
                </div>

                {/* Connecting arrow indicator */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-20 hidden">
                    <ArrowRight className="w-4 h-4 text-slate-600" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Process Details Card */}
        <div className="rounded-3xl bg-dark-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl font-extrabold text-brand-cyan px-3 py-1 rounded bg-brand-blue/20 border border-brand-blue/30">
                  PHASE {activeStep.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {activeStep.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {activeStep.shortDesc}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  ENGINEERING ACTIVITIES & METHODOLOGY
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-900 border border-slate-800 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Deliverables Side */}
            <div className="lg:col-span-5 bg-dark-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                PHASE DELIVERABLES
              </h4>

              <div className="space-y-2.5">
                {activeStep.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-dark-950 border border-slate-800 text-xs font-mono text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Vertical Timeline Stack */}
        <div className="lg:hidden space-y-4 pt-8">
          <div className="text-xs font-mono text-slate-400 text-center uppercase tracking-wider mb-2">
            COMPLETE PHASE OVERVIEW
          </div>
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer ${
                activeStepIndex === idx ? 'bg-dark-800 border-brand-cyan text-white' : 'bg-dark-950 border-slate-800 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-brand-cyan">{step.number}</span>
                <span className="text-xs font-bold">{step.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
