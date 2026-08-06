import { useState } from 'react';

interface LogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export default function Logo({ variant = 'header', className }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  // Default logo URL
  const logoUrl = "https://pages.greatpages.com.br/www.multionic.com.br/1764935812/imagens/desktop/1124897_1_60484.png";

  if (imgError) {
    // Vector SVG Brand Logo Fallback if external PNG fails to load / is blocked
    const textColor = variant === 'footer' ? 'text-white' : 'text-[#3B529B]';
    const subTextColor = variant === 'footer' ? 'text-white/80' : 'text-[#018E6D]';

    return (
      <div className={`flex items-center gap-2.5 select-none ${className || ''}`}>
        <svg className="h-8 md:h-10 w-auto text-[#018E6D] flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3C20 3 8 18 8 26C8 32.6274 13.3726 38 20 38C26.6274 38 32 32.6274 32 26C32 18 20 3 20 3Z" fill="currentColor" fillOpacity="0.2"/>
          <path d="M20 6C20 6 10 19 10 26C10 31.5228 14.4772 36 20 36C25.5228 36 30 31.5228 30 26C30 19 20 6 20 6Z" stroke="#018E6D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 14C20 14 14 22 14 26C14 29.3137 16.6863 32 20 32C23.3137 32 26 29.3137 26 26C26 22 20 14 20 14Z" fill="#3B529B"/>
        </svg>
        <div className="flex flex-col justify-center">
          <span className={`${textColor} font-black tracking-tight text-lg md:text-xl leading-none uppercase`}>
            MULTIONIC
          </span>
          <span className={`${subTextColor} text-[8px] tracking-[0.22em] uppercase font-bold leading-tight mt-0.5`}>
            SOLUÇÕES EM LIMPEZA
          </span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={logoUrl} 
      alt="Multionic Logo" 
      className={className || (variant === 'footer' ? 'h-10 brightness-0 invert object-contain' : 'h-8 md:h-9 lg:h-8 xl:h-10 2xl:h-12 w-auto object-contain')}
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
    />
  );
}
