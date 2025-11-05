"use client";
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [selectedCard, setSelectedCard] = useState<ProductCard | null>(null);

  interface ProductCard {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    slug: string;
    image: string;
    alignment: string;
    buttonText: string;
    points: string[];
  }

  const categories: ProductCard[] = [
    {
      id: "01",
      title: "SINGLE VISION",
      subtitle: "Advanced Progressive Technology",
      description:
        "Complete blue light protection lenses for modern digital lifestyle and visibility",
      slug: "single-vision",
      image: "/product/13.jpg",
      alignment: "left",
      buttonText: "Explore Series",
      points: [
        "Blue light protection",
        "Reduced eye strain",
        "Clear vision for digital devices",
      ],
    },
    {
      id: "02",
      title: "VERSATILE PROGRESSIVE",
      subtitle: "Premium Optical Excellence",
      description:
        "Photochromic lenses that adapt to changing light conditions automatically",
      slug: "versatile-progressive",
      image: "/homeimage/progressive.jpg",
      alignment: "right",
      buttonText: "Learn More",
      points: [
        "100% UV protection",
        "Enhanced color perception",
        "Reduced eye fatigue",
      ],
    },
    {
      id: "03",
      title: "DYNAMIC PROGRESSIVE",
      subtitle: "Premium Optical Excellence",
      description:
        "Specialized lenses optimized for driving and enhanced road visibility",
      slug: "dynamic-progressive",
      image: "/product/9.jpg",
      alignment: "left",
      buttonText: "Learn More",
      points: [
        "Enhanced contrast",
        "Reduced glare while driving",
        "Improved night vision",
      ],
    },
    {
      id: "04",
      title: "ZENN SERIES",
      subtitle: "Premium Optical Excellence",
      description:
        "Multi-focal progressive lenses for seamless vision at all distances and visibility",
      slug: "zenn-series",
      image: "/product/10.jpg",
      alignment: "right",
      buttonText: "Learn More",
      points: [
        "Multi-focal technology",
        "Seamless vision at all distances",
        "Reduced eye strain",
      ],
    },
    {
      id: "05",
      title: "SPECIALITY LENSES",
      subtitle: "Premium Optical Excellence",
      description:
        "Multi-focal progressive lenses for seamless vision at all distances and visibility",
      slug: "speciality-lenses",
      image: "/product/6.jpg",
      alignment: "left",
      buttonText: "Explore Series",
      points: [
        "Multi-focal technology",
        "Seamless vision at all distances",
        "Reduced eye strain",
      ],
    },
  ];

  const scroll = (direction: string) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.9;
    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

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

      gsap.utils
        .toArray<HTMLElement>(".category-section")
        .forEach((section, index) => {
          const content = section.querySelector(".category-content");
          const contentWrapper = section.querySelector(".content-wrapper");
          const imageContainer =
            section.querySelector<HTMLElement>(".category-image");

          if (!selectedCard && categories.length > 0) {
            setSelectedCard(categories[0]);
          }

          // Animate content wrapper if it exists
          if (contentWrapper) {
            gsap.fromTo(
              contentWrapper,
              { y: -150, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 70%",
                  toggleActions: "play reverse play reverse",
                },
              }
            );
          }

          // Animate content children if content exists
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

          // Animate image container if it exists
          if (imageContainer) {
            const isRightToLeft = index % 2 === 0;
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
      className="min-h-screen bg-black text-[#FFD700] overflow-hidden w-full"
    >
      <div className="w-full mx-auto py-6 md:py-8 lg:py-16 px-4 md:px-8">
        <div className="mb-8 md:mb-16">
          <div className="flex mb-4 md:mb-6 " ref={scrollRef}>
            <h2
              ref={titleRef}
              className="w-full text-4xl text-center md:text-8xl font-medium montserrat text-[#FFD700]"
            >
              Discover Our Products
            </h2>
          </div>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-[#FFD700]/80 max-w-4xl mx-auto poppins leading-relaxed text-center"
          >
            Discover our comprehensive range of premium optical solutions,
            advanced lens technologies, and professional services designed to
            enhance your vision experience.
          </p>
        </div>

        <div className="max-w-[120rem] mx-auto px-6 relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md text-yellow-400 p-3 rounded-full hover:bg-black/50 z-10 cursor-pointer transition-colors"
          >
            <ChevronLeft size={24} className="text-yellow-400" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md text-yellow-400 p-3 rounded-full hover:bg-black/50 z-10 cursor-pointer transition-colors"
          >
            <ChevronRight size={24} className="text-yellow-400" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            {categories.map((card) => (
              <div
                key={card.id}
                className="bg-[#322b00]/50 min-w-[340px] md:min-w-[420px] rounded-lg lg:min-w-[440px] h-auto flex flex-col shadow-md overflow-hidden border border-yellow-900/30 hover:shadow-lg transition snap-center"
              >
                {/* Image with Title Overlay */}
                <div className="w-full h-[280px] relative flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div className="px-6 pt-6 pb-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-amber-400 text-sm">{card.subtitle}</p>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <Check size={16} className="text-yellow-400 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* View Product Button */}
                  <div className="mt-6 flex justify-end">
                    <Link
                      href={`/products/${card.slug}`}
                      className="inline-flex items-center text-amber-400 text-base font-medium hover:text-white transition-colors duration-300 group"
                    >
                      Learn More
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
