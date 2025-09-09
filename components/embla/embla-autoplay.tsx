import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import "./embla.css";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  autoplayDelay?: number; // in milliseconds
  variant?: "default" | "hero"; // Add variant prop
};

const EmblaAutoplayCarousel: React.FC<PropType> = (props) => {
  const { slides, options, autoplayDelay = 1000, variant = "default" } = props; // Default 1 second

  const autoplayPlugin = Autoplay({
    delay: autoplayDelay,
    stopOnInteraction: false, // Continue autoplay even after user interaction
    stopOnMouseEnter: true, // Pause on hover
    stopOnFocusIn: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplayPlugin]);

  useEffect(() => {
    if (!emblaApi) return;

    // Optional: Add event listeners for autoplay events
    const onAutoplay = () => {
      // console.log('Autoplay triggered');
    };

    emblaApi.on("autoplay:play", onAutoplay);

    return () => {
      emblaApi.off("autoplay:play", onAutoplay);
    };
  }, [emblaApi]);

  return (
    <section className={`embla ${variant === "hero" ? "embla--hero" : ""}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((imageSrc, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__content">
                <Image
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  width={600}
                  height={400}
                  className={`embla__slide__img ${
                    variant === "hero" ? "h-[400px]" : ""
                  }`}
                />
                <div className="embla__slide__overlay" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaAutoplayCarousel;
