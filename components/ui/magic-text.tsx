"use client";

import * as React from "react";

export interface MagicTextProps {
  text: string;
  className?: string;
}

export const MagicText: React.FC<MagicTextProps> = ({ text, className = "" }) => {
  return (
    <div className={`poppins text-[#FFD700] leading-relaxed text-lg sm:text-xl md:text-2xl text-center ${className}`}>
      {text}
    </div>
  );
};
