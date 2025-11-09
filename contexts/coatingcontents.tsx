"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CoatingCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  image: string;
  icon: string;
  gradient: string;
  buttonText: string;
}

interface GSAPElement extends Element {
  querySelector(selectors: string): GSAPElement | null;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void;
}

const categories: CoatingCategory[] = [
  {
    id: "01",
    title: "NOX COATING",
    subtitle: "Advanced Blue Light Protection",
    description:
      "Protect your eyes with NOX Coating, designed to filter harmful blue light from digital screens while maintaining true color perception.",
    slug: "nox-coating",
    image: "/homeimage/nox.png",
    icon: "mdi:monitor-eye",
    gradient: "from-purple-500/20 to-blue-600/10",
    buttonText: "Learn More",
  },
  {
    id: "02",
    title: "BLUE SAFE COATING",
    subtitle: "Complete Digital Protection",
    description:
      "Advanced blue light filtration technology that reduces eye strain and improves sleep quality during extended screen time.",
    slug: "blue-safe",
    image: "/bluesafe/Bluesafe.jpg",
    icon: "mdi:shield-sun",
    gradient: "from-blue-400/20 to-cyan-500/10",
    buttonText: "Learn More",
  },
  {
    id: "03",
    title: "DRIVE CLEAR COATING",
    subtitle: "Enhanced Visual Clarity",
    description:
      "Specially engineered lenses that provide superior optical clarity and reduce glare for safer driving in all conditions.",
    slug: "drive-clear",
    image: "/homeimage/driveclear.png",
    icon: "mdi:car-light-high",
    gradient: "from-amber-400/20 to-yellow-500/10",
    buttonText: "Learn More",
  },
  {
    id: "04",
    title: "PHOTO Z COATING",
    subtitle: "Premium Multi-Focal Excellence",
    description:
      "Advanced multi-focal progressive lenses with seamless transitions for crystal clear vision at all distances.",
    slug: "photoZ",
    image: "/homeimage/lense6.png",
    icon: "mdi:image-filter-center-focus",
    gradient: "from-green-400/20 to-emerald-500/10",
    buttonText: "Learn More",
  },
];

const CoatingContents: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
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
            },
          }
        );
      }

      // Card animations
      const coatingCards = gsap.utils.toArray(".coating-card") as GSAPElement[];
      coatingCards.forEach((card: GSAPElement, index: number) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0 bg-[length:50px_50px]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #FFD700 1px, transparent 0)",
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="h-16"></div>
        </div>

        {/* Alternating Layout Cards */}
        <div className="w-full">
          {categories.map((category: CoatingCategory, index: number) => (
            <motion.div
              key={category.id}
              className={`coating-card group relative flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-stretch h-[500px] w-full`}
            >
              {/* Image Side */}
              <div className="relative w-full lg:w-1/2 h-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="coating-image object-cover transition-transform duration-700"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="relative z-10 w-full lg:w-1/2 p-8 lg:p-12 bg-black flex flex-col justify-center">

                {/* Title */}
                <h3 className="text-4xl lg:text-5xl montserrat text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  {category.title}
                </h3>

               

                {/* Description */}
                <p className="text-yellow-200/80 text-lg leading-relaxed mb-8">
                  {category.description}
                </p>

                {/* Button */}
                <Link
                  href={`/Coating/${category.slug}`}
                  className="coating-button inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#FFD700] to-amber-400 rounded-full text-black font-bold hover:from-yellow-300 hover:to-amber-300 transition-all duration-300 transform hover:shadow-2xl hover:shadow-yellow-400/25 max-w-[180px] w-full justify-center"
                >
                  <span>{category.buttonText}</span>
                  <Icon
                    icon="mdi:arrow-right"
                    className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoatingContents;
