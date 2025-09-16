"use client";

import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import TextWithTexture from "@/components/textwithgoldentexture";

const CliffSingleVisionRX = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const [selectedLens, setSelectedLens] = useState("clear");

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

  const lensTypes = [
    {
      id: "clear",
      name: "Clear",
      description: "Standard clear lenses for everyday vision correction",
      features: [
        "Sharp edge-to-edge clarity",
        "Custom-crafted precision",
        "Superior optical performance",
      ],
    },
    {
      id: "photochromic",
      name: "Photochromic",
      description: "Adaptive lenses that darken in sunlight",
      features: [
        "UV-reactive technology",
        "Seamless indoor/outdoor transition",
        "100% UV protection",
      ],
    },
    {
      id: "photochromic-plus",
      name: "Photochromic Plus",
      description: "Enhanced photochromic with faster transitions",
      features: [
        "Faster activation",
        "Enhanced color perception",
        "Premium UV protection",
      ],
    },
    {
      id: "sunglass",
      name: "Sunglass",
      description: "Tinted lenses for permanent sun protection",
      features: ["Consistent tint", "Glare reduction", "Style versatility"],
    },
    {
      id: "blue-shield",
      name: "Blue Shield",
      description: "Digital eye strain protection",
      features: [
        "Blue light filtering",
        "Reduced digital fatigue",
        "Clear vision comfort",
      ],
    },
    {
      id: "polarized",
      name: "Polarized",
      description: "Premium glare elimination",
      features: [
        "Eliminates reflected glare",
        "Enhanced contrast",
        "Superior visual comfort",
      ],
    },
  ];

  const specifications = {
    indexOptions: ["1.50", "1.56", "1.60"],
    powerRange: "(+6/-6)",
    cylinder: "Upto 4",
    resistanceFeatures: [
      "Scratch Resistance",
      "Re-Reflection",
      "Super Hydrophobic Coating",
      "UV Filter",
      "Protection",
      "Anti-static Coating",
      "Photochromatic",
    ],
  };

  const currentLens =
    lensTypes.find((lens) => lens.id === selectedLens) || lensTypes[0];

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
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-rose-700/10 rounded-full blur-3xl animate-pulse"
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
                  text="Single Vision"
                  className="text-5xl md:text-7xl mt-12 font-bold leading-tight capitalize"
                />
                <TextWithTexture
                  text="RX Lenses"
                  className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent capitalize"
                />
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Prescription single vision lenses for clear, focused sight with 
                precise vision correction tailored to your unique needs.
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
                    src="/c8.jpeg"
                    alt="Cliff Single Vision RX Technology"
                    width={200}
                    height={300}
                    className="object-contain h-[300px] w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">09</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-gradient-to-br from-rose-700 to-rose-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">RX</div>
                    <div className="text-xs text-gray-400">Precision</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content with Same Background as Cliff Coatings */}
      <div className="min-h-screen  text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="max-w-screen mx-auto">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">CLIFF </span>
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  SINGLE{" "}
                  <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                    VISION RX{" "}
                  </span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Precision-engineered lenses for superior single vision
                correction. A smart choice for clear, comfortable vision.
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Slimmer, flatter design with outstanding optical performance
              </p>
            </div>

            {/* Hero Visual Section */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                      Engineered for Excellence
                    </span>
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <p className="text-gray-300">
                        Ensures sharp, edge-to-edge clarity
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <p className="text-gray-300">
                        Custom-crafted with precision back-surface freeform
                        technology for optimal accuracy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center overflow-hidden">
                    <Image
                      src="/eyetestt.jpg"
                      alt="Single Vision RX Technology"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Lens Type Selector */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  Choose Your Perfect Lens
                </span>
              </h2>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {lensTypes.map((lens) => (
                  <button
                    key={lens.id}
                    onClick={() => setSelectedLens(lens.id)}
                    className={`px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                      selectedLens === lens.id
                        ? "bg-gradient-to-r from-gray-300 to-gray-500 text-black shadow-2xl shadow-current"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {lens.name}
                  </button>
                ))}
              </div>

              {/* Selected Lens Details */}
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                        {currentLens.name}
                      </span>
                    </h3>
                    <p className="text-lg text-gray-300 mb-6">
                      {currentLens.description}
                    </p>
                    <div className="space-y-3">
                      {currentLens.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <p className="text-gray-300">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-gray-300 mb-4">
                      Specifications
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Index Options:</span>
                        <span className="text-gray-300">
                          {specifications.indexOptions.join(", ")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Power Range:</span>
                        <span className="text-gray-300">
                          {specifications.powerRange}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Cylinder:</span>
                        <span className="text-gray-300">
                          {specifications.cylinder}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  Advanced Features
                </span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specifications.resistanceFeatures.map((feature, index) => {
                  const getFeatureIcon = (featureName: string) => {
                    const iconMap: { [key: string]: string } = {
                      "Scratch Resistance": "/svgs/scratchresistance.svg",
                      "Re-Reflection": "/svgs/antireflective.svg",
                      "Super Hydrophobic Coating": "/svgs/superslippery.svg",
                      "UV Filter": "/svgs/uvprotection.svg",
                      Protection: "/svgs/clearvision.svg",
                      "Anti-static Coating": "/svgs/spincoat.svg",
                      Photochromatic: "/svgs/photochromatic.svg",
                    };

                    const iconSrc =
                      iconMap[featureName] || "/svgs/clearvision.svg";

                    return (
                      <Image
                        src={iconSrc}
                        alt={featureName}
                        width={24}
                        height={24}
                        className="w-18 h-18 filter brightness-0 invert"
                      />
                    );
                  };

                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="w-12 h-12 l mx-auto mb-4 flex items-center justify-center">
                        {getFeatureIcon(feature)}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-300 mb-2">
                        {feature}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {feature === "Scratch Resistance" &&
                          "Enhanced surface hardness for durability"}
                        {feature === "Re-Reflection" &&
                          "Anti-reflective coating for clearer vision"}
                        {feature === "Super Hydrophobic Coating" &&
                          "Water and oil repellent surface"}
                        {feature === "UV Filter" && "Complete UV protection"}
                        {feature === "Protection" &&
                          "Comprehensive lens protection"}
                        {feature === "Anti-static Coating" &&
                          "Reduces dust attraction"}
                        {feature === "Photochromatic" &&
                          "Adaptive light technology"}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  Technical Specifications
                </span>
              </h2>

              <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">
                        Particulars
                      </th>
                      <th className="text-center py-3 px-4 text-gray-300 font-semibold">
                        Index
                      </th>
                      <th className="text-center py-3 px-4 text-gray-300 font-semibold">
                        Power Range
                      </th>
                      <th className="text-center py-3 px-4 text-gray-300 font-semibold">
                        Cyl
                      </th>
                      <th className="text-center py-3 px-4 text-gray-300 font-semibold">
                        RC
                      </th>
                      <th className="text-center py-3 px-4 text-gray-300 font-semibold">
                        NOX
                      </th>
                      <th className="text-center py-3 px-4 text-gray-300 font-semibold">
                        Bluesafe
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">Clear</td>
                      <td className="text-center py-3 px-4">
                        1.50
                        <br />
                        1.56
                        <br />
                        1.60
                      </td>
                      <td className="text-center py-3 px-4">
                        (+6/-6)
                        <br />
                        (+6/-10)
                        <br />
                        (+6/-12)
                      </td>
                      <td className="text-center py-3 px-4">Upto 4</td>
                      <td className="text-center py-3 px-4">
                        3500
                        <br />
                        4435
                        <br />
                        7240
                      </td>
                      <td className="text-center py-3 px-4">
                        5135
                        <br />
                        7005
                        <br />
                        9750
                      </td>
                      <td className="text-center py-3 px-4">
                        5740
                        <br />
                        7630
                        <br />
                        11220
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">Photochromic</td>
                      <td className="text-center py-3 px-4">1.56</td>
                      <td className="text-center py-3 px-4">(+6/-10.0)</td>
                      <td className="text-center py-3 px-4">Upto 4</td>
                      <td className="text-center py-3 px-4">4905</td>
                      <td className="text-center py-3 px-4">6775</td>
                      <td className="text-center py-3 px-4">7570</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">Photochromic Plus</td>
                      <td className="text-center py-3 px-4">1.56</td>
                      <td className="text-center py-3 px-4">(+6/-8.0)</td>
                      <td className="text-center py-3 px-4">Upto 4</td>
                      <td className="text-center py-3 px-4">6070</td>
                      <td className="text-center py-3 px-4">7940</td>
                      <td className="text-center py-3 px-4">8875</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToServicesButton />
    </>
  );
};

export default CliffSingleVisionRX;
