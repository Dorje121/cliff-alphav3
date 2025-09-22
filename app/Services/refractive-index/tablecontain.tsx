"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const lensData = [
  {
    id: 1,
    img: "/ai0.jpg",
    title: "Standard Lens",
    desc: "Best choice for low prescriptions, affordable and lightweight.",
    power: "0.00 to ±2.00",
    index: "1.50",
    feature: "Affordable, lightweight, suitable for low prescriptions.",
  },
  {
    id: 2,
    img: "/ai1.jpg",
    title: "Mild Prescription Lens",
    desc: "Designed for mild prescriptions with a thinner profile.",
    power: "±2.00 to ±4.00",
    index: "1.56",
    feature: "Thinner and lighter, ideal for mild prescriptions.",
  },
  {
    id: 3,
    img: "/ai2.jpg",
    title: "Moderate Lens",
    desc: "Great balance of thinness and comfort for medium prescriptions.",
    power: "±4.00 to ±6.00",
    index: "1.60",
    feature: "Thin and lightweight, great for moderate prescriptions.",
  },
  {
    id: 4,
    img: "/ai3.jpg",
    title: "High-Index Lens",
    desc: "Ideal for strong prescriptions with reduced thickness.",
    power: "±6.00 to ±8.00",
    index: "1.67",
    feature: "High-index lenses for significant thickness reduction.",
  },
  {
    id: 5,
    img: "/ai4.jpg",
    title: "Ultra-Thin Lens",
    desc: "Perfect for very strong prescriptions, ultra-thin and stylish.",
    power: "Above ±8.00",
    index: "1.74",
    feature: "Ultra-thin and lightweight for strong prescriptions.",
  },
];

const LensSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goNext = () => {
    setDirection("next");
    setCurrent((prev) => (prev === lensData.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setDirection("prev");
    setCurrent((prev) => (prev === 0 ? lensData.length - 1 : prev - 1));
  };

  return (
    <>
      {" "}
      <section className="  px-4 sm:px-6 md:px-7">
        <h2 className=" text-center mb-2 md:text-left mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium !bg-gradient-to-r !from-white !via-yellow-100 !to-yellow-200 !bg-clip-text !text-transparent px-2">
          Recommended Reflactive <br />
          Index <span className="text-yellow-400">by Prescription</span>
        </h2>

        <div className="relative text-white min-h-screen    flex flex-col justify-center overflow-hidden !h-fit md:py-0 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12 transition-all duration-2000">
            {/* Left side - Lens Image (fixed size + fade effect) */}
            <div className="w-full md:w-1/2 md:mx-auto flex justify-center">
              <div className="rounded-md  w-full">
                <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={lensData[current].id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={lensData[current].img}
                        alt={`Lens ${lensData[current].id}`}
                        fill
                        className="object-cover object-center rounded-xl"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right side - Info (slide effect) */}
            <div className="w-full md:mt-8 md:w-1/2 text-center md:text-left">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={lensData[current].id}
                  initial={{
                    x: direction === "next" ? 100 : -100,
                    opacity: 0,
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: direction === "next" ? -100 : 100,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-2 !bg-gradient-to-r !from-white !via-yellow-100 !to-yellow-200 !bg-clip-text !text-transparent">
                    {lensData[current].title}
                  </h2>

                  <p className="text-zinc-300 mb-16 text-sm sm:text-lg">
                    {lensData[current].desc}
                  </p>
                  <p className="mb-2 ">
                    <div className="font-semibold text-lg text-yellow-300 sm:text-2xl">
                      Power:{" "}
                      <span className="text-xl text-zinc-300 ">
                        {lensData[current].power}
                      </span>
                    </div>
                  </p>
                  <p className="mb-2 text-yellow-300">
                    <span className="font-semibold text-lg sm:text-2xl">
                      Index:{" "}
                    </span>
                    <span className="text-xl text-zinc-300 ">
                      {lensData[current].index}
                    </span>
                  </p>
                  <p className=" text-yellow-300">
                    <span className="font-semibold text-lg sm:text-2xl">
                      Features:{" "}
                    </span>
                    <span className="text-xl text-zinc-300">
                      {lensData[current].feature}
                    </span>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Prev Button */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-700/50 hover:bg-zinc-600"
          >
            <ChevronLeft className="w-6 h-6 text-yellow-300" />
          </button>

          {/* Next Button */}
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-700/50 hover:bg-zinc-600"
          >
            <ChevronRight className="w-6 h-6 text-yellow-300" />
          </button>

          {/* Bottom navigation dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {lensData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? "next" : "prev");
                  setCurrent(idx);
                }}
                className={`h-4  w-4 md:mt-10 mt-10 rounded-full ${current === idx ? "bg-yellow-200" : "bg-zinc-600"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LensSlider;
