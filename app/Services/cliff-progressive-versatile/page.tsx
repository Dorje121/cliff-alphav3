"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import TextWithTexture from "@/components/textwithgoldentexture";

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
                <TextWithTexture
                  text="Progressive"
                  className="text-5xl md:text-7xl mt-12 font-bold leading-tight capitalize"
                />
                <TextWithTexture
                  text="Versatile"
                  className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent"
                />
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
                <div className="relative rounded-3xl overflow-hidden shadow-2xl w-[28rem]">
                  <Image
                    src="/imAGES/progressive.png"
                    alt="Cliff Progressive Versatile Technology"
                    width={200}
                    height={300}
                    className="object-cover h-[300px] w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">07</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 backdrop-blur-lg bg-white/20 rounded-2xl flex items-center justify-center shadow-lg ">
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-[#DFC65F] drop-shadow-lg">5200</div>
                    <div className="text-xs text-gray-200 mt-1 tracking-wider">MRP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
 

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