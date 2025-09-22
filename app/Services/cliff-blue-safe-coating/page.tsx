"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import HeroSection from "@/components/Services/heropage";

gsap.registerPlugin(ScrollTrigger);

interface CoatingFeature {
  title: string;
  benefits: string[];
  icon: string;
  color: string;
  gradient: string;
}

const CliffBlueSafeCoating = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);

  const images = [
    "/cliffcoating/new.png",
    "/cliffcoating/new1.png",
    "/cliffcoating/new2.png",
    "/cliffcoating/new3.png",
    "/cliffcoating/new4.png",
    "/cliffcoating/new5.png",
  ];

  const coatingFeatures: CoatingFeature[] = [
    {
      title: "Anti-Reflective",
      benefits: [
        "Eliminates reflections, increases light transmission",
        "Reduces unwanted glare for better visual comfort",
        "Makes lenses appear virtually invisible",
      ],
      icon: "/svgs/antireflective.svg",
      color: "from-blue-400 to-cyan-400",
      gradient: "bg-gradient-to-br from-blue-900/30 to-cyan-800/20",
    },
    {
      title: "Anti-Static/Radiation",
      benefits: [
        "Alleviates digital eye strain from extended screen use",
        "Repels dust particles for cleaner lenses",
        "Protects against harmful blue light radiation",
      ],
      icon: "/svgs/bluelight.svg",
      color: "from-purple-400 to-blue-400",
      gradient: "bg-gradient-to-br from-purple-900/30 to-blue-800/20",
    },
    {
      title: "Hydrophobic & Oleophobic",
      benefits: [
        "High contact angle repels oil and water",
        "Makes lenses more spot and smudge resistant",
        "Easy to clean with minimal effort",
      ],
      icon: "/svgs/easytoclean.svg",
      color: "from-cyan-400 to-teal-400",
      gradient: "bg-gradient-to-br from-cyan-900/30 to-teal-800/20",
    },
  ];

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

    // Feature cards animation
    gsap.fromTo(
      ".feature-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: featureCardsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
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
    <>
      {/* Hero Section with Service Information */}


      <HeroSection
        title="Cliff Premium"
        subtitle="Coatings"
        description="Advanced blue light protection coating for modern digital lifestyle. Premium coating technology protects your eyes from harmful blue light emitted by digital screens."
        backgroundImage="/bluesafe/blue1.png"
        rightImage="/bluesafe/blue1.png"
        serviceNumber="03"
        badgeTitle="BLUE"
        badgeSubtitle="Safe"
      />

      <BackToServicesButton />

      <div className="w-full">
        {/* Content Section */}
        <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {/* First content */}
          <div className="p-4 space-y-3 text-center md:text-left">
            <h3 className="font-semibold text-white text-3xl sm:text-4xl lg:text-5xl">
              Anti-Reflective
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg">
              Eliminates reflections, increases light transmission. Decreases
              unwanted glare. Makes the lenses appear invisible.
            </p>
          </div>

          {/* Second content */}
          <div className="p-4 space-y-3 text-center md:text-left">
            <h3 className="font-semibold text-white text-3xl sm:text-4xl lg:text-5xl">
              Anti-Static Electricity / Anti-Radiation
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg">
              Alleviates digital eye strain. Stays clean, repels dust particles.
            </p>
          </div>

          {/* Third content */}
          <div className="p-4 space-y-3 text-center md:text-left">
            <h3 className="font-semibold text-white text-3xl sm:text-4xl lg:text-5xl">
              Anti-Smudge
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg">
              High contact angle, repels oil and water, makes lenses more spot
              resistant. Easy to clean.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full mt-10">
          <div className="group cursor-pointer overflow-hidden">
            <Image
              src="/detail.svg"
              alt="Cliff Blue Safe Coating Technology"
              width={1000}
              height={1000}
              className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 w-11/12 sm:w-4/5 lg:w-2/3 mx-auto"
            />
          </div>
        </div>
      </div>


      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative order-1 lg:order-none">
              <Image
                src="/bluesafe/driveclear.png"
                alt="Cliff Drive Clear Coating"
                width={1200}
                height={800}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl"
              />
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10 rounded-xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10 rounded-xl"></div>
            </div>

            {/* Right side - Content */}
            <div className="w-full mx-auto relative z-20">
              <div className="p-6 lg:p-10">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-center lg:text-left">
                  Cliff Drive Clear Coating
                </h2>
                <p className="text-zinc-300 max-w-2xl mx-auto lg:mx-0 mb-8 text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
                  Experience the freedom of the open road with Cliff Drive Clear
                  Coating designed to deliver unmatched clarity and comfort for
                  drivers.
                </p>

                {/* Features list */}
                <div className="space-y-8">
                  {/* Feature 1 */}
                  <div className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-4 mt-1 text-4xl sm:text-5xl">
                      1
                    </span>
                    <div>
                      <span className="text-white font-semibold block text-xl sm:text-2xl">
                        Superior Anti-Glare Performance
                      </span>
                      <span className="text-zinc-400 text-sm sm:text-base mt-1 block">
                        Minimizes glare from headlights and reflective surfaces
                      </span>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-4 mt-1 text-4xl sm:text-5xl">
                      2
                    </span>
                    <div>
                      <span className="text-white font-semibold block text-xl sm:text-2xl">
                        Enhanced Visual Contrast
                      </span>
                      <span className="text-zinc-400 text-sm sm:text-base mt-1 block">
                        Improves definition of road signs and surroundings
                      </span>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-4 mt-1 text-4xl sm:text-5xl">
                      3
                    </span>
                    <div>
                      <span className="text-white font-semibold block text-xl sm:text-2xl">
                        Comfort for Long Journeys
                      </span>
                      <span className="text-zinc-400 text-sm sm:text-base mt-1 block">
                        Reduces eye fatigue during extended driving hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default CliffBlueSafeCoating;
