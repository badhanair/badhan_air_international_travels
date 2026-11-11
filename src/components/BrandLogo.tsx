import React, { useRef } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface BrandLogoProps {
  logoUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  editable?: boolean;
  onUpdateLogo?: (newLogoUrl: string) => void;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  logoUrl,
  size = 'md',
  editable = false,
  onUpdateLogo,
  className = '',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateLogo) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onUpdateLogo(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative group shrink-0 ${sizeClasses[size]} ${className}`}>
      {logoUrl ? (
        <div className="w-full h-full rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-xs p-1 flex items-center justify-center">
          <img
            src={logoUrl}
            alt="Badhan Air International Travels Official Logo"
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        /* Bespoke Badhan Air International Travels Brand Insignia */
        <div className="w-full h-full rounded-xl bg-gradient-to-tr from-sky-800 via-sky-600 to-blue-700 flex items-center justify-center text-white shadow-sm shadow-sky-900/15 overflow-hidden transition-transform group-hover:scale-105">
          <svg
            viewBox="0 0 100 100"
            className="w-[82%] h-[82%] drop-shadow-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Globe Coordinate Rings */}
            <circle cx="50" cy="50" r="42" stroke="white" strokeWidth="2.5" strokeOpacity="0.25" strokeDasharray="4 3" />
            <ellipse cx="50" cy="50" rx="42" ry="18" stroke="white" strokeWidth="2" strokeOpacity="0.3" transform="rotate(-25 50 50)" />
            <path d="M12 50 C 35 25, 65 75, 88 50" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
            
            {/* Golden Flight Swoosh & Contrail */}
            <path
              d="M18 78 C 30 70, 52 50, 78 22"
              stroke="#FDE047"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M24 82 C 40 73, 58 54, 82 28"
              stroke="#BAE6FD"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              strokeLinecap="round"
            />

            {/* Ascending Commercial Airliner Silhouette */}
            <g transform="translate(62, 18) rotate(42) scale(0.68)">
              {/* Airplane fuselage */}
              <path
                d="M 25 0 C 27 5, 27 25, 26 50 C 25 58, 24 64, 25 68 L 22 75 L 25 72 L 28 75 L 25 68 C 26 64, 25 58, 24 50 C 23 25, 23 5, 25 0 Z"
                fill="white"
              />
              {/* Main wings */}
              <path
                d="M 25 24 L 2 46 L 5 50 L 25 36 L 45 50 L 48 46 L 25 24 Z"
                fill="white"
              />
              {/* Tail fin & elevators */}
              <path
                d="M 25 60 L 12 72 L 14 74 L 25 68 L 36 74 L 38 72 L 25 60 Z"
                fill="#FDE047"
              />
            </g>

            {/* Badhan Air Star Accent */}
            <polygon
              points="50,14 52,19 57,20 53,23 54,28 50,25 46,28 47,23 43,20 48,19"
              fill="#FDE047"
            />
          </svg>
        </div>
      )}

      {/* Editable Overlay Trigger */}
      {editable && onUpdateLogo && (
        <>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            aria-label="Upload logo image file"
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            title="Click to upload your logo file (PNG, JPG, SVG)"
            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-sky-700 hover:bg-sky-800 text-white shadow-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer border-2 border-white focus:outline-hidden"
          >
            <Camera className="w-3 h-3" />
          </button>
        </>
      )}
    </div>
  );
};
