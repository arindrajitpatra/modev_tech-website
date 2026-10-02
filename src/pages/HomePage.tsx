import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { SERVICES_DATA, PROJECTS_DATA, TECH_CATEGORIES } from '../data/contentData';
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Bot, 
  Database, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Server, 
  Code,
  CheckCircle2,
  Workflow,
  TrendingUp,
  Target,
  ArrowUpRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return Cpu;
      case 'Bot': return Bot;
      case 'Database': return Database;
      case 'Layers': return Layers;
      case 'ShieldCheck': return ShieldCheck;
      case 'Zap': return Zap;
      case 'Server': return Server;
      default: return Code;
    }
  };

  // Preview 6 core services for compact homepage
  const homepageServices = SERVICES_DATA.slice(0, 6);

  // Preview 3 curated projects for compact homepage
  const homepageProjects = PROJECTS_DATA.slice(0, 3);

  // Key technologies highlighted for homepage preview
  const featuredTechItems = TECH_CATEGORIES.flatMap(c => c.items).filter(i => i.featured).slice(0, 8);

  return (
    <div className="space-y-0">
      
      {/* Hero Section */}
      <Hero 
        onOpenContact={() => navigate('/contact')}
        onExploreWork={() => navigate('/projects')}
      />

      {/* Capability Ticker Strip */}
      <TrustStrip />

      {/* 1. Core Services Preview */}
      <section className="py-20 relative bg-dark-950 overflow-hidden border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                CORE CAPABILITIES PREVIEW
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Engineering Solutions for the <span className="text-gradient-cyan-blue">Intelligent Era</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                We engineer enterprise software systems powered by Generative AI, LLMs, Agentic Workflows, MCP, and Cloud Architecture.
              </p>
            </div>

            <Link
              to="/services"
              className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-brand-blue/20 hover:bg-brand-blue/30 border border-brand-blue/40 text-brand-cyan transition-all flex items-center gap-2 w-fit shadow-glow-sm"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageServices.map((service) => {
              const IconComponent = getServiceIcon(service.iconName);
              return (
                <div
                  key={service.id}
                  className="group relative rounded-2xl bg-gradient-to-b from-dark-850/90 to-dark-900/90 border border-slate-800 hover:border-brand-blue/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-dark-800 border border-slate-700/80 group-hover:border-brand-cyan/40 group-hover:bg-brand-blue/20 transition-all duration-300 shadow-glow-sm">
                        <IconComponent className="w-5 h-5 text-brand-cyan group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-brand-cyan transition-colors">
                        {service.number}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-cyan mb-1.5">
                      {service.category}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-cyan group-hover:text-white transition-colors"
                  >
                    <span>Learn More & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-cyan transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. AI & Agentic Engineering Feature Snapshot */}
      <section className="py-20 relative bg-dark-900 overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 border border-slate-800 p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/30 text-brand-violet text-xs font-mono font-bold uppercase">
                  <Workflow className="w-3.5 h-3.5" />
                  AUTONOMOUS AGENT & RAG SYSTEMS
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Multi-Agent Mesh & <span className="text-gradient-violet">Model Context Protocol</span>
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  We build stateful multi-agent networks using LangGraph and Model Context Protocol (MCP). Agents dynamically decompose goals, execute tools safely in ephemeral sandboxes, and self-correct.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-dark-950 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                    <span>LangGraph Memory Checkpoints</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-dark-950 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                    <span>Model Context Protocol (MCP)</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    to="/services/agentic-ai"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all shadow-glow-sm"
                  >
                    <span>Explore Agentic AI Capabilities</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Node Diagram Card */}
              <div className="lg:col-span-5 bg-dark-950 p-6 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">PIPELINE CONNECTOR SNAPSHOT</div>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-brand-cyan">
                    Planner Node → Task DAG Decomposition
                  </div>
                  <div className="p-3 rounded-xl bg-brand-violet/15 border border-brand-violet/30 text-brand-violet">
                    MCP Server Connector → ephem-sandbox:5432
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    AegisShield Guardrail → Verification PASS
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Selected Projects Preview (Curated 3 Cards) */}
      <section className="py-20 relative bg-dark-950 overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                SELECTED WORK PREVIEW
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured <span className="text-gradient-cyan-blue">Architectures & Systems</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                Production-grade case studies across multi-agent platforms, knowledge search engines, and enterprise security firewalls.
              </p>
            </div>

            <Link
              to="/projects"
              className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all flex items-center gap-2 w-fit shadow-glow-sm"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homepageProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-dark-900 border border-slate-800 hover:border-brand-blue/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-dark-950">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                    {project.badge && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-dark-950/90 border border-brand-cyan/40 text-brand-cyan text-[10px] font-mono font-bold uppercase">
                        {project.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="text-[10px] font-mono font-semibold uppercase text-brand-cyan">
                      {project.category}
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-dark-950/80 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-xs font-semibold text-brand-cyan hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Technology Stack Snapshot */}
      <section className="py-16 relative bg-dark-900 overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-brand-cyan uppercase">ENTERPRISE STACK</span>
              <h2 className="text-2xl font-bold text-white">Modern Engineering Ecosystem</h2>
            </div>
            <Link
              to="/technologies"
              className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-dark-850 hover:bg-dark-800 border border-slate-700 flex items-center gap-2"
            >
              <span>Explore Complete Ecosystem</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
            {featuredTechItems.map((tech, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                <span className="font-bold text-white">{tech.name}</span>
                <span className="text-[10px] text-brand-cyan bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/20">
                  {tech.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Solutions & Philosophy */}
      <section className="py-20 relative bg-dark-950 overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-brand-violet uppercase">WHY MODEV TECHNOLOGY?</span>
              <h2 className="text-3xl font-extrabold text-white">
                Intelligent Software Engineering, <br />
                <span className="text-gradient-violet">Not Generic Agencies</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We are computer scientists and distributed systems architects. We build resilient, high-concurrency software systems with strict type safety, zero-trust security, and deterministic performance.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan hover:underline"
                >
                  <span>Read About Our Engineering Philosophy & Founders →</span>
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-cyan">
                <CheckCircle2 className="w-4 h-4" />
                <span>PRODUCTION GUARANTEES</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="p-2.5 rounded-lg bg-dark-950 border border-slate-800 flex items-center justify-between">
                  <span>Latency & Accuracy SLA Benchmarking</span>
                  <span className="font-mono text-brand-cyan">&lt; 250ms</span>
                </li>
                <li className="p-2.5 rounded-lg bg-dark-950 border border-slate-800 flex items-center justify-between">
                  <span>Zero-Trust Prompt Shielding</span>
                  <span className="font-mono text-emerald-400">OWASP LLM Guard</span>
                </li>
                <li className="p-2.5 rounded-lg bg-dark-950 border border-slate-800 flex items-center justify-between">
                  <span>High-Throughput Microservice Backends</span>
                  <span className="font-mono text-purple-400">50,000 req/sec</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Final Contact CTA Banner */}
      <section id="contact" className="py-20 relative bg-dark-900 overflow-hidden border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Have a Complex Problem? <br />
            <span className="text-gradient-cyan-blue">Let's Engineer the Solution.</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Tell us what you're building. We'll explore the technology, system architecture, and path to production.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all shadow-glow-md flex items-center gap-2"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="px-7 py-3.5 rounded-xl font-semibold text-xs text-slate-200 bg-dark-850 border border-slate-700 hover:border-slate-500 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
