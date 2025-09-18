"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import TextWithTexture from "@/components/textwithgoldentexture";
import HeroSection from "@/components/Services/heropage";

const CliffZennSeries = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background image continuous motion animation
      gsap.fromTo(
        backgroundImageRef.current,
        {
          scale: 1,
          rotation: 0,
        },
        {
          scale: 1.1,
          rotation: 0.5,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      {/* Hero Section with Service Information */}
      <HeroSection
        title="CLIFF ZENN"
        subtitle="SERIES"
        description="Premium lens series combining style with advanced optical
                performance for the most discerning vision needs."
        backgroundImage="/ai0.jpg"
        rightImage="/ai0.jpg"
        serviceNumber="11"
        badgeTitle="Zenn"
        badgeSubtitle="Premium"
      />



      <div className="min-h-screen  text-white overflow-hidden">
        {/* Animated Background */}
        <div className="max-w-screen mx-auto ">
          {/* Main Content */}
          <div className="relative z-10 px-7 py-20  w-[100%]">
            {/* Hero Section with Statistics */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Side - Statistics */}
              <div className=" h-full flex justify-between gap-10 items-start flex-col">

                <div className="mt-8">
                  <h2 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent sm:leading-relaxed">
                    Empower your vision to keep pace with a fast-moving, digital world.
                  </h2>
                  <p className="text-gray-300 text-lg">
                    <span className="italic">
                      In an age where our eyes face countless hours of screens and devices, true clarity is more than sharp sight—it’s the confidence to stay focused, comfortable, and adaptable. The Cliff Zenn Series inspires you to embrace every challenge with lenses designed to protect and support your vision, so you can see—and live—without limits.
                    </span>

                  </p>
                </div>
                <div className="w-full   grid md:grid-cols-2 gap-10">
                  <div className="p-6  flex flex-col justify-center items-center gap-4  rounded-lg bg-zinc-900">
                    <div className="text-6xl font-bold text-white">+8h</div>
                    <div>
                      <div className="text-white text-[1.2rem] font-medium mb-2 text-center ">
                        We spend on average
                      </div>
                      <div className=" text-[1rem] text-zinc-400 mx-auto w-40 text-center">
                        each day in front of digital display
                      </div>
                    </div>
                  </div>



                  <div className="p-6  flex flex-col justify-center items-center gap-4   rounded-lg bg-zinc-900">
                    <div className="text-6xl font-bold text-white">+3</div>
                    <div>
                      <div className="text-white text-[1.2rem] font-medium mb-2 text-center">
                        We use on average
                      </div>
                      <div className="text-[1rem] text-zinc-400 mx-auto w-40 text-center">
                        different electric devices per day
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Side - Hero Image */}
              <div className=" w-full h-full">
                <div className="flex justify-center items-center relative w-full h-full">
                  <img className="object-cover object-center w-full h-full" src="/eye1-minii.webp" alt="eye" />

                  {/* Gradient overlay on top */}
                  <div className="absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
                </div>

              </div>
            </div>

            {/* Benefits Section */}
            <div className="text-center my-40">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed">
                  Benefits of CLIFF ZENN SERIES LENS
                </span>
              </h2>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Clarity */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl mb-4 mx-auto w-fit ">
                    <svg fill="none" stroke="#FFD700" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20" viewBox="0 0 24 24">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 5v1M12 18v1M5 12H4M20 12h1" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-300">
                    Clarity
                  </h3>
                  <p className="text-gray-300">
                    Crystal clear vision with advanced lens technology for
                    optimal visual performance
                  </p>
                </div>

                {/* Comfort */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl mb-4 mx-auto w-fit ">
                    <svg className="w-20 h-20" xmlns="http://www.w3.org/2000/svg" strokeWidth={0.5} viewBox="0 0 256 256"><path fill="#FFD700" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M84 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m96 0a4 4 0 0 1-4 4h-24a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4m-8.54 46c-9.55 16.52-25.39 26-43.46 26s-33.91-9.48-43.46-26a4 4 0 0 1 6.92-4c8.21 14.19 21.19 22 36.54 22s28.33-7.81 36.54-22a4 4 0 1 1 6.92 4" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-300">
                    Comfort
                  </h3>
                  <p className="text-gray-300">
                    All-day comfort with reduced eye strain and fatigue during
                    extended use
                  </p>
                </div>

                {/* Digital Ready */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl mb-4 mx-auto w-fit ">
                    <svg fill="none" stroke="#FFD700" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20" viewBox="0 0 24 24">
                      <rect x="7" y="2" width="10" height="20" rx="2" />
                      <path d="M16 16l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-300">
                    Digital Ready
                  </h3>
                  <p className="text-gray-300">
                    Optimized for digital device usage with blue light
                    protection
                  </p>
                </div>

                {/* Precised */}
                <div className="bg-white/10 backdrop-blur-3xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl mb-4 mx-auto w-fit ">
                    <svg fill="none" stroke="#FFD700" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-300">
                    Precised
                  </h3>
                  <p className="text-gray-300">
                    Precision-crafted lenses for accurate vision correction in
                    all conditions
                  </p>
                </div>

                {/* Personalized */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl mb-4 mx-auto w-fit ">
                    <svg fill="none" stroke="#FFD700" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20" viewBox="0 0 24 24">
                      <path d="M2 16s2 0 3 2c1 2 3 2 5 0 2-2 3-1 4 0 1 1 3 1 4-1 1-2 3-1 4 0" />
                      <path d="M8 13h.01M16 13h.01M6 10a2 2 0 1 1 4 0v1M14 10a2 2 0 1 1 4 0v1" />
                    </svg>

                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-300">
                    Personalized
                  </h3>
                  <p className="text-gray-300">
                    Customized to your unique visual needs and lifestyle
                    requirements
                  </p>
                </div>

                {/* Durable */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl mb-4 mx-auto w-fit ">
                    <svg fill="none" stroke="#FFD700" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20" viewBox="0 0 24 24">
                      <path d="M12 2l8 4v6c0 5-3.6 9.4-8 10-4.4-.6-8-5-8-10V6l8-4z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>

                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-300">
                    Durable
                  </h3>
                  <p className="text-gray-300">
                    Long-lasting quality with superior scratch and impact
                    resistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToServicesButton />
    </>
  );
};

export default CliffZennSeries;
