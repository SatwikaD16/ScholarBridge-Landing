import React from 'react';
import { Search, FileQuestion, Activity, AlertCircle } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: Search,
      title: 'Find the Right Scholarship',
      tag: 'Discovery Barrier',
      description:
        'With multiple state and central portals, students struggle to locate schemes that specifically match their caste, income, course, and educational level.',
      highlight: 'Navigating dozens of eligibility rules manually is overwhelming and error-prone.',
    },
    {
      icon: FileQuestion,
      title: 'Understand Required Documents',
      tag: 'Documentation Friction',
      description:
        'Students often lack clear instructions on valid formats, issued dates, and specific certificate requirements, leading to avoidable rejection before scrutiny.',
      highlight: 'Missing or misaligned certificates cause the majority of application drop-offs.',
    },
    {
      icon: Activity,
      title: 'Track Your Application',
      tag: 'Visibility Gap',
      description:
        'Once submitted, applications enter an opaque review cycle without clear milestone updates, leaving students in the dark about pending corrections.',
      highlight: 'Critical deficiency notices are frequently missed due to lack of real-time alerts.',
    },
  ];

  return (
    <section id="problem" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#060a17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold tracking-wider uppercase">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Current Realities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Scholarship access shouldn't be difficult.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Despite numerous welfare schemes, eligible students often miss life-changing educational opportunities due to procedural complexities.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 bg-[#0b1329]/90 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                      {item.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Highlight Quote */}
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 italic">
                  "{item.highlight}"
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
