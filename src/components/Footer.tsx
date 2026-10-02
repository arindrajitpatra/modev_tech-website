import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';
import { Cpu, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800 text-slate-400 py-16 text-xs relative overflow-hidden">
      
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />

      <div className="w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-12">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-violet p-[1px] shadow-glow-sm">
                <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-brand-cyan" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white font-sans tracking-tight">
                {SITE_CONFIG.companyName}
              </span>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
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
              <li><Link to="/services/ai-generative-ai" className="hover:text-white transition-colors">AI & GenAI</Link></li>
              <li><Link to="/services/agentic-ai" className="hover:text-white transition-colors">Agentic AI</Link></li>
              <li><Link to="/services/llm-rag" className="hover:text-white transition-colors">LLM & RAG</Link></li>
              <li><Link to="/services/mcp" className="hover:text-white transition-colors">MCP Protocol</Link></li>
              <li><Link to="/services/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors font-semibold text-brand-cyan">View All Services →</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] font-bold uppercase text-slate-200 tracking-wider">
              SOLUTIONS & PORTFOLIO
            </div>
            <ul className="space-y-2 text-slate-400 font-sans">
              <li><Link to="/solutions" className="hover:text-white transition-colors">AI Automation</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Knowledge Systems</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">All Projects</Link></li>
              <li><Link to="/technologies" className="hover:text-white transition-colors">Tech Ecosystem</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] font-bold uppercase text-slate-200 tracking-wider">
              COMPANY
            </div>
            <ul className="space-y-2 text-slate-400 font-sans">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Leadership Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors font-semibold text-brand-cyan">Start a Project →</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] font-bold uppercase text-slate-200 tracking-wider">
              CONNECT
            </div>
            <div className="flex items-center gap-3">
              <a href={SITE_CONFIG.socialLinks.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socialLinks.twitter} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
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
              className="flex items-center gap-1 text-slate-300 hover:text-brand-cyan transition-colors font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
