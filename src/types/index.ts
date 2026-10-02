export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  tags: string[];
  capabilities: string[];
  highlight?: boolean;
}

export interface TechItem {
  name: string;
  category: string;
  description: string;
  iconSvg?: string;
  iconName?: string;
  level: string;
  featured?: boolean;
}

export interface TechCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
  items: TechItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: 'ai-platform' | 'agentic-ai' | 'rag-systems' | 'cybersecurity' | 'enterprise' | 'blockchain';
  shortDescription: string;
  fullProblem: string;
  fullSolution: string;
  architectureHighlights: string[];
  keyCapabilities: string[];
  techStack: string[];
  aiArchitectureDetails?: {
    modelArchitecture: string;
    agentWorkflow: string;
    ragPipeline: string;
    toolIntegration: string;
    securityConsiderations: string;
  };
  metrics?: { label: string; value: string }[];
  demoVideoUrl?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  imageUrl: string;
  badge?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  details: string[];
  deliverables: string[];
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  github?: string;
  linkedin?: string;
}

export interface SecurityFeature {
  title: string;
  description: string;
  iconName: string;
  badge: string;
  codeSnippet?: string;
}
