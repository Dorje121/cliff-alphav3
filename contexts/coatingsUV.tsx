"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CoatingsUV = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const uvCoatings = [
    {
      id: "01",
      title: "Cliff Blue Safe UV",
      subtitle: "Superior UV Protection",
      description: "Advanced UV protection that blocks 100% of harmful UVA and UVB rays while maintaining exceptional clarity",
      slug: "cliff-blue-safe-uv",
      image: "/bluesafe/blue.png",
      alignment: "left",
      buttonText: "Learn More"
    },
    {
      id: "02",
      title: "Cliff Phot Z UV",
      subtitle: "Photochromic UV Defense",
      description: "Adaptive UV protection that automatically adjusts to changing light conditions while maintaining optimal eye safety",
      slug: "cliff-phot-z-uv",
      image: "/bluesafe/photoz.jpg",
      alignment: "right",
      buttonText: "Discover More"
    },
    {
      id: "03",
      title: "Cliff Drive Clear UV",
      subtitle: "Polarized UV Clarity",
      description: "Enhanced UV protection with polarization to reduce glare and improve visual comfort during driving and outdoor activities",
      slug: "cliff-drive-clear-uv",
      image: "/bluesafe/driveclear.png",
      alignment: "left",
      buttonText: "View Details"
    }
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animation for section entrance
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // Animate title and subtitle
      gsap.from([titleRef.current, subtitleRef.current], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Animate each coating card
      gsap.utils.toArray(".coating-card").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-black">
      <div className="max-w-[94rem] mx-auto px-4">
        <div className="text-left mb-16 max-w-4xl">
          <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold text-white mb-4">
            UV Protection Coatings
          </h2>
          <p ref={subtitleRef} className="text-lg text-gray-300">
            Advanced UV protection technologies for your eyes
          </p>
        </div>

        <div className="space-y-20">
          {uvCoatings.map((coating, index) => (
            <div
              key={coating.id}
              className={`coating-card flex flex-col ${
                coating.alignment === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center justify-between gap-10`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={coating.image}
                    alt={coating.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {coating.title}
                </h3>
                <p className="text-lg text-yellow-400 font-medium mb-4">
                  {coating.subtitle}
                </p>
                <p className="text-gray-300 mb-6">
                  {coating.description}
                </p>
                <button className="px-6 py-3 bg-[#FFD700] text-black font-medium rounded-full hover:bg-yellow-500 transition-colors duration-300 flex items-center gap-2 group category-button">
                  {coating.buttonText}
                  <Icon 
                    icon="solar:arrow-right-outline" 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoatingsUV;