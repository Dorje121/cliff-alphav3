"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger on client side only
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// TypeScript Interfaces
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

// Coating Categories Data
const categories: CoatingCategory[] = [
  {
    id: "01",
    title: "NOX COATING",
    subtitle: "Advanced Blue Light Protection",
    description:
      "Protect your eyes with NOX Coating, designed to filter harmful blue light from digital screens while maintaining true color perception",
    slug: "nox-coating",
    image: "/homeimage/nox.png",
    icon: "mdi:monitor-eye",
    gradient: "from-purple-500/20 to-blue-600/10",
    buttonText: "Explore Technology",
  },
  {
    id: "02",
    title: "BLUE SAFE COATING",
    subtitle: "Complete Digital Protection",
    description:
      "Advanced blue light filtration technology that reduces eye strain and improves sleep quality during extended screen time",
    slug: "blue-safe-coating",
    image: "/bluesafe/Bluesafe.jpg",
    icon: "mdi:shield-sun",
    gradient: "from-blue-400/20 to-cyan-500/10",
    buttonText: "Discover Benefits",
  },
  {
    id: "03",
    title: "DRIVE CLEAR COATING",
    subtitle: "Enhanced Visual Clarity",
    description:
      "Specially engineered lenses that provide superior optical clarity and reduce glare for safer driving in all conditions",
    slug: "drive-clear-coating",
    image: "/homeimage/driveclear.png",
    icon: "mdi:car-light-high",
    gradient: "from-amber-400/20 to-yellow-500/10",
    buttonText: "View Features",
  },
  {
    id: "04",
    title: "PHOTO Z COATING",
    subtitle: "Premium Multi-Focal Excellence",
    description:
      "Advanced multi-focal progressive lenses with seamless transitions for crystal clear vision at all distances",
    slug: "photo-z-coating",
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
              toggleActions: "play reverse play reverse",
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
            y: 80,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // Image hover effect
        const image = card.querySelector(".coating-image");
        if (image) {
          const handleMouseEnter = () => {
            gsap.to(image, { scale: 1.05, duration: 0.6, ease: "power2.out" });
          };

          const handleMouseLeave = () => {
            gsap.to(image, { scale: 1, duration: 0.6, ease: "power2.out" });
          };

          card.addEventListener("mouseenter", handleMouseEnter);
          card.addEventListener("mouseleave", handleMouseLeave);

          // Cleanup event listeners
          return () => {
            card.removeEventListener("mouseenter", handleMouseEnter);
            card.removeEventListener("mouseleave", handleMouseLeave);
          };
        }
      });

      // Button animations
      const buttons = document.querySelectorAll(".coating-button");
      buttons.forEach((button) => {
        const handleMouseEnter = () => {
          gsap.to(button, {
            y: -4,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(button, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup event listeners
        return () => {
          button.removeEventListener("mouseenter", handleMouseEnter);
          button.removeEventListener("mouseleave", handleMouseLeave);
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-20 px-4 md:px-8 overflow-hidden"
    >
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

      <div className="relative z-10 max-w-8xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full" />
            <Icon
              icon="mdi:star-four-points"
              className="text-[#FFD700] mx-4"
              width={24}
              height={24}
            />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full" />
          </motion.div>

          <h2
            ref={titleRef}
            className="montserrat text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight"
          >
            Advanced{" "}
            <span className="bg-gradient-to-r from-[#FFD700] via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Coatings
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#FFD700]/80 max-w-4xl mx-auto leading-relaxed">
            Discover our premium collection of lens coatings engineered for
            superior protection, clarity, and visual performance in every
            environment
          </p>
        </div>

        {/* Enhanced 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category: CoatingCategory, index: number) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="coating-card group relative h-[500px] rounded-3xl overflow-hidden"
            >
              {/* Main Card Container */}
              <div className="relative h-full bg-gradient-to-br from-black/80 to-gray-900/90 backdrop-blur-sm border border-yellow-800/30 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden">
                {/* Background Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-yellow-400/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                {/* Image Container */}
                <div className="absolute inset-0 coating-image-container">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="coating-image object-cover transition-transform duration-700"
                    priority={index < 2} // Prioritize loading first two images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    {/* Icon and Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-amber-500/10 rounded-2xl flex items-center justify-center border border-yellow-800/30 group-hover:border-yellow-400/50 transition-all duration-500">
                          <Icon
                            icon={category.icon}
                            width={24}
                            height={24}
                            className="text-[#FFD700] group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <span className="text-[#FFD700]/60 text-sm font-mono">
                          {category.id}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                      {category.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xl text-[#FFD700] font-semibold group-hover:text-yellow-200 transition-colors duration-300">
                      {category.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-yellow-200/80 text-lg leading-relaxed max-w-md group-hover:text-yellow-100/90 transition-colors duration-300">
                      {category.description}
                    </p>

                    {/* Button */}
                    <div className="pt-4">
                      <Link
                        href={`/Coating/${category.slug}`}
                        className="coating-button group/btn inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-amber-400 rounded-full text-black font-bold hover:from-yellow-300 hover:to-amber-300 transition-all duration-300 transform hover:shadow-2xl hover:shadow-yellow-400/25"
                      >
                        <span className="relative z-10">
                          {category.buttonText}
                        </span>
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
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mt-20 text-center"
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl" />
          </div>

          {/* Main CTA Container */}
          <div className="relative bg-gradient-to-r from-yellow-400/10 to-amber-400/5 backdrop-blur-sm border border-yellow-800/30 rounded-2xl p-8 md:p-12 mx-auto max-w-8xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-amber-400 rounded-full flex items-center justify-center shadow-lg">
                <Icon
                  icon="mdi:message-text"
                  className="text-black"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            {/* CTA Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-5xl font-medium ">
                Ready to Transform Your Vision Experience?
              </h3>

              <p className="text-lg md:text-xl text-[#FFD700]/80 max-w-2xl mx-auto leading-relaxed">
                Can&apos;t find what you&apos;re looking for or need
                personalized recommendations? Our optical experts are here to
                help you choose the perfect coating solution.
              </p>

              {/* Enhanced CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#FFD700] to-amber-400 rounded-full text-black font-bold hover:from-yellow-300 hover:to-amber-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 min-w-[200px] text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Contact Our Experts
                    <Icon
                      icon="mdi:arrow-right"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      width={20}
                      height={20}
                    />
                  </span>
                  <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>

                <Link
                  href="/products"
                  className="group px-6 py-4 border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black rounded-full font-semibold transition-all duration-300 transform hover:scale-105 min-w-[160px] text-center"
                >
                  Browse All Products
                </Link>
              </div>

              {/* Support Info */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#FFD700]/60 pt-4">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:clock-outline" width={16} height={16} />
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:expert" width={16} height={16} />
                  <span>Optical Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:chat-processing" width={16} height={16} />
                  <span>Free Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoatingContents;
