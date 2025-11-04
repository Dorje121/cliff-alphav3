"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
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
      subtitle: "Advanced Blue Light Protection",
      description: "Protect your eyes with NOX Coating, designed to filter harmful blue light",
      slug: "nox-coating",
      image: "/homeimage/lens.png",
      alignment: "left",
      buttonText: "View Details"
    },
    {
      id: "02", 
      title: "BLUE SAFE COATING",
      subtitle: "Advanced Blue Light Protection",
      description: "Blue safe coating lenses provide advanced blue light protection",
      slug: "blue-safe-coating",
      image: "/homeimage/lense6.png",
      alignment: "right",
      buttonText: "View Details"
    },
    {
      id: "03", 
      title: "DRIVE CLEAR COATING",
      subtitle: "Premium Optical Excellence",
      description: "Lenses are specially designed to provide superior optical clarity",
      slug: "drive-clear-coating",
      image: "/homeimage/driveclear.png",
      alignment: "left",
      buttonText: "View Details"
    },
    {
      id: "04", 
      title: "PHOTO Z COATING",
      subtitle: "Premium Optical Excellence",
      description: "Advanced multi-focal progressive lenses for all distances",
      slug: "photo-z-coating",
      image: "/homeimage/photz.png",
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

      categories.forEach((_, index) => {
        const section = document.querySelector(`#category-${index}`);
        if (!section) return;

        const contentWrapper = section.querySelector('.content-wrapper');
        const content = section.querySelector('.content');
        const imageContainer = section.querySelector('.image-container');

        if (contentWrapper) {
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
        }

        if (content) {
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
        }

        if (imageContainer) {
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
        }
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
  }, [categories]);

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
              id={`category-${index}`}
              className="category-section relative h-[500px] bg-white rounded-none overflow-hidden"
            >
              <Image src={category.image} alt={category.title} fill className="object-cover" />
              <div className="absolute inset-0 flex p-6 text-white flex-col items-center pt-10 text-center">
                <h3 className="text-2xl font-bold lg:text-3xl mb-3 px-4 w-full break-words">{category.title}</h3>
                <p className="text-base lg:text-lg mb-6 px-4 max-w-md">{category.subtitle}</p>
                <Link 
                  href={`/Coating/${category.slug}`}
                  className="px-6 py-2 bg-[#FDD600] rounded-full text-black font-bold hover:bg-[#FFD700] transition-all duration-300 whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
                >
                  {category.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coatings;
