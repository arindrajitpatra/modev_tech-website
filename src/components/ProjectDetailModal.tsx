import React from 'react';
import { ProjectItem } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  Play, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Workflow, 
  Layers, 
  CheckCircle2,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem;
  onClose: () => void;
  onWatchVideo: (url: string, title: string) => void;
  onOpenContact: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onWatchVideo,
  onOpenContact
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-2xl bg-dark-900 border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-dark-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-brand-blue/20 text-brand-cyan border border-brand-blue/40">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-dark-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 scrollbar-thin">
          
          {/* Subtitle & Hero Image */}
          <div className="space-y-4">
            <p className="text-sm text-slate-300 font-mono">
              {project.subtitle}
            </p>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-xl group">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent flex items-end p-6">
                {project.demoVideoUrl && (
                  <button
                    onClick={() => onWatchVideo(project.demoVideoUrl!, project.title)}
                    className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-brand-blue hover:bg-brand-cyan transition-all flex items-center gap-2 shadow-glow-md"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    Watch Interactive Demo Video
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-dark-950 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="text-2xl font-extrabold text-brand-cyan font-mono">{m.value}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-dark-950 border border-slate-800 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-red-400 flex items-center gap-1.5">
                <span>THE ENGINEERING CHALLENGE</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.fullProblem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-950 border border-brand-blue/30 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-brand-cyan flex items-center gap-1.5">
                <span>OUR ARCHITECTURAL SOLUTION</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.fullSolution}
              </p>
            </div>
          </div>

          {/* AI Architecture Deep-Dive */}
          {project.aiArchitectureDetails && (
            <div className="p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase text-brand-violet tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-violet" />
                AI MODEL & WORKFLOW PIPELINE SPECIFICATIONS
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 space-y-1">
                  <div className="font-mono text-[10px] text-slate-400 uppercase">MODEL ARCHITECTURE</div>
                  <div className="font-semibold text-white">{project.aiArchitectureDetails.modelArchitecture}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 space-y-1">
                  <div className="font-mono text-[10px] text-slate-400 uppercase">AGENT ORCHESTRATION</div>
                  <div className="font-semibold text-white">{project.aiArchitectureDetails.agentWorkflow}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 space-y-1">
                  <div className="font-mono text-[10px] text-slate-400 uppercase">RAG PIPELINE</div>
                  <div className="font-semibold text-white">{project.aiArchitectureDetails.ragPipeline}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 space-y-1">
                  <div className="font-mono text-[10px] text-slate-400 uppercase">MCP TOOL INTEGRATION</div>
                  <div className="font-semibold text-white">{project.aiArchitectureDetails.toolIntegration}</div>
                </div>
              </div>
            </div>
          )}

          {/* Architecture Highlights & Key Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              KEY SYSTEM CAPABILITIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyCapabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-300 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              TECHNOLOGY & FRAMEWORKS USED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-dark-950 border border-slate-800 text-brand-cyan font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-dark-950 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-mono bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-200 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-mono bg-brand-blue/20 hover:bg-brand-blue/30 border border-brand-blue/40 text-brand-cyan flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Environment</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all flex items-center justify-center gap-2 shadow-glow-sm"
          >
            <span>Request Similar Architecture</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
