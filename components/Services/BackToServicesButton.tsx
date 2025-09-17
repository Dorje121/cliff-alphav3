"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const BackToServicesButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed top-16 left-8 z-50">
      <Link
        href="/Services"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group "
      >
        {/* Button content */}
        <div className="relative z-10 flex items-center gap-3 rounded-full bg-black/20 backdrop-blur-sm px-4 py-2">
          <ArrowLeft
            size={20}
            className={`transition-transform duration-300 ${
              isHovered ? "-translate-x-1" : ""
            }`}
          />
          Go back
        </div>
      </Link>
    </div>
  );
};

export default BackToServicesButton;
