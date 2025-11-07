"use client";

import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import { ChevronLeft } from "lucide-react";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/comparision/Comparision";

const product = {
  id: "02",
  title: "VERSATILE PROGRESSIVE",
  image: "/homeimage/progressive.jpg",
  video: "/videos/progressive.webm",
  description:
    "Cliff Versatile Progressive Lenses offer a sophisticated solution for presbyopia, providing clear vision at all distances with a smooth, natural transition. Our advanced lens technology ensures maximum comfort and visual acuity whether you're reading, working on a computer, or driving.",
  features: [
    {
      icon: "mdi:eye-arrow-right",
      title: "Wide Viewing Zones",
      description:
        "Expanded distortion-free areas for comfortable reading and computer use",
    },
    {
      icon: "mdi:weather-sunny",
      title: "Light-Adaptive",
      description:
        "Photochromic technology that adapts to changing light conditions",
    },
    {
      icon: "mdi:shield-sun",
      title: "100% UV Protection",
      description: "Complete protection from harmful UV rays up to 400nm",
    },
    {
      icon: "mdi:glass-cocktail",
      title: "Scratch-Resistant",
      description:
        "Durable coating that protects against daily wear and scratches",
    },
    {
      icon: "mdi:image-filter-center-focus",
      title: "Reduced Distortion",
      description: "Minimized peripheral distortion for natural vision",
    },
    {
      icon: "mdi:contrast-circle",
      title: "Enhanced Contrast",
      description: "Improved clarity and contrast in all lighting conditions",
    },
  ],
  technology: {
    title: "Adaptive Focus Technology",
    description:
      "Our Versatile Progressive lenses incorporate cutting-edge Adaptive Focus Technology that dynamically adjusts to your visual needs. The lenses feature a sophisticated design with optimized progression corridors, ensuring a wider field of view and smoother transitions between distances. The precision-crafted surface provides consistent visual performance across all gaze angles.",
    benefits: [
      {
        title: "Natural Vision",
        description:
          "Smooth, natural transitions between near, intermediate, and distance vision",
      },
      {
        title: "Wider Viewing Zones",
        description: "Expanded areas for comfortable reading and computer use",
      },
      {
        title: "Faster Adaptation",
        description:
          "Reduced adaptation time compared to conventional progressives",
      },
    ],
  },
  benefits: [
    "Crystal clear vision at all distances",
    "Reduced eye strain during prolonged screen use",
    "Enhanced depth perception",
    "Improved night vision",
    "Ideal for active lifestyles",
    "Stylish and lightweight design",
  ],
  slug: "versatile-progressive",
  comparisonImages: {
    standard: "progressive.png",
    product: "progressive.png",
  },
  comparisonLabels: {
    standard: "STANDARD PROGRESSIVE",
    product: "CLIFF VERSATILE PROGRESSIVE",
  },
  durabilityAndCare: {
    title: "CLIFF DuraVision Lens Coatings",
    subtitle: "Durability & Care",
    description:
      "Advanced coatings that protect your investment and enhance visual clarity.",
  },
  professionalContent: {
    description:
      "The CLIFF Versatile Progressive lens is designed for today's dynamic lifestyles, offering exceptional visual comfort and performance. Whether your patients are professionals working long hours on digital devices or active individuals who demand clear vision at all distances, these lenses deliver uncompromising quality and comfort.",
    benefits: [
      "Reduced adaptation period for new wearers",
      "Enhanced visual comfort in all lighting conditions",
      "Ideal for patients with active, on-the-go lifestyles",
      "Available in various materials including high-index and photochromic options",
    ],
    features: [
      "Customizable for individual prescriptions",
      "Multiple design options for different visual needs",
      "Compatible with all frame types",
      "Premium anti-reflective treatments available",
    ],
  },
};

const VersatileProgressivePage = () => {
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
              src={product.image}
              alt={product.title}
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
              {product.title}
            </h1>
            <p className="text-yellow-300/80 text-lg max-w-4xl text-center mt-4">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Technology and Benefits Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {product.technology.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-8 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      icon={
                        index === 0
                          ? "mdi:eye-check"
                          : index === 1
                          ? "mdi:monitor-eye"
                          : "mdi:clock-fast"
                      }
                      width="44"
                      height="44"
                      className="text-[#FFD700]"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-yellow-300/80 text-lg leading-relaxed">
                    {benefit.description}
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
            Designed for dynamic lifestyles, Cliff Versatile Progressive Lenses
            offer seamless transitions between near, intermediate, and distance
            vision. Experience unparalleled comfort and clarity in every aspect
            of your daily life.
          </h2>
        </div>
      </div>

      {/* Image Comparison Section */}
      <ImageComparison className="aspect-16/9 w-full h-[80vh]" enableHover>
        <ImageComparisonImage
          src={`/homeimage/${product.comparisonImages.standard}`}
          className="blur-sm"
          alt="Standard Progressive Lens"
          position="left"
        />
        <ImageComparisonImage
          src={`/homeimage/${product.comparisonImages.product}`}
          alt="Cliff Versatile Progressive Lens"
          position="right"
        />
        <ImageComparisonSlider className="w-0.5 bg-yellow-400/50 backdrop-blur-xs">
          <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400"></div>
        </ImageComparisonSlider>
      </ImageComparison>

      {/* Features Section */}
      <div className="w-full mx-auto px-8 py-10 relative">
        {/* Title Section */}
        <div className="text-center py-16">
          <h2 className="text-2xl md:text-5xl font-medium montserrat text-[#FFD700] mb-4">
            Advanced Features
          </h2>
          <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl mx-auto">
            Experience the next generation of progressive lens technology with
            features designed for modern life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2 max-w-7xl mx-auto">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#FFD700]/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/50"
            >
              <div className="relative z-10">
                <Icon
                  icon={feature.icon}
                  width="48"
                  height="48"
                  className="text-[#FFD700] mb-6"
                />
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
                    What are progressive lenses?
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
                    Progressive lenses, also known as multifocal lenses, provide
                    a seamless progression of multiple lens powers for clear
                    vision at all distances - near, intermediate, and far.
                    Unlike bifocals with visible lines, progressives offer a
                    smooth, natural transition between different vision zones.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-black/50 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    How long does it take to adapt to progressive lenses?
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
                    Most people adapt to Cliff Versatile Progressive lenses
                    within a few days to two weeks. Our advanced technology with
                    wider viewing zones and reduced peripheral distortion
                    significantly shortens the adaptation period compared to
                    conventional progressive lenses.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-black/50 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    Are progressive lenses suitable for computer work?
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
                    Absolutely! Cliff Versatile Progressive lenses are
                    specifically designed with optimized intermediate zones that
                    make them ideal for computer work and digital device use.
                    The wider viewing areas reduce eye strain during prolonged
                    screen time.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-black/50 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    Can I wear progressive lenses for driving?
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
                    Yes, our progressive lenses are excellent for driving. The
                    distance zone provides clear vision for road signs and
                    traffic, while the intermediate zone is perfect for checking
                    your dashboard. The enhanced contrast and light-adaptive
                    technology also improve night driving visibility.
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

export default VersatileProgressivePage;
