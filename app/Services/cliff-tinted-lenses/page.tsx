"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const CliffTintedLenses = () => {
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
  const tintCategories = [
    {
      name: "Grey",
      description: "Classic neutral tint for all-day comfort",
      tints: [
        { name: "Grey 15%", color: "bg-gray-200", intensity: "15%" },
        { name: "Grey 25%", color: "bg-gray-300", intensity: "25%" },
        { name: "Grey 60%", color: "bg-gray-500", intensity: "60%" },
        { name: "Grey 75%", color: "bg-gray-700", intensity: "75%" },
        { name: "Grey 95%", color: "bg-gray-900", intensity: "95%" },
        {
          name: "Grey 25/0%",
          color: "bg-gradient-to-b from-gray-300 to-transparent",
          intensity: "25/0%",
        },
        {
          name: "Grey 75/25%",
          color: "bg-gradient-to-b from-gray-700 to-gray-300",
          intensity: "75/25%",
        },
        {
          name: "Grey 90/40%",
          color: "bg-gradient-to-b from-gray-800 to-gray-400",
          intensity: "90/40%",
        },
      ],
    },
    {
      name: "Black",
      description: "Bold and sophisticated for maximum sun protection",
      tints: [
        { name: "Black 15%", color: "bg-gray-800", intensity: "15%" },
        { name: "Black 25%", color: "bg-gray-900", intensity: "25%" },
        { name: "Black 60%", color: "bg-black", intensity: "60%" },
        { name: "Black 75%", color: "bg-black", intensity: "75%" },
        { name: "Black 95%", color: "bg-black", intensity: "95%" },
        {
          name: "Black 25/0%",
          color: "bg-gradient-to-b from-gray-900 to-transparent",
          intensity: "25/0%",
        },
        {
          name: "Black 75/25%",
          color: "bg-gradient-to-b from-black to-gray-900",
          intensity: "75/25%",
        },
        {
          name: "Black 90/40%",
          color: "bg-gradient-to-b from-black to-gray-700",
          intensity: "90/40%",
        },
      ],
    },
    {
      name: "Brown",
      description: "Warm tones that enhance contrast and reduce glare",
      tints: [
        { name: "Brown 15%", color: "bg-amber-200", intensity: "15%" },
        { name: "Brown 25%", color: "bg-amber-300", intensity: "25%" },
        { name: "Brown 60%", color: "bg-amber-700", intensity: "60%" },
        { name: "Brown 75%", color: "bg-amber-800", intensity: "75%" },
        { name: "Brown 95%", color: "bg-amber-900", intensity: "95%" },
        {
          name: "Brown 25/0%",
          color: "bg-gradient-to-b from-amber-300 to-transparent",
          intensity: "25/0%",
        },
        {
          name: "Brown 75/25%",
          color: "bg-gradient-to-b from-amber-800 to-amber-300",
          intensity: "75/25%",
        },
        {
          name: "Brown 90/40%",
          color: "bg-gradient-to-b from-amber-900 to-amber-600",
          intensity: "90/40%",
        },
      ],
    },
    {
      name: "Green",
      description: "Natural tint that provides excellent color perception",
      tints: [
        { name: "Green 15%", color: "bg-green-200", intensity: "15%" },
        { name: "Green 25%", color: "bg-green-300", intensity: "25%" },
        { name: "Green 60%", color: "bg-green-600", intensity: "60%" },
        { name: "Green 75%", color: "bg-green-700", intensity: "75%" },
        { name: "Green 95%", color: "bg-green-900", intensity: "95%" },
        {
          name: "Green 25/0%",
          color: "bg-gradient-to-b from-green-300 to-transparent",
          intensity: "25/0%",
        },
        { name: "Green 75/25%", color: "bg-green-700", intensity: "75/25%" },
        {
          name: "Green 90/40%",
          color: "bg-gradient-to-b from-green-800 to-green-500",
          intensity: "90/40%",
        },
      ],
    },
    {
      name: "Pink",
      description: "Fashionable tint with unique aesthetic appeal",
      tints: [
        { name: "Pink 15%", color: "bg-pink-200", intensity: "15%" },
        { name: "Pink 25%", color: "bg-pink-300", intensity: "25%" },
        { name: "Pink 60%", color: "bg-pink-500", intensity: "60%" },
        { name: "Pink 75%", color: "bg-pink-600", intensity: "75%" },
        { name: "Pink 95%", color: "bg-pink-800", intensity: "95%" },
      ],
    },
  ];

  return (
    <div className="min-h-screen  text-white">
      {/* Hero Section with Service Information */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div ref={backgroundImageRef} className="absolute inset-0">
          <Image
            src="/eyetest.jpg"
            alt="Cliff Tinted Lenses"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-700/10 rounded-full blur-3xl animate-pulse"
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
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Fashionable Eyewear
              </div>

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  CLIFF TINTED
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  LENSES
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Fashionable tinted lenses with UV protection and style, offering
                a perfect blend of fashion and function for every lifestyle.
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105">
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
                    src="/eyetest.jpg"
                    alt="Cliff Tinted Lenses Collection"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">16</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Style</div>
                    <div className="text-xs text-gray-400">& Protection</div>
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
                <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                  TINTED LENSES
                </span>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Protect your eyes from the sun with our premium tinted lens
              collection
            </p>
          </div>

          {/* Tint Categories */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {tintCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm"
              >
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                    {category.name} Tints
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg">
                    {category.description}
                  </p>
                </div>

                {/* Tint Options Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                  {category.tints.map((tint, tintIndex) => (
                    <div key={tintIndex} className="group">
                      <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                        {/* Tint Circle */}
                        <div className="relative mx-auto mb-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/20 overflow-hidden">
                          <div
                            className={`w-full h-full ${tint.color} opacity-80`}
                          ></div>
                          {/* Glass Effect Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                          <div className="absolute top-2 right-2 w-3 h-3 bg-white/40 rounded-full blur-sm"></div>
                        </div>

                        {/* Tint Info */}
                        <div className="text-center">
                          <div className="font-bold text-white text-sm sm:text-base mb-1">
                            {category.name} {tint.intensity}
                          </div>
                          <div className="text-gray-400 text-xs sm:text-sm">
                            {tint.intensity} Tint
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-4 sm:p-6 lg:p-8 border border-red-500/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl text-center font-bold text-red-400 mb-2">
                    ⚠️ Important Notice
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Tint is not available with Cliff Dynamic RX lenses. Please
                    consult with our specialists for alternative solutions that
                    meet your specific vision needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center text-white">
                Benefits of Tinted Lenses
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">☀️</div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    UV Protection
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Blocks harmful UV rays from the sun
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">👁️</div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Reduced Glare
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Minimizes glare for comfortable vision
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Style Options
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Multiple colors and intensity levels
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Driving Comfort
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Enhanced visibility while driving
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Combinations */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center text-white">
                Popular Gradient Combinations
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-b from-gray-700 to-transparent border-2 border-white/20"></div>
                  <h4 className="font-bold text-white mb-1">Grey 75/25%</h4>
                  <p className="text-gray-400 text-sm">
                    Perfect for driving and outdoor activities
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-b from-amber-800 to-amber-300 border-2 border-white/20"></div>
                  <h4 className="font-bold text-white mb-1">Brown 75/25%</h4>
                  <p className="text-gray-400 text-sm">
                    Enhanced contrast for outdoor sports
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-b from-gray-800 to-gray-400 border-2 border-white/20"></div>
                  <h4 className="font-bold text-white mb-1">Grey 90/40%</h4>
                  <p className="text-gray-400 text-sm">
                    Maximum protection with style
                  </p>
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

export default CliffTintedLenses;
