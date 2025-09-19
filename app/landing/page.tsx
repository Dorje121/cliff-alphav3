"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading process
    const loadingInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 15 + 5;
        const newProgress = Math.min(prev + increment, 100);
        
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => {
            setIsLoading(false);
            setShowContent(true);
          }, 500);
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(loadingInterval);
  }, []);

  const handleEnterSite = () => {
    setShowContent(false);
    setTimeout(() => {
      router.push("/");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  CLIFF
                </h1>
                <p className="text-gray-400 mt-2">Premium Lens Technology</p>
              </motion.div>
              
              <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                {progress < 25 && "Initializing..."}
                {progress >= 25 && progress < 50 && "Loading Assets..."}
                {progress >= 50 && progress < 75 && "Optimizing Experience..."}
                {progress >= 75 && progress < 100 && "Almost Ready..."}
                {progress >= 100 && "Welcome"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Landing Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 min-h-screen flex items-center justify-center"
          >
            <div className="max-w-6xl mx-auto px-4 text-center">
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-16"
              >
                <h1 className="text-6xl md:text-8xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    CLIFF
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Experience the future of vision with our premium lens technology. 
                  Crafted for clarity, comfort, and unparalleled performance.
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-4">🔬</div>
                  <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
                  <p className="text-gray-400">Cutting-edge optical innovations for superior vision</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-2">Precision Crafted</h3>
                  <p className="text-gray-400">Meticulously designed for optimal comfort and clarity</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-4">✨</div>
                  <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                  <p className="text-gray-400">Exceptional materials and manufacturing standards</p>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnterSite}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Enter CLIFF Experience
                </motion.button>
                
                <p className="text-gray-400 mt-4 text-sm">
                  Discover our range of premium lens solutions
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
    </div>
  );
};

export default LandingPage;
