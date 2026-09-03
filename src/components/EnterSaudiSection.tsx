import React, { useState } from 'react';
import { KeyRound, Sparkles, Building2, TrendingUp, Landmark, ShieldCheck } from 'lucide-react';
import { SaudiEconomicRadar } from './SaudiEconomicRadar';

export const EnterSaudiSection: React.FC = () => {
  const [activeLens, setActiveLens] = useState<'transformation' | 'capital' | 'corridor'>('transformation');

  return (
    <section id="why-saudi" className="relative py-16 lg:py-20 bg-[#05080c] border-t border-[#c8a45d]/15 overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="max-w-7xl mx-auto h-full border-x border-[#c8a45d]/20 grid grid-cols-6">
          <div className="border-r border-[#c8a45d]/20" />
          <div className="border-r border-[#c8a45d]/20" />
          <div className="border-r border-[#c8a45d]/20" />
          <div className="border-r border-[#c8a45d]/20" />
          <div className="border-r border-[#c8a45d]/20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header: Editorial & Restrained */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 mb-8 sm:mb-14 border-b border-white/10 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <KeyRound className="w-3.5 h-3.5 text-[#c8a45d]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8a45d] font-mono-tech">
                SECTION 03 · THE EXPANSION HORIZON
              </span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl text-[#f4f1e8] font-normal leading-tight">
              ENTER SAUDI ARABIA
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#f4f1e8]/65 font-light leading-relaxed">
            Saudi Arabia is experiencing the most profound economic modernization in modern history. The gateway to sustainable expansion begins with knowing which statutory pathways to navigate first.
          </p>
        </div>

        {/* Central Visual Architecture: The Unlocked Horizon */}
        <div className="relative rounded-2xl border border-[#c8a45d]/20 bg-[#071a2b]/40 backdrop-blur-md p-4 sm:p-8 lg:p-12 mb-10 sm:mb-16 shadow-[0_20px_50px_rgba(5,8,12,0.8)]">
          {/* Top Architectural Aperture Coordinates */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 sm:pb-6 border-b border-white/5 text-[9px] sm:text-[10px] font-mono-tech tracking-wider text-[#c8a45d]/70">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0b8f5a] animate-ping flex-shrink-0" />
              GATEWAY STATE: UNLOCKED
            </span>
            <span>KINGDOM OF SAUDI ARABIA · VISION 2030</span>
            <span className="hidden md:inline">COORDINATES: 24°42&apos;49&quot;N 46°40&apos;22&quot;E</span>
          </div>

          {/* Lens Selector Tabs (Editorial style) */}
          <div className="flex items-center gap-3 sm:gap-6 py-4 sm:py-6 border-b border-white/5 overflow-x-auto scrollbar-none whitespace-nowrap">
            <button
              type="button"
              onClick={() => setActiveLens('transformation')}
              className={`text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-mono-tech pb-1.5 transition-all flex-shrink-0 cursor-pointer ${
                activeLens === 'transformation'
                  ? 'text-[#c8a45d] border-b-2 border-[#c8a45d]'
                  : 'text-[#f4f1e8]/50 hover:text-[#f4f1e8]'
              }`}
            >
              01 · The Transformation
            </button>
            <button
              type="button"
              onClick={() => setActiveLens('capital')}
              className={`text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-mono-tech pb-1.5 transition-all flex-shrink-0 cursor-pointer ${
                activeLens === 'capital'
                  ? 'text-[#c8a45d] border-b-2 border-[#c8a45d]'
                  : 'text-[#f4f1e8]/50 hover:text-[#f4f1e8]'
              }`}
            >
              02 · Global Capital
            </button>
            <button
              type="button"
              onClick={() => setActiveLens('corridor')}
              className={`text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-mono-tech pb-1.5 transition-all flex-shrink-0 cursor-pointer ${
                activeLens === 'corridor'
                  ? 'text-[#c8a45d] border-b-2 border-[#c8a45d]'
                  : 'text-[#f4f1e8]/50 hover:text-[#f4f1e8]'
              }`}
            >
              03 · The Indo-Saudi Corridor
            </button>
          </div>

          {/* Dynamic Lens Content */}
          <div className="pt-8">
            {activeLens === 'transformation' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono-tech text-[#c8a45d] tracking-wider uppercase flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5" /> Giga-Project Scale
                  </div>
                  <h3 className="font-editorial text-2xl text-[#f4f1e8]">
                    Re-Architecting the Arabian Peninsula
                  </h3>
                  <p className="text-xs text-[#f4f1e8]/70 leading-relaxed font-light">
                    Over $1.25 trillion in civil, technological, and infrastructure projects commissioned across NEOM, The Red Sea, Diriyah, and Qiddiya.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-mono-tech text-[#0b8f5a] tracking-wider uppercase flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5" /> Regulatory Modernization
                  </div>
                  <h3 className="font-editorial text-2xl text-[#f4f1e8]">
                    New Companies Law
                  </h3>
                  <p className="text-xs text-[#f4f1e8]/70 leading-relaxed font-light">
                    Streamlined company formation, protection of minority shareholders, simplified issuance of shares, and zero minimum capital for standard LLCs.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-mono-tech text-[#c8a45d] tracking-wider uppercase flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" /> Full Equity Autonomy
                  </div>
                  <h3 className="font-editorial text-2xl text-[#f4f1e8]">
                    100% Foreign Ownership
                  </h3>
                  <p className="text-xs text-[#f4f1e8]/70 leading-relaxed font-light">
                    International founders and corporations can retain 100% equity under MISA licensing without requiring a mandatory local sponsor in over 90% of industries.
                  </p>
                </div>
              </div>
            )}

            {activeLens === 'capital' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono-tech text-[#c8a45d] tracking-wider uppercase">
                    Tax Incentives
                  </div>
                  <h3 className="font-editorial text-2xl text-[#f4f1e8]">
                    Special Economic Zones (SEZ)
                  </h3>
                  <p className="text-xs text-[#f4f1e8]/70 leading-relaxed font-light">
                    King Abdullah Economic City, Jazan, Ras Al-Khair, and Cloud Computing SEZ offer 5% corporate tax rates, 0% withholding tax on profit repatriation, and customs duty exemptions.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-mono-tech text-[#0b8f5a] tracking-wider uppercase">
                    Regional Mandate
                  </div>
                  <h3 className="font-editorial text-2xl text-[#f4f1e8]">
                    RHQ Tax Holiday
                  </h3>
                  <p className="text-xs text-[#f4f1e8]/70 leading-relaxed font-light">
                    Multinational corporations establishing their Regional Headquarters in Riyadh benefit from a 30-year 0% corporate income tax rate and 0% withholding tax on eligible activities.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-mono-tech text-[#c8a45d] tracking-wider uppercase">
                    Capital Mobility
                  </div>
                  <h3 className="font-editorial text-2xl text-[#f4f1e8]">
                    Unrestricted Repatriation
                  </h3>
                  <p className="text-xs text-[#f4f1e8]/70 leading-relaxed font-light">
                    Freely repatriate dividends, capital, and profits through licensed commercial banks with no exchange controls or currency restrictions against the Saudi Riyal (pegged to USD).
                  </p>
                </div>
              </div>
            )}

            {activeLens === 'corridor' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono-tech text-[#c8a45d] tracking-wider uppercase">
                    Bilateral Momentum
                  </div>
                  <h3 className="font-editorial text-2xl text-[#f4f1e8]">
                    India-Saudi Strategic Partnership
                  </h3>
                  <p className="text-xs text-[#f4f1e8]/70 leading-relaxed font-light">
                    Annual trade volume surpassing $52 Billion. Saudi giga-projects and public tenders actively prioritize Indian technology, engineering, EPC, healthcare, manufacturing, and advisory leaders.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-mono-tech text-[#0b8f5a] tracking-wider uppercase">
                    Cross-Border Structuring
                  </div>
                  <h3 className="font-editorial text-2xl text-[#f4f1e8]">
                    DTAA & Profit Repatriation
                  </h3>
                  <p className="text-xs text-[#f4f1e8]/70 leading-relaxed font-light">
                    Leveraging the India-Saudi Double Taxation Avoidance Agreement (DTAA) for optimal withholding tax mitigation, dividend repatriation, and cross-border IP licensing between Indian and Saudi entities.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-mono-tech text-[#c8a45d] tracking-wider uppercase">
                    Regulatory Alignment
                  </div>
                  <h3 className="font-editorial text-2xl text-[#f4f1e8]">
                    RBI ODI & Apostille Legalization
                  </h3>
                  <p className="text-xs text-[#f4f1e8]/70 leading-relaxed font-light">
                    Navigating Reserve Bank of India (RBI) Overseas Direct Investment (ODI) compliance, FEMA regulations, and Indian MEA apostille certification for seamless Saudi Ministry of Investment (MISA) clearance.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* INTERACTIVE ECONOMIC RADAR: REGIONAL NODES & HUBS */}
        <div className="mb-16">
          <SaudiEconomicRadar />
        </div>

        {/* Four Architectural Data Columns (Editorial lines, NOT boring rounded cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
          <div className="border-t border-[#c8a45d]/30 pt-4 min-w-0">
            <div className="font-editorial text-2xl sm:text-4xl text-[#f4f1e8] mb-1 font-light truncate">
              $3.2T
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-tech text-[#c8a45d] uppercase tracking-wider mb-1 truncate">
              Investment Pipeline
            </div>
            <p className="text-[10px] sm:text-[11px] text-[#f4f1e8]/60 font-light leading-relaxed">
              Total National Investment Strategy allocation through Vision 2030.
            </p>
          </div>

          <div className="border-t border-[#0b8f5a]/40 pt-4 min-w-0">
            <div className="font-editorial text-2xl sm:text-4xl text-[#f4f1e8] mb-1 font-light truncate">
              100%
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-tech text-[#0b8f5a] uppercase tracking-wider mb-1 truncate">
              Foreign Ownership
            </div>
            <p className="text-[10px] sm:text-[11px] text-[#f4f1e8]/60 font-light leading-relaxed">
              Full equity ownership across services, IT, consulting, and industry.
            </p>
          </div>

          <div className="border-t border-[#c8a45d]/30 pt-4 min-w-0">
            <div className="font-editorial text-2xl sm:text-4xl text-[#f4f1e8] mb-1 font-light truncate">
              0%
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-tech text-[#c8a45d] uppercase tracking-wider mb-1 truncate">
              Personal Income Tax
            </div>
            <p className="text-[10px] sm:text-[11px] text-[#f4f1e8]/60 font-light leading-relaxed">
              Zero individual personal income tax on salaries and executive compensation.
            </p>
          </div>

          <div className="border-t border-[#f4f1e8]/20 pt-4 min-w-0">
            <div className="font-editorial text-2xl sm:text-4xl text-[#f4f1e8] mb-1 font-light truncate">
              #01
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-tech text-[#f4f1e8]/80 uppercase tracking-wider mb-1 truncate">
              Regional Commercial Hub
            </div>
            <p className="text-[10px] sm:text-[11px] text-[#f4f1e8]/60 font-light leading-relaxed">
              Mandatory RHQ epicenter for bidding on Saudi government contracts.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
