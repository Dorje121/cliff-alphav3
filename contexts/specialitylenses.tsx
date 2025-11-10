"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink, Check } from "lucide-react";
import Floating from "@/components/ui/paralaxfloating";

export default function SpecialityLenses() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: "01",
      title: "TINT LENSES",
      subtitle: "Personalized Style & Comfort",
      image: "/lenses/tinted.png",
      points: [
        "Wide range of color options",
        "Reduces glare and eye strain",
        "Enhances contrast and visual comfort",
      ],
      slug: "tint-lenses",
    },
    {
      id: "02",
      title: "PHOTOCHROME",
      subtitle: "Adaptive Light Technology",
      image: "/lenses/photochrome.png",
      points: [
        "Automatically adjusts to changing light",
        "Clear indoors, darkens in sunlight",
        "100% UV protection",
      ],
      slug: "photochrome",
    },
    {
      id: "03",
      title: "PHOTOCHROME PLUS",
      subtitle: "Advanced Light Adaptation",
      image: "/bluesafe/lense.png",
      points: [
        "Faster transition between light and dark",
        "Enhanced durability and performance",
        "Ideal for all lighting conditions",
      ],
      slug: "photochrome-plus",
    },
    {
      id: "04",
      title: "BLUESHIELD",
      subtitle: "Digital Eye Protection",
      image: "/bluesafe/blue.png",
      points: [
        "Blocks harmful blue light from screens",
        "Reduces digital eye strain",
        "Helps maintain healthy sleep patterns",
      ],
      slug: "blueshield",
    },
    {
      id: "05",
      title: "POLARIZED LENSES",
      subtitle: "Superior Glare Reduction",
      image: "/polarized/polo.png",
      points: [
        "Eliminates harsh glare from reflective surfaces",
        "Enhances color and contrast",
        "Ideal for driving and outdoor activities",
      ],
      slug: "polarized-lenses",
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

  return (
    <section id="specialty-lenses" className="w-full py-16 bg-black scroll-mt-20">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-1">
        {/* Title Section */}
        <div className="text-center pb-12">
          <h2 className="text-3xl md:text-5xl montserrat text-[#FFD700] mb-4">
            Speciality Lenses
          </h2>
          <p className="text-lg md:text-xl text-amber-400 max-w-3xl mx-auto">
            Customized solutions for specific vision needs and lifestyles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => {
            // Determine the correct link based on card ID
            const getLink = () => {
              switch(card.id) {
                case '01': return '/speciality-lenses/cliff-tinted-lenses';
                case '02': return '/speciality-lenses/photochrome';
                case '03': return '/speciality-lenses/photochrome-plus';
                case '04': return '/speciality-lenses/blue-shield';
                case '05': return '/speciality-lenses/polarized-lenses';
                default: return '#';
              }
            };

            return (
              <Link
                key={card.id}
                href={getLink()}
                className="bg-[#322b00]/50 rounded-lg flex flex-col shadow-md overflow-hidden border border-yellow-900/30 hover:shadow-lg transition-all duration-300 hover:border-amber-500/50 hover:transform hover:-translate-y-1 h-full"
              >
                <div className="w-full h-64 relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-amber-400 text-sm">{card.subtitle}</p>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <Check size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-yellow-900/30">
                    <div className="inline-flex items-center text-amber-400 text-base font-medium hover:text-white transition-colors duration-300 group">
                      Learn More
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
      </div>

      
    </section>
  );
}
