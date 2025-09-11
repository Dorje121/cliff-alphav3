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
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState([0, 1, 2, 3, 4]);

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

  return (
    <>
                  <section className="sticky top-0 min-h-screen bg-gray-50 flex flex-col z-10">

                    {/* Main Product Image */}
                    <div className="flex justify-center items-center flex-grow mt-16">
                      <Image
                        src={photos[currentPhotoIndex]} // use current photo index state
                        alt="Main Product"
                        width={700}
                        height={500}
                        className="object-contain"
                      />
                    </div>

                    {/* Thumbnails Grid - Fixed at bottom */}
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 py-8 max-w-4xl mx-auto">
                      {photos.slice(1).map((image, index) => (
                        <div 
                          key={index} 
                          className="flex justify-center"
                        >
                          <Image
                            src={image}
                            alt={`thumb ${index + 1}`}
                            width={120}
                            height={80}
                            className={`border rounded cursor-pointer hover:opacity-80 transition-all duration-200 ${
                              currentPhotoIndex === index ? 'border-blue-500 border-2' : 'border-gray-300'
                            }`}
                            onClick={() => setCurrentPhotoIndex(index)}
                          />
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="bg-black text-white -mt-0 py-24 relative z-20">
                    <div className="max-w-6xl mx-auto p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Blue Safe */}
                        <div className="text-center">
                          <div className="mb-6 flex justify-center">
                            <Image
                              src="/cliffcoating/Blue-Safe.jpg"
                              alt="Blue Safe Coating"
                              width={300}
                              height={200}
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Blue Safe</h3>
                          <p className="text-gray-300">Advanced blue light filtering technology that protects your eyes from digital screen exposure while maintaining crystal clear vision.</p>
                        </div>
                        
                        {/* Photo Z */}
                        <div className="text-center">
                          <div className="mb-6 flex justify-center">
                            <Image
                              src="/cliffcoating/Photo-Z.jpg"
                              alt="Photo Z Coating"
                              width={300}
                              height={200}
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Photo Z</h3>
                          <p className="text-gray-300">Professional photochromic coating that automatically adjusts to changing light conditions, providing optimal vision indoors and outdoors.</p>
                        </div>
                        
                        {/* Drive Safe */}
                        <div className="text-center">
                          <div className="mb-6 flex justify-center">
                            <Image
                              src="/cliffcoating/Drive-safe.jpg"
                              alt="Drive Safe Coating"
                              width={300}
                              height={200}
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Drive Safe</h3>
                          <p className="text-gray-300">Specialized anti-glare coating designed for driving, reducing nighttime glare and enhancing contrast for safer road visibility.</p>
                        </div>
                      </div>
                    </div>
                  </section>

      {/* Coating Comparison Section */}
      <div className="min-h-screen bg-black text-white sticky relative z-20">
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
              <div className="bg-transparent backdrop-blur-sm p-6 sticky top-8">
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
