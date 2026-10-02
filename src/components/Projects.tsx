import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/contentData';
import { ProjectItem } from '../types';
import { VideoModal } from './VideoModal';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  Play, 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ProjectsProps {
  onOpenContact: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeDetailProject, setActiveDetailProject] = useState<ProjectItem | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<{ url: string; title: string } | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'agentic-ai', label: 'Agentic AI' },
    { id: 'rag-systems', label: 'RAG & Knowledge' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'enterprise', label: 'Enterprise Systems' },
    { id: 'blockchain', label: 'Blockchain & ZK' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.categorySlug === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-dark-950 overflow-hidden border-t border-slate-800">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            FEATURED ENGINEERING PORTFOLIO
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="text-gradient-cyan-blue">Work & Architectures</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A showcase of production-grade systems engineered across autonomous multi-agent mesh networks, graph RAG search engines, and enterprise security platforms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-blue text-white shadow-glow-sm'
                  : 'bg-dark-850 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-dark-900 border border-slate-800 hover:border-brand-blue/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-brand-blue/10 flex flex-col justify-between"
            >
              {/* Image & Overlay Controls */}
              <div>
                <div className="relative aspect-video overflow-hidden bg-dark-950">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

                  {/* Badge */}
                  {project.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-dark-950/90 backdrop-blur-md border border-brand-cyan/40 text-brand-cyan text-[10px] font-mono font-bold uppercase tracking-wider">
                      {project.badge}
                    </div>
                  )}

                  {/* Play Video Button Overlay */}
                  {project.demoVideoUrl && (
                    <button
                      onClick={() => setActiveVideoModal({ url: project.demoVideoUrl!, title: project.title })}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-blue/80 text-white flex items-center justify-center shadow-glow-md opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
                      title="Watch Working Demo"
                    >
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </button>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="text-[11px] font-mono font-semibold uppercase text-brand-cyan">
                    {project.category}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Key Metrics Pill Row */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-dark-950 border border-slate-800 text-center">
                          <div className="text-xs font-mono font-extrabold text-brand-cyan">{m.value}</div>
                          <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 border border-slate-800 text-slate-400">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 border border-slate-800 text-slate-500">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-6 py-4 bg-dark-950/80 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveDetailProject(project)}
                  className="text-xs font-semibold text-brand-cyan hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.demoVideoUrl && (
                    <button
                      onClick={() => setActiveVideoModal({ url: project.demoVideoUrl!, title: project.title })}
                      className="p-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1"
                      title="Watch Video"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Demo</span>
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {activeVideoModal && (
        <VideoModal
          videoUrl={activeVideoModal.url}
          projectTitle={activeVideoModal.title}
          onClose={() => setActiveVideoModal(null)}
        />
      )}

      {/* Project Detail Modal */}
      {activeDetailProject && (
        <ProjectDetailModal
          project={activeDetailProject}
          onClose={() => setActiveDetailProject(null)}
          onWatchVideo={(url, title) => {
            setActiveDetailProject(null);
            setActiveVideoModal({ url, title });
          }}
          onOpenContact={onOpenContact}
        />
      )}

    </section>
  );
};
