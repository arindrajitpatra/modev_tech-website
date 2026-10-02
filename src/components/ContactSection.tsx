import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Sparkles, 
  Terminal,
  ArrowRight,
  RefreshCw
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: initialService || 'AI & Agentic Workflows',
    budget: '$25k - $50k',
    message: ''
  });

  const [selectedTechs, setSelectedTechs] = useState<string[]>([
    'Generative AI', 'Agentic AI', 'MCP Integration'
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableTechs = [
    'Generative AI / LLMs',
    'Agentic Workflows',
    'RAG Systems',
    'MCP Connectors',
    'Java Spring Boot',
    'Python FastAPI',
    'React Web App',
    'Cybersecurity Audit',
    'Blockchain / ZK'
  ];

  const toggleTech = (tech: string) => {
    if (selectedTechs.includes(tech)) {
      setSelectedTechs(selectedTechs.filter(t => t !== tech));
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-900 overflow-hidden border-t border-slate-800">
      
      {/* Background glow graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-blue/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            START A CONVERSATION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a Complex Problem? <br />
            <span className="text-gradient-cyan-blue">Let's Engineer the Solution.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Tell us what you're building. We'll explore the technology, system architecture, and path to production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-brand-cyan" />
                Direct Engineering Desk
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our technical principals. No high-pressure sales calls—just straightforward architectural analysis.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="p-2.5 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-brand-cyan">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">DIRECT EMAIL</div>
                    <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="font-semibold text-white hover:text-brand-cyan transition-colors">
                      {SITE_CONFIG.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="p-2.5 rounded-xl bg-brand-violet/15 border border-brand-violet/30 text-brand-violet">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">GLOBAL HUBS</div>
                    <div className="font-semibold text-white">{SITE_CONFIG.location}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-[10px] font-mono text-slate-400 uppercase">CONNECT ON SOCIAL</div>
                <div className="flex items-center gap-3">
                  <a href={SITE_CONFIG.socialLinks.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={SITE_CONFIG.socialLinks.twitter} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quick SLA Note */}
            <div className="p-4 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 text-xs text-slate-300 font-mono flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0" />
              <span>Response SLA: You will receive an initial architectural response within 24 hours.</span>
            </div>

          </div>

          {/* Right Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-dark-950 border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-6">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Project Inquiry Received</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to MoDEV Technology. Our principal system architects are evaluating your specifications and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', projectType: 'AI & Agentic Workflows', budget: '$25k - $50k', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white border border-slate-800 hover:bg-dark-900"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-400">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-800 focus:border-brand-cyan focus:outline-none text-xs text-white placeholder-slate-600 font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-400">WORK EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-800 focus:border-brand-cyan focus:outline-none text-xs text-white placeholder-slate-600 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-400">COMPANY / ORGANIZATION</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nexus Innovations Corp"
                        className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-800 focus:border-brand-cyan focus:outline-none text-xs text-white placeholder-slate-600 font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-400">TARGET TIMELINE / BUDGET</label>
                      <select
                        value={formData.budget}
                        onChange={e => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-800 focus:border-brand-cyan focus:outline-none text-xs text-white font-sans"
                      >
                        <option value="< $25k">&lt; $25,000</option>
                        <option value="$25k - $50k">$25,000 - $50,000</option>
                        <option value="$50k - $100k">$50,000 - $100,000</option>
                        <option value="$100k+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Multi-Select Tech Stack Buttons */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold text-slate-400">REQUIRED TECHNOLOGIES & DOMAINS</label>
                    <div className="flex flex-wrap gap-2">
                      {availableTechs.map((tech) => {
                        const isSelected = selectedTechs.includes(tech);
                        return (
                          <button
                            key={tech}
                            type="button"
                            onClick={() => toggleTech(tech)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                              isSelected
                                ? 'bg-brand-blue/20 text-brand-cyan border border-brand-blue/50 shadow-glow-sm'
                                : 'bg-dark-900 text-slate-400 border border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}{tech}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-400">PROJECT OBJECTIVES & TECHNICAL CONSTRAINTS</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your system requirements, target data sources, latency expectations, or security rules..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-800 focus:border-brand-cyan focus:outline-none text-xs text-white placeholder-slate-600 font-sans leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all shadow-glow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Transmitting Architectural Brief...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Architecture Request</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
