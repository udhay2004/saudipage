import React, { useState } from 'react';
import { Compass, ShieldCheck, Landmark, TrendingUp, CheckCircle2 } from 'lucide-react';
import { PillarItem } from '../types';

export const PillarsSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('entry');

  const pillars: PillarItem[] = [
    {
      id: 'entry',
      title: 'ENTRY',
      subtitle: 'Market Qualification & License Mapping',
      description: 'Navigating the immediate threshold of foreign direct investment without unnecessary intermediaries or delayed approvals.',
      focusAreas: [
        'Precise ISIC4 activity code classification across service, trading, and industrial frameworks',
        'Verification of parent company 1-year audited financials for MISA approval',
        'Direct application routing via SBC single window to eliminate third-party agency markup',
        'Pre-clearance documentation checklist for Indian board resolutions and Powers of Attorney',
      ],
    },
    {
      id: 'structure',
      title: 'STRUCTURE',
      subtitle: 'Corporate Architecture & Capital Mobility',
      description: 'Designing resilient legal foundations that guarantee 100% foreign equity, liability isolation, and free dividend repatriation.',
      focusAreas: [
        'Comparative evaluation: LLC (Limited Liability) vs Foreign Branch vs RHQ',
        'Capitalization requirements and structuring of General Manager authority in the Articles of Association',
        'Corporate bank account opening protocol with top-tier Saudi financial institutions',
        'Cross-border profit repatriation mechanics with double taxation avoidance alignment',
      ],
    },
    {
      id: 'compliance',
      title: 'COMPLIANCE',
      subtitle: 'Statutory Governance & Local Regulations',
      description: 'Mastering the operational ecosystem of taxation, social insurance, and national workforce quotas from day one.',
      focusAreas: [
        'ZATCA tax registration: Corporate Income Tax (20%) and VAT (15%) filing cycles',
        'Fatoora Phase 2 e-Invoicing technical integration standards for Indian tech stacks',
        'Saudization (Nitaqat) calculation formulas and grace periods for new market entrants',
        'GOSI, Qiwa, and Muqeem portal activations for corporate visa issuance and employee transfers',
      ],
    },
    {
      id: 'growth',
      title: 'GROWTH',
      subtitle: 'Procurement Tenders & Giga-Project Scale',
      description: 'Positioning your Saudi entity to win government tenders, enter public-private partnerships, and participate in Vision 2030 projects.',
      focusAreas: [
        'Etimad portal vendor registration for direct Saudi government ministry procurement',
        'Vendor pre-qualification standards for NEOM, Red Sea Global, Diriyah Company, and ROSHN',
        'Regional Headquarters (RHQ) program qualification criteria and commercial incentives',
        'Building sovereign commercial credibility and bilateral joint venture alliances',
      ],
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section className="relative py-24 lg:py-32 bg-[#05080c] border-t border-[#c8a45d]/15 overflow-hidden">
      {/* Dark Architectural Grid Map Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c8a45d" strokeWidth="0.5" strokeOpacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#archGrid)" />
          
          {/* Subtle Saudi Regional Hub Coordinates */}
          <circle cx="55%" cy="45%" r="3" fill="#0b8f5a" />
          <text x="56%" y="46%" fill="#c8a45d" fontSize="9" fontFamily="Space Grotesk">RIYADH [HQ]</text>
          
          <circle cx="42%" cy="52%" r="2" fill="#c8a45d" />
          <text x="43%" y="53%" fill="#f4f1e8" fontSize="8" fontFamily="Space Grotesk" opacity="0.6">JEDDAH</text>

          <circle cx="68%" cy="42%" r="2" fill="#c8a45d" />
          <text x="69%" y="43%" fill="#f4f1e8" fontSize="8" fontFamily="Space Grotesk" opacity="0.6">DAMMAM</text>

          <circle cx="34%" cy="28%" r="2" fill="#0b8f5a" />
          <text x="35%" y="29%" fill="#0b8f5a" fontSize="8" fontFamily="Space Grotesk" opacity="0.8">NEOM</text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="pb-12 mb-12 border-b border-white/10 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <Compass className="w-3.5 h-3.5 text-[#c8a45d]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8a45d] font-mono-tech">
              SECTION 04 · EXECUTIVE CURRICULUM
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#f4f1e8] font-normal leading-tight">
            WHY THIS SESSION MATTERS
          </h2>
          <p className="mt-4 text-sm text-[#f4f1e8]/65 font-light leading-relaxed">
            Four interconnected strategic disciplines. Every minute of this executive webinar is calibrated to deliver actionable tactical advantage.
          </p>
        </div>

        {/* The 4 Dominant Sequential Words */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {pillars.map((item, idx) => {
            const isSelected = activePillar === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActivePillar(item.id)}
                className={`group text-left p-4 sm:p-6 transition-all duration-300 border rounded-lg cursor-pointer ${
                  isSelected
                    ? 'bg-[#071a2b] border-[#c8a45d] shadow-[0_0_25px_rgba(200,164,93,0.15)]'
                    : 'bg-[#05080c]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono-tech mb-2">
                  <span className={isSelected ? 'text-[#c8a45d]' : 'text-white/40'}>
                    0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b8f5a]" />
                </div>
                <div
                  className={`font-editorial text-2xl sm:text-3xl tracking-wide font-normal transition-colors ${
                    isSelected ? 'text-[#f4f1e8]' : 'text-[#f4f1e8]/60 group-hover:text-[#f4f1e8]'
                  }`}
                >
                  {item.title}
                </div>
                <div className="text-[11px] font-mono-tech text-[#c8a45d]/70 mt-1 truncate">
                  {item.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep Architectural Blueprint */}
        <div className="p-8 sm:p-12 rounded-xl border border-[#c8a45d]/20 bg-[#071a2b]/30 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Scope & Rationale */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-[#c8a45d]/30 text-[10px] font-mono-tech text-[#c8a45d] uppercase tracking-wider">
                Strategic Focus Area
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#f4f1e8]">
                {currentPillar.title} · {currentPillar.subtitle}
              </h3>
              <p className="text-sm text-[#f4f1e8]/75 font-light leading-relaxed">
                {currentPillar.description}
              </p>

              <div className="pt-4 flex items-center gap-3 text-xs font-mono-tech text-[#0b8f5a]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Includes real-case templates and workflow flowcharts</span>
              </div>
            </div>

            {/* Right Column: Key Deliverables for This Pillar */}
            <div className="lg:col-span-7 bg-[#05080c]/80 border border-white/5 p-6 sm:p-8 rounded-lg">
              <div className="text-[11px] font-mono-tech text-[#c8a45d] uppercase tracking-widest mb-4">
                Specific In-Depth Topics Covered
              </div>
              <div className="space-y-4">
                {currentPillar.focusAreas.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-[#c8a45d]/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-mono-tech text-[#c8a45d]">
                      {i + 1}
                    </div>
                    <span className="text-xs sm:text-sm text-[#f4f1e8]/80 font-light leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
