import React from 'react';
import { Calendar, Clock, Video, Award, Download, ExternalLink, ArrowRight } from 'lucide-react';

interface SessionDetailsSectionProps {
  onOpenReservation: () => void;
}

export const SessionDetailsSection: React.FC<SessionDetailsSectionProps> = ({
  onOpenReservation,
}) => {
  // Function to trigger .ics calendar download
  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Comply Globally//Key to Saudi Arabia Webinar//EN',
      'BEGIN:VEVENT',
      'UID:ksa-webinar-20260926@complyglobally.com',
      'DTSTAMP:20260901T000000Z',
      'DTSTART:20260926T100000Z',
      'DTEND:20260926T113000Z',
      'SUMMARY:Comply Globally: Your Key to Saudi Arabia Webinar',
      'DESCRIPTION:Executive briefing on company formation, MISA licensing, CR, tax and compliance in Saudi Arabia.',
      'LOCATION:Online Executive Briefing Room',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Key-to-Saudi-Arabia-Webinar.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Google Calendar URL generator
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Comply+Globally:+Your+Key+to+Saudi+Arabia+Webinar&dates=20260926T100000Z/20260926T113000Z&details=Executive+briefing+on+company+formation,+MISA+licensing,+CR,+tax+and+compliance+in+Saudi+Arabia.&location=Online+Executive+Briefing+Room`;

  return (
    <section id="session" className="relative py-24 lg:py-32 bg-[#05080c] border-t border-[#c8a45d]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-px bg-[#c8a45d]" />
          <span className="text-[10px] font-mono-tech tracking-[0.3em] uppercase text-[#c8a45d]">
            SECTION 05 · LOGISTICS & ACCESS
          </span>
        </div>

        {/* Editorial Grid: Elegant Typography Layout (Not four giant cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Massive Editorial Date & Details */}
          <div className="lg:col-span-7">
            <h2 className="text-xs font-mono-tech tracking-[0.3em] uppercase text-[#f4f1e8]/50 mb-4">
              EXECUTIVE SESSION BRIEFING
            </h2>

            {/* Date Display */}
            <div className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#f4f1e8] font-normal tracking-tight leading-[1.05] mb-6">
              26 SEPTEMBER <br />
              <span className="italic text-[#c8a45d] font-light">2026</span>
            </div>

            {/* Refined Horizontal Editorial Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-white/10">
              {/* Time */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono-tech tracking-wider uppercase text-[#c8a45d]">
                  <Clock className="w-3.5 h-3.5" /> Time
                </div>
                <div className="text-xl font-editorial text-[#f4f1e8]">
                  3:30 PM IST
                </div>
                <div className="text-[11px] font-mono-tech text-[#f4f1e8]/50">
                  1:00 PM AST (Riyadh)
                </div>
              </div>

              {/* Format */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono-tech tracking-wider uppercase text-[#0b8f5a]">
                  <Video className="w-3.5 h-3.5" /> Platform
                </div>
                <div className="text-xl font-editorial text-[#f4f1e8]">
                  LIVE ONLINE
                </div>
                <div className="text-[11px] font-mono-tech text-[#f4f1e8]/50">
                  Private HD Broadcast + Q&A
                </div>
              </div>

              {/* Access */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono-tech tracking-wider uppercase text-[#c8a45d]">
                  <Award className="w-3.5 h-3.5" /> Tuition
                </div>
                <div className="text-xl font-editorial text-[#f4f1e8]">
                  FREE SESSION
                </div>
                <div className="text-[11px] font-mono-tech text-[#f4f1e8]/50">
                  By Pre-Registration
                </div>
              </div>
            </div>

            {/* Time Zone Conversion Strip */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono-tech text-[#f4f1e8]/50">
              <span className="text-[#c8a45d]">GLOBAL TIMEZONES:</span>
              <span>15:30 New Delhi (IST)</span>
              <span>·</span>
              <span>13:00 Riyadh (AST)</span>
              <span>·</span>
              <span>14:00 Dubai (GST)</span>
              <span>·</span>
              <span>11:00 London (BST)</span>
            </div>
          </div>

          {/* Right Column: Reservation & Calendar Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-8 sm:p-10 rounded-2xl border border-[#c8a45d]/30 bg-[#071a2b]/40 backdrop-blur-md shadow-[0_20px_60px_rgba(5,8,12,0.8)]">
              <h3 className="font-editorial text-2xl text-[#f4f1e8] mb-2 font-normal">
                Strictly Limited Executive Cohort
              </h3>
              <p className="text-xs text-[#f4f1e8]/70 font-light leading-relaxed mb-6">
                To guarantee substantial time for personalized regulatory inquiries during the live Q&A segment, participation is capped.
              </p>

              {/* Dominant Primary CTA */}
              <button
                type="button"
                onClick={onOpenReservation}
                className="w-full group inline-flex items-center justify-center gap-3 py-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#05080c] bg-[#c8a45d] hover:bg-[#f4f1e8] transition-all duration-300 shadow-[0_4px_24px_rgba(200,164,93,0.3)] mb-4 cursor-pointer"
              >
                <span>Reserve Your Place</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary Calendar Actions */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleDownloadICS}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded border border-white/10 hover:border-[#c8a45d]/50 text-[11px] font-mono-tech text-[#f4f1e8]/80 hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#c8a45d]" />
                  <span>Download .ICS</span>
                </button>

                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded border border-white/10 hover:border-[#c8a45d]/50 text-[11px] font-mono-tech text-[#f4f1e8]/80 hover:text-white transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#0b8f5a]" />
                  <span>Google Cal</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              {/* Assurance note */}
              <div className="mt-5 text-center text-[10px] font-mono-tech text-[#f4f1e8]/40">
                A calendar invite with live session link will be sent immediately.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
