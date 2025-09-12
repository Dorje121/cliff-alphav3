"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
    <div className="min-h-screen bg-black">
      {/* Top Image Section */}
      <section className="w-full bg-black mt-14 flex justify-center py-4">
        <div className="w-full max-w-[1500px] mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[60vh] bg-white">
            <Image
              src="/bluesafe/Bluesafe.jpg"
              alt="Cliff Blue Safe Coating"
              fill
              className="object-cover w-full h-[60vh]"
            />
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="min-h-screen flex flex-col justify-center items-center py-16 px-4 md:px-8 bg-black relative overflow-hidden">
        {/* Back Button */}
        <div className="absolute top-18 left-9 z-10">
                      <Link 
                        href="/Services" 
                        className="flex items-center justify-center bg-gray-900/90 hover:bg-gray-800 text-white px-3 py-1.5 rounded-md transition-all duration-300 backdrop-blur-sm border border-gray-800 hover:border-blue-500 shadow-lg shadow-blue-500/10"
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

        <div className="max-w-7xl w-full mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-900/20 rounded-full border border-blue-800/50 mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium tracking-wide">PREMIUM TECHNOLOGY</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Cliff Blue Safe
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Coating</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced blue light protection technology engineered for the digital professional
            </p>
          </div>

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
                    { icon: '🛡️', title: '99% Blue Light Filter', desc: 'Blocks harmful high-energy blue light' },
                    { icon: '✨', title: '98.5% Light Transmission', desc: 'Maintains crystal-clear visibility' },
                    { icon: '💧', title: 'Hydrophobic Surface', desc: 'Water and smudge-resistant coating' },
                    { icon: '🔒', title: 'Class 2 Scratch Resistance', desc: 'Durable protection for daily use' }
                  ].map((feature, index) => (
                    <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="text-2xl">{feature.icon}</div>
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
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
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

      {/* Hero Section */}
      <div ref={heroRef} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 15px 15px, rgba(255, 255, 255, 0.1) 2px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              {/* Service Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-lg font-medium border border-gray-700">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Advanced Coating Technology
                </span>
              </div>

              {/* Service Title */}
              <h1 className="hero-title text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">
                  CLIFF BLUE
                </span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                  SAFE COATING
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Advanced blue light filtering coating designed to protect your eyes from digital 
                eye strain while maintaining exceptional visual clarity for the modern digital lifestyle.
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <Link href="/Contact" className="group relative inline-block">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105">
                    <span className="relative z-10 flex items-center justify-center">
                      Get Protected Today
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
            <div className="lg:w-1/2 relative z-20">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl hero-image bg-black w-full max-w-6xl mx-auto h-[60vh]">
                  <Image
                    src="/bluesafe/Bluesafe.jpg"
                    alt="Cliff Blue Safe Coating Technology"
                    fill
                    className="object-cover w-full h-[60vh]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Tech Badge */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-xl border border-gray-700/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">99%</div>
                      <div className="text-xs text-gray-400 mt-1">
                        Blue Light Filtered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section ref={featureCardsRef} className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced <span className="text-blue-400">Protection Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our multi-layer coating technology provides comprehensive protection 
              and enhanced visual performance for all your digital devices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coatingFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card p-8 rounded-2xl bg-gray-800 border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  activeFeature === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
                onClick={() => setActiveFeature(index)}
              >
                {/* Icon */}
                <div className="flex justify-center items-center mb-6 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 text-center bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>

                {/* Benefits */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Deep Dive Section */}
      <section className="py-20 px-4 bg-gray-800">
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
                    <h3 className="font-semibold text-white mb-1">Selective Filtering</h3>
                    <p className="text-gray-400">Blocks harmful blue-violet light while allowing beneficial blue-turquoise light to pass through</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Vacuum Deposition</h3>
                    <p className="text-gray-400">Advanced application process ensures even coating and maximum durability</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Multi-Layer Protection</h3>
                    <p className="text-gray-400">Seven specialized layers provide comprehensive protection against blue light, glare, scratches, and smudges</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Our <span className="text-blue-400">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Cliff Blue Safe Coating has improved the digital experience for our customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">JD</div>
                <div>
                  <h4 className="font-semibold text-white">John Doe</h4>
                  <p className="text-blue-400 text-sm">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-300">
                &ldquo;As someone who spends 10+ hours daily in front of screens, Cliff Blue Safe has been a game-changer. 
                My eye strain has reduced significantly, and I sleep much better now.&rdquo;
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">SJ</div>
                <div>
                  <h4 className="font-semibold text-white">Sarah Johnson</h4>
                  <p className="text-blue-400 text-sm">Graphic Designer</p>
                </div>
              </div>
              <p className="text-gray-300">
                &ldquo;The anti-reflective properties are exceptional. Colors appear more vibrant and true to life, 
                which is crucial for my design work. I won&apos;t use any other coating now.&rdquo;
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">MR</div>
                <div>
                  <h4 className="font-semibold text-white">Michael Roberts</h4>
                  <p className="text-blue-400 text-sm">University Student</p>
                </div>
              </div>
              <p className="text-gray-300">
                &ldquo;I was skeptical at first, but after using Cliff Blue Safe for my study sessions, I&apos;ve noticed 
                significantly less eye fatigue. The hydrophobic coating also makes cleaning so much easier.&rdquo;
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-700 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Vision?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Experience the difference of advanced blue light protection with Cliff Blue Safe coating
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Contact">
              <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Get a Quote
              </button>
            </Link>
            <Link href="/Services">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Explore All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default CliffBlueSafeCoating;