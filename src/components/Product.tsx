import React from 'react';
import { ZoomIn, LayoutDashboard, Search, ShieldCheck } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: React.ElementType;
  badge: string;
}

interface ProductProps {
  onSelectImage: (item: ProductItem) => void;
}

export const Product: React.FC<ProductProps> = ({ onSelectImage }) => {
  const items: ProductItem[] = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      subtitle: 'Student overview, application readiness, and interactive checklist.',
      image: '/assets/dashboard.png',
      icon: LayoutDashboard,
      badge: 'Student Experience',
    },
    {
      id: 'scholarship-matching',
      title: 'Scholarship Matching',
      subtitle: 'AI eligibility engine filtering programs by course, community, and income.',
      image: '/assets/find-scholarships.png',
      icon: Search,
      badge: 'Discovery Engine',
    },
    {
      id: 'officer-portal',
      title: 'Officer Portal',
      subtitle: 'Administrative dashboard for authorized officer scrutiny and deficiency flags.',
      image: '/assets/officer-portal.png',
      icon: ShieldCheck,
      badge: 'Administrative Review',
    },
  ];

  return (
    <section id="product" className="py-20 lg:py-28 relative bg-[#070d1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <span>Product Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Built for students. Designed for accessibility.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Intuitive interfaces tailored for mobile-first usage in rural and urban environments alike.
          </p>
        </div>

        {/* 3 Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectImage(item)}
                className="group cursor-pointer rounded-2xl bg-[#0b1329] border border-slate-800 hover:border-cyan-500/40 p-5 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col"
              >
                {/* Image / Mockup Container */}
                <div className="relative aspect-[9/16] max-h-[460px] w-full mx-auto rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 mb-5 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/10 transition-shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback placeholder if image is missing
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="flex flex-col items-center justify-center p-6 text-center h-full w-full bg-slate-900">
                            <span class="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-2">${item.title}</span>
                            <span class="text-xs text-slate-400">Placeholder Image</span>
                          </div>
                        `;
                      }
                    }}
                  />
                  
                  {/* Subtle hover overlay with zoom hint */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-4 h-4" />
                      <span>Click to Enlarge</span>
                    </div>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-cyan-300">
                    {item.badge}
                  </div>
                </div>

                {/* Card Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400 font-medium">
                    <span>View interface preview</span>
                    <span className="text-slate-500 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
