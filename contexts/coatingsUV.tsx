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

// TypeScript Interfaces
interface UVCoating {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  image: string;
  alignment: "left" | "right";
  buttonText: string;
  icon: string;
  gradient: string;
  features: string[];
}

interface GSAPElement extends Element {
  querySelector(selectors: string): GSAPElement | null;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void;
}

const CoatingsUV: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const uvCoatings: UVCoating[] = [
    {
      id: "01",
      title: "Cliff Blue Safe UV",
      subtitle: "Advanced Blue Light & UV Protection",
      description:
        "Comprehensive protection that blocks 100% of harmful UVA and UVB rays while filtering high-energy blue light. Maintains exceptional visual clarity and color accuracy for digital and outdoor use.",
      slug: "cliff-blue-safe-uv",
      image: "/bluesafe/blue.png",
      alignment: "left",
      buttonText: "Explore Protection",
      icon: "mdi:shield-sun",
      gradient: "from-blue-500/20 to-cyan-600/10",
      features: [
        "100% UV Protection",
        "Blue Light Filtering",
        "Anti-Reflective",
        "Scratch Resistant",
      ],
    },
    {
      id: "02",
      title: "Cliff Phot Z UV",
      subtitle: "Adaptive Photochromic Defense",
      description:
        "Intelligent UV protection that automatically adapts to changing light conditions. Transitions seamlessly from clear to dark while maintaining optimal eye safety and visual comfort in any environment.",
      slug: "cliff-phot-z-uv",
      image: "/bluesafe/photoz.jpg",
      alignment: "right",
      buttonText: "Discover Adaptability",
      icon: "mdi:weather-sunny",
      gradient: "from-purple-500/20 to-pink-600/10",
      features: [
        "Light Adaptive",
        "Instant Transition",
        "UV Blocking",
        "All-Weather Protection",
      ],
    },
    {
      id: "03",
      title: "Cliff Drive Clear UV",
      subtitle: "Polarized Visual Clarity",
      description:
        "Premium UV protection enhanced with advanced polarization technology. Significantly reduces glare and improves visual comfort during driving, sports, and outdoor activities while maintaining true color perception.",
      slug: "cliff-drive-clear-uv",
      image: "/bluesafe/driveclear.png",
      alignment: "left",
      buttonText: "View Technology",
      icon: "mdi:car-light-high",
      gradient: "from-amber-500/20 to-yellow-600/10",
      features: [
        "Polarized Clarity",
        "Glare Reduction",
        "Enhanced Contrast",
        "Impact Resistant",
      ],
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Enhanced section entrance
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Title animation with stagger
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Enhanced card animations with parallax effect
      const coatingCards = gsap.utils.toArray(
        ".uv-coating-card"
      ) as GSAPElement[];

      coatingCards.forEach((card: GSAPElement, i: number) => {
        const image = card.querySelector(".uv-image");
        const content = card.querySelector(".uv-content");

        // Card entrance
        gsap.fromTo(
          card,
          {
            x: i % 2 === 0 ? -80 : 80,
            opacity: 0,
            scale: 0.95,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.3,
          }
        );

        // Image parallax effect
        if (image) {
          gsap.to(image, {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        // Content fade in
        if (content) {
          gsap.fromTo(
            content.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              delay: 0.5,
              scrollTrigger: {
                trigger: content,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full" />
            <Icon
              icon="mdi:shield-check"
              className="text-[#FFD700] mx-4"
              width={28}
              height={28}
            />
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full" />
          </motion.div>

          <h2
            ref={titleRef}
            className="montserrat text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
          >
            Advanced{" "}
            <span className="bg-gradient-to-r from-[#FFD700] via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              UV Protection
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#FFD700]/80 max-w-4xl mx-auto leading-relaxed">
            Comprehensive UV defense technologies engineered to protect your
            eyes while maintaining exceptional visual clarity and comfort in all
            environments
          </p>
        </div>

        {/* Enhanced Coating Cards */}
        <div className="space-y-24 md:space-y-32">
          {uvCoatings.map((coating, index) => (
            <motion.div
              key={coating.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`uv-coating-card group relative ${
                coating.alignment === "right"
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } flex flex-col items-center justify-between gap-12 md:gap-16`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden">
                  <div className="uv-image absolute inset-0">
                    <Image
                      src={coating.image}
                      alt={coating.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </div>
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${coating.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm rounded-2xl px-4 py-2 border border-yellow-800/30">
                    <span className="text-[#FFD700] font-mono text-sm">
                      {coating.id}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 uv-content">
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-amber-500/10 rounded-2xl flex items-center justify-center border border-yellow-800/30 group-hover:border-yellow-400/50 transition-all duration-500">
                      <Icon
                        icon={coating.icon}
                        width={28}
                        height={28}
                        className="text-[#FFD700] group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                      {coating.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xl md:text-2xl text-[#FFD700] font-semibold group-hover:text-yellow-200 transition-colors duration-300">
                    {coating.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-yellow-200/80 leading-relaxed group-hover:text-yellow-100/90 transition-colors duration-300">
                    {coating.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3 py-4">
                    {coating.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-[#FFD700] rounded-full" />
                        <span className="text-yellow-300/90 text-sm md:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <Link
                    href={`/coatings/${coating.slug}`}
                    className="uv-coating-button group/btn inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-amber-400 rounded-full text-black font-bold hover:from-yellow-300 hover:to-amber-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 mt-4"
                  >
                    <span className="relative z-10">{coating.buttonText}</span>
                    <Icon
                      icon="mdi:arrow-right"
                      className="ml-2 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
                      width={20}
                      height={20}
                    />
                    <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                  </Link>
                </div>
              </div>

              {/* Connecting Line (Desktop only) */}
              <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#FFD700] to-transparent opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoatingsUV;
