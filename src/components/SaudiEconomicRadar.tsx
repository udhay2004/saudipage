import React, { useState } from 'react';
import { Sparkles, Building2, ShieldCheck, Compass } from 'lucide-react';
import { audio } from '../utils/audio';

interface HubInfo {
  id: string;
  name: string;
  arabicName: string;
  x: number; // coordinate in SVG viewBox (0 0 480 390)
  y: number;
  tag: string;
  stat: string;
  statLabel: string;
  description: string;
  highlights: string[];
}

const HUBS: HubInfo[] = [
  {
    id: 'riyadh',
    name: 'RIYADH & KAFD',
    arabicName: 'الرياض',
    x: 275,
    y: 195,
    tag: 'REGIONAL HQ & FINANCIAL CAPITAL',
    stat: '30-YR',
    statLabel: 'RHQ Corporate Tax Holiday (0%)',
    description: 'The sovereign capital and mandatory hub for multinational regional headquarters bidding on public contracts. Home to King Abdullah Financial District.',
    highlights: ['0% Corporate Income Tax for 30 years', '10-year Saudization exemption', 'Dedicated MISA concierge & expedited visas'],
  },
  {
    id: 'neom',
    name: 'NEOM & OXAGON',
    arabicName: 'نيوم',
    x: 62,
    y: 112,
    tag: '$500B COGNITIVE FUTURE REGION',
    stat: '$500B',
    statLabel: 'Dedicated Sovereign Development Budget',
    description: 'Pioneering clean tech, artificial intelligence, robotics, and advanced manufacturing at the intersection of three continents on the Red Sea.',
    highlights: ['Autonomous progressive regulatory framework', 'Oxagon advanced clean-energy floating port', 'Targeting 100% renewable energy grid'],
  },
  {
    id: 'kaec',
    name: 'KAEC & JEDDAH',
    arabicName: 'جدة · كافك',
    x: 126,
    y: 222,
    tag: 'SPECIAL ECONOMIC ZONE (SEZ)',
    stat: '5%',
    statLabel: 'Reduced SEZ Corporate Tax Rate',
    description: 'King Abdullah Port and industrial SEZ offering zero customs duties on capital machinery, streamlined import clearance, and 0% withholding tax.',
    highlights: ['5% Corporate income tax for 20 years', '0% Withholding tax on profit repatriation', 'Direct access to King Abdullah Port'],
  },
  {
    id: 'redsea',
    name: 'THE RED SEA & AMAALA',
    arabicName: 'البحر الأحمر',
    x: 82,
    y: 154,
    tag: 'REGENERATIVE LUXURY & TOURISM',
    stat: '50+',
    statLabel: 'Luxury Island Resorts & Dedicated Airport',
    description: 'World-leading regenerative tourism destination powered exclusively by solar energy. High-value commercial hospitality and services corridor.',
    highlights: ['100% powered by off-grid renewable energy', 'Dedicated international airport (RSI)', 'Custom legislative tourism sandbox'],
  },
  {
    id: 'dammam',
    name: 'DAMMAM & EASTERN PROVINCE',
    arabicName: 'الدمام · الخبر',
    x: 352,
    y: 168,
    tag: 'INDUSTRIAL & ENERGY LOGISTICS',
    stat: '#01',
    statLabel: 'Gulf Industrial Logistics Gateway',
    description: 'Saudi Arabia’s primary industrial gateway on the Arabian Gulf anchoring global manufacturing, heavy engineering, petrochemicals, and maritime trade.',
    highlights: ['King Abdulaziz Seaport maritime connectivity', 'Direct highway connection to Bahrain & Qatar', 'IKTVA supply chain preferential weighting'],
  },
];

export const SaudiEconomicRadar: React.FC = () => {
  const [activeHub, setActiveHub] = useState<HubInfo>(HUBS[0]);

  const handleSelectHub = (hub: HubInfo) => {
    audio.playRadarPing();
    setActiveHub(hub);
  };

  return (
    <div className="relative rounded-2xl border border-[#c8a45d]/25 bg-[#071a2b]/60 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(5,8,12,0.9)] overflow-hidden">
      
      {/* Background Animated Radar Grid */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#0b8f5a]/10 pointer-events-none -translate-y-1/3 translate-x-1/3 animate-orbit-20" />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-[#c8a45d]/10 pointer-events-none -translate-y-1/4 translate-x-1/4" />

      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-mono-tech tracking-[0.28em] uppercase text-[#c8a45d] mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0b8f5a] animate-ping" />
            <span>GEOGRAPHIC ECONOMIC RADAR</span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#f4f1e8]">
            Key Investment Nodes of Saudi Arabia
          </h3>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[#f4f1e8]/60">
          <Compass className="w-3.5 h-3.5 text-[#c8a45d]" />
          <span>Interactive Kingdom Map · Select any hub to view statutory regime</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT: Authentic Saudi Arabia Geographic Vector Map (7 cols on lg) */}
        <div className="lg:col-span-7 relative flex items-center justify-center min-h-[340px] sm:min-h-[410px] bg-[#05080c]/90 rounded-xl border border-white/10 p-2 sm:p-4 overflow-hidden">
          
          {/* Subtle Radar sweep line */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[360px] h-[360px] rounded-full border border-[#0b8f5a]/15 flex items-center justify-center">
              <div className="w-[260px] h-[260px] rounded-full border border-[#c8a45d]/10 flex items-center justify-center">
                <div className="w-[160px] h-[160px] rounded-full border border-[#f4f1e8]/5" />
              </div>
            </div>
            {/* Radar scanner ray */}
            <div
              className="absolute w-[180px] h-[180px] rounded-full pointer-events-none animate-orbit-12"
              style={{
                background: 'conic-gradient(from 0deg, rgba(11,143,90,0.2) 0deg, transparent 60deg, transparent 360deg)',
              }}
            />
          </div>

          {/* SVG Geographic Map of Saudi Arabia */}
          <svg
            className="w-full h-[320px] sm:h-[390px] relative z-10 select-none"
            viewBox="0 0 480 390"
            fill="none"
          >
            <defs>
              {/* Saudi Landmass Gradient */}
              <linearGradient id="saudiLandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0b8f5a" stopOpacity="0.25" />
                <stop offset="40%" stopColor="#071a2b" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#c8a45d" stopOpacity="0.2" />
              </linearGradient>

              {/* Water Gradient */}
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#061a29" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#071420" stopOpacity="0.2" />
              </linearGradient>

              <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* LAT / LONG GRID LINES */}
            <g stroke="#f4f1e8" strokeOpacity="0.04" strokeDasharray="3 3">
              <line x1="40" y1="90" x2="460" y2="90" />
              <line x1="40" y1="170" x2="460" y2="170" />
              <line x1="40" y1="250" x2="460" y2="250" />
              <line x1="40" y1="330" x2="460" y2="330" />
              <line x1="120" y1="30" x2="120" y2="370" />
              <line x1="240" y1="30" x2="240" y2="370" />
              <line x1="360" y1="30" x2="360" y2="370" />
            </g>

            {/* WATER BODY 1: RED SEA (البحر الأحمر) Coastline Shading */}
            <path
              d="M 10,40 
                 L 52,102 
                 C 56,112 64,122 72,132 
                 C 82,144 92,158 100,172 
                 C 108,186 116,202 124,216 
                 C 130,230 138,244 146,258 
                 C 154,276 164,294 172,312 
                 C 178,330 186,346 194,358 
                 L 140,380 
                 L 10,380 
                 Z"
              fill="url(#waterGrad)"
              opacity="0.7"
            />
            <text
              x="55"
              y="225"
              fill="#0b8f5a"
              fontSize="7.5"
              fontFamily="Space Grotesk"
              letterSpacing="0.22em"
              opacity="0.65"
              transform="rotate(-52 55 225)"
            >
              RED SEA · البحر الأحمر
            </text>

            {/* WATER BODY 2: ARABIAN GULF (الخليج العربي) */}
            <path
              d="M 318,114 
                 C 326,122 334,134 340,146 
                 C 346,154 354,162 356,172 
                 C 358,182 352,196 348,206 
                 C 352,216 364,218 374,216 
                 C 384,214 396,222 406,230 
                 L 470,230 
                 L 470,90 
                 L 318,114 
                 Z"
              fill="url(#waterGrad)"
              opacity="0.7"
            />
            <text
              x="372"
              y="135"
              fill="#c8a45d"
              fontSize="7.5"
              fontFamily="Space Grotesk"
              letterSpacing="0.2em"
              opacity="0.65"
              transform="rotate(38 372 135)"
            >
              ARABIAN GULF · الخليج العربي
            </text>

            {/* QATAR PENINSULA INDICATION */}
            <path
              d="M 356,192 C 362,176 370,174 374,188 C 378,198 374,212 372,216"
              stroke="#f4f1e8"
              strokeWidth="0.6"
              strokeOpacity="0.25"
              fill="none"
              strokeDasharray="2 2"
            />
            {/* BAHRAIN ISLAND INDICATION */}
            <circle cx="357" cy="166" r="2.5" stroke="#f4f1e8" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />

            {/* NEIGHBORING FAINT BORDERS (Context) */}
            {/* Jordan border to north */}
            <path d="M 52,102 L 20,95 M 92,68 L 78,35 M 138,42 L 135,15" stroke="#f4f1e8" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="2 3" />
            <text x="75" y="45" fill="#f4f1e8" fontSize="6.5" fontFamily="Space Grotesk" opacity="0.3" letterSpacing="0.1em">JORDAN</text>
            <text x="180" y="40" fill="#f4f1e8" fontSize="6.5" fontFamily="Space Grotesk" opacity="0.3" letterSpacing="0.1em">IRAQ</text>
            <text x="300" y="85" fill="#f4f1e8" fontSize="6.5" fontFamily="Space Grotesk" opacity="0.3" letterSpacing="0.1em">KUWAIT</text>
            <text x="420" y="220" fill="#f4f1e8" fontSize="6.5" fontFamily="Space Grotesk" opacity="0.3" letterSpacing="0.1em">UAE</text>
            <text x="415" y="340" fill="#f4f1e8" fontSize="6.5" fontFamily="Space Grotesk" opacity="0.3" letterSpacing="0.1em">OMAN</text>
            <text x="240" y="365" fill="#f4f1e8" fontSize="6.5" fontFamily="Space Grotesk" opacity="0.3" letterSpacing="0.1em">YEMEN</text>

            {/* REAL GEOGRAPHIC MAP OF SAUDI ARABIA (Accurate borders and coastlines) */}
            <path
              d="M 52,102 
                 L 74,96 
                 L 92,68 
                 L 114,46 
                 L 138,42 
                 L 182,58 
                 L 230,84 
                 L 282,98 
                 L 302,100 
                 L 318,114 
                 C 326,122 334,134 340,146 
                 C 346,154 354,162 356,172 
                 C 358,182 352,196 348,206 
                 C 352,216 364,218 374,216 
                 C 384,214 396,222 406,230 
                 L 452,252 
                 L 446,298 
                 L 388,318 
                 L 300,334 
                 L 242,338 
                 L 218,348 
                 L 194,358 
                 C 186,346 178,330 172,312 
                 C 164,294 154,276 146,258 
                 C 138,244 130,230 124,216 
                 C 116,202 108,186 100,172 
                 C 92,158 82,144 72,132 
                 C 64,122 56,112 48,106 
                 L 45,114 
                 Z"
              fill="url(#saudiLandGradient)"
              stroke="#c8a45d"
              strokeWidth="1.2"
              strokeOpacity="0.75"
            />

            {/* Glowing Coastline Accents */}
            {/* Red Sea Coast highlight */}
            <path
              d="M 52,102 C 56,112 64,122 72,132 C 82,144 92,158 100,172 C 108,186 116,202 124,216 C 130,230 138,244 146,258 C 154,276 164,294 172,312 C 178,330 186,346 194,358"
              stroke="#0b8f5a"
              strokeWidth="1.8"
              strokeOpacity="0.8"
              strokeLinecap="round"
            />
            {/* Arabian Gulf Coast highlight */}
            <path
              d="M 318,114 C 326,122 334,134 340,146 C 346,154 354,162 356,172 C 358,182 352,196 348,206"
              stroke="#c8a45d"
              strokeWidth="1.8"
              strokeOpacity="0.8"
              strokeLinecap="round"
            />

            {/* HIGHWAY & INFRASTRUCTURE ARCS CONNECTING HUBS TO CAPITAL */}
            {/* Riyadh to Jeddah/KAEC High-Speed Landbridge Corridor */}
            <path
              d="M 275,195 Q 198,208 126,222"
              stroke="#c8a45d"
              strokeWidth="1"
              strokeDasharray="3 3"
              strokeOpacity="0.55"
            />
            {/* Riyadh to Dammam Industrial Corridor */}
            <path
              d="M 275,195 L 352,168"
              stroke="#0b8f5a"
              strokeWidth="1"
              strokeDasharray="3 3"
              strokeOpacity="0.55"
            />
            {/* Riyadh to NEOM North Corridor */}
            <path
              d="M 275,195 Q 165,145 62,112"
              stroke="#c8a45d"
              strokeWidth="0.9"
              strokeDasharray="3 3"
              strokeOpacity="0.45"
            />
            {/* Coastal Red Sea Tourism Arc (Jeddah -> Red Sea Project -> NEOM) */}
            <path
              d="M 126,222 C 104,185 88,165 82,154 C 76,142 68,125 62,112"
              stroke="#0b8f5a"
              strokeWidth="1"
              strokeDasharray="4 4"
              strokeOpacity="0.6"
            />

            {/* RUB' AL KHALI (The Empty Quarter) Topographic Watermark */}
            <text
              x="330"
              y="280"
              fill="#c8a45d"
              fontSize="8"
              fontFamily="Space Grotesk"
              letterSpacing="0.25em"
              opacity="0.25"
            >
              RUB' AL KHALI · الربع الخالي
            </text>

            {/* NAJD CENTRAL PLATEAU Watermark */}
            <text
              x="215"
              y="160"
              fill="#f4f1e8"
              fontSize="7.5"
              fontFamily="Space Grotesk"
              letterSpacing="0.25em"
              opacity="0.2"
            >
              NAJD REGION
            </text>

            {/* RENDER EACH INVESTMENT NODE */}
            {HUBS.map((hub) => {
              const isSelected = activeHub.id === hub.id;
              const isCapital = hub.id === 'riyadh';

              return (
                <g
                  key={hub.id}
                  transform={`translate(${hub.x}, ${hub.y})`}
                  onClick={() => handleSelectHub(hub)}
                  className="cursor-pointer group"
                >
                  {/* Selected Ripple / Radar Ping Rings */}
                  {isSelected && (
                    <>
                      <circle r="22" fill="none" stroke="#0b8f5a" strokeWidth="0.8" className="animate-radar-ring" />
                      <circle r="14" fill="none" stroke="#c8a45d" strokeWidth="1" className="animate-ping" />
                    </>
                  )}

                  {/* Outer Glow Halo */}
                  <circle
                    r={isSelected ? (isCapital ? 9 : 7.5) : (isCapital ? 7 : 5)}
                    fill={isSelected ? '#0b8f5a' : '#071a2b'}
                    fillOpacity={isSelected ? 0.35 : 0.85}
                    stroke={isSelected ? '#c8a45d' : isCapital ? '#c8a45d' : '#0b8f5a'}
                    strokeWidth={isSelected ? 2 : 1.2}
                    className="transition-all duration-300 group-hover:scale-125"
                  />

                  {/* Center Dot or Star */}
                  {isCapital ? (
                    <polygon
                      points="0,-3.5 1,-1 3.5,-1 1.5,0.8 2.2,3.2 0,1.8 -2.2,3.2 -1.5,0.8 -3.5,-1 -1,-1"
                      fill={isSelected ? '#f4f1e8' : '#c8a45d'}
                      className="transition-all duration-300"
                    />
                  ) : (
                    <circle
                      r={isSelected ? 3.5 : 2.2}
                      fill={isSelected ? '#f4f1e8' : '#c8a45d'}
                      className="transition-all duration-300"
                    />
                  )}

                  {/* Node Label Text */}
                  <text
                    x={hub.x > 250 ? 12 : -12}
                    y={hub.y > 180 ? 15 : -10}
                    textAnchor={hub.x > 250 ? 'start' : 'end'}
                    fill={isSelected ? '#f4f1e8' : '#f4f1e8'}
                    fontSize={isSelected ? '9.5' : '8'}
                    fontFamily="Space Grotesk"
                    fontWeight={isSelected ? 'bold' : '500'}
                    opacity={isSelected ? 1 : 0.75}
                    letterSpacing="0.08em"
                  >
                    {hub.name.split(' & ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Hub Quick Select Buttons (Pills at bottom of map) */}
          <div className="absolute bottom-2.5 left-2 right-2 flex flex-wrap items-center justify-center gap-1.5 z-20">
            {HUBS.map((hub) => (
              <button
                key={hub.id}
                type="button"
                onClick={() => handleSelectHub(hub)}
                className={`px-2.5 py-1 rounded text-[9px] font-mono-tech uppercase tracking-wider transition-all cursor-pointer ${
                  activeHub.id === hub.id
                    ? 'bg-[#c8a45d] text-[#05080c] font-bold shadow-[0_0_12px_rgba(200,164,93,0.4)]'
                    : 'bg-[#05080c]/90 text-[#f4f1e8]/65 hover:text-white border border-white/10'
                }`}
              >
                {hub.name.split(' & ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Detailed Hub Profile Panel (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Active Hub Details Card */}
          <div className="p-6 rounded-xl border border-[#c8a45d]/40 bg-[#05080c] shadow-[0_10px_35px_rgba(0,0,0,0.8)] relative overflow-hidden">
            {/* Top Gold-Emerald Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c8a45d] via-[#0b8f5a] to-[#c8a45d]" />

            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div>
                <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#c8a45d]">
                  {activeHub.tag}
                </div>
                <h4 className="font-editorial text-2xl text-[#f4f1e8] font-normal">
                  {activeHub.name}
                </h4>
              </div>
              <div className="text-right">
                <span className="font-editorial text-2xl text-[#f4f1e8]/30 font-light block">
                  {activeHub.arabicName}
                </span>
              </div>
            </div>

            {/* Core Metric Highlight */}
            <div className="flex items-baseline gap-3 mb-3 p-3 rounded bg-[#071a2b]/80 border border-white/5">
              <span className="font-editorial text-3xl font-light text-[#c8a45d]">
                {activeHub.stat}
              </span>
              <span className="text-xs font-mono-tech text-[#f4f1e8]/80 leading-snug">
                {activeHub.statLabel}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-[#f4f1e8]/75 font-light leading-relaxed mb-4">
              {activeHub.description}
            </p>

            {/* Statutory Highlights List */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              {activeHub.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-mono-tech text-[#f4f1e8]/70">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0b8f5a] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footnote */}
          <div className="flex items-center gap-3 text-[10px] font-mono-tech text-[#f4f1e8]/50">
            <Building2 className="w-3.5 h-3.5 text-[#c8a45d]" />
            <span>Regional headquarters and SEZ branch registrations are coordinated through MISA.</span>
          </div>
        </div>

      </div>
    </div>
  );
};
