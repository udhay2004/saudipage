import React, { useState, useEffect } from 'react';
import { WebinarTimeLeft } from '../types';

export const Countdown: React.FC = () => {
  const targetDate = new Date('2026-09-26T15:30:00+05:30').getTime();

  const calculateTimeLeft = (): WebinarTimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<WebinarTimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex items-center gap-4 sm:gap-6 py-1 select-none">
      <div className="flex items-baseline gap-1.5">
        <span className="font-mono-tech text-base sm:text-lg tracking-wider text-[#f4f1e8] font-light">
          {formatNumber(timeLeft.days)}
        </span>
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#c8a45d]/75">
          Days
        </span>
      </div>

      <span className="text-[#c8a45d]/30 font-mono-tech text-xs">/</span>

      <div className="flex items-baseline gap-1.5">
        <span className="font-mono-tech text-base sm:text-lg tracking-wider text-[#f4f1e8] font-light">
          {formatNumber(timeLeft.hours)}
        </span>
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#c8a45d]/75">
          Hours
        </span>
      </div>

      <span className="text-[#c8a45d]/30 font-mono-tech text-xs">/</span>

      <div className="flex items-baseline gap-1.5">
        <span className="font-mono-tech text-base sm:text-lg tracking-wider text-[#f4f1e8] font-light">
          {formatNumber(timeLeft.minutes)}
        </span>
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#c8a45d]/75">
          Mins
        </span>
      </div>

      <span className="text-[#c8a45d]/30 font-mono-tech text-xs">/</span>

      <div className="flex items-baseline gap-1.5">
        <span className="font-mono-tech text-base sm:text-lg tracking-wider text-[#c8a45d] font-light">
          {formatNumber(timeLeft.seconds)}
        </span>
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#c8a45d]/75">
          Secs
        </span>
      </div>
    </div>
  );
};
