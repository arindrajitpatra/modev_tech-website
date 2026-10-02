import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { AIFocusSection } from './components/AIFocusSection';
import { AgenticAISection } from './components/AgenticAISection';
import { TechEcosystem } from './components/TechEcosystem';
import { Projects } from './components/Projects';
import { ProcessSection } from './components/ProcessSection';
import { SecuritySection } from './components/SecuritySection';
import { WhyUsSection } from './components/WhyUsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [initialContactService, setInitialContactService] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForContact = (serviceName: string) => {
    setInitialContactService(serviceName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 selection:bg-brand-cyan selection:text-dark-950 flex flex-col font-sans">
      
      {/* Sticky Header */}
      <Header onOpenContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onOpenContact={scrollToContact}
          onExploreWork={scrollToProjects}
        />

        <TrustStrip />

        <Services onSelectServiceForContact={handleSelectServiceForContact} />

        <AIFocusSection />

        <AgenticAISection />

        <TechEcosystem />

        <Projects onOpenContact={scrollToContact} />

        <ProcessSection />

        <SecuritySection />

        <WhyUsSection />

        <AboutSection />

        <ContactSection initialService={initialContactService} />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
