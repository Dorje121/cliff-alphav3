"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const BackToServicesButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed top-18 left-8 z-50">
      <Link
        href="/Services"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative inline-flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 ease-out border border-gray-600/50 hover:border-gray-400/70 backdrop-blur-lg"
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

        {/* Button content */}
        <div className="relative z-10 flex items-center gap-3">
          <ArrowLeft
            size={20}
            className={`transition-transform duration-300 ${
              isHovered ? "-translate-x-1" : ""
            }`}
          />
        </div>

        {/* Animated border pulse */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

        {/* Inner glow effect */}
        <div className="absolute inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
    </div>
  );
};

export default BackToServicesButton;
