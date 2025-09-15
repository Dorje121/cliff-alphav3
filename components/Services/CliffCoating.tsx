"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import { ArrowLeft } from "lucide-react";
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
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const [selectedCoating, setSelectedCoating] = useState<string>("nox");
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState([0, 1, 2, 3, 4]);
  const [isHovered, setIsHovered] = useState(false);

  // Array of 5 photos
  const photos = [
    "/cliffcoating/new.png",
    "/cliffcoating/new1.png",
    "/cliffcoating/new2.png",
    "/cliffcoating/new3.png",
    "/cliffcoating/new4.png",
    "/cliffcoating/new5.png"
  ];

  const handleThumbnailClick = (index: number) => {
    setCurrentPhotoIndex(index);
    // Update thumbnails to show the clicked photo and next 4 photos
    const newThumbnails = [];
    for (let i = 0; i < 5; i++) {
      newThumbnails.push((index + i) % photos.length);
    }
    setThumbnails(newThumbnails);
  };

  const handleNext = () => {
    const nextIndex = (currentPhotoIndex + 1) % photos.length;
    setCurrentPhotoIndex(nextIndex);
    handleThumbnailClick(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    setCurrentPhotoIndex(prevIndex);
    handleThumbnailClick(prevIndex);
  };

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

  useLayoutEffect(() => {
    // Background image continuous motion animation
    gsap.fromTo(
      backgroundImageRef.current,
      {
        scale: 1,
        rotation: 0,
      },
      {
        scale: 1.5,
        rotation: 0.5,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <>
      {/* Hero Section with Service Information */}
      <div className="h-[80vh] to-black text-white relative overflow-hidden">
        <div ref={backgroundImageRef} className="absolute inset-0 h-full">
          <img
            src="/homevideo/eyewear.GIF"
            alt="Cliff Coatings"
            className="w-full h-full object-cover opacity-70"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" /> */}
        </div>

        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 opacity-90">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div> */}

        {/* Main Content */}
        <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-4">

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent whitespace-nowrap">
                  CLIFF PREMIUM
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  COATINGS
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Advanced protective coatings for modern eyewear. Premium coating 
                technology enhances clarity, durability, and protection for your lenses.
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
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl w-[28rem]">
                  <Image
                    src="/cliffcoating/new.png"
                    alt="Cliff Premium Coatings Technology"
                    width={200}
                    height={300}
                    className="object-contain h-[300px] w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">03</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Cliff</div>
                    <div className="text-xs text-gray-400">Coatings</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Coating Comparison Section */}
      <div className="min-h-screen bg-black text-white relative z-20">
        <div className="max-w-[1500px] mx-auto p-4 py-16">
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
          <div className="flex flex-col lg:flex-row gap-8 max-w-screen -ml-5">
            {/* Left Sidebar - Coating Selection */}
            <div className="lg:w-1/4">
              <div className="lg:sticky lg:top-16">
                <div className="bg-black rounded-xl p-6 shadow-xl">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
                    Lens Coatings
                  </h2>
                  
                  <div className="space-y-3">
                    {coatings.map((coating) => (
                      <button
                        key={coating.id}
                        onClick={() => setSelectedCoating(coating.id)}
                        className={`group relative w-full text-left p-4 rounded-xl transition-all duration-300 overflow-hidden ${
                          selectedCoating === coating.id
                            ? "bg-gradient-to-r from-amber-500/15 to-amber-600/10 border border-amber-500/30 text-white shadow-lg"
                            : "bg-gray-800/40 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600/50 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between relative z-10">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              selectedCoating === coating.id
                                ? "bg-amber-400 shadow-lg shadow-amber-400/50"
                                : "bg-gray-600 group-hover:bg-amber-400"
                            }`}></div>
                            <span className={`font-semibold transition-colors duration-300 ${
                              selectedCoating === coating.id
                                ? "text-amber-100"
                                : "group-hover:text-amber-300"
                            }`}>
                              {coating.name}
                            </span>
                          </div>
                          <div className={`text-xs font-bold px-2 py-1 rounded-full transition-all duration-300 ${
                            selectedCoating === coating.id
                              ? "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                              : "bg-gray-700/50 text-gray-500 group-hover:bg-amber-500/20 group-hover:text-amber-300 group-hover:border-amber-400/30"
                          }`}>
                            {selectedCoating === coating.id ? "SELECTED" : "SELECT"}
                          </div>
                        </div>
                        
                        {/* Background accent */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 transition-opacity duration-300 ${
                          selectedCoating === coating.id ? "opacity-100" : "group-hover:opacity-100"
                        }`}></div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-800">
                    <p className="text-xs text-gray-500 text-center italic">
                      Premium protection for your vision
                    </p>
                  </div>
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
                {features.map((feature) => {
                  const isAvailable = currentCoating.features[feature.id];
                  const isSpecial = currentCoating.features[feature.id] === "special";
                  
                  return (
                    <div
                      key={feature.id}
                      className="group relative bg-gradient-to-br from-slate-800/90 via-slate-900/80 to-slate-800/90 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 transition-all duration-300 h-full overflow-hidden"
                    >
                      {/* Background accent */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 opacity-0"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Header with icon */}
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center">
                              <Image
                                src={feature.icon}
                                alt={feature.name}
                                width={64}
                                height={64}
                                className={`rounded-lg object-cover filter sepia brightness-130 saturate-180 hue-rotate-15 drop-shadow-lg ${
                                  isSpecial ? 'brightness-150 saturate-150 hue-rotate-10' : ''
                                }`}
                              />
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <h3 className="font-bold text-white text-lg mb-1">
                              {feature.name}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <span className={`text-lg transition-all duration-300 ${
                                isAvailable ? "text-amber-400" : "text-gray-500"
                              }`}>
                                {getFeatureIcon(currentCoating.features[feature.id]) || "—"}
                              </span>
                              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                isSpecial
                                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                  : isAvailable
                                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                  : "bg-gray-600/30 text-gray-500 border border-gray-500/30"
                              }`}>
                                {isSpecial ? "Enhanced" : isAvailable ? "Available" : "Not Available"}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <div className="flex-grow">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                        
                        {/* Bottom accent line */}
                        <div className={`mt-4 h-px w-full ${
                          isSpecial 
                            ? 'bg-gradient-to-r from-transparent via-amber-500/50 to-transparent'
                            : isAvailable
                            ? 'bg-gradient-to-r from-transparent via-green-500/50 to-transparent'
                            : 'bg-gray-700/50'
                        }`}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

  
    <section className="py-16 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 space-y-24">
        
        {/* Blue Safe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/coatings/blue.png"
              alt="Blue Safe"
              className="rounded-xl shadow-lg max-h-[500px] object-contain"
            />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Blue Safe Coating</h2>
            <p className="text-gray-600 mb-6">
              Protects against harmful UV rays and filters blue light for comfortable digital screen use.
            </p>
            <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/uvprotection.svg" alt="UV Protection" className="w-12 h-12" />
                  <span className="font-semibold">UV Protection</span>
                </div>
                <span>Blocks harmful UV rays</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/antireflective.svg" alt="Anti Reflective Coating" className="w-12 h-12" />
                  <span className="font-semibold">Anti Reflective Coating</span>
                </div>
                <span>Reduces glare and reflections</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/easytoclean.svg" alt="Easy to Clean" className="w-12 h-12" />
                  <span className="font-semibold">Easy to Clean</span>
                </div>
                <span>Simple maintenance</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/bluelight.svg" alt="Blue Light Filter" className="w-12 h-12" />
                  <span className="font-semibold">Blue Light Filter</span>
                </div>
                <span>Protects eyes from screens</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/scratchresistance.svg" alt="Scratch Resistance" className="w-12 h-12" />
                  <span className="font-semibold">Scratch Resistance</span>
                </div>
                <span>Durable and long-lasting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Drive Clear */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/coatings/drive.png"
              alt="Drive Clear"
              className="rounded-xl shadow-lg max-h-[500px] object-contain"
            />
          </div>
          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Drive Clear Coating</h2>
            <p className="text-gray-600 mb-6">
              Specially designed for driving, offering glare reduction and crystal clear vision.
            </p>
            <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/clearvision.svg" alt="Lens Type" className="w-12 h-12" />
                  <span className="font-semibold">Lens Type</span>
                </div>
                <span>Anti-Glare Lens</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/uvprotection.svg" alt="Protection" className="w-12 h-12" />
                  <span className="font-semibold">Protection</span>
                </div>
                <span>UV 400, Anti-Reflective</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/scratchresistance.svg" alt="Durability" className="w-12 h-12" />
                  <span className="font-semibold">Durability</span>
                </div>
                <span>Scratch Resistant</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/glareprotection.svg" alt="Glare" className="w-12 h-12" />
                  <span className="font-semibold">Glare</span>
                </div>
                <span>High Reduction</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/clearvision.svg" alt="Best For" className="w-12 h-12" />
                  <span className="font-semibold">Best For</span>
                </div>
                <span>Driving Day & Night</span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo-Z */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/coatings/photoz.png"
              alt="Photo-Z"
              className="rounded-xl shadow-lg max-h-[500px] object-contain"
            />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo-Z Coating</h2>
            <p className="text-gray-600 mb-6">
              Adaptive lenses that adjust to light conditions, combining comfort and protection.
            </p>
            <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/photochromatic.svg" alt="Lens Type" className="w-12 h-12" />
                  <span className="font-semibold">Lens Type</span>
                </div>
                <span>Photochromatic</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/uvprotection.svg" alt="Protection" className="w-12 h-12" />
                  <span className="font-semibold">Protection</span>
                </div>
                <span>UV 400, Anti-Reflective</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/scratchresistance.svg" alt="Durability" className="w-12 h-12" />
                  <span className="font-semibold">Durability</span>
                </div>
                <span>Scratch Resistant</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/photochromatic.svg" alt="Effect" className="w-12 h-12" />
                  <span className="font-semibold">Effect</span>
                </div>
                <span>Light Adaptive</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <img src="/svgs/clearvision.svg" alt="Best For" className="w-12 h-12" />
                  <span className="font-semibold">Best For</span>
                </div>
                <span>Indoor & Outdoor Use</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  



<BackToServicesButton />

    </>
  );
};

export default CliffCoatings;
