import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Cpu, Github, Linkedin, Twitter, ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800 text-slate-400 py-16 text-xs relative overflow-hidden">
      
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-violet p-[1px] shadow-glow-sm">
                <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-brand-cyan" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white font-sans tracking-tight">
                {SITE_CONFIG.companyName}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Designing and engineering high-throughput software systems powered by Generative AI, LLMs, Agentic Workflows, MCP, Cybersecurity, and Scalable Cloud Architectures.
            </p>

            <div className="font-mono text-[11px] text-brand-cyan font-bold">
              {SITE_CONFIG.tagline}
            </div>
          </div>

          {/* Sitemap Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] font-bold uppercase text-slate-200 tracking-wider">
              SERVICES
            </div>
            <ul className="space-y-2 text-slate-400 font-sans">
              <li><a href="#services" className="hover:text-white transition-colors">AI & GenAI Systems</a></li>
              <li><a href="#agentic-ai" className="hover:text-white transition-colors">Agentic Workflows</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Advanced RAG</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">MCP Protocol Tools</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Cybersecurity Audit</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] font-bold uppercase text-slate-200 tracking-wider">
              ARCHITECTURE
            </div>
            <ul className="space-y-2 text-slate-400 font-sans">
              <li><a href="#ai-focus" className="hover:text-white transition-colors">AI Pipeline Topology</a></li>
              <li><a href="#agentic-ai" className="hover:text-white transition-colors">LangGraph Orchestration</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Java & Spring Boot</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Python FastAPI</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">AegisShield Proxy</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="md:col-span-2 space-y-3">
              <div className="font-mono text-[11px] font-bold uppercase text-slate-200 tracking-wider">
                COMPANY
              </div>
              <ul className="space-y-2 text-slate-400 font-sans">
                <li><a href="#projects" className="hover:text-white transition-colors">Selected Work</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Engineering Process</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Why MoDEV</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About & Leadership</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Start a Project</a></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] font-bold uppercase text-slate-200 tracking-wider">
              CONNECT
            </div>
            <div className="flex items-center gap-3">
              <a href={SITE_CONFIG.socialLinks.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socialLinks.twitter} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <div>
            © {SITE_CONFIG.year} {SITE_CONFIG.companyName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">SOC2 & HIPAA Ready Architecture</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-brand-cyan transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
