import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { TimeMechanismDial } from './TimeMechanismDial';
import { Countdown } from './Countdown';
import { KeyholePortal } from './KeyholePortal';
import { AtmosphericParticlesCanvas } from './AtmosphericParticlesCanvas';

interface HeroSectionProps {
  onOpenReservation: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservation,
  onExploreClick,
}) => {
  return (
    <section className="relative min-h-screen pt-20 pb-8 lg:pt-24 lg:pb-10 flex items-center overflow-hidden bg-[#05080c]">
      {/* Real-time Interactive Starlight & Constellation Canvas */}
      <AtmosphericParticlesCanvas />

      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="max-w-7xl mx-auto h-full border-x border-[#c8a45d]/10 grid grid-cols-12">
          <div className="col-span-4 border-r border-[#c8a45d]/10 hidden lg:block" />
          <div className="col-span-8 hidden lg:block" />
        </div>
      </div>

      {/* Ambient gradient lighting blooms */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-radial from-[#123c69]/25 via-[#071a2b]/10 to-transparent pointer-events-none filter blur-[110px]" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-radial from-[#0b8f5a]/15 to-transparent pointer-events-none filter blur-[95px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        {/* Asymmetric 40% Left / 60% Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: ~40-45% (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center max-w-xl">
            {/* Small Elegant Eyebrow with pulsing emerald dot */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-px bg-[#c8a45d]" />
              <span className="text-[11px] font-mono-tech tracking-[0.3em] uppercase text-[#c8a45d] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0b8f5a] animate-ping" />
                COMPLY GLOBALLY
              </span>
              <span className="text-[10px] tracking-wider text-[#f4f1e8]/40 font-mono-tech">
                / EXECUTIVE BRIEFING
              </span>
            </div>

            {/* Restrained Luxury Editorial Headline with subtle metallic shimmer */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[46px] font-normal leading-[1.08] tracking-tight text-[#f4f1e8] mb-4">
              YOUR KEY TO <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#c8a45d] via-[#f4f1e8] to-[#c8a45d] animate-shimmer-text">
                SAUDI ARABIA
              </span>
            </h1>

            {/* Short Supporting Message */}
            <p className="text-sm sm:text-base text-[#f4f1e8]/75 leading-relaxed font-light mb-5 max-w-md">
              Practical, institutional guidance on entering, licensing, and establishing a lasting commercial presence in the Kingdom of Saudi Arabia.
            </p>

            {/* 3:30 DIAL & DATE/TIME MECHANISM */}
            <div className="mb-4 border-y border-[#c8a45d]/15 py-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <TimeMechanismDial />
                <div className="hidden sm:flex flex-col justify-center text-right border-l border-white/5 pl-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#c8a45d] font-mono-tech">
                    Session Date
                  </span>
                  <span className="text-sm font-semibold tracking-wider text-[#f4f1e8]">
                    26 SEP 2026
                  </span>
                  <span className="text-[11px] text-[#0b8f5a] font-mono-tech flex items-center justify-end gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b8f5a] animate-pulse" />
                    Online Executive Room
                  </span>
                </div>
              </div>
            </div>

            {/* Restrained Live Countdown */}
            <div className="mb-5">
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#f4f1e8]/50 font-mono-tech mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#c8a45d]" /> Session Countdown
              </div>
              <Countdown />
            </div>

            {/* Dominant Primary CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenReservation}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.28em] uppercase text-[#05080c] bg-[#f4f1e8] hover:bg-[#c8a45d] transition-all duration-300 shadow-[0_4px_24px_rgba(200,164,93,0.25)] hover:shadow-[0_6px_35px_rgba(200,164,93,0.45)] cursor-pointer overflow-hidden"
              >
                {/* Button light sweep on hover */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
                <span className="relative z-10">Reserve Your Place</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-2 text-[11px] text-[#f4f1e8]/60 font-mono-tech tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0b8f5a]" />
                <span>Complimentary · Limited Seats</span>
              </div>
            </div>

            {/* Institutional verification note */}
            <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-6 text-[10px] font-mono-tech text-[#f4f1e8]/40 tracking-wider">
              <span>MISA COMPLIANT</span>
              <span>·</span>
              <span>VISION 2030 ALIGNED</span>
              <span>·</span>
              <span>DIRECT EXECUTIVE Q&A</span>
            </div>
          </div>

          {/* RIGHT COLUMN: ~55-60% (7 cols on lg) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <KeyholePortal onExploreClick={onExploreClick} />
          </div>

        </div>
      </div>
    </section>
  );
};
