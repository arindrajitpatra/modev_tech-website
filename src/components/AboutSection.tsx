import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { TEAM_MEMBERS } from '../data/contentData';
import { 
  Users, 
  Target, 
  ShieldCheck, 
  Cpu, 
  Github, 
  Linkedin, 
  Sparkles,
  Award
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-dark-950 overflow-hidden border-t border-slate-800">
      
      {/* Background radial light */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/30 text-brand-violet text-xs font-mono font-bold uppercase">
            <Users className="w-3.5 h-3.5" />
            COMPANY MISSION & LEADERSHIP
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="text-gradient-violet">Technical Excellence</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Founded by AI researchers and principal distributed systems architects, MoDEV Technology builds the software infrastructure powering the intelligent enterprise era.
          </p>
        </div>

        {/* Company Core Story & Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
            <div className="p-2.5 rounded-xl bg-brand-blue/15 text-brand-cyan w-fit border border-brand-blue/30">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">AI-First Core</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We engineer intelligent systems around foundation models, vector embeddings, and Model Context Protocol (MCP) tool integration.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
            <div className="p-2.5 rounded-xl bg-brand-violet/15 text-brand-violet w-fit border border-brand-violet/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Zero-Trust Security</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Security is built into line zero. We defend against prompt injections, jailbreaks, and data leakage across every deployment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 w-fit border border-emerald-500/30">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Deterministic Quality</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We enforce strict type safety (TypeScript, Java), high test coverage, and benchmark evaluation for hallucination rates.
            </p>
          </div>
        </div>

        {/* Core Leadership & Engineering Team */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">
              Engineering Leadership
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Meet the architects behind MoDEV Technology's intelligent system platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="rounded-2xl bg-dark-900 border border-slate-800 p-6 space-y-4 hover:border-slate-700 transition-colors">
                <div>
                  <h4 className="text-lg font-bold text-white">{member.name}</h4>
                  <div className="text-xs font-mono text-brand-cyan mt-0.5">{member.role}</div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {member.bio}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">CORE EXPERTISE</div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((exp, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-300 border border-slate-800">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3 text-slate-400">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
