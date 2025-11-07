"use client";

import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import { ChevronLeft } from "lucide-react";

// Fixed images for each lens type
const lensImages = {
  clear: "/homeimage/single1.png",
  photoz: "/homeimage/photz.png",
  photochrome: "/homeimage/technology.png",
  polarized: "/homeimage/driveclear.png",
};

const ZennSeries = () => {
  const { clear, photoz, photochrome, polarized } = lensImages;

  const features = [
    {
      icon: "mdi:crystal-ball",
      title: "Clarity",
      description: "Crystal clear vision with superior optical quality",
    },
    {
      icon: "mdi:eye-check",
      title: "Eye Comfort",
      description: "Reduced eye strain with all-day wearing comfort",
    },
    {
      icon: "mdi:monitor-eye",
      title: "Digital Ready",
      description:
        "Optimized for digital device usage and blue light protection",
    },
    {
      icon: "mdi:shield-check",
      title: "Durable",
      description: "Scratch-resistant and long-lasting performance",
    },
    {
      icon: "mdi:account-cog",
      title: "Personalized",
      description: "Tailored to your unique prescription and lifestyle",
    },
    {
      icon: "mdi:ruler-square-compass",
      title: "Precise",
      description: "Advanced digital surfacing for accurate vision correction",
    },
  ];

  const lensTypes = [
    {
      name: "Clear",
      image: clear,
      description:
        "Perfect for indoor use and low-light conditions, providing true color vision.",
      href: "/products/single-vision",
    },
    {
      name: "Photoz",
      image: photoz,
      description:
        "Light-adaptive lenses that automatically adjust to changing light conditions.",
      href: "/products/single-vision",
    },
    {
      name: "Photochrome",
      image: photochrome,
      description:
        "Transitions from clear to dark outdoors, offering UV protection and comfort.",
      href: "/products/single-vision",
    },
    {
      name: "Polarized",
      image: polarized,
      description:
        "Reduces glare from reflective surfaces, ideal for driving and outdoor activities.",
      href: "/products/single-vision",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative pb-28">
      {/* Back Button */}
      <div className="max-w-[94rem] w-full mx-auto pl-8 pt-24 absolute z-40">
        <Link
          href="/products"
          className="inline-flex items-center text-[#FFD700] hover:text-amber-300 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Hero Section */}
      <div className="h-[80vh] w-full mx-auto relative overflow-hidden">
        {/* Animated Background Image */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            <Image
              src="/lenses/zenn.png"
              alt="Cliff Zen Series"
              fill
              className="object-cover opacity-40"
              priority
            />
          </motion.div>
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto pl-0 pr-8 py-8 font-poppins">
            <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight text-center">
              Cliff Zen Series
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              In today&apos;s connected world, people expect more than vision
              correction
            </p>
            <p className="text-yellow-300/80 text-lg max-w-4xl text-center mt-4">
              They want clarity, comfort, and adaptability in every aspect of
              their visual experience.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-8 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <Icon
                    icon={feature.icon}
                    width="44"
                    height="44"
                    className="text-[#FFD700]"
                  />
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300"></div>

                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-yellow-300/80 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content area divider */}
      <div className="relative bg-yellow-300/10 py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-1 h-16 bg-yellow-400 mx-auto"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl leading-12 text-yellow-300 mb-6">
            Experience the perfect harmony of advanced technology and elegant
            design. Cliff Zen Series brings you unparalleled visual comfort for
            the modern digital lifestyle.
          </h2>
        </div>
      </div>





      <section className="w-full py-16 bg-gradient-to-b from-black/80 to-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl montserrat text-[#FFD700] mb-6">
            Cliff Zen Single Vision Lenses
          </h2>
          <p className="text-lg md:text-xl text-yellow-300/80 max-w-4xl mx-auto mb-12">
            Experience crystal clear vision with our premium single vision lenses, designed for ultimate comfort and visual performance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
            {/* Premium Lens Card */}
            <div className="group relative h-96 w-full rounded-2xl overflow-hidden border border-yellow-900/30 hover:border-yellow-500/50 transition-all duration-300">
              <Image
                src={"/homeimage/cliffsingle.png"}
                alt="Premium+ Single Vision Lenses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Right Side Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yellow-400">Experience Unmatched Clarity</h3>
              <p className="text-yellow-100/80">
                Our single vision lenses are engineered with advanced digital ray path technology, providing you with:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Dynamic Optics for superior visual performance",
                  "Thinner and lighter lens design for all-day comfort",
                  "Precise point-by-point calculation for optimal clarity",
                  "Better aesthetics with advanced lens technology",
                  "Digital relief for reduced eye strain"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-yellow-400 rounded-full mr-3"></span>
                    <span className="text-yellow-100/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* <div className="pt-4">
                <Link 
                  href="/products/single-vision" 
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors group"
                >
                  <span className="font-medium">Explore Single Vision Lenses</span>
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Single Vision Lenses Section */}
      <div className="w-full mx-auto px-8 py-10 relative">
        {/* Title Section */}
        <div className="text-center py-16">
          <h2 className="text-2xl md:text-5xl font-medium montserrat text-[#FFD700] mb-4">
            Choose Your Cliff Single Vision Lenses
          </h2>
          <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl mx-auto">
            Select from our premium range of single vision lenses designed for
            every lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2 max-w-7xl mx-auto">
          {lensTypes.map((lens, index) => (
            <Link key={index} href={lens.href} className="group block h-full">
              <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-yellow-900/30 hover:border-yellow-800/50 transition-all duration-500">
                <div className="relative h-full w-full">
                  <Image
                    src={lens.image}
                    alt={lens.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {lens.name}
                    </h3>
                    <p className="text-amber-100/80 mb-4">{lens.description}</p>
                    <div className="flex items-center text-amber-400 group-hover:text-white transition-colors duration-300">
                      <span className="font-medium">Learn more</span>
                      <Icon
                        icon="mdi:arrow-right"
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        width="20"
                        height="20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>


       <section className="w-full py-16 bg-gradient-to-b from-black/80 to-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl montserrat text-[#FFD700] mb-6">
            Cliff ZenN Progressive Lenses
          </h2>
          <p className="text-lg md:text-xl text-yellow-300/80 max-w-4xl mx-auto mb-12">
            Experience seamless vision at all distances with our advanced progressive lens technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
            {/* Progressive Lens Image */}
            <div className="group relative h-96 w-full rounded-2xl overflow-hidden border border-yellow-900/30 hover:border-yellow-500/50 transition-all duration-300">
              <Image
                src={"/progressive/hello.png"}
                alt="ZenN Progressive Lenses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            
            </div>

            {/* Right Side Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yellow-400">Seamless Vision Transition</h3>
              <p className="text-yellow-100/80">
                Our ZenN Progressive lenses offer natural vision correction with:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Smooth transition between near, intermediate, and far vision",
                  "Wider reading and computer zones for better comfort",
                  "Reduced peripheral distortion for natural vision",
                  "Personalized for your unique visual needs",
                  "Premium anti-reflective coating included"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-yellow-400 rounded-full mr-3"></span>
                    <span className="text-yellow-100/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* <div className="pt-4">
                <Link 
                  href="/products/progressive" 
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors group"
                >
                  <span className="font-medium">Explore Progressive Lenses</span>
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Progressive Lenses Section */}
      <div className="w-full mx-auto px-8 py-10 pb-28 relative">
        {/* Title Section */}
        <div className="text-center py-16">
          <h2 className="text-2xl md:text-5xl font-medium montserrat text-[#FFD700] mb-4">
            Choose Your Cliff Zen Progressive Lenses
          </h2>
          <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl mx-auto">
            Advanced progressive technology for seamless vision at all distances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2 max-w-7xl mx-auto">
          {lensTypes.map((lens, index) => (
            <Link
              key={index}
              href="#"
              className="group block h-full"
            >
              <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-yellow-900/30 hover:border-yellow-800/50 transition-all duration-500">
                <div className="relative h-full w-full">
                  <Image
                    src={lens.image}
                    alt={`${lens.name} Progressive`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {lens.name}
                    </h3>
                    <p className="text-amber-100/80 mb-4">{lens.description}</p>
                    <div className="flex items-center text-amber-400 group-hover:text-white transition-colors duration-300">
                      <span className="font-medium">Learn more</span>
                      <Icon
                        icon="mdi:arrow-right"
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        width="20"
                        height="20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

     
     

      {/* FAQ Section */}
      <div className="w-full max-w-9xl mx-auto pb-24 bg-yellow-300/10 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl montserrat text-center text-yellow-300 mb-16">
            Any Queries?
          </h2>

          <div className="space-y-2">
            {/* FAQ Item 1 */}
            <div className="bg-black/50 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    What makes Zen Series different from other lenses?
                  </h3>
                  <svg
                    className="w-6 h-6 text-yellow-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
                  <p>
                    Cliff Zen Series combines advanced digital surfacing
                    technology with premium materials to deliver exceptional
                    visual clarity, all-day comfort, and superior durability.
                    Each lens is optimized for modern digital lifestyles with
                    enhanced blue light protection and reduced eye strain.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-black/50 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    Are Zen Series lenses suitable for digital device usage?
                  </h3>
                  <svg
                    className="w-6 h-6 text-yellow-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
                  <p className="mt-4 text-yellow-200/90">
                    Absolutely! Zen Series lenses are specifically designed for
                    today&apos;s digital world. They feature advanced blue light
                    filtering technology, reduced glare protection, and
                    optimized optical zones that make them perfect for extended
                    computer, tablet, and smartphone usage.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-black/50 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    How long do Zen Series lenses last?
                  </h3>
                  <svg
                    className="w-6 h-6 text-yellow-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
                  <p>
                    With proper care, Cliff Zen Series lenses are designed to
                    maintain their optical clarity and performance for years.
                    The scratch-resistant coating and durable materials ensure
                    long-lasting quality. We recommend regular cleaning with
                    appropriate lens solutions and storage in protective cases
                    when not in use.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-black/50 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    Can I get Zen Series lenses with my prescription?
                  </h3>
                  <svg
                    className="w-6 h-6 text-yellow-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
                  <p>
                    Yes! Cliff Zen Series lenses are available in both single
                    vision and progressive designs to accommodate virtually all
                    prescriptions. Our advanced digital surfacing technology
                    ensures precise customization to your specific visual needs,
                    whether you require correction for nearsightedness,
                    farsightedness, astigmatism, or presbyopia.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZennSeries;
