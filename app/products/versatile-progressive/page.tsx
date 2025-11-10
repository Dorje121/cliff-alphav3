"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import { ChevronLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
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
      icon: "/featureicons/Shamir_Blue-Xero-Icons_Shamir-icons-UV-Protection.svg",
      title: "UV Protection",
      description: "UV protection up to 400nm even in your clear eyeglasses.",
    },
    {
      icon: "/featureicons/Improved-visual-comfort-.svg",
      title: "Better Vision",
      description: "Crystal clear vision at all distances with smooth transitions.",
    },
    {
      icon: "/featureicons/Undistorted-view.svg",
      title: "Comfort & Style",
      description: "Thin and light lenses for all-day comfort and good looks.",
    },
    {
      icon: "/featureicons/Reduced-eye-strain-and-fatigue.svg",
      title: "Wide Viewing Zones",
      description: "Expanded areas for comfortable reading and computer use",
    },
    {
      icon: "/featureicons/Reduced-eye-strain-and-fatigue.svg",
      title: "Reduced Distortion",
      description: "Minimized peripheral distortion for natural vision",
    },
    {
      icon: "/featureicons/Improved-visual-comfort-.svg",
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
      {/* <div className="max-w-[94rem] w-full mx-auto pl-8 pt-24 absolute z-40">
        <Link
          href="/products"
          className="inline-flex items-center text-[#FFD700] hover:text-amber-300 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>
      </div> */}

    

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

        {/* Breadcrumb */}
      <div className="z-50 bg-black/80 backdrop-blur-sm py-3 border-b border-yellow-500/20">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Versatile Progressive' }
          ]}
          className="max-w-9xl mx-auto px-6 sm:px-6 lg:px-10"
        />
      </div>

      {/* Technology and Benefits Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-24">
            {product.technology.benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-6">
                  <Image
                    src={
                      index === 0 
                        ? "/featureicons/Improved-visual-comfort-.svg"
                        : index === 1 
                        ? "/featureicons/Reduced-eye-strain-and-fatigue.svg"
                        : "/featureicons/Undistorted-view.svg"
                    }
                    alt={benefit.title}
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(10000%) hue-rotate(0deg)'
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#FFD700] text-lg leading-relaxed">
                  {benefit.description}
                </p>
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

    


          <div className="w-full mx-auto px-8 pb-28 pt-10 relative">
            {/* Title Section */}
            <div className="text-center py-16">
              <h2 className="text-2xl md:text-5xl font-medium montserrat text-[#FFD700] mb-4">
                Explore Your Progressive Verstile Lense Options
              </h2>
              <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl mx-auto">
                Choose from a range of lens options to suit your lifestyle and
                vision needs.
              </p>
            </div>
           



            <div className="flex flex-wrap justify-center gap-8 py-6">
        <div className="w-full sm:max-w-[400px] md:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.5rem)]">

          {/* Card 1 */}
          <Link href="#" className="group block h-full">
            <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-yellow-900/30 hover:border-yellow-800/50 transition-all duration-500">
              <div className="relative h-full w-full">
                <Image
                  src={"/cliffcoating/bluee.png"}
                  alt="Blue Safe Lenses"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white">
                      Cliff Blue Safe
                    </h3>
                    <p className="text-yellow-300 text-sm font-medium">
                      Progressive Versatile Lenses
                    </p>
                  </div>
                  <p className="text-amber-100/80 mt-2 mb-4">
                    Protect your eyes from digital screens
                  </p>
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
          </div>

          {/* Card 2 */}
          <div className="w-full sm:max-w-[400px] md:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.5rem)]">
          <Link href="#" className="group block h-full">
            <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-yellow-900/30 hover:border-yellow-800/50 transition-all duration-500">
              <div className="relative h-full w-full">
                <Image
                  src={"/cliffcoating/Drive-safe.jpg"}
                  alt="Drive Clear Lenses"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white">
                       Cliff Photo Z
                    </h3>
                    <p className="text-yellow-300 text-sm font-medium">
                      Progressive Versatile Lenses
                    </p>
                  </div>
                  <p className="text-amber-100/80 mt-2 mb-4">
                    Seamless vision at all distances on the road
                  </p>
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
          </div>

          
         
        </div>
          </div>


           {/* FAQ Section */}
      <div className="w-full max-w-9xl mx-auto pb-24  bg-yellow-300/10 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl montserrat text-center text-yellow-300 mb-16">
            Any Queries?
          </h2>

          <div className="space-y-0 rounded-xl overflow-hidden">
            {/* FAQ Item 1 */}
            <div className="border-t border-b border-yellow-500/30 hover:border-yellow-500/50 border-l-0 border-r-0 border-[1px] transition-colors duration-200">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                      What are cliff progressive Versatile lenses?
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
                <div className="px-6 pb-6 pt-2 text-[#FFD700]">
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
            <div className="border-t-0 border-b border-yellow-500/30 hover:border-yellow-500/50 border-l-0 border-r-0 border-[1px] transition-colors duration-200">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    What is the difference between single vision and progressive
                    lenses?
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
                <div className="px-6 pb-6 pt-2 text-[#FFD700]">
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
            <div className="border-t-0 border-b border-yellow-500/30 hover:border-yellow-500/50 border-l-0 border-r-0 border-[1px] transition-colors duration-200">
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
                <div className="px-6 pb-6 pt-2 text-[#FFD700]">
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
            <div className="border-t-0 border-b border-yellow-500/30 hover:border-yellow-500/50 border-l-0 border-r-0 border-[1px] transition-colors duration-200">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                     Can I wear cliff progressive lenses for driving?
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
                <div className="px-6 pb-6 pt-2 text-[#FFD700]">
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
