"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "@/components/comparision/Comparision";
import Breadcrumb from "@/components/Breadcrumb";

const product = {
  id: "01",
  title: "DYNAMIX PROGRESSIVE",
  image: "/homeimage/progressive.jpg",
  video: "/videos/progressive.webm",
  description:
    "Cliff Dynamix Progressive Lenses offer a premium solution for presbyopia, providing clear vision at all distances with a smooth, natural transition. Our advanced lens technology ensures maximum comfort and visual acuity whether you&apos;re reading, working on a computer, or driving.",
  technology: {
    title: "Advanced Technology",
    description:
      "Our Dynamix Progressive Lenses feature the latest in lens technology, providing superior clarity and comfort.",
    benefits: [
      {
        title: "Visual Comfort",
        description: "Reduced eye strain"
      },
      {
        title: "Wider Reading",
        description: "Expanded vision zones"
      },
      {
        title: "Smooth Transitions",
        description: "Seamless vision"
      },
      {
        title: "Enhanced Clarity",
        description: "Sharper vision"
      }
    ]
  }
};

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
              src={"/dynamix/heropage.png"}
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


      
      {/* Breadcrumb */}
      <div className="z-50 bg-black/80 backdrop-blur-sm py-3 border-b border-yellow-500/20">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Dynamix Progressive' }
          ]}
          className="max-w-9xl mx-auto px-6 sm:px-6 lg:px-10"
        />
      </div>




       {/* Technology and Benefits Section */}
            <div className="py-20 pb-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
                  {product.technology.benefits.map((benefit, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-3">
                        <Image
                          src={
                            index === 0 
                              ? "/featureicons/Improved-visual-comfort-.svg"
                              : index === 1 
                              ? "/featureicons/Reduced-eye-strain-and-fatigue.svg"
                              : index === 2
                              ? "/featureicons/Undistorted-view.svg"
                              : "/featureicons/High-contrast-sensitivity.svg"
                              
                          }
                          alt={benefit.title}
                          width={160}
                          height={160}
                          className="w-full h-full object-contain"
                          style={{
                            filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(10000%) hue-rotate(0deg)'
                          }}
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-[#FFD700] text-sm md:text-base leading-tight">
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
            Cliff Dynamix Progressive lenses adapt to your vision needs throughout the day. Whether you&apos;re reading, working on a computer, or driving, experience seamless vision transitions and crystal-clear focus at every distance.
          </h2>
        </div>
      </div>

      {/* Image comparison with side content */}
      <div className="w-full mx-auto px-10 py-20 pb-20 relative flex flex-col md:flex-row gap-20 items-center">
        {/* Left side - Image comparison */}
        <div className="w-full   md:w-1/2">
          <ImageComparison className="aspect-[4/4] w-full h-auto max-h-[80vh]" enableHover>
            <ImageComparisonImage
              src="/dynamix/blur.png"
              className="object-contain"
              alt="Single Vision Lens Example 1"
              position="left"
            />
            <ImageComparisonImage
              src="/dynamix/dynamix.png"
              className="object-contain"
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
                Effortless focus. Seamless vision.
              </h2>
              <p className="text-[#FFD700] text-xl font-light">
                Discover Cliff Dynamix Progressives — clarity at every distance.
              </p>
            </div>
            <p className="text-lg md:text-xl !text-[#FFD700] max-w-3xl mx-auto">
              Cliff Dynamix Progressive lenses are crafted for a smooth visual transition — 
              from reading up close to focusing far ahead, without lines or jumps in clarity. 
              Precision-engineered zones adapt naturally to your gaze, offering comfortable 
              vision wherever life takes you. Experience innovation that moves with your eyes, 
              so you can focus on what matters most.
            </p>
          </div>

      </div>

      <div className=" bg-black/10 pb-28">
        {/* Title Section */}
        <div className="  text-center py-16">
          <h2 className="text-2xl md:text-5xl font-medium montserrat text-[#FFD700] mb-4">
             Choose your preferred options 
          </h2>
          <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl mx-auto">
            Choose from a range of styles and colors to find the perfect fit for your lifestyle.
          </p>
        </div>
        <div 
          className={`flex overflow-x-auto pb-6 hide-scrollbar mt-2 pl-6 pr-8 max-w-9xl mx-auto ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
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
                <h3 className="text-2xl font-bold text-white mb-2"> Cliff Clear Lenses</h3>
                <p className="text-amber-100/80 mb-4">Dynamix Progressive lenses</p>
                 <Link href="#" className="inline-flex items-center text-amber-400 hover:text-white font-medium transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
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
                <h3 className="text-2xl font-bold text-white mb-2"> Cliff Photochromic Lenses</h3>
                <p className="text-amber-100/80 mb-4">Dynamix Progressive lenses</p>
                 <Link href="#" className="inline-flex items-center text-amber-400 hover:text-white font-medium transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
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
                <h3 className="text-2xl font-bold text-white mb-2"> Cliff Photochromic Plus Lenses</h3>
                <p className="text-amber-100/80 mb-4">Dynamix Progressive lenses</p>
                 <Link href="#" className="inline-flex items-center text-amber-400 hover:text-white font-medium transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
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
                <h3 className="text-2xl font-bold text-white mb-2"> Cliff Blue Shield</h3>
                <p className="text-amber-100/80 mb-4">Dynamix Progressive lenses</p>
                
                
                 <Link href="#" className="inline-flex items-center text-amber-400 hover:text-white font-medium transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
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
                <h3 className="text-2xl font-bold text-white mb-2"> Cliff Polarized Lenses</h3>
                <p className="text-amber-100/80 mb-4">Dynamix Progressive lenses</p>
      
                <Link href="#" className="inline-flex items-center text-amber-400 hover:text-white font-medium transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
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
                    What makes Cliff Dynamix Progressive lenses different?
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
                    Cliff Dynamix Progressive lenses feature advanced digital surfacing technology that provides wider and more comfortable viewing zones compared to standard progressives. They offer smoother transitions between distance, intermediate, and near vision, with significantly reduced peripheral distortion. Our proprietary design ensures faster adaptation and more natural vision at all distances, making them ideal for active lifestyles and digital device users.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-t-0 border-b border-yellow-500/30 hover:border-yellow-500/50 border-l-0 border-r-0 border-[1px] transition-colors duration-200">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    How long does it take to adapt to Dynamix Progressive lenses?
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
                    Most wearers adapt to Cliff Dynamix Progressive lenses within 1-2 weeks, significantly faster than traditional progressives. Our advanced optics and wider viewing zones make the transition smoother. For first-time progressive wearers, we recommend wearing them consistently throughout the day to help your eyes adjust. If you experience any prolonged discomfort beyond two weeks, please consult your eye care professional for adjustments.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-t-0 border-b border-yellow-500/30 hover:border-yellow-500/50 border-l-0 border-r-0 border-[1px] transition-colors duration-200">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    Are Cliff Dynamix lenses good for computer work?
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
                    Absolutely! Cliff Dynamix Progressive lenses are excellent for computer work and digital device use. They feature an optimized intermediate zone that reduces eye strain during prolonged screen time. The lenses minimize the need to tilt your head to find the right focus point, providing comfortable vision whether you&apos;re working on a computer, tablet, or smartphone. For extended computer use, we can also customize the lens design to prioritize your intermediate vision needs.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-t-0 border-b border-yellow-500/30 hover:border-yellow-500/50 border-l-0 border-r-0 border-[1px] transition-colors duration-200">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl poppins text-yellow-300">
                    How do I care for my Cliff Dynamix Progressive lenses?
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
                  <p className="mb-3">To maintain optimal performance of your Cliff Dynamix Progressive lenses:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Clean lenses with a microfiber cloth and lens cleaner specifically designed for anti-reflective coatings</li>
                    <li>Avoid using paper towels or clothing that can scratch the lenses</li>
                    <li>Store your glasses in a protective case when not in use</li>
                    <li>Rinse lenses with lukewarm water before wiping to remove dust particles</li>
                    <li>Avoid exposing lenses to extreme heat or leaving them in direct sunlight</li>
                    <li>Schedule regular check-ups with your eye care professional to ensure your prescription remains accurate</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
     </div>

  );
}

export default ProductPage;
