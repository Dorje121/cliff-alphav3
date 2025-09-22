"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import HeroSection from "@/components/Services/heropage";

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

      <HeroSection
        title="Cliff Progressive"
        subtitle="Versatile"
        description="Multi-focal progressive lenses for seamless vision at all distances, providing natural and comfortable vision correction."
        backgroundImage="/imAGES/progressive.png"
        rightImage="/imAGES/progressive.png"
        serviceNumber="07"
        badgeTitle="5200"
        badgeSubtitle="MRP"
      />

      {/* Main Content Section - Enhanced Professional Design */}
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        <div className="max-w-[1500px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">

          {/* Intro Paragraph */}
          <div className="w-full mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                Premium progressive lenses engineered for all-day comfort and seamless transition between near, intermediate, and distance vision. Expertly crafted for individuals with Presbyopia seeking uncompromised visual clarity. Our advanced lens technology ensures crystal-clear vision at all distances while maintaining a sleek, modern aesthetic.
              </p>
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {["Seamless Transition", "All-Day Comfort", "Wide Field of View", "Crystal Clear Vision"].map((title, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-gray-900/30 to-gray-900/10 p-5 sm:p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-base md:text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm sm:text-sm md:text-sm text-zinc-400">
                  {/* Use descriptions dynamically */}
                  {[
                    "Smooth progression between all distances without visible lines or image jumps.",
                    "Ergonomically designed to reduce eye strain and fatigue during prolonged use.",
                    "Expanded visual zones for natural vision with minimal head movement.",
                    "Premium optics for sharp, distortion-free vision at all distances."
                  ][i]}
                </p>
              </div>
            ))}
          </div>

          {/* Product Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="text-white">Advanced </span>
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  Optical Engineering
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
                Our progressive lenses incorporate cutting-edge digital surfacing technology, providing precise vision correction tailored to your individual prescription and visual needs.
              </p>
              <ul className="space-y-3 text-sm sm:text-base">
                {[
                  "Personalized digital design for optimal visual performance",
                  "Enhanced intermediate vision for digital device usage",
                  "Quick adaptation period with minimal distortion"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="flex-shrink-0 mt-1 mr-2 text-yellow-500">•</span>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center w-full">
              <div className="relative w-full max-w-xl sm:max-w-2xl">
                <div className="relative bg-black rounded-2xl p-4 sm:p-6">
                  <Image
                    src="/imAGES/progreessive1.jpeg"
                    alt="Cliff Progressive Versatile Lenses"
                    width={800}
                    height={560}
                    className="rounded-xl object-contain w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Features Grid */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              <span className="text-white">Premium </span>
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Lens Features
              </span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-8">
              {/* Map features dynamically */}
              {[
                { icon: "/svgs/bluelight.svg", title: "Blue Filter", desc: "Reduces blue light exposure" },
                { icon: "/svgs/uvprotection.svg", title: "UV Protection", desc: "Blocks harmful UV rays" },
                { icon: "/svgs/antireflective.svg", title: "Anti Glare Coating", desc: "Reduces reflections" },
                { icon: "/svgs/scratchresistance.svg", title: "Spin Coating", desc: "Even and durable application" },
                { icon: "/svgs/photochromatic.svg", title: "Photochromatic", desc: "Adapts to light conditions" },
                { icon: "/svgs/scratchresistance.svg", title: "Scratch Resistance", desc: "Durable and long-lasting" },
                { icon: "/svgs/antireflective.svg", title: "Low Reflection", desc: "Minimizes light bounce" },
                { icon: "/svgs/spincoat.svg", title: "Super Hydrophobic", desc: "Repels water and oil" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="text-center bg-gradient-to-b from-gray-900/50 to-gray-900/10 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300"
                >
                  <img src={feature.icon} alt={feature.title} className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-bold text-sm sm:text-lg text-white mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-black p-4 sm:p-8 md:p-12 mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Technical <span className="text-yellow-400">Specifications</span>
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-gray-800 mb-8">
              <table className="w-full text-left text-sm sm:text-base">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="py-3 px-4 font-semibold text-zinc-300">INDEX</th>
                    <th className="py-3 px-4 font-semibold text-zinc-300 text-center">BLUE SAFE</th>
                    <th className="py-3 px-4 font-semibold text-zinc-300 text-center">PHOTO Z</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-800">
                    <td className="py-3 px-4 font-medium">1.5</td>
                    <td className="py-3 px-4 font-bold text-yellow-400 text-center">4200</td>
                    <td className="py-3 px-4 font-bold text-yellow-400 text-center">5200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Map Blue Safe & Photo Z */}
              {[
                {
                  name: "BLUE SAFE",
                  powerRange: "Plano to +2.00 sph",
                  range: "-0.25 to -1.0",
                  add: "+1.00 to +3.0",
                  benefits: [
                    "Advanced blue light filtration technology",
                    "Reduced digital eye strain",
                    "Enhanced contrast and visual clarity",
                  ],
                },
                {
                  name: "PHOTO Z",
                  powerRange: "Plano to +2.00 sph",
                  range: "0 to -6.0",
                  add: "+1.00 to +3.00",
                  benefits: [
                    "Photochromic technology for adaptive tint",
                    "Seamless indoor-outdoor transition",
                    "100% UV protection in all conditions",
                  ],
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-b from-gray-900/60 to-gray-900/30 rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-yellow-500/40 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h4 className="text-xl sm:text-2xl font-bold mb-2">{item.name}</h4>
                    <div className="inline-block bg-yellow-500/10 text-yellow-400 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                      Power Range: {item.powerRange}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4 text-center border border-gray-700/50">
                      <p className="text-xs sm:text-sm text-zinc-400 mb-1">Range</p>
                      <p className="font-semibold">{item.range}</p>
                    </div>
                    <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4 text-center border border-gray-700/50">
                      <p className="text-xs sm:text-sm text-zinc-400 mb-1">Add</p>
                      <p className="font-semibold text-yellow-400">{item.add}</p>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
                    <h5 className="font-semibold text-zinc-300 mb-2 sm:mb-3">Key Benefits:</h5>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-zinc-400">
                      {item.benefits.map((b, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



      <BackToServicesButton />
    </>
  );
};

export default CliffProgressiveVersatile;