import React from 'react';
import { Play, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onWatchDemo: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onWatchDemo }) => {
  return (
    <section className="py-24 lg:py-32 relative bg-[#040814] overflow-hidden border-t border-slate-800">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Quote */}
        <p className="text-xl sm:text-2xl md:text-3xl text-cyan-300 font-medium italic max-w-3xl mx-auto leading-relaxed">
          “Every student deserves a simpler path to opportunity.”
        </p>

        {/* Brand Information */}
        <div className="space-y-3 pt-2">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            ScholarBridge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">AI</span>
          </h2>
          
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-slate-300">
            Find. Apply. Track. Succeed.
          </p>
        </div>

        {/* Button */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={onWatchDemo}
            className="flex items-center gap-3 px-10 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/35 transition-all duration-200 active:scale-95 group"
          >
            <div className="w-6 h-6 rounded-full bg-slate-900/15 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950 ml-0.5" />
            </div>
            Watch Demo
          </button>
        </div>

        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Empowering Students Through AI-Assisted Opportunity</span>
        </div>

      </div>
    </section>
  );
};
