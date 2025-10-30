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

const TechDynamix = () => {
  const services = [
    {
      id: "01",
        title: "Psicoptix Technology™",
      description:
        "Complete blue light protection lenses for modern digital lifestyle",
      slug: "cliff-zenn-single-vision",
      image: "/homeimage/technology.png",
    },
    {
      id: "02",
       title: "CDT® (Continuum Design) 8K Definition",
      description:
        "Photochromic lenses that adapt to changing light conditions automatically",
      slug: "cliff-progressive-versatile",
      image: "/homeimage/8k.png",
    },
    {
      id: "03",
      title: "Wear Fit Customization",
      description:
        "Specialized lenses optimized for driving and enhanced road visibility",
   
      slug: "cliff-dynamix-progressive",
      image: "/homeimage/wearfit.png",
    },
    {
      id: "04",
      title: "Thikness Control Technology",
      description:
        "Multi-focal progressive lenses for seamless vision at all distances",
      slug: "cliff-progressive-versatile",
      image: "/homeimage/thickness.png",
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
    <div ref={sectionRef} className="min-h-screen text-black overflow-hidden w-full">
      <div className="w-full mx-auto shrink-0 py-6 md:py-8 lg:py-16 relative px-4 md:px-8">
        
        <div className="mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700]">
            Technologies used in Dynamix Series
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
                href={`/technology`}
                className="cursor-pointer block group rounded-lg md:rounded-xl bg-[#322b00]"
              >
                <div className="relative overflow-hidden ">
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
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                          <h3 className="text-2xl font-bold mb-2 montserrat text-white group-hover:text-amber-400">
                            {service.title}
                          </h3>
                          <p className="text-zinc-300 group-hover:text-white leading-relaxed text-sm mb-4 poppins">
                            {service.description}
                          </p>
                        </div>

                          
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

                  
                  <div className="hidden md:flex p-6 items-stretch h-full">
                    
                    <div className="w-[350px] flex-shrink-0 mr-8">
                      <div className="relative overflow-hidden rounded-2xl group h-[280px] w-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 flex flex-col justify-end p-4">
                        </div>
                      </div>
                    </div>
                    
                    
                    <div className="flex-1 py-6 pr-6 flex flex-col">
                      <h3 className="text-2xl xl:text-3xl font-bold mb-4 montserrat text-white group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-amber-200 group-hover:text-white leading-relaxed text-base xl:text-lg poppins mb-6">
                        {service.description}
                      </p>

                    
                      <div className="mt-auto pt-6 flex justify-end">
                        <div className="inline-flex items-center text-amber-400 font-medium group-hover:text-white transition-colors duration-300">
                          <span className="mr-2">Learn More</span>
                          <Icon icon="mage:external-link" width="20" height="20" />
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

export default TechDynamix;

