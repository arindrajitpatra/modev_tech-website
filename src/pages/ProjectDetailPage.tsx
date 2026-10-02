import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA, SERVICES_DATA } from '../data/contentData';
import { 
  Play, 
  ExternalLink, 
  Github, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Lock,
  Layers
} from 'lucide-react';
import { VideoModal } from '../components/VideoModal';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const project = PROJECTS_DATA.find(p => p.slug === slug || p.id === slug) || PROJECTS_DATA[0];

  // Find related service
  const parentService = SERVICES_DATA.find(s => s.slug === project.relatedServiceSlug);

  // Find related projects for cross-navigation
  const relatedProjects = PROJECTS_DATA.filter(
    p => project.relatedProjectIds?.includes(p.id) && p.id !== project.id
  );

  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[400px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-brand-cyan font-bold">{project.title}</span>
        </div>

        {/* 1. Hero Section */}
        <div className="rounded-3xl bg-dark-900 border border-slate-800 p-8 sm:p-12 shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-brand-blue/20 text-brand-cyan border border-brand-blue/40 uppercase">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-brand-violet/20 text-brand-violet border border-brand-violet/40 uppercase">
                  {project.badge}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-dark-950 border border-slate-800 text-slate-400 hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveDemoUrl && (
                <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-dark-950 border border-slate-800 text-slate-400 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-mono">
            {project.subtitle}
          </p>

          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-dark-950 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="text-2xl font-extrabold text-brand-cyan font-mono">{m.value}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. Working Demonstration Video Section ("See It In Action") */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-cyan uppercase">
            <Play className="w-4 h-4 fill-brand-cyan" />
            WORKING SYSTEM DEMONSTRATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            See It In Action
          </h2>

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group bg-dark-950">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent flex items-center justify-center">
              {project.demoVideoUrl && (
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all flex items-center gap-3 shadow-glow-lg group-hover:scale-105"
                >
                  <Play className="w-5 h-5 fill-white" />
                  <span>Watch Interactive Replay Video</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 3. Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-dark-900 border border-red-500/20 space-y-3">
            <h3 className="text-xs font-mono font-bold text-red-400 uppercase">THE ENGINEERING CHALLENGE</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.fullProblem}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-dark-900 border border-brand-blue/30 space-y-3">
            <h3 className="text-xs font-mono font-bold text-brand-cyan uppercase">OUR ARCHITECTURAL SOLUTION</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.fullSolution}
            </p>
          </div>
        </div>

        {/* 4. AI & Model Pipeline Details */}
        {project.aiArchitectureDetails && (
          <div className="rounded-3xl bg-dark-900 border border-slate-800 p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-violet uppercase">
              <Cpu className="w-4 h-4" />
              AI ARCHITECTURE & MODEL SPECS
            </div>
            <h2 className="text-2xl font-bold text-white">
              AI Orchestration & RAG Pipeline Specifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-1">
                <div className="font-mono text-[10px] text-slate-400 uppercase">MODEL ARCHITECTURE</div>
                <div className="font-semibold text-white">{project.aiArchitectureDetails.modelArchitecture}</div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-1">
                <div className="font-mono text-[10px] text-slate-400 uppercase">AGENT WORKFLOW</div>
                <div className="font-semibold text-white">{project.aiArchitectureDetails.agentWorkflow}</div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-1">
                <div className="font-mono text-[10px] text-slate-400 uppercase">RAG PIPELINE</div>
                <div className="font-semibold text-white">{project.aiArchitectureDetails.ragPipeline}</div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-1">
                <div className="font-mono text-[10px] text-slate-400 uppercase">MCP TOOL INTEGRATION</div>
                <div className="font-semibold text-white">{project.aiArchitectureDetails.toolIntegration}</div>
              </div>
            </div>
          </div>
        )}

        {/* 5. Cybersecurity Details */}
        {project.securityDetails && (
          <div className="rounded-3xl bg-dark-900 border border-purple-500/30 p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase">
              <ShieldCheck className="w-4 h-4" />
              CYBERSECURITY & THREAT MODEL
            </div>
            <h2 className="text-2xl font-bold text-white">
              Security Architecture Controls
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-1">
                <div className="font-mono text-[10px] text-purple-400 uppercase">THREAT MODEL</div>
                <div className="font-semibold text-white">{project.securityDetails.threatModel}</div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-1">
                <div className="font-mono text-[10px] text-purple-400 uppercase">DETECTION WORKFLOW</div>
                <div className="font-semibold text-white">{project.securityDetails.detectionWorkflow}</div>
              </div>
            </div>
          </div>
        )}

        {/* 6. Key Capabilities & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase text-slate-400">KEY SYSTEM CAPABILITIES</h3>
            <div className="space-y-2.5">
              {project.keyCapabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-900 border border-slate-800 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase text-slate-400">TECHNOLOGY STACK USED</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl text-xs font-mono bg-dark-900 border border-slate-800 text-brand-cyan font-bold">
                  {tech}
                </span>
              ))}
            </div>

            {parentService && (
              <div className="pt-6">
                <div className="p-4 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 space-y-2">
                  <div className="text-[10px] font-mono text-brand-cyan font-bold uppercase">PARENT SERVICE CAPABILITY</div>
                  <div className="text-sm font-bold text-white">{parentService.title}</div>
                  <Link
                    to={`/services/${parentService.slug}`}
                    className="text-xs font-mono text-brand-cyan hover:underline flex items-center gap-1 pt-1"
                  >
                    <span>View Service Specifications →</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 7. Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Related Project Case Studies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <div key={p.id} className="p-6 rounded-2xl bg-dark-900 border border-slate-800 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-brand-cyan">{p.category}</span>
                    <h3 className="text-lg font-bold text-white mt-1">{p.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{p.shortDescription}</p>
                  </div>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="text-xs font-semibold text-brand-cyan hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Read Case Study →</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. CTA */}
        <div className="rounded-3xl bg-dark-900 border border-slate-800 p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Need a Similar Architecture Engineered?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Discuss your technical goals and deployment specifications directly with our engineering principals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all shadow-glow-sm"
          >
            <span>Request Architecture Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {isVideoModalOpen && project.demoVideoUrl && (
        <VideoModal
          videoUrl={project.demoVideoUrl}
          projectTitle={project.title}
          onClose={() => setIsVideoModalOpen(false)}
        />
      )}

    </div>
  );
};
