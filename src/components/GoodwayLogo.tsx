import React from 'react';

interface GoodwayLogoProps {
  variant?: 'default' | 'white' | 'compact';
  className?: string;
}

export const GoodwayLogo: React.FC<GoodwayLogoProps> = ({
  variant = 'default',
  className = '',
}) => {
  const isWhite = variant === 'white';

  if (isWhite) {
    return (
      <div
        className={`inline-flex items-center bg-white rounded-xl px-3.5 py-2 shadow-sm border border-slate-700/50 ${className}`}
      >
        <img
          src="/assets/aistudio/goodway-official-logo_3a3ebc7f.png"
          alt="GoodWay Attestation - ISO Certified 9001:2015"
          className="h-9 sm:h-11 w-auto max-w-[210px] sm:max-w-[260px] object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none py-0.5 ${className}`}>
      <img
        src="/assets/aistudio/goodway-official-logo_3a3ebc7f.png"
        alt="GoodWay Attestation - ISO Certified 9001:2015"
        className="h-8.5 xs:h-9.5 sm:h-11 md:h-12 w-auto max-w-[160px] xs:max-w-[195px] sm:max-w-[240px] md:max-w-[270px] object-contain transition-transform duration-200 hover:scale-[1.01]"
      />
    </div>
  );
};
