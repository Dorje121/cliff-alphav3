"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getProductBySlug, Product } from '@/components/mockdata/products';
import SingleVision from '@/contexts/singlevison';
import DynamicProgressive from '@/contexts/dynamixprogressive';

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
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Content */}
          <div className="lg:w-3/5">
            <div className="space-y-6 max-w-4xl pl-0 pr-8 py-8 font-poppins">
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
          {/* <div className="w-full lg:w-2/5 h-[40vh] lg:h-[50vh] min-h-[300px] relative rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            >
              <source src={product.video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          </div> */}
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

      {/* Technology and Benefits Section */}
      {product.technology && (
        <div className="max-w-[94rem] w-full mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side - Technology */}
            <div className="lg:col-span-7 pr-8 py-8 h-full">
              <h3 className="text-2xl font-semibold mb-4 text-amber-300">
                {product.technology.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.technology.description}
              </p>
            </div>
            
            {/* Right Side - Key Benefits */}
            {product.technology.benefits?.length > 0 && (
              <div className="lg:col-span-5 lg:pl-8">
                <h3 className="text-2xl font-semibold mb-6 text-amber-400">Key Benefits</h3>
                <div className="space-y-6">
                  {product.technology.benefits.map((benefit, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-medium text-amber-300 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}


      {/* Product Comparison Section */}
      {product.comparisonImages && (
        <div className="max-w-[94rem] w-full mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Lens */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
              <Image
                src={`/homeimage/${product.comparisonImages.standard}`}
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
                src={`/homeimage/${product.comparisonImages.product}`}
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
      )}

      
      
      {params.slug === 'single-vision' && (
        <SingleVision product={product} />
      )}

      {params.slug === 'dynamic-progressive' && (
        <DynamicProgressive product={product} />
      )}
      
    </div>
  );
}