"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const CliffZennProgressiveLenses = () => {
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
      <div className="h-[80vh] to-black text-white relative overflow-hidden">
        <div ref={backgroundImageRef} className="absolute inset-0 h-full">
          <img
            src="/ai2.jpg"
            alt="Cliff Zenn Progressive Lenses"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-violet-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-4">

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent whitespace-nowrap">
                  ZENN PROGRESSIVE
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  LENSES
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Progressive lenses featuring Zenn series advanced technology,
                delivering premium multi-focal vision with superior comfort and style.
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full text-black font-semibold text-lg  transition-all duration-300 transform hover:scale-105">
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
              </div>
            </div>

            {/* Right Content - Enhanced Visual */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/ai2.jpg"
                    alt="Cliff Zenn Progressive Technology"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">13</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Zenn</div>
                    <div className="text-xs text-gray-400">Progressive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen  text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="text-6xl font-bold bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                CLIFF
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
              ZENN PROGRESSIVE LENSES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Progressive lenses featuring Zenn series advanced technology
            </p>
          </div>

          {/* Service Details */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/20">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent mb-6">
                    Zenn Progressive Technology
                  </h2>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-3">•</span>
                      Ultra-wide viewing zones
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-3">•</span>
                      Seamless power transitions
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-3">•</span>
                      Minimal peripheral distortion
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-3">•</span>
                      Premium comfort design
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-3">•</span>
                      Advanced digital surfacing
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/20">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent mb-6">
                    Premium Performance
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex justify-between">
                      <span>Design Type:</span>
                      <span className="text-white">Zenn Free-form</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Adaptation Rate:</span>
                      <span className="text-white">98% Success</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vision Quality:</span>
                      <span className="text-white">Ultra-Premium</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Comfort Rating:</span>
                      <span className="text-white">Maximum</span>
                    </div>
                  </div>
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

export default CliffZennProgressiveLenses;
