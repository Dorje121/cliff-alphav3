"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Details from "@/components/Services/Details";

const CliffProgressiveVersatile = () => {
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
            src="/c6.jpeg"
            alt="Cliff Progressive Versatile"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-700/10 rounded-full blur-3xl animate-pulse"
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
                  PROGRESSIVE
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  VERSATILE
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Multi-focal progressive lenses for seamless vision at all 
                distances, providing natural and comfortable vision correction.
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
                    src="/c6.jpeg"
                    alt="Cliff Progressive Versatile Technology"
                    width={200}
                    height={300}
                    className="object-contain h-[300px] w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">07</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-700 to-indigo-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Multi</div>
                    <div className="text-xs text-gray-400">Focal</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Details />

      {/* Main Content */}
      <div className="min-h-screen bg-transparent text-white overflow-hidden">
        <div className="md:max-w-screen mx-auto">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-white">CLIFF </span>
                  <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                    PROGRESSIVE VERSATILE
                  </span>
                </div>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
                All-day Progressive Lenses Purpose - A high-quality progressive
                lens designed for all-day use. Seamlessly blends multiple focal
                points for near, intermediate, and distance vision.
              </p>
            </div>

            {/* Hero Image Section */}
            <div className="mb-12 lg:mb-20">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-3xl p-6 lg:p-12 backdrop-blur-sm border border-white/10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                      All-day Progressive Lenses Purpose
                    </h2>
                    <div className="space-y-4 text-gray-300">
                      <p className="text-base lg:text-lg">
                        A high-quality progressive lens designed for all-day
                        use.
                      </p>
                      <p className="text-base lg:text-lg">
                        Seamlessly blends multiple focal points for near,
                        intermediate, and distance vision.
                      </p>
                      <p className="text-base lg:text-lg">
                        Ideal for individuals with Presbyopia, providing a
                        smooth visual experience across all distances.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-500/20 to-gray-600/20 rounded-2xl p-8 backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-6xl mb-4">👓</div>
                          <p className="text-gray-300 text-sm">
                            Professional wearing progressive lenses for all-day
                            comfort
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Specifications Table */}
            <div className="mb-12 lg:mb-20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">
                Technical Specifications
              </h3>

              <div className="rounded-3xl p-6 lg:p-8 backdrop-blur-sm border border-white/10">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="pb-4 text-lg font-bold">
                          <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                            INDEX
                          </span>
                        </th>
                        <th className="pb-4 text-lg font-bold text-center text-white px-4 rounded-t-lg">
                          BLUE SAFE
                        </th>
                        <th className="pb-4 text-lg font-bold text-center text-white px-4">
                          PHOTO Z
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-semibold">1.5</td>
                        <td className="py-3 text-center px-4 font-bold text-yellow-400">
                          <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                            4200
                          </span>
                        </td>
                        <td className="py-3 text-center px-4 font-bold">
                          <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                            5200
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  {/* Blue Safe Column */}
                  <div className="bg-gray-900 rounded-xl p-6">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">
                        BLUE SAFE
                      </h4>
                      <div className="text-sm text-gray-400 mb-4">Distance</div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-400 mb-1">
                            POWER RANGE
                          </div>
                          <div className="font-bold text-white">
                            Plano to + 2.00 sph
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <div className="text-sm text-gray-400">Range</div>
                          <div className="font-semibold text-white">
                            -0.25 to -1.0
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <div className="text-sm text-gray-400">Add</div>
                          <div className="font-semibold">
                            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                              +1.00 to +3.0
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Photo Z Column */}
                  <div className="bg-gray/10 rounded-xl p-6">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">
                        PHOTO Z
                      </h4>
                      <div className="text-sm text-gray-400 mb-4">Distance</div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-400 mb-1">
                            POWER RANGE
                          </div>
                          <div className="font-bold text-white">
                            Plano to + 2.00
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <div className="text-sm text-gray-400">Range</div>
                          <div className="font-semibold text-white">
                            0 to -6.0
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <div className="text-sm text-gray-400">Add</div>
                          <div className="font-semibold text-yellow-400">
                            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                              +1.00 to +3.00
                            </span>
                          </div>
                        </div>
                      </div>
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
export default CliffProgressiveVersatile;
