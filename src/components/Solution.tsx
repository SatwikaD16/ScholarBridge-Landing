import React from 'react';
import { Sparkles, Mic, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const Solution: React.FC = () => {
  const solutions = [
    {
      icon: Sparkles,
      title: 'AI Scholarship Matching',
      tag: 'Smart Eligibility',
      description:
        'Instantly cross-references student academic profiles, community credentials, and income thresholds with thousands of government and institutional schemes.',
      points: [
        'Automated eligibility criteria matching',
        'Direct filters for Scheduled Tribe benefits',
        'Zero manual form-searching required',
      ],
    },
    {
      icon: Mic,
      title: 'Voice Assistance',
      tag: 'Vernacular Guidance',
      description:
        'Supports spoken conversational navigation in multiple regional languages, making complex applications accessible to students with limited digital literacy.',
      points: [
        'English, Tamil, Telugu, and Hindi support',
        'Audio-guided document instructions',
        'Optimized for low-bandwidth environments',
      ],
    },
    {
      icon: FileCheck,
      title: 'Document Intelligence',
      tag: 'Pre-flight Readiness',
      description:
        'Performs OCR inspection to verify certificate validity, match student names, and detect deficiencies before the application is submitted to officials.',
      points: [
        'Automated readability and completeness checks',
        'Proactive deficiency alerts prior to filing',
        'Reduces rejection cycles by up to 80%',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Application Tracking',
      tag: 'End-to-End Visibility',
      description:
        'Provides a single clear timeline showing verification stages, officer notes, and review status so students always know where they stand.',
      points: [
        'Clear milestone-by-milestone status',
        'Immediate notification for required corrections',
        'Transparent decision provenance',
      ],
    },
  ];

  return (
    <section id="solution" className="py-20 lg:py-28 relative bg-[#070d1e] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Platform</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            One scholarship journey.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Consolidating multiple access paths into a cohesive, intelligent workflow that guides students from first search to final approval.
          </p>
        </div>

        {/* 4 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 bg-gradient-to-br from-[#0c1630] to-[#070d1e] border border-cyan-500/15 hover:border-cyan-400/40 transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {item.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
