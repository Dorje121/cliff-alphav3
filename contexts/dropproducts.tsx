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
      image: "/homeimage/singleee.jpg",
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
      title: "DYNAMIC PROGRESSIVE",
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
    <section className="relative w-full py-16 bg-black overflow-hidden">
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
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#322b00]/50 min-w-[320px] md:min-w-[380px] rounded-xl lg:min-w-[400px] h-auto flex flex-col shadow-md overflow-hidden border border-yellow-900/30 hover:shadow-lg transition snap-center"
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
                  <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
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
    </section>
  );
}
