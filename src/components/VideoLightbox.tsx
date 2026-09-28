import React, { useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoLightbox: React.FC<VideoLightboxProps> = ({ isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      // Play with sound when lightbox opens
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        videoRef.current.playbackRate = 1.0;
        videoRef.current.play().catch(() => {
          // If browser policy requires muted start
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    } else {
      document.body.style.overflow = '';
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Demo Video Player"
    >
      {/* Close button at top right */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 shadow-2xl transition-all duration-200 group active:scale-95"
        aria-label="Close video viewer"
        title="Close (Esc)"
      >
        <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
      </button>

      {/* Video Lightbox Card (Stops click propagation so clicking inside doesn't close) */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center max-h-[94vh] max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="w-full flex items-center justify-between px-4 py-2.5 mb-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-bold text-white">ScholarBridge AI</span>
            <span className="text-xs text-slate-400 hidden sm:inline">• Find. Apply. Track. Succeed.</span>
          </div>
          <span className="text-[11px] font-mono font-medium text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
            9:16 Video
          </span>
        </div>

        {/* 9:16 Video Container: Preserves exact aspect ratio without cropping or stretching */}
        <div className="relative aspect-[9/16] h-[78vh] sm:h-[84vh] max-h-[850px] w-auto max-w-[92vw] rounded-2xl overflow-hidden bg-black shadow-2xl border border-cyan-500/25 flex items-center justify-center">
          <video
            ref={videoRef}
            src="/assets/scholarbridge-demo.mp4"
            className="w-full h-full object-contain bg-black"
            controls
            autoPlay
            playsInline
            controlsList="nodownload"
            aria-label="ScholarBridge AI Fullscreen Demo Video"
          />
        </div>
      </div>
    </div>
  );
};
