import EmblaCarousel from "@/components/embla/EmblaCarousel";
import React from "react";

const page = () => {
  const imageSlides = [
    "/c1.jpeg",
    "/c2.jpeg",
    "/c3.jpeg",
    "/c4.jpeg",
    "/c5.jpeg",
  ];

  return (
    <div>
      <EmblaCarousel slides={imageSlides} options={{ loop: true }} />
    </div>
  );
};

export default page;
