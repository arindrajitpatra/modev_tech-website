import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { SERVICES_DATA, PROJECTS_DATA, SOLUTIONS_DATA } from '../data/contentData';
import { AIFocusSection } from '../components/AIFocusSection';
import { AgenticAISection } from '../components/AgenticAISection';
import { TechEcosystem } from '../components/TechEcosystem';
import { ProcessSection } from '../components/ProcessSection';
import { SecuritySection } from '../components/SecuritySection';
import { WhyUsSection } from '../components/WhyUsSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
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
  Play,
  TrendingUp,
  Target
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

  const getSolutionIcon = (name: string) => {
    switch (name) {
      case 'Zap': return Zap;
      case 'Database': return Database;
      case 'Bot': return Bot;
      case 'ShieldCheck': return ShieldCheck;
      case 'Server': return Server;
      default: return Code;
    }
  };

  const homepageServices = SERVICES_DATA.slice(0, 6);
  const homepageProjects = PROJECTS_DATA.slice(0, 3);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      
      {/* #home - Hero Section */}
      <Hero 
        onOpenContact={scrollToContact}
        onExploreWork={scrollToProjects}
      />

      {/* #trust - Trust Capability Strip */}
      <div id="trust">
        <TrustStrip />
      </div>

      {/* #services - Services Overview Section */}
      <section id="services" className="py-24 relative bg-dark-950 overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                CORE CAPABILITIES PREVIEW
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Engineering Solutions Built for the <span className="text-gradient-cyan-blue">Intelligent Era</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                We design and build production software systems spanning Generative AI, Multi-Agent Mesh, Advanced RAG, and Cloud Infrastructure.
              </p>
            </div>

            <Link
              to="/services"
              className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-brand-blue/20 hover:bg-brand-blue/30 border border-brand-blue/40 text-brand-cyan transition-all flex items-center gap-2 w-fit shadow-glow-sm"
            >
              <span>Explore All 10 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageServices.map((service) => {
              const IconComponent = getServiceIcon(service.iconName);
              return (
                <div
                  key={service.id}
                  className="group relative rounded-2xl bg-gradient-to-b from-dark-850/90 to-dark-900/90 border border-slate-800 hover:border-brand-blue/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-blue/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-xl bg-dark-800 border border-slate-700/80 group-hover:border-brand-cyan/40 group-hover:bg-brand-blue/20 transition-all duration-300 shadow-glow-sm">
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
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-cyan group-hover:text-white transition-colors"
                  >
                    <span>Inspect Modular Service Specs</span>
                    <ArrowRight className="w-4 h-4 text-brand-cyan transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* #ai-focus - AI Architecture Overview */}
      <AIFocusSection />

      {/* #agentic-ai - Agentic AI Workflow Simulator */}
      <AgenticAISection />

      {/* #solutions - Solutions Preview */}
      <section id="solutions" className="py-24 relative bg-dark-950 overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/30 text-brand-violet text-xs font-mono font-bold uppercase">
                <Target className="w-3.5 h-3.5" />
                BUSINESS OUTCOMES & SOLUTIONS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Solving Complex <span className="text-gradient-violet">Business Problems</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                How our technical architectures translate into enterprise ROI, process speed, and security risk reduction.
              </p>
            </div>

            <Link
              to="/solutions"
              className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-brand-violet/20 hover:bg-brand-violet/30 border border-brand-violet/40 text-brand-violet transition-all flex items-center gap-2 w-fit shadow-glow-sm"
            >
              <span>View All Business Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOLUTIONS_DATA.slice(0, 3).map((sol) => {
              const IconComp = getSolutionIcon(sol.iconName);
              return (
                <div key={sol.id} className="rounded-2xl bg-dark-900 border border-slate-800 p-6 space-y-4 hover:border-brand-violet/40 transition-all">
                  <div className="p-3 rounded-xl bg-brand-violet/20 border border-brand-violet/40 text-brand-violet w-fit">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{sol.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{sol.solutionOutcome}</p>
                  <div className="pt-2">
                    <div className="text-[10px] font-mono text-brand-cyan font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      {sol.impactMetrics[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* #projects - Selected Projects (Homepage Preview 3 Cards) */}
      <section id="projects" className="py-24 relative bg-dark-950 overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                SELECTED WORK PREVIEW
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Featured <span className="text-gradient-cyan-blue">Architectures & Systems</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Real production case studies demonstrating zero-trust multi-agent mesh, graph RAG, and microservice infrastructure.
              </p>
            </div>

            <Link
              to="/projects"
              className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all flex items-center gap-2 w-fit shadow-glow-sm"
            >
              <span>View All Projects →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homepageProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-dark-900 border border-slate-800 hover:border-brand-blue/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl flex flex-col justify-between"
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

                  <div className="p-6 space-y-3">
                    <div className="text-[11px] font-mono font-semibold uppercase text-brand-cyan">
                      {project.category}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-dark-950/80 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-xs font-semibold text-brand-cyan hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Dedicated Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* #tech - Technology Ecosystem Overview */}
      <div id="tech">
        <TechEcosystem />
      </div>

      {/* #process - Engineering Process Section */}
      <div id="process">
        <ProcessSection />
      </div>

      {/* #security - Security Section */}
      <div id="security">
        <SecuritySection />
      </div>

      {/* #why-us - Why Us Section */}
      <div id="why-us">
        <WhyUsSection />
      </div>

      {/* #about - About & Leadership Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* #contact - Contact & Inquiry Section */}
      <div id="contact">
        <ContactSection />
      </div>

    </div>
  );
};
