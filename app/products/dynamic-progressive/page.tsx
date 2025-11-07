"use client";

import React, { useRef, useState, useEffect } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
  };

  const onDrag = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  };
  

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
              src={"/homeimage/dynamix.png"}
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
              DYNAMIX PROGRESSIVE
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              Intelligent Vision for Dynamic Lifestyles
            </p>
          </div>
        </div>
      </div>


      <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-6 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <img
                        className="w-16 h-16 object-contain object-center"
                        src="/svgs/uvprotection.svg"
                        alt="cliff uvprotection"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-yellow-400 mb-2">
                      UV Protection
                    </h4>
                    <p className="text-yellow-300/80 text-sm">
                      Blocks harmful UV rays from the sun
                    </p>
                  </div>
                </div>

                <div className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-6 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <img
                        className="w-16 h-16 object-contain object-center"
                        src="/svgs/bluelight.svg"
                        alt="cliff bluelight"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-yellow-400 mb-2">
                      Reduced Glare
                    </h4>
                    <p className="text-yellow-300/80 text-sm">
                      Minimizes glare for comfortable vision
                    </p>
                  </div>
                </div>

                <div className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-6 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <img
                        className="w-16 h-16 object-contain object-center"
                        src="/style.svg"
                        alt="style customize cliff"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-yellow-400 mb-2">
                      Style Options
                    </h4>
                    <p className="text-yellow-300/80 text-sm">
                      Multiple colors and intensity levels
                    </p>
                  </div>
                </div>

                <div className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-6 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <img
                        className="w-16 h-16 object-contain object-center"
                        src="/svgs/antireflective.svg"
                        alt="cliff antireflective"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-yellow-400 mb-2">
                      Driving Comfort
                    </h4>
                    <p className="text-yellow-300/80 text-sm">
                      Enhanced visibility while driving
                    </p>
                  </div>
                </div>
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
            Cliff Dynamix Progressive lenses adapt to your vision needs throughout the day. Whether you're reading, working on a computer, or driving, experience seamless vision transitions and crystal-clear focus at every distance.
          </h2>
        </div>
      </div>

      {/* Image comparison with side content */}
      <div className="w-full flex flex-col pl-10 md:flex-row gap-8 items-center py-16 px-4">
        {/* Image comparison on the left - adjusted width */}
        <div className="w-full md:w-6/12 lg:w-1/2">
          <ImageComparison className="aspect-16/9 w-full h-[70vh] md:h-[80vh]" enableHover>
            <div className="relative  w-full h-full">
              <Image
                src={"/homeimage/dynamix.png"}
                className=""
                alt="Standard Progressive Lens"
                fill
                style={{ objectPosition: 'left' }}
              />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/dynamix/dynamix.png"
                alt="Cliff Dynamix Progressive Lens"
                fill
                style={{ objectPosition: 'right' }}
              />
            </div>
            <ImageComparisonSlider className="w-0.5 bg-yellow-400/50 backdrop-blur-xs">
              <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400"></div>
            </ImageComparisonSlider>
          </ImageComparison>
        </div>
        
        {/* Content on the right - adjusted width */}
        <div className="w-full md:w-6/12 lg:w-1/2 pl-10 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl  montserrat text-yellow-300">
            Experience the Difference
          </h2>
          <p className="text-yellow-100/90 text-lg">
            Compare standard progressive lenses with our advanced Cliff Dynamix technology. 
            See how our lenses provide wider fields of view and smoother transitions.
          </p>
          <ul className="space-y-3 text-yellow-100/80 text-left">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Wider reading and distance zones</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Smoother transitions between distances</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduced peripheral distortion</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-screen  mx-auto mx-4 sm:-mx-6 lg:-mx-8 py-24 bg-black/10">
        {/* Title Section */}
        <div className="  text-center py-16">
          <h2 className="text-2xl md:text-5xl font-medium montserrat text-[#FFD700] mb-4">
            Available options
          </h2>
          <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl mx-auto">
            Choose from a range of styles and colors to find the perfect fit for your lifestyle.
          </p>
        </div>
        <div 
          className={`flex overflow-x-auto pb-6 hide-scrollbar mt-2 pl-10 pr-10 max-w-9xl mx-auto ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          ref={containerRef}
          onMouseDown={startDrag}
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          <div className="flex space-x-6 px-4">
          {/* Clear Lenses */}
          <div className="group relative w-96 flex-shrink-0 h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-transparent transition-all duration-500">
            <div className="relative h-full w-full">
              <Image
                src={"/bluesafe/clear.png"}
                alt="Clear Lenses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Clear</h3>
                <p className="text-amber-100/80 mb-4">Crystal clear vision for everyday use</p>
                <ul className="space-y-2 text-sm text-gray-200 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Maximum light transmission
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    True color perception
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Photochromic */}
          <div className="group relative w-96 flex-shrink-0 h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-transparent transition-all duration-500">
            <div className="relative h-full w-full">
              <Image
                src={"/bluesafe/photoz.jpg"}
                alt="Photochromic Lenses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Photochromic</h3>
                <p className="text-amber-100/80 mb-4">Adapts to changing light conditions</p>
                <ul className="space-y-2 text-sm text-gray-200 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Darkens in sunlight
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Clears indoors
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Photochromic Plus */}
          <div className="group relative w-96 flex-shrink-0 h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-transparent transition-all duration-500">
            <div className="relative h-full w-full">
              <Image
                src={"/bluesafe/drive.png"}
                alt="Photochromic Plus Lenses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Photochromic Plus</h3>
                <p className="text-amber-100/80 mb-4">Enhanced light adaptation</p>
                <ul className="space-y-2 text-sm text-gray-200 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Faster transition times
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Better UV protection
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Blue Shield */}
          <div className="group relative w-96 flex-shrink-0 h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-transparent transition-all duration-500">
            <div className="relative h-full w-full">
              <Image
                src={"/bluesafe/blue1.png"}
                alt="Blue Shield Lenses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Blue Shield</h3>
                <p className="text-amber-100/80 mb-4">Protection against blue light</p>
                <ul className="space-y-2 text-sm text-gray-200 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Reduces digital eye strain
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Improves sleep quality
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Polarized */}
          <div className="group relative w-96 flex-shrink-0 h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black/50 border border-transparent transition-all duration-500">
            <div className="relative h-full w-full">
              <Image
                src={"/bluesafe/stock-Cliff.jpg"}
                alt="Polarized Lenses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Polarized</h3>
                <p className="text-amber-100/80 mb-4">Eliminates glare and reflections</p>
                <ul className="space-y-2 text-sm text-gray-200 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Reduces eye fatigue
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    Enhances contrast and clarity
                  </li>
                </ul>
                {/* <Link href="#" className="inline-flex items-center text-amber-400 hover:text-white font-medium transition-colors duration-300">
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
                  <h3 className="text-xl poppins text-yellow-300">What makes Dynamix Progressive different?</h3>
                  <svg className="w-6 h-6 text-yellow-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
                  <p>Dynamix Progressive lenses feature our most advanced digital design with wider reading and computer zones, smoother transitions between distances, and reduced peripheral distortion. Unlike standard progressives, they're optimized for today's digital lifestyle, providing superior comfort during prolonged screen time and better adaptation to various lighting conditions.</p>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-black/50 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">How long does it take to adapt to Dynamix Progressive lenses?</h3>
                  <svg className="w-6 h-6 text-yellow-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
                  <p className="mt-4 text-yellow-200/90">Most wearers adapt to Dynamix Progressive lenses within a few days to a week, thanks to our advanced digital design that reduces the adaptation period. The wider viewing zones and smoother transitions make the adjustment easier compared to traditional progressive lenses. For first-time progressive wearers, we recommend wearing them consistently to help your eyes adjust more quickly.</p>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-black/50 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">Are Dynamix Progressive lenses suitable for computer work?</h3>
                  <svg className="w-6 h-6 text-yellow-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
                  <p>Absolutely! In fact, Dynamix Progressive lenses are specifically designed with digital device users in mind. They feature an optimized intermediate zone that makes viewing computer screens more comfortable, along with blue light filtering technology to reduce digital eye strain during prolonged screen time. Many of our customers report significantly less fatigue when working long hours on computers or other digital devices.</p>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-black/50 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">What's the difference between standard and premium progressive lenses?</h3>
                  <svg className="w-6 h-6 text-yellow-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2 text-yellow-200/90">
                  <p>While standard progressives get the job done, premium Dynamix Progressive lenses offer several advantages: wider viewing zones, smoother transitions between distances, reduced peripheral distortion, and specialized coatings. They're also digitally surfaced for your exact prescription and frame measurements, providing sharper vision and better comfort, especially for active lifestyles or those who spend significant time on digital devices.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>  
    </div>
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .cursor-grabbing {
          cursor: grabbing;
        }
      `}</style>
    </div>
  );
}

export default ProductPage;
