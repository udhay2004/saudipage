import React from 'react';
import { KeyRound, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080c] border-t border-[#c8a45d]/15 pt-12 sm:pt-16 pb-10 sm:pb-12 text-[#f4f1e8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded border border-[#c8a45d]/40 flex items-center justify-center bg-[#071a2b]/80">
                <KeyRound className="w-3.5 h-3.5 text-[#c8a45d]" />
              </div>
              <span className="font-display tracking-[0.25em] text-sm font-semibold text-[#f4f1e8]">
                COMPLY GLOBALLY
              </span>
            </div>
            <p className="text-xs text-[#f4f1e8]/60 font-light leading-relaxed max-w-sm">
              Dedicated institutional expansion and compliance advisory. Facilitating compliant corporate entry, licensing, and ongoing governance for high-growth enterprises entering the GCC.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[#0b8f5a]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Registered Corporate Services Provider</span>
            </div>
          </div>

          {/* Regional Advisory Hubs */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#c8a45d]">
              Regional Hubs
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono-tech text-[#f4f1e8]/80">
              <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                <span className="text-white font-medium block">UK</span>
                <span className="text-[10px] text-white/40">United Kingdom</span>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                <span className="text-white font-medium block">USA</span>
                <span className="text-[10px] text-white/40">United States</span>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                <span className="text-white font-medium block">INDIA (NOIDA)</span>
                <span className="text-[10px] text-white/40">National Capital Region</span>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                <span className="text-white font-medium block">INDIA (MUMBAI)</span>
                <span className="text-[10px] text-white/40">Financial Capital</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#c8a45d]">
              Webinar Navigation
            </div>
            <ul className="space-y-2 text-xs font-mono-tech">
              <li>
                <a href="#session" className="hover:text-[#c8a45d] transition-colors">
                  The Session (26 Sep 2026)
                </a>
              </li>
              <li>
                <a href="#why-saudi" className="hover:text-[#c8a45d] transition-colors">
                  Why Saudi (Vision 2030)
                </a>
              </li>
              <li>
                <a href="#landscape" className="hover:text-[#c8a45d] transition-colors">
                  Regulatory Landscape
                </a>
              </li>
              <li>
                <a href="#speaker" className="hover:text-[#c8a45d] transition-colors">
                  Host Profile (Dr. Anil Gupta)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono-tech text-white/40">
          <div>
            © 2026 Comply Globally. All Rights Reserved. Not an official government body of the Kingdom of Saudi Arabia.
          </div>
          <div className="flex items-center gap-6">
            <span>MISA & CR Advisory</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Confidentiality Protocol</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
