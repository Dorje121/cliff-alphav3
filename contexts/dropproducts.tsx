"use client";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useRef } from "react";

export default function VisionCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: "01",
      title: "SINGLE VISION",
      subtitle: "Advanced Progressive Technology",
      image: "/homeimage/cliffsingle.png",
      points: [
        "Complete blue light protection lenses for modern digital lifestyle.",
        "Provides superior clarity and comfort for daily use.",
      ],
      slug: "single-vision",
    },
    {
      id: "02",
      title: "VERSATILE PROGRESSIVE",
      subtitle: "Premium Optical Excellence",
      image: "/homeimage/progressive.jpg",
      points: [
        "Photochromic lenses that adapt automatically to changing light.",
        "Delivers smooth transitions for clear vision indoors and outdoors.",
      ],
      slug: "versatile-progressive",
    },
    {
      id: "03",
      title: "DYNAMIX PROGRESSIVE",
      subtitle: "Premium Optical Excellence",
      image: "/product/9.jpg",
      points: [
        "Specialized lenses optimized for driving and road visibility.",
        "Reduces glare and enhances focus during long commutes.",
      ],
      slug: "dynamic-progressive",
    },
    {
      id: "04",
      title: "ZENN SERIES",
      subtitle: "Premium Optical Excellence",
      image: "/product/10.jpg",
      points: [
        "Multi-focal progressive lenses for seamless vision at all distances.",
        "Ideal for professionals needing all-round visual performance.",
      ],
      slug: "zenn-series",
    },
    {
      id: "05",
      title: "SPECIALITY LENSES",
      subtitle: "Premium Optical Excellence",
      image: "/product/6.jpg",
      points: [
        "Designed for specific visual needs such as computer or reading use.",
        "Engineered to deliver maximum comfort and sharpness.",
      ],
      slug: "speciality-lenses",
    },
  ];

  const scroll = (direction: string) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.9;
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-16 bg-black">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => {
            const cardContent = (
              <>
                {/* Image with Title Overlay */}
                <div className="w-full h-64 relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
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

                  {/* View Product Button */}
                  <div className="mt-auto pt-4 border-t border-yellow-900/30">
                    <div className="inline-flex items-center text-amber-400 text-base font-medium hover:text-white transition-colors duration-300 group">
                      {card.slug === 'zenn-series' ? 'View Collection' : 'Learn More'}
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </>
            );

            // Determine the correct href based on the card type
            let href = '';
            if (card.slug === 'zenn-series') {
              href = '/zennseries';
            } else if (card.slug === 'speciality-lenses') {
              href = '/speciality-lenses';
            } else {
              href = `/products/${card.slug}`;
            }

            return (
              <Link 
                href={href}
                key={card.id}
                className="bg-[#322b00]/50 rounded-lg flex flex-col shadow-md overflow-hidden border border-yellow-900/30 hover:shadow-lg transition-all duration-300 hover:border-amber-500/50 hover:transform hover:-translate-y-1 h-full"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
