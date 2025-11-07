'use client';

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagicText } from "@/components/ui/magic-text";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Only check window size on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      // Optional: update on resize
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Framer Motion scroll animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const aboutOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <main>
      <section
        ref={ref}
        className="relative w-full h-fit md:min-h-[200vh] bg-[#121212]"
        id="aboutsection"
      >
        {/* Top and bottom gradients */}
        <div className="absolute top-0 left-0 w-full h-32 md:h-64 z-10 pointer-events-none bg-gradient-to-b from-[#121212] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-64 z-10 pointer-events-none bg-gradient-to-t from-[#121212] to-transparent" />

        {/* Sticky Content */}
        <div className="sticky top-0 z-20 flex items-center justify-center overflow-hidden min-h-screen bg-[#121212] w-full py-12 md:py-0">
          {/* Title */}
          <motion.p
            className="hidden md:block absolute z-30 mb-4 md:mb-6 text-2xl sm:text-3xl md:text-6xl text-[#FFD700] montserrat text-center px-4"
            style={{ opacity: aboutOpacity }}
          >
            About Cliff Eyewear
          </motion.p>

          {/* Main Content */}
          <motion.div
            className="relative z-40 w-full max-w-6xl px-4 sm:px-6 md:px-8 text-white text-center mt-12 md:mt-0"
            style={{ y: isMobile ? 0 : translateY }}
          >
            <div className="space-y-6 md:space-y-10 text-[#FFD700] font-sans w-full max-w-[90rem] mx-auto px-2 sm:px-4 md:px-8">
              
              {/* Intro Text */}
              <div className="space-y-6 md:space-y-10">
                <div className="text-center w-full">
                  <div className="text-xl sm:text-2xl md:text-5xl text-[#FFD700] montserrat w-full max-w-4xl mx-auto">
                    At Cliff Eyewear
                  </div>
                  <MagicText
                    text={
                      "Vision is more than sight—it's an experience. Born from precision lens technology, we blend advanced optics with modern design to deliver lenses that protect, enhance, and empower everyday life."
                    }
                    className="mt-3 md:mt-4 block text-sm sm:text-base md:text-lg"
                  />
                </div>

                <MagicText
                  text={
                    "Designed in the USA and trusted worldwide, CLIFF lenses offer clarity, comfort, and style—from digital protection to adaptive light solutions."
                  }
                  className="text-sm sm:text-base md:text-lg"
                />
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12 mb-6 md:mb-8 w-full">
                {[
                  {
                    title: "Advance Coatings and Index Options",
                    delay: 0.2,
                  },
                  {
                    title: "Certified Quality and Durability",
                    delay: 0.4,
                  },
                  {
                    title: "Global Service Network",
                    delay: 0.6,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="p-4 sm:p-5 md:p-6 border border-yellow-900/30 bg-[#322b00]/50 rounded-xl backdrop-blur-sm h-full"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <svg
                        className="w-6 h-6 text-[#FFD700] mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <h3 className="text-[#fff3bc] text-lg font-medium text-center montserrat">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                <Link
                  href="/products"
                  className="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-[#FFD700] to-[#E6C200] text-black text-lg font-semibold"
                >
                  <span className="relative z-10">Discover our Lenses</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E6C200] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/Contact"
                  className="group relative px-8 py-4 overflow-hidden rounded-full border border-[#FFD700] text-[#FFD700] hover:text-black text-lg font-semibold transition-all duration-300"
                >
                  <span className="relative z-10">Become a Dealer</span>
                  <div className="absolute inset-0 bg-[#FFD700] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// hjjj
