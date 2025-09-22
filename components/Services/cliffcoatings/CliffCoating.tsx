"use client";
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import { gsap } from "gsap";
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


  // Array of 5 photos
  const photos = [
    "/cliffcoating/new.png",
    "/cliffcoating/new1.png",
    "/cliffcoating/new2.png",
    "/cliffcoating/new3.png",
    "/cliffcoating/new4.png",
    "/cliffcoating/new5.png",
  ];




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
        backgroundImage="/product/01.jpeg"
        rightImage="/product/01.jpeg"
        serviceNumber="01"
        badgeTitle="CLIFF"
        badgeSubtitle="Coatings"
      />


      {/* Blue Safe */}
      <div className="w-full mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-16 mb-3 text-center relative z-20">
            Blue Safe Coating
          </h2>
          <p className="text-zinc-300 text-xl text-center relative z-10 max-w-2xl">
            Protects against harmful UV rays and filters blue light for comfortable
            digital screen use.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {/* Feature */}
          <div className="text-center">
            <img
              src="/svgs/uvprotection.svg"
              alt="UV Protection"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-xl text-white mb-2">UV Protection</h3>
            <p className="text-zinc-300">Blocks harmful UV rays</p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/antireflective.svg"
              alt="Anti Reflective Coating"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-xl text-white mb-2">Anti Reflective</h3>
            <p className="text-zinc-300">Reduces glare and reflections</p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/easytoclean.svg"
              alt="Easy to Clean"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-xl text-white mb-2">Easy to Clean</h3>
            <p className="text-zinc-300">Simple maintenance</p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/bluelight.svg"
              alt="Blue Light Filter"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-xl text-white mb-2">Blue Light Filter</h3>
            <p className="text-zinc-300">Protects eyes from screens</p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/scratchresistance.svg"
              alt="Scratch Resistance"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-xl text-white mb-2">Scratch Resistance</h3>
            <p className="text-zinc-300">Durable and long-lasting</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden mt-16">
          <div className="flex justify-center relative">
            <Image
              height={1000}
              width={1000}
              src="/bluesafe/image.png"
              alt="Blue Safe"
              className="h-[100vh] w-full object-cover relative z-10 rounded-xl"
            />
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
          </div>
        </div>
      </div>



      {/* Drive Clear */}
      <div className="w-full mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-6 mb-3 text-center relative z-20">
            Drive Clear Coating
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl text-center relative z-20 max-w-2xl">
            Specially designed for driving, offering glare reduction and crystal clear vision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-10 mt-12">
          <div className="text-center">
            <img
              src="/svgs/uvprotection.svg"
              alt="UV Protection"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              UV Protection
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              UV 400, Anti-Reflective
            </p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/scratchresistance.svg"
              alt="Scratch Resistance"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Scratch Resistance
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Durable and long-lasting
            </p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/antireflective.svg"
              alt="Anti Reflective Coating"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Anti Reflective Coating
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Reduces glare and reflections
            </p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/easytoclean.svg"
              alt="Easy to Clean"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Easy to Clean
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Simple maintenance
            </p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/bluelight.svg"
              alt="Blue Light Filter"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Partially Filters Harmful Blue Rays
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Protects eyes from screens
            </p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/glareprotection.svg"
              alt="Glare Protection"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Glare Protection
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              High reduction
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden flex flex-col justify-center mt-12">
          <div className="flex justify-center relative">
            <Image
              height={1000}
              width={1000}
              src="/coatings/drive.png"
              alt="Drive Clear"
              className="w-full h-[50vh] sm:h-[70vh] lg:h-[100vh] object-cover relative z-0 rounded-xl"
            />
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10 rounded-xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10 rounded-xl"></div>
          </div>
        </div>

      </div>


      {/* Photo-Z */}
      <div className="w-full mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-6 mb-3 text-center relative z-10">
          Photo-Z Coating
        </h2>
        <p className="text-zinc-300 text-base sm:text-lg md:text-xl text-center relative z-10 max-w-2xl mx-auto">
          Adaptive lenses that adjust to light conditions, combining comfort and protection.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 mt-10">
          <div className="text-center">
            <img
              src="/svgs/uvprotection.svg"
              alt="UV Protection"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              UV Protection
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              UV 400, Anti-Reflective
            </p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/scratchresistance.svg"
              alt="Scratch Resistance"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Scratch Resistance
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Durable and long-lasting
            </p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/antireflective.svg"
              alt="Anti Reflective Coating"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Anti Reflective Coating
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Reduces glare and reflections
            </p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/easytoclean.svg"
              alt="Easy to Clean"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Easy to Clean
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Simple maintenance
            </p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/bluelight.svg"
              alt="Blue Light Filter"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Filters Harmful Blue Rays
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Protects eyes from screens
            </p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/glareprotection.svg"
              alt="Glare Protection"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Glare Protection
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              High reduction
            </p>
          </div>

          <div className="text-center">
            <img
              src="/svgs/photochromatic.svg"
              alt="Photochromatic Effect"
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Spin Coating for Photochromatic Effect
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Advanced light-adaptive technology
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden mt-12">
          <div className="flex justify-center relative">
            <Image
              height={1000}
              width={1000}
              src="/coatings/photoz.png"
              alt="Photo-Z Coating"
              className="w-full h-[50vh] sm:h-[70vh] lg:h-[100vh] object-cover relative z-10 rounded-xl"
            />
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
          </div>
        </div>
      </div>




      <BackToServicesButton />
    </>
  );
};

export default CliffCoatings;
