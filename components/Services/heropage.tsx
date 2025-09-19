"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextWithTexture from "@/components/textwithgoldentexture";

// Register GSAP plugins only on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Animation for hero section
  useGSAP(() => {
    // Hero text animation
    gsap.fromTo(
      ".hero-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    // Hero image animation
    gsap.fromTo(
      ".hero-image",
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
    );

    // Background image continuous motion animation
    gsap.fromTo(
      backgroundImageRef.current,
      {
        scale: 1,
        rotation: 0,
      },
      {
        scale: 1.5,
        rotation: 0.5,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <div className="h-[100vh] text-white relative overflow-hidden">
      {/* Hero Section with Service Information */}
      <div ref={backgroundImageRef} className="absolute inset-0 h-full">
        <Image
          src={backgroundImage}
          className="w-full h-full object-cover opacity-70"
          alt="Cliff lens"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container max-w-[1510px] mx-auto px-4 sm:px-6 py-8 sm:py-12 h-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 h-full">
          <div className="w-full lg:w-1/2 space-y-2 pt-24 sm:pt-0 text-center lg:text-left">
            <div className="hero-title">
              <TextWithTexture
                text={title}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight capitalize block lg:mt-12"
              />
              <TextWithTexture
                text={subtitle}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight capitalize block"
              />
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-full lg:max-w-2xl">
              {description}
            </p>

            {/* CTA */}
            <div className="pt-6 sm:pt-8 lg:pt-8">
              <Link href='/Contact' className="group relative inline-block">
                <button className="px-6 sm:px-8 py-3 sm:py-4 lg:px-8 lg:py-4 bg-white/10 rounded-full text-white backdrop-blur-sm border border-white/30 font-semibold text-base sm:text-lg lg:text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <span className="relative z-10 flex items-center justify-center">
                    Contact Us
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end lg:ml-2 mt-6 lg:mt-0">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[28rem]">
                  {/* Main Image Container */}
                  <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl w-full hero-image">
                    <Image
                      src={rightImage}
                      alt="Cliff Blue Safe Coating Technology"
                      width={400}
                      height={400}
                      className="object-cover w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[300px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Service Number Overlay */}
                    <div className="absolute top-1 sm:top-2 md:top-4 right-1 sm:right-2 md:right-4">
                      <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/30">{serviceNumber}</span>
                    </div>
                  </div>

                  {/* Badge Overlay */}
                  <div className="absolute -bottom-8 sm:-bottom-8 md:-bottom-10 left-[-48px] sm:left-[-44px] md:left-[-40px] w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 backdrop-blur-sm bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <div className="text-center p-3 sm:p-4 md:p-5">
                      <div className="text-lg sm:text-xl md:text-xl lg:text-xl font-bold text-[#DFC65F] drop-shadow-lg">
                        {badgeTitle}
                      </div>
                      <div className="text-[10px] sm:text-[12px] md:text-sm lg:text-lg text-gray-200 mt-1.5 sm:mt-2 tracking-wider">
                        {badgeSubtitle}
                      </div>
                    </div>
                  </div>
                </div>
           </div>
        </div>
      </div>
    </div>

  );
}
