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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const categories = [
    {
      id: "01",
      title: "NOX COATING",
      subtitle: "Advanced Blue Light Protection",
      description:
        "Protect your eyes with NOX Coating, designed to filter harmful blue light",
      slug: "nox-coating",
      image: "/nox/nox1.jpg",
      alignment: "left",
      buttonText: "Learn more",
    },
    {
      id: "02",
      title: "BLUE SAFE COATING",
      subtitle: "Advanced Blue Light Protection",
      description:
        "Blue safe coating lenses provide advanced blue light protection",
      slug: "blue-safe-coating",
      image: "/nox/bluesafe.jpg",
      alignment: "right",
      buttonText: "Learn more",
    },
    {
      id: "03",
      title: "DRIVE CLEAR COATING",
      subtitle: "Premium Optical Excellence",
      description:
        "Lenses are specially designed to provide superior optical clarity",
      slug: "drive-clear-coating",
      image: "/nox/driveclear.jpg",
      alignment: "left",
      buttonText: "Learn more",
    },
    {
      id: "04",
      title: "PHOTO Z COATING",
      subtitle: "Premium Optical Excellence",
      description: "Advanced multi-focal progressive lenses for all distances",
      slug: "photo-z-coating",
      image: "/nox/photoz1.jpg",
      alignment: "right",
      buttonText: "Learn more",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
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
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
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
          },
        }
      );

      categories.forEach((_, index) => {
        const section = document.querySelector(`#category-${index}`);
        if (!section) return;

        const content = section.querySelector(".content");
        const imageContainer = section.querySelector(".image-container");

        if (content) {
          gsap.fromTo(
            content.children,
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
              },
            }
          );
        }

        if (imageContainer) {
          const isRightToLeft = index === 0 || index === 2;
          const initialRotation = isRightToLeft ? 25 : -25;
          const initialX = isRightToLeft ? 300 : -300;

          gsap.fromTo(
            imageContainer,
            {
              rotation: initialRotation,
              x: initialX,
              opacity: 0,
              scale: 0.9,
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
              },
            }
          );
        }
      });

      const buttons = document.querySelectorAll(".category-button");
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, { y: -2, duration: 0.3, ease: "power2.out" });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [categories]);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen py-6 sm:py-10 text-white overflow-hidden w-full bg-black"
    >
      <div className="w-full mx-auto shrink-0 py-4 sm:py-6 md:py-8 lg:py-16 relative px-4 sm:px-6 md:px-8">
        <div className="mb-6 sm:mb-10 md:mb-16 text-center">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-[#FFD700]"
          >
            Discover Our Coatings
          </h2>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-[#FFD700]/80 max-w-3xl mx-auto mt-3 sm:mt-6 font-light px-2 sm:px-0"
          >
            Explore our premium range of lens coatings designed to enhance your
            vision experience.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              id={`category-${index}`}
              className={`relative h-[45vh] sm:h-[70vh] md:h-[80vh] min-h-[300px] sm:min-h-[500px] md:min-h-[600px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden group ${
                index % 2 === 0 ? "sm:pr-0 md:pr-4" : "sm:pl-0 md:pl-4"
              }`}
            >
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover sm:object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                {/* Solid overlay for consistent darkness */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-start justify-center pt-[4%] sm:pt-[6%] md:pt-[5%] px-4 sm:px-8 z-10">
                <div className="content text-center w-full max-w-4xl">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl  text-[#FFD700] montserrat mb-2 sm:mb-4">
                      {category.title}
                    </h3>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FFD700] font-light montserrat">
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <Link
                      href={`/Coating/${category.slug}`}
                      className="category-button px-6 sm:px-8 py-2 sm:py-3 bg-[#FFD700] rounded-full text-zinc-800 text-base sm:text-lg font-medium hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[120px] sm:min-w-[140px] text-center"
                    >
                      {category.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coatings;
