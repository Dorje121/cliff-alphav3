"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

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
  const singleVisionSpecs = [
    {
      index: "1.50",
      powerRange: "(+6/-5)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "4480",
      nox: "6400",
      bluesafe: "7870",
    },
    {
      index: "1.6",
      powerRange: "(+6/-10.0)",
      cyl: "6",
      diameter: "(75/60)",
      hc: "7690",
      nox: "9605",
      bluesafe: "10890",
    },
    {
      index: "1.67",
      powerRange: "(+6/-10.0)",
      cyl: "6",
      diameter: "(75/60)",
      hc: "16655",
      nox: "18570",
      bluesafe: "20415",
    },
    {
      index: "1.74",
      powerRange: "(+6/-20.0)",
      cyl: "6",
      diameter: "(75/60)",
      hc: "33945",
      nox: "35860",
      bluesafe: "38715",
    },
    {
      index: "1.56",
      powerRange: "(+6/-8.0)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "8325",
      nox: "10240",
      bluesafe: "11570",
    },
    {
      index: "1.6",
      powerRange: "(+6/-8.0)",
      cyl: "6",
      diameter: "(75/60)",
      hc: "17290",
      nox: "19215",
      bluesafe: "21100",
    },
    {
      index: "1.74",
      powerRange: "(+6/-18.0)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "112070",
      nox: "113995",
      bluesafe: "121790",
    },
    {
      index: "1.5",
      powerRange: "(+6/-8.0)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "17290",
      nox: "19215",
      bluesafe: "21100",
    },
    {
      index: "1.6",
      powerRange: "(+6/-12)",
      cyl: "6",
      diameter: "(75/60)",
      hc: "28820",
      nox: "30735",
      bluesafe: "33340",
    },
    {
      index: "1.67",
      powerRange: "(+6/-12)",
      cyl: "6",
      diameter: "(75/60)",
      hc: "35220",
      nox: "37145",
      bluesafe: "40150",
    },
    {
      index: "1.5",
      powerRange: "(+6/-6)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "10240",
      nox: "12165",
      bluesafe: "13605",
    },
    {
      index: "1.6",
      powerRange: "(+6/-12)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "34585",
      nox: "36500",
      bluesafe: "39470",
    },
    {
      index: "1.67",
      powerRange: "(+6/-12)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "42260",
      nox: "44185",
      bluesafe: "47630",
    },
  ];

  const progressiveSpecs = [
    {
      index: "1.50",
      powerRange: "(+6/-6)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "8325",
      nox: "10240",
      bluesafe: "11570",
    },
    {
      index: "1.6",
      powerRange: "(+6/-10.0)",
      cyl: "6",
      diameter: "(75/60)",
      hc: "15365",
      nox: "17290",
      bluesafe: "19050",
    },
    {
      index: "1.67",
      powerRange: "(+6/-10.0)",
      cyl: "6",
      diameter: "(75/60)",
      hc: "21770",
      nox: "23695",
      bluesafe: "25860",
    },
    {
      index: "1.5",
      powerRange: "(+6/-10.0)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "12165",
      nox: "14090",
      bluesafe: "15555",
    },
    {
      index: "1.56",
      powerRange: "(+6/-8.0)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "12165",
      nox: "14090",
      bluesafe: "15655",
    },
    {
      index: "1.6",
      powerRange: "(+6/-8.0)",
      cyl: "6",
      diameter: "(75/60)",
      hc: "21130",
      nox: "23055",
      bluesafe: "25180",
    },
    {
      index: "1.5",
      powerRange: "(+6/-8.0)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "24970",
      nox: "26895",
      bluesafe: "29260",
    },
    {
      index: "1.60",
      powerRange: "(+6/-12)",
      cyl: "6",
      diameter: "(75/60)",
      hc: "32660",
      nox: "34585",
      bluesafe: "37420",
    },
    {
      index: "1.67",
      powerRange: "(+6/-12)",
      cyl: "6",
      diameter: "(75/60)",
      hc: "40985",
      nox: "42910",
      bluesafe: "46265",
    },
    {
      index: "1.5",
      powerRange: "(+8/-8.0)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "18215",
      nox: "21130",
      bluesafe: "23133",
    },
    {
      index: "1.6",
      powerRange: "(-12/+8.0)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "40350",
      nox: "42260",
      bluesafe: "45584",
    },
    {
      index: "1.67",
      powerRange: "(-12/+8.0)",
      cyl: "4",
      diameter: "(75/60)",
      hc: "56075",
      nox: "56930",
      bluesafe: "61235",
    },
  ];

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
              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent whitespace-nowrap">
                  ZENN SINGLE
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  VISION
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Enhanced single vision experience with Zenn technology, 
                delivering premium optical performance with superior clarity and comfort.
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
              <div className="relative flex justify-center lg:justify-end lg:ml-2">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl w-[28rem]">
                  <Image
                    src="/ai3.jpg"
                    alt="Cliff Zenn Single Vision Technology"
                    width={200}
                    height={300}
                    className="object-contain h-[300px] w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">14</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-700 to-yellow-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
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

      <div className="max-w-screen mx-auto">
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
                <span
                  className="Premium Single Vision
 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent"
                >
                  ZENN SINGLE VISION
                </span>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Premium single vision and progressive lenses with advanced optical
              technology for crystal clear vision
            </p>
          </div>

          {/* Single Vision Lenses Section */}
          <div className="mb-12 lg:mb-20">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm mb-8">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 
 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent text-center"
              >
                CLIFF ZENN SINGLE VISION
              </h2>

              {/* Mobile Responsive Table */}
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  {/* Desktop Table Header */}
                  <div className="hidden md:grid grid-cols-7 gap-4 bg-gray-800/50 rounded-lg p-4 mb-4 text-sm font-bold">
                    <div className="text-center">PARTICULARS</div>
                    <div className="text-center">INDEX</div>
                    <div className="text-center">POWER RANGE</div>
                    <div className="text-center">CYL</div>
                    <div className="text-center">DIAMETER</div>
                    <div className="text-center">HC</div>
                    <div className="text-center">NOX</div>
                    <div className="text-center">BLUESAFE</div>
                  </div>

                  {/* Table Rows */}
                  {singleVisionSpecs.map((spec, index) => (
                    <div key={index} className="mb-4 md:mb-2">
                      {/* Mobile Layout */}
                      <div className="block md:hidden bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-400">Index:</span>{" "}
                            {spec.index}
                          </div>
                          <div>
                            <span className="text-gray-400">Power:</span>{" "}
                            {spec.powerRange}
                          </div>
                          <div>
                            <span className="text-gray-400">CYL:</span>{" "}
                            {spec.cyl}
                          </div>
                          <div>
                            <span className="text-gray-400">Diameter:</span>{" "}
                            {spec.diameter}
                          </div>
                          <div>
                            <span className="text-gray-400">HC:</span> {spec.hc}
                          </div>
                          <div>
                            <span className="text-gray-400">NOX:</span>{" "}
                            {spec.nox}
                          </div>
                          <div className="col-span-2">
                            <span className="text-gray-400">BlueSafe:</span>{" "}
                            {spec.bluesafe}
                          </div>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:grid grid-cols-7 gap-4 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                        <div className="text-center text-sm">
                          {index < 4
                            ? "Clear"
                            : index < 7
                            ? "Photocrom"
                            : index < 9
                            ? "Photo-Z"
                            : "Polarized"}
                        </div>
                        <div className="text-center text-sm font-mono">
                          {spec.index}
                        </div>
                        <div className="text-center text-sm font-mono">
                          {spec.powerRange}
                        </div>
                        <div className="text-center text-sm">{spec.cyl}</div>
                        <div className="text-center text-sm font-mono">
                          {spec.diameter}
                        </div>
                        <div className="text-center text-sm font-mono">
                          {spec.hc}
                        </div>
                        <div className="text-center text-sm font-mono">
                          {spec.nox}
                        </div>
                        <div className="text-center text-sm font-mono">
                          {spec.bluesafe}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Progressive Lenses Section */}
          <div className="mb-12 lg:mb-20">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent text-center">
                CLIFF ZENN PROGRESSIVE LENSES
              </h2>

              {/* Mobile Responsive Table */}
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  {/* Desktop Table Header */}
                  <div className="hidden md:grid grid-cols-7 gap-4 bg-gray-800/50 rounded-lg p-4 mb-4 text-sm font-bold">
                    <div className="text-center">PARTICULARS</div>
                    <div className="text-center">INDEX</div>
                    <div className="text-center">POWER RANGE</div>
                    <div className="text-center">CYL</div>
                    <div className="text-center">DIAMETER</div>
                    <div className="text-center">HC</div>
                    <div className="text-center">NOX</div>
                    <div className="text-center">BLUESAFE</div>
                  </div>

                  {/* Table Rows */}
                  {progressiveSpecs.map((spec, index) => (
                    <div key={index} className="mb-4 md:mb-2">
                      {/* Mobile Layout */}
                      <div className="block md:hidden bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-400">Index:</span>{" "}
                            {spec.index}
                          </div>
                          <div>
                            <span className="text-gray-400">Power:</span>{" "}
                            {spec.powerRange}
                          </div>
                          <div>
                            <span className="text-gray-400">CYL:</span>{" "}
                            {spec.cyl}
                          </div>
                          <div>
                            <span className="text-gray-400">Diameter:</span>{" "}
                            {spec.diameter}
                          </div>
                          <div>
                            <span className="text-gray-400">HC:</span> {spec.hc}
                          </div>
                          <div>
                            <span className="text-gray-400">NOX:</span>{" "}
                            {spec.nox}
                          </div>
                          <div className="col-span-2">
                            <span className="text-gray-400">BlueSafe:</span>{" "}
                            {spec.bluesafe}
                          </div>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:grid grid-cols-7 gap-4 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                        <div className="text-center text-sm">
                          {index < 4
                            ? "Clear"
                            : index < 6
                            ? "Photocrom"
                            : index < 9
                            ? "Photo-Z"
                            : "Polarized"}
                        </div>
                        <div className="text-center text-sm font-mono">
                          {spec.index}
                        </div>
                        <div className="text-center text-sm font-mono">
                          {spec.powerRange}
                        </div>
                        <div className="text-center text-sm">{spec.cyl}</div>
                        <div className="text-center text-sm font-mono">
                          {spec.diameter}
                        </div>
                        <div className="text-center text-sm font-mono">
                          {spec.hc}
                        </div>
                        <div className="text-center text-sm font-mono">
                          {spec.nox}
                        </div>
                        <div className="text-center text-sm font-mono">
                          {spec.bluesafe}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToServicesButton />
    </div>
  );
};

export default CliffZennSingleVision;
