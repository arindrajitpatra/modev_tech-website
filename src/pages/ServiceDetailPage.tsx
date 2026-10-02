import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA, PROJECTS_DATA } from '../data/contentData';
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
  Workflow,
  Sparkles,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = SERVICES_DATA.find(s => s.slug === slug || s.id === slug) || SERVICES_DATA[0];

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

  const IconComponent = getIcon(service.iconName);

  // Find related projects for this service
  const relatedProjects = PROJECTS_DATA.filter(
    p => service.relatedProjectIds?.includes(p.id) || p.relatedServiceSlug === service.slug
  );

  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[400px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-brand-cyan font-bold">{service.title}</span>
        </div>

        {/* 1. Hero Section */}
        <div className="rounded-3xl bg-dark-900 border border-slate-800 p-8 sm:p-12 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl bg-brand-blue/20 border border-brand-blue/40 text-brand-cyan">
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-brand-cyan tracking-wider">
                SERVICE SPECIFICATION • {service.number}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {service.detailedDescription}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {service.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-brand-blue/15 text-brand-cyan border border-brand-blue/30">
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all shadow-glow-sm flex items-center gap-2"
            >
              <span>Request Architecture Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="px-5 py-3.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white border border-slate-800 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Services</span>
            </Link>
          </div>
        </div>

        {/* 2. What We Build */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-cyan uppercase">
            <Sparkles className="w-4 h-4" />
            WHAT WE BUILD & DELIVER
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Target Systems & Engineering Deliverables
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whatWeBuild.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-dark-900 border border-slate-800 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-brand-blue/20 text-brand-cyan flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Core Capabilities Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-violet uppercase">
            <CheckCircle2 className="w-4 h-4" />
            TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Key Architectural Specifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.capabilities.map((cap, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-dark-900 border border-slate-800 flex items-start gap-3 text-xs text-slate-300 font-sans">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Architecture & Workflow Topology Visualization */}
        <div className="rounded-3xl bg-dark-900 border border-slate-800 p-8 space-y-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-cyan uppercase">
            <Workflow className="w-4 h-4" />
            SYSTEM TOPOLOGY & WORKFLOW FLOW
          </div>
          <h2 className="text-xl font-bold text-white">
            Architecture Blueprint Overview
          </h2>

          <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed">
            <span className="text-brand-cyan font-bold">&gt; PIPELINE: </span>
            {service.architectureOverview}
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase text-slate-400 font-bold">OUR ENGINEERING APPROACH</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {service.engineeringApproach}
            </p>
          </div>
        </div>

        {/* 5. Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-brand-cyan uppercase">PORTFOLIO CASE STUDIES</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Projects Built With This Capability
                </h2>
              </div>
              <Link to="/projects" className="text-xs font-mono text-brand-cyan hover:underline flex items-center gap-1">
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((proj) => (
                <div key={proj.id} className="p-6 rounded-2xl bg-dark-900 border border-slate-800 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-brand-cyan px-2 py-0.5 rounded bg-brand-blue/20">
                      {proj.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2">{proj.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{proj.shortDescription}</p>
                  </div>
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="text-xs font-semibold text-brand-cyan hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. CTA */}
        <div className="rounded-3xl bg-dark-900 border border-slate-800 p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Ready to Deploy {service.title}?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Discuss your system constraints, data sources, or deployment timelines with our lead architects.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all shadow-glow-sm"
          >
            <span>Start a Conversation for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
