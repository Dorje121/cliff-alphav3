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
        <div className="max-w-[1500px] mx-auto w-full px-6 lg:px-8 py-20 relative">
          {/* Main content container */}
          {/* Header Section */}
          <div className="w-full mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Premium progressive lenses engineered for all-day comfort and seamless transition between near, intermediate, and distance vision. Expertly crafted for individuals with Presbyopia seeking uncompromised visual clarity. Our advanced lens technology ensures crystal-clear vision at all distances while maintaining a sleek, modern aesthetic.
              </p>
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-gradient-to-b from-gray-900/30 to-gray-900/10 p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">Seamless Transition</h3>
              <p className="text-gray-400 text-sm">Smooth progression between all distances without visible lines or image jumps.</p>
            </div>
            
            <div className="bg-gradient-to-b from-gray-900/30 to-gray-900/10 p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">All-Day Comfort</h3>
              <p className="text-gray-400 text-sm">Ergonomically designed to reduce eye strain and fatigue during prolonged use.</p>
            </div>
            
            <div className="bg-gradient-to-b from-gray-900/30 to-gray-900/10 p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">Wide Field of View</h3>
              <p className="text-gray-400 text-sm">Expanded visual zones for natural vision with minimal head movement.</p>
            </div>
            
            <div className="bg-gradient-to-b from-gray-900/30 to-gray-900/10 p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">Crystal Clear Vision</h3>
              <p className="text-gray-400 text-sm">Premium optics for sharp, distortion-free vision at all distances.</p>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-white">Advanced </span>
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Optical Engineering</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Our progressive lenses incorporate cutting-edge digital surfacing technology, providing precise vision correction tailored to your individual prescription and visual needs.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-yellow-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Personalized digital design for optimal visual performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-yellow-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Enhanced intermediate vision for digital device usage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-yellow-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Quick adaptation period with minimal distortion</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center w-full">
              <div className="relative w-full max-w-3xl">
                <div className="relative bg-black rounded-2xl p-6 sm:p-8">
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
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-white">Premium </span>
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Lens Features</span>
            </h2>
            
            <div className="w-full max-w-[90rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
              {/* Blue Filter */}
              <div className="text-center bg-gradient-to-b from-gray-900/50 to-gray-900/10 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300">
                <img src="/svgs/bluelight.svg" alt="Blue Filter" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">Blue Filter</h3>
                <p className="text-sm text-gray-300">Reduces blue light exposure</p>
              </div>

              {/* UV Protection */}
              <div className="text-center bg-gradient-to-b from-gray-900/50 to-gray-900/10 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300">
                <img src="/svgs/uvprotection.svg" alt="UV Protection" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">UV Protection</h3>
                <p className="text-sm text-gray-300">Blocks harmful UV rays</p>
              </div>

              {/* Anti Glare Coating */}
              <div className="text-center bg-gradient-to-b from-gray-900/50 to-gray-900/10 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300">
                <img src="/svgs/antireflective.svg" alt="Anti Glare Coating" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">Anti Glare Coating</h3>
                <p className="text-sm text-gray-300">Reduces reflections</p>
              </div>

              {/* Spin Coating */}
              <div className="text-center bg-gradient-to-b from-gray-900/50 to-gray-900/10 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300">
                <img src="/svgs/scratchresistance.svg" alt="Spin Coating" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">Spin Coating</h3>
                <p className="text-sm text-gray-300">Even and durable application</p>
              </div>

              {/* Photochromatic */}
              <div className="text-center bg-gradient-to-b from-gray-900/50 to-gray-900/10 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300">
                <img src="/svgs/photochromatic.svg" alt="Photochromatic" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">Photochromatic</h3>
                <p className="text-sm text-gray-300">Adapts to light conditions</p>
              </div>

              {/* Scratch Resistance */}
              <div className="text-center bg-gradient-to-b from-gray-900/50 to-gray-900/10 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300">
                <img src="/svgs/scratchresistance.svg" alt="Scratch Resistance" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">Scratch Resistance</h3>
                <p className="text-sm text-gray-300">Durable and long-lasting</p>
              </div>

              {/* Low Reflection */}
              <div className="text-center bg-gradient-to-b from-gray-900/50 to-gray-900/10 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300">
                <img src="/svgs/antireflective.svg" alt="Low Reflection" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">Low Reflection</h3>
                <p className="text-sm text-gray-300">Minimizes light bounce</p>
              </div>

              {/* Super Hydrophobic Coating */}
              <div className="text-center bg-gradient-to-b from-gray-900/50 to-gray-900/10 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300">
                <img src="/svgs/spincoat.svg" alt="Super Hydrophobic Coating" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">Super Hydrophobic</h3>
                <p className="text-sm text-gray-300">Repels water and oil</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-black p-8 md:p-12  mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              Technical <span className="text-yellow-400">Specifications</span>
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-gray-800 mb-12">
              <table className="w-full text-left">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="py-5 px-6 font-semibold text-gray-300">INDEX</th>
                    <th className="py-5 px-6 font-semibold text-gray-300 text-center">BLUE SAFE</th>
                    <th className="py-5 px-6 font-semibold text-gray-300 text-center">PHOTO Z</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-800">
                    <td className="py-5 px-6 font-medium">1.5</td>
                    <td className="py-5 px-6 font-bold text-yellow-400 text-center">4200</td>
                    <td className="py-5 px-6 font-bold text-yellow-400 text-center">5200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Comparison Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Blue Safe */}
              <div className="bg-gradient-to-b from-gray-900/60 to-gray-900/30 rounded-2xl p-8 border border-gray-800 hover:border-yellow-500/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold mb-2">BLUE SAFE</h4>
                  <div className="inline-block bg-yellow-500/10 text-yellow-400 text-sm font-medium px-3 py-1 rounded-full">
                    Power Range: Plano to +2.00 sph
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700/50">
                    <p className="text-sm text-gray-400 mb-2">Range</p>
                    <p className="font-semibold">-0.25 to -1.0</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700/50">
                    <p className="text-sm text-gray-400 mb-2">Add</p>
                    <p className="font-semibold text-yellow-400">+1.00 to +3.0</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h5 className="font-semibold text-gray-300 mb-3">Key Benefits:</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      Advanced blue light filtration technology
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      Reduced digital eye strain
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      Enhanced contrast and visual clarity
                    </li>
                  </ul>
                </div>
              </div>

              {/* Photo Z */}
              <div className="bg-gradient-to-b from-gray-900/60 to-gray-900/30 rounded-2xl p-8 border border-gray-800 hover:border-yellow-500/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold mb-2">PHOTO Z</h4>
                  <div className="inline-block bg-yellow-500/10 text-yellow-400 text-sm font-medium px-3 py-1 rounded-full">
                    Power Range: Plano to +2.00 sph
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700/50">
                    <p className="text-sm text-gray-400 mb-2">Range</p>
                    <p className="font-semibold">0 to -6.0</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700/50">
                    <p className="text-sm text-gray-400 mb-2">Add</p>
                    <p className="font-semibold text-yellow-400">+1.00 to +3.00</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h5 className="font-semibold text-gray-300 mb-3">Key Benefits:</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      Photochromic technology for adaptive tint
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      Seamless indoor-outdoor transition
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      100% UV protection in all conditions
                    </li>
                  </ul>
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