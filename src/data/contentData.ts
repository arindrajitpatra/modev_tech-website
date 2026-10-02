import { ServiceItem, TechCategory, ProjectItem, ProcessStep, TeamMember, SecurityFeature } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-genai',
    number: '01',
    title: 'AI & Generative AI Systems',
    category: 'Artificial Intelligence',
    description: 'Design and engineering of intelligent applications powered by modern foundation models, custom fine-tuning, and robust AI infrastructure.',
    detailedDescription: 'We build enterprise-grade Generative AI applications using state-of-the-art foundation models (Claude 3.5, GPT-4o, Llama 3, DeepSeek). Our solutions encompass domain-specific fine-tuning, continuous evaluation benchmarks, latency optimization, and cost-effective model routing.',
    iconName: 'Cpu',
    tags: ['Foundation Models', 'Fine-Tuning', 'Model Routing', 'Prompt Optimization'],
    capabilities: [
      'Multi-provider LLM abstraction layers',
      'Domain-specific fine-tuning & LoRA adapters',
      'Cost and latency optimization middleware',
      'LLM evaluation, guardrails & observability'
    ],
    highlight: true,
  },
  {
    id: 'agentic-ai',
    number: '02',
    title: 'Agentic AI & Multi-Agent Workflows',
    category: 'Agentic AI',
    description: 'Autonomous and semi-autonomous AI workflows using multi-agent architectures, dynamic planning, tool calling, and stateful orchestration.',
    detailedDescription: 'Transform static workflows into dynamic, self-correcting multi-agent systems. We implement Planner-Executor-Evaluator frameworks with stateful memory graph execution using LangGraph, CrewAI, and custom Python/Rust runtime orchestrators.',
    iconName: 'Bot',
    tags: ['Multi-Agent Systems', 'LangGraph', 'Autonomous Planning', 'Stateful Memory'],
    capabilities: [
      'Hierarchical & peer-to-peer multi-agent networks',
      'Autonomous goal decomposition & dynamic planning',
      'Self-healing code and workflow error correction',
      'Human-in-the-loop oversight & permission gates'
    ],
    highlight: true,
  },
  {
    id: 'llm-rag',
    number: '03',
    title: 'LLM & Advanced RAG Platforms',
    category: 'Knowledge Systems',
    description: 'Production-grade Retrieval-Augmented Generation platforms with hybrid semantic search, graph RAG, and enterprise knowledge graph integration.',
    detailedDescription: 'Stop hallucination with precision knowledge retrieval systems. We design hybrid vector & dense-sparse retrieval systems with re-ranking (Cohere, BGE), graph RAG knowledge topologies, and automated document parsing pipelines for complex PDFs, CAD files, and databases.',
    iconName: 'Database',
    tags: ['Hybrid Search', 'Vector DB', 'Graph RAG', 'Semantic Reranking'],
    capabilities: [
      'Hybrid BM25 + Vector Semantic Search with Re-ranking',
      'Graph RAG for relational entity mapping',
      'Real-time streaming ingestion pipelines',
      'Citation tracking and strict truthfulness verification'
    ],
    highlight: true,
  },
  {
    id: 'mcp-integration',
    number: '04',
    title: 'MCP & AI Tool Integration',
    category: 'AI Infrastructure',
    description: 'Connect AI systems with enterprise tools, databases, APIs, developer platforms, and legacy codebases using Model Context Protocol (MCP).',
    detailedDescription: 'Standardize how your LLMs interact with internal assets. As pioneers in the Model Context Protocol (MCP), we engineer custom MCP servers and clients to bridge LLMs securely with SQL/NoSQL databases, Git repositories, Jira, Salesforce, and custom REST/gRPC services.',
    iconName: 'Layers',
    tags: ['MCP Protocol', 'Custom Tooling', 'Secure Sandboxing', 'API Connectors'],
    capabilities: [
      'Custom Model Context Protocol (MCP) server development',
      'Zero-trust tool execution sandboxes',
      'Bi-directional streaming state synchronization',
      'Enterprise API & database connector suites'
    ],
    highlight: true,
  },
  {
    id: 'chatbots-copilots',
    number: '05',
    title: 'AI Chatbots & Workspace Copilots',
    category: 'Conversational UX',
    description: 'Context-aware conversational systems and specialized copilots embedded directly into desktop, web, and enterprise workflow tools.',
    detailedDescription: 'Create high-utility copilots tailored for engineers, financial analysts, customer success teams, and legal reviewers with sub-second response latency, multi-modal capabilities, and deep workflow context awareness.',
    iconName: 'MessageSquareCode',
    tags: ['Copilots', 'Multi-Modal', 'Slack/Teams Integrations', 'IDE Extensions'],
    capabilities: [
      'Specialized IDE & browser extension copilots',
      'Enterprise Slack, Teams & custom web workspace bots',
      'Multi-modal voice & vision interface support',
      'User context session retention & preference persistence'
    ],
  },
  {
    id: 'ai-automation',
    number: '06',
    title: 'Intelligent AI Automation',
    category: 'Automation',
    description: 'Automate high-complexity business operations using event-driven intelligent agents, automated document extraction, and decision engines.',
    detailedDescription: 'Replace fragile robotic process automation (RPA) with flexible, reasoning-driven AI automation pipelines capable of navigating unstructured documents, changing UI layouts, and complex logical edge cases.',
    iconName: 'Zap',
    tags: ['Workflow Engines', 'Document OCR', 'Event-Driven', 'RPA Replacement'],
    capabilities: [
      'Unstructured document extraction & verification',
      'Event-driven Kafka & RabbitMQ agent triggers',
      'Automated invoice, legal, and compliance processing',
      'Continuous performance auditing & drift detection'
    ],
  },
  {
    id: 'cybersecurity',
    number: '07',
    title: 'Cybersecurity & Security Engineering',
    category: 'Security',
    description: 'Security-focused software engineering, zero-trust backend systems, AI prompt injection defense, automated vulnerability scanning, and threat mitigation.',
    detailedDescription: 'Build inherently secure applications from line zero. We specialize in LLM vulnerability defense (OWASP Top 10 for LLMs), prompt injection protection, cryptographic identity verification, zero-trust API architecture, and automated SAST/DAST pipelines.',
    iconName: 'ShieldCheck',
    tags: ['Zero-Trust', 'OWASP for LLMs', 'Prompt Defense', 'API Security'],
    capabilities: [
      'LLM Firewall & real-time prompt injection mitigation',
      'Zero-trust JWT/mTLS microservice communications',
      'Cryptographic key management & HSM integration',
      'Automated threat modeling & penetration test remediation'
    ],
    highlight: true,
  },
  {
    id: 'blockchain-crypto',
    number: '08',
    title: 'Blockchain & Applied Cryptography',
    category: 'Distributed Systems',
    description: 'Distributed ledger architectures, zero-knowledge proof implementations, smart contract engineering, and secure cryptographic storage.',
    detailedDescription: 'Leverage decentralized state and verifiable computing for high-integrity audit trails, cross-organizational data exchange, smart contract execution, and ZK-SNARK privacy preservation.',
    iconName: 'Lock',
    tags: ['Zero-Knowledge', 'Smart Contracts', 'Auditable Ledgers', 'Web3 Protocols'],
    capabilities: [
      'Zero-knowledge (ZK) privacy-preserving data protocols',
      'Enterprise permissioned ledger architectures (Hyperledger / EVM)',
      'Smart contract auditing and formal verification',
      'Cryptographic proof of computing integrity for AI workloads'
    ],
  },
  {
    id: 'enterprise-backend',
    number: '09',
    title: 'Enterprise Backend Development',
    category: 'Core Engineering',
    description: 'Scalable, high-throughput backend services and microservices engineered with Java, Spring Boot, Python, Node.js, and Cloud Infrastructure.',
    detailedDescription: 'Engineered for 99.999% uptime and low millisecond response times. We craft clean, maintainable microservice architectures with Java Spring Boot, FastAPI, Node.js, enterprise messaging queues, and resilient database clusters.',
    iconName: 'Server',
    tags: ['Java Spring Boot', 'Python FastAPI', 'Node.js', 'Microservices'],
    capabilities: [
      'High-concurrency Java Spring Boot microservice networks',
      'Async Python FastAPI & Node.js event loops',
      'Distributed SQL (PostgreSQL, CockroachDB) & NoSQL tuning',
      'gRPC, RESTful, & GraphQL API contracts'
    ],
  },
  {
    id: 'modern-web',
    number: '10',
    title: 'Modern Web Engineering',
    category: 'Frontend & Web',
    description: 'High-performance web applications and rich responsive user experiences built with React, TypeScript, Tailwind CSS, and edge renderers.',
    detailedDescription: 'Delivering pixel-perfect, accessible, and blazingly fast web applications. We utilize React, TypeScript, Next.js/Vite, client-side caching, and modern web graphics to create responsive interfaces that load under 100ms.',
    iconName: 'Code',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    capabilities: [
      'React & TypeScript modular architectural standards',
      'Real-time WebSocket & Server-Sent Event (SSE) dynamic streaming',
      'Sub-100ms first contentful paint optimization',
      'Full WCAG AA accessibility & responsive fluid layouts'
    ],
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Foundation models, custom fine-tuning, embeddings, and NLP pipelines.',
    iconName: 'Brain',
    color: 'from-cyan-500 to-blue-500',
    items: [
      { name: 'LLMs & GenAI', category: 'ai-ml', description: 'Claude 3.5, GPT-4o, Llama 3, DeepSeek V3', level: 'Expert', featured: true },
      { name: 'RAG Systems', category: 'ai-ml', description: 'Hybrid Semantic Search & Dense Retrieval', level: 'Expert', featured: true },
      { name: 'AI Agents', category: 'ai-ml', description: 'Autonomous & Stateful Agentic Networks', level: 'Expert', featured: true },
      { name: 'PyTorch', category: 'ai-ml', description: 'Deep Learning & Tensor Framework', level: 'Advanced' },
      { name: 'Hugging Face', category: 'ai-ml', description: 'Transformers, Datasets & Quantization', level: 'Advanced' },
      { name: 'Vector Search', category: 'ai-ml', description: 'Cosine, Dot Product & HNSW indexing', level: 'Expert' },
      { name: 'Embeddings', category: 'ai-ml', description: 'OpenAI, BGE, Voyage AI, Cohere Embed', level: 'Expert' },
      { name: 'NLP & Vision', category: 'ai-ml', description: 'OCR, Document Parsing & Multimodal', level: 'Advanced' },
    ]
  },
  {
    id: 'ai-infra',
    name: 'AI Infrastructure & MCP',
    description: 'Model Context Protocol, agent frameworks, vector storage, and AI telemetry.',
    iconName: 'Workflow',
    color: 'from-purple-500 to-indigo-500',
    items: [
      { name: 'MCP Protocol', category: 'ai-infra', description: 'Anthropic Model Context Protocol Servers/Clients', level: 'Pioneer', featured: true },
      { name: 'LangChain & LangGraph', category: 'ai-infra', description: 'State Graph Agent Orchestration', level: 'Expert', featured: true },
      { name: 'Pinecone / Qdrant', category: 'ai-infra', description: 'High-Scale Vector Databases', level: 'Expert' },
      { name: 'Milvus & pgvector', category: 'ai-infra', description: 'Enterprise Vector Storage Engines', level: 'Expert' },
      { name: 'Langfuse / Arize', category: 'ai-infra', description: 'LLM Observability, Tracing & Guardrails', level: 'Advanced' },
      { name: 'Ollama & vLLM', category: 'ai-infra', description: 'Self-Hosted High-Throughput Inference', level: 'Advanced' },
      { name: 'LlamaIndex', category: 'ai-infra', description: 'Data Indexing for Complex Knowledge RAG', level: 'Advanced' },
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Microservices',
    description: 'Scalable cloud backends, enterprise APIs, and message queues.',
    iconName: 'Server',
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Java & Spring Boot', category: 'backend', description: 'Enterprise Microservices & Security', level: 'Expert', featured: true },
      { name: 'Python & FastAPI', category: 'backend', description: 'High-Performance Async AI Microservices', level: 'Expert', featured: true },
      { name: 'Node.js & Express', category: 'backend', description: 'Real-Time Event Loops & Tool Connectors', level: 'Expert', featured: true },
      { name: 'REST & gRPC APIs', category: 'backend', description: 'Strict Schema Protobuf & OpenAPI Specs', level: 'Expert' },
      { name: 'Kafka & RabbitMQ', category: 'backend', description: 'Distributed Event Streaming Architecture', level: 'Advanced' },
      { name: 'Docker & Kubernetes', category: 'backend', description: 'Container Orchestration & Cloud Native', level: 'Advanced' },
    ]
  },
  {
    id: 'frontend',
    name: 'Modern Web Frontend',
    description: 'Ultra-fast web apps, interactive dynamic UI, and real-time dashboards.',
    iconName: 'Layout',
    color: 'from-cyan-400 to-teal-400',
    items: [
      { name: 'React 18', category: 'frontend', description: 'Component Architecture & Custom Hooks', level: 'Expert', featured: true },
      { name: 'TypeScript', category: 'frontend', description: 'Strict End-to-End Static Type Safety', level: 'Expert', featured: true },
      { name: 'Tailwind CSS', category: 'frontend', description: 'Utility-First Custom Responsive Systems', level: 'Expert', featured: true },
      { name: 'Vite & Next.js', category: 'frontend', description: 'Modern Build Tools & SSR/Edge Renderers', level: 'Expert' },
      { name: 'Framer Motion', category: 'frontend', description: 'Fluid Hardware-Accelerated Web Animations', level: 'Advanced' },
      { name: 'State Management', category: 'frontend', description: 'Zustand, Redux Toolkit & React Query', level: 'Expert' },
    ]
  },
  {
    id: 'data',
    name: 'Database & Storage',
    description: 'Relational, document, in-memory, and vector database management.',
    iconName: 'Database',
    color: 'from-blue-600 to-indigo-600',
    items: [
      { name: 'PostgreSQL', category: 'data', description: 'Relational Engine + pgvector Extension', level: 'Expert', featured: true },
      { name: 'MongoDB', category: 'data', description: 'Document Storage & Dynamic Schemas', level: 'Expert' },
      { name: 'Redis', category: 'data', description: 'In-Memory Cache, Sessions & Pub/Sub', level: 'Expert' },
      { name: 'Elasticsearch', category: 'data', description: 'Full-Text & Distributed Log Search', level: 'Advanced' },
      { name: 'Snowflake / BigQuery', category: 'data', description: 'Data Warehousing & Analytics', level: 'Advanced' },
    ]
  },
  {
    id: 'security',
    name: 'Cybersecurity & Protection',
    description: 'AI prompt firewalls, zero-trust authorization, and cryptography.',
    iconName: 'Shield',
    color: 'from-purple-600 to-pink-600',
    items: [
      { name: 'Prompt Shield / Guard', category: 'security', description: 'Real-time Prompt Injection & Jailbreak Defense', level: 'Expert', featured: true },
      { name: 'Zero-Trust Architecture', category: 'security', description: 'mTLS, OAuth2, OpenID Connect & RBAC', level: 'Expert', featured: true },
      { name: 'OWASP LLM Security', category: 'security', description: 'Top 10 Risk Audit & Mitigation', level: 'Expert' },
      { name: 'Cryptographic Protocols', category: 'security', description: 'AES-256-GCM, RSA, ECDSA & Key Management', level: 'Advanced' },
      { name: 'SAST / DAST Scanning', category: 'security', description: 'Automated CI/CD Vulnerability Verification', level: 'Advanced' },
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Cryptography',
    description: 'Verifiable compute, smart contracts, and decentralized ledgers.',
    iconName: 'Lock',
    color: 'from-amber-500 to-purple-500',
    items: [
      { name: 'Zero-Knowledge Proofs', category: 'blockchain', description: 'ZK-SNARKs & Privacy-Preserving Proofs', level: 'Advanced', featured: true },
      { name: 'EVM & Smart Contracts', category: 'blockchain', description: 'Solidity, Hardhat, Audit-Verified Contracts', level: 'Advanced' },
      { name: 'Distributed Ledgers', category: 'blockchain', description: 'Immutable Audit Trail Systems', level: 'Advanced' },
      { name: 'Decentralized Identity', category: 'blockchain', description: 'DID Protocols & Verifiable Credentials', level: 'Advanced' },
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'nexus-ai-agent-mesh',
    title: 'Nexus-Agent Mesh: Enterprise Autonomous Multi-Agent OS',
    subtitle: 'Orchestrating 50+ specialized LLM agents with secure Model Context Protocol',
    category: 'Agentic AI Platform',
    categorySlug: 'agentic-ai',
    badge: 'Flagship AI System',
    shortDescription: 'Multi-agent orchestration platform that decomposes enterprise workflows, executes tool calls via MCP, and delivers verified output with human-in-the-loop governance.',
    fullProblem: 'A global fintech enterprise struggled with manual compliance reviews taking 72+ hours per case, involving fragmented cross-department databases, legacy mainframe APIs, and strict security requirements.',
    fullSolution: 'MoDEV engineered Nexus-Agent Mesh—a multi-agent network powered by LangGraph and Anthropic Claude 3.5. Utilizing dynamic planner nodes, execution agents connect directly to internal SQL databases and secure REST services via custom Model Context Protocol (MCP) servers.',
    architectureHighlights: [
      'Hierarchical Planner-Executor-Auditor multi-agent topology',
      'Custom Model Context Protocol (MCP) server integration for isolated tool execution',
      'Stateful graph memory with automatic checkpointing and time-travel rollback',
      'Real-time streaming UI with granular agent execution visualization'
    ],
    keyCapabilities: [
      'Automated goal decomposition into parallel task DAGs',
      'Zero-trust sandboxed tool execution for SQL, PDF parsing, and APIs',
      'Real-time LLM prompt injection firewall filtering all input/output vectors',
      '94% reduction in case evaluation turn-around time (from 72 hours to 4 minutes)'
    ],
    techStack: ['Python', 'FastAPI', 'LangGraph', 'MCP Protocol', 'Claude 3.5 Sonnet', 'React', 'TypeScript', 'Tailwind CSS', 'Redis', 'PostgreSQL'],
    aiArchitectureDetails: {
      modelArchitecture: 'Claude 3.5 Sonnet router with Llama 3.3 70B local fallback',
      agentWorkflow: 'Plan-Execute-Verify Loop (Planner Node → 4 Parallel Tool Execution Nodes → Auditor Gate)',
      ragPipeline: 'Hybrid BM25 + Qdrant Vector search across 2.5M compliance policy documents',
      toolIntegration: '12 Secure MCP Servers (Postgres-MCP, Financial-API-MCP, Email-MCP, Document-Parser-MCP)',
      securityConsiderations: 'Prompt injection shield, mTLS agent transport, full immutable audit log on Postgres'
    },
    metrics: [
      { label: 'Time Reduction', value: '94.4%' },
      { label: 'Active Agents', value: '50+' },
      { label: 'Tool Calls/Day', value: '1.2M' },
      { label: 'Accuracy Rate', value: '99.2%' }
    ],
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    githubUrl: 'https://github.com/modev-technology/nexus-agent-mesh-demo',
    liveDemoUrl: 'https://nexus-demo.modevtech.com',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'omni-rag-knowledge-engine',
    title: 'OmniKnowledge: Enterprise Hybrid Graph-RAG System',
    subtitle: 'Sub-second semantic search & reasoning across 10M+ technical documents',
    category: 'Advanced RAG & Knowledge Systems',
    categorySlug: 'rag-systems',
    badge: 'Enterprise Production RAG',
    shortDescription: 'Production-grade RAG platform connecting unstructured PDFs, CAD files, database schemas, and Slack channels into a unified graph-augmented vector knowledge base.',
    fullProblem: 'An aerospace software provider suffered from knowledge silos where 15,000 engineers wasted 6+ hours weekly searching through legacy documentation, engineering change orders, and unstructured tech notes.',
    fullSolution: 'We developed OmniKnowledge—a hybrid Dense + Sparse vector retrieval system combined with Neo4j Knowledge Graph topology. The system parses multi-column PDFs, tables, and schematics, generating contextual embeddings re-ranked by Cohere Rerank v3.',
    architectureHighlights: [
      'Multi-modal document ingestion engine using custom Vision-OCR models',
      'Neo4j Knowledge Graph + Qdrant Hybrid HNSW vector indexing',
      'Sub-200ms semantic search response with strict source citation link back',
      'Spring Boot Java backend providing high-throughput microservice endpoints'
    ],
    keyCapabilities: [
      'Table-aware PDF extraction preserving mathematical matrix structure',
      'Context-aware answer synthesis with exact page-level source attribution',
      'Dynamic permission filtering matching enterprise Active Directory/Okta roles',
      'Automated hallucination scoring filter returning fallbacks when confidence < 88%'
    ],
    techStack: ['Java Spring Boot', 'Python', 'Qdrant Vector DB', 'Neo4j Graph DB', 'Cohere Rerank', 'React', 'TypeScript', 'Docker', 'AWS EKS'],
    aiArchitectureDetails: {
      modelArchitecture: 'GPT-4o / Claude 3.5 Sonnet dynamic model choice',
      agentWorkflow: 'Query Reformulation → Dense Hybrid Retrieval → Re-ranking → Answer Generation with Citations',
      ragPipeline: 'Chroma/Qdrant dense vector index + Neo4j entity graph + Cohere Rerank 3.5',
      toolIntegration: 'Confluence, SharePoint, Jira, GitHub, and S3 file connectors',
      securityConsiderations: 'Document-level ACL enforcement, encrypted vector embeddings at rest'
    },
    metrics: [
      { label: 'Documents Indexed', value: '10M+' },
      { label: 'Search Latency', value: '180ms' },
      { label: 'Search Accuracy', value: '98.7%' },
      { label: 'Engineering Hours Saved', value: '45,000/mo' }
    ],
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    githubUrl: 'https://github.com/modev-technology/omniknowledge-rag-spec',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cyber-guard-ai-defense',
    title: 'AegisShield: LLM Security Firewall & Prompt Injection Defense',
    subtitle: 'Zero-trust runtime guardrails protecting LLM endpoints from cyber exploits',
    category: 'Cybersecurity Engineering',
    categorySlug: 'cybersecurity',
    badge: 'Security Infrastructure',
    shortDescription: 'High-throughput security proxy that analyzes incoming LLM prompts and model responses for jailbreaks, prompt injections, data exfiltration, and PII leakage in real time.',
    fullProblem: 'Enterprise customers deploying customer-facing AI agents faced severe vulnerabilities from adversarial prompt injection attacks attempting to hijack internal tool calls and extract system secrets.',
    fullSolution: 'MoDEV engineered AegisShield—a low-latency Rust/FastAPI security gateway placed in front of LLM workloads. It performs multi-layer analysis including semantic vector anomaly detection, heuristic token scanning, and shadow evaluation.',
    architectureHighlights: [
      'Sub-5ms proxy inspection layer with zero impact on streaming response latency',
      'OWASP LLM Top 10 vulnerability rule engine and adversarial classifier model',
      'Automatic PII redaction (SSN, API keys, credit cards) before sending prompt to cloud providers',
      'Immutable cryptographic hash audit log for compliance reporting (SOC2 & HIPAA)'
    ],
    keyCapabilities: [
      'Real-time prompt injection & indirect jailbreak attack blocking',
      'Automated canary token insertion to detect system prompt extraction',
      'Fine-grained tool calling authorization policies for MCP interfaces',
      'Zero false-positive disruption for legitimate power users'
    ],
    techStack: ['Python', 'Rust', 'FastAPI', 'PyTorch', 'Redis Cluster', 'React', 'TypeScript', 'Tailwind CSS', 'Docker', 'Kubernetes'],
    aiArchitectureDetails: {
      modelArchitecture: 'DistilBERT adversarial classification model + custom regex & token entropy analysis',
      agentWorkflow: 'Input Scan → Risk Score Evaluation → Proxy Pass/Sanitize/Block → Output Leak Scan',
      ragPipeline: 'Vector DB of 500,000 known jailbreak payloads updated daily',
      toolIntegration: 'Proxy compatible with OpenAI, Anthropic, Ollama, and vLLM endpoints',
      securityConsiderations: 'AES-256 token encryption, zero-log plaintext policy, isolated container sandbox'
    },
    metrics: [
      { label: 'Latency Overhead', value: '<4ms' },
      { label: 'Attacks Blocked', value: '4.8M+' },
      { label: 'False Positive Rate', value: '0.01%' },
      { label: 'Compliance Score', value: '100%' }
    ],
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    githubUrl: 'https://github.com/modev-technology/aegisshield-core',
    liveDemoUrl: 'https://aegisshield.modevtech.com',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'enterprise-core-platform',
    title: 'Vanguard Core: Scalable Microservice Platform',
    subtitle: 'High-concurrency Java Spring Boot & Node.js backbone handling 50k req/sec',
    category: 'Enterprise Software',
    categorySlug: 'enterprise',
    badge: 'Enterprise Backend Architecture',
    shortDescription: 'Distributed high-availability platform powering mission-critical transaction processing, automated event-driven workflows, and real-time dashboard analytics.',
    fullProblem: 'A global logistics company experienced system bottlenecks during peak demand periods with legacy monolithic Java applications failing to scale horizontally.',
    fullSolution: 'MoDEV refactored the monolith into modular Java Spring Boot microservices integrated with Apache Kafka event streaming, Redis caching clusters, and reactive Node.js API gateways.',
    architectureHighlights: [
      'Event-driven Kafka architecture handling over 50,000 events per second',
      'Spring Boot 3 + Java 21 Virtual Threads (Project Loom) for ultra-low memory footprints',
      'React + TypeScript enterprise dashboard with dynamic grid layouts and WebSockets',
      'Automated Kubernetes CI/CD deployment pipelines with zero-downtime rolling updates'
    ],
    keyCapabilities: [
      'Distributed transactional integrity using Saga patterns across microservices',
      'Real-time WebSocket telemetry rendering 10,000 data points per second',
      'Role-based access control (RBAC) with OAuth2 / OpenID Connect single sign-on',
      '99.999% availability SLA achieved over 12 consecutive months'
    ],
    techStack: ['Java', 'Spring Boot 3', 'Node.js', 'Kafka', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Kubernetes', 'AWS'],
    metrics: [
      { label: 'Throughput', value: '50k req/s' },
      { label: 'P99 Latency', value: '12ms' },
      { label: 'Uptime SLA', value: '99.999%' },
      { label: 'Cost Reduction', value: '42%' }
    ],
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    githubUrl: 'https://github.com/modev-technology/vanguard-core-architecture',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'chain-proof-verifiable-ledger',
    title: 'VeriLedger: ZK Cryptographic Proof & Ledger',
    subtitle: 'Verifiable compute and immutable audit trails for AI workloads & data sharing',
    category: 'Blockchain & Cryptography',
    categorySlug: 'blockchain',
    badge: 'Applied Cryptography',
    shortDescription: 'Zero-knowledge cryptographically verifiable state machine ensuring tamper-proof record keeping, model execution validation, and multi-party privacy.',
    fullProblem: 'Healthcare organizations needed to share patient insights across hospital networks without revealing sensitive health records or violating HIPAA privacy regulations.',
    fullSolution: 'MoDEV designed VeriLedger—a zero-knowledge cryptographically auditable protocol using ZK-SNARK proofs and EVM-compatible permissioned ledger smart contracts.',
    architectureHighlights: [
      'ZK-SNARK proof generation for private query verification without raw data exposure',
      'High-throughput Rust cryptographic proof engine',
      'EVM-compatible permissioned smart contracts for immutable timestamped audit logs',
      'Clean React management dashboard for cryptographic key rotation and validator monitoring'
    ],
    keyCapabilities: [
      'Cryptographic proof of AI model training data lineage and inference integrity',
      'Privacy-preserving compliance verification across sovereign cloud regions',
      'Sub-second proof verification on mobile and browser clients',
      'Seamless REST and gRPC gateway integration for enterprise ERP systems'
    ],
    techStack: ['Rust', 'Solidity', 'Zero-Knowledge (ZK-SNARK)', 'Node.js', 'React', 'TypeScript', 'Web3.js', 'PostgreSQL'],
    metrics: [
      { label: 'Proof Gen Latency', value: '850ms' },
      { label: 'Verification Time', value: '18ms' },
      { label: 'Data Privacy', value: '100% ZK' },
      { label: 'Audited Contracts', value: '100%' }
    ],
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    githubUrl: 'https://github.com/modev-technology/veriledger-zk-proofs',
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'smart-copilot-workspace',
    title: 'PulseCopilot: Engineering Workflow Workspace',
    subtitle: 'Context-aware AI copilot integrated into developer IDEs & enterprise slack',
    category: 'AI Copilots & Workspaces',
    categorySlug: 'ai-platform',
    badge: 'Developer Experience AI',
    shortDescription: 'Specialized internal copilot that indexes GitHub repos, Jira tickets, and architectural docs to provide real-time code reviews, automated PR generation, and bug fixing.',
    fullProblem: 'Engineering teams lost velocity context-switching between code editors, Jira tickets, documentation sites, and CI/CD logs to diagnose build failures.',
    fullSolution: 'MoDEV built PulseCopilot—an intelligent assistant that connects developer workspace tools via MCP interfaces, generating contextual code recommendations and PR summaries directly inside VS Code and Slack.',
    architectureHighlights: [
      'VS Code extension & WebSockets engine for real-time code context streaming',
      'MCP integration for GitHub PR creation, Jira ticket status updating, and Jenkins log parsing',
      'Fine-tuned DeepSeek / Llama 3 coding models running on low-latency private endpoints',
      'Interactive React management console for team prompts and security rules'
    ],
    keyCapabilities: [
      'Automated pull request creation with architectural impact analysis',
      'Sub-second inline code completion with domain-specific API context',
      'Automated unit test generation matching team style guidelines',
      'Privacy-first design: zero training on client code repos'
    ],
    techStack: ['TypeScript', 'Node.js', 'Python', 'Ollama', 'Llama 3.3', 'VS Code Extension API', 'React', 'Tailwind CSS'],
    metrics: [
      { label: 'PR Velocity', value: '+48%' },
      { label: 'Context Switch', value: '-70%' },
      { label: 'Active Coders', value: '12,500' },
      { label: 'Satisfaction', value: '96%' }
    ],
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    githubUrl: 'https://github.com/modev-technology/pulsecopilot-extension',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Align',
    shortDesc: 'Deep-dive architectural review, technical objective definition, and risk identification.',
    details: [
      'Understand enterprise domain challenges & legacy data constraints',
      'Define clear technical metrics (latency, accuracy, throughput, security SLAs)',
      'Map security boundaries, compliance rules, and data residency policies',
      'Evaluate feasibility of AI foundation models vs custom lightweight architectures'
    ],
    deliverables: ['Technical Architecture Blueprint', 'Feasibility Assessment', 'Security & Risk Matrix'],
    iconName: 'Compass'
  },
  {
    number: '02',
    title: 'Architect & Design',
    shortDesc: 'High-level system topology design, API contracts, AI model selection, and memory specs.',
    details: [
      'Design modular microservice topologies & API schemas (OpenAPI / gRPC)',
      'Specify AI RAG pipelines, vector indexes, and model context protocol (MCP) connectors',
      'Formulate multi-agent orchestration state graphs and human-in-the-loop gates',
      'Draft security threat models (OWASP LLM Top 10) and prompt injection shields'
    ],
    deliverables: ['System Architecture Diagram', 'API Specification', 'AI Model & Memory Specs'],
    iconName: 'Cpu'
  },
  {
    number: '03',
    title: 'Engineer & Build',
    shortDesc: 'Iterative, high-velocity engineering with strict static typing and clean code standards.',
    details: [
      'Develop core backend services (Java Spring Boot, Python FastAPI, Node.js)',
      'Build frontend web applications with React, TypeScript, and responsive Tailwind components',
      'Implement AI workflows, agent tools, RAG retrievers, and prompt guardrails',
      'Enforce strict code review, static analysis (SAST), and unit test coverage'
    ],
    deliverables: ['Modular Code Repositories', 'Production Docker Containers', 'Automated CI/CD Pipelines'],
    iconName: 'Code'
  },
  {
    number: '04',
    title: 'Validate & Benchmark',
    shortDesc: 'Rigorous empirical testing across performance, security, accuracy, and edge cases.',
    details: [
      'Execute automated load and concurrency tests (up to 50k req/sec scenarios)',
      'Benchmark AI hallucination rates, retrieval precision (NDCG@10), and response latency',
      'Conduct penetration testing, prompt injection attack simulations, and secret scans',
      'Verify WCAG AA accessibility, cross-browser compatibility, and mobile responsiveness'
    ],
    deliverables: ['Benchmark Performance Report', 'AI Accuracy Matrix', 'Security Audit Certificate'],
    iconName: 'CheckCircle2'
  },
  {
    number: '05',
    title: 'Deploy & Orchestrate',
    shortDesc: 'Zero-downtime production deployment to cloud or hybrid enterprise infrastructure.',
    details: [
      'Deploy to AWS, Azure, GCP, or private sovereign cloud Kubernetes clusters',
      'Configure automated blue/green or canary deployment pipelines',
      'Initialize real-time telemetry dashboards (Grafana, Prometheus, Datadog, Langfuse)',
      'Conduct end-to-end user acceptance testing with client engineering teams'
    ],
    deliverables: ['Live Production Deployment', 'Telemetry & Alerting Suite', 'Runbook & Infrastructure Code'],
    iconName: 'Rocket'
  },
  {
    number: '06',
    title: 'Evolve & Optimize',
    shortDesc: 'Continuous observability, model re-evaluation, cost optimization, and feature evolution.',
    details: [
      'Monitor live model latency, token costs, and prompt drift patterns',
      'Implement continuous evaluation pipelines to refine prompts and vector embeddings',
      'Provide 24/7 level 3 engineering support and patch management',
      'Iterative roadmap feature enhancements driven by real telemetry data'
    ],
    deliverables: ['Monthly Telemetry Audits', 'Cost Optimization Reports', 'Ongoing Feature Upgrades'],
    iconName: 'RefreshCw'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Marcus Vance',
    role: 'Co-Founder & Chief AI Architect',
    bio: 'Former Senior AI Researcher with 12+ years in deep learning, LLM fine-tuning, and multi-agent systems. PhD in Computer Science (Artificial Intelligence).',
    expertise: ['LLM Orchestration', 'Agentic AI', 'Model Context Protocol', 'Vector Systems'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Elena Rostova',
    role: 'Co-Founder & VP of Systems Engineering',
    bio: 'Ex-Principal Distributed Systems Engineer. Specialized in high-concurrency Java Spring Boot microservices, Kafka event streaming, and cloud infrastructure.',
    expertise: ['Java / Spring Boot', 'Distributed Systems', 'Cloud Native (K8s)', 'Kafka Streaming'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Devon Sterling',
    role: 'Head of Cybersecurity & Cryptography',
    bio: '10+ years in application security, zero-trust network architectures, LLM prompt defense, and applied zero-knowledge cryptography.',
    expertise: ['AI Security Firewall', 'Zero-Trust Architectures', 'ZK Cryptography', 'Penetration Testing'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  }
];

export const SECURITY_FEATURES: SecurityFeature[] = [
  {
    title: 'AI Prompt Injection Shield',
    description: 'Multi-layered proxy that analyzes incoming prompts and output responses in real time, detecting jailbreaks, indirect injections, and system prompt extraction attacks before they reach internal tools.',
    iconName: 'ShieldAlert',
    badge: 'LLM Defense',
    codeSnippet: `// AegisShield Runtime Prompt Proxy
const analyzePrompt = async (userInput: string): Promise<SafetyResult> => {
  const score = await promptShield.evaluate({
    text: userInput,
    checks: ['jailbreak', 'indirect_injection', 'canary_leak'],
    threshold: 0.85
  });
  if (score.isAdversarial) throw new SecurityException("Blocked by MoDEV Prompt Shield");
  return sanitizeTokens(userInput);
};`
  },
  {
    title: 'Zero-Trust Tool Execution Sandboxing',
    description: 'When AI agents invoke tools (SQL queries, API calls, file ops via MCP), execution occurs within isolated ephemeral containers with strict least-privilege scoping.',
    iconName: 'Lock',
    badge: 'Agent Security',
    codeSnippet: `// Ephemeral Tool Execution Scoping
const executeMCPTool = async (toolCall: ToolCall, authContext: UserContext) => {
  const sandbox = await SandboxManager.createEphemeral({
    timeoutMs: 3000,
    networkPolicy: 'RESTRICTED_EGRESS',
    userScope: authContext.userRole
  });
  return await sandbox.run(toolCall.name, toolCall.args);
};`
  },
  {
    title: 'Cryptographic State & Data Auditing',
    description: 'All sensitive transactional data and LLM decision paths are cryptographically hashed and logged to immutable tamper-evident storage for full SOC2/HIPAA compliance.',
    iconName: 'FileCheck',
    badge: 'Audit Integrity',
    codeSnippet: `// Cryptographic Audit Trail Logger
const logExecutionState = (stateHash: string, agentId: string) => {
  const hashSignature = hmacSHA256(stateHash, process.env.AUDIT_HMAC_KEY);
  AuditLedger.append({
    timestamp: Date.now(),
    agentId,
    hashSignature,
    verified: true
  });
};`
  }
];
