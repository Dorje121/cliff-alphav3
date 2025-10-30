"use client";

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

// Mock data - replace with your actual data source
const technologyData = {
  'cliff-zenn-single-vision': {
    title: 'SINGLE VISION',
    subtitle: 'Advanced Progressive Technology',
    description: 'Complete blue light protection lenses for modern digital lifestyle and visibility',
    features: [
      'Blue light filtering technology',
      'Reduced digital eye strain',
      'Enhanced contrast and clarity',
      'Anti-reflective coating'
    ],
    image: '/homeimage/singleee.jpg',
    benefits: [
      'Ideal for digital device users',
      'Reduces eye fatigue',
      'Improves sleep quality',
      '100% UV protection'
    ]
  },
  'cliff-zenn-series': {
    title: 'ZENN SERIES',
    subtitle: 'Premium Optical Excellence',
    description: 'Multi-focal progressive lenses for seamless vision at all distances and visibility',
    features: [
      'Seamless transition between distances',
      'Wide viewing zones',
      'Reduced peripheral distortion',
      'Customized for your prescription'
    ],
    image: '/product/10.jpg',
    benefits: [
      'Natural vision at all distances',
      'Smooth adaptation',
      'Stylish and comfortable',
      'Reduced head movement'
    ]
  },
  'cliff-progressive-versatile': {
    title: 'VERSATILE PROGRESSIVE',
    subtitle: 'Premium Optical Excellence',
    description: 'Photochromic lenses that adapt to changing light conditions automatically',
    features: [
      'Light-adaptive technology',
      'Seamless indoor-outdoor transition',
      'UV protection',
      'Scratch-resistant coating'
    ],
    image: '/homeimage/progressive.jpg',
    benefits: [
      'One pair for all lighting conditions',
      'Reduces glare',
      'Enhances visual comfort',
      'Durable and long-lasting'
    ]
  },
  'cliff-dynamix-progressive': {
    title: 'DYNAMIC PROGRESSIVE',
    subtitle: 'Premium Optical Excellence',
    description: 'Specialized lenses optimized for driving and enhanced road visibility',
    features: [
      'Enhanced contrast for night driving',
      'Reduced glare from headlights',
      'Wider intermediate zone',
      'Anti-reflective coating'
    ],
    image: '/product/9.jpg',
    benefits: [
      'Safer night driving',
      'Reduced eye strain',
      'Better depth perception',
      'Improved reaction time'
    ]
  },
  'speciality-lenses': {
    title: 'SPECIALITY LENSES',
    subtitle: 'Premium Optical Excellence',
    description: 'Multi-focal progressive lenses for seamless vision at all distances and visibility',
    features: [
      'Customized solutions',
      'High-index options',
      'Impact-resistant materials',
      'Specialized coatings'
    ],
    image: '/product/6.jpg',
    benefits: [
      'Perfect for specific needs',
      'Lightweight and comfortable',
      'Durable construction',
      'Enhanced visual performance'
    ]
  }
};

type TechnologyPageProps = {
  params: {
    slug: string;
  };
};

export default function TechnologyPage({ params }: TechnologyPageProps) {
  const { slug } = params;
  const technology = technologyData[slug as keyof typeof technologyData];

  if (!technology) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/technology" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Technologies
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full mb-16">
        <Image
          src={technology.image}
          alt={technology.title}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end relative z-10 pb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-amber-400">
            {technology.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            {technology.subtitle}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-400">Overview</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {technology.description}
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-amber-400">Key Features</h3>
            <ul className="space-y-3 mb-8">
              {technology.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Benefits */}
          <div className="bg-gray-900/50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-amber-400">Benefits</h3>
            <ul className="space-y-4">
              {technology.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-amber-400/20 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center">
                      <span className="text-black font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-6 px-8 text-lg rounded-md transition-colors duration-200">
                Get Your {technology.title} Lenses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}