"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TextWithTexture from "@/components/textwithgoldentexture";
// import CTA from "../cta/CTA";

const List = () => {
    const services = [
        {
            id: "01",
            title: "CLIFF COATINGS",
            description:
                "Premium protective coatings for enhanced lens durability and performance",
            category: "Coatings",
            slug: "cliff-coatings",
            image: "/product/01.jpeg",
        },
        {
            id: "02",
            title: "CLIFF BLUE SAFE COATING",
            description:
                "Advanced blue light filtering coating for digital eye strain protection",
            category: "Coatings",
            slug: "cliff-blue-safe-coating",
            image: "/product/02.jpeg",
        },

    ];

    // const categories = [
    //     "All",
    //     "Coatings",
    //     "Lenses",
    //     "Progressive",
    //     "Technology",
    //     "Prescription",
    //     "Premium",
    //     "Specialty",
    //     "Services",
    // ];

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
                                text="Discover Our Coatings"
                                className="py-2 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold montserrat mb-4 md:mb-6 bg-gradient-to-r from-[#FFF9DC] via-yellow-100 to-[#FFCC00] bg-clip-text text-transparent"
                            />
                            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-4xl">
                                Explore our advanced lens coating technologies, offering superior protection, enhanced clarity, and lasting comfort — engineered to reduce glare, resist scratches, and keep your vision crystal clear in every environment.
                            </p>
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
                                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-medium mb-3" >
                                                {service.category}
                                            </div>

                                            {/* Service Title */}
                                            <h3 className="text-xl font-bold mb-3 montserrat bg-gradient-to-r from-white via-yellow-100 to-yellow-200  bg-clip-text text-transparent group-hover:text-amber-400 transition-colors duration-300">
                                                {service.title}
                                            </h3>

                                            {/* Service Description */}
                                            <p className="text-zinc-300 poppins group-hover:text-white transition-colors duration-300 leading-relaxed text-sm mb-4">
                                                {service.description}
                                            </p>

                                            {/* Learn More Button */}
                                            <div className="inline-flex items-center text-amber-400 font-medium group-hover:text-white transition-colors duration-300 text-sm">
                                                <span className="mr-2 poppins">Learn More</span>
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


            </div>
        </div>
    );
};

export default List;
