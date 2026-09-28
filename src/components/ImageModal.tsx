import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
}

interface ImageModalProps {
  item: ProductItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Click outside */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden bg-slate-900 border border-cyan-500/30 shadow-2xl flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{item.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-4"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container */}
        <div className="p-4 overflow-y-auto flex items-center justify-center bg-black/50">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[70vh] w-auto rounded-xl object-contain shadow-2xl border border-slate-800"
          />
        </div>
      </div>
    </div>
  );
};
