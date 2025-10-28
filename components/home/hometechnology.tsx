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

const HomeTechnology = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const categories = [
    {
      id: "01",
      title: "DYNAMIC SERIES",
      subtitle: "Advanced Progressive Technology",
      description: "Psicoptic Technology, CTD (Continuum Design) 8K, Wear Fit Customization, Thickness Control Technology",
      slug: "cliff-dynamic",
      image: "/homeimage/girl.webp",
      alignment: "left",
      buttonText: "Explore Series"
    },
    {
      id: "02", 
      title: "CLIFF ZENN SERIES",
      subtitle: "Premium Optical Excellence",
      description: "Digital Ray Path Technology, Smart Add Technology, Personalization Parameters, Automatic Corridor Selection and INSET Optimization",
      slug: "cliff-zenn-series",
      image: "/product/10.jpg",
      alignment: "right",
      buttonText: "Discover Series"
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

        // Enhanced image animation with more extreme movement - works both directions
        const initialRotation = index === 0 ? 25 : -25;
        const initialX = index === 0 ? 300 : -300;
        
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
        {/* Header Section */}
        <div className="mb-8 md:mb-16">
          <div className="flex mb-4 md:mb-6">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-8xl font-medium montserrat text-[#FFD700]"
            >
              Cliff Technology
            </h2>
          </div>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-[#FFD700]/80 max-w-4xl poppins leading-relaxed"
          >
            Innovative optical solutions that redefine vision experience through cutting-edge technology and premium craftsmanship
          </p>
        </div>

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
                  
                  <p className="text-lg md:text-xl text-[#FFD700]/90 leading-relaxed poppins mb-6">
                    {category.description}
                  </p>

                  <TransitionLink
                    href={`/technology`}
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
                  </TransitionLink>
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

export default HomeTechnology;