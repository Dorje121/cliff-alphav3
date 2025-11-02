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
      title: "Nox Coating",
      subtitle: "Advanced Progressive Technology",
      description: "Complete blue light protection lenses for modern digital lifestyle and visibility",
      slug: "cliff-dynamic",
      image: "/bluesafe/lense.jpg",
      alignment: "left",
      buttonText: "Learn More"
    },
    {
      id: "02", 
      title: "Blue Safe Coating",
      subtitle: "Premium Optical Excellence",
      description: "Photochromic lenses that adapt to changing light conditions automatically",
      slug: "cliff-zenn-series",
      image: "/homeimage/bluecoating.png",
      alignment: "right",
      buttonText: "Learn More"
    },
    {
      id: "03", 
      title: "Drive Clear Coating",
      subtitle: "Premium Optical Excellence",
      description: "Specialized lenses optimized for driving and enhanced road visibility",
      slug: "cliff-zenn-series",
      image: "/homeimage/driceclear.jpg",
      alignment: "left",
      buttonText: "Learn More"
    },
    {
      id: "04", 
      title: "Photo Z Coating",
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
            toggleActions: "play reverse play reverse", 
          }
        }
      );

      
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
            toggleActions: "play reverse play reverse", 
          }
        }
      );

      
      gsap.utils.toArray(".category-section").forEach((section: any, index) => {
        const content = section.querySelector(".category-content");
        const contentWrapper = section.querySelector(".content-wrapper");
        const imageContainer = section.querySelector(".category-image");


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
              toggleActions: "play reverse play", 
            }
          }
        );

      
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
              toggleActions: "play reverse play reverse", 
            }
          }
        );

        
        const isRightToLeft = index === 0 || index === 2; 
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
              toggleActions: "play reverse play reverse", 
            }
          }
        );
      });

    
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
       
        <div className="mb-8 md:mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-8xl montserrat text-[#FFD700]">
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
              className={`group relative overflow-hidden hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10 flex flex-col ${
                index === 0 
                  ? 'bg-[#BFBFBF]' 
                  : index === 1 
                    ? 'bg-black' 
                    : index === 2
                      ? 'bg-black'
                      : 'bg-[#BFBFBF]'
              }`}
            >
             
              <div className={`p-6 text-center flex-1 flex flex-col ${
                index === 0 ? 'bg-[#BFBFBF]' : index === 2 ? 'bg-black' : 'bg-black/50'
              }`}>
                <h3 className="text-4xl font-bold text-white mb-3 capitalize">{category.title}</h3>
                {/* {category.subtitle && (
                  <p className="text-amber-100 font-medium text-sm mb-4">{category.subtitle}</p>
                )} */}
                <p className="text-zinc-100 text-xl mb-6 flex-grow">{category.description}</p>
                <button className="inline-flex items-center justify-center px-3 py-1 text-white rounded-full group transition-all duration-300 hover:from-amber-600 hover:to-amber-700 shadow-md hover:shadow-lg hover:shadow-amber-500/30 text-xs font-medium mt-auto w-fit mx-auto whitespace-nowrap">
                <span className="flex items-center">
                  <span className="mr-1">{category.buttonText}</span>
                  <svg
                    className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              </div>
              
              
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