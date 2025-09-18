"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import TextWithTexture from "@/components/textwithgoldentexture";
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
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
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
        ctaLabel="Contact Us"
        ctaLink="/Contact"
        serviceNumber="03"
        badgeTitle="CLIFF"
        badgeSubtitle="BLUE SAFE"
      /> 
      <div className="h-[100vh] text-white relative overflow-hidden">
        <div ref={backgroundImageRef} className="absolute inset-0 h-full">
          <Image
            src={"/bluesafe/blue1.png"}
            className="w-full h-full object-cover opacity-70"
            alt="Cliff lens"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight capitalize">
                <TextWithTexture
                  text="Cliff Blue Safe"
                  className="text-5xl md:text-7xl mt-12 font-bold leading-tight"
                />
                <TextWithTexture
                  text="Coating"
                  className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent"
                />
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl  text-white leading-relaxed max-w-2xl">
                Advanced blue light protection coating for modern digital
                lifestyle. Premium coating technology protects your eyes from
                harmful blue light emitted by digital screens.
              </p>

              <div className="pt-8">
                <Link href="/Contact" className="group relative inline-block">
                  <button className="px-8 py-4 bg-white/10 rounded-full text-white backdrop-blur-sm border border-white/30 font-semibold text-lg  transition-all duration-300 transform hover:scale-105  cursor-pointer">
                    <span className="relative z-10 flex items-center justify-center">
                      Contact Us
                      <svg
                        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
            <div className="lg:w-1/2 relative">
              <div className="relative flex justify-center lg:justify-end lg:ml-2">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl w-[28rem]">
                  <Image
                    src="/bluesafe/blue1.png"
                    alt="Cliff Blue Safe Coating Technology"
                    width={200}
                    height={300}
                    className="object-contain h-[300px] w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">02</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/4 w-32 h-32 backdrop-blur-sm bg-white/10 rounded-2xl flex items-center justify-center ">
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-[#DFC65F] drop-shadow-lg">
                      Blue
                    </div>
                    <div className="text-xs text-gray-200 mt-1 tracking-wider">
                      Safe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToServicesButton />

      <div className="w-full">
        <div className="w-11/12 mx-auto h-full py-10 flex items-start justify-center relative">
          {/* First content - Top Left */}
          <div className="p-4 w-full z-10 space-y-4">
            <h3 className="font-semibold text-white mb-4 text-5xl">
              Anti-Reflective
            </h3>
            <p className="text-gray-300 text-sm">
              Eliminates reflections, increase light transmission. Decrease
              unwanted glare. Makes the lenses appear invisible.
            </p>
          </div>

          {/* Second content - Top Right */}
          <div className=" p-4 w-full z-10">
            <h3 className="font-semibold text-white mb-4 text-5xl">
              Anti-Static Electricity/ Anti-Radiation
            </h3>
            <p className="text-gray-300 text-sm">
              Alleviate digital eye strain. Stays clean, repels dust particles.
            </p>
          </div>

          {/* Third content - Bottom Left */}
          <div className=" p-4 w-full z-10">
            <h3 className="font-semibold text-white mb-4 text-5xl">
              Anti-Smudge
            </h3>
            <p className="text-gray-300 text-sm">
              High contact angle, repels oil and water, makes lenses more spot
              resistant. Easy to clean.
            </p>
          </div>
        </div>
        {/* Image container - only the image zooms on hover */}
        <div className="relative w-full">
          <div className="group cursor-pointer overflow-hidden">
            <Image
              src="/detail.svg"
              alt="Cliff Blue Safe Coating Technology"
              width={1000}
              height={1000}
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 w-2/3 mx-auto"
            />
          </div>
        </div>
      </div>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 items-center">
            {/* Right side - Content */}
            <div className="w-full mx-auto">
              <div className="p-6 lg:p-10">
                <h2 className="text-5xl font-bold text-white mb-6 text-center">
                  Cliff Drive Clear Coating
                </h2>
                <p className="text-gray-300 w-1/2 mx-auto mb-8 text-lg leading-relaxed text-center">
                  Experience the freedom of the open road with Cliff Drive Clear
                  Coating designed to deliver unmatched clarity and comfort for
                  drivers. .
                </p>

                {/* Features list */}
                <div className="flex divide-zinc-800 rounded-lg overflow-hidden">
                  <div className="py-4 px-6">
                    <div className="flex items-start">
                      <span className="text-[#FFD700] font-medium mr-4 mt-1 text-5xl">
                        1
                      </span>
                      <div>
                        <span className="text-white font-medium block text-2xl">
                          Superior Anti-Glare Performance
                        </span>
                        <span className="text-zinc-400 text-sm mt-1 block">
                          Minimizes glare from headlights and reflective
                          surfaces
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 px-6">
                    <div className="flex items-start">
                      <span className="text-[#FFD700] font-medium mr-4 mt-1 text-5xl">
                        2
                      </span>
                      <div>
                        <span className="text-white font-medium block text-2xl">
                          Enhanced Visual Contrast
                        </span>
                        <span className="text-zinc-400 text-sm mt-1 block ">
                          Improves definition of road signs and surroundings
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 px-6">
                    <div className="flex items-start">
                      <span className="text-[#FFD700] font-medium mr-4 mt-1 text-5xl">
                        3
                      </span>
                      <div>
                        <span className="text-white font-medium block text-2xl">
                          Comfort for Long Journeys
                        </span>
                        <span className="text-zinc-400 text-sm mt-1 block">
                          Reduces eye fatigue during extended driving hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Left side - Image */}
            <div className="relative">
              <Image
                src="/bluesafe/driveclear.png"
                alt="Cliff Drive Clear Coating"
                width={1200}
                height={400}
                className="w-full object-cover"
                style={{ height: "390px" }}
              />
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CliffBlueSafeCoating;
