"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Coatings = () => {
  const services = [
    {
      id: "01",
      title: "NOX",
      description:
        "Complete blue light protection lenses for modern digital lifestyle and visibility",
      category: "Lenses",
      slug: "cliff-blue-safe-lenses",
      image: "/product/03.jpeg",
    },
    {
      id: "02",
      title: "BLUE SAFE",
      description:
        "Photochromic lenses that adapt to changing light conditions automatically",
      category: "Lenses",
      slug: "cliff-photo-z-lenses",
      image: "/bluesafe/Bluesafe.jpg",
    },
    {
      id: "03",
      title: "DRIVE CLEAR",
      description:
        "Specialized lenses optimized for driving and enhanced road visibility",
      category: "Lenses",
      slug: "cliff-drive-clear-lenses",
      image: "/product/5.jpg",
    },
    {
      id: "04",
      title: "PHOTO Z",
      description:
        "Multi-focal progressive lenses for seamless vision at all distances and visibility",
      category: "Progressive",
      slug: "cliff-progressive-versatile",
      image: "/bluesafe/photoz.jpg",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each card with alternating directions
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isLeftCard = index % 2 === 0; // Even indices (0, 2) come from left, odd (1, 3) from right
        const directionX = isLeftCard ? -100 : 100;
        
        gsap.fromTo(card,
          {
            opacity: 0,
            x: directionX,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });

      // Hover animations removed as per user request

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Function to add ref to each card
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen py-10 text-black overflow-hidden w-full">
      <div className="w-full mx-auto shrink-0 py-6 md:py-8 lg:py-16 relative px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-4xl md:text-8xl font-medium montserrat text-[#FFD700]">
            Discover Our Coatings
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#FFD700] max-w-3xl poppins mt-4">
            Discover our comprehensive range of premium optical solutions,
            advanced lens technologies, and professional services designed to
            enhance your vision experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-0 relative">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              ref={(el) => addToRefs(el, index)}
              className={`h-full ${parseInt(service.id) % 2 === 0 ? 'mt-16' : ''}`}
            >
              <Link
                href="/Services/cliff-coatings"
                className="cursor-pointer block group"
              >
                <div className="relative backdrop-blur-sm border border-zinc-800 overflow-hidden bg-[#322b00] rounded-lg md:rounded-xl">
                  
                  {/* Mobile Layout */}
                  <div className="block md:hidden h-full">
                    <div className="relative h-full">
                      <div className="w-full h-[280px] relative overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100" />
                        <div className="p-4">
                          {/* Category Badge */}
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-medium mb-3">
                            {service.category}
                          </div>

                          {/* Title */}
                          <div className="flex-1 py-6 pr-6 flex flex-col justify-center">
                            <h3 className="text-2xl xl:text-3xl font-bold mb-4 montserrat text-white group-hover:text-amber-400 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-zinc-300 group-hover:text-white leading-relaxed mb-6 text-base xl:text-lg poppins">
                              {service.description}
                            </p>
                          </div>

                          {/* Learn More Button */}
                          <div className="inline-flex items-center text-amber-400 font-medium group-hover:text-white text-sm poppins">
                            <span className="mr-2">Learn More</span>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex p-6 items-stretch h-full">
                    {/* Image - Left Side */}
                    <div className="w-[350px] flex-shrink-0 mr-8">
                      <div className="relative overflow-hidden rounded-2xl group h-[280px] w-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover rounded-2xl"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 flex flex-col justify-end p-4">
                          {/* Category Badge - Desktop */}
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-medium mb-2 self-start">
                            {service.category}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content - Right Side */}
                    <div className="flex-1 flex flex-col h-full">
                      {/* Title - Moved here from image overlay */}
                      <h3 className="text-2xl font-bold mb-3 montserrat bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                        {service.title}
                      </h3>
                      {/* Description */}
                      <p className="text-[#FFD700] leading-relaxed text-base lg:text-lg poppins mb-4">
                        {service.description}
                      </p>

                      {/* Learn More Button - Bottom Right */}
                      <div className="mt-auto pt-24 flex justify-end">
                        <div className="inline-flex items-center text-amber-400 font-medium group-hover:text-white transition-colors duration-300">
                          <span className="mr-2 poppins">Learn More</span>
                          <Icon icon="mage:external-link" width="20" height="20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coatings;