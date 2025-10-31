"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getProductBySlug, Product } from '@/components/mockdata/products';

gsap.registerPlugin(ScrollTrigger);

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="max-w-[94rem] w-full mx-auto px-4 pt-24">
        <Link href="/products" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Hero Section with Side-by-Side Layout */}
      <div className="max-w-[94rem] w-full mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Side - Main Title Section */}
          <div className="w-full lg:w-1/2">
            <div className="w-full pl-0 pr-8 py-8 font-poppins">
              <h3 className="text-2xl montserrat text-[#FFD700] mb-2">Sharper Vision. Smarter Design.</h3>
              <h1 className="text-4xl md:text-5xl montserrat text-white mb-4 leading-tight">
                CLIFF {product.title.toUpperCase()} LENSES
              </h1>
              {/* <p className="text-xl text-gray-300 italic mb-6">{product.subtitle}</p> */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                {product.description}
              </p>
            </div>
          </div>
          
          {/* Right Side - Hero Image */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[60vh] min-h-[350px] relative rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain opacity-70"
            priority
          />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          </div>
        </div>
      </div>

      {/* Technology and Benefits Side by Side */}
      <div className="max-w-[94rem] w-full mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Digital Ray Path Technology */}
          <div className="lg:col-span-7 pr-8 py-8 h-full">
            <h3 className="text-2xl font-semibold mb-4 text-amber-300">Digital Ray Path Technology</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our lenses incorporate advanced Digital Ray Path technology, which precisely calculates and optimizes the path of light through the lens to your eye. 
              This results in sharper, clearer vision with reduced distortion, especially in higher prescriptions.
            </p>
          </div>
          
          {/* Right Side - Key Benefits */}
          <div className="lg:col-span-5 lg:pl-8">
            <h3 className="text-2xl font-semibold mb-6 text-amber-400">Key Benefits</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium text-amber-300 mb-1">Versatile Design</h4>
                <p className="text-gray-300">The most versatile design for Single Vision Lenses</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-amber-300 mb-1">76% More Stable</h4>
                <p className="text-gray-300">76% more stable than conventional lenses in higher prescriptions</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-amber-300 mb-1">Superior Vision</h4>
                <p className="text-gray-300">Better vision in all gaze directions</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Product Comparison Images */}
      <div className="max-w-[94rem] w-full mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Standard Lens */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image
              src={"/homeimage/" + (product.comparisonImages?.standard || 'single1.png')}
              alt="Standard Lens"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-1 left-4">
              <span className="text-lg font-medium text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded">
                {product.comparisonLabels?.standard || 'STANDARD LENS'}
              </span>
            </div>
          </div>
          
          {/* Product Lenses */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image
              src={"/homeimage/" + (product.comparisonImages?.product || 'single2.png')}
              alt={`${product.title} Lenses`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-1 left-4">
              <span className="text-lg font-medium text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded">
                {product.comparisonLabels?.product || `CLIFF ${product.title.toUpperCase()} LENSES`}
              </span>
            </div>
          </div>
        </div>
      </div>

  

      
      {/* Cliff Single Vision Lense - Full Width Section */}
      <div className="w-full bg-black py-16">
        <div className="max-w-7xl px-4 mx-auto text-center mb-16">
          <h2 className="text-6xl montserrat text-white mb-6">Cliff Single Vision Rx Lense</h2>
        </div>
        <div className="max-w-7xl px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="space-y-4 max-w-3xl">
                <p className="text-2xl poppins font-medium text-gray-200">
                  Precision-engineered lenses for superior single vision correction.
                </p>
                <p className="text-xl poppins text-gray-300">
                  A smart choice for clear, comfortable vision.
                </p>
                <ul className="space-y-3 text-lg poppins text-gray-300">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>Slimmer, flatter design with outstanding optical performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>Ensures sharp, edge-to-edge clarity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>Custom-crafted with precision back-surface freeform technology for optimal accuracy</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Main Image */}
            <div className="lg:w-1/2">
              <Image 
                src="/imAGES/singlevision.png" 
                alt="Cliff Single Vision Lenses" 
                className="w-full max-w-xl mx-auto lg:ml-auto object-contain"
                width={600}
                height={375}
                priority
              />
            </div>
          </div>

          {/* Available Lens Types */}
          <div className="mt-16 w-full">
            <h3 className="text-2xl font-bold text-white mb-6">Available in Single Vision Rx Lenses:</h3>
            <div className="bg-black/80 p-6 rounded-lg border border-gray-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Clear', 'Blueshield', 'Photochrome', 'Photochrome +', 'Photochrome with Blueshield', 'Polarized'].map((lensType, index) => (
                  <div key={index} className="flex items-center p-3 hover:bg-gray-900/50 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/10 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200">{lensType}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Features Icons Section */}
      <div className="w-full bg-black py-12 border-t border-gray-800">
        <div className="max-w-[94rem] mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center text-amber-400 mb-8">Cliff Single Vision Rx Lense Features</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { icon: "/svgs/scratchresistance.svg", title: "Scratch Resistance" },
              { icon: "/svgs/clearvision.svg", title: "Low Reflection" },
              { icon: "/svgs/superslippery.svg", title: "Super Hydrophobic" },
              { icon: "/svgs/bluelight.svg", title: "Blue Filter" },
              { icon: "/svgs/uvprotection.svg", title: "UV Protection" },
              { icon: "/svgs/glareprotection.svg", title: "Anti Glare" },
              { icon: "/svgs/photochromatic.svg", title: "Photochromatic" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center bg-gradient-to-b from-zinc-900/50 to-zinc-900/10 p-4 sm:p-6 rounded-xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="w-12 sm:w-16 h-12 sm:h-16 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}