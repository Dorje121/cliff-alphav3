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

const ProductPage = () => {
  const features = [
    {
      icon: "solar:shield-check-bold",
      title: "UV Protection",
      description: "UV protection up to 400nm – even in your clear eyeglasses.",
    },
    {
      icon: "ion:eye",
      title: "Better Vision",
      description:
        "Better vision near or far – with optics tailored to your needs.",
    },
    {
      icon: "ion:glasses",
      title: "Comfort & Style",
      description: "Thin and light lenses for good looks and comfort.",
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

      {/* Technology and Benefits Section */}
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
            Designed for everyday clarity, Cliff Single Vision Lenses are
            optimized to your unique prescription and lifestyle. Enjoy sharper
            focus, wider vision, and the comfort your eyes deserve because every
            detail matters.
          </h2>
        </div>
      </div>

      {/* Add image reveal */}
      <ImageComparison className="aspect-16/9 w-full h-[80vh]" enableHover>
        <ImageComparisonImage
          src="/embla/tin.jpg"
          className="blur-sm"
          alt="Motion Primitives Dark"
          position="left"
        />
        <ImageComparisonImage
          src="/embla/tin.jpg"
          alt="Motion Primitives Light"
          position="right"
        />
        <ImageComparisonSlider className="w-0.5 bg-yellow-400/50 backdrop-blur-xs">
          <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400"></div>
        </ImageComparisonSlider>
      </ImageComparison>

      <div className="w-full mx-auto px-8 py-10 relative">
        {/* Title Section */}
        <div className="  text-center py-16">
          <h2 className="text-2xl md:text-5xl font-medium montserrat text-[#FFD700] mb-4">
            Explore Your Options
          </h2>
          <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl mx-auto">
            Choose from a range of lens options to suit your lifestyle and
            vision needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-yellow-900/30 hover:border-yellow-800/50 transition-all duration-500">
            <div className="relative h-full w-full">
              <Image
                src={"/cliffcoating/bluee.png"}
                alt="Single Vision Lenses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Blue Safe
                </h3>
                <p className="text-amber-100/80 mb-4">
                  Protect your eyes from digital screens
                </p>
                <ul className="space-y-2 text-sm text-gray-200 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Ideal for nearsightedness or farsightedness
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Available in various materials
                  </li>
                </ul>
                {/* <Link 
                  href="/products/single-vision"
                  className="inline-flex items-center text-amber-400 hover:text-white font-medium transition-colors duration-300"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-yellow-900/30 hover:border-yellow-800/50 transition-all duration-500">
            <div className="relative h-full w-full">
              <Image
                src={"/cliffcoating/Drive-safe.jpg"}
                alt="Progressive Lenses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Drive Clear
                </h3>
                <p className="text-amber-100/80 mb-4">
                  Seamless vision at all distances in a road
                </p>
                <ul className="space-y-2 text-sm text-gray-200 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    No visible lines
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Smooth transition between distances
                  </li>
                </ul>
                {/* <Link 
                  href="/products/progressive"
                  className="inline-flex items-center text-amber-400 hover:text-white font-medium transition-colors duration-300"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-yellow-900/30 hover:border-yellow-800/50 transition-all duration-500">
            <div className="relative h-full w-full">
              <Image
                src={"/cliffcoating/photoZ.jpg"}
                alt="Blue Light Protection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Photo Z</h3>
                <p className="text-amber-100/80 mb-4">
                  Protect your eyes from dusts and hamrfull rays and maintain
                  Your Styles
                </p>
                <ul className="space-y-2 text-sm text-gray-200 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Reduces eye strain
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Improves sleep quality
                  </li>
                </ul>
                {/* <Link 
                  href="/products/blue-light"
                  className="inline-flex items-center text-amber-400 hover:text-white font-medium transition-colors duration-300"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-9xl mx-auto pb-24  bg-yellow-300/10 pt-24 px-4 sm:px-6 lg:px-8">
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
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
                  <p>
                    Single vision glasses are the most common lens type. They
                    have only one prescription power throughout the entire lens
                    and correct one field of vision – near or far. They&apos;re
                    prescribed for people who are short-sighted (myopic) or
                    long-sighted (hyperopic), and can also be used to correct
                    astigmatism to see clearly in the distance and close up.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-black/50 rounded-xl overflow-hidden">
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
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
                  <p className="mt-4 text-yellow-200/90">
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
            <div className="bg-black/50 rounded-xl overflow-hidden">
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
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
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
            <div className="bg-black/50 rounded-xl overflow-hidden">
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
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
                  <p>
                    For sure! While some people choose to wear their single
                    vision glasses only when needed – like for reading or
                    driving – you can wear them all day. If however you notice
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
  );
};

export default ProductPage;
