"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

// Star Icon Component
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={"size-10"}
  >
    <path
      fill="#edc26e"
      d="m61.13 23.718l-22.65-.105L31.583.692l-6.898 22.921l-22.651.105L20.423 38.35l-9.297 24.96l20.457-15.86L52.05 63.31l-9.308-24.96z"
    />
    <path
      fill="#faec78"
      d="M53.09 26.904L38.48 24.22l-6.897-12.27l-6.898 12.27l-14.08 2.84l9.814 11.891l-2.572 15.85l13.732-6.751l14.11 6.903l-2.955-16z"
    />
  </svg>
);

interface CoatingFeature {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface CoatingType {
  id: string;
  name: string;
  color: string;
  gradient: string;
  features: Record<string, boolean | "special">;
  description: string;
  price: string;
}

const CliffCoatings = () => {
  const [selectedCoating, setSelectedCoating] = useState<string>("nox");
  const backgroundImageRef = useRef<HTMLDivElement>(null);

  const features: CoatingFeature[] = [
    {
      id: "uv",
      name: "UV Protection",
      icon: "/cliffcoating/uv protection.jpg",
      description:
        "Blocks harmful UV rays to protect your eyes from sun damage",
    },
    {
      id: "scratch",
      name: "Scratch Resistance",
      icon: "/cliffcoating/sresistance.jpg",
      description: "Enhanced surface hardness prevents scratches and abrasions",
    },
    {
      id: "clear",
      name: "Clear Vision Reduced Reflection",
      icon: "/cliffcoating/clearvision.jpg",
      description: "Anti-reflective coating reduces glare and improves clarity",
    },
    {
      id: "slippery",
      name: "Super Slippery Coating",
      icon: "/cliffcoating/super.jpg",
      description: "Water and oil repellent surface for easy cleaning",
    },
    {
      id: "bluelight",
      name: "Bluelight Protection",
      icon: "/cliffcoating/bluelight.jpg",
      description: "Filters harmful blue light from digital screens",
    },
    {
      id: "glare",
      name: "Glare Protection",
      icon: "/cliffcoating/gprotection.jpg",
      description: "Reduces glare from bright lights and reflective surfaces",
    },
    {
      id: "photo",
      name: "Photo Chromatic Effect",
      icon: "/cliffcoating/photo.png",
      description: "Automatically adjusts tint based on light conditions",
    },
  ];

  const coatings: CoatingType[] = [
    {
      id: "nox",
      name: "NOX",
      color: "from-zinc-300 to-zinc-500",
      gradient: "bg-gradient-to-br from-zinc-800/30 to-zinc-700/30",
      features: {
        uv: true,
        scratch: true,
        clear: true,
        slippery: true,
        bluelight: false,
        glare: false,
        photo: false,
      },
      description: "Essential coating with fundamental protection features",
      price: "$49",
    },
    {
      id: "bluesafe",
      name: "Blue Safe",
      color: "from-zinc-200 to-zinc-400",
      gradient: "bg-gradient-to-br from-zinc-700/30 to-zinc-600/30",
      features: {
        uv: true,
        scratch: true,
        clear: true,
        slippery: true,
        bluelight: true,
        glare: false,
        photo: false,
      },
      description:
        "Perfect for digital device users with blue light protection",
      price: "$69",
    },
    {
      id: "driveclear",
      name: "Drive Clear",
      color: "from-zinc-100 to-zinc-300",
      gradient: "bg-gradient-to-br from-zinc-600/30 to-zinc-500/30",
      features: {
        uv: true,
        scratch: true,
        clear: true,
        slippery: true,
        bluelight: "special",
        glare: true,
        photo: false,
      },
      description: "Enhanced clarity and glare reduction for driving",
      price: "$89",
    },
    {
      id: "photoz",
      name: "Photo-Z",
      color: "from-white to-zinc-200",
      gradient: "bg-gradient-to-br from-zinc-500/30 to-zinc-400/30",
      features: {
        uv: true,
        scratch: true,
        clear: true,
        slippery: true,
        bluelight: "special",
        glare: true,
        photo: true,
      },
      description:
        "Advanced photochromatic technology with all premium features",
      price: "$129",
    },
  ];

  const currentCoating =
    coatings.find((c) => c.id === selectedCoating) || coatings[0];

  const getFeatureIcon = (hasFeature: boolean | "special") => {
    if (hasFeature === "special") return <StarIcon />;
    return hasFeature ? <StarIcon /> : null;
  };

  const getFeatureColor = (hasFeature: boolean | "special") => {
    if (hasFeature === "special") return "text-zinc-300";
    return hasFeature ? "text-white" : "text-zinc-600";
  };

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div ref={backgroundImageRef} className="absolute inset-0">
          <Image
            src="/c1.jpeg"
            alt="Cliff Coatings"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container max-w-7xl mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 min-h-screen">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              {/* Service Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-400/20 text-amber-400 text-lg font-medium border border-amber-400/30">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Premium Protective Coating
              </div>

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                  CLIFF
                </span>
                <br />
                <span className="text-white">COATINGS</span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-2xl">
                Premium protective coatings for enhanced lens durability and
                performance, ensuring your lenses stay crystal clear and
                protected.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Enhanced Durability
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Long-lasting protection against scratches and wear
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Superior Performance
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Optimized optical clarity and light transmission
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Easy Maintenance
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Simple cleaning and long-lasting protection
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Professional Grade
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Industry-leading coating technology
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    Explore Coating Options
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
                <button className="px-8 py-4 bg-white/10 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40">
                  Get Consultation
                </button>
              </div>
            </div>

            {/* Right Content - Enhanced Visual */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/c1.jpeg"
                    alt="Cliff Coatings Technology"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-zinc-400">02</span>
                  </div>

                  {/* Tech Badge */}
                  <div className="absolute bottom-6 left-6">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-600/80 text-white text-sm font-medium backdrop-blur-sm">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      Premium Coating
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-zinc-400">Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden">
        <div className="md:max-w-7xl mx-auto">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-zinc-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                <span className="text-white">Compare </span>
                <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  Coating Options
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Compare our premium lens coating technologies and find the
                perfect protection for your lenses
              </p>
            </div>

            {/* Interactive Coating Selector */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
                {coatings.map((coating) => (
                  <button
                    key={coating.id}
                    onClick={() => setSelectedCoating(coating.id)}
                    className={`px-3 cursor-pointer sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 ${selectedCoating === coating.id
                      ? `bg-gradient-to-r ${coating.color} text-black shadow-2xl shadow-current`
                      : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                  >
                    {coating.name}
                  </button>
                ))}
              </div>

              {/* Selected Coating Info */}
              <div
                className={`${currentCoating.gradient} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm mb-6 sm:mb-8 relative overflow-hidden`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/didi.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="relative z-10 text-center">
                  <h2
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r ${currentCoating.color} bg-clip-text text-transparent`}
                  >
                    {currentCoating.name}
                  </h2>
                  <p className="text-zinc-200 text-sm sm:text-base lg:text-lg mb-2 sm:mb-4">
                    {currentCoating.description}
                  </p>
                  <div
                    className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${currentCoating.color} bg-clip-text text-transparent`}
                  >
                    Starting from {currentCoating.price}
                  </div>
                </div>
              </div>
            </div>

            {/* Features Comparison */}
            <div className="md:max-w-7xl mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12">
                Features & Benefits
              </h3>

              {/* Desktop View - Table Layout */}
              <div className="hidden sm:block overflow-x-auto">
                <div className="min-w-full bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                  {/* Table Header */}
                  <div className="grid grid-cols-5 gap-4 p-4 sm:p-6 border-b border-white/10">
                    <div className="text-lg sm:text-xl font-bold text-white">
                      Features
                    </div>
                    {coatings.map((coating) => (
                      <div
                        key={coating.id}
                        className={`text-center font-bold text-base sm:text-lg bg-gradient-to-r ${coating.color} bg-clip-text text-transparent`}
                      >
                        {coating.name}
                      </div>
                    ))}
                  </div>

                  {/* Feature Rows */}
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className="grid grid-cols-5 gap-4 p-4 sm:p-6 border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={feature.icon}
                          alt={feature.name}
                          width={40}
                          height={40}
                          className="rounded object-cover"
                        />
                        <div>
                          <div className="font-semibold text-white text-sm sm:text-base">
                            {feature.name}
                          </div>
                          <div className="text-zinc-400 text-xs sm:text-sm">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                      {coatings.map((coating) => (
                        <div
                          key={`${feature.id}-${coating.id}`}
                          className={`text-center flex items-center justify-center ${getFeatureColor(
                            coating.features[feature.id]
                          )}`}
                        >
                          {getFeatureIcon(coating.features[feature.id]) || "—"}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile View - Card Layout */}
              <div className="block sm:hidden space-y-4">
                {coatings.map((coating) => (
                  <div
                    key={coating.id}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div
                      className={`font-bold text-lg mb-4 bg-gradient-to-r ${coating.color} bg-clip-text text-transparent text-center`}
                    >
                      {coating.name}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {features.map((feature) => (
                        <div
                          key={feature.id}
                          className="flex flex-col items-center gap-2 p-2 rounded-lg bg-white/5"
                        >
                          <Image
                            src={feature.icon}
                            alt={feature.name}
                            width={24}
                            height={24}
                            className="rounded object-cover"
                          />
                          <div className="flex-1 text-center">
                            <div className="text-xs font-semibold text-white mb-1">
                              {feature.name}
                            </div>
                            <span
                              className={`text-sm ${getFeatureColor(
                                coating.features[feature.id]
                              )}`}
                            >
                              {getFeatureIcon(coating.features[feature.id]) ||
                                "—"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Features Section */}
            <div className="mt-12 lg:mt-20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-white">
                Why Choose Cliff Coatings?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-amber-400/20 rounded-full flex items-center justify-center">
                    <Image
                      src="/cliffcoating/uv protection.jpg"
                      alt="UV Protection"
                      width={30}
                      height={30}
                      className="rounded object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-white mb-2">UV Protection</h4>
                  <p className="text-zinc-400 text-sm">
                    Advanced UV blocking technology to protect your eyes from
                    harmful sun rays and prevent premature aging.
                  </p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-amber-400/20 rounded-full flex items-center justify-center">
                    <Image
                      src="/cliffcoating/sresistance.jpg"
                      alt="Scratch Resistance"
                      width={30}
                      height={30}
                      className="rounded object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-white mb-2">
                    Scratch Resistance
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Military-grade hardness coating that protects against daily
                    wear and tear, keeping your lenses crystal clear.
                  </p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-amber-400/20 rounded-full flex items-center justify-center">
                    <Image
                      src="/cliffcoating/clearvision.jpg"
                      alt="Clear Vision"
                      width={30}
                      height={30}
                      className="rounded object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-white mb-2">Clear Vision</h4>
                  <p className="text-zinc-400 text-sm">
                    Anti-reflective technology that eliminates glare and
                    reflections for superior visual clarity.
                  </p>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="mt-12 lg:mt-20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-white">
                Our Advanced Coating Process
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-zinc-600/20 border border-zinc-500/30">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-500/40 flex items-center justify-center">
                      <Image
                        src="/cliffcoating/super.jpg"
                        alt="Super Slippery Coating"
                        width={20}
                        height={20}
                        className="rounded object-cover"
                      />
                    </div>
                    <span className="text-white font-medium text-sm sm:text-base">
                      Super Slippery Water & Oil Repellent Coating
                    </span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-zinc-600/20 border border-zinc-500/30">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-500/40 flex items-center justify-center">
                      <Image
                        src="/cliffcoating/bluelight.jpg"
                        alt="Blue Light Protection"
                        width={20}
                        height={20}
                        className="rounded object-cover"
                      />
                    </div>
                    <span className="text-white font-medium text-sm sm:text-base">
                      Blue Light Protection for Digital Eye Strain
                    </span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-zinc-600/20 border border-zinc-500/30">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-500/40 flex items-center justify-center">
                      <Image
                        src="/cliffcoating/gprotection.jpg"
                        alt="Glare Protection"
                        width={20}
                        height={20}
                        className="rounded object-cover"
                      />
                    </div>
                    <span className="text-white font-medium text-sm sm:text-base">
                      Glare Protection
                    </span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-zinc-600/20 border border-zinc-500/30">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-500/40 flex items-center justify-center">
                      <Image
                        src="/cliffcoating/photo.png"
                        alt="Photochromatic Effect"
                        width={20}
                        height={20}
                        className="rounded object-cover"
                      />
                    </div>
                    <span className="text-white font-medium text-sm sm:text-base">
                      Spin Coating for Photochromatic Effect
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
              <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 text-white">
                  Ready to Upgrade Your Lenses?
                </h2>
                <p className="text-zinc-300 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg">
                  Contact our experts to learn more about {currentCoating.name}{" "}
                  coating
                </p>
                <button
                  className={`bg-gradient-to-r ${currentCoating.color} text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base`}
                >
                  Get {currentCoating.name} Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CliffCoatings;
