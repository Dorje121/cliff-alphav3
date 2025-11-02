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
            About Cliff Eyewear
          </motion.p>

          <motion.div
            className="relative z-40 w-full max-w-3xl px-4 sm:px-8 text-white text-center"
            style={{ y: translateY }}
          >
         

            <div className="space-y-10 text-[#FFD700] font-sans max-w-6xl mx-auto px-4">
              

              {/* MagicText Section */}
              <div className="space-y-10">
                <div className="text-center">
                  <div className="inline-block text-2xl sm:text-3xl md:text-4xl text-[#FFD700] font-sans whitespace-nowrap">
                    At Cliff Eyewear
                  </div>
                  <MagicText
                    text={
                      " Vision is more than sight it's an experience. Born from precision lens technology, we blend advanced optics with modern design to deliver lenses that protect, enhance, and empower everyday life."
                    }
                    className="mt-4 block"
                  />
                </div>
                <MagicText
                  text={
                    "Designed in the USA and trusted worldwide, CLIFF lenses offer clarity, comfort, and style from digital protection to adaptive light solutions."
                  }
                />
              </div>
              
              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-4 border border-[#FFD700]/30 rounded-none bg-black/30 backdrop-blur-sm"
                >
                  <h3 className="text-[#FFD700] text-lg font-semibold mb-2">Advance Coatings and Index Options</h3>
                  
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="p-4 border border-[#FFD700]/30 rounded-none bg-black/30 backdrop-blur-sm"
                >
                  <h3 className="text-[#FFD700] text-lg font-semibold mb-2">Certified Quality and Durability</h3>
                 
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="p-4 border border-[#FFD700]/30 rounded-none bg-black/30 backdrop-blur-sm"
                >
                  <h3 className="text-[#FFD700] text-lg font-semibold mb-2">Global Service Network</h3>
                 
                </motion.div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-10 mt-12">
                <Link 
                  href="/products" 
                  className="group relative px-8 py-3.5 overflow-hidden font-medium rounded-none bg-gradient-to-r from-[#FFD700] to-[#E6C200] text-black text-sm font-semibold tracking-wider"
                >
                  <span className="relative z-10">Discover Our Lenses</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E6C200] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link 
                  href="/Contact" 
                  className="group relative px-8 py-3.5 overflow-hidden font-medium rounded-none border-1 border-[#FFD700] text-[#FFD700] hover:text-black text-sm font-semibold tracking-wider transition-all duration-300"
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
