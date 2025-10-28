"use client";
import React from "react";
import Image from "next/image";
import Coatings from "@/components/home/homeproducts";

const List = () => {
  const services = [
    // Coatings
    {
      id: "c01",
      title: "CLIFF BLUE SAFE UV",
      description: "Complete blue light protection for modern digital lifestyle",
      category: "Coatings",
      slug: "cliff-blue-safe-uv",
      image: "/product/03.jpeg",
    },
    {
      id: "c02",
      title: "CLIFF PHOTO-Z UV",
      description: "Photochromic lenses that adapt to changing light conditions",
      category: "Coatings",
      slug: "cliff-photo-z-uv",
      image: "/product/04.jpeg",
    },
    {
      id: "c03",
      title: "CLIFF DRIVE CLEAR",
      description: "Specialized coatings for enhanced driving visibility",
      category: "Coatings",
      slug: "cliff-drive-clear",
      image: "/product/5.jpg",
    },
    // Products
    {
      id: "p01",
      title: "CLIFF ZENN SERIES",
      description: "Premium lens series with advanced optical performance",
      category: "Products",
      slug: "cliff-zenn-series",
      image: "/product/10.jpg",
    },
    // Products
    {
      id: "p02",
      title: "CLIFF BLUE SAFE UV LENSES",
      description: "Complete blue light protection for digital lifestyle",
      category: "Products",
      slug: "cliff-blue-safe-lenses",
      image: "/product/03.jpeg",
    },
    {
      id: "p03",
      title: "CLIFF PHOTO-Z LENSES",
      description: "Photochromic lenses that adapt to light conditions",
      category: "Products",
      slug: "cliff-photo-z-lenses",
      image: "/product/04.jpeg",
    },
    {
      id: "p04",
      title: "CLIFF DRIVE CLEAR LENSES",
      description: "Specialized lenses for enhanced driving visibility",
      category: "Products",
      slug: "cliff-drive-clear-lenses",
      image: "/product/5.jpg",
    },
    
    // Technologies
    {
      id: "t01",
      title: "ADVANCED LENS TECHNOLOGY",
      description: "Cutting-edge optical innovations for superior vision",
      category: "Technologies",
      slug: "advanced-lens-technology",
      image: "/product/7.jpg",
    },
    {
      id: "t02",
      title: "REFRACTIVE INDEX TECHNOLOGY",
      description: "Custom solutions for optimal lens performance",
      category: "Technologies",
      slug: "refractive-index-technology",
      image: "/product/14.jpg",
    },
    
    // Speciality Lenses
    {
      id: "s01",
      title: "PROGRESSIVE VERSATILE",
      description: "Multi-focal lenses for seamless vision at all distances",
      category: "Speciality Lenses",
      slug: "progressive-versatile",
      image: "/product/6.jpg",
    },
    {
      id: "s02",
      title: "TINTED LENSES",
      description: "Fashionable lenses with UV protection and style",
      category: "Speciality Lenses",
      slug: "tinted-lenses",
      image: "/product/15.jpg",
    },
    {
      id: "s03",
      title: "DYNAMIX PROGRESSIVE",
      description: "Dynamic lenses with superior adaptation and comfort",
      category: "Speciality Lenses",
      slug: "dynamix-progressive",
      image: "/product/9.jpg",
    },
  ];

  const categories = [
    "All",
    "Coatings",
    "Products",
    "Technologies",
    "Speciality Lenses"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      // If dropdown is open and the wheel event is not on the dropdown itself
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // Close dropdown when scrolling outside of it
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("wheel", handleWheel);
    };
  }, [isDropdownOpen]);

const filteredServices =
  selectedCategory === "All"
    ? services
    : selectedCategory === "Coatings"
    ? services.filter((service) => service.category === "Coatings" && ["c01", "c02", "c03"].includes(service.id))
    : services.filter((service) => service.category === selectedCategory);

return (
  <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
    <section className="relative h-screen flex flex-col justify-between items-center py-8 md:pb-16 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/videos/22222.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        >
          <source src="/videos/22222.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (optional for better text readability) */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        {/* Foreground Content */}
        <div className="relative z-[2] flex flex-col items-center justify-center h-full">
          <h1 className=" montserrat font-medium text-6xl capitalize text-center">
            Cliff product and solutions
          </h1>
        </div>

        <div className="relative z-[2] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-8 gap-2 sm:gap-4 px-2 sm:px-8 pb-8">
          {[
            {
              icon: "/svgs/bluelight.svg",
              title: "Blue Filter",
              desc: "Reduces blue light exposure",
            },
            {
              icon: "/svgs/uvprotection.svg",
              title: "UV Protection",
              desc: "Blocks harmful UV rays",
            },
            {
              icon: "/svgs/antireflective.svg",
              title: "Anti Glare Coating",
              desc: "Reduces reflections",
            },
            {
              icon: "/svgs/scratchresistance.svg",
              title: "Spin Coating",
              desc: "Even and durable application",
            },
            {
              icon: "/svgs/photochromatic.svg",
              title: "Photochromatic",
              desc: "Adapts to light conditions",
            },
            {
              icon: "/svgs/scratchresistance.svg",
              title: "Scratch Resistance",
              desc: "Durable and long-lasting",
            },
            {
              icon: "/svgs/antireflective.svg",
              title: "Low Reflection",
              desc: "Minimizes light bounce",
            },
            {
              icon: "/svgs/spincoat.svg",
              title: "Super Hydrophobic",
              desc: "Repels water and oil",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="text-center bg-gradient-to-b from-zinc-900/50 to-zinc-900/10 p-4 sm:p-6 rounded-xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                height={1000}
                width={1000}
                className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4"
              />
              <h3 className="font-semibold text-sm sm:text-md  mb-1 sm:mb-2 uppercase">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm ">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <Coatings />
    </div>
  );
};

export default List;

