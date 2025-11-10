"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/comparision/Comparision";
import Breadcrumb from "@/components/Breadcrumb";

const ProductPage = () => {
  const features = [
    {
      icon: "/featureicons/Shamir_Blue-Xero-Icons_Shamir-icons-UV-Protection.svg",
      title: "UV Protection",
      description: "UV protection up to 400nm  even in your clear eyeglasses.",
    },
    {
      icon: "/featureicons/Improved-visual-comfort-.svg",
      title: "Better Vision",
      description:
        "Better vision near or far  with optics tailored to your needs.",
    },
    {
      icon: "/featureicons/Reduced-eye-strain-and-fatigue.svg",
      title: "Comfort & Style",
      description: "Thin and light lenses for good looks and comfort.",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative pb-28 flex flex-col">
      {/* Back Button */}
      {/* Hero Section */}
      <div className="flex-none">
        <div className="h-[80vh] w-full mx-auto relative overflow-visible">
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
                src={"/product/1.jpg"}
                alt={"Cliff Lens"}
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
                Single Vision Lenses
              </h1>
              <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
                Sharper Vision. Smarter Design.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumb - Sticky */}
      <div className=" z-50 bg-black/80 backdrop-blur-sm py-3 border-b border-yellow-500/20">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Single Vision Lenses' }
          ]}
          className="max-w-9xl  mx-auto px-6 sm:px-6 lg:px-10"
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow ">
        {/* Technology and Benefits Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-24">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-40 h-40 mb-10">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={160}
                    height={160}
                    className="w-full h-full object-contain"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(10000%) hue-rotate(0deg)'
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  {feature.title}
                </h3>
                <p className="text-yellow-300/80 text-lg leading-relaxed">
                  {feature.description}
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
            Designed for everyday clarity, Cliff Single Vision Lenses are
            optimized to your unique prescription and lifestyle. Enjoy sharper
            focus, wider vision, and the comfort your eyes deserve because every
            detail matters.
          </h2>
        </div>
      </div>

      {/* Image comparison with side content */}
      <div className="w-full mx-auto px-10 py-10 relative flex flex-col md:flex-row gap-20 items-center">
        {/* Left side - Image comparison */}
        <div className="w-full   md:w-1/2">
          <ImageComparison className="aspect-[4/4] w-full h-auto max-h-[80vh]" enableHover>
            <ImageComparisonImage
              src="/homeimage/cliffsingle.png"
              className="object-cover"
              alt="Single Vision Lens Example 1"
              position="left"
            />
            <ImageComparisonImage
              src="/homeimage/cliffsingle2.png"
              className="object-cover"
              alt="Single Vision Lens Example 2"
              position="right"
            />
            <ImageComparisonSlider className="w-0.5 bg-yellow-400/50 backdrop-blur-xs">
              <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400"></div>
            </ImageComparisonSlider>
          </ImageComparison>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="space-y-2 mb-6">
            <h2 className="text-3xl md:text-5xl font-medium montserrat text-[#FFD700]">
              See naturally. Feel effortlessly.
            </h2>
            <p className="text-[#FFD700] text-xl font-light">
              Choose Cliff Single Vision, where clarity meets comfort.
            </p>
          </div>
          <p className="text-lg md:text-xl !text-[#FFD700] max-w-3xl mx-auto">
            Cliff Single Vision lenses deliver uniform clarity from edge to edge, reducing distortion and eye strain.
With advanced surface refinement and ultra-thin materials, you&apos;ll enjoy a lighter, sleeker fit that looks as good as it feels.
          </p>
        </div>
      </div>




      {/* Cards Section */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium montserrat text-[#FFD700] mb-4">
            Explore Your Options for Cliff Single Vision Lenses
          </h2>
          <p className="text-lg text-[#FFD700] poppins max-w-3xl mx-auto">
            Discover the perfect lenses tailored to your vision needs and lifestyle
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
                      Single Vision Lenses
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
                      Cliff Drive Clear
                    </h3>
                    <p className="text-yellow-300 text-sm font-medium">
                      Single Vision Lenses
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

          {/* Card 3 */}
          <div className="w-full sm:max-w-[400px] md:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.5rem)]">
          <Link href="#" className="group block h-full">
            <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-yellow-900/30 hover:border-yellow-800/50 transition-all duration-500">
              <div className="relative h-full w-full">
                <Image
                  src={"/cliffcoating/photoZ.jpg"}
                  alt="Photo Z Lenses"
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
                      Single Vision Lenses
                    </p>
                  </div>
                  <p className="text-amber-100/80 mt-2 mb-4">
                    Protect your eyes from dust and harmful rays while maintaining your style
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
                    What are single vision lenses?
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
                    Single vision glasses are the most common lens type. They
                    have only one prescription power throughout the entire lens
                    and correct one field of vision  near or far. They&apos;re
                    prescribed for people who are short-sighted (myopic) or
                    long-sighted (hyperopic), and can also be used to correct
                    astigmatism to see clearly in the distance and close up.
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
                  <p className="mt-4 text-[#FFD700]">
                    Progressive lenses have multiple prescriptions in one lens
                    to correct near, intermediate and distance vision.
                    They&apos;re a common choice for people over 45 who have
                    trouble focusing from far away to up close due to the
                    natural aging of their eyes. These lenses, also called
                    varifocals, require you to look through different parts of
                    the lens to see clearly at different distances.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-t-0 border-b border-yellow-500/30 hover:border-yellow-500/50 border-l-0 border-r-0 border-[1px] transition-colors duration-200">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    Are single vision lenses prescription?
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
                    They are! Single vision lenses have either a plus or minus
                    prescription. A plus indicates the need for near vision
                    correction while a minus indicates the need for distance
                    vision correction. In case you wanted to know: Lenses
                    without any prescription are called Plano lenses.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-t-0 border-b border-yellow-500/30 hover:border-yellow-500/50 border-l-0 border-r-0 border-[1px] transition-colors duration-200">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    Can I wear single vision lenses all the time?
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
                    For sure! While some people choose to wear their single
                    vision glasses only when needed  like for reading or
                    driving  you can wear them all day. If however you notice
                    any discomfort while wearing your single vision glasses,
                    your optician might recommend a purpose-made second pair
                    like ZEISS Office lenses.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductPage;
