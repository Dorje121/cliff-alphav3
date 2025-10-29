"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function ZeenSeries() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full px-[calc(2vw-1px)] py-16">
      <div className="max-w-[calc(98vw-5px)] mx-auto">
      {/* Single Vision Lenses Section */}
      <div 
        ref={sectionRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 relative"
      >
        {/* Content */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">ZEEN Single Vision Lenses</h2>
          <p className="text-gray-300 mb-6 text-lg">Clear vision at a single distance</p>
          <p className="text-gray-400 mb-6">
            Experience crystal clear vision with our premium single vision lenses, perfect for those who need vision correction at one distance. Our advanced technology ensures optimal clarity and comfort throughout the day.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm border border-[#FFD700] text-[#FFD700] rounded-full">Single Vision</span>
            <span className="px-4 py-2 text-sm border border-[#FFD700] text-[#FFD700] rounded-full">Clear Vision</span>
            <span className="px-4 py-2 text-sm border border-[#FFD700] text-[#FFD700] rounded-full">All-Day Comfort</span>
          </div>
        </div>

        {/* Image */}
        <div 
          className={`relative h-96 w-full transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          <Image
            src="/product/10.jpg" // Replace with your image path
            alt="ZEEN Single Vision Lenses"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Progressive Lenses Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image - This will be on the left on large screens */}
        <div 
          className={`relative h-96 w-full order-1 lg:order-1 transition-all duration-1000 ease-out delay-150 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <Image
            src="/product/11.jpg" // Replace with your image path
            alt="ZEEN Progressive Lenses"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Content */}
        <div 
          className={`order-2 lg:order-2 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">ZEEN Progressive Lenses</h2>
          <p className="text-gray-300 mb-6 text-lg">Seamless vision at all distances</p>
          <p className="mb-4">
            Enjoy smooth, natural vision at all distances with our advanced progressive lenses, eliminating the need for multiple pairs of glasses.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 text-sm border border-[#FFD700] text-[#FFD700] rounded-full transition-transform hover:scale-105">Progressive</span>
            <span className="px-4 py-2 text-sm border border-[#FFD700] text-[#FFD700] rounded-full transition-transform hover:scale-105">Multi-Focal</span>
            <span className="px-4 py-2 text-sm border border-[#FFD700] text-[#FFD700] rounded-full transition-transform hover:scale-105">No Line Bifocal</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
