"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TransitionLink from "../PreLoader/TransitionLink";
import TextWithTexture from "@/components/textwithgoldentexture";

const HomeList = () => {
  const services = [
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
      id: "07",
      title: "CLIFF DYNAMIX PROGRESSIVE",
      description:
        "Dynamic progressive lenses with superior adaptation and comfort",
      category: "Progressive",
      slug: "cliff-dynamix-progressive",
      image: "/product/9.jpg",
    },
    {
      id: "08",
      title: "CLIFF ZENN SERIES",
      description:
        "Premium lens series combining style with advanced optical performance",
      category: "Premium",
      slug: "cliff-zenn-series",
      image: "/product/10.jpg",
    },
    {
      id: "09",
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
    <div className="min-h-screen  text-black overflow-x-hidden !w-full px-4 sm:px-6 md:px-7">
      <div className=" !w-[100%] !shrink-0 py-6 md:py-8 lg:py-16 relative">
        {/* Header Section */}
        <div className=" mb-8 md:mb-16">
          <div className="flex mb-4 md:mb-6"></div>
          <TextWithTexture
            text="Our Products"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-9xl font-semibold montserrat mb-4 md:mb-6  bg-gradient-to-r from-black via-yellow-100 to-yellow-200 bg-clip-text text-transparent"
          />

          <p className="text-base sm:text-lg md:text-xl text-zinc-800 max-w-3xl poppins">
            Discover our comprehensive range of premium optical solutions,
            advanced lens technologies, and professional services designed to
            enhance your vision experience.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-6 md:space-y-8">
          {filteredServices.slice(0, 4).map((service, index) => (
            <Link
              key={service.id}
              href={`/Services/${service.slug}`}
              className="cursor-pointer block"
            >
              <div
                className={`group relative backdrop-blur-sm border-t border-t-zinc-700 transition-all duration-500 hover:scale-102 overflow-hidden`}
              >
                {/* Mobile Layout (Stack Vertically) */}
                <div className="flex flex-col md:hidden p-4">
                  {/* Service Number and Image Section for Mobile */}
                  <div className="relative mb-4">
                    <div className="h-[200px] relative overflow-hidden rounded-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      {/* Service Number Overlay on Mobile */}
                      <div className="absolute top-4 right-4 text-4xl font-bold text-black/60 group-hover:text-amber-400/80 transition-all duration-500">
                        {service.id}
                      </div>
                    </div>
                  </div>

                  {/* Content Section for Mobile */}
                  <div className="space-y-3">
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-amber-400/20 text-amber-400 text-xs font-medium">
                      {service.category}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold montserrat bg-gradient-to-r from-white via-yellow-100 to-yellow-200  bg-clip-text text-transparent group-hover:text-amber-400 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-zinc-700 group-hover:text-black transition-colors duration-300 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Learn More Button */}
                    <div className="inline-flex items-center text-amber-400 font-medium group-hover:text-black transition-colors duration-300 text-sm poppins">
                      <span className="mr-2">View Details</span>
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

                {/* Desktop Layout (Side by Side) */}
                <div
                  className={`   w-full hidden md:flex p-5 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-center min-h-[300px]`}
                >
                  <div className="w-1/3 text-left">
                    {/* Service Number Overlay */}
                    <div className="text-center text-6xl lg:text-8xl font-bold text-black/60 group-hover:text-amber-400/40 transition-all duration-500">
                      {service.id}
                    </div>
                  </div>

                  {/* Content Section */}
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
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl montserrate font-bold mb-6 bg-gradient-to-r from-black via-yellow-300 to-yellow-400  bg-clip-text text-transparent group-hover:text-amber-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-zinc-700 group-hover:text-black transition-colors duration-300 leading-relaxed text-base lg:text-lg mb-8 poppins">
                      {service.description}
                    </p>

                    {/* Learn More Button */}
                    <div className="inline-flex items-center text-black font-medium group-hover:text-amber-400 transition-colors duration-300 poppins ">
                      <span className="mr-2">View Details</span>
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

                  {/* Image Section */}
                  <div className="w-1/3 h-[300px] relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore More Section */}
        <div className="text-center mt-8 md:mt-12 px-4">
          <TransitionLink
            href={`/Services`}
            className="group/cta inline-flex items-center gap-3 px-6 py-3 bg-black/10 hover:bg-white/20 backdrop-blur-xl border-2 border-black/50 rounded-full text-black font-semibold text-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
          >
            <span>View All Products</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-500 group-hover/cta:translate-x-2 group-hover/cta:scale-110"
            />
          </TransitionLink>
        </div>
      </div>
    </div>
  );
};

export default HomeList;
