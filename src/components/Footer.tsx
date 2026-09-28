import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03060f] border-t border-slate-900 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white tracking-tight">
                ScholarBridge <span className="text-cyan-400">AI</span>
              </span>
              <p className="text-xs text-slate-400">
                Find. Apply. Track. Succeed.
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm">
            <a href="#problem" className="hover:text-cyan-400 transition-colors">Problem</a>
            <a href="#solution" className="hover:text-cyan-400 transition-colors">Solution</a>
            <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a>
            <a href="#product" className="hover:text-cyan-400 transition-colors">Product</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/80 text-center text-xs text-slate-300">
          <p>© 2026 ScholarBridge AI. Designed for accessibility and streamlined scholarship access.</p>
        </div>
      </div>
    </footer>
  );
};
