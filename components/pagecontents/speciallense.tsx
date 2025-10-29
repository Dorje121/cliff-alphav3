"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SpecialLense = () => {
  const features = [
    {
      title: "Tint",
      description: "Enhance your vision and style with our premium tinted lenses. Available in various colors to suit your personal preference and lifestyle needs.",
      benefits: [
        "Reduces glare and eye strain",
        "Enhances contrast and visual comfort",
        "Available in multiple colors",
        "UV protection included"
      ],
      image: "/product/10.jpg"
    },
    {
      title: "Photochrome",
      description: "Experience the convenience of adaptive lenses that automatically adjust to changing light conditions, darkening in sunlight and clearing indoors.",
      benefits: [
        "Adapts to light conditions",
        "100% UV protection",
        "Reduces glare",
        "Seamless transition"
      ],
      image: "/product/11.jpg"
    },
    {
      title: "Photochrome+",
      description: "Our advanced photochromic technology with faster transition times and enhanced performance in various weather conditions.",
      benefits: [
        "Faster light adaptation",
        "Works in the car",
        "All-weather performance",
        "Enhanced durability"
      ],
      image: "/product/12.jpg"
    },
    {
      title: "BlueShield",
      description: "Protect your eyes from harmful blue light emitted by digital screens while maintaining true color perception.",
      benefits: [
        "Blocks harmful blue light",
        "Reduces digital eye strain",
        "Minimizes sleep disruption",
        "Crystal clear vision"
      ],
      image: "/product/13.jpg"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Set initial states
    gsap.set('.feature-image', {
      x: 200,
      y: 50,
      opacity: 0,
      scale: 0.95,
    });
    
    gsap.set('.feature-content', {
      y: 40,
      opacity: 0,
    });

    const ctx = gsap.context(() => {
      // Animate each section
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const image = card.querySelector('.feature-image');
        const content = card.querySelector('.feature-content');
        
        if (!image || !content) return;
        
        // Image animation - float in from right
        gsap.to(image, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
            markers: false, // Set to true to debug trigger points
          },
          onComplete: () => {
            // Content animation starts after image animation completes
            gsap.to(content, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
            });
          }
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Function to add ref to each card
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen text-white overflow-hidden w-full bg-black">
      <div className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4">
            Special Lenses Collection
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto poppins">
            Discover our range of specialized lenses designed for every lifestyle and visual need
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-32 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              ref={(el) => addToRefs(el, index)}
              className="relative"
            >
              {/* Image - Full Width */}
              <div className="feature-image w-full h-[500px] relative mb-12 overflow-hidden rounded-lg will-change-transform">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content - Centered Below Image */}
              <div className="feature-content text-center max-w-3xl mx-auto will-change-transform">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFD700] montserrat">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">{feature.description}</p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center justify-center text-gray-300">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      <span className="text-left">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialLense;
