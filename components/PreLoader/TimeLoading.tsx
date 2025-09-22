"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface TimeLoadingProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const TimeLoading: React.FC<TimeLoadingProps> = ({ isVisible, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState("Initializing");
  const pathname = usePathname();

  useEffect(() => {
    if (isVisible) {
      setProgress(0);
      setLoadingStage("Initializing");

      const stages = ["Initializing", "Loading Assets", "Optimizing", "Almost Ready"];
      let currentStageIndex = 0;

      const interval = setInterval(() => {
        setProgress((prev) => {
          const increment = Math.random() * 12 + 3;
          const newProgress = Math.min(prev + increment, 100);

          
          const stageProgress = Math.floor(newProgress / 25);
          if (stageProgress !== currentStageIndex && stageProgress < stages.length) {
            currentStageIndex = stageProgress;
            setLoadingStage(stages[currentStageIndex]);
          }

          if (newProgress >= 100) {
            clearInterval(interval);
            setLoadingStage("Complete");
            setTimeout(() => {
              onComplete?.();
            }, 500);
            return 100;
          }
          return newProgress;
        });
      }, 120);

      return () => clearInterval(interval);
    }
  }, [isVisible, onComplete]);

  const getPageTitle = (path: string): { title: string; category: string } => {
    if (path === "/") return { title: "Home", category: "Welcome" };
    if (path === "/Services") return { title: "Products", category: "Our Solutions" };
    if (path === "/test") return { title: "Test", category: "Diagnostics" };
    if (path === "/AboutUs") return { title: "About Us", category: "Our Story" };
    if (path === "/Contact") return { title: "Contact", category: "Get in Touch" };
    if (path === "/Blogs") return { title: "Blogs", category: "Insights" };

    if (path.includes("cliff-blue-safe-coating")) return { title: "Blue Safe Coating", category: "Protective Solutions" };
    if (path.includes("cliff-blue-safe-lenses")) return { title: "Blue Safe Lenses", category: "Digital Protection" };
    if (path.includes("cliff-coatings")) return { title: "Premium Coatings", category: "Advanced Technology" };
    if (path.includes("cliff-drive-clear-lenses")) return { title: "Drive Clear Lenses", category: "Vision Enhancement" };
    if (path.includes("cliff-dynamix-progressive")) return { title: "Dynamix Progressive", category: "Progressive Solutions" };
    if (path.includes("cliff-photo-z-lenses")) return { title: "Photo Z Lenses", category: "Adaptive Technology" };
    if (path.includes("cliff-progressive-versatile")) return { title: "Progressive Versatile", category: "Multi-focal Solutions" };
    if (path.includes("cliff-single-vision-rx")) return { title: "Single Vision RX", category: "Prescription Lenses" };
    if (path.includes("cliff-technology")) return { title: "Technology", category: "Innovation Hub" };
    if (path.includes("cliff-tinted-lenses")) return { title: "Tinted Lenses", category: "Style & Protection" };
    if (path.includes("cliff-zenn-progressive-lenses")) return { title: "Zenn Progressive", category: "Premium Series" };
    if (path.includes("cliff-zenn-series")) return { title: "Zenn Series", category: "Signature Collection" };
    if (path.includes("cliff-zenn-single-vision")) return { title: "Zenn Single Vision", category: "Essential Series" };
    if (path.includes("progressive-measurement-chart")) return { title: "Measurement Chart", category: "Professional Tools" };
    if (path.includes("refractive-index")) return { title: "Refractive Index", category: "Technical Specifications" };

    return { title: "Loading", category: "Please Wait" };
  };

  const pageInfo = getPageTitle(pathname);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col justify-center items-center overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-2xl animate-pulse delay-2000"></div>
          </div>

          {/* Subtle Corner Decorations */}
          <motion.div
            className="absolute top-8 left-8 w-24 h-24 rounded-full border border-amber-400/10"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
    
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 rounded-full border border-amber-400/5"
            animate={{
              rotate: -360,
              scale: [1, 0.95, 1],
            }}
            transition={{
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center space-y-12 px-8 max-w-lg mx-auto text-center">

            {/* Brand Logo Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="space-y-3"
            >
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider">
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    CLIFF
                  </span>
                </h1>
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <p className="text-slate-400 text-sm md:text-base font-light tracking-[0.3em] uppercase">
                Eyewear Excellence
              </p>
            </motion.div>


            {/* Progress Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xs space-y-4"
            >
              {/* Progress Bar Container */}
              <div className="relative">

                {/* Progress Indicators */}
                <div className="flex justify-center mt-3">
                  <span className="text-slate-400 font-serif text-3xl sm:text-5xl xl:text-[10rem]  tracking-wider">
                    {Math.round(progress)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Loading Animation Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-amber-400/60 rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimeLoading;
