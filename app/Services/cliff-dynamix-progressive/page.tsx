"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const CliffDynamixProgressive = () => {
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
  // Lens specifications data from the provided chart
  const lensSpecs = [
    {
      type: "Clear",
      index: "1.50",
      powerRange: "(+6/-6)",
      cyl: "Upto 4",
      hc: "4125",
      nox: "5435",
      bluesafe: "6040",
    },
    {
      type: "",
      index: "1.56",
      powerRange: "(+6/-10)",
      cyl: "Upto 4",
      hc: "5225",
      nox: "7415",
      bluesafe: "8240",
    },
    {
      type: "",
      index: "1.60",
      powerRange: "(+6/-12)",
      cyl: "Upto 4",
      hc: "8515",
      nox: "10625",
      bluesafe: "11815",
    },
    {
      type: "",
      index: "1.67",
      powerRange: "(+6/-15)",
      cyl: "Upto 4",
      hc: "17030",
      nox: "18050",
      bluesafe: "20055",
    },
    {
      type: "Photocrom",
      index: "1.56",
      powerRange: "(+6/-15)",
      cyl: "Upto 4",
      hc: "5765",
      nox: "7170",
      bluesafe: "7965",
    },
    {
      type: "Photocrom Plus",
      index: "1.56",
      powerRange: "(+6/-15)",
      cyl: "Upto 4",
      hc: "7140",
      nox: "8405",
      bluesafe: "9340",
    },
    {
      type: "Photocrom with Blue Shield",
      index: "1.56",
      powerRange: "(+6/-8)",
      cyl: "Upto 4",
      hc: "9340",
      nox: "11375",
      bluesafe: "12640",
    },
    {
      type: "Blue Shield",
      index: "1.56",
      powerRange: "(+6/-15)",
      cyl: "Upto 4",
      hc: "5490",
      nox: "6675",
      bluesafe: "7415",
    },
    {
      type: "",
      index: "1.60",
      powerRange: "(+6/-12)",
      cyl: "Upto 4",
      hc: "10440",
      nox: "12365",
      bluesafe: "13740",
    },
    {
      type: "Polarized",
      index: "1.50",
      powerRange: "(+6/-8.00)",
      cyl: "Upto 4",
      hc: "10990",
      nox: "11615",
      bluesafe: "12915",
    },
  ];

  const features = [
    "Scratch Resistance",
    "Low Reflection",
    "Super Hydrophobic Coating",
    "Blue Filter",
    "UV Protection",
    "Anti Glare Coating",
    "Photochromic",
  ];

  const technology = [
    "Balanced Process Design",
    "Continuum Design Technology (6K Definition)",
    "Wear Fit Customization",
    "AdaptEase Technology",
  ];

  const benefits = [
    "Superior Vision at all distance",
    "Ultra Clarity",
    "Optimized Fit",
    "Easy of Adaptation",
  ];

  return (
    <>
      {/* Hero Section with Service Information */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div ref={backgroundImageRef} className="absolute inset-0">
          <Image
            src="/c9.jpeg"
            alt="Cliff Dynamix Progressive"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-violet-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container max-w-screen mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 min-h-screen">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              {/* Service Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-400/20 text-white text-lg font-medium border border-yellow-400/30">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM13 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" />
                </svg>
                Dynamic Progressive Technology
              </div>

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  DYNAMIX
                </span>
                <br />
                <span className="text-white">PROGRESSIVE</span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Dynamic progressive lenses with superior adaptation and comfort,
                featuring advanced technology for optimal vision at all
                distances.
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
                    src="/c9.jpeg"
                    alt="Cliff Dynamix Progressive Technology"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">10</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">6K</div>
                    <div className="text-xs text-gray-400">Definition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen  text-white overflow-hidden">
        <div className="md:max-w-7xl mx-auto">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/20 rounded-full filter blur-3xl animate-pulse delay-500"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse delay-1500"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-white">CLIFF </span>
                  <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                    DYNAMIX PROGRESSIVE
                  </span>
                </div>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
                Advanced progressive lenses featuring Continuum Design
                Technology with 6K Definition for superior vision at all
                distances. Experience balanced process design with optimized fit
                and easy adaptation.
              </p>
            </div>

            {/* Comparison Section */}
            <div className="mb-12 lg:mb-20">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-3xl p-6 lg:p-12 backdrop-blur-sm ">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                      Traditional vs Cliff Dynamix Progressive
                    </h2>
                    <div className="space-y-4 text-gray-300">
                      <p className="text-base lg:text-lg">
                        Experience the evolution of progressive lens technology
                        with our advanced Cliff Dynamix Progressive lenses.
                      </p>
                      <p className="text-base lg:text-lg">
                        Superior vision clarity, optimized fit, and seamless
                        adaptation for the modern lifestyle.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl p-4 text-center border border-white/10">
                        <h3 className="text-lg font-semibold mb-2 text-gray-300">
                          Traditional Progressive
                        </h3>
                        <div className="w-full h-32 bg-gray-600/30 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center opacity-30"
                            style={{
                              backgroundImage: "url('/blur.jpeg')",
                            }}
                          ></div>
                          <span className="text-gray-400 text-sm relative z-10px-2 py-1 rounded">
                            Standard Design
                          </span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl p-4 text-center border border-white/10">
                        <h3 className="text-lg font-semibold mb-2 text-gray-300">
                          Cliff Dynamix Progressive
                        </h3>
                        <div className="w-full h-32 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center opacity-40"
                            style={{
                              backgroundImage: "url('/test.avif')",
                            }}
                          ></div>
                          <span className="text-yellow-200 text-sm relative z-10  px-2 py-1 rounded">
                            6K Definition
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                Lens Specifications
              </h2>
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-3xl p-6 lg:p-8 backdrop-blur-sm border border-white/10 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-800/50">
                      <th className="text-left p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          PARTICULARS
                        </span>
                      </th>
                      <th className="text-left p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          INDEX{" "}
                        </span>
                      </th>
                      <th className="text-left p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          POWER RANGE{" "}
                        </span>
                      </th>
                      <th className="text-left p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          CYL{" "}
                        </span>
                      </th>
                      <th className="text-left p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          HC{" "}
                        </span>
                      </th>
                      <th className="text-left p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          NOX{" "}
                        </span>
                      </th>
                      <th className="text-left p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          BLUESAFE{" "}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lensSpecs.map((spec, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-700/20 transition-colors"
                      >
                        <td className="p-3 text-gray-300 border border-gray-600">
                          {spec.type}
                        </td>
                        <td className="p-3 text-gray-300 border border-gray-600">
                          {spec.index}
                        </td>
                        <td className="p-3 text-gray-300 border border-gray-600">
                          {spec.powerRange}
                        </td>
                        <td className="p-3 text-gray-300 border border-gray-600">
                          {spec.cyl}
                        </td>
                        <td className="p-3 text-gray-300 border border-gray-600">
                          {spec.hc}
                        </td>
                        <td className="p-3 text-gray-300 border border-gray-600">
                          {spec.nox}
                        </td>
                        <td className="p-3 text-gray-300 border border-gray-600">
                          {spec.bluesafe}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-gray-400">
                    Power mentioned is resultant power.
                  </p>
                  <p className="text-xs text-gray-400">
                    Addition: +1.00 to +3.00
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                Advanced Features
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl p-4 backdrop-blur-sm border border-white/10 text-center hover:border-yellow-400/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full"></div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-200">
                      {feature}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology and Benefits */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
              {/* Technology */}
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-3xl p-6 lg:p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Technology
                </h2>
                <div className="space-y-4">
                  {technology.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-3xl p-6 lg:p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Benefits
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommended For Section */}
            <div className="mb-12 lg:mb-16">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-3xl p-6 lg:p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Recommended For:
                </h2>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full flex-shrink-0 mt-2"></div>
                    <span>
                      Regular progressive lens users seeking enhanced comfort
                      and performance
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full flex-shrink-0 mt-2"></div>
                    <span>
                      Individuals needing customized vision support for all
                      distances - near, intermediate, and far
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full flex-shrink-0 mt-2"></div>
                    <span>
                      Users who demand high-definition clarity with minimal
                      aberrations and
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Those seeking comfortable throughout the day</span>
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

export default CliffDynamixProgressive;
