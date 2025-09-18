"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import TextWithTexture from "@/components/textwithgoldentexture";
import HeroSection from "@/components/Services/heropage";

gsap.registerPlugin(ScrollTrigger);

interface CoatingFeature {
  title: string;
  benefits: string[];
  icon: string;
  color: string;
  gradient: string;
}

const CliffBlueSafeCoating = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);

  const images = [
    "/cliffcoating/new.png",
    "/cliffcoating/new1.png",
    "/cliffcoating/new2.png",
    "/cliffcoating/new3.png",
    "/cliffcoating/new4.png",
    "/cliffcoating/new5.png"
  ];

  const coatingFeatures: CoatingFeature[] = [
    {
      title: "Anti-Reflective",
      benefits: [
        "Eliminates reflections, increases light transmission",
        "Reduces unwanted glare for better visual comfort",
        "Makes lenses appear virtually invisible"
      ],
      icon: "/svgs/antireflective.svg",
      color: "from-blue-400 to-cyan-400",
      gradient: "bg-gradient-to-br from-blue-900/30 to-cyan-800/20",
    },
    {
      title: "Anti-Static/Radiation",
      benefits: [
        "Alleviates digital eye strain from extended screen use",
        "Repels dust particles for cleaner lenses",
        "Protects against harmful blue light radiation"
      ],
      icon: "/svgs/bluelight.svg",
      color: "from-purple-400 to-blue-400",
      gradient: "bg-gradient-to-br from-purple-900/30 to-blue-800/20",
    },
    {
      title: "Hydrophobic & Oleophobic",
      benefits: [
        "High contact angle repels oil and water",
        "Makes lenses more spot and smudge resistant",
        "Easy to clean with minimal effort"
      ],
      icon: "/svgs/easytoclean.svg",
      color: "from-cyan-400 to-teal-400",
      gradient: "bg-gradient-to-br from-cyan-900/30 to-teal-800/20",
    },
  ];

  // Animation for hero section
  useGSAP(() => {
    // Hero text animation
    gsap.fromTo(".hero-title", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
    
    // Hero image animation
    gsap.fromTo(".hero-image", 
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
    );
    
    // Feature cards animation
    gsap.fromTo(".feature-card", 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15,
        scrollTrigger: {
          trigger: featureCardsRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
    
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
       <HeroSection
               videoSrc="/homevideo/hero.mp4"
               title1="Cliff Blue Safe"
               title2="Coating"
               description="Advanced blue light protection coating for modern digital lifestyle. Premium coating technology protects your eyes from harmful blue light emitted by digital screens."
               imageSrc="/bluesafe/blue1.png"
               serviceNumber="03"
               buttonText="Contact Us"
               buttonLink="/Contact"
               floatingTitle = "Blue"
               floatingSubtitle = "Safe"
        />


      {/* Product Showcase Section */}
      {/* <section className="py-16 px-4 md:px-8 bg-black relative overflow-hidden">
        <div className="max-w-[1500px] w-full mx-auto p-4">
        
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
       
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800/50">
                <div className="aspect-square max-w-lg mx-auto relative overflow-hidden rounded-2xl bg-black/50">
                  <Image
                    src={images[activeImage]}
                    alt="Cliff Blue Safe Coating"
                    fill
                    className="object-contain transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
              
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
              </div>
              
          
              <div className="flex justify-center mt-8 space-x-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                      activeImage === index 
                        ? 'ring-2 ring-blue-400 shadow-lg shadow-blue-500/25' 
                        : 'ring-1 ring-gray-700 hover:ring-gray-500'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Product View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      activeImage === index ? 'bg-black/20' : 'bg-black/40'
                    }`}></div>
                  </button>
                ))}
              </div>
            </div>

            
            <div className="space-y-8">
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Protection</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Experience cutting-edge blue light filtering technology that safeguards your vision while maintaining exceptional optical clarity. Our proprietary coating process delivers uncompromising protection for digital professionals.
                </p>
                
                <div className="space-y-1">
                  {[
                    { title: '99% Blue Light Filter', desc: 'Blocks harmful high-energy blue light' },
                    { title: '98.5% Light Transmission', desc: 'Maintains crystal-clear visibility' },
                    { title: 'Hydrophobic Surface', desc: 'Water and smudge-resistant coating' },
                    { title: 'Class 2 Scratch Resistance', desc: 'Durable protection for daily use' }
                  ].map((feature, index) => (
                    <div key={index} className={`group relative py-6 px-4 transition-all duration-300 hover:bg-blue-500/5 ${index < 3 ? 'border-b border-gray-800' : ''}`}>
                      <div className="flex items-start">
                        <div>
                          <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                          <p className="text-sm text-gray-400">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-800/30">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Blue Light Filtering', value: '99%', color: 'text-blue-400' },
                    { label: 'Light Transmission', value: '98.5%', color: 'text-cyan-400' },
                    { label: 'Coating Thickness', value: '2.5μm', color: 'text-blue-400' },
                    { label: 'Durability Rating', value: 'Premium', color: 'text-cyan-400' }
                  ].map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700/50 last:border-0">
                      <span className="text-gray-400 text-sm">{spec.label}</span>
                      <span className={`font-semibold ${spec.color}`}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <BackToServicesButton />


      <div className="w-full h-[100vh]">
              <div className="bg-black rounded-2xl p-8  h-full flex items-center justify-center relative">
                {/* Image container - only the image zooms on hover */}
                <div className="relative">
                  <div className="group cursor-pointer overflow-hidden">
                    <Image
                      src="/detail.svg"
                      alt="Cliff Blue Safe Coating Technology"
                      width={900}
                      height={450}
                      className="rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                      style={{ width: '900px', height: '450px', objectFit: 'contain' }}
                    />
                    
                  </div>
                </div>
                
                {/* Content overlays - outside image container, not affected by hover */}
                {/* First content - Top Left */}
                <div className="absolute top-12 left-6 bg-black/80 backdrop-blur-sm rounded-lg p-4 max-w-xl z-10">
                  <h3 className="font-semibold text-white mb-1">Anti-Reflective</h3>
                  <p className="text-gray-300 text-xl">Eliminates reflections, increase light transmission. Decrease unwanted glare. Makes the lenses appear invisible.</p>
                </div>
                
                {/* Second content - Top Right */}
                <div className="absolute top-12 -right-10 bg-black/80 backdrop-blur-sm rounded-lg p-4 max-w-xl z-10">
                  <h3 className="font-semibold text-white mb-1">Anti-Static Electricity/ Anti-Radiation</h3>
                  <p className="text-gray-300 text-xl">Alleviate digital eye strain. Stays clean, repels dust particles.</p>
                </div>
                
                {/* Third content - Bottom Left */}
                <div className="absolute bottom-12 left-6 bg-black/80 backdrop-blur-sm rounded-lg p-4 max-w-xl z-10">
                  <h3 className="font-semibold text-white mb-1">Anti-Smudge</h3>
                  <p className="text-gray-300 text-xl">High contact angle, repels oil and water, makes lenses more spot resistant. Easy to clean.</p>
                </div>
              </div>
            </div>

      <section className="py-20 bg-black relative overflow-hidden">
  <div className="max-w-[1500px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left side - Image */}
      <div className="relative">
        
        <Image
          src="/bluesafe/driveclear.png"
          alt="Cliff Drive Clear Coating"
          width={1200}
          height={400}
          className="w-full object-cover"
          style={{ height: '390px' }}
        />
         <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
      </div>
      

      {/* Right side - Content */}
      <div className="lg:w-full">
        <div className="p-6 lg:p-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Cliff Drive Clear Coating
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Experience the freedom of the open road with Cliff Drive Clear Coating
            designed to deliver unmatched clarity and comfort for drivers. .
          </p>

          {/* Features list */}
          <div className="divide-y divide-gray-800 rounded-lg overflow-hidden">
            <div className="py-4 px-6">
              <div className="flex items-start">
                <span className="text-[#FFD700] font-medium mr-4 mt-1">1</span>
                <div>
                  <span className="text-white font-medium block">Superior Anti-Glare Performance</span>
                  <span className="text-gray-400 text-sm mt-1 block">Minimizes glare from headlights and reflective surfaces</span>
                </div>
              </div>
            </div>
            <div className="py-4 px-6">
              <div className="flex items-start">
                <span className="text-[#FFD700] font-medium mr-4 mt-1">2</span>
                <div>
                  <span className="text-white font-medium block">Enhanced Visual Contrast</span>
                  <span className="text-gray-400 text-sm mt-1 block">Improves definition of road signs and surroundings</span>
                </div>
              </div>
            </div>
            <div className="py-4 px-6">
              <div className="flex items-start">
                <span className="text-[#FFD700] font-medium mr-4 mt-1">3</span>
                <div>
                  <span className="text-white font-medium block">Comfort for Long Journeys</span>
                  <span className="text-gray-400 text-sm mt-1 block">Reduces eye fatigue during extended driving hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    
    </>
  );
};

export default CliffBlueSafeCoating;