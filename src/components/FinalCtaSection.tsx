import React from 'react';
import { ArrowRight, KeyRound, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenReservation: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#05080c] border-t border-[#c8a45d]/20 overflow-hidden text-center">
      
      {/* Background Portal Glow & Keyhole Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Soft Radiant Light Bloom */}
        <div className="w-[500px] h-[500px] rounded-full bg-radial from-[#0b8f5a]/25 via-[#c8a45d]/10 to-transparent filter blur-[90px]" />
        
        {/* Architectural Monumental Keyhole Outline */}
        <svg
          className="absolute w-[420px] h-[520px] opacity-15"
          viewBox="0 0 300 400"
          fill="none"
          stroke="#c8a45d"
          strokeWidth="0.8"
        >
          {/* Keyhole Arched Vault & Waist */}
          <circle cx="150" cy="140" r="90" strokeDasharray="3 3" />
          <circle cx="150" cy="140" r="60" />
          <path d="M 110 200 L 90 340 C 90 350 100 360 110 360 L 190 360 C 200 360 210 350 210 340 L 190 200" />
          {/* Riyadh skyline subtle silhouette inside keyhole base */}
          <line x1="90" y1="360" x2="210" y2="360" stroke="#0b8f5a" strokeWidth="1.5" />
          <rect x="140" y="270" width="20" height="90" fill="#c8a45d" fillOpacity="0.1" />
          <polygon points="140,270 150,230 160,270" fill="#c8a45d" fillOpacity="0.1" />
        </svg>

        {/* Floating orbital rings */}
        <div className="absolute w-[560px] h-[560px] rounded-full border border-[#c8a45d]/10 animate-orbit-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Monogram / Key Emblem */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#c8a45d]/50 bg-[#071a2b]/80 backdrop-blur-md mb-6 sm:mb-8 shadow-[0_0_25px_rgba(200,164,93,0.2)]">
          <KeyRound className="w-5 h-5 text-[#c8a45d]" />
        </div>

        {/* Small Eyebrow */}
        <div className="text-[10px] sm:text-[11px] font-mono-tech tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#c8a45d] mb-3 sm:mb-4">
          EXCLUSIVE EXECUTIVE INVITATION
        </div>

        {/* Headline */}
        <h2 className="font-editorial text-2xl sm:text-5xl lg:text-6xl text-[#f4f1e8] font-normal leading-tight tracking-tight mb-3 sm:mb-4 break-words">
          YOUR NEXT MARKET COULD BE <br className="hidden sm:inline" />
          <span className="italic text-[#c8a45d]">SAUDI ARABIA.</span>
        </h2>

        {/* Sub-headline */}
        <div className="font-editorial text-lg sm:text-3xl text-[#f4f1e8]/80 font-light tracking-wide mb-6 sm:mb-8">
          UNLOCK THE OPPORTUNITY.
        </div>

        {/* Short context */}
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#f4f1e8]/65 font-light leading-relaxed mb-8 sm:mb-10">
          Join C-suite peers, founders, and international expansion directors for an unfiltered, step-by-step masterclass on Saudi entity establishment.
        </p>

        {/* Dominant Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            type="button"
            onClick={onOpenReservation}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 text-xs font-semibold tracking-[0.2em] sm:tracking-[0.28em] uppercase text-[#05080c] bg-[#f4f1e8] hover:bg-[#c8a45d] transition-all duration-300 shadow-[0_8px_32px_rgba(200,164,93,0.35)] cursor-pointer"
          >
            <span>Reserve Your Place</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Session reminder metadata */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-[11px] font-mono-tech text-[#f4f1e8]/50">
          <span className="flex items-center gap-1.5 text-[#f4f1e8]">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a45d] flex-shrink-0" /> 26 SEPTEMBER 2026
          </span>
          <span className="hidden sm:inline">·</span>
          <span>3:30 PM IST (13:00 AST)</span>
          <span className="hidden sm:inline">·</span>
          <span>LIVE ONLINE EXECUTIVE ROOM</span>
          <span className="hidden sm:inline">·</span>
          <span className="text-[#0b8f5a] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" /> COMPLIMENTARY REGISTRATION
          </span>
        </div>

      </div>
    </section>
  );
};
