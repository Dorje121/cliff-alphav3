"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";

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
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div ref={backgroundImageRef} className="absolute inset-0">
          <Image
            src="/ai0.jpg"
            alt="Cliff Zenn Series"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-gold-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container max-w-screen mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 min-h-screen">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              {/* Service Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-400/20 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent text-lg font-medium border border-yellow-400/30">
                Premium Lens Collection
              </div>

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  CLIFF ZENN
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  SERIES
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Premium lens series combining style with advanced optical
                performance for the most discerning vision needs.
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <Link href="/Contact" className="group relative inline-block">
                  <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105">
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
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/ai0.jpg"
                    alt="Cliff Zenn Series Premium Collection"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">11</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
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
        <div className="max-w-screen mx-auto">
          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-6 py-20">
            {/* Hero Section with Statistics */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Side - Statistics */}
              <div className="space-y-8">
                <div className="p-6 inline-block">
                  <div className="text-white text-xl font-medium mb-2">
                    We spend on average
                  </div>
                  <div className="text-6xl font-bold text-white">+8h</div>
                  <div className="text-white text-lg">
                    each day in front of digital display
                  </div>
                </div>

                <div className="p-6 inline-block">
                  <div className="text-white text-xl font-medium mb-2">
                    We use on average
                  </div>
                  <div className="text-6xl font-bold text-white">+3</div>
                  <div className="text-white text-lg">
                    different electric devices per day
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">
                    In today&apos;s connected world, people expect more than
                    vision correction
                  </h2>
                  <p className="text-gray-300 text-lg">
                    <span className="italic">
                      - They want clarity, comfort,
                    </span>
                    <br />
                    <span className="italic">and adaptability.</span>
                  </p>
                </div>
              </div>

              {/* Right Side - Hero Image */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💼</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                      Connected Professional
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  Benefits of CLIFF ZENN SERIES LENS
                </span>
              </h2>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Clarity */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl mb-4">👁️</div>
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
                  <div className="text-5xl mb-4">😊</div>
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
                  <div className="text-5xl mb-4">📱</div>
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
                  <div className="text-5xl mb-4">🎯</div>
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
                  <div className="text-5xl mb-4">👤</div>
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
                  <div className="text-5xl mb-4">🛡️</div>
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
