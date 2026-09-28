import React, { useRef, useEffect } from 'react';
import { Play, ArrowDown, Sparkles, CheckCircle2, Maximize2 } from 'lucide-react';

interface HeroProps {
  onWatchDemo: () => void;
  isLightboxOpen?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onWatchDemo, isLightboxOpen = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause local hero video if the full-screen lightbox is opened
  useEffect(() => {
    if (isLightboxOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isLightboxOpen]);

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Information */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase shadow-sm shadow-cyan-950">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>AI-Powered Scholarship Platform</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                ScholarBridge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">AI</span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-cyan-400">
                Find. Apply. Track. Succeed.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              An AI-assisted scholarship platform that simplifies scholarship discovery, application, document readiness and application tracking for Scheduled Tribe students.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onWatchDemo}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 transition-all duration-200 active:scale-95 group"
              >
                <div className="w-6 h-6 rounded-full bg-slate-900/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950 ml-0.5" />
                </div>
                Watch Demo
              </button>

              <a
                href="#problem"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200"
              >
                <span>Explore</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Key feature pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>AI Eligibility Matching</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Multilingual Voice Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Assisted Scrutiny Workflow</span>
              </div>
            </div>

          </div>

          {/* Right Column: Perfectly Centered Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center" id="hero-demo-player">
            <div 
              onClick={onWatchDemo}
              className="relative w-full max-w-[310px] sm:max-w-[340px] aspect-[9/16] rounded-[48px] p-3 sm:p-3.5 bg-gradient-to-b from-slate-700/85 via-slate-800/90 to-slate-900/95 border-2 border-slate-700/70 shadow-2xl phone-shadow group cursor-pointer"
              title="Click to open Fullscreen Demo Video"
            >
              
              {/* Phone Inner Screen (Symmetrical margins & bezels) */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black flex items-center justify-center border border-slate-800">
                
                {/* Front Camera / Dynamic Island Notch: PERFECTLY HORIZONTALLY CENTERED */}
                <div 
                  className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-28 h-5 sm:h-5.5 bg-black rounded-full flex items-center justify-center px-2 pointer-events-none shadow-md border border-slate-900/80"
                  aria-hidden="true"
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#182030] border border-slate-800 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#0a0f1d]" />
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0d1527] border border-slate-800/80" />
                  </div>
                </div>

                {/* Video Element inside Phone Screen */}
                <video
                  ref={videoRef}
                  src="/assets/scholarbridge-demo.mp4"
                  className="w-full h-full object-contain bg-black pointer-events-none"
                  playsInline
                  muted
                  preload="metadata"
                  aria-label="ScholarBridge AI Mobile Demo Video"
                />

                {/* Center Play Overlay Button */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/25 transition-all duration-300 backdrop-blur-[1px]">
                  <div className="w-16 h-16 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-cyan-400/50 group-hover:scale-110 active:scale-95 transition-transform mb-3">
                    <Play className="w-7 h-7 fill-slate-950 text-slate-950 ml-1" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/75 px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-white tracking-wide shadow-lg group-hover:border-cyan-400/40 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Watch Full Demo</span>
                  </div>
                </div>

                {/* Subtle glass gloss highlight overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />

              </div>

              {/* Hardware Symmetrical Side Buttons */}
              <div className="absolute -left-[3px] top-28 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
              <div className="absolute -left-[3px] top-42 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
              <div className="absolute -right-[3px] top-32 w-[3px] h-12 bg-slate-600 rounded-r-sm" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
