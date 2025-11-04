"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  rightImage: string;

  serviceNumber?: string;
  badgeTitle?: string;
  badgeSubtitle?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  rightImage,
  serviceNumber = "01",
  badgeTitle = "CLIFF",
  badgeSubtitle = "COATINGS",
}: HeroSectionProps) {
  const backgroundImageRef = React.useRef<HTMLDivElement>(null);


  return (
    <div className="relative bg-zinc-900">
      {/* Hero Image Section */}
      <div className="h-[70vh] w-full relative">
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Cliff lens technology"
            fill
            priority
            className="object-cover"
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        </div>
      </div>
    </div>

  );
}
