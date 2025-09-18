"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import TextWithTexture from "@/components/textwithgoldentexture";
import HeroSection from "@/components/Services/heropage";


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
    "/cliffcoating/new5.png",
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

<HeroSection
  title="Cliff Premium"
  subtitle="Coatings"
  description="Advanced protective coatings for modern eyewear. Premium coating technology enhances clarity, durability, and protection for your lenses."
  backgroundImage="/c5.jpeg"
  rightImage="/c5.jpeg"
  ctaLabel="Contact Us"
  ctaLink="/Contact"
  serviceNumber="02"
  badgeTitle="CLIFF"
  badgeSubtitle="COATINGS"
/> 

      {/* Hero Section with Service Information */}
      {/* <div className="h-[100vh] text-white relative overflow-hidden">
        <div ref={backgroundImageRef} className="absolute inset-0 h-full">
          <Image
            src={"/c5.jpeg"}
            className="w-full h-full object-cover opacity-70"
            alt="Cliff lens"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
        </div>
        
        <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
          
            <div className="lg:w-1/2 space-y-4">
             
              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight">
                <TextWithTexture
                  text="Cliff Premium"
                  className="text-5xl md:text-7xl mt-12 font-bold leading-tight capitalize"
                />
                <TextWithTexture
                  text="Coatings"
                  className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent capitalize"
                />
              </h1>

       
              <p className="text-xl md:text-2xl  text-white leading-relaxed max-w-2xl">
                Advanced protective coatings for modern eyewear. Premium coating
                technology enhances clarity, durability, and protection for your
                lenses.
              </p>

         
              <div className="pt-8">
                <Link href="/Contact" className="group relative inline-block">
                  <button className="px-8 py-4 bg-white/10 rounded-full text-white backdrop-blur-sm border border-white/30 font-semibold text-lg  transition-all duration-300 transform hover:scale-105  cursor-pointer">
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

            
            <div className="lg:w-1/2 relative">
              <div className="relative flex justify-center lg:justify-end lg:ml-2">
                
                <div className="relative rounded-3xl overflow-hidden border border-white/30 w-[28rem]">
                  <Image
                    src="/c5.jpeg"
                    alt="Cliff Premium Coatings Technology"
                    width={200}
                    height={300}
                    className="object-cover w-full h-[350px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                      
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">03</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 backdrop-blur-sm bg-white/10 rounded-2xl flex items-center justify-center shadow-lg ">
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-[#DFC65F] drop-shadow-lg">
                      CLIFF
                    </div>
                    <div className="text-xs text-zinc-200 mt-1 tracking-wider">
                      COATINGS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="py-16 bg-black">
        <div className=" p-4 space-y-10">
          {/* Blue Safe */}
          <div className="w-full mx-auto">
            <div className="p-6 relative overflow-hidden">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold text-white mt-6 mb-3 text-center relative z-10">
                  Blue Safe Coating
                </h2>
                <p className="text-gray-300 text-xl text-center relative z-10">
                  Protects against harmful UV rays and filters blue light for
                  comfortable digital screen use.
                </p>
              </div>
              {/* Right side - Features in 2 columns */}
              <div className="flex items-center justify-center mt-8 gap-20">
                {/* Feature */}
                <div className="text-center">
                  <img
                    src="/svgs/uvprotection.svg"
                    alt="UV Protection"
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h3 className="font-bold text-xl text-white mb-2">
                    UV Protection
                  </h3>
                  <p className="text-gray-300">Blocks harmful UV rays</p>
                </div>

                <div className="text-center">
                  <img
                    src="/svgs/antireflective.svg"
                    alt="Anti Reflective Coating"
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h3 className="font-bold text-xl text-white mb-2">
                    Anti Reflective
                  </h3>
                  <p className="text-gray-300">Reduces glare and reflections</p>
                </div>

                <div className="text-center">
                  <img
                    src="/svgs/easytoclean.svg"
                    alt="Easy to Clean"
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h3 className="font-bold text-xl text-white mb-2">
                    Easy to Clean
                  </h3>
                  <p className="text-gray-300">Simple maintenance</p>
                </div>

                <div className="text-center">
                  <img
                    src="/svgs/bluelight.svg"
                    alt="Blue Light Filter"
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h3 className="font-bold text-xl text-white mb-2">
                    Blue Light Filter
                  </h3>
                  <p className="text-gray-300">Protects eyes from screens</p>
                </div>

                <div className="text-center sm:col-span-2">
                  <img
                    src="/svgs/scratchresistance.svg"
                    alt="Scratch Resistance"
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h3 className="font-bold text-xl text-white mb-2">
                    Scratch Resistance
                  </h3>
                  <p className="text-gray-300">Durable and long-lasting</p>
                </div>
              </div>
              <div className="flex justify-center relative">
                <Image
                  height={1000}
                  width={1000}
                  src="/bluesafe/image.png"
                  alt="Blue Safe"
                  className="object-cover h-[100vh] relative z-10 w-full"
                />
                {/* Gradient overlay on top */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
              </div>
            </div>
          </div>

          {/* Drive Clear */}
          <div className="w-full mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold text-white mt-6 mb-3 text-center relative z-20">
                Drive Clear Coating
              </h2>
              <p className="text-gray-300 text-xl text-center relative z-20">
                Specially designed for driving, offering glare reduction and
                crystal clear vision.
              </p>
            </div>
            {/* Left side - Features in 2 columns */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <img
                  src="/svgs/uvprotection.svg"
                  alt="UV Protection"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  UV Protection
                </h3>
                <p className="text-gray-300">UV 400, Anti-Reflective</p>
              </div>

              <div className="text-center">
                <img
                  src="/svgs/scratchresistance.svg"
                  alt="Scratch Resistance"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  Scratch Resistance
                </h3>
                <p className="text-gray-300">Durable and long-lasting</p>
              </div>

              <div className="text-center">
                <img
                  src="/svgs/antireflective.svg"
                  alt="Anti Reflective Coating"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  Anti Reflective Coating
                </h3>
                <p className="text-gray-300">Reduces glare and reflections</p>
              </div>

              <div className="text-center">
                <img
                  src="/svgs/easytoclean.svg"
                  alt="Easy to Clean"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  Easy to Clean
                </h3>
                <p className="text-gray-300">Simple maintenance</p>
              </div>

              <div className="text-center">
                <img
                  src="/svgs/bluelight.svg"
                  alt="Blue Light Filter"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  Partially Filters Harmful Blue Rays
                </h3>
                <p className="text-gray-300">Protects eyes from screens</p>
              </div>

              <div className="text-center">
                <img
                  src="/svgs/glareprotection.svg"
                  alt="Glare Protection"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  Glare Protection
                </h3>
                <p className="text-gray-300">High reduction</p>
              </div>
            </div>

            {/* Right side - Card with blended image */}
            <div className="relative overflow-hidden flex flex-col justify-center">
              <div className="flex justify-center relative">
                {/* Image behind */}
                <Image
                  height={1000}
                  width={1000}
                  src="/coatings/drive.png"
                  alt="Drive Clear"
                  className="w-full h-[100vh] object-cover relative z-0"
                />
                {/* Gradient overlays */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10 rounded-xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Photo-Z */}
          <div className="w-full mx-auto">
            <h2 className="text-5xl font-bold text-white mt-6 mb-3 text-center relative z-10">
              Photo-Z Coating
            </h2>
            <p className="text-gray-300 text-xl text-center relative z-10">
              Adaptive lenses that adjust to light conditions, combining comfort
              and protection.
            </p>
            {/* Right side - Features in 2 columns */}
            <div className="grid grid-cols-4 mt-8 gap-6">
              <div className="text-center">
                <img
                  src="/svgs/uvprotection.svg"
                  alt="UV Protection"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  UV Protection
                </h3>
                <p className="text-gray-300">UV 400, Anti-Reflective</p>
              </div>

              <div className="text-center">
                <img
                  src="/svgs/scratchresistance.svg"
                  alt="Scratch Resistance"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  Scratch Resistance
                </h3>
                <p className="text-gray-300">Durable and long-lasting</p>
              </div>

              <div className="text-center">
                <img
                  src="/svgs/antireflective.svg"
                  alt="Anti Reflective Coating"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  Anti Reflective Coating
                </h3>
                <p className="text-gray-300">Reduces glare and reflections</p>
              </div>

              <div className="text-center">
                <img
                  src="/svgs/easytoclean.svg"
                  alt="Easy to Clean"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  Easy to Clean
                </h3>
                <p className="text-gray-300">Simple maintenance</p>
              </div>

              <div className="text-center">
                <img
                  src="/svgs/bluelight.svg"
                  alt="Blue Light Filter"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  Partially Filters Harmful Blue Rays
                </h3>
                <p className="text-gray-300">Protects eyes from screens</p>
              </div>

              <div className="text-center">
                <img
                  src="/svgs/glareprotection.svg"
                  alt="Glare Protection"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  Glare Protection
                </h3>
                <p className="text-gray-300">High reduction</p>
              </div>

              <div className="text-center">
                <img
                  src="/svgs/photochromatic.svg"
                  alt="Spin Coating"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-white mb-2">
                  Spin Coating for Photochromatic Effect
                </h3>
                <p className="text-gray-300">
                  Advanced light-adaptive technology
                </p>
              </div>
            </div>
            {/* Left side - Card with image, title, description */}
            <div className="relative overflow-hidden">
              <div className="flex justify-center relative">
                <Image
                  height={1000}
                  width={1000}
                  src="/coatings/photoz.png"
                  alt="Photo-Z Coating"
                  className="h-[100vh] w-full object-cover relative z-10"
                />
                {/* Gradient overlays for smooth blend */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
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
