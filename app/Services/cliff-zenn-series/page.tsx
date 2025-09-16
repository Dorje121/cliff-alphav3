"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import TextWithTexture from "@/components/textwithgoldentexture";

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
      <div className="h-[90vh] to-black text-white relative overflow-hidden">
        <div ref={backgroundImageRef} className="absolute inset-0 h-full">
          <video
            src="/homevideo/hero.mp4"
            className="w-full h-full object-cover opacity-70"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-4">

              {/* Service Title */}

              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight capitalize">
                <TextWithTexture
                  text="CLIFF ZENN"
                  className="text-5xl md:text-7xl mt-12 font-bold leading-tight"
                />
                <TextWithTexture
                  text="SERIES"
                  className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent"
                />
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Premium lens series combining style with advanced optical
                performance for the most discerning vision needs.
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <Link href="/Contact" className="group relative inline-block">
                  <button className="px-8 py-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full text-black font-semibold text-lg  transition-all duration-300 transform hover:scale-105">
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
                <div className="relative rounded-3xl overflow-hidden border border-white/20 h-[300px] shadow-2xl w-[28rem]">
                  <Image
                    src="/ai0.jpg"
                    alt="Cliff Zenn Series Premium Collection"
                    fill
                    className="object-cover object-center w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">11</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-[#333841] rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Zenn</div>
                    <div className="text-xs text-gray-400">Premium</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

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
                  <h2 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed">
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
                <img className="object-cover object-center w-full h-full" src="/pageimg/eye.jpeg" alt="eye" />
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
                    <svg fill="none" stroke="#FFD700" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 15c1.333 1 2.667 1 4 0s2.667-1 4 0" />
                      <path d="M9 9h.01M15 9h.01" />
                    </svg>
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
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
