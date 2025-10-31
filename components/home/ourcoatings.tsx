"use client";
import React, { useRef, useEffect } from "react";
import { TransitionLink } from "../ui/transitionlink";
import Image from "next/image";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Coatings = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const categories = [
    {
      id: "01",
      title: "NOX COATING",
      subtitle: "Advanced Progressive Technology",
      description: "Complete blue light protection lenses for modern digital lifestyle and visibility",
      slug: "cliff-dynamic",
      image: "/bluesafe/lense.jpg",
      alignment: "left",
      buttonText: "Explore Series"
    },
    {
      id: "02", 
      title: "BLUE SAFE COATING",
      subtitle: "Premium Optical Excellence",
      description: "Photochromic lenses that adapt to changing light conditions automatically",
      slug: "cliff-zenn-series",
      image: "/benefits.jpeg",
      alignment: "right",
      buttonText: "Learn More"
    },
    {
      id: "03", 
      title: "DRIVE CLEAR COATING",
      subtitle: "Premium Optical Excellence",
      description: "Specialized lenses optimized for driving and enhanced road visibility",
      slug: "cliff-zenn-series",
      image: "/homeimage/driveclear.png",
      alignment: "left",
      buttonText: "Learn More"
    },
    {
      id: "04", 
      title: "PHOTO Z COATING",
      subtitle: "Premium Optical Excellence",
      description: "Multi-focal progressive lenses for seamless vision at all distances and visibility",
      slug: "cliff-zenn-series",
      image: "/bluesafe/photoz.jpg",
      alignment: "right",
      buttonText: "Learn More"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - works both directions
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse", // Changed this line
          }
        }
      );

      // Subtitle animation - works both directions
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse", // Changed this line
          }
        }
      );

      // Category sections animation
      gsap.utils.toArray(".category-section").forEach((section: any, index) => {
        const content = section.querySelector(".category-content");
        const contentWrapper = section.querySelector(".content-wrapper");
        const imageContainer = section.querySelector(".category-image");

        // Content wrapper animation - works both directions
        gsap.fromTo(contentWrapper,
          { y: -150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play reverse play", // Changed this line
            }
          }
        );

        // Content children animation - works both directions
        gsap.fromTo(content.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: content,
              start: "top 70%",
              toggleActions: "play reverse play reverse", // Changed this line
            }
          }
        );

        // Enhanced image animation with specific directions for each category
        // First and third categories come from right to left, others from left to right
        const isRightToLeft = index === 0 || index === 2; // First and third categories
        const initialRotation = isRightToLeft ? 25 : -25;
        const initialX = isRightToLeft ? 300 : -300;
        
        gsap.fromTo(imageContainer,
          {
            rotation: initialRotation,
            x: initialX,
            opacity: 0,
            scale: 0.9
          },
          {
            rotation: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageContainer,
              start: "top 75%",
              toggleActions: "play reverse play reverse", // Changed this line
            }
          }
        );
      });

      // Button hover animations (these don't need scroll trigger changes)
      const buttons = document.querySelectorAll('.category-button');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { y: -2, duration: 0.3, ease: "power2.out" });
        });
        
        button.addEventListener('mouseleave', () => {
          gsap.to(button, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen py-10 text-white overflow-hidden w-full">
      <div className="w-full mx-auto shrink-0 py-6 md:py-8 lg:py-16 relative px-4 md:px-8">
        {/* Title and Subtitle */}
        <div className="mb-8 md:mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-8xl font-medium montserrat text-[#FFD700]">
            Discover Our Coatings
          </h2>
          <p ref={subtitleRef} className="text-base sm:text-lg md:text-xl text-[#FFD700] max-w-3xl poppins mt-4">
            Explore our premium range of lens coatings designed to enhance your vision experience.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={`group relative overflow-hidden border border-zinc-800 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10 flex flex-col ${
                index === 0 
                  ? 'bg-[#BFBFBF]' 
                  : index === 1 
                    ? 'bg-black' 
                    : 'bg-[#BFBFBF]'
              }`}
            >
              {/* Content section above image */}
              <div className={`p-6 text-center flex-1 flex flex-col ${
                index === 0 ? 'bg-[#BFBFBF]' : 'bg-black/50'
              }`}>
                <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                {/* {category.subtitle && (
                  <p className="text-amber-100 font-medium text-sm mb-4">{category.subtitle}</p>
                )} */}
                <p className="text-zinc-100 text-sm mb-6 flex-grow">{category.description}</p>
                <button className="inline-flex items-center justify-center text-amber-300 hover:text-white group transition-colors text-sm font-medium mt-auto">
                  {category.buttonText}
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              {/* Image section */}
              <div className={`relative w-full aspect-[16/9] overflow-hidden ${
                index === 0 ? 'bg-[#BFBFBF]' : index === 1 ? 'bg-black' : 'bg-zinc-900'
              }`}>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-700 "
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coatings;