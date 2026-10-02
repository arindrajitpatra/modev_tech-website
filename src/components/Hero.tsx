import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Bot, 
  ShieldCheck, 
  Database, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  Activity,
  Layers,
  Zap,
  Code2
} from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreWork }) => {
  const [activeTab, setActiveTab] = useState<'agents' | 'rag' | 'mcp'>('agents');
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([]);
  const [isRunningSim, setIsRunningSim] = useState(false);

  const runSimulation = () => {
    setIsRunningSim(true);
    setSimulatedLogs(['[INIT] Spawning Planner Agent v2.4...']);

    const steps = [
      '[MCP] Connected to postgres-enterprise-db:5432 (TLS 1.3)',
      '[RAG] Vector query embedding generated (dimension: 1536)',
      '[RAG] Retreived 14 doc chunks (Re-rank score: 0.964)',
      '[AGENT] Reasoning Agent evaluating tool selection policy...',
      '[MCP] Invoking tool: execute_secure_compliance_audit()',
      '[SHIELD] AegisShield: Prompt injection scan clean (0.01% anomaly)',
      '[OUTPUT] Workflow executed successfully in 240ms.'
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setSimulatedLogs(prev => [...prev, step]);
        if (idx === steps.length - 1) {
          setIsRunningSim(false);
        }
      }, (idx + 1) * 600);
    });
  };

  useEffect(() => {
    runSimulation();
  }, [activeTab]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-gradient">
      
      {/* Abstract Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-gradient-to-tr from-brand-blue/20 via-brand-cyan/15 to-brand-violet/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Hero Messaging Column */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Top Technology Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-850/90 border border-brand-blue/30 shadow-glow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                NEXT-GEN AI & ENTERPRISE SYSTEMS ENGINEERING
              </span>
              <span className="text-[10px] bg-brand-violet/20 text-brand-violet font-mono font-bold px-2 py-0.5 rounded border border-brand-violet/30">
                MCP / RAG / AGENTS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
              Engineering{' '}
              <span className="text-gradient-cyan-blue glow-text">
                Intelligent Systems
              </span>{' '}
              for the Next Generation
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed">
              We design and engineer enterprise-grade software systems powered by Generative AI, LLMs, autonomous agentic workflows, Model Context Protocol (MCP), and resilient backend architectures.
            </p>

            {/* Key Capability Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2 max-w-3xl">
              {[
                'Multi-Agent Networks',
                'Advanced RAG Systems',
                'Model Context Protocol',
                'Zero-Trust AI Shield',
                'Java / Spring & Python',
                'React / TypeScript Web'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-200 bg-dark-900/80 border border-slate-800/80 px-3.5 py-2.5 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenContact}
                className="relative group overflow-hidden px-8 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all duration-300 shadow-glow-md hover:shadow-glow-lg flex items-center justify-center gap-2"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreWork}
                className="px-8 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-dark-850/90 hover:bg-dark-800 border border-slate-700/80 hover:border-slate-500 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <Play className="w-4 h-4 text-brand-cyan fill-brand-cyan/20" />
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Trust Indicator Metrics */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center gap-10 text-slate-400 text-xs">
              <div>
                <div className="text-2xl font-extrabold text-white font-mono">99.99%</div>
                <div className="text-slate-400 text-[11px] mt-0.5">System Reliability</div>
              </div>
              <div className="h-9 w-[1px] bg-slate-800" />
              <div>
                <div className="text-2xl font-extrabold text-brand-cyan font-mono">&lt; 250ms</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Agent Response Latency</div>
              </div>
              <div className="h-9 w-[1px] bg-slate-800" />
              <div>
                <div className="text-2xl font-extrabold text-brand-violet font-mono">SOC2 / HIPAA</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Security Grade</div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Composition - Expanded Width */}
          <div className="lg:col-span-6 relative">
            
            {/* Glowing Accent Ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet opacity-30 blur-xl animate-pulse-slow" />

            {/* Main Interactive Technology Window Card */}
            <div className="relative rounded-2xl bg-dark-900/90 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Window Titlebar */}
              <div className="bg-dark-950/90 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-300 flex items-center gap-2 font-semibold">
                    <Terminal className="w-4 h-4 text-brand-cyan" />
                    modev-agent-mesh.orchestrator
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-mono text-emerald-400 font-medium">LIVE SYSTEM</span>
                </div>
              </div>

              {/* Tabs for Dynamic Visual Toggle */}
              <div className="bg-dark-850/70 px-5 py-2.5 border-b border-slate-800/80 flex items-center gap-2">
                {[
                  { id: 'agents', label: 'Agentic Workflows', icon: Bot },
                  { id: 'rag', label: 'RAG Pipeline', icon: Database },
                  { id: 'mcp', label: 'MCP Connectors', icon: Layers }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-brand-blue/20 text-brand-cyan border border-brand-blue/40 shadow-glow-sm'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Interactive Node Graph & Simulated Terminal Screen */}
              <div className="p-6 space-y-5">
                
                {/* Node Connection Flow Preview */}
                <div className="bg-dark-950/80 rounded-xl p-4 sm:p-5 border border-slate-800 relative overflow-hidden">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                    <span>ARCHITECTURAL TOPOLOGY</span>
                    <button 
                      onClick={runSimulation}
                      disabled={isRunningSim}
                      className="text-brand-cyan hover:underline text-[11px] flex items-center gap-1 font-mono font-semibold"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      {isRunningSim ? 'Simulating...' : 'Run Diagnostics'}
                    </button>
                  </div>

                  {activeTab === 'agents' && (
                    <div className="grid grid-cols-3 gap-3 text-center text-xs">
                      <div className="p-3 rounded-xl bg-brand-blue/15 border border-brand-blue/40 text-brand-cyan font-mono">
                        <div className="text-[10px] text-slate-400">INPUT</div>
                        Planner Agent
                      </div>
                      <div className="p-3 rounded-xl bg-brand-violet/15 border border-brand-violet/40 text-brand-violet font-mono">
                        <div className="text-[10px] text-slate-400">EXECUTION</div>
                        Tool Selection
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono">
                        <div className="text-[10px] text-slate-400">OUTPUT</div>
                        Verified State
                      </div>
                    </div>
                  )}

                  {activeTab === 'rag' && (
                    <div className="grid grid-cols-3 gap-3 text-center text-xs">
                      <div className="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 font-mono">
                        <div className="text-[10px] text-slate-400">DOCUMENTS</div>
                        Hybrid Retrieval
                      </div>
                      <div className="p-3 rounded-xl bg-indigo-500/15 border border-indigo-500/40 text-indigo-400 font-mono">
                        <div className="text-[10px] text-slate-400">INDEX</div>
                        Vector + Graph DB
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono">
                        <div className="text-[10px] text-slate-400">RE-RANK</div>
                        Cohere v3.5
                      </div>
                    </div>
                  )}

                  {activeTab === 'mcp' && (
                    <div className="grid grid-cols-3 gap-3 text-center text-xs">
                      <div className="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-400 font-mono">
                        <div className="text-[10px] text-slate-400">PROTOCOL</div>
                        MCP Server
                      </div>
                      <div className="p-3 rounded-xl bg-blue-500/15 border border-blue-500/40 text-blue-400 font-mono">
                        <div className="text-[10px] text-slate-400">SANDBOX</div>
                        Secure Egress
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono">
                        <div className="text-[10px] text-slate-400">TARGET</div>
                        Enterprise APIs
                      </div>
                    </div>
                  )}
                </div>

                {/* Simulated Live Console Log Window */}
                <div className="bg-dark-950 font-mono text-[12px] p-4 rounded-xl border border-slate-800/90 h-48 overflow-y-auto space-y-1.5 scrollbar-thin">
                  {simulatedLogs.map((log, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-slate-600 font-bold select-none">&gt;</span>
                      <span className={
                        log.includes('[INIT]') ? 'text-brand-cyan' :
                        log.includes('[MCP]') ? 'text-brand-violet' :
                        log.includes('[SHIELD]') ? 'text-amber-400' :
                        log.includes('[OUTPUT]') ? 'text-emerald-400 font-bold' :
                        'text-slate-300'
                      }>
                        {log}
                      </span>
                    </div>
                  ))}
                  {isRunningSim && (
                    <div className="flex items-center gap-1.5 text-brand-cyan animate-pulse">
                      <span className="w-1.5 h-3 bg-brand-cyan inline-block" />
                      <span>Processing telemetry...</span>
                    </div>
                  )}
                </div>

                {/* Floating Micro Status Pill */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 border-t border-slate-800/60 font-mono">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>AegisShield Active</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>Memory: 4.2GB / 16GB</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Cards to Create 3D Depth */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-dark-850/95 border border-brand-blue/30 rounded-xl p-3.5 shadow-2xl backdrop-blur-md items-center gap-3 animate-float">
              <div className="p-2 rounded-lg bg-brand-blue/20 text-brand-cyan">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Production Ready</div>
                <div className="text-[10px] text-slate-400">Java • Python • React • MCP</div>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-6 -right-4 bg-dark-850/95 border border-brand-violet/30 rounded-xl p-3.5 shadow-2xl backdrop-blur-md items-center gap-3 animate-float-delayed">
              <div className="p-2 rounded-lg bg-brand-violet/20 text-brand-violet">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Agentic Intelligence</div>
                <div className="text-[10px] text-slate-400">Autonomous Reasoning DAGs</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
