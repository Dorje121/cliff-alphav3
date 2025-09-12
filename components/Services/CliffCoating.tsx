"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowLeft } from "lucide-react";

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

  return (
    <>
                  <section className="h-[90vh] bg-gray-50 flex flex-col z-10 relative">
                    {/* Back Button */}
                    <div className="absolute top-18 left-9 z-50">
                      <Link 
                        href="/Services" 
                        className="flex items-center justify-center bg-black/80 hover:bg-black text-white px-3 py-1.5 rounded-md transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600 shadow-lg"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <ArrowLeft
                          size={20}
                          className={`transition-transform duration-300 ${
                            isHovered ? "-translate-x-1" : ""
                          }`}
                        />
                      </Link>
                    </div>

                    <div className="flex flex-grow mt-48">
                      {/* Thumbnails Grid - Left Side Vertical */}
                      <div className="flex flex-col gap-4 pr-4 pl-10">
                        {photos.slice(1).map((image, index) => (
                          <div 
                            key={index} 
                            className="flex justify-center relative z-30"
                          >
                            <button
                              onClick={() => {
                                console.log('Thumbnail clicked:', index + 1);
                                setCurrentPhotoIndex(index + 1);
                              }}
                              className="border-2 rounded hover:opacity-80 transition-all duration-100 focus:outline-none focus:ring-blue-500"
                              style={{
                                borderColor: currentPhotoIndex === index + 1 ? '#3b82f6' : '#d1d5db'
                              }}
                            >
                              <Image
                                src={image}
                                alt={`thumb ${index + 1}`}
                                width={120}
                                height={80}
                                className="rounded"
                              />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Main Product Image */}
                      <div className="flex justify-center -ml-24 -mt-10 items-center flex-grow">
                        <Image
                          src={photos[currentPhotoIndex]} // use current photo index state
                          alt="Main Product"
                          width={700}
                          height={500}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </section>

                  <section className="bg-black text-white -mt-0 py-24 relative z-20">
                    <div className="max-w-6xl mx-auto p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Blue Safe */}
                        <Link href="/Services/cliff-blue-safe-lenses" className="text-center block group cursor-pointer">
                          <div className="mb-6 flex justify-center">
                            <Image
                              src="/cliffcoating/Blue-Safe.jpg"
                              alt="Blue Safe Coating"
                              width={300}
                              height={200}
                              className="object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
                            />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">Blue Safe</h3>
                          <p className="text-gray-300">The Blue Safe Coating provides advanced protection against digital eye strain and harmful UV rays. Designed for durability, it features scratch-resistant properties to keep your lenses clear and long-lasting. Its anti-reflective coating minimizes glare, ensuring sharper vision in bright environments, while the easy-to-clean surface repels smudges and fingerprints effortlessly. This coating also includes a blue light filter, which blocks harmful emissions from screens, reducing fatigue and improving sleep quality. Perfect for individuals who spend hours on digital devices, the Blue Safe Coating ensures comfort and clarity throughout your day.</p>
                        </Link>
                        
                        {/* Photo Z */}
                        <Link href="/Services/photo-z-lenses" className="text-center block group cursor-pointer">
                          <div className="mb-6 flex justify-center">
                            <Image
                              src="/cliffcoating/Photo-Z.jpg"
                              alt="Photo Z Coating"
                              width={300}
                              height={200}
                              className="object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
                            />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">Photo Z</h3>
                          <p className="text-gray-300">The Photo-Z Coating adapts seamlessly to changing light conditions, offering unmatched versatility. It provides full UV protection, shielding your eyes indoors and outdoors, while its scratch-resistant surface ensures lasting clarity. The anti-reflective coating eliminates reflections, delivering sharper vision in all environments, and the easy-to-clean feature keeps lenses pristine. This coating partially filters harmful blue rays and reduces glare for enhanced comfort. Its photochromic effect, achieved through innovative technology, adjusts tint based on light intensity. Perfect for dynamic lifestyles, the Photo-Z Coating transitions effortlessly for convenience and clarity.</p>
                        </Link>
                        
                        {/* Drive Safe */}
                        <Link href="/Services/drive-safe-lenses" className="text-center block group cursor-pointer">
                          <div className="mb-6 flex justify-center">
                            <Image
                              src="/cliffcoating/Drive-safe.jpg"
                              alt="Drive Safe Coating"
                              width={300}
                              height={200}
                              className="object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
                            />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 group-hover:text-green-300 transition-colors duration-300">Drive Clear</h3>
                          <p className="text-gray-300">The Drive Clear Coating is crafted to enhance safety and comfort while driving in any lighting condition. It offers complete UV protection to shield your eyes from sunlight, paired with scratch-resistant durability for long-term use. The anti-reflective coating reduces glare from headlights, streetlights, and sunlight, providing clearer vision during both day and night drives. Its easy-to-clean feature ensures your lenses remain spotless with minimal effort. Additionally, this coating partially filters harmful blue rays and reduces glare, enhancing contrast and focus on the road. Ideal for drivers, it ensures safer and more comfortable journeys.</p>
                        </Link>
                      </div>
                    </div>
                  </section>

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
    </>
  );
};

export default CliffCoatings;
