"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const imageRef = useRef<HTMLImageElement>(null);
  const imageMainRef = useRef<HTMLDivElement>(null);
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

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
        "Eliminates reflections, increase light transmission.",
        "Decrease unwanted glare.",
        "Makes the lenses appear invisible.",
      ],
      icon: "/svgs/antireflective.svg",
      color: "from-white to-gray-300",
      gradient: "bg-gradient-to-br from-gray-800/30 to-gray-700/20",
    },
    {
      title: "Anti-Static Electricity/ Anti-Radiation",
      benefits: [
        "Alleviate digital eye strain.",
        "Stays clean, repels dust particles.",
      ],
      icon: "/svgs/bluelight.svg",
      color: "from-gray-200 to-gray-400",
      gradient: "bg-gradient-to-br from-gray-700/30 to-gray-600/20",
    },
    {
      title: "Anti-Smudge",
      benefits: [
        "High contact angle, repels oil and water,",
        "makes lenses more spot resistant.",
        "Easy to clean.",
      ],
      icon: "/svgs/easytoclean.svg",
      color: "from-gray-100 to-gray-300",
      gradient: "bg-gradient-to-br from-gray-600/30 to-gray-800/20",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageMainRef.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    tl.from(imageRef.current, { scale: 1.5, opacity: 0, duration: 1 });

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
<section className="min-h-screen bg-gray-50 flex flex-col z-4">

  {/* Main Product Image */}
  <div className="flex justify-center items-center flex-grow mt-16">
    <Image
      src={images[activeImage]} // use active image state
      alt="Main Product"
      width={700}
      height={500}
      className="object-contain"
    />
  </div>

  {/* Thumbnails Grid - Fixed at bottom */}
  <div className="grid grid-cols-3 md:grid-cols-5 gap-4 py-8 max-w-4xl mx-auto">
    {images.slice(1).map((image, index) => (
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
            activeImage === index + 1 ? 'border-blue-500 border-2' : 'border-gray-300'
          }`}
          onClick={() => setActiveImage(index + 1)}
        />
      </div>
    ))}
  </div>
</section>


      {/* Hero Section with Service Information */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden z-20">
        {/* Background Image with Overlay */}
        <div ref={backgroundImageRef} className="absolute inset-0">
          <Image
            src="/c2.jpeg"
            alt="Cliff Blue Safe Coating"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 container max-w-screen mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 min-h-screen">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              {/* Service Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full text-black text-lg font-medium border border-yellow-300/30">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Premium Coating Technology
                </span>
              </div>

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  CLIFF BLUE
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  SAFE COATING
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Advanced blue light filtering coating designed to protect your
                eyes from digital eye strain while maintaining crystal-clear
                vision for modern digital lifestyle.
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <Link href="/Contact" className="group relative inline-block">
                  <button className="px-8 py-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full text-black font-semibold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105">
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
            <div className="lg:w-1/2 relative z-20">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/c2.jpeg"
                    alt="Cliff Blue Safe Coating Technology"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">03</span>
                  </div>

                  {/* Tech Badge */}
                </div>

                <div className="absolute -bottom-6 -left-6 w-32 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">99%</div>
                    <div className="text-xs text-gray-400">
                      Blue Light Blocked
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Section 2 */}
      <div
        ref={sectionRef}
        className="min-h-screen bg-black text-white relative overflow-hidden z-20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-600/20 rounded-full blur-3xl floating-elements"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl floating-elements"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-gray-700/10 rounded-full blur-3xl floating-elements"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-30 pt-32 pb-20">
          <div className="max-w-screen mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                Premium{" "}
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Lens Coatings
                </span>
              </h1>
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent max-w-3xl mx-auto">
                Advanced protection and clarity for your vision with
                cutting-edge coating technology
              </p>
            </div>

            {/* Interactive Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {coatingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-102 h-[450px] ${
                    activeFeature === index ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onClick={() => setActiveFeature(index)}
                >
                  <div
                    className={`
                    ${feature.gradient} 
                    backdrop-blur-lg rounded-2xl p-8 border border-white/10 
                    hover:border-white/30 transition-all duration-300 h-full flex flex-col
                    ${
                      activeFeature === index
                        ? "border-white/30 shadow-2xl"
                        : ""
                    }
                  `}
                  >
                    {/* Icon */}
                    <div className="flex justify-center items-center mb-6 w-24 h-24 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={96}
                        height={96}
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-2xl font-bold mb-6 text-center bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                    >
                      {feature.title}
                    </h3>

                    {/* Benefits */}
                    <div className="space-y-3 flex-grow">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} mt-2 flex-shrink-0`}
                          ></div>
                          <p className="text-gray-300 leading-relaxed">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Active Indicator */}
                    {activeFeature === index && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 rounded-2xl blur opacity-30 -z-10 animate-pulse"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="h-auto opacity-100 flex items-center z-30 justify-center"
              ref={imageMainRef}
            >
              <Image
                src="/detail.svg"
                alt="Description of image"
                ref={imageRef}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* Interactive Lens Visualization */}
            <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Experience the Difference
                </h2>
                <p className="text-gray-400 text-lg">
                  See how our advanced coatings transform your vision experience
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Full Width Blue Coating Image */}
      <div className="w-full bg-black py-16 relative z-50 overflow-hidden">
        <Image
          src="/cliffcoating/bluee.png"
          alt="Cliff Blue Coating"
          width={1200}
          height={800}
          className="w-full h-[80vh] object-cover object-bottom"
        />
      </div>

      <div className="min-h-screen bg-black text-white relative overflow-hidden z-20">
        <div className="max-w-screen mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Before/After Comparison */}
                <div className="relative">
                  <div className="aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <Image
                      src="/clear.png"
                      alt="Before"
                      fill
                      className="object-cover"
                    />

                    {/* Animated coating effects */}
                    <div className="absolute inset-0 opacity-60">
                      <div className="absolute top-4 left-4 w-16 h-16 bg-gray-400/30 rounded-full blur-xl animate-pulse"></div>
                      <div
                        className="absolute bottom-8 right-8 w-12 h-12 bg-gray-500/30 rounded-full blur-lg animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div
                        className="absolute top-1/2 right-4 w-8 h-8 bg-gray-300/30 rounded-full blur-md animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="space-y-6">
                  {coatingFeatures[activeFeature].benefits.map(
                    (benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${coatingFeatures[activeFeature].color}`}
                        ></div>
                        <p className="text-white font-medium">{benefit}</p>
                      </div>
                    )
                  )}

                  <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-xl border border-gray-500/30">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Premium Quality Guarantee
                    </h4>
                    <p className="text-gray-300">
                      Our advanced coating technology ensures long-lasting
                      protection and crystal-clear vision for years to come.
                    </p>
                  </div>
                </div>
          </div>
        </div>
      </div>

      <BackToServicesButton />
    </>
  );
};

export default CliffBlueSafeCoating;
