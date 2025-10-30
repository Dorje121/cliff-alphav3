"use client";

import React, { useRef, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
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
              <h3 className="text-2xl montserrat text-[#FFD700] mb-2">Premium Optical Excellence</h3>
              <h1 className="text-4xl md:text-5xl montserrat text-white mb-4 leading-tight">
                CLIFF {product.title.toUpperCase()} LENSES
              </h1>
              <p className="text-xl text-gray-300 italic">{product.subtitle}</p>
            </div>
          </div>
          
          {/* Right Side - Hero Image */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[60vh] min-h-[350px] relative rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover opacity-70"
            priority
          />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          </div>
        </div>
      </div>

      {/* Technology and Benefits Side by Side */}
      <div className="max-w-[94rem] w-full mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Digital Ray Path Technology */}
          <div className="pr-8 py-8 h-full">
            <h3 className="text-2xl font-semibold mb-4 text-amber-300">Digital Ray Path Technology</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our lenses incorporate advanced Digital Ray Path technology, which precisely calculates and optimizes the path of light through the lens to your eye. 
              This results in sharper, clearer vision with reduced distortion, especially in higher prescriptions.
            </p>
          </div>
          
          {/* Right Side - Key Benefits */}
          <div className="lg:pl-8">
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

  
      <div className="max-w-[93rem] w-full mx-auto pl-0 pb-16">
        <div className="pr-4">
          <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">
            CLIFF {product.title} Lenses
          </h3>
          {product.professionalContent ? (
            <>
              <p className="text-xl text-gray-300 mb-8">
                {product.professionalContent.benefits[0]}
              </p>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-6">
                  {product.professionalContent.description}
                </p>
                <p className="text-lg text-gray-300">
                  <strong>{product.professionalContent.features[0]}</strong>
                </p>
              </div>
            </>
          ) : (
            <p className="text-lg text-gray-300">
              Professional content not available for this product.
            </p>
          )}
        </div>
      </div>

    </div>
  );
}