"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Table from './table'
import TextWithTexture from "@/components/textwithgoldentexture";
import Link from "next/link";
import AdditionalChargePage from "./aditional";
const CliffZennSingleVision = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);



  return (
    <div className="min-h-screen  text-white">
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
                  text="SINGLE VISION"
                  className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent"
                />
              </h1>


              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                The most versatile design for Single Vision Lenses with 76% more
                stability and better vision in all gaze directions.
              </p>


              {/* CTA Button */}
              <div className="pt-8">
                <Link href="/Contact" className="group relative inline-block">
                  <button className="px-8 py-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full text-black font-semibold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105">
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
                    alt="Cliff Zenn Single Vision Collection"
                    fill
                    className="object-cover object-center w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">14</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Zenn</div>
                    <div className="text-xs text-gray-400">single vision</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Table />
      {/* <AdditionalChargePage /> */}

      <BackToServicesButton />
    </div>
  );
};

export default CliffZennSingleVision;
