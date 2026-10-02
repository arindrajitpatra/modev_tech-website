import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';
import { Menu, X, ArrowUpRight, Cpu, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (location.pathname === '/') {
        const sections = ['home', 'services', 'ai-focus', 'agentic-ai', 'solutions', 'tech', 'projects', 'process', 'security', 'why-us', 'about', 'contact'];
        const scrollPosition = window.scrollY + 220;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', sectionId: 'home', path: '/' },
    { label: 'Services', sectionId: 'services', path: '/services' },
    { label: 'AI Architecture', sectionId: 'ai-focus', path: '/' },
    { label: 'Agentic AI', sectionId: 'agentic-ai', path: '/' },
    { label: 'Solutions', sectionId: 'solutions', path: '/solutions' },
    { label: 'Technologies', sectionId: 'tech', path: '/technologies' },
    { label: 'Projects', sectionId: 'projects', path: '/projects' },
    { label: 'About', sectionId: 'about', path: '/about' },
    { label: 'Contact', sectionId: 'contact', path: '/contact' },
  ];

  const handleNavClick = (sectionId: string, path: string) => {
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/90 backdrop-blur-xl border-b border-slate-800/80 py-3.5 shadow-2xl shadow-dark-950/50'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between">
          
          {/* Company Brand Logo */}
          <button
            onClick={() => handleNavClick('home', '/')}
            className="flex items-center gap-3.5 group focus:outline-none text-left"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-violet p-[1px] shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-brand-cyan animate-pulse-slow" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white font-sans">
                  {SITE_CONFIG.shortName}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-blue/20 text-brand-cyan border border-brand-blue/30 tracking-wider uppercase">
                  TECH
                </span>
              </div>
              <span className="text-[11px] tracking-widest text-slate-400 font-mono hidden sm:inline-block">
                {SITE_CONFIG.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Hybrid Navigation Links */}
          <nav className="hidden xl:flex items-center gap-2 bg-dark-850/70 backdrop-blur-md px-6 py-2 rounded-full border border-slate-800/80 shadow-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname === '/' && activeSection === link.sectionId;
              return (
                <button
                  key={link.sectionId}
                  onClick={() => handleNavClick(link.sectionId, link.path)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-brand-blue/20 border border-brand-blue/40 shadow-glow-sm font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact', '/contact')}
              className="relative group overflow-hidden px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet hover:from-brand-blue hover:to-brand-cyan transition-all duration-300 shadow-glow-sm hover:shadow-glow-md flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Start a Project
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('contact', '/contact')}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-brand-blue/80 hover:bg-brand-blue rounded-lg transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-850 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-cyan" /> : <Menu className="w-6 h-6 text-slate-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-dark-900/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-2 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-slate-800">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => handleNavClick(link.sectionId, link.path)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all text-left ${
                  location.pathname === '/' && activeSection === link.sectionId
                    ? 'bg-brand-blue/20 text-brand-cyan border border-brand-blue/30 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact', '/contact')}
              className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue to-brand-violet flex items-center justify-center gap-2 shadow-glow-sm"
            >
              Let's Build Together
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
