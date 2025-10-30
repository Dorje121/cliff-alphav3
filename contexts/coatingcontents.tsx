
"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Feature Icons Component
const FeatureIcon = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-amber-400/10 flex items-center justify-center mb-3 hover:bg-amber-400/20 transition-all duration-300 transform hover:scale-105">
      <Icon icon={icon} className="text-amber-400 text-3xl" />
    </div>
    <span className="text-base font-medium text-amber-400/90">{label}</span>
  </div>
);

// Feature Sets
const featureSets = {
  nox: [
    { icon: "mdi:shield-sun", label: "UV Protection" },
    { icon: "mdi:shield-check", label: "Scratch Resistant" },
    { icon: "mdi:eye-check", label: "Clear Vision" },
    { icon: "mdi:weather-sunny-off", label: "Anti-Reflection" },
    { icon: "mdi:water", label: "Hydrophobic" }
  ],
  blueSafe: [
    { icon: "mdi:shield-sun", label: "UV Protection" },
    { icon: "mdi:shield-check", label: "Scratch Resistant" },
    { icon: "mdi:eye-check", label: "Clear Vision" },
    { icon: "mdi:weather-sunny-off", label: "Anti-Reflection" },
      { icon: "mdi:monitor-eye", label: "Blue Light Protection" },
    { icon: "mdi:water", label: "Hydrophobic" },
  
    
  ],
  driveClear: [
    { icon: "mdi:weather-sunny-off", label: "Anti-Reflection" },
    { icon: "mdi:shield-sun", label: "UV Protection" },
    { icon: "mdi:shield-check", label: "Scratch Resistant" },
    { icon: "mdi:eye-check", label: "Clear Vision" },
    { icon: "mdi:monitor-eye", label: "Blue Light Protection" },
    { icon: "mdi:water", label: "Hydrophobic" },
    { icon: "mdi:car-light-high", label: "Glare Protection" }
  ],
  photoZ: [
    { icon: "mdi:weather-sunny", label: "Photochromic" },
    { icon: "mdi:shield-sun", label: "UV Protection" },
    { icon: "mdi:shield-check", label: "Scratch Resistant" },
    { icon: "mdi:eye-check", label: "Clear Vision" },
    { icon: "mdi:weather-sunny-off", label: "Anti-Reflection" },
    { icon: "mdi:water", label: "Hydrophobic" },
    { icon: "mdi:monitor-eye", label: "Blue Light Protection" },
    { icon: "mdi:car-light-high", label: "Glare Protection" }
  ]
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CoatingContents = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const categories = [
    {
      id: "01",
      title: "NOX",
      subtitle: "Advanced Progressive Technology",
      description: "Complete blue light protection lenses for modern digital lifestyle and visibility",
      slug: "cliff-dynamic",
      image: "/homeimage/nox.png",
      alignment: "left",
      buttonText: "Learn More "
    },
    {
      id: "02", 
      title: "BLUE SAFE",
      subtitle: "Advanced Blue Light Protection",
      description: "Complete blue light protection lenses for modern digital lifestyle and visibility",
      slug: "cliff-blue-safe",
      image: "/bluesafe/Bluesafe.jpg",
      alignment: "right",
      buttonText: "Learn More"
    },
    {
      id: "03", 
      title: "DRIVE CLEAR",
      subtitle: "Premium Optical Excellence",
      description: "Specialized lenses optimized for driving and enhanced road visibility",
      slug: "cliff-zenn-series",
      image: "/homeimage/driveclear.png",
      alignment: "left",
      buttonText: "Learn More"
    },
    {
      id: "04", 
      title: "Photo Z",
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
            toggleActions: "play reverse play reverse", // Changed this line
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
            toggleActions: "play reverse play reverse", // Changed this line
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
              toggleActions: "play reverse play", // Changed this line
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
              toggleActions: "play reverse play reverse", // Changed this line
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
    <div ref={sectionRef} className="min-h-screen bg-black text-[#FFD700] overflow-hidden w-full">
      <div className="w-full mx-auto py-6 md:py-8 lg:py-16 px-4 md:px-8">
        <div className="mb-8 md:mb-16">
          <div className="flex mb-4 md:mb-6">
            <h2 
              className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700]"
            >
              Stunning Clarity, Unparalleled Durability
            </h2>
          </div>
        </div>

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

                  <div className="space-y-4 pt-4">
                    {category.title === "NOX" && (
                      <div className="flex flex-wrap gap-8 pt-6">
                        {featureSets.nox.map((feature, index) => (
                          <FeatureIcon key={index} icon={feature.icon} label={feature.label} />
                        ))}
                      </div>
                    )}
                    
                    {category.title === "BLUE SAFE" && (
                      <div className="flex flex-wrap gap-8 pt-6">
                        {featureSets.blueSafe.map((feature, index) => (
                          <FeatureIcon key={index} icon={feature.icon} label={feature.label} />
                        ))}
                      </div>
                    )}
                    
                    {category.title === "DRIVE CLEAR" && (
                      <div className="flex flex-wrap gap-8 pt-6">
                        {featureSets.driveClear.map((feature, index) => (
                          <FeatureIcon key={index} icon={feature.icon} label={feature.label} />
                        ))}
                      </div>
                    )}
                    
                    {category.title === "Photo Z" && (
                      <>
                        <div className="flex flex-wrap gap-8 pt-6">
                          {featureSets.photoZ.map((feature, index) => (
                            <FeatureIcon key={index} icon={feature.icon} label={feature.label} />
                          ))}
                        </div>
                        <Link
                          href={`/technology`}
                          className="category-button group relative inline-flex items-center px-6 py-3 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-amber-400 font-semibold poppins overflow-hidden mt-8"
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
                      </>
                    )}
                    
                    {category.title !== "Photo Z" && (
                      <Link
                        href={`/technology`}
                        className="category-button group relative inline-flex items-center px-6 py-3 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-amber-400 font-semibold poppins overflow-hidden mt-8"
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
                    )}
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="category-image flex-1 relative w-full lg:w-auto">
                <div className="category-image-inner relative rounded-3xl overflow-hidden h-[400px] lg:h-[450px] w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-3xl"
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

export default CoatingContents;

