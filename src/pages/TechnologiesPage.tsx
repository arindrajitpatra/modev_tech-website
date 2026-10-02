import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../data/contentData';
import { 
  Brain, 
  Workflow, 
  Server, 
  Layout, 
  Database, 
  Shield, 
  Lock, 
  Sparkles,
  Search,
  CheckCircle2
} from 'lucide-react';

export const TechnologiesPage: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIconMap = (name: string) => {
    switch (name) {
      case 'Brain': return Brain;
      case 'Workflow': return Workflow;
      case 'Server': return Server;
      case 'Layout': return Layout;
      case 'Database': return Database;
      case 'Shield': return Shield;
      default: return Lock;
    }
  };

  const filteredCategories = TECH_CATEGORIES.map(cat => {
    if (selectedCategoryId !== 'all' && cat.id !== selectedCategoryId) {
      return null;
    }
    const filteredItems = cat.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredItems.length === 0) return null;
    return { ...cat, items: filteredItems };
  }).filter(Boolean);

  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            ENTERPRISE STACK DIRECTORY
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Technology <span className="text-gradient-cyan-blue">Ecosystem</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300">
            A comprehensive matrix of battle-tested enterprise frameworks, AI protocols, security scanners, and cloud databases used across our engineering projects.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search technology frameworks (e.g., Python, LangGraph, Spring Boot, MCP, PostgreSQL)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-dark-900 border border-slate-800 focus:border-brand-cyan focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500 font-mono shadow-inner"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategoryId('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                selectedCategoryId === 'all'
                  ? 'bg-brand-blue text-white shadow-glow-sm'
                  : 'bg-dark-850 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Categories
            </button>

            {TECH_CATEGORIES.map((cat) => {
              const Icon = categoryIconMap(cat.iconName);
              const isSelected = selectedCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                    isSelected
                      ? 'bg-brand-blue/20 text-brand-cyan border border-brand-blue/50 shadow-glow-sm'
                      : 'bg-dark-850 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categorized Tech Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => {
            if (!category) return null;
            const IconComponent = categoryIconMap(category.iconName);
            return (
              <div key={category.id} className="rounded-2xl bg-dark-900 border border-slate-800 p-6 sm:p-8 space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-brand-cyan">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {category.items.length} TECHNOLOGIES
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`group relative rounded-xl p-4 transition-all duration-300 border flex flex-col justify-between ${
                        item.featured
                          ? 'bg-dark-850 border-brand-blue/30 hover:border-brand-cyan shadow-glow-sm'
                          : 'bg-dark-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-dark-850'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-400 border border-slate-800">
                            {item.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">
                          {item.description}
                        </p>
                      </div>

                      {item.featured && (
                        <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center gap-1 text-[10px] font-mono text-brand-cyan">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Core Competency</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
