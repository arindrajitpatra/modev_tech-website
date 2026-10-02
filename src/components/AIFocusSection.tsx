import React, { useState } from 'react';
import { 
  User, 
  Smartphone, 
  Cpu, 
  BrainCircuit, 
  Database, 
  Layers, 
  Server, 
  ShieldCheck, 
  Eye, 
  CheckCircle,
  ArrowRight,
  Info
} from 'lucide-react';

export const AIFocusSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('reasoning');

  const architectureNodes = [
    {
      id: 'user',
      title: '01. User / Client Layer',
      subtitle: 'Multi-Channel Entry',
      icon: User,
      color: 'border-blue-500 text-blue-400 bg-blue-500/10',
      description: 'Web, mobile, Slack, IDE extension, or API request payload entering the system with user identity context.',
      highlights: ['OAuth2 / OpenID Connect Identity', 'Session Memory Hydration', 'Streaming SSE Socket Handler']
    },
    {
      id: 'app',
      title: '02. AI App Gateway',
      subtitle: 'AegisShield & Routing',
      icon: Smartphone,
      color: 'border-cyan-500 text-cyan-400 bg-cyan-500/10',
      description: 'FastAPI/Spring Boot proxy enforcing rate limits, prompt injection shields, and cost-based model routing.',
      highlights: ['Prompt Injection Real-time Scanning', 'Token Entropy Audit', 'Model Routing (Local vs Cloud LLM)']
    },
    {
      id: 'llm',
      title: '03. Foundation LLMs',
      subtitle: 'Multi-Provider Engine',
      icon: Cpu,
      color: 'border-indigo-500 text-indigo-400 bg-indigo-500/10',
      description: 'State-of-the-art foundation models (Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, DeepSeek) abstracted behind unified interfaces.',
      highlights: ['Structured JSON Schema Output Enforcement', 'Streaming Token Generator', 'Fallback Model Redundancy']
    },
    {
      id: 'reasoning',
      title: '04. Reasoning & Agent Graph',
      subtitle: 'LangGraph Orchestration',
      icon: BrainCircuit,
      color: 'border-purple-500 text-purple-400 bg-purple-500/10',
      description: 'Stateful multi-agent DAG execution loop. Planner agents decompose tasks, select tools, evaluate intermediate outputs, and self-correct.',
      highlights: ['LangGraph Stateful Memory Checkpoints', 'Autonomous Goal Decomposition', 'Human-in-the-loop Gateways']
    },
    {
      id: 'memory',
      title: '05. Memory & Advanced RAG',
      subtitle: 'Vector & Knowledge Graph',
      icon: Database,
      color: 'border-emerald-500 text-emerald-400 bg-emerald-500/10',
      description: 'Hybrid dense (Qdrant) + relational entity graph (Neo4j) retrieval engine re-ranked by Cohere for zero-hallucination precision.',
      highlights: ['BM25 + Dense Semantic Hybrid Search', 'Graph RAG Entity Topology Mapping', 'Cohere Rerank v3 Precision Scoring']
    },
    {
      id: 'mcp',
      title: '06. MCP / Secure Tools',
      subtitle: 'Model Context Protocol',
      icon: Layers,
      color: 'border-pink-500 text-pink-400 bg-pink-500/10',
      description: 'Standardized Model Context Protocol (MCP) servers providing sandboxed read/write access to internal tools and databases.',
      highlights: ['Zero-Trust Container Sandboxes', 'Bi-directional Tool Stream State', 'Least-Privilege Scoped API Keys']
    },
    {
      id: 'systems',
      title: '07. Enterprise Systems',
      subtitle: 'Backend Backbone',
      icon: Server,
      color: 'border-amber-500 text-amber-400 bg-amber-500/10',
      description: 'Java Spring Boot microservices, SQL/NoSQL databases, ERPs, GitHub repos, and Kafka event queues executing real business changes.',
      highlights: ['Java Spring Boot 3 Microservice Cluster', 'PostgreSQL & Kafka Event Queues', 'Strict Transaction Audit Logging']
    }
  ];

  const activeNodeData = architectureNodes.find(n => n.id === selectedNode) || architectureNodes[3];

  return (
    <section id="ai-focus" className="py-24 relative bg-dark-900 overflow-hidden border-t border-slate-800">
      
      {/* Background visual graphics */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-violet/15 border border-brand-violet/30 text-brand-violet text-xs font-mono font-bold uppercase">
            <BrainCircuit className="w-3.5 h-3.5" />
            AI ARCHITECTURE BLUEPRINT
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Building <span className="text-gradient-violet">Intelligent Systems</span>, Not Just Software
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            We move beyond simple chatbot wrappers. Our engineering methodology integrates foundation models with RAG retrieval, multi-agent reasoning, Model Context Protocol (MCP), and enterprise security.
          </p>
        </div>

        {/* Interactive Architecture Topology Flow diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Diagram: 7 Architectural Nodes */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 flex items-center justify-between">
              <span>PIPELINE EXECUTION TOPOLOGY</span>
              <span className="text-brand-cyan font-normal text-[11px]">Click node to inspect architecture</span>
            </div>

            <div className="space-y-2.5">
              {architectureNodes.map((node, index) => {
                const IconComponent = node.icon;
                const isSelected = selectedNode === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`relative rounded-xl p-4 transition-all duration-300 cursor-pointer border ${
                      isSelected
                        ? 'bg-dark-800 border-brand-cyan shadow-glow-md'
                        : 'bg-dark-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-dark-850'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-lg border ${node.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white flex items-center gap-2">
                            {node.title}
                            {isSelected && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                                ACTIVE INSPECT
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-400 font-mono">
                            {node.subtitle}
                          </div>
                        </div>
                      </div>

                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'text-brand-cyan translate-x-1' : 'text-slate-600'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Inspection Panel */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl bg-dark-850 border border-slate-700/80 p-6 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg border ${activeNodeData.color}`}>
                    {React.createElement(activeNodeData.icon, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-brand-cyan font-bold tracking-wider">
                      SPECIFICATION AUDIT
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {activeNodeData.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeNodeData.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-brand-cyan" />
                  ENGINEERING SPECIFICATIONS
                </h4>

                <div className="space-y-2">
                  {activeNodeData.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-200 font-mono">
                      <CheckCircle className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Observability & Security Badges */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-brand-violet" />
                  <span>Langfuse Tracing: Enabled</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SOC2 Certified</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
