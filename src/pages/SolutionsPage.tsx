import React from 'react';
import { Link } from 'react-router-dom';
import { SOLUTIONS_DATA } from '../data/contentData';
import { 
  Zap, 
  Database, 
  Bot, 
  ShieldCheck, 
  Server, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  Target
} from 'lucide-react';

export const SolutionsPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return Zap;
      case 'Database': return Database;
      case 'Bot': return Bot;
      case 'ShieldCheck': return ShieldCheck;
      case 'Server': return Server;
      default: return Lock;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-brand-violet/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-violet/20 border border-brand-violet/30 text-brand-violet text-xs font-mono font-bold uppercase">
            <Target className="w-3.5 h-3.5" />
            BUSINESS VALUE & OUTCOMES
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Solutions for <span className="text-gradient-violet">Business Impact</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300">
            While our Services page details WHAT we build technically, our Solutions page demonstrates the specific BUSINESS PROBLEMS we solve for enterprises.
          </p>
        </div>

        {/* Business Solutions Grid */}
        <div className="space-y-8">
          {SOLUTIONS_DATA.map((sol) => {
            const IconComponent = getIcon(sol.iconName);
            return (
              <div
                key={sol.id}
                className="rounded-3xl bg-dark-900 border border-slate-800 p-8 shadow-xl hover:border-brand-violet/40 transition-all duration-300 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-brand-violet/20 border border-brand-violet/40 text-brand-violet">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {sol.title}
                    </h2>
                  </div>

                  <Link
                    to={`/services/${sol.relatedServiceSlug}`}
                    className="px-4 py-2 rounded-xl text-xs font-mono bg-dark-850 hover:bg-dark-800 border border-slate-700 text-brand-cyan flex items-center gap-2 w-fit"
                  >
                    <span>View Technical Service Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Problem vs Outcome */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-dark-950 border border-red-500/20 space-y-2">
                    <div className="text-xs font-mono font-bold text-red-400 uppercase">THE BUSINESS PROBLEM</div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {sol.businessProblem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-dark-950 border border-brand-violet/30 space-y-2">
                    <div className="text-xs font-mono font-bold text-brand-violet uppercase">THE ENGINEERED OUTCOME</div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {sol.solutionOutcome}
                    </p>
                  </div>
                </div>

                {/* Impact Metrics Pill Strip */}
                <div className="space-y-3">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase">VERIFIED IMPACT METRICS</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {sol.impactMetrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-xl bg-dark-950 border border-slate-800 text-xs font-mono text-brand-cyan font-semibold flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-dark-900 border border-slate-800 p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold text-white">Have a Unique Business Challenge?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our principal engineers conduct architectural feasibility reviews to analyze your workflow constraints and ROI trajectory.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all shadow-glow-sm"
          >
            <span>Schedule Architectural Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
