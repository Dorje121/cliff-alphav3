"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeTechnology = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      id: "01",
      title: "DYNAMIC SERIES",
      subtitle: "Advanced Progressive Technology",
      description: "Experience the next generation of dynamic progressive lenses with superior adaptation, wider viewing zones, and enhanced comfort for all-day wear. Our advanced technology ensures seamless transition between distances.",
      features: [
        "Wider Progressive Zones",
        "Enhanced Near Vision", 
        "Reduced Peripheral Distortion",
        "Quick Adaptation"
      ],
      slug: "cliff-dynamic",
      image: "/product/6.jpg",
      alignment: "left",
      buttonText: "Explore Dynamic Series"
    },
    {
      id: "02", 
      title: "CLIFF ZENN SERIES",
      subtitle: "Premium Optical Excellence",
      description: "The pinnacle of optical innovation, Zenn Series combines premium materials with cutting-edge technology for unparalleled visual clarity and style. Experience luxury in every frame.",
      features: [
        "Premium Materials",
        "Superior Clarity",
        "Advanced Coatings", 
        "Luxury Design"
      ],
      slug: "cliff-zenn-series",
      image: "/product/10.jpg",
      alignment: "right",
      buttonText: "Discover Zenn Series"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation
      gsap.fromTo(titleRef.current, 
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Subtitle animation
      gsap.fromTo(subtitleRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Category sections animation
      gsap.utils.toArray(".category-section").forEach((section: any, index) => {
        const content = section.querySelector(".category-content");
        const image = section.querySelector(".category-image");
        const features = section.querySelectorAll(".feature-item");
        const button = section.querySelector(".category-button");

        // Content animation
        gsap.fromTo(content.children,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: content,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        );

        // Image animation
        gsap.fromTo(image,
          {
            opacity: 0,
            scale: 0.8,
            x: index % 2 === 0 ? -100 : 100,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        );

        // Features stagger animation
        gsap.fromTo(features,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: features,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        );

      });

     

      // Hover animations for interactive elements
      const buttons = document.querySelectorAll('.category-button, .cta-button');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            y: -2,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Image hover animations
      const images = document.querySelectorAll('.category-image');
      images.forEach(image => {
        image.addEventListener('mouseenter', () => {
          gsap.to(image.querySelector('img'), {
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out",
          });
        });
        
        image.addEventListener('mouseleave', () => {
          gsap.to(image.querySelector('img'), {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden w-full">
      <div className="w-full mx-auto shrink-0 py-6 md:py-8 lg:py-16 relative px-4 md:px-8">
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
        <div ref={categoriesRef} className="space-y-20 lg:space-y-32">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-section flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                category.alignment === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              
              <div className="category-content flex-1 space-y-6 lg:space-y-8">
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium montserrat text-white opacity-0">
                  {category.title}
                </h3>

                
                <p className="text-lg md:text-xl text-[#FFD700]/90 leading-relaxed poppins opacity-0">
                  {category.description}
                </p>

                
                <div className="grid grid-cols-2 gap-4 py-4">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="feature-item flex items-center space-x-3 opacity-0">
                      <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                      <span className="text-[#FFD700] poppins text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                href={`/technology/${category.slug}`}
                className="category-button inline-flex items-center px-8 py-4 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-amber-400 font-semibold poppins opacity-0"
                >
                <span className="mr-3">{category.buttonText}</span>
                <Icon 
                    icon="mage:arrow-right" 
                    width="20" 
                    height="20" 
                />
                </Link>
              </div>

              
              <div className="category-image flex-1 relative opacity-0">
                <div className="relative rounded-3xl overflow-hidden group">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-3xl transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
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