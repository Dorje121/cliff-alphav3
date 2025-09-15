"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const CliffZennSingleVision = () => {
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
            src="/ai0.jpg"
            alt="Cliff Zenn Single Vision Lenses"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 opacity-90">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 b g-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
          ></div>
        </div> */}

        {/* Main Content */}
        <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-4">
              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent whitespace-nowrap">
                  CLIFF ZENN
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  SINGLE VISION
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                The most versatile design for Single Vision Lenses with 76% more
                stability and better vision in all gaze directions.
              </p>

              {/* Key Features */}
              {/* <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-yellow-100">
                    76% more stable than conventional lens in higher
                    prescription
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-yellow-100">
                    Better vision in all gaze directions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-yellow-100">
                    Optimized oblique errors for superior optics
                  </span>
                </div>
              </div> */}

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
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl w-[28rem]">
                  <Image
                    src="/ai0.jpg"
                    alt="Cliff Zenn Single Vision Collection"
                    width={200}
                    height={300}
                    className="object-contain h-[300px] w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">13</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Zenn</div>
                    <div className="text-xs text-gray-400">Single Vision</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Analysis Section */}
      <div className="min-h-screen  text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="px-6 py-20">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Performance Analysis
                </span>
              </h2>
              <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
                Advanced optical engineering delivering superior visual
                performance
              </p>
            </div>

            {/* Chart and Technology Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Left Side - Chart Representation */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Oblique Errors in an Ophthalmic Lens
                  </h3>

                  {/* Chart Visual */}
                  <div className="relative h-64 bg-gray-800/30 rounded-xl p-6 mb-6">
                    <div className="flex items-end justify-between h-full">
                      {/* Simulated Chart Bars */}
                      <div className="flex items-end space-x-2 w-full">
                        <div className="bg-gradient-to-t from-yellow-500 to-yellow-300 w-8 h-12 rounded-t"></div>
                        <div className="bg-gradient-to-t from-yellow-500 to-yellow-300 w-8 h-16 rounded-t"></div>
                        <div className="bg-gradient-to-t from-yellow-500 to-yellow-300 w-8 h-20 rounded-t"></div>
                        <div className="bg-gradient-to-t from-yellow-500 to-yellow-300 w-8 h-24 rounded-t"></div>
                        <div className="bg-gradient-to-t from-yellow-500 to-yellow-300 w-8 h-28 rounded-t"></div>
                        <div className="bg-gradient-to-t from-yellow-500 to-yellow-300 w-8 h-32 rounded-t"></div>

                        <div className="bg-gradient-to-t from-gray-400 to-gray-200 w-8 h-8 rounded-t ml-4"></div>
                        <div className="bg-gradient-to-t from-gray-400 to-gray-200 w-8 h-8 rounded-t"></div>
                        <div className="bg-gradient-to-t from-gray-400 to-gray-200 w-8 h-8 rounded-t"></div>
                        <div className="bg-gradient-to-t from-gray-400 to-gray-200 w-8 h-8 rounded-t"></div>
                        <div className="bg-gradient-to-t from-gray-400 to-gray-200 w-8 h-8 rounded-t"></div>
                        <div className="bg-gradient-to-t from-gray-400 to-gray-200 w-8 h-8 rounded-t"></div>
                      </div>
                    </div>

                    {/* Chart Labels */}
                    <div className="mt-4 flex justify-between text-xs text-gray-400">
                      <span>0</span>
                      <span>6</span>
                      <span>12</span>
                      <span>Distance to optical center (mm)</span>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex justify-center space-x-6">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded mr-2"></div>
                      <span className="text-sm text-yellow-100">
                        CLIFF ZENN SV LENS
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
                      <span className="text-sm text-gray-300">
                        Standard SV lens
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mt-6 text-center">
                    The graph shows oblique errors at -6.00 D higher
                    prescription. The horizontal axis represents distance from
                    the lens center while vertical axis represents diopter
                    errors in higher prescription.
                  </p>
                </div>
              </div>

              {/* Right Side - Technology & Benefits */}
              <div className="space-y-8">
                {/* Technology Section */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    TECHNOLOGY
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Optically stable
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Free-Form Digital Real™ assures Single Vision lens is
                          produced utilizing state-of-the-art freeform
                          technology for optimal performance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    BENEFITS
                  </h3>
                  <div className="space-y-4">
                    {[
                      "DYNAMIC OPTICS",
                      "THINNER AND LIGHTER LENS",
                      "PRECISE POINT BY POINT CALCULATION",
                      "BETTER AESTHETICS",
                      "DIGITAL RELIEF",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-gray-300 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Lens Comparison Section */}
            <div className="text-center mb-20">
              <h3 className="text-3xl font-bold mb-12">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Visual Comparison
                </span>
              </h3>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Standard Lens */}
                <div className="relative group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-gray-600/30 to-gray-700/30 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">👓</div>
                        <p className="text-gray-300 text-sm">
                          Standard Lens View
                        </p>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Standard Lens
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Conventional single vision lens with basic optical
                      performance
                    </p>
                  </div>
                </div>

                {/* CLIFF ZENN SV LENSES */}
                <div className="relative group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-yellow-600/30 to-yellow-700/30 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">👁️</div>
                        <p className="text-yellow-300 text-sm">
                          Enhanced Clarity
                        </p>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      CLIFF ZENN SV LENSES
                    </h4>
                    <p className="text-yellow-100 text-sm">
                      Advanced freeform technology delivering superior optical
                      performance
                    </p>
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

export default CliffZennSingleVision;
