import React, { useState, useEffect, useRef } from 'react';
import { Compass, MapPin, KeyRound, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { audio } from '../utils/audio';

interface KeyholePortalProps {
  onExploreClick?: () => void;
}

export const KeyholePortal: React.FC<KeyholePortalProps> = ({ onExploreClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [transitBurst, setTransitBurst] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      const clampedX = Math.max(-1, Math.min(1, x));
      const clampedY = Math.max(-1, Math.min(1, y));
      setMousePos({ x: clampedX, y: clampedY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleKeyTurn = () => {
    audio.playUnlockChime();
    setIsUnlocked(!isUnlocked);
    setTransitBurst(true);
    setTimeout(() => setTransitBurst(false), 2500);
  };

  const handleTriggerTransit = () => {
    audio.playRadarPing();
    setTransitBurst(true);
    setTimeout(() => setTransitBurst(false), 2500);
  };

  // Parallax calculations
  const portalTiltX = mousePos.y * -8;
  const portalTiltY = mousePos.x * 10;
  const portalShiftX = mousePos.x * 6;
  const portalShiftY = mousePos.y * 5;
  const skylineShiftX = mousePos.x * -12;
  const skylineShiftY = mousePos.y * -8;
  const orbitShiftX = mousePos.x * 14;
  const orbitShiftY = mousePos.y * 12;
  const glowShiftX = mousePos.x * -18;
  const glowShiftY = mousePos.y * -16;

  // Specular sheen highlight coordinate
  const sheenX = 50 + mousePos.x * 40;
  const sheenY = 50 + mousePos.y * 40;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[460px] h-[400px] sm:h-[440px] lg:h-[460px] mx-auto flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
    >
      {/* 8. FLOATING AMBIENT EMERALD/GOLD LIGHT BLOOM */}
      <div
        className={`absolute w-80 h-80 rounded-full pointer-events-none filter blur-[85px] transition-all duration-700 ease-out ${
          isUnlocked ? 'opacity-70 scale-125' : 'opacity-40 scale-100'
        }`}
        style={{
          transform: `translate(${glowShiftX}px, ${glowShiftY}px)`,
          background: isUnlocked
            ? 'radial-gradient(circle, rgba(11,143,90,0.7) 0%, rgba(200,164,93,0.45) 45%, rgba(18,60,105,0.2) 70%, transparent 80%)'
            : 'radial-gradient(circle, rgba(11,143,90,0.5) 0%, rgba(200,164,93,0.25) 50%, transparent 70%)',
        }}
      />
      <div className="absolute w-72 h-72 rounded-full pointer-events-none filter blur-[95px] opacity-30 animate-float-drift bg-[#123c69]" />

      {/* FLOATING ARABESQUE GEOMETRIC STAR LATTICE WATERMARK */}
      <div
        className="absolute w-[440px] h-[440px] pointer-events-none opacity-10 animate-orbit-20"
        style={{ transform: `translate(${orbitShiftX * 0.5}px, ${orbitShiftY * 0.5}px)` }}
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="#c8a45d" strokeWidth="0.5">
          <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
          <polygon points="100,10 126,74 190,74 138,114 159,178 100,140 41,178 62,114 10,74 74,74" />
          <polygon points="100,190 74,126 10,126 62,86 41,22 100,60 159,22 138,86 190,126 126,126" strokeOpacity="0.6" />
        </svg>
      </div>

      {/* 1. ORBITAL MOVEMENT (Concentric astrological & architectural rings) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-500 ease-out"
        style={{ transform: `translate(${orbitShiftX}px, ${orbitShiftY}px)` }}
      >
        {/* Outer Ring with degree indices - 20s rotation */}
        <div className="absolute w-[320px] h-[320px] sm:w-[370px] sm:h-[370px] rounded-full border border-[#c8a45d]/20 animate-orbit-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#c8a45d] shadow-[0_0_8px_#c8a45d]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c8a45d]/60" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0b8f5a]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0b8f5a]" />
        </div>

        {/* Mid Ring with dashed segments & coordinates - 16s reverse rotation */}
        <div className="absolute w-[268px] h-[268px] sm:w-[305px] sm:h-[305px] rounded-full border border-dashed border-[#0b8f5a]/35 animate-orbit-16-reverse">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] font-mono-tech text-[#c8a45d] bg-[#05080c] px-1.5 tracking-widest border border-[#c8a45d]/30 rounded">
            24.7136°N · 46.6753°E
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono-tech text-[#0b8f5a] bg-[#05080c] px-1.5 tracking-widest border border-[#0b8f5a]/30 rounded">
            MISA LATITUDE
          </div>
        </div>

        {/* Fine Inner Ring - 12s rotation with orbiting celestial beacon */}
        <div className="absolute w-[216px] h-[216px] sm:w-[245px] sm:h-[245px] rounded-full border border-[#f4f1e8]/15 animate-orbit-12">
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border border-[#c8a45d] bg-[#05080c] flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-[#0b8f5a] animate-ping" />
          </div>
        </div>
      </div>

      {/* 6. INDIA → RIYADH GEODESIC ROUTE STORY OVERLAY */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
        viewBox="0 0 500 500"
        fill="none"
      >
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c8a45d" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0b8f5a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f4f1e8" stopOpacity="0.95" />
          </linearGradient>

          <filter id="glowPulse" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Base Geodesic Route Hairline */}
        <path
          d="M 430 420 C 375 425, 320 375, 290 320 C 270 285, 250 260, 235 240"
          stroke="url(#routeGradient)"
          strokeWidth="1.4"
          strokeDasharray="4 4"
          strokeOpacity="0.65"
        />

        {/* Continuous Traveling Energy Comet */}
        <path
          d="M 430 420 C 375 425, 320 375, 290 320 C 270 285, 250 260, 235 240"
          stroke="#f4f1e8"
          strokeWidth="2.8"
          strokeDasharray="25 300"
          strokeLinecap="round"
          filter="url(#glowPulse)"
          style={{ animation: 'routePulse 3.5s linear infinite' }}
        />

        {/* Second Golden Comet on Offset */}
        <path
          d="M 430 420 C 375 425, 320 375, 290 320 C 270 285, 250 260, 235 240"
          stroke="#c8a45d"
          strokeWidth="2"
          strokeDasharray="18 300"
          strokeLinecap="round"
          filter="url(#glowPulse)"
          style={{ animation: 'routePulse 3.5s linear infinite', animationDelay: '1.75s' }}
        />

        {/* Extra Transit Burst when user turns key or clicks transit */}
        {transitBurst && (
          <path
            d="M 430 420 C 375 425, 320 375, 290 320 C 270 285, 250 260, 235 240"
            stroke="#0b8f5a"
            strokeWidth="4"
            strokeDasharray="45 280"
            strokeLinecap="round"
            filter="url(#glowPulse)"
            style={{ animation: 'routePulse 1.2s cubic-bezier(0.2,0,0.4,1) infinite' }}
          />
        )}

        {/* Origin Marker: India (Mumbai / Delhi Corridor) */}
        <g transform="translate(430, 420)">
          <circle r="5" fill="#071a2b" stroke="#c8a45d" strokeWidth="1.5" />
          <circle r="2" fill="#c8a45d" />
          <circle r="9" fill="none" stroke="#c8a45d" strokeWidth="0.8" strokeOpacity="0.5" className="animate-ping" />
          <text
            x="10"
            y="4"
            fill="#f4f1e8"
            fontSize="8.5"
            fontFamily="Space Grotesk"
            letterSpacing="0.18em"
            fontWeight="600"
          >
            INDIA (19.07°N)
          </text>
        </g>

        {/* Destination Marker: Riyadh Gateway */}
        <g transform="translate(235, 240)">
          <circle r="5.5" fill="#071a2b" stroke="#0b8f5a" strokeWidth="1.8" />
          <circle r="2.5" fill="#0b8f5a" />
          <circle r="12" fill="none" stroke="#0b8f5a" strokeWidth="1" strokeOpacity="0.6" className="animate-ping" />
          {transitBurst && (
            <circle r="24" fill="none" stroke="#c8a45d" strokeWidth="1.5" strokeOpacity="0.8" className="animate-ping" />
          )}
          <text
            x="-95"
            y="-10"
            fill="#0b8f5a"
            fontSize="8.5"
            fontFamily="Space Grotesk"
            letterSpacing="0.18em"
            fontWeight="bold"
          >
            RIYADH GATEWAY (24.71°N)
          </text>
        </g>
      </svg>

      {/* 2. 3D TILT & PORTAL HOUSING */}
      <div
        className="relative z-10 transition-transform duration-300 ease-out animate-portal-breathe"
        style={{
          transform: `translate(${portalShiftX}px, ${portalShiftY}px) rotateX(${portalTiltX}deg) rotateY(${portalTiltY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dynamic Specular Sheen & Border Halo */}
        <div
          className={`relative p-[1.5px] rounded-[38px] transition-all duration-700 shadow-[0_0_40px_rgba(11,143,90,0.25)] ${
            isUnlocked
              ? 'bg-gradient-to-b from-[#c8a45d] via-[#0b8f5a] to-[#c8a45d] shadow-[0_0_60px_rgba(200,164,93,0.4)]'
              : 'bg-gradient-to-b from-[#c8a45d]/60 via-[#0b8f5a]/40 to-[#123c69]/60'
          }`}
        >
          {/* Keyhole Structural Housing */}
          <div className="relative w-[210px] h-[300px] sm:w-[230px] sm:h-[325px] lg:w-[245px] lg:h-[345px] rounded-[36px] bg-[#05080c] overflow-hidden">
            
            {/* Dynamic Specular Glass Reflection that shifts with cursor */}
            <div
              className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(244,241,232,0.18) 0%, rgba(200,164,93,0.06) 40%, transparent 70%)`,
              }}
            />

            {/* SKYLINE & DEPTH CANVAS */}
            <div className="absolute inset-0 w-full h-full">
              
              {/* Skyline Background (Multi-layer Parallax) */}
              <div
                className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out"
                style={{
                  transform: `translate(${skylineShiftX}px, ${skylineShiftY}px) scale(1.12)`,
                }}
              >
                {/* Riyadh Twilight Sky Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#061424] via-[#092233] to-[#0a2720]" />

                {/* Starlight Constellation Dots in the Portal Sky */}
                <div className="absolute top-2 left-4 w-1 h-1 rounded-full bg-white/70 animate-pulse" />
                <div className="absolute top-8 right-8 w-1 h-1 rounded-full bg-[#c8a45d]/80 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-14 left-16 w-0.8 h-0.8 rounded-full bg-[#0b8f5a]/80 animate-pulse" style={{ animationDelay: '2.3s' }} />
                <div className="absolute top-10 right-20 w-1.2 h-1.2 rounded-full bg-white/80 animate-pulse" style={{ animationDelay: '3.1s' }} />

                {/* SWEEPING SEARCHLIGHT BEAMS FROM TOWERS */}
                <div className="absolute bottom-28 left-0 right-0 h-48 pointer-events-none overflow-hidden opacity-40">
                  {/* Left Searchlight Beam (sweeping from Kingdom Centre apex) */}
                  <div
                    className="absolute bottom-10 left-[48%] w-8 h-64 bg-gradient-to-t from-[#c8a45d]/60 via-[#0b8f5a]/30 to-transparent animate-searchlight-left origin-bottom"
                    style={{ clipPath: 'polygon(40% 100%, 60% 100%, 100% 0%, 0% 0%)' }}
                  />
                  {/* Right Searchlight Beam (sweeping from Al Faisaliah) */}
                  <div
                    className="absolute bottom-10 left-[34%] w-6 h-60 bg-gradient-to-t from-[#f4f1e8]/50 via-[#c8a45d]/20 to-transparent animate-searchlight-right origin-bottom"
                    style={{ clipPath: 'polygon(45% 100%, 55% 100%, 100% 0%, 0% 0%)' }}
                  />
                </div>

                {/* Distant Atmospheric Glow on the Horizon */}
                <div className="absolute bottom-12 left-0 right-0 h-28 bg-gradient-to-t from-[#0b8f5a]/35 via-[#c8a45d]/20 to-transparent" />

                {/* Desert Dunes / Plateau Silhouette */}
                <svg
                  className="absolute bottom-10 left-0 right-0 w-full opacity-35"
                  viewBox="0 0 300 60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,45 Q75,25 150,40 T300,30 L300,60 L0,60 Z"
                    fill="#05080c"
                  />
                </svg>

                {/* RIYADH SKYLINE (Vector Architectural Silhouette) */}
                <svg
                  className="absolute bottom-4 left-0 right-0 w-full h-[220px]"
                  viewBox="0 0 300 240"
                  preserveAspectRatio="xMidYMax meet"
                >
                  <defs>
                    <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1a3b50" />
                      <stop offset="60%" stopColor="#0a1a24" />
                      <stop offset="100%" stopColor="#05080c" />
                    </linearGradient>

                    <linearGradient id="goldCapGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#c8a45d" />
                      <stop offset="100%" stopColor="#f4f1e8" />
                    </linearGradient>
                  </defs>

                  {/* Distant modern skyscrapers */}
                  <rect x="25" y="120" width="18" height="110" fill="#081520" />
                  <rect x="52" y="100" width="22" height="130" fill="#0b1e2c" />
                  <polygon points="52,100 63,85 74,100" fill="#0b1e2c" />

                  {/* KINGDOM CENTRE (Iconic inverted parabolic opening at top) */}
                  <g>
                    {/* Tower Body */}
                    <path
                      d="M 125 240 L 132 45 C 132 45, 137 25, 150 25 C 163 25, 168 45, 168 45 L 175 240 Z"
                      fill="url(#towerGrad)"
                      stroke="#c8a45d"
                      strokeWidth="0.6"
                      strokeOpacity="0.4"
                    />
                    {/* Parabolic Inverted Arch Opening */}
                    <path
                      d="M 137 60 Q 150 100 163 60 L 163 50 Q 150 78 137 50 Z"
                      fill="#071a2b"
                      stroke="#c8a45d"
                      strokeWidth="0.8"
                    />
                    {/* Sky Bridge across apex (illuminated) */}
                    <line x1="140" y1="46" x2="160" y2="46" stroke="#f4f1e8" strokeWidth="1.4" strokeOpacity="0.95" />
                    <line x1="140" y1="46" x2="160" y2="46" stroke="#0b8f5a" strokeWidth="3" strokeOpacity="0.4" />
                    {/* Spire light beacon */}
                    <circle cx="150" cy="24" r="1.8" fill="#0b8f5a" className="animate-ping" />
                    <circle cx="150" cy="24" r="1.2" fill="#f4f1e8" />
                  </g>

                  {/* AL FAISALIAH TOWER (Pyramid with golden globe near apex) */}
                  <g>
                    {/* Pyramid profile */}
                    <polygon
                      points="88,240 100,75 106,75 118,240"
                      fill="url(#towerGrad)"
                      stroke="#c8a45d"
                      strokeWidth="0.5"
                      strokeOpacity="0.4"
                    />
                    {/* Golden Globe Shimmer */}
                    <circle cx="103" cy="98" r="4.5" fill="url(#goldCapGrad)" stroke="#05080c" strokeWidth="0.5" />
                    <circle cx="103" cy="98" r="5.5" fill="none" stroke="#c8a45d" strokeWidth="0.6" strokeOpacity="0.5" className="animate-pulse" />
                    {/* Spire at top */}
                    <line x1="103" y1="75" x2="103" y2="52" stroke="#c8a45d" strokeWidth="1" />
                    <circle cx="103" cy="52" r="1.5" fill="#c8a45d" className="animate-ping" />
                  </g>

                  {/* KAFD Modern Angular High-Rise */}
                  <g>
                    <polygon points="185,240 190,95 208,110 215,240" fill="#0d2433" stroke="#0b8f5a" strokeWidth="0.5" strokeOpacity="0.4" />
                    <line x1="190" y1="95" x2="208" y2="110" stroke="#0b8f5a" strokeWidth="1.2" strokeOpacity="0.8" />
                  </g>

                  {/* Additional futuristic towers */}
                  <rect x="225" y="130" width="20" height="100" fill="#0a1d29" />
                  <polygon points="225,130 235,115 245,130" fill="#0a1d29" />
                  <rect x="252" y="150" width="16" height="80" fill="#081520" />

                  {/* TWINKLING BUILDING WINDOW LIGHTS */}
                  <rect x="142" y="115" width="2.2" height="1.5" fill="#c8a45d" className="animate-flicker-1" />
                  <rect x="146" y="115" width="2.2" height="1.5" fill="#f4f1e8" className="animate-flicker-2" />
                  <rect x="154" y="115" width="2.2" height="1.5" fill="#c8a45d" className="animate-flicker-1" />
                  <rect x="144" y="135" width="2.2" height="1.5" fill="#f4f1e8" className="animate-flicker-2" />
                  <rect x="150" y="135" width="2.2" height="1.5" fill="#c8a45d" className="animate-flicker-1" />
                  <rect x="143" y="160" width="2.2" height="1.5" fill="#0b8f5a" className="animate-flicker-1" />
                  <rect x="152" y="160" width="2.2" height="1.5" fill="#f4f1e8" className="animate-flicker-2" />
                  <rect x="145" y="185" width="3.2" height="1.5" fill="#c8a45d" className="animate-flicker-2" />
                  <rect x="151" y="185" width="3.2" height="1.5" fill="#f4f1e8" className="animate-flicker-1" />

                  {/* Al Faisaliah windows */}
                  <rect x="100" y="130" width="2" height="1.5" fill="#f4f1e8" className="animate-flicker-1" />
                  <rect x="104" y="130" width="2" height="1.5" fill="#c8a45d" className="animate-flicker-2" />
                  <rect x="99" y="155" width="2.2" height="1.5" fill="#c8a45d" className="animate-flicker-2" />
                  <rect x="105" y="155" width="2.2" height="1.5" fill="#0b8f5a" className="animate-flicker-1" />

                  {/* KAFD Tower windows */}
                  <rect x="195" y="135" width="2.8" height="1.5" fill="#0b8f5a" className="animate-flicker-2" />
                  <rect x="201" y="145" width="2.8" height="1.5" fill="#f4f1e8" className="animate-flicker-1" />
                  <rect x="198" y="165" width="2.8" height="1.5" fill="#c8a45d" className="animate-flicker-2" />

                  {/* HIGHWAY TRAFFIC LIGHT TRAILS (King Fahd Road & Olaya Expressway) */}
                  <g opacity="0.85">
                    {/* Eastbound White Headlights Stream */}
                    <path
                      d="M 0 226 L 300 226"
                      stroke="#f4f1e8"
                      strokeWidth="1.2"
                      strokeDasharray="14 18"
                      className="animate-traffic-east"
                    />
                    <path
                      d="M 0 227.5 L 300 227.5"
                      stroke="#c8a45d"
                      strokeWidth="1"
                      strokeDasharray="8 12"
                      className="animate-traffic-east"
                    />
                    {/* Westbound Red Taillights Stream */}
                    <path
                      d="M 0 230 L 300 230"
                      stroke="#ef4444"
                      strokeWidth="1.4"
                      strokeDasharray="10 14"
                      className="animate-traffic-west"
                    />
                    <path
                      d="M 0 231.5 L 300 231.5"
                      stroke="#f87171"
                      strokeWidth="0.8"
                      strokeDasharray="6 10"
                      className="animate-traffic-west"
                    />
                  </g>

                  {/* Foreground fine horizon grid base */}
                  <line x1="0" y1="234" x2="300" y2="234" stroke="#c8a45d" strokeWidth="0.5" strokeOpacity="0.4" />
                </svg>
              </div>

              {/* Architectural Keyhole Mask Overlay */}
              <div className="absolute inset-0 pointer-events-none border border-[#c8a45d]/30 rounded-[36px]" />

              {/* LIGHT SWEEP (Metallic / Glass Reflection travelling every 7s) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[36px]">
                <div className="w-24 h-full bg-gradient-to-r from-transparent via-[#f4f1e8]/25 to-transparent animate-light-sweep" />
              </div>

              {/* Inner Portal Vignette */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_45px_rgba(5,8,12,0.9)]" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#05080c] via-transparent to-transparent opacity-65" />

              {/* Top Live Status Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#071a2b]/85 border border-[#c8a45d]/40 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b8f5a] animate-ping" />
                  <span className="text-[9px] tracking-[0.2em] uppercase font-mono-tech text-[#f4f1e8]">
                    {isUnlocked ? 'Gateway Unlocked' : 'Portal Active'}
                  </span>
                </div>
                <div className="text-[9px] tracking-[0.2em] font-mono-tech text-[#c8a45d] uppercase px-2 py-0.5 rounded bg-[#05080c]/60 border border-white/5">
                  Riyadh Hub
                </div>
              </div>

              {/* UNLOCKED HUD OVERLAY WHEN KEY IS TURNED */}
              {isUnlocked && (
                <div className="absolute inset-x-4 top-16 z-20 p-3 rounded-xl bg-[#05080c]/85 border border-[#0b8f5a]/60 backdrop-blur-md text-center animate-fade-in shadow-[0_8px_30px_rgba(11,143,90,0.3)]">
                  <div className="inline-flex items-center gap-1 text-[9px] font-mono-tech text-[#0b8f5a] tracking-widest uppercase mb-1">
                    <ShieldCheck className="w-3 h-3" /> STATUTORY CORRIDOR OPEN
                  </div>
                  <div className="font-editorial text-sm text-[#f4f1e8]">
                    100% Foreign Ownership · MISA Fast-Track
                  </div>
                  <div className="text-[8px] font-mono-tech text-[#c8a45d] tracking-widest mt-1">
                    ESTABLISHMENT SPEED: 30-45 DAYS
                  </div>
                </div>
              )}

              {/* INTERACTIVE KEYHOLE TURN / UNLOCK BUTTON */}
              <div className="absolute bottom-16 left-0 right-0 flex items-center justify-center z-20 gap-2 px-4">
                <button
                  type="button"
                  onClick={handleKeyTurn}
                  className={`group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg ${
                    isUnlocked
                      ? 'bg-[#0b8f5a] border-[#f4f1e8] text-[#05080c] font-bold'
                      : 'bg-[#071a2b]/90 border-[#c8a45d]/60 hover:border-[#c8a45d] text-[#f4f1e8] hover:text-[#c8a45d]'
                  }`}
                  title="Click to turn the key and unlock the Saudi corridor"
                >
                  <KeyRound
                    className={`w-3.5 h-3.5 transition-transform duration-500 ${
                      isUnlocked ? 'rotate-90 text-[#05080c]' : 'text-[#c8a45d] group-hover:rotate-45'
                    }`}
                  />
                  <span className="text-[9px] font-mono-tech tracking-[0.2em] uppercase">
                    {isUnlocked ? 'Key Turned · Unlocked' : 'Turn Key to Unlock'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleTriggerTransit}
                  className="p-1.5 rounded-full bg-[#05080c]/80 border border-white/15 hover:border-[#0b8f5a] text-[#0b8f5a] transition-all cursor-pointer"
                  title="Send energetic transit pulse"
                >
                  <Zap className="w-3.5 h-3.5 animate-pulse" />
                </button>
              </div>

              {/* Bottom Exploration Cue */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                <button
                  type="button"
                  onClick={onExploreClick}
                  className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05080c]/90 border border-[#c8a45d]/40 hover:border-[#c8a45d] text-[10px] tracking-[0.2em] uppercase text-[#f4f1e8] hover:text-[#c8a45d] backdrop-blur-md transition-all duration-300 cursor-pointer"
                >
                  <span>Explore Agenda</span>
                  <Compass className="w-3 h-3 text-[#c8a45d] transition-transform duration-500 group-hover:rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small Precision Coordinates Tag beneath Portal */}
        <div className="mt-2 flex items-center justify-between px-2 text-[9px] font-mono-tech text-[#c8a45d]/70 tracking-wider">
          <span className="flex items-center gap-1">
            <MapPin className="w-2.5 h-2.5 text-[#0b8f5a]" /> KSA KINGDOM ACCESS
          </span>
          <span className="flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-[#c8a45d]" /> GATE 01 · 26 SEP 2026
          </span>
        </div>
      </div>
    </div>
  );
};
