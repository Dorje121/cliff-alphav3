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
  const pathname = usePathname();

  useEffect(() => {
    if (isVisible) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              onComplete?.();
            }, 300);
            return 100;
          }
          return prev + Math.random() * 15 + 5;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isVisible, onComplete]);

  const getPageTitle = (path: string) => {
    if (path === "/") return "Home";
    if (path === "/Services") return "Products";
    if (path === "/test") return "Test";

    // Handle service pages
    if (path.includes("cliff-blue-safe-coating")) return "Blue Safe Coating";
    if (path.includes("cliff-blue-safe-lenses")) return "Blue Safe Lenses";
    if (path.includes("cliff-coatings")) return "Coatings";
    if (path.includes("cliff-drive-clear-lenses")) return "Drive Clear Lenses";
    if (path.includes("cliff-dynamix-progressive"))
      return "Dynamix Progressive";
    if (path.includes("cliff-photo-z-lenses")) return "Photo Z Lenses";
    if (path.includes("cliff-progressive-versatile"))
      return "Progressive Versatile";
    if (path.includes("cliff-single-vision-rx")) return "Single Vision RX";
    if (path.includes("cliff-technology")) return "Technology";
    if (path.includes("cliff-tinted-lenses")) return "Tinted Lenses";
    if (path.includes("cliff-zenn-progressive-lenses"))
      return "Zenn Progressive";
    if (path.includes("cliff-zenn-series")) return "Zenn Series";
    if (path.includes("cliff-zenn-single-vision")) return "Zenn Single Vision";
    if (path.includes("progressive-measurement-chart"))
      return "Measurement Chart";
    if (path.includes("refractive-index")) return "Refractive Index";

    return "Loading";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center items-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/circle.png')] bg-repeat bg-opacity-5"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">
                <span className="text-yellow-400">CLIFF</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base font-light tracking-wider">
                Eye Wear Excellence
              </p>
            </motion.div>

            {/* Page Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
                Loading
              </p>
              <h2 className="text-2xl md:text-3xl text-white font-light">
                {getPageTitle(pathname)}
              </h2>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "300px", opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative"
            >
              <div className="w-[300px] h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Progress Percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="absolute -bottom-6 left-0 right-0 text-center"
              >
                <span className="text-gray-400 text-sm font-mono">
                  {Math.round(progress)}%
                </span>
              </motion.div>
            </motion.div>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex space-x-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Optional Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-gray-500 text-xs uppercase tracking-widest"
            >
              Preparing Experience
            </motion.p>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 border border-yellow-400/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 border border-yellow-400/10 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 0.8, 1],
            }}
            transition={{
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimeLoading;
