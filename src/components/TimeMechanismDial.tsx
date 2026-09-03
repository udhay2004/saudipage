import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export const TimeMechanismDial: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Keep exact synchronization with system clock
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Compute exact angles from live current time
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = ((hours % 12) + minutes / 60) * 30;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const secondAngle = seconds * 6;

  // Formatted local and Riyadh (AST, UTC+3) times
  const localTimeStr = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const riyadhTimeStr = time.toLocaleTimeString([], {
    timeZone: 'Asia/Riyadh',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="flex items-center gap-4 py-1">
      {/* Clean, Simple Minimalist Analog Dial */}
      <div className="relative w-20 h-20 sm:w-22 sm:h-22 flex-shrink-0 select-none">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-[#c8a45d]/40 bg-[#071a2b]/90 shadow-[0_0_20px_rgba(200,164,93,0.15)]" />
        <div className="absolute inset-1.5 rounded-full border border-[#f4f1e8]/10" />

        {/* Dial SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {/* 12 Hour Ticks */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const isCardinal = i % 3 === 0;
            const r1 = 46;
            const r2 = isCardinal ? 38 : 41;
            return (
              <line
                key={i}
                x1={50 + r1 * Math.sin(angle)}
                y1={50 - r1 * Math.cos(angle)}
                x2={50 + r2 * Math.sin(angle)}
                y2={50 - r2 * Math.cos(angle)}
                stroke={isCardinal ? '#c8a45d' : '#f4f1e8'}
                strokeOpacity={isCardinal ? 0.9 : 0.4}
                strokeWidth={isCardinal ? 1.5 : 0.8}
              />
            );
          })}

          {/* Hour Hand */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="30"
            stroke="#f4f1e8"
            strokeWidth="2.4"
            strokeLinecap="round"
            transform={`rotate(${hourAngle} 50 50)`}
          />

          {/* Minute Hand */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="20"
            stroke="#c8a45d"
            strokeWidth="1.8"
            strokeLinecap="round"
            transform={`rotate(${minuteAngle} 50 50)`}
          />

          {/* Second Hand */}
          <line
            x1="50"
            y1="56"
            x2="50"
            y2="14"
            stroke="#0b8f5a"
            strokeWidth="1"
            strokeLinecap="round"
            transform={`rotate(${secondAngle} 50 50)`}
          />

          {/* Center Pinion */}
          <circle cx="50" cy="50" r="2.5" fill="#c8a45d" />
          <circle cx="50" cy="50" r="1" fill="#05080c" />
        </svg>

        {/* 12 o'clock indicator */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0b8f5a]" />
      </div>

      {/* Time Readings */}
      <div className="flex flex-col justify-center border-l border-[#c8a45d]/25 pl-3 sm:pl-4 py-0.5 space-y-1 min-w-0">
        <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono-tech tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#c8a45d]">
          <Clock className="w-3 h-3 text-[#c8a45d] flex-shrink-0" />
          <span className="truncate">CURRENT TIME</span>
        </div>
        <div className="text-lg sm:text-2xl font-editorial tracking-tight text-[#f4f1e8] font-normal leading-none truncate">
          {localTimeStr}
        </div>
        <div className="text-[10px] sm:text-[11px] font-mono-tech text-[#0b8f5a] flex items-center gap-1 min-w-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0b8f5a] animate-pulse flex-shrink-0" />
          <span className="truncate">Riyadh: {riyadhTimeStr} AST</span>
        </div>
      </div>
    </div>
  );
};
