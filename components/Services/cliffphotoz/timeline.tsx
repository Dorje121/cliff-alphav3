"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans"
      ref={containerRef}
    >
      <div className="pl-0 md:pl-8 lg:pl-12 flex justify-between items-start py-12 border-b border-gray-800">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Cliff Photo-Z <span className="text-yellow-400">UV Lenses</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Advanced photochromic lens technology that seamlessly adapts to changing light conditions, providing optimal comfort and protection throughout your day.
          </p>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 max-w-sm">
          <h3 className="text-yellow-400 font-bold text-lg mb-4 uppercase tracking-wide">Recommended For</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-300">All day use purpose</span>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-300">Digital gadget users</span>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-300">Digital eye strain</span>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-300">Computer vision syndrome (CVS)</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className="relative max-w-9xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              
                  <img
                  src="/svgs/scratchresistance.svg"
                  alt="Scratch Resistance"
                  className="w-16 h-16 border border-black"
                />

              <h3 className="hidden md:block text-xl md:pl-8 md:text-4xl font-bold text-white">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
