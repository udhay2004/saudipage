import React, { useState } from 'react';
import { ChevronRight, ArrowUpRight, FileCheck2, Clock, Landmark, Layers } from 'lucide-react';
import { LandscapeTopic } from '../types';

export const BusinessLandscapeSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const topics: LandscapeTopic[] = [
    {
      id: 'misa',
      number: '01',
      title: 'MISA Investment License',
      arabicName: 'وزارة الاستثمار',
      authority: 'Ministry of Investment Saudi Arabia',
      shortSummary: 'The foundational foreign investment license permitting non-Saudi entities to operate and hold 100% equity.',
      details: [
        'Issuance of official Foreign Direct Investment (FDI) license under National Investment Law',
        'Verification of foreign parent company financials, audited balance sheets, and commercial track record',
        'Selection of authorized ISIC4 economic activities (Services, Industrial, Trading, Technical, Consulting)',
        'Qualifying for expedited licensing portals with fast-track processing within 3-5 business days',
      ],
      keyMetric: '3-5 Days',
      metricLabel: 'Standard MISA License SLA',
    },
    {
      id: 'formation',
      number: '02',
      title: 'Company Formation & Governance',
      arabicName: 'تأسيس الشركات',
      authority: 'New Saudi Companies Law Framework',
      shortSummary: 'Structuring the legal entity: LLC (Limited Liability Company), Branch of Foreign Company, or Regional HQ (RHQ).',
      details: [
        'Drafting bilingual Articles of Association (AoA) aligned with the modern Companies Law',
        'Determination of shareholding structure, General Manager appointment, and board powers',
        'Legalization and apostille/attestation workflow for parent company documents via Saudi Embassy & MOFA',
        'Zero minimum statutory capital requirement for standard service and technical LLCs',
      ],
      keyMetric: '100% LLC',
      metricLabel: 'Most Agile Corporate Vehicle',
    },
    {
      id: 'cr',
      number: '03',
      title: 'Commercial Registration (CR)',
      arabicName: 'السجل التجاري',
      authority: 'Ministry of Commerce (MoC)',
      shortSummary: 'Official commercial birth certificate of your company in the Kingdom, conferring legal personality.',
      details: [
        'Issuance of the official Commercial Registration Certificate containing the unique 700-series corporate ID',
        'Mandatory chamber of commerce registration in Riyadh or regional municipality',
        'Corporate bank account opening protocol with licensed Saudi commercial banks (SNB, Al Rajhi, SABB, Riyad Bank)',
        'Activation of national address registration via SPL (Saudi Post & Logistics)',
      ],
      keyMetric: 'Unified 700#',
      metricLabel: 'National Corporate Identity',
    },
    {
      id: 'tax',
      number: '04',
      title: 'Tax & Social Registrations',
      arabicName: 'الزكاة والضريبة والجمارك',
      authority: 'ZATCA & GOSI Authorities',
      shortSummary: 'Tax compliance (20% Corporate Income Tax for foreign shares, 15% VAT) and mandatory social security filings.',
      details: [
        'Zakat, Tax and Customs Authority (ZATCA) registration for Corporate Income Tax and VAT',
        'Compliance with Phase 2 Fatoora (e-Invoicing integration) connecting corporate ERP to ZATCA servers',
        'General Organization for Social Insurance (GOSI) file creation for employee protection',
        'Saudization compliance via Qiwa portal to establish initial Nitaqat tier and hiring quota quotas',
      ],
      keyMetric: '20% CIT',
      metricLabel: 'Corporate Tax on Foreign Shares',
    },
    {
      id: 'sbc',
      number: '05',
      title: 'Saudi Business Center (SBC)',
      arabicName: 'المركز السعودي للأعمال',
      authority: 'Unified Government Clearance Hub',
      shortSummary: 'A revolutionary single-window government clearinghouse consolidating 65+ government entities into one unified interface.',
      details: [
        'One-stop portal coordinating MISA, Ministry of Commerce, ZATCA, Ministry of Human Resources, and Civil Defense',
        'Drastic reduction in bureaucratic friction, eliminating redundant submissions across disparate ministries',
        'Digital issuance of municipal commercial operating licenses (Balady) and safety clearance',
        'Post-establishment compliance monitoring and statutory annual return orchestration',
      ],
      keyMetric: '65+ Entities',
      metricLabel: 'Consolidated Government Interface',
    },
  ];

  return (
    <section id="landscape" className="relative py-16 lg:py-20 bg-[#071a2b]/30 border-t border-[#c8a45d]/15 overflow-hidden">
      {/* Precision grid accents */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full bg-[radial-gradient(#c8a45d_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-px bg-[#0b8f5a]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#0b8f5a] font-mono-tech">
                SECTION 04 · STATUTORY ROADMAP
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#f4f1e8] font-normal leading-tight">
              THE SAUDI BUSINESS LANDSCAPE
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#f4f1e8]/65 font-light leading-relaxed">
            Deconstructing the 5 critical pillars of Saudi enterprise establishment. An architectural blueprint designed to navigate every regulatory milestone with precision.
          </p>
        </div>

        {/* Editorial Layout: Left List / Right Active Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Architectural Topic Index (Lines & Numbers) */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-white/10 border-y border-white/10">
            {topics.map((topic, index) => {
              const isActive = selectedTopic === index;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedTopic(index)}
                  className={`group w-full py-5 sm:py-6 text-left transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${
                    isActive
                      ? 'pl-4 sm:pl-6 bg-[#071a2b]/60 border-l-2 border-[#c8a45d]'
                      : 'hover:pl-2 text-[#f4f1e8]/70 hover:text-white'
                  }`}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span
                      className={`font-mono-tech text-xs tracking-widest transition-colors ${
                        isActive ? 'text-[#c8a45d] font-bold' : 'text-[#f4f1e8]/40 group-hover:text-[#c8a45d]'
                      }`}
                    >
                      {topic.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3
                          className={`font-editorial text-xl sm:text-2xl transition-colors ${
                            isActive ? 'text-[#f4f1e8]' : 'text-[#f4f1e8]/80 group-hover:text-[#f4f1e8]'
                          }`}
                        >
                          {topic.title}
                        </h3>
                        <span className="text-[11px] font-mono-tech text-[#c8a45d]/60 opacity-80 hidden sm:inline">
                          {topic.arabicName}
                        </span>
                      </div>
                      <p className="text-xs text-[#f4f1e8]/50 font-light mt-1 max-w-sm line-clamp-1">
                        {topic.authority}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pr-2">
                    <span
                      className={`text-[10px] font-mono-tech uppercase tracking-widest hidden sm:inline transition-opacity ${
                        isActive ? 'text-[#c8a45d] opacity-100' : 'opacity-0 group-hover:opacity-60 text-white'
                      }`}
                    >
                      Examine
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? 'text-[#c8a45d] translate-x-1' : 'text-white/30 group-hover:text-white'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Dossier Display */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 rounded-xl border border-[#c8a45d]/25 bg-[#05080c]/90 backdrop-blur-md p-8 sm:p-10 shadow-[0_20px_60px_rgba(5,8,12,0.9)]">
              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono-tech text-xs tracking-widest text-[#c8a45d] font-bold">
                    MODULE {topics[selectedTopic].number}
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="text-xs font-mono-tech text-[#0b8f5a] tracking-wider uppercase">
                    Regulatory Mandate
                  </span>
                </div>
                <span className="text-sm font-editorial italic text-[#c8a45d]">
                  {topics[selectedTopic].arabicName}
                </span>
              </div>

              {/* Title & Authority */}
              <div className="my-6">
                <h4 className="font-editorial text-2xl sm:text-3xl text-[#f4f1e8] mb-2 font-normal">
                  {topics[selectedTopic].title}
                </h4>
                <div className="text-xs font-mono-tech text-[#c8a45d]/80 tracking-wide uppercase flex items-center gap-2">
                  <Landmark className="w-3.5 h-3.5" />
                  {topics[selectedTopic].authority}
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-[#f4f1e8]/80 font-light leading-relaxed mb-6">
                {topics[selectedTopic].shortSummary}
              </p>

              {/* Key Metric Callout */}
              <div className="mb-6 p-4 rounded-lg bg-[#071a2b]/80 border border-[#c8a45d]/20 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono-tech tracking-wider text-[#c8a45d]">
                    Key Regulatory Benchmark
                  </div>
                  <div className="text-xs text-[#f4f1e8]/70 font-light">
                    {topics[selectedTopic].metricLabel}
                  </div>
                </div>
                <div className="font-editorial text-2xl font-semibold text-[#f4f1e8]">
                  {topics[selectedTopic].keyMetric}
                </div>
              </div>

              {/* Bulleted Implementation Details */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#f4f1e8]/50">
                  Core Implementation Protocols
                </div>
                {topics[selectedTopic].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 text-xs text-[#f4f1e8]/70 font-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8a45d] mt-1.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Footnote with Session Reference */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-tech text-[#f4f1e8]/40">
                <span>COVERED IN LIVE WEBINAR</span>
                <span>STEP-BY-STEP CHECKLIST PROVIDED</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
