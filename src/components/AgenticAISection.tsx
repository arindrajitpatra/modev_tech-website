import React, { useState } from 'react';
import { 
  Bot, 
  Workflow, 
  Layers, 
  Database, 
  ShieldCheck, 
  Zap, 
  Play, 
  CheckCircle2, 
  RefreshCw,
  Terminal,
  Code
} from 'lucide-react';

export const AgenticAISection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executionLogs, setExecutionLogs] = useState<string[]>([
    'System Idle. Click "Run Autonomous Goal Simulation" to trigger agent orchestration.'
  ]);

  const steps = [
    {
      step: '01',
      agent: 'Planner Agent',
      action: 'Goal Decomposition & Task Graph',
      desc: 'Parses complex prompt, creates Directed Acyclic Graph (DAG) of sub-goals, and assigns sub-tasks.',
      icon: Bot,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      agent: 'Reasoning Agent',
      action: 'Stateful Context & Policy Evaluation',
      desc: 'Evaluates state memory, checks authorization context, and determines optimal tools to call.',
      icon: Workflow,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      step: '03',
      agent: 'Tool Selection (MCP)',
      action: 'Model Context Protocol Binding',
      desc: 'Discovers available tools via MCP server interface (Database, ERP API, Security Scanner).',
      icon: Layers,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '04',
      agent: 'Sandbox Execution',
      action: 'Zero-Trust Container Tool Execution',
      desc: 'Runs database queries and API calls inside isolated ephemeral containers with strict timeouts.',
      icon: Database,
      color: 'from-cyan-500 to-emerald-500'
    },
    {
      step: '05',
      agent: 'Auditor & Evaluator',
      action: 'Output Verification & Safety Gate',
      desc: 'Inspects execution results against security policies, sanitizes PII, and formats response.',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const handleRunSimulation = () => {
    if (isExecuting) return;
    setIsExecuting(true);
    setActiveStep(0);
    setExecutionLogs(['[SIMULATION START] Goal: "Audit Q3 Revenue Anomaly across Postgres & Salesforce"']);

    const logList = [
      '[STEP 1: PLANNER] Goal broken into 3 parallel sub-tasks: 1. Fetch DB records, 2. Query Salesforce API, 3. Cross-reconcile.',
      '[STEP 2: REASONING] Context evaluated. LangGraph state node initialized (ID: #state-8921).',
      '[STEP 3: MCP] Protocol Handshake with Postgres-MCP & Salesforce-MCP servers completed.',
      '[STEP 4: EXECUTION] Sandboxed query executed in 112ms. 4,200 rows ingested.',
      '[STEP 5: AUDITOR] Hallucination score: 0.00. Security AegisShield check PASS. Finalizing response.'
    ];

    logList.forEach((log, index) => {
      setTimeout(() => {
        setActiveStep(index);
        setExecutionLogs(prev => [...prev, log]);
        if (index === logList.length - 1) {
          setIsExecuting(false);
        }
      }, (index + 1) * 900);
    });
  };

  return (
    <section id="agentic-ai" className="py-24 relative bg-dark-950 overflow-hidden border-t border-slate-800">
      
      {/* Background radial glowing backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-violet/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/30 text-brand-violet text-xs font-mono font-bold uppercase">
            <Bot className="w-3.5 h-3.5" />
            AUTONOMOUS AGENT ORCHESTRATION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Multi-Agent Systems That <span className="text-gradient-cyan-blue">Plan, Reason & Execute</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            We build stateful, multi-agent orchestrators using LangGraph and Model Context Protocol (MCP). Agents collaborate safely, execute tools, recover from failures, and deliver deterministic outcomes.
          </p>
        </div>

        {/* Interactive Multi-Agent Pipeline Simulator */}
        <div className="rounded-3xl bg-dark-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Workflow className="w-5 h-5 text-brand-cyan" />
                Live Agentic Workflow Simulator
              </h3>
              <p className="text-xs text-slate-400">
                Simulate how autonomous agents communicate across MCP tool layers in real time.
              </p>
            </div>

            <button
              onClick={handleRunSimulation}
              disabled={isExecuting}
              className={`px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all flex items-center gap-2 shadow-glow-sm ${
                isExecuting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isExecuting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-brand-cyan" />
                  <span>Agent Executing...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Run Autonomous Goal Simulation</span>
                </>
              )}
            </button>
          </div>

          {/* 5-Step Agent Flow Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((s, index) => {
              const IconComponent = s.icon;
              const isActive = activeStep === index && isExecuting;
              const isPassed = activeStep > index || (!isExecuting && activeStep === steps.length - 1);

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl p-4 transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-dark-800 border-brand-cyan shadow-glow-md scale-105 z-20'
                      : isPassed
                      ? 'bg-dark-900/90 border-brand-blue/40 text-slate-200'
                      : 'bg-dark-950/60 border-slate-800 text-slate-500 opacity-70'
                  }`}
                >
                  {/* Step Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        STEP {s.step}
                      </span>
                      <div className={`p-2 rounded-lg bg-dark-950 border border-slate-800 ${isActive ? 'text-brand-cyan border-brand-cyan' : 'text-slate-400'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">
                      {s.agent}
                    </h4>

                    <div className="text-[11px] font-mono text-brand-cyan font-medium mb-2">
                      {s.action}
                    </div>

                    <p className="text-[11px] text-slate-400 leading-normal">
                      {s.desc}
                    </p>
                  </div>

                  {/* Execution Status Badge */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                    {isActive ? (
                      <span className="text-brand-cyan font-bold animate-pulse flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                        PROCESSING
                      </span>
                    ) : isPassed ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        COMPLETED
                      </span>
                    ) : (
                      <span className="text-slate-600">WAITING</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Terminal Console Output */}
          <div className="rounded-2xl bg-dark-950 border border-slate-800 p-4 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-2.5 mb-3">
              <div className="flex items-center gap-2 text-[11px]">
                <Terminal className="w-4 h-4 text-brand-cyan" />
                <span>STATEFUL LANGGRAPH EXECUTION TELEMETRY</span>
              </div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                MCP GATEWAY ONLINE
              </span>
            </div>

            <div className="space-y-1.5 h-32 overflow-y-auto scrollbar-thin">
              {executionLogs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-brand-cyan select-none">&gt;</span>
                  <span className={log.includes('[STEP') ? 'text-slate-200 font-semibold' : 'text-slate-400'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
