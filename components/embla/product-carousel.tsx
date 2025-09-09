"use client";
import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductSlide = {
  id: string;
  image: string;
  title: string;
  color?: string;
};

type PropType = {
  slides: ProductSlide[];
  options?: EmblaOptionsType;
  showThumbnails?: boolean;
  showNavigation?: boolean;
  className?: string;
};

const ProductCarousel: React.FC<PropType> = ({
  slides,
  options,
  showThumbnails = true,
  showNavigation = true,
  className = "",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback(() => {
    // Initialize if needed
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit();
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className={`product-carousel ${className}`}>
      {/* Main Carousel */}
      <div className="relative">
        <div
          className="embla__viewport overflow-hidden rounded-2xl"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div
                className="embla__slide flex-[0_0_100%] min-w-0"
                key={slide.id}
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain p-8"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {showNavigation && slides.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg z-10"
              onClick={scrollPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg z-10"
              onClick={scrollNext}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}

        {/* Slide Counter */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          {selectedIndex + 1} / {slides.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {showThumbnails && slides.length > 1 && (
        <div className="flex justify-center mt-4 gap-3 px-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === selectedIndex
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
