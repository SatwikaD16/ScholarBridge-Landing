import React, { useState } from 'react';
import { Sparkles, Menu, X, Play } from 'lucide-react';

interface NavbarProps {
  onWatchDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onWatchDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Product', href: '#product' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/10 bg-[#070d1e]/85 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/35 transition-all duration-300">
            <div className="w-full h-full bg-[#070d1e] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              ScholarBridge <span className="text-cyan-400 font-extrabold text-sm px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">AI</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onWatchDemo}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 shadow-md shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-200 active:scale-95"
          >
            <Play className="w-4 h-4 fill-slate-900 text-slate-900" />
            Watch Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-cyan-500/10 bg-[#070d1e]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-cyan-950/30"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onWatchDemo();
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 active:scale-98"
          >
            <Play className="w-4 h-4 fill-slate-900 text-slate-900" />
            Watch Demo
          </button>
        </div>
      )}
    </header>
  );
};
