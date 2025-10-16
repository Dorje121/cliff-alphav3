"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TextWithTexture from "@/components/textwithgoldentexture";
import CTA from "../cta/CTA";

const List = () => {
  const services = [
    // {
    //   id: "01",
    //   title: "CLIFF COATINGS",
    //   description:
    //     "Premium protective coatings for enhanced lens durability and performance",
    //   category: "Coatings",
    //   slug: "cliff-coatings",
    //   image: "/product/01.jpeg",
    // },
    // {
    //   id: "02",
    //   title: "CLIFF BLUE SAFE COATING",
    //   description:
    //     "Advanced blue light filtering coating for digital eye strain protection",
    //   category: "Coatings",
    //   slug: "cliff-blue-safe-coating",
    //   image: "/product/02.jpeg",
    // },
    {
      id: "01",
      title: "CLIFF BLUE SAFE UV",
      description:
        "Complete blue light protection lenses for modern digital lifestyle",
      category: "Lenses",
      slug: "cliff-blue-safe-lenses",
      image: "/product/03.jpeg",
    },
    {
      id: "02",
      title: "CLIFF PHOTO-Z UV",
      description:
        "Photochromic lenses that adapt to changing light conditions automatically",
      category: "Lenses",
      slug: "cliff-photo-z-lenses",
      image: "/product/04.jpeg",
    },
    {
      id: "03",
      title: "CLIFF DRIVE CLEAR LENSES",
      description:
        "Specialized lenses optimized for driving and enhanced road visibility",
      category: "Lenses",
      slug: "cliff-drive-clear-lenses",
      image: "/product/5.jpg",
    },
    {
      id: "04",
      title: "CLIFF PROGRESSIVE VERSATILE",
      description:
        "Multi-focal progressive lenses for seamless vision at all distances",
      category: "Progressive",
      slug: "cliff-progressive-versatile",
      image: "/product/6.jpg",
    },
    {
      id: "05",
      title: "CLIFF TECHNOLOGY",
      description: "Cutting-edge optical technology and innovation solutions",
      category: "Technology",
      slug: "cliff-technology",
      image: "/product/7.jpg",
    },
    {
      id: "06",
      title: "CLIFF SINGLE VISION RX",
      description: "Prescription single vision lenses for clear, focused sight",
      category: "Prescription",
      slug: "cliff-single-vision-rx",
      image: "/product/8.jpg",
    },
    {
      id: "7",
      title: "CLIFF DYNAMIX PROGRESSIVE",
      description:
        "Dynamic progressive lenses with superior adaptation and comfort",
      category: "Progressive",
      slug: "cliff-dynamix-progressive",
      image: "/product/9.jpg",
    },
    {
      id: "8",
      title: "CLIFF ZENN SERIES",
      description:
        "Premium lens series combining style with advanced optical performance",
      category: "Premium",
      slug: "cliff-zenn-series",
      image: "/product/10.jpg",
    },
    {
      id: "9",
      title: "CLIFF ZENN SINGLE VISION LENSES",
      description: "Single vision lenses from the premium Zenn collection",
      category: "Premium",
      slug: "cliff-zenn-single-vision-lenses",
      image: "/product/11.jpg",
    },
    {
      id: "10",
      title: "CLIFF ZENN PROGRESSIVE LENSES",
      description:
        "Progressive lenses featuring Zenn series advanced technology",
      category: "Premium",
      slug: "cliff-zenn-progressive-lenses",
      image: "/product/12.jpg",
    },
    {
      id: "11",
      title: "CLIFF ZENN SINGLE VISION",
      description: "Enhanced single vision experience with Zenn technology",
      category: "Premium",
      slug: "cliff-zenn-single-vision",
      image: "/product/13.jpg",
    },
    {
      id: "12",
      title: "REFRACTIVE INDEX",
      description:
        "Custom refractive index solutions for optimal lens thickness and clarity",
      category: "Technology",
      slug: "refractive-index",
      image: "/product/14.jpg",
    },
    {
      id: "13",
      title: "CLIFF TINTED LENSES",
      description: "Fashionable tinted lenses with UV protection and style",
      category: "Specialty",
      slug: "cliff-tinted-lenses",
      image: "/product/15.jpg",
    },
    {
      id: "14",
      title: "PROGRESSIVE MEASUREMENT CHART",
      description:
        "Professional fitting and measurement services for progressive lenses",
      category: "Services",
      slug: "progressive-measurement-chart",
      image: "/product/16.jpg",
    },
  ];

  const categories = [
    "All",
    // "Coatings",
    "Lenses",
    "Progressive",
    "Technology",
    "Prescription",
    "Premium",
    "Specialty",
    "Services",
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
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <section className="w-full bg-black mt-14 flex justify-center py-4">
        <div className="w-full max-w-[1500px] mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[60vh] bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-[50%_30%]"
            >
              <source src="/homevideo/BlueSafe-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-1 sm:py-2 lg:py-4 relative">
        {/* Header Section */}
        <div className="mb-8 md:mb-16">
          <div className="flex flex-col mt-8 lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            {/* Title and Description */}
            <div className="flex-1">
              <TextWithTexture
                text="Our Products"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold montserrat mb-4 md:mb-6 bg-gradient-to-r from-[#FFF9DC] via-yellow-100 to-[#FFCC00] bg-clip-text text-transparent"
              />
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-4xl poppins">
                Discover our comprehensive range of premium optical solutions,
                advanced lens technologies, and professional services designed
                to enhance your vision experience.
              </p>
            </div>

            {/* Category Filter - Same Row */}
            <div className="flex-shrink-0 mt-22">
              <div
                className="relative w-full max-w-xs sm:max-w-none sm:w-auto"
                ref={dropdownRef}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full sm:w-64 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                >
                  <span className="font-medium text-sm sm:text-base">
                    {selectedCategory === "All"
                      ? "All Categories"
                      : selectedCategory}
                  </span>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl z-50 max-h-60 sm:max-h-80 overflow-y-auto scrollbar-custom"
                    onWheel={(e) => {
                      // Allow scrolling within dropdown, but don't prevent page scroll
                      e.stopPropagation();
                    }}
                  >
                    {categories.map((category, index) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-4 sm:px-6 py-2.5 sm:py-3 text-left hover:bg-white/10 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${selectedCategory === category
                          ? "bg-amber-400/20 text-amber-400 border-l-4 border-amber-400"
                          : "text-zinc-300 hover:text-white"
                          } ${index > 0 ? "border-t border-white/5" : ""}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm sm:text-base">
                            {category === "All" ? "All Categories" : category}
                          </span>
                          {selectedCategory === category && (
                            <svg
                              className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-4 md:space-y-8">
          {filteredServices.map((service, index) => (
            <Link
              key={service.id}
              href={`/Services/${service.slug}`}
              className="cursor-pointer block"
            >
              <div
                className={`group relative backdrop-blur-sm border-t border-t-zinc-700 transition-all duration-500 hover:scale-102 overflow-hidden rounded-lg md:rounded-none`}
              >
                {/* Mobile Layout */}
                <div className="block md:hidden">
                  <div className="relative">
                    {/* Image Section - Mobile */}
                    <div className="w-full h-[200px] relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                      {/* Service Number Overlay - Mobile */}
                      <div className="absolute top-4 right-4 text-4xl font-bold text-zinc-400 group-hover:text-amber-400/50 transition-all duration-500">
                        {service.id}
                      </div>
                    </div>

                    {/* Content Section - Mobile */}
                    <div className="p-4">
                      {/* Category Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-medium mb-3">
                        {service.category}
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl font-bold mb-3 montserrat bg-gradient-to-r from-white via-yellow-100 to-yellow-200  bg-clip-text text-transparent group-hover:text-amber-400 transition-colors duration-300 font-family-montserrat">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-zinc-300 group-hover:text-white transition-colors duration-300 leading-relaxed text-sm mb-4 poppins">
                        {service.description}
                      </p>

                      {/* Learn More Button */}
                      <div className="inline-flex items-center text-amber-400 font-medium group-hover:text-white transition-colors duration-300 text-sm poppins">
                        <span className="mr-2">Learn More</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div
                  className={`hidden md:flex p-5 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-center min-h-[300px]`}
                >
                  <div
                    className={`w-1/3 ${index % 2 === 0 ? "text-left" : "text-left"
                      } `}
                  >
                    {/* Service Number Overlay - Desktop */}
                    <div className="text-center text-6xl lg:text-8xl font-bold text-white/20 group-hover:text-amber-400/40 transition-all duration-500">
                      {service.id}
                    </div>
                  </div>

                  {/* Content Section - Desktop */}
                  <div
                    className={`w-1/3 p-8 lg:p-12 ${index % 2 === 0
                      ? "lg:pl-12 lg:pr-16"
                      : "lg:pr-12 lg:pl-16"
                      }`}
                  >
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/20 text-amber-400 text-sm font-medium mb-6">
                      {service.category}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold montserrat mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200  bg-clip-text text-transparent group-hover:text-amber-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-zinc-300 group-hover:text-white transition-colors duration-300 leading-relaxed text-base lg:text-lg mb-8 poppins">
                      {service.description}
                    </p>

                    {/* Learn More Button */}
                    <div className="inline-flex items-center text-amber-400 font-medium group-hover:text-white transition-colors duration-300">
                      <span className="mr-2 poppins">Learn More</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Image Section - Desktop */}
                  <div className="w-1/3 h-[300px] relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain rounded-2xl transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <CTA />
      </div>
    </div>
  );
};

export default List;
