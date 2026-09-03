import React, { useState, useEffect } from 'react';
import { KeyRound, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onOpenReservation: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#05080c]/95 backdrop-blur-md border-b border-[#c8a45d]/20 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5 lg:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-3 text-decoration-none focus:outline-none"
        >
          <div className="w-8 h-8 rounded border border-[#c8a45d]/40 flex items-center justify-center bg-[#071a2b]/60 group-hover:border-[#c8a45d] transition-all duration-300 shadow-[0_0_15px_rgba(200,164,93,0.15)]">
            <KeyRound className="w-4 h-4 text-[#c8a45d] transition-transform duration-500 group-hover:rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="font-display tracking-[0.25em] text-xs sm:text-sm font-semibold text-[#f4f1e8] group-hover:text-white transition-colors">
              COMPLY GLOBALLY
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          <a
            href="#session"
            className="text-[12px] tracking-[0.2em] uppercase text-[#f4f1e8]/70 hover:text-[#c8a45d] transition-colors duration-200"
          >
            The Session
          </a>
          <a
            href="#why-saudi"
            className="text-[12px] tracking-[0.2em] uppercase text-[#f4f1e8]/70 hover:text-[#c8a45d] transition-colors duration-200"
          >
            Why Saudi
          </a>
          <a
            href="#landscape"
            className="text-[12px] tracking-[0.2em] uppercase text-[#f4f1e8]/70 hover:text-[#c8a45d] transition-colors duration-200"
          >
            Landscape
          </a>
          <a
            href="#speaker"
            className="text-[12px] tracking-[0.2em] uppercase text-[#f4f1e8]/70 hover:text-[#c8a45d] transition-colors duration-200"
          >
            Speaker
          </a>

          <button
            type="button"
            onClick={onOpenReservation}
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.25em] uppercase font-semibold text-[#05080c] bg-[#f4f1e8] hover:bg-[#c8a45d] transition-all duration-300 cursor-pointer overflow-hidden shadow-[0_2px_15px_rgba(200,164,93,0.2)]"
          >
            <span className="relative z-10">Reserve</span>
            <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#f4f1e8]/80 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05080c]/98 border-b border-[#c8a45d]/20 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            <a
              href="#session"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs tracking-[0.2em] uppercase text-[#f4f1e8]/80 py-2 border-b border-white/5"
            >
              The Session
            </a>
            <a
              href="#why-saudi"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs tracking-[0.2em] uppercase text-[#f4f1e8]/80 py-2 border-b border-white/5"
            >
              Why Saudi
            </a>
            <a
              href="#landscape"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs tracking-[0.2em] uppercase text-[#f4f1e8]/80 py-2 border-b border-white/5"
            >
              Landscape
            </a>
            <a
              href="#speaker"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs tracking-[0.2em] uppercase text-[#f4f1e8]/80 py-2 border-b border-white/5"
            >
              Speaker
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full mt-2 py-3 text-center text-xs tracking-[0.25em] uppercase font-semibold text-[#05080c] bg-[#c8a45d]"
            >
              Reserve Your Place
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
