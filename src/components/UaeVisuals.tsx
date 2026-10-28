import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Sparkles } from 'lucide-react';

export const UaeSkylineIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${className}`}>
      {/* UAE Twilight Sky Backdrop with #009BFF and #FF7901 vibrant dusk atmospheric gradient */}
      <div className="relative h-48 sm:h-56 w-full bg-gradient-to-br from-[#0F2648] via-[#103E70] to-[#0A1A30] overflow-hidden flex flex-col justify-end p-4 sm:p-6 border border-slate-700/60 shadow-lg">
        
        {/* Subtle glowing ambient lights */}
        <div className="absolute top-2 right-12 w-48 h-48 bg-[#009BFF]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-6 left-1/3 w-64 h-32 bg-[#FF7901]/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-4 left-6 flex items-center gap-2">
          {/* UAE Flag subtle color bar */}
          <div className="flex h-3 w-8 rounded overflow-hidden shadow-xs border border-white/20">
            <span className="w-2 bg-red-600"></span>
            <div className="flex flex-col flex-1">
              <span className="h-1 bg-emerald-600"></span>
              <span className="h-1 bg-white"></span>
              <span className="h-1 bg-black"></span>
            </div>
          </div>
          <span className="text-[11px] font-bold text-amber-300 tracking-wider uppercase drop-shadow-xs">
            United Arab Emirates (UAE)
          </span>
        </div>

        {/* Dubai Skyline SVG Silhouette */}
        <svg
          viewBox="0 0 1000 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-36 object-contain self-end select-none opacity-90 drop-shadow-md"
        >
          <defs>
            <linearGradient id="skyline-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A5C98" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#132B4A" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0B1A2E" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="burj-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B4FF" />
              <stop offset="40%" stopColor="#5599D8" />
              <stop offset="100%" stopColor="#14345A" />
            </linearGradient>
            <linearGradient id="gold-spire" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFD166" />
              <stop offset="100%" stopColor="#FF7901" />
            </linearGradient>
          </defs>

          {/* Distant skyline buildings */}
          <rect x="20" y="160" width="45" height="120" fill="url(#skyline-grad)" opacity="0.6" />
          <rect x="75" y="140" width="35" height="140" fill="url(#skyline-grad)" opacity="0.6" />
          <rect x="120" y="110" width="60" height="170" fill="url(#skyline-grad)" opacity="0.6" />
          
          {/* Dubai Frame Outline */}
          <rect x="195" y="90" width="50" height="90" rx="3" stroke="#FFA133" strokeWidth="4" fill="none" opacity="0.75" />

          {/* Emirates Towers 1 & 2 */}
          <polygon points="270,70 300,100 300,280 270,280" fill="url(#skyline-grad)" />
          <polygon points="310,95 335,120 335,280 310,280" fill="url(#skyline-grad)" />

          {/* Burj Khalifa (Center Masterpiece) */}
          {/* Spire */}
          <line x1="500" y1="10" x2="500" y2="60" stroke="url(#gold-spire)" strokeWidth="3" />
          <polygon points="496,60 504,60 503,110 497,110" fill="url(#burj-grad)" />
          {/* Stepped tiers */}
          <polygon points="493,110 507,110 506,160 494,160" fill="url(#burj-grad)" />
          <polygon points="488,160 512,160 511,210 489,210" fill="url(#burj-grad)" />
          <polygon points="480,210 520,210 525,280 475,280" fill="url(#burj-grad)" />

          {/* Window dots lighting on Burj */}
          <line x1="500" y1="70" x2="500" y2="260" stroke="#E0F2FE" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.8" />

          {/* Modern Business Bay skyscrapers */}
          <rect x="545" y="130" width="40" height="150" fill="url(#skyline-grad)" />
          <rect x="595" y="100" width="55" height="180" rx="4" fill="url(#skyline-grad)" />
          <rect x="660" y="145" width="45" height="135" fill="url(#skyline-grad)" />

          {/* Burj Al Arab Sail Silhouette */}
          <path
            d="M 750,280 L 750,90 Q 750,90 790,140 Q 820,185 820,280 Z"
            fill="url(#skyline-grad)"
          />
          <path
            d="M 740,280 L 740,80 L 755,80 L 755,280 Z"
            fill="url(#burj-grad)"
          />
          <line x1="740" y1="130" x2="805" y2="130" stroke="#FF7901" strokeWidth="2.5" />

          {/* Additional Towers */}
          <rect x="840" y="150" width="50" height="130" fill="url(#skyline-grad)" opacity="0.7" />
          <rect x="900" y="170" width="45" height="110" fill="url(#skyline-grad)" opacity="0.7" />

          {/* Base reflecting ground / Sheikh Zayed Road line */}
          <line x1="0" y1="278" x2="1000" y2="278" stroke="#009BFF" strokeWidth="3" opacity="0.6" />
        </svg>

        {/* Content badge overlay */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-700/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-200">
              Direct Embassy Submissions: New Delhi & Mumbai
            </span>
          </div>
          <span className="text-[11px] font-bold text-[#FFA133] bg-black/40 px-2.5 py-1 rounded-md border border-[#FF7901]/30">
            Dubai · Abu Dhabi · Sharjah · Ajman · RAK
          </span>
        </div>

      </div>
    </div>
  );
};

export const UaeEmbassyStampSeal: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-[#FF7901]/40 shadow-sm relative overflow-hidden ${className}`}
    >
      <div className="flex items-start gap-3.5 relative z-10">
        {/* Diplomatic Seal Graphic */}
        <div className="w-12 h-12 rounded-full bg-[#009BFF] text-white flex items-center justify-center shrink-0 border-2 border-amber-300 shadow-md">
          <Award className="w-6 h-6 text-amber-300" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
              Consular Protocol
            </span>
            <span className="text-[10px] font-bold text-white bg-[#FF7901] px-1.5 py-0.2 rounded">
              Verified Route
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
            UAE Embassy & MEA Legalization
          </h4>
          <p className="text-[11px] text-slate-600 leading-tight">
            Official diplomatic sticker, MEA barcode hologram & consular seal applied on original certificates.
          </p>
        </div>
      </div>

      {/* Decorative Stamp watermark */}
      <div className="absolute -right-3 -bottom-4 text-[#FF7901]/10 font-bold text-6xl pointer-events-none select-none font-serif">
        UAE
      </div>
    </div>
  );
};
