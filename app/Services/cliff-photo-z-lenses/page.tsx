"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Details from "@/components/Services/Details";
import TextWithTexture from "@/components/textwithgoldentexture";

const CliffPhotoZLenses = () => {
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

        {/* Main Content */}
        <div className="relative z-10 container max-w-[1500px] mx-auto p-4 h-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
      
            <div className="lg:w-1/2 space-y-4">

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight">
                <TextWithTexture
                  text="Cliff Photo-Z"
                  className="text-5xl md:text-7xl mt-12 font-bold leading-tight capitalize"
                />
                <TextWithTexture
                  text="UV Lenses"
                  className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent"
                />
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Photochromic lenses that adapt to changing light conditions 
                automatically, providing seamless comfort from indoor to outdoor 
                environments.
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
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl w-[28rem]">
                  <Image
                    src="/c4.jpeg"
                    alt="Cliff Photo-Z UV Technology"
                    width={200}
                    height={300}
                    className="object-contain h-[300px] w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">05</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">4800</div>
                    <div className="text-xs text-gray-400">MRP</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Details />



      
      <div className="max-w-[1500px] mx-auto p-4">

        <div className="mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-xl font-bold">
                      INDEX
                    </th>
                    <th className="px-6 py-4 text-center text-xl font-bold bg-gray-700 text-white">
                      <div className="space-y-1">
                        <div>POWER RANGE</div>
                        <div className="flex justify-center gap-4">
                          <span>SPH</span>
                          <span>CYL</span>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-xl font-bold">
                      MRP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 last:border-b-0">
                    <td className="px-6 py-4 text-xl font-semibold">1.56</td>
                    <td className="px-6 py-4 text-center bg-gray-700/50">
                      <div className="flex justify-center gap-8">
                        <span>0.00 to -6.00</span>
                        <span>0.00 to -2.00</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-xl font-bold">
                      4800
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-gray-400">
          <p className="text-sm">
            All listed powers are resultant; cross-compound is not available.
          </p>
        </div>

        <BackToServicesButton />
      </div>
    </>
  );
};

export default CliffPhotoZLenses;
