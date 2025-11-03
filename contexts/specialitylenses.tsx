"use client";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useRef } from "react";

export default function SpecialityLenses() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: "01",
      title: "TINT LENSES",
      subtitle: "Personalized Style & Comfort",
      image: "/homeimage/singlelense.png",
      points: [
        "Wide range of color options",
        "Reduces glare and eye strain",
        "Enhances contrast and visual comfort"
      ],
      slug: "tint-lenses",
    },
    {
      id: "02",
      title: "PHOTOCHROME",
      subtitle: "Adaptive Light Technology",
      image: "/bluesafe/lense.jpg",
      points: [
        "Automatically adjusts to changing light",
        "Clear indoors, darkens in sunlight",
        "100% UV protection"
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
        "Ideal for all lighting conditions"
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
        "Helps maintain healthy sleep patterns"
      ],
      slug: "blueshield",
    },
    {
      id: "05",
      title: "POLARIZED LENSES",
      subtitle: "Superior Glare Reduction",
      image: "/pageimg/strandardlens.png",
      points: [
        "Eliminates harsh glare from reflective surfaces",
        "Enhances color and contrast",
        "Ideal for driving and outdoor activities"
      ],
      slug: "polarized-lenses",
    }
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
    <section id="specialty-lenses" className="relative w-full py-16 bg-black overflow-hidden scroll-mt-20">
      <div className="max-w-[120rem] mx-auto px-6 relative">
        {/* Title Section */}
         <div className="pb-12">
            <h2 className="text-2xl md:text-6xl montserrat text-[#FFD700] mb-4">
              Specialty Lenses
            </h2>
            <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl">
               Customized solutions for specific vision needs and lifestyles
            </p>
          </div>
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
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#322b00]/50 min-w-[340px] md:min-w-[420px] rounded-lg lg:min-w-[440px] h-auto flex flex-col shadow-md overflow-hidden border border-yellow-900/30 hover:shadow-lg transition snap-center"
            >
              <div className="w-full h-[280px] relative flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

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
