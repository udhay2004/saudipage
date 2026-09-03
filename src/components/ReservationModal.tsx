import React, { useState } from 'react';
import { X, CheckCircle, KeyRound, Calendar, Download, Copy, ExternalLink, Shield, Sparkles } from 'lucide-react';
import { RegistrationFormData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    designation: '',
    phone: '',
    sector: 'Technology & Cloud',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://complyglobally.com/briefing/gateway-to-saudi-2026');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Comply Globally//Gateway to Business Expansion in Saudi Arabia Webinar//EN',
      'BEGIN:VEVENT',
      'UID:ksa-pass-20260926@complyglobally.com',
      'DTSTAMP:20260901T000000Z',
      'DTSTART:20260926T100000Z',
      'DTEND:20260926T113000Z',
      'SUMMARY:Comply Globally: Your Gateway to Business Expansion in Saudi Arabia Webinar',
      'DESCRIPTION:Executive briefing on business expansion in Saudi Arabia with Dr. Anil Gupta. Reserved for ' + (formData.fullName || 'Executive Attendee'),
      'LOCATION:Online Executive Briefing Room',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Saudi-Arabia-Executive-Briefing-Pass.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#05080c]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl border border-[#c8a45d]/30 bg-[#071a2b] shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden my-8">
        
        {/* Top Metallic Border Accent */}
        <div className="h-1 bg-gradient-to-r from-[#c8a45d] via-[#0b8f5a] to-[#c8a45d]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-full text-[#f4f1e8]/50 hover:text-white hover:bg-white/5 transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 sm:p-8 lg:p-10">
          {!submitted ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 text-[10px] font-mono-tech tracking-[0.3em] uppercase text-[#c8a45d] mb-2">
                <KeyRound className="w-3.5 h-3.5 flex-shrink-0" />
                <span>EXECUTIVE RESERVATION</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#f4f1e8] font-normal mb-2">
                Reserve Your Place
              </h3>
              <p className="text-xs text-[#f4f1e8]/65 font-light leading-relaxed mb-6">
                Please provide your corporate details to receive your personalized credential pass and private executive session access link.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase tracking-wider text-[#f4f1e8]/70 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#05080c]/80 border border-white/10 focus:border-[#c8a45d] text-xs text-[#f4f1e8] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase tracking-wider text-[#f4f1e8]/70 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@enterprise.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#05080c]/80 border border-white/10 focus:border-[#c8a45d] text-xs text-[#f4f1e8] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase tracking-wider text-[#f4f1e8]/70 mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Global Technologies"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#05080c]/80 border border-white/10 focus:border-[#c8a45d] text-xs text-[#f4f1e8] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase tracking-wider text-[#f4f1e8]/70 mb-1.5">
                      Designation / Role *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Managing Director / Founder / Head of Legal"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#05080c]/80 border border-white/10 focus:border-[#c8a45d] text-xs text-[#f4f1e8] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase tracking-wider text-[#f4f1e8]/70 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#05080c]/80 border border-white/10 focus:border-[#c8a45d] text-xs text-[#f4f1e8] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase tracking-wider text-[#f4f1e8]/70 mb-1.5">
                      Target Sector *
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#05080c]/80 border border-white/10 focus:border-[#c8a45d] text-xs text-[#f4f1e8] outline-none transition-colors cursor-pointer"
                    >
                      <option value="Technology & Cloud">Technology & Cloud Software</option>
                      <option value="Engineering & Construction (EPC)">Engineering & EPC Infrastructure</option>
                      <option value="Professional & Consulting Services">Professional & Legal Services</option>
                      <option value="Healthcare & Life Sciences">Healthcare & Pharmaceuticals</option>
                      <option value="Industrial & Advanced Manufacturing">Industrial & Manufacturing</option>
                      <option value="Trading, Wholesale & Retail">Import, Wholesale & Distribution</option>
                    </select>
                  </div>
                </div>

                {/* Privacy & Direct Confirmation */}
                <div className="flex items-center gap-2 pt-2 text-[10px] font-mono-tech text-[#f4f1e8]/50">
                  <Shield className="w-3.5 h-3.5 text-[#0b8f5a]" />
                  <span>Institutional confidentiality assured. No spam or commercial solicitations.</span>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-xs font-semibold tracking-[0.25em] uppercase text-[#05080c] bg-[#c8a45d] hover:bg-[#f4f1e8] transition-colors duration-300 shadow-[0_4px_20px_rgba(200,164,93,0.3)] cursor-pointer"
                  >
                    Confirm Executive Reservation
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* CONFIRMATION / ADMISSION PASS VIEW */
            <div className="space-y-6 text-center">
              <div className="w-14 h-14 rounded-full border border-[#0b8f5a] bg-[#0b8f5a]/20 flex items-center justify-center mx-auto text-[#0b8f5a]">
                <CheckCircle className="w-7 h-7" />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#0b8f5a] mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Admission Confirmed
                </div>
                <h3 className="font-editorial text-3xl text-[#f4f1e8]">
                  Your Key is Reserved
                </h3>
                <p className="text-xs text-[#f4f1e8]/65 font-light mt-1">
                  We look forward to hosting you on 26 September 2026.
                </p>
              </div>

              {/* Bespoke VIP Digital Pass */}
              <div className="relative rounded-xl border border-[#c8a45d]/40 bg-[#05080c] p-4 sm:p-6 text-left shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                {/* Header of pass */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 gap-2">
                  <div>
                    <span className="font-display tracking-[0.2em] text-xs font-semibold text-[#f4f1e8]">
                      COMPLY GLOBALLY
                    </span>
                    <span className="block text-[9px] font-mono-tech text-[#c8a45d]">
                      OFFICIAL EXECUTIVE PASS
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-mono-tech text-[11px] sm:text-xs text-[#c8a45d] font-bold">
                      #CG-KSA-2026-8941
                    </span>
                    <span className="block text-[8px] font-mono-tech text-[#0b8f5a]">
                      STATUS: VERIFIED
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-white/40 block">
                      Attendee
                    </span>
                    <span className="text-[#f4f1e8] font-semibold break-words">
                      {formData.fullName || 'Executive Guest'}
                    </span>
                    <span className="text-white/50 text-[11px] break-words"> · {formData.designation}, {formData.companyName}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 border-t border-white/5">
                    <div>
                      <span className="text-[10px] font-mono-tech uppercase tracking-wider text-white/40 block">
                        Date & Time
                      </span>
                      <span className="text-[#c8a45d] font-mono-tech text-[11px]">
                        26 SEP 2026 · 3:30 PM IST
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono-tech uppercase tracking-wider text-white/40 block">
                        Lead Host
                      </span>
                      <span className="text-[#f4f1e8] text-[11px]">
                        Dr. Anil Gupta (Comply Globally)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadICS}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded border border-[#c8a45d]/40 hover:border-[#c8a45d] text-xs font-mono-tech text-[#f4f1e8] hover:bg-[#c8a45d]/10 transition-colors"
                >
                  <Download className="w-4 h-4 text-[#c8a45d]" />
                  <span>Download .ICS Invite</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded border border-white/10 hover:border-white/30 text-xs font-mono-tech text-[#f4f1e8] hover:bg-white/5 transition-colors"
                >
                  <Copy className="w-4 h-4 text-[#0b8f5a]" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Session Link'}</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-mono-tech text-white/50 hover:text-white uppercase tracking-wider underline cursor-pointer"
                >
                  Return to Landing Page
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
