import React from 'react';

const TornEdgeDivider = ({ className = "" }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="w-[120%] md:w-full h-8 md:h-12 block"
      >
        <path 
          d="M0,120 L0,0 L20,30 L40,10 L60,40 L80,15 L100,35 L120,5 L140,25 L160,10 L180,45 L200,20 L220,50 L240,15 L260,35 L280,5 L300,25 L320,10 L340,40 L360,20 L380,45 L400,10 L420,30 L440,15 L460,50 L480,25 L500,40 L520,15 L540,45 L560,20 L580,35 L600,10 L620,40 L640,15 L660,45 L680,20 L700,50 L720,10 L740,35 L760,15 L780,40 L800,20 L820,45 L840,10 L860,30 L880,5 L900,25 L920,45 L940,15 L960,35 L980,10 L1000,40 L1020,20 L1040,50 L1060,15 L1080,35 L1100,5 L1120,25 L1140,45 L1160,10 L1180,30 L1200,0 L1200,120 Z" 
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default TornEdgeDivider;
