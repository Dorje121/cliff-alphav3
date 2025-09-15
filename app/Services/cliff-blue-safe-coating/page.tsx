"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BackToServicesButton from "@/components/Services/BackToServicesButton";

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
      <div className="h-[80vh] to-black text-white relative overflow-hidden">
        <div ref={backgroundImageRef} className="absolute inset-0 h-full">
          <img
            src="/homevideo/eyewear.GIF"
            alt="Cliff Blue Safe Coating"
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
                  CLIFF BLUE SAFE
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  COATING
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Advanced blue light protection coating for modern digital
                lifestyle. Premium coating technology protects your eyes
                from harmful blue light emitted by digital screens.
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
                    alt="Cliff Blue Safe Coating Technology"
                    width={200}
                    height={300}
                    className="object-contain h-[300px] w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">02</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Blue</div>
                    <div className="text-xs text-gray-400">Safe</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Product Showcase Section */}
      <section className="py-16 px-4 md:px-8 bg-black relative overflow-hidden">
        <div className="max-w-[1500px] w-full mx-auto p-4">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Product Display */}
            <div className="relative">
              {/* Main Product Container */}
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
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
              </div>
              
              {/* Product Thumbnails */}
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

            {/* Product Information */}
            <div className="space-y-8">
              {/* Key Features */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Protection</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Experience cutting-edge blue light filtering technology that safeguards your vision while maintaining exceptional optical clarity. Our proprietary coating process delivers uncompromising protection for digital professionals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: '99% Blue Light Filter', desc: 'Blocks harmful high-energy blue light' },
                    { title: '98.5% Light Transmission', desc: 'Maintains crystal-clear visibility' },
                    { title: 'Hydrophobic Surface', desc: 'Water and smudge-resistant coating' },
                    { title: 'Class 2 Scratch Resistance', desc: 'Durable protection for daily use' }
                  ].map((feature, index) => (
                    <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 group">
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

              {/* Technical Specifications */}
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
      </section>


      

      {/* Technology Deep Dive Section */}
      <section className="py-20 px-4 bg-black ">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-6">
                How Our <span className="text-blue-400">Technology Works</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Cliff Blue Safe coating utilizes a multi-layer nanotechnology that selectively filters 
                harmful blue light while allowing beneficial light to pass through. This advanced 
                technology is applied through a vacuum deposition process for maximum durability and performance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Anti-Reflective
                    </h3>
                    <p className="text-gray-400">Eliminates reflections, increase light transmission. Decrease unwanted glare. Makes the lenses appear invisible.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Anti-Static Electricity/ Anti-Radiation</h3>
                    <p className="text-gray-400">Alleviate digital eye strain. Stays clean, repels dust particles.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Anti-Smudge</h3>
                    <p className="text-gray-400">-High contact angle, repels oil and water, makes lenses more spot resistant. Easy to clean.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-black rounded-2xl p-6 shadow-lg border border-gray-700">
                <Image
                  src="/detail.svg"
                  alt="Cliff Blue Safe Coating Technology"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackToServicesButton />

      <section className="py-12 bg-black">
        <div className="max-w-[1500px] mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="lg:w-full">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6">Blue Safe Technology</h2>
                <p className="text-gray-300 mb-6">
                  Experience the ultimate protection for your eyes with our advanced Blue Safe coating technology. 
                  Designed specifically for the digital age, this coating provides comprehensive protection against 
                  harmful blue light while maintaining crystal clear vision.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Advanced Blue Light Protection</h3>
                      <p className="text-gray-400 text-sm">Filters out harmful blue-violet light while allowing beneficial blue-turquoise light</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Enhanced Clarity</h3>
                      <p className="text-gray-400 text-sm">Maintains optimal visual acuity with minimal color distortion</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Digital Eye Strain Relief</h3>
                      <p className="text-gray-400 text-sm">Reduces eye fatigue and discomfort during extended screen time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="lg:w-full">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 h-full">
                <div className="relative h-full">
                  <Image
                    src="/bluesafe/clear.png"
                    alt="Cliff Blue Safe Coating"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
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