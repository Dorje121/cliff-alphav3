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
      image: "/bluesafecoatings/nox.png",
      alignment: "left",
      buttonText: "View Details"
    },
    {
      id: "02", 
      title: "Blue Safe Coating",
      subtitle: "Premium Optical Excellence",
      description: "Photochromic lenses that adapt to changing light conditions automatically",
      slug: "cliff-zenn-series",
      image: "/bluesafecoatings/blue.png",
      alignment: "right",
      buttonText: "View Details"
    },
    {
      id: "03", 
      title: "Drive Clear Coating",
      subtitle: "Premium Optical Excellence",
      description: "Specialized lenses optimized for driving and enhanced road visibility",
      slug: "cliff-zenn-series",
      image: "/homeimage/photz.png",
      alignment: "left",
      buttonText: "View Details"
    },
    {
      id: "04", 
      title: "Photo Z Coating",
      subtitle: "Premium Optical Excellence",
      description: "Multi-focal progressive lenses for seamless vision at all distances and visibility",
      slug: "cliff-zenn-series",
      image: "/homeimage/lense6.png",
      alignment: "right",
      buttonText: "View Details"
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
            <div key={category.id} className="relative h-[560px] bg-white rounded-lg overflow-hidden">
              <Image src={category.image} alt={category.title} fill className="object-cover" />
              <div className="absolute inset-0 flex p-6 text-white flex-col items-center pt-10 text-center">
                <h3 className={`text-2xl font-bold lg:text-3xl mb-3 px-4 w-full break-words ${category.id === '02' ? 'text-black' : ''}`}>{category.title}</h3>
                <p className={`text-base lg:text-lg mb-6 px-4 max-w-md ${category.id === '02' ? 'text-black' : ''}`}>{category.subtitle}</p>
                <button className="px-6 py-2 bg-[#FDD600] rounded-full text-black font-bold hover:bg-[#FFD700]/80 transition-colors duration-300 whitespace-nowrap">
                  {category.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coatings;