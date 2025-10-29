// import { MagicText } from "@/components/ui/magic-text";

// const Demo = () => {
//   return (
//     <div className="h-[100vh] p-4 mx-auto">
//       <div className="relative   max-w-6xl mx-auto flex items-center poppins justify-center h-full my-auto">
//         <MagicText
//           text={
//             "At Cliff Eyewear, vision is more than sight it’s an experience. Born from precision lens technology, we blend advanced optics with modern design to deliver lenses that protect, enhance, and empower everyday life.  Designed in the USA and trusted worldwide, CLIFF lenses offer clarity, comfort, and style — from digital protection to adaptive light solutions."
//           }
//         />
//       </div>
//     </div>
//   );
// };

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagicText } from "@/components/ui/magic-text";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);

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
        className="relative w-full h-fit md:min-h-[200vh] bg-black"
        id="aboutsection"
      >
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-64 z-10 pointer-events-none bg-gradient-to-b from-[#121212] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 z-10 pointer-events-none bg-gradient-to-t from-black to-transparent" />

        

        {/* Desktop View */}
        <div className="hidden md:sticky top-0 z-20 md:flex items-center justify-center overflow-hidden h-screen bg-black">
          <motion.p
            className="absolute z-30 mb-6 text-4xl text-[#FFD700] montserrat md:text-6xl"
            style={{ opacity: aboutOpacity }}
          >
            About Us
          </motion.p>

          <motion.div
            className="relative z-40 w-full max-w-3xl px-4 sm:px-8 text-white text-center"
            style={{ y: translateY }}
          >
            <h1 className="mb-9 text-4xl text-[#FFD700] montserrat">
              About <span className="text-[#FFD700] ">Cliff Eyewear</span>
            </h1>

            <div className="space-y-6  text-base sm:text-lg md:text-xl text-[#FFD700] font-sans max-w-3xl mx-auto">
              

              {/* MagicText Section */}
              <div className="space-y-4">
                <MagicText
                  text={
                    "At Cliff Eyewear, vision is more than sight it's an experience. Born from precision lens technology, we blend advanced optics with modern design to deliver lenses that protect, enhance, and empower everyday life."
                  }
                />
                <MagicText
                  text={
                    "Designed in the USA and trusted worldwide, CLIFF lenses offer clarity, comfort, and style from digital protection to adaptive light solutions."
                  }
                />
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-10 mt-16">
                <Link 
                  href="/products" 
                  className="group relative px-8 py-3.5 overflow-hidden font-medium rounded-lg bg-gradient-to-r from-[#FFD700] to-[#E6C200] text-black text-sm font-semibold tracking-wider"
                >
                  <span className="relative z-10">Discover Our Lenses</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E6C200] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link 
                  href="/Contact" 
                  className="group relative px-8 py-3.5 overflow-hidden font-medium rounded-lg border-2 border-[#FFD700] text-[#FFD700] hover:text-black text-sm font-semibold tracking-wider transition-all duration-300"
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
