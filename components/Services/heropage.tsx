"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  rightImage: string;
  showBackButton?: boolean;
  backButtonHref?: string;
  backButtonText?: string;
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
  showBackButton = false,
  backButtonHref = "/",
  backButtonText = "Back",
  serviceNumber = "01",
  badgeTitle = "CLIFF",
  badgeSubtitle = "COATINGS",
}: HeroSectionProps) {
  const backgroundImageRef = React.useRef<HTMLDivElement>(null);


  return (
    <div className="relative bg-zinc-900">
      {/* Hero Image Section */}
      <div className="h-[100vh] w-full relative">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center justify-center text-center">
            <div className="w-full px-8">
              {showBackButton && (
                <div className="absolute top-20 left-8">
                  <a
                    href={backButtonHref}
                    className="inline-flex items-center text-[#FFD700] hover:text-[#FFD700] mb-8 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {backButtonText}
                  </a>
                </div>
              )}
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl monsterrat text-white mb-4">
                  {title}
                </h1>
                <h2 className="text-2xl poppins md:text-3xl text-[#FFD700] mb-6">
                  {subtitle}
                </h2>
                <p className="text-lg md:text-xl poppins text-gray-200 max-w-2xl mx-auto">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
