"use client";
import React, { useRef, useEffect } from "react";

import Image from "next/image";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const categories = [
    {
      id: "01",
      title: "SINGLE VISION",
      subtitle: "Advanced Progressive Technology",
      description: "Complete blue light protection lenses for modern digital lifestyle and visibility",
      slug: "single-vision",
      image: "/homeimage/singleee.jpg",
      alignment: "left",
      buttonText: "View Product"
    },
    {
      id: "02", 
      title: "VERSATILE PROGRESSIVE",
      subtitle: "Premium Optical Excellence",
      description: "Photochromic lenses that adapt to changing light conditions automatically",
      slug: "versatile-progressive",
      image: "/homeimage/progressive.jpg",
      alignment: "right",
      buttonText: "View Product"
    },
    {
      id: "03", 
      title: "DYNAMIC PROGRESSIVE",
      subtitle: "Premium Optical Excellence",
      description: "Specialized lenses optimized for driving and enhanced road visibility",
      slug: "dynamic-progressive",
      image: "/product/9.jpg",
      alignment: "left",
      buttonText: "View Product"
    },
    {
      id: "04", 
      title:"ZENN SERIES",
      subtitle: "Premium Optical Excellence",
      description: "Multi-focal progressive lenses for seamless vision at all distances and visibility",
      slug: "zenn-series",
      image: "/product/10.jpg",
      alignment: "right",
      buttonText: "View Product"
    },
    {
      id: "05", 
      title: "SPECIALITY LENSES",
      subtitle: "Premium Optical Excellence",
      description: "Multi-focal progressive lenses for seamless vision at all distances and visibility",
      slug: "speciality-lenses",
      image: "/product/6.jpg",
      alignment: "left",
      buttonText: "View Product"
    },   
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
        // First, third, and fifth categories come from right to left
        const isRightToLeft = index % 2 === 0; // Even indices (0, 2, 4) come from right to left
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
    <div ref={sectionRef} className="min-h-screen bg-black text-[#FFD700] overflow-hidden w-full">
      <div className="w-full mx-auto py-6 md:py-8 lg:py-16 px-4 md:px-8">
         {/* Categories Grid */}
        <div className="space-y-28 py-8 lg:space-y-36">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-section flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                category.alignment === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="content-wrapper flex-1">
                <div className="category-content space-y-6 lg:space-y-8">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium montserrat text-white">
                    {category.title}
                  </h3>

                <Link
                  href={`/products/${category.slug}`}
                  className="category-button group relative inline-flex items-center px-6 py-3 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-amber-400 font-semibold poppins overflow-hidden"
                >
                  <span className="mr-3">{category.buttonText}</span>
                  <div className="relative w-5 h-5">
                    <Icon 
                      icon="mage:arrow-up" 
                      width="20" 
                      height="20" 
                      className="absolute rotate-45 transition-all duration-500 group-hover:-translate-y-6 group-hover:opacity-0"
                    />
                    <Icon 
                      icon="mage:arrow-up" 
                      width="20" 
                      height="20" 
                      className="absolute rotate-45 transition-all duration-500 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </div>
                </Link>
                </div>
              </div>

              {/* Image */}
              <div className="category-image flex-1 relative">
                <div className="category-image-inner relative rounded-3xl overflow-hidden h-[400px] lg:h-[450px]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-3xl"
                    priority
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/10 to-transparent rounded-2xl -z-10 blur-xl opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;