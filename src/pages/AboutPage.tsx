import React from 'react';
import { Link } from 'react-router-dom';
import { AboutSection } from '../components/AboutSection';
import { ArrowRight, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 bg-dark-950 min-h-screen">
      <AboutSection />
      
      {/* Additional About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="rounded-3xl bg-dark-900 border border-slate-800 p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold text-white">Want to Partner with MoDEV Technology?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Whether you need a full enterprise AI system built from scratch or architectural guidance on existing codebases, our founders are ready to assist.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all shadow-glow-sm"
          >
            <span>Start a Project Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
