"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const zennseries = () => {
  const services = [
    {
      id: "01",
        title: "Digital Ray Path Technology™",
      description:
        "Each lens is digitally designed to match your eyes, offering sharp, accurate vision and helping reduce eye strain during long screen hours.",
      slug: "cliff-zenn-single-vision",
      image: "/homeimage/smart.png",
    },
    {
      id: "02",
       title: "Smart Add Technology™",
      description:
        "With Smart Add Technology™, your lenses automatically adapt to sunlight or shade, ensuring clear, comfortable vision and protection in every environment.",
      slug: "cliff-progressive-versatile",
      image: "/homeimage/raypath.png",
    },
    {
      id: "03",
      title: "Personalization Parameters",
      description:
        "Adjust lens settings to match your vision needs and lifestyle preferences for ultimate comfort and clarity",
   
      slug: "cliff-dynamix-progressive",
      image: "/homeimage/personal.png",
    },
    {
      id: "04",
      title: "Automatic Corridor Select & Insect Optimization",
      description:
         "Lenses intelligently adjust focus for every corridor of vision while minimizing distractions from small visual obstacles.",
      slug: "cliff-progressive-versatile",
      image: "/homeimage/auto.png",
    },
   
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
     
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isLeftCard = index % 2 === 0; 
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

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen pb-24 text-black overflow-hidden w-full">
      <div className="w-full mx-auto shrink-0 py-6 md:py-8 lg:py-16 relative px-4 md:px-8">
        
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-medium montserrat text-[#FFD700]">
            Technologies used in Zenn Series
          </h2>

         
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-0 relative">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              ref={(el) => addToRefs(el, index)}
              className={`h-full ${parseInt(service.id) % 2 === 0 ? 'mt-16' : ''}`}
            >
              <Link
                href={`/technology/${service.slug}`}
                className="cursor-pointer block group rounded-lg md:rounded-xl bg-[#322b00]"
              >
                <div className="relative overflow-hidden h-full">
                  {/* Mobile Layout */}
                  <div className="block md:hidden h-full w-full relative">
                    <div className="absolute inset-0 w-full h-full">
                      <div className="absolute left-0 top-0 bottom-0 w-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          style={{ objectPosition: 'left' }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                    </div>
                    <div className="relative z-20 w-full h-full flex flex-col justify-end p-4 pr-6">
                      <h3 className="text-xl font-bold mb-1 montserrat text-white group-hover:text-amber-400">
                        {service.title}
                      </h3>
                      <p className="text-zinc-300 group-hover:text-white leading-relaxed text-xs mb-2 poppins">
                        {service.description}
                      </p>
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

                  {/* Desktop Layout */}
                  <div className="hidden md:flex p-4 items-stretch h-full">
                    <div className="w-[280px] flex-shrink-0 mr-6">
                      <div className="relative overflow-hidden rounded-xl group h-[220px] w-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                      </div>
                    </div>
                    
                    <div className="flex-1 py-3 pr-4 flex flex-col">
                      <h3 className="text-xl xl:text-2xl font-bold mb-2 montserrat text-white group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-amber-200 group-hover:text-white leading-relaxed text-sm xl:text-base poppins mb-4">
                        {service.description}
                      </p>
                      <div className="mt-auto pt-3 flex justify-end">
                        <div className="inline-flex items-center text-amber-400 text-sm font-medium group-hover:text-white transition-colors duration-300">
                          <span className="mr-1">Learn More</span>
                          <Icon icon="mage:external-link" width="16" height="16" />
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

export default zennseries;

