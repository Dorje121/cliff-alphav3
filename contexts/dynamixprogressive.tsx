"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// SVG Checkmark Icon
const CheckIcon = ({ className = 'w-6 h-6' }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 13l4 4L19 7" 
    />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

interface DynamicProgressiveProps {
  product: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    benefits: string[];
    image: string;
    comparisonImages?: {
      standard: string;
      product: string;
    };
    comparisonLabels?: {
      standard: string;
      product: string;
    };
    lensTypes?: string[];
  };
}

const DynamicProgressive: React.FC<DynamicProgressiveProps> = ({ product }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      });

      // Animate image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 75%',
        },
      });

      // Animate features
      gsap.from(featuresRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 75%',
        },
      });

      // Animate benefits
      gsap.from(benefitsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-black text-white py-16 md:py-24">
      <div className="max-w-[94rem] mx-auto px-4">
        

          {/* Available Lens Types */}
          {product.lensTypes && product.lensTypes.length > 0 && (
            <div className="mt-16 w-full">
              <h3 className="text-2xl font-bold text-white mb-6">Available in {product.title} Lenses:</h3>
              <div className="bg-black/80 p-6 rounded-lg border border-gray-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.lensTypes.map((lensType, index) => (
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
          )}
        </div>

        {/* Product Icons Section */}
        <div className="py-16 px-8">
          <div className="max-w-[94rem] mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-left">Cliff Dynamix Progressive Features</h2>

            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
              <div className="flex gap-4">
                {[
                  { icon: "/svgs/scratchresistance.svg", title: "Scratch Resistance", desc: "Durable and long-lasting" },
                  { icon: "/svgs/antireflective.svg", title: "Wider Vision Zones", desc: "Expanded fields of view" },
                  { icon: "/svgs/clearvision.svg", title: "Smooth Transitions", desc: "Seamless focus changes" },
                  { icon: "/svgs/bluelight.svg", title: "Blue Light Filter", desc: "Reduces digital eye strain" },
                  { icon: "/svgs/uvprotection.svg", title: "UV Protection", desc: "Blocks harmful UV rays" },
                  { icon: "/svgs/antireflective.svg", title: "Anti-Reflective", desc: "Reduces glare and reflections" },
                  { icon: "/svgs/photochromatic.svg", title: "Photochromic Options", desc: "Adapts to light conditions" }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 text-center bg-gradient-to-b from-zinc-900/50 to-zinc-900/10 p-4 sm:p-6 rounded-xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300 w-48"
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={100}
                      height={100}
                      className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-3 sm:mb-4"
                    />
                    <h3 className="font-semibold text-sm sm:text-md mb-1 sm:mb-2 uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lens Type Cards Section */}
        <div className="py-16 px-8">
          <h2 className="text-3xl font-bold mb-14 text-left">Dynamix Progressive Lens Options</h2>
          <div className="relative max-w-[94rem] mx-auto">
            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
              {[
                {
                  title: "Clear",
                  description: "Reliable vision correction for all distances",
                  image: "/lenses/clear.png",
                  features: [
                    "Clear vision at all distances",
                    "Wide reading zones",
                    "Smooth transitions",
                    "100% UV protection"
                  ]
                },
                {
                  title: "Photochrom",
                  description: "Enhanced vision with wider fields of view",
                  image: "/lenses/brown.png",
                  features: [
                    "Wider vision zones",
                    "Faster adaptation",
                    "Reduced peripheral distortion",
                    "Premium anti-reflective coating"
                  ]
                },
                {
                  title: "Photochrome Plus",
                  description: "Precision-crafted for digital lifestyles",
                  image: "/lenses/gray.png",
                  features: [
                    "Optimized for screens",
                    "Reduced digital eye strain",
                    "Enhanced intermediate vision",
                    "Blue light protection"
                  ]
                },
                {
                  title: "Photochromic with Blue Shield",
                  description: "For dynamic, on-the-go lifestyles",
                  image: "/lenses/blue.png",
                  features: [
                    "Wider distance vision",
                    "Smoother transitions",
                    "Enhanced peripheral vision",
                    "Durable and impact-resistant"
                  ]
                },
                {
                  title: "Build Shield",
                  description: "Adapts to changing light conditions",
                  image: "/lenses/singlevision.png",
                  features: [
                    "Darkens in sunlight",
                    "Clears indoors",
                    "100% UV protection",
                    "Seamless light adaptation"
                  ]
                },
                {
                  title: "Polarized",
                  description: "Light-adaptive with blue light protection",
                  image: "/lenses/purple.png",
                  features: [
                    "Darkens in sunlight automatically",
                    "Blocks 40% harmful blue light",
                    "Reduces digital eye strain",
                    "100% UV protection"
                  ]
                }
              ].map((card, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[24rem] mx-2 snap-center"
                  draggable="true"
                  onDragStart={(e) => e.preventDefault()}
                >
                  <div className="bg-gradient-to-b from-zinc-900/50 to-zinc-900/10 rounded-xl border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 overflow-hidden flex flex-col h-full">
                    <div className="h-48 relative group">
                      <Image 
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-0" />
                      <h3 className="absolute bottom-4 left-0 right-0 text-center text-2xl font-bold text-white z-10 px-4">
                        {card.title}
                      </h3>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-amber-400 mb-4 text-center text-lg font-medium">{card.description}</p>
                      <ul className="space-y-2 flex-1">
                        {card.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckIcon className="w-5 h-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

  );
};

export default DynamicProgressive;