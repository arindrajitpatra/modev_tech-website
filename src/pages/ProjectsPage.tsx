import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/contentData';
import { Play, ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { VideoModal } from '../components/VideoModal';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<{ url: string; title: string } | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'agentic-ai', label: 'Agentic AI' },
    { id: 'rag-systems', label: 'RAG Systems' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'enterprise', label: 'Enterprise Software' },
    { id: 'blockchain', label: 'Blockchain & ZK' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.categorySlug === selectedCategory);

  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[400px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            ENGINEERING CASE STUDIES & PORTFOLIO
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="text-gradient-cyan-blue">Work & Architectures</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300">
            Explore our complete portfolio of enterprise multi-agent networks, RAG search engines, cybersecurity proxies, and cloud backend microservices.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-dark-950/90 backdrop-blur-md border border-brand-cyan/40 text-brand-cyan text-[10px] font-mono font-bold uppercase">
                      {project.badge}
                    </div>
                  )}

                  {project.demoVideoUrl && (
                    <button
                      onClick={() => setActiveVideoModal({ url: project.demoVideoUrl!, title: project.title })}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-blue/80 text-white flex items-center justify-center shadow-glow-md opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
                      title="Watch Working Demo Video"
                    >
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </button>
                  )}
                </div>

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

                  {/* Metrics Pill Grid */}
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
                  </div>
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

                {project.demoVideoUrl && (
                  <button
                    onClick={() => setActiveVideoModal({ url: project.demoVideoUrl!, title: project.title })}
                    className="p-1.5 rounded-lg bg-dark-850 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Demo</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {activeVideoModal && (
        <VideoModal
          videoUrl={activeVideoModal.url}
          projectTitle={activeVideoModal.title}
          onClose={() => setActiveVideoModal(null)}
        />
      )}

    </div>
  );
};
