import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { SERVICES_DATA, PROJECTS_DATA } from '../data/contentData';
import { AIFocusSection } from '../components/AIFocusSection';
import { AgenticAISection } from '../components/AgenticAISection';
import { ProcessSection } from '../components/ProcessSection';
import { SecuritySection } from '../components/SecuritySection';
import { WhyUsSection } from '../components/WhyUsSection';
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
  Play
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

  // Preview major 6 services on homepage
  const homepageServices = SERVICES_DATA.slice(0, 6);

  // Preview 3 selected projects on homepage
  const homepageProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="space-y-0">
      
      {/* Hero Section */}
      <Hero 
        onOpenContact={() => navigate('/contact')}
        onExploreWork={() => navigate('/projects')}
      />

      {/* Trust Capability Strip */}
      <TrustStrip />

      {/* Services Overview Section (Homepage Preview) */}
      <section className="py-24 relative bg-dark-950 overflow-hidden">
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

          {/* 6 Services Cards Grid */}
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
                    <span>Learn More & Specs</span>
                    <ArrowRight className="w-4 h-4 text-brand-cyan transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* AI Architecture Overview */}
      <AIFocusSection />

      {/* Agentic AI Section */}
      <AgenticAISection />

      {/* Selected Projects (Homepage Preview 3 Cards) */}
      <section className="py-24 relative bg-dark-950 overflow-hidden border-t border-slate-800">
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
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Security Section */}
      <SecuritySection />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* Final Homepage CTA Banner */}
      <section className="py-20 relative bg-dark-900 overflow-hidden border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Build Next-Generation Intelligent Software?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Discuss your system architecture, AI model requirements, or cloud backend migration directly with our technical principals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all shadow-glow-md flex items-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-dark-850 border border-slate-700 hover:border-slate-500 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
