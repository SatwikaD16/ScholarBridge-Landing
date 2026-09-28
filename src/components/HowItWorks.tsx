import React from 'react';
import { 
  UserCheck, 
  Sparkles, 
  Send, 
  FileText, 
  Cpu, 
  ShieldCheck, 
  Award
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Profile',
      icon: UserCheck,
      desc: 'Enter basic education, category, and income details once.',
    },
    {
      num: '02',
      title: 'Match',
      icon: Sparkles,
      desc: 'AI instantly identifies high-relevance scholarships.',
    },
    {
      num: '03',
      title: 'Apply',
      icon: Send,
      desc: 'Initiate targeted application in a single streamlined flow.',
    },
    {
      num: '04',
      title: 'Documents',
      icon: FileText,
      desc: 'Upload required certificates with guided document checklists.',
    },
    {
      num: '05',
      title: 'AI-Assisted Checks',
      icon: Cpu,
      desc: 'Automated OCR readiness & completeness verification.',
    },
    {
      num: '06',
      title: 'Officer Review',
      icon: ShieldCheck,
      desc: 'Authorized officials verify eligibility on dedicated portal.',
    },
    {
      num: '07',
      title: 'Official Decision',
      icon: Award,
      desc: 'Final transparent approval status and disbursement tracking.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative bg-[#060a17] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <span>Lifecycle Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            How It Works
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Profile → Match → Apply → Documents → AI-Assisted Checks → Officer Review → Official Decision
          </p>
        </div>

        {/* Desktop Pipeline (Horizontal Grid) */}
        <div className="hidden lg:grid grid-cols-7 gap-3 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                {/* Step Connector Line */}
                {!isLast && (
                  <div className="absolute top-7 left-1/2 w-full h-[2px] bg-gradient-to-r from-cyan-500/40 via-cyan-500/10 to-transparent -z-0" />
                )}

                {/* Step Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-[#0b1329] border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-lg group-hover:border-cyan-400 group-hover:scale-105 group-hover:shadow-cyan-500/20 transition-all z-10">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Step Number & Title */}
                <span className="text-[11px] font-mono text-cyan-400 font-bold mb-1">
                  STEP {step.num}
                </span>
                <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed px-1">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Process List */}
        <div className="lg:hidden space-y-4 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#0b1329] border border-slate-800"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI & Governance Disclaimer Banner */}
        <div className="max-w-3xl mx-auto rounded-2xl p-6 bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-cyan-950/40 border border-cyan-500/25 text-center">
          <p className="text-sm sm:text-base text-cyan-200 font-medium leading-relaxed">
            <span className="font-bold text-white">AI assists the workflow.</span> Authorized officials retain the final decision.
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Compliant with transparent evaluation protocols and human-in-the-loop decision standards.
          </p>
        </div>

      </div>
    </section>
  );
};
