"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

// Star Icon Component
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={"size-4"}
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

  const features: CoatingFeature[] = [
    {
      id: "uv",
      name: "UV Protection",
      icon: "/svgs/uvprotection.svg",
      description:
        "Blocks harmful UV rays to protect your eyes from sun damage",
    },
    {
      id: "scratch",
      name: "Scratch Resistance",
      icon: "/svgs/scratchresistance.svg",
      description: "Enhanced surface hardness prevents scratches and abrasions",
    },
    {
      id: "clear",
      name: "Clear Vision Reduced Reflection",
      icon: "/svgs/clearvision.svg",
      description: "Anti-reflective coating reduces glare and improves clarity",
    },
    {
      id: "slippery",
      name: "Super Slippery Coating",
      icon: "/svgs/superslippery.svg",
      description: "Water and oil repellent surface for easy cleaning",
    },
    {
      id: "bluelight",
      name: "Bluelight Protection",
      icon: "/svgs/bluelight.svg",
      description: "Filters harmful blue light from digital screens",
    },
    {
      id: "glare",
      name: "Glare Protection",
      icon: "/svgs/glareprotection.svg",
      description: "Reduces glare from bright lights and reflective surfaces",
    },
    {
      id: "photo",
      name: "Photo Chromatic Effect",
      icon: "/svgs/photochromatic.svg",
      description: "Automatically adjusts tint based on light conditions",
    },
  ];

  const coatings: CoatingType[] = [
    {
      id: "nox",
      name: "NOX",
      color: "from-gray-300 to-gray-500",
      gradient: "bg-gradient-to-br from-gray-800/30 to-gray-700/30",
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
      color: "from-gray-200 to-gray-400",
      gradient: "bg-gradient-to-br from-gray-700/30 to-gray-600/30",
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
      color: "from-gray-100 to-gray-300",
      gradient: "bg-gradient-to-br from-gray-600/30 to-gray-500/30",
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
      color: "from-white to-gray-200",
      gradient: "bg-gradient-to-br from-gray-500/30 to-gray-400/30",
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

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
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
        <div className="relative z-10 container max-w-screen mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 min-h-screen">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              {/* Service Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full text-black text-lg font-medium border border-yellow-300/30">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Premium Protective Coating
                </span>
              </div>

              {/* Service Title */}
              <h1 className="text-5xl font-family-playfair md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  CLIFF
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  COATINGS
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Premium protective coatings for enhanced lens durability and
                performance, ensuring your lenses stay crystal clear and
                protected.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full text-black font-semibold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center ">
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
                    src="/c1.jpeg"
                    alt="Cliff Coatings Technology"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">02</span>
                  </div>

                  {/* Tech Badge */}
                  <div className="absolute bottom-6 left-6">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-600/80 text-white text-sm font-medium backdrop-blur-sm">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      Premium Coating
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-gray-400">Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coating Comparison Section */}
      <div className="min-h-screen bg-transparent text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">COATING </span>
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                COMPARISON
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Compare our premium lens coating technologies and find the perfect
              protection for your lenses
            </p>
          </div>

          {/* Main Comparison Layout */}
          <div className="flex flex-col lg:flex-row gap-8 max-w-screen mx-auto">
            {/* Left Sidebar - Coating Selection */}
            <div className="lg:w-1/4">
              <div className="bg-transparent backdrop-blur-sm  p-6">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Select Coating Type
                </h3>
                <div className="space-y-3">
                  {coatings.map((coating) => (
                    <button
                      key={coating.id}
                      onClick={() => setSelectedCoating(coating.id)}
                      className={`w-full text-left p-4 cursor-pointer rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                        selectedCoating === coating.id
                          ? "bg-gradient-to-r from-white via-yellow-100 to-yellow-200    text-black shadow-lg shadow-amber-500/30"
                          : "bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-lg">
                            {coating.name}
                          </div>
                        </div>
                        <div
                          className={`w-3 h-3 rounded-full transition-all ${
                            selectedCoating === coating.id
                              ? "bg-gray-900"
                              : "bg-amber-400"
                          }`}
                        ></div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Features Table */}
            <div className="lg:w-3/4">
              <h1 className="text-3xl font-bold text-white mb-6">
                Features & Benefits - {currentCoating.name}
              </h1>

              {/* Features in Grid Format */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/5 transition-all duration-300 hover:border-gray-400/30 hover:transform hover:scale-[1.02] h-full"
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      {/* Icon - Fixed height */}
                      <div className="flex-shrink-0 mb-4">
                        <Image
                          src={feature.icon}
                          alt={feature.name}
                          width={80}
                          height={80}
                          className="rounded object-cover filter brightness-0 invert"
                        />
                      </div>

                      {/* Content - Flexible height with minimum */}
                      <div className="flex-grow flex flex-col justify-center space-y-2 min-h-[120px]">
                        <h3 className="font-semibold text-white text-lg">
                          {feature.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Status - Fixed at bottom */}
                      <div className="flex-shrink-0 flex flex-col items-center space-y-2 mt-4">
                        <span
                          className={`text-3xl transition-all duration-300 ${
                            currentCoating.features[feature.id]
                              ? "text-amber-400 drop-shadow-lg"
                              : "text-gray-600"
                          }`}
                        >
                          {getFeatureIcon(
                            currentCoating.features[feature.id]
                          ) || "—"}
                        </span>
                        <span
                          className={`font-medium text-sm px-3 py-1 rounded-full ${
                            currentCoating.features[feature.id] === "special"
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              : currentCoating.features[feature.id]
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-gray-500/20 text-gray-500 border border-gray-500/30"
                          }`}
                        >
                          {currentCoating.features[feature.id] === "special"
                            ? "Enhanced"
                            : currentCoating.features[feature.id]
                            ? "Available"
                            : "Not Available"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CliffCoatings;
