"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Coatings = () => {
  const services = [
    {
      id: "01",
      title: "NOX",
      description:
        "Complete blue light protection lenses for modern digital lifestyle",
      category: "Lenses",
      slug: "cliff-blue-safe-lenses",
      image: "/product/03.jpeg",
    },
    {
      id: "02",
      title: "BLUE SAFE",
      description:
        "Photochromic lenses that adapt to changing light conditions automatically",
      category: "Lenses",
      slug: "cliff-photo-z-lenses",
      image: "/product/04.jpeg",
    },
    {
      id: "03",
      title: "DRIVE CLEAR",
      description:
        "Specialized lenses optimized for driving and enhanced road visibility",
      category: "Lenses",
      slug: "cliff-drive-clear-lenses",
      image: "/product/5.jpg",
    },
    {
      id: "04",
      title: "  PHOTO Z",
      description:
        "Multi-focal progressive lenses for seamless vision at all distances",
      category: "Progressive",
      slug: "cliff-progressive-versatile",
      image: "/product/6.jpg",
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("wheel", handleWheel);
    };
  }, [isDropdownOpen]);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
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
          duration: 1,
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

      // Services animation
      gsap.fromTo(servicesRef.current?.children || [],
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Service item hover animations
      const serviceItems = document.querySelectorAll('.service-item');
      serviceItems.forEach(item => {
        // Lift effect on hover
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        // Image scale animation
        const image = item.querySelector('img');
        if (image) {
          item.addEventListener('mouseenter', () => {
            gsap.to(image, {
              scale: 1.05,
              duration: 0.5,
              ease: "power2.out",
            });
          });
          
          item.addEventListener('mouseleave', () => {
            gsap.to(image, {
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          });
        }

        // Button arrow animation
        const button = item.querySelector('.learn-more-button');
        if (button) {
          const arrow = button.querySelector('svg');
          if (arrow) {
            item.addEventListener('mouseenter', () => {
              gsap.to(arrow, {
                x: 3,
                duration: 0.3,
                ease: "power2.out",
              });
            });
            
            item.addEventListener('mouseleave', () => {
              gsap.to(arrow, {
                x: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            });
          }
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div ref={sectionRef} className="min-h-screen text-black overflow-x-hidden w-full">
      <div className="w-full mx-auto shrink-0 py-6 md:py-8 lg:py-16 relative px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-8 md:mb-16">
          <div className="flex mb-4 md:mb-6"></div>
          <h2 
            ref={titleRef}
            className="text-4xl md:text-8xl font-medium montserrat text-[#FFD700] opacity-0"
          >
            Discover Our Coatings
          </h2>

          <p 
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-[#FFD700] max-w-3xl poppins mt-4 opacity-0"
          >
            Discover our comprehensive range of premium optical solutions,
            advanced lens technologies, and professional services designed to
            enhance your vision experience.
          </p>
        </div>

        {/* Services List */}
        <div ref={servicesRef} className="space-y-4">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="service-item opacity-0">
                <Link
                  href={`/Services/${service.slug}`}
                  className="cursor-pointer block group"
                >
              <div
                className={`relative backdrop-blur-sm border border-zinc-800 overflow-hidden bg-[#322b00] rounded-lg md:rounded-xl`}
              >
                {/* Mobile Layout */}
                <div className="block md:hidden">
                  <div className="relative">
                    {/* Image Section - Mobile */}
                    <div className="w-full h-[200px] relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />  
                    <div className="p-4">
                        {/* Category Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-medium mb-3">
                          {service.category}
                        </div>

                        {/* Service Title */}
                        <h3 className="text-xl font-bold mb-3 montserrat bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent group-hover:text-amber-400 font-family-montserrat">
                          {service.title}
                        </h3>

                        {/* Service Description */}
                        <p className="text-zinc-300 group-hover:text-white leading-relaxed text-sm mb-4 poppins">
                          {service.description}
                        </p>

                        {/* Learn More Button */}
                        <div className="learn-more-button inline-flex items-center text-amber-400 font-medium group-hover:text-white text-sm poppins">
                          <span className="mr-2">Learn More</span>
                          <svg
                            className="w-4 h-4 transition-transform duration-300"
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
                       <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">  
                         {service.id}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div
                  className={`hidden md:flex p-5 ${
                    index % 1 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-start justify-between`}
                >
                  {/* Service Number Overlay - Desktop */}
                  <div className={``}>
                    <div className="text-center text-6xl lg:text-6xl font-bold text-white/20 group-hover:text-amber-400/40 transition-colors duration-500">
                      {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                    </div>
                  </div>

                  {/* Image Section - Desktop */}
                  <div className="w-[300px] h-[200px] relative overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-2xl transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-center">Type</h3>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/20 text-amber-400 text-sm font-medium mb-6">
                      {service.category}
                    </div>
                  </div>

                  {/* Content Section - Desktop */}
                  <div
                    className={`w-1/3 ${
                      index % 2 === 0
                        ? "lg:pl-12 lg:pr-16"
                        : "lg:pr-12 lg:pl-16"
                    }`}
                  >
                    {/* Service Title */}
                    <h3 className="text-2xl lg:text-3xl xl:text-3xl font-bold montserrat mb-2 text-[#FFD700] group-hover:text-amber-300 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-[#FFD700] leading-relaxed text-base lg:text-lg mb-8 poppins group-hover:text-amber-200 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <div className="learn-more-button inline-flex items-center text-amber-400 font-medium group-hover:text-white transition-colors duration-300">
                    <span className="mr-2 poppins">Learn More</span>
                    <Icon icon="mage:external-link" width="24" height="24" />
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

export default Coatings;