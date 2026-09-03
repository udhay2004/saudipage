import React from 'react';
import { Award, Briefcase, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';

export const SpeakerProfile: React.FC = () => {
  return (
    <section id="speaker" className="relative py-24 lg:py-32 bg-[#071a2b]/20 border-t border-[#c8a45d]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-px bg-[#c8a45d]" />
          <span className="text-[10px] font-mono-tech tracking-[0.3em] uppercase text-[#c8a45d]">
            SESSION HOST & LEAD STRATEGIST
          </span>
        </div>

        {/* Sophisticated Editorial Profile Composition (No generic circular card!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Speaker Portrait Composition with Architectural Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-1 rounded-xl bg-gradient-to-b from-[#c8a45d]/40 via-[#123c69]/30 to-transparent">
              <div className="relative rounded-lg overflow-hidden bg-[#071a2b] border border-white/10 shadow-[0_20px_50px_rgba(5,8,12,0.9)]">
                {/* Stylized Architectural Executive Portrait Canvas */}
                <div className="relative w-full h-[380px] sm:h-[440px] bg-gradient-to-br from-[#0a233a] via-[#071a2b] to-[#05080c] flex flex-col justify-end p-8 overflow-hidden">
                  
                  {/* Subtle Geometric Skyline Silhouette in background */}
                  <svg className="absolute top-0 right-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 300 300">
                    <polygon points="20,280 80,120 120,160 180,60 220,140 280,280" fill="#c8a45d" />
                    <line x1="0" y1="280" x2="300" y2="280" stroke="#c8a45d" strokeWidth="1" />
                  </svg>

                  {/* Sophisticated Monogram Silhouette & Lighting Accent */}
                  <div className="absolute top-8 left-8 w-16 h-16 rounded-full border border-[#c8a45d]/40 flex items-center justify-center bg-[#05080c]/60 backdrop-blur-md">
                    <span className="font-editorial text-2xl text-[#c8a45d] italic">AG</span>
                  </div>

                  {/* Luminous Light Sweep Across Frame */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#f4f1e8]/5 to-transparent pointer-events-none" />

                  {/* Floating Credentials Overlay Card */}
                  <div className="relative z-10 p-5 rounded-lg bg-[#05080c]/90 border border-[#c8a45d]/30 backdrop-blur-md">
                    <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#c8a45d] mb-1 tracking-wider uppercase">
                      <span>Verified Speaker</span>
                      <span className="flex items-center gap-1 text-[#0b8f5a]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0b8f5a]" /> Live Host
                      </span>
                    </div>
                    <div className="font-editorial text-2xl sm:text-3xl text-[#f4f1e8]">
                      Dr. Anil Gupta
                    </div>
                    <div className="text-xs font-mono-tech text-[#f4f1e8]/70 tracking-wide mt-1">
                      Senior Partner & GCC Expansion Lead
                    </div>
                    <div className="text-[11px] font-mono-tech text-[#c8a45d]/80 mt-0.5">
                      Comply Globally · Riyadh & Mumbai
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar Under Portrait */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-mono-tech border border-white/10 p-3 rounded-lg bg-[#05080c]/60">
              <div>
                <div className="text-[#c8a45d] font-bold text-sm">180+</div>
                <div className="text-white/40">Entities Advised</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-[#0b8f5a] font-bold text-sm">22+ Yrs</div>
                <div className="text-white/40">Cross-Border Law</div>
              </div>
              <div>
                <div className="text-[#f4f1e8] font-bold text-sm">$850M+</div>
                <div className="text-white/40">FDI Facilitated</div>
              </div>
            </div>
          </div>

          {/* Right: Distinguished Biography & Executive Perspective */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div>
              <div className="text-xs font-mono-tech text-[#c8a45d] tracking-[0.25em] uppercase mb-2">
                Executive Profile
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#f4f1e8] font-normal leading-tight">
                Authoritative Guidance From the Frontlines of Saudi Reform
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#f4f1e8]/80 font-light leading-relaxed">
              Dr. Anil Gupta is widely regarded as one of the preeminent cross-border establishment counsel connecting Indian industry with the GCC. Over two decades, he has guided multinational boards, technology ventures, EPC infrastructure giants, and family offices in navigating MISA licensing, corporate structuring, and regulatory clearance.
            </p>

            <p className="text-sm text-[#f4f1e8]/65 font-light leading-relaxed">
              Having represented foreign enterprises through the transition from SAGIA to MISA, and through the landmark implementation of the New Saudi Companies Law, Dr. Gupta delivers unfiltered, pragmatic intelligence directly applicable to your business.
            </p>

            {/* Key Areas of Direct Inquiry During Live Q&A */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-[11px] font-mono-tech uppercase tracking-widest text-[#c8a45d]">
                Specialized Inquiries Addressed in This Session
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 text-xs text-[#f4f1e8]/75 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#0b8f5a] flex-shrink-0 mt-0.5" />
                  <span>How to structure LLC articles to bypass arbitrary local partner disputes</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f4f1e8]/75 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#0b8f5a] flex-shrink-0 mt-0.5" />
                  <span>Navigating the 30-year tax holiday for Regional Headquarters (RHQ)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f4f1e8]/75 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#0b8f5a] flex-shrink-0 mt-0.5" />
                  <span>Corporate bank account opening SLAs and compliance documentation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f4f1e8]/75 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#0b8f5a] flex-shrink-0 mt-0.5" />
                  <span>Filing exemptions and optimal capital repatriation corridors</span>
                </div>
              </div>
            </div>

            {/* Direct Question Invitation */}
            <div className="p-4 rounded-lg bg-[#071a2b]/60 border border-[#c8a45d]/20 text-xs text-[#f4f1e8]/70 font-light flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c8a45d]" />
                Attendees will have direct microphone and chat access to Dr. Gupta during the open Q&A.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
