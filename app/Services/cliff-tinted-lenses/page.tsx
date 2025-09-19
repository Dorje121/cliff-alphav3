"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import HeroSection from "@/components/Services/heropage";

const CliffTintedLenses = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const [selectedTint, setSelectedTint] = useState<{
    color: string;
    name: string;
    category: string;
    hex: string;
  }>({ color: "bg-gray-300", name: "Grey 25%", category: "Grey", hex: "#D1D5DB" });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background image continuous motion animation
      gsap.fromTo(
        backgroundImageRef.current,
        {
          scale: 1,
          rotation: 0,
        },
        {
          scale: 1.1,
          rotation: 0.5,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        }
      );
    });

    return () => ctx.revert();
  }, []);
  const tintCategories = [
    {
      name: "Grey",
      description: "Classic neutral tint for all-day comfort",
      tints: [
        { name: "Grey 15%", color: "bg-gray-200", intensity: "15%", hex: '#E5E7EB' },
        { name: "Grey 25%", color: "bg-gray-300", intensity: "25%", hex: '#D1D5DB' },
        { name: "Grey 60%", color: "bg-gray-500", intensity: "60%", hex: '#6B7280' },
        { name: "Grey 75%", color: "bg-gray-700", intensity: "75%", hex: '#374151' },
        { name: "Grey 95%", color: "bg-gray-900", intensity: "95%", hex: '#1F2937' },
        {
          name: "Grey 25/0%",
          color: "bg-gradient-to-b from-gray-300 to-transparent",
          intensity: "25/0%",
          hex: "#D1D5DB"
        },
        {
          name: "Grey 75/25%",
          color: "bg-gradient-to-b from-gray-700 to-gray-300",
          intensity: "75/25%",
          hex: "#374151"
        },
        {
          name: "Grey 90/40%",
          color: "bg-gradient-to-b from-gray-800 to-gray-400",
          intensity: "90/40%",
          hex: "#1F2937"
        },
      ],
    },
    {
      name: "Black",
      description: "Bold and sophisticated for maximum sun protection",
      tints: [
        { name: "Black 15%", color: "bg-gray-800", intensity: "15%", hex: '#1F2937' },
        { name: "Black 25%", color: "bg-gray-900", intensity: "25%", hex: '#111827' },
        { name: "Black 60%", color: "bg-black", intensity: "60%", hex: '#000000' },
        { name: "Black 75%", color: "bg-black", intensity: "75%", hex: '#000000' },
        { name: "Black 95%", color: "bg-black", intensity: "95%", hex: '#000000' },
        {
          name: "Black 25/0%",
          color: "bg-gradient-to-b from-gray-900 to-transparent",
          intensity: "25/0%",
          hex: "#111827"
        },
        {
          name: "Black 75/25%",
          color: "bg-gradient-to-b from-black to-gray-900",
          intensity: "75/25%",
          hex: "#000000"
        },
        {
          name: "Black 90/40%",
          color: "bg-gradient-to-b from-black to-gray-700",
          intensity: "90/40%",
          hex: "#000000"
        },
      ],
    },
    {
      name: "Brown",
      description: "Warm tones that enhance contrast and reduce glare",
      tints: [
        { name: "Brown 15%", color: "bg-amber-200", intensity: "15%", hex: '#FEF3C7' },
        { name: "Brown 25%", color: "bg-amber-300", intensity: "25%", hex: '#FBBF24' },
        { name: "Brown 60%", color: "bg-amber-700", intensity: "60%", hex: '#B45309' },
        { name: "Brown 75%", color: "bg-amber-800", intensity: "75%", hex: '#7E2E0E' },
        { name: "Brown 95%", color: "bg-amber-900", intensity: "95%", hex: '#3B0E0E' },
        {
          name: "Brown 25/0%",
          color: "bg-gradient-to-b from-amber-300 to-transparent",
          intensity: "25/0%",
          hex: "#FBBF24"
        },
        {
          name: "Brown 75/25%",
          color: "bg-gradient-to-b from-amber-800 to-amber-300",
          intensity: "75/25%",
          hex: "#7E2E0E"
        },
        {
          name: "Brown 90/40%",
          color: "bg-gradient-to-b from-amber-900 to-amber-600",
          intensity: "90/40%",
          hex: "#3B0E0E"
        },
      ],
    },
    {
      name: "Green",
      description: "Natural tint that provides excellent color perception",
      tints: [
        { name: "Green 15%", color: "bg-green-200", intensity: "15%", hex: '#BBF7D0' },
        { name: "Green 25%", color: "bg-green-300", intensity: "25%", hex: '#86EFAC' },
        { name: "Green 60%", color: "bg-green-600", intensity: "60%", hex: '#4ADE80' },
        { name: "Green 75%", color: "bg-green-700", intensity: "75%", hex: '#22C55E' },
        { name: "Green 95%", color: "bg-green-900", intensity: "95%", hex: '#165E33' },
        {
          name: "Green 25/0%",
          color: "bg-gradient-to-b from-green-300 to-transparent",
          intensity: "25/0%",
          hex: "#86EFAC"
        },
        { name: "Green 75/25%", color: "bg-green-700", intensity: "75/25%", hex: '#22C55E' },
        {
          name: "Green 90/40%",
          color: "bg-gradient-to-b from-green-800 to-green-500",
          intensity: "90/40%",
          hex: "#165E33"
        },
      ],
    },
    {
      name: "Pink",
      description: "Fashionable tint with unique aesthetic appeal",
      tints: [
        { name: "Pink 15%", color: "bg-pink-200", intensity: "15%", hex: '#FBCFE8' },
        { name: "Pink 25%", color: "bg-pink-300", intensity: "25%", hex: '#F9A8D4' },
        { name: "Pink 60%", color: "bg-pink-500", intensity: "60%", hex: '#D946EF' },
        { name: "Pink 75%", color: "bg-pink-600", intensity: "75%", hex: '#A21CAF' },
        { name: "Pink 95%", color: "bg-pink-800", intensity: "95%", hex: '#6B0F8A' },
      ],
    },
  ];

  return (
    <>
      <HeroSection
        title="Cliff Tinted"
        subtitle="Lenses"
        description=" Fashionable tinted lenses with UV protection and style, offering
                a perfect blend of fashion and function for every lifestyle."
        backgroundImage="/eyetest.jpg"
        rightImage="/eyetest.jpg"
        serviceNumber="08"
        badgeTitle="Style"
        badgeSubtitle="Protection"
      />

      <div className="max-w-screen mx-auto">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">CLIFF </span>
                <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                  TINTED LENSES
                </span>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Protect your eyes from the sun with our premium tinted lens
              collection
            </p>
          </div>

          {/* Tint Categories */}
          <div className="space-y-8 relative z-[9999] cursor-help sm:space-y-12 lg:space-y-16">
            {tintCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl sm:rounded-3xl  backdrop-blur-sm"
              >
                <div className="h-[100dvh] w-full relative">
                  <Image src={"/scene.jpg"} fill alt="scene" className="object-cover brightness-90 object-center" />
                  <div className="absolute flex justify-between items-center flex-col inset-0 p-4 lg:p-6">
                    <div className="text-center  p-2 mb-6 sm:mb-8">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                        {category.name} Tints
                      </h2>
                      <p className="text-gray-300 text-base sm:text-lg">
                        {category.description}
                      </p>
                    </div>
                    <div className=" relative">

                      <svg className="w-[90%] md:w-80 lg:w-96 " viewBox="0 0 805 602" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5961 220.112C47.3961 385.312 51 439 142 537.5C233 636 429.929 600.112 533.596 564.112C800.096 478.612 780.096 391.612 789 362.5C797.904 333.388 802.096 208.445 802.596 147.112C817.396 57.1118 668.43 19.2785 592.096 11.6118C288.496 -25.1882 137 42.7874 95.5 53.5C-26.0958 84.8881 0.929469 165.279 10.5961 220.112Z" fill={selectedTint.hex} fill-opacity="0.25" stroke=" white" />
                        <path d="M698.448 134.24C696.976 134.24 695.728 133.928 694.704 133.304C693.68 132.664 692.904 131.768 692.376 130.616C691.848 129.464 691.584 128.12 691.584 126.584V125.072C691.584 123.536 691.816 122.2 692.28 121.064C692.76 119.912 693.472 119.024 694.416 118.4C695.36 117.76 696.544 117.44 697.968 117.44C699.184 117.44 700.2 117.68 701.016 118.16C701.832 118.624 702.432 119.248 702.816 120.032C703.216 120.8 703.384 121.64 703.32 122.552L700.512 123.248C700.672 121.648 700.504 120.424 700.008 119.576C699.528 118.712 698.808 118.28 697.848 118.28C696.824 118.28 696.032 118.712 695.472 119.576C694.928 120.44 694.656 121.872 694.656 123.872V127.784C694.656 129.768 694.968 131.2 695.592 132.08C696.216 132.96 697.168 133.4 698.448 133.4C698.976 133.4 699.464 133.304 699.912 133.112C700.376 132.92 700.76 132.592 701.064 132.128C701.384 131.648 701.584 130.976 701.664 130.112L703.392 130.568C703.168 131.464 702.808 132.184 702.312 132.728C701.816 133.272 701.232 133.664 700.56 133.904C699.904 134.128 699.2 134.24 698.448 134.24ZM707.584 116.912V116.24H712.192V131.984C712.192 132.528 712.216 132.856 712.264 132.968C712.312 133.064 712.464 133.128 712.72 133.16L714.04 133.328V134H707.584V133.328L708.904 133.16C709.16 133.128 709.312 133.064 709.36 132.968C709.408 132.856 709.432 132.528 709.432 131.984V118.256C709.432 117.712 709.408 117.392 709.36 117.296C709.312 117.184 709.16 117.112 708.904 117.08L707.584 116.912ZM721.067 119.768C720.571 119.768 720.171 119.616 719.867 119.312C719.563 118.992 719.411 118.584 719.411 118.088C719.411 117.592 719.563 117.192 719.867 116.888C720.171 116.584 720.571 116.432 721.067 116.432C721.547 116.432 721.947 116.584 722.267 116.888C722.587 117.192 722.747 117.592 722.747 118.088C722.747 118.584 722.587 118.992 722.267 119.312C721.947 119.616 721.547 119.768 721.067 119.768ZM717.851 122.504V121.832H722.459V131.984C722.459 132.528 722.483 132.856 722.531 132.968C722.579 133.064 722.731 133.128 722.987 133.16L724.307 133.328V134H717.851V133.328L719.171 133.16C719.427 133.128 719.579 133.064 719.627 132.968C719.675 132.856 719.699 132.528 719.699 131.984V123.848C719.699 123.304 719.675 122.984 719.627 122.888C719.579 122.776 719.427 122.704 719.171 122.672L717.851 122.504ZM742.802 133.328V134H735.866V133.328L737.186 133.16C737.442 133.128 737.594 133.064 737.642 132.968C737.69 132.856 737.714 132.528 737.714 131.984V122.672H732.722V131.984C732.722 132.528 732.746 132.856 732.794 132.968C732.842 133.064 732.994 133.128 733.25 133.16L734.57 133.328V134H728.114V133.328L729.434 133.16C729.69 133.128 729.842 133.064 729.89 132.968C729.938 132.856 729.962 132.528 729.962 131.984V123.848C729.962 123.304 729.938 122.984 729.89 122.888C729.842 122.776 729.69 122.704 729.434 122.672L728.114 122.504V121.832H729.962V121.256C729.962 120.408 730.13 119.6 730.466 118.832C730.818 118.064 731.386 117.44 732.17 116.96C732.954 116.48 733.994 116.24 735.29 116.24C736.01 116.24 736.65 116.352 737.21 116.576C737.77 116.784 738.242 117.072 738.626 117.44C738.962 117.008 739.402 116.664 739.946 116.408C740.506 116.136 741.194 116 742.01 116C742.986 116 743.786 116.168 744.41 116.504C745.05 116.84 745.506 117.288 745.778 117.848C746.066 118.408 746.154 119.016 746.042 119.672L743.402 120.056C743.562 118.856 743.514 118.024 743.258 117.56C743.018 117.08 742.602 116.84 742.01 116.84C741.69 116.84 741.41 116.928 741.17 117.104C740.946 117.28 740.77 117.6 740.642 118.064C740.53 118.512 740.474 119.176 740.474 120.056V121.832H744.074V122.672H740.474V131.984C740.474 132.528 740.498 132.856 740.546 132.968C740.594 133.064 740.746 133.128 741.002 133.16L742.802 133.328ZM732.722 120.776V121.832H737.714V120.776C737.714 119.336 737.514 118.36 737.114 117.848C736.714 117.336 736.106 117.08 735.29 117.08C734.794 117.08 734.354 117.184 733.97 117.392C733.586 117.584 733.282 117.944 733.058 118.472C732.834 119 732.722 119.768 732.722 120.776ZM699.8 155.56H700.36V159H690.86V158.44L691.96 158.3C692.173 158.273 692.3 158.22 692.34 158.14C692.38 158.047 692.4 157.773 692.4 157.32V147.08C692.4 146.627 692.38 146.36 692.34 146.28C692.3 146.187 692.173 146.127 691.96 146.1L690.86 145.96V145.4H696.34V145.96L695.24 146.1C695.027 146.127 694.9 146.187 694.86 146.28C694.82 146.36 694.8 146.627 694.8 147.08V158.3H698.08C698.4 158.3 698.627 158.293 698.76 158.28C698.893 158.253 698.98 158.207 699.02 158.14C699.073 158.06 699.12 157.94 699.16 157.78L699.8 155.56ZM712.525 156.62C712.285 157.553 711.838 158.22 711.185 158.62C710.531 159.007 709.771 159.2 708.905 159.2C707.305 159.2 706.105 158.74 705.305 157.82C704.505 156.887 704.105 155.653 704.105 154.12V153.72C704.105 152.187 704.478 150.96 705.225 150.04C705.985 149.12 707.078 148.66 708.505 148.66C709.305 148.66 710.011 148.82 710.625 149.14C711.251 149.447 711.738 149.893 712.085 150.48C712.445 151.067 712.625 151.78 712.625 152.62C712.625 152.82 712.611 153.033 712.585 153.26C712.571 153.487 712.538 153.713 712.485 153.94H706.565V154.52C706.565 155.933 706.765 156.953 707.165 157.58C707.565 158.193 708.211 158.5 709.105 158.5C709.678 158.5 710.165 158.333 710.565 158C710.965 157.653 711.191 157.073 711.245 156.26L712.525 156.62ZM708.505 149.36C707.851 149.36 707.365 149.66 707.045 150.26C706.725 150.86 706.565 151.853 706.565 153.24H710.185C710.238 152.973 710.271 152.727 710.285 152.5C710.311 152.26 710.325 152.04 710.325 151.84C710.325 150.987 710.158 150.36 709.825 149.96C709.491 149.56 709.051 149.36 708.505 149.36ZM728.27 158.44V159H722.89V158.44L723.99 158.3C724.204 158.273 724.33 158.22 724.37 158.14C724.41 158.047 724.43 157.773 724.43 157.32V152.28C724.43 151.36 724.29 150.693 724.01 150.28C723.744 149.853 723.344 149.64 722.81 149.64C722.584 149.64 722.317 149.7 722.01 149.82C721.717 149.927 721.417 150.127 721.11 150.42C720.817 150.713 720.557 151.147 720.33 151.72V157.32C720.33 157.773 720.35 158.047 720.39 158.14C720.43 158.22 720.557 158.273 720.77 158.3L721.87 158.44V159H716.49V158.44L717.59 158.3C717.804 158.273 717.93 158.22 717.97 158.14C718.01 158.047 718.03 157.773 718.03 157.32V150.54C718.03 150.087 718.01 149.82 717.97 149.74C717.93 149.647 717.804 149.587 717.59 149.56L716.49 149.42V148.86H720.21V150.62C720.597 149.94 721.09 149.447 721.69 149.14C722.304 148.82 722.917 148.66 723.53 148.66C724.517 148.66 725.297 148.973 725.87 149.6C726.444 150.227 726.73 151.113 726.73 152.26V157.32C726.73 157.773 726.75 158.047 726.79 158.14C726.83 158.22 726.957 158.273 727.17 158.3L728.27 158.44ZM735.911 155.22L734.531 154.9C733.638 154.687 732.971 154.307 732.531 153.76C732.105 153.2 731.891 152.54 731.891 151.78C731.891 151.22 732.011 150.707 732.251 150.24C732.505 149.76 732.898 149.38 733.431 149.1C733.965 148.807 734.658 148.66 735.511 148.66C736.431 148.66 737.178 148.807 737.751 149.1C738.325 149.393 738.731 149.78 738.971 150.26C739.211 150.74 739.285 151.253 739.191 151.8L736.991 152.2C737.178 151.293 737.125 150.593 736.831 150.1C736.551 149.607 736.078 149.36 735.411 149.36C734.945 149.36 734.558 149.5 734.251 149.78C733.945 150.047 733.791 150.433 733.791 150.94C733.791 151.407 733.925 151.82 734.191 152.18C734.458 152.527 734.851 152.76 735.371 152.88L736.751 153.2C737.738 153.427 738.451 153.787 738.891 154.28C739.331 154.76 739.551 155.36 739.551 156.08C739.551 156.973 739.218 157.72 738.551 158.32C737.898 158.907 736.918 159.2 735.611 159.2C735.158 159.2 734.658 159.133 734.111 159C733.578 158.853 733.085 158.593 732.631 158.22C732.191 157.847 731.871 157.313 731.671 156.62L732.971 156.1C733.065 156.98 733.365 157.6 733.871 157.96C734.391 158.32 734.971 158.5 735.611 158.5C736.211 158.5 736.698 158.367 737.071 158.1C737.458 157.82 737.651 157.42 737.651 156.9C737.651 156.54 737.525 156.213 737.271 155.92C737.031 155.613 736.578 155.38 735.911 155.22Z" fill="white" />
                      </svg>
                    </div>
                    {/* Tint Options Grid */}
                    <div className="flex justify-center flex-wrap  gap-4 sm:gap-6">
                      {category.tints.map((tint, tintIndex) => (
                        <div key={tintIndex} className="group">
                          <div className=" ">
                            {/* Tint Circle */}
                            <div
                              className={`relative mx-auto mb-3 size-10 rounded-full border-2 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg ${selectedTint.name === tint.name && selectedTint.category === category.name
                                ? 'border-amber-400 shadow-amber-400/50 shadow-lg'
                                : 'border-white hover:border-amber-300'
                                }`}
                              onClick={() => setSelectedTint({
                                color: tint.color,
                                name: tint.name,
                                category: category.name,
                                hex: tint.hex
                              })}
                            >
                              <div
                                className={`w-full h-full ${tint.color} opacity-80`}
                              ></div>
                              {/* Glass Effect Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                              <div className="absolute top-2 right-2 w-3 h-3 bg-white/40 rounded-full blur-sm"></div>
                              {/* Selection Indicator */}
                              {selectedTint.name === tint.name && selectedTint.category === category.name && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                                </div>
                              )}
                            </div>


                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Important Notice */}
          {/* <div className="mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-4 sm:p-6 lg:p-8 border border-red-500/30">
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl text-center font-bold text-red-400 mb-2">
                    ⚠️ Important Notice
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Tint is not available with Cliff Dynamic RX lenses. Please
                    consult with our specialists for alternative solutions that
                    meet your specific vision needs.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Benefits Section */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center text-white">
                Benefits of Tinted Lenses
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">☀️</div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    UV Protection
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Blocks harmful UV rays from the sun
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">👁️</div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Reduced Glare
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Minimizes glare for comfortable vision
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Style Options
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Multiple colors and intensity levels
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Driving Comfort
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Enhanced visibility while driving
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Combinations */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center text-white">
                Popular Gradient Combinations
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-b from-gray-700 to-transparent border-2 border-white/20"></div>
                  <h4 className="font-bold text-white mb-1">Grey 75/25%</h4>
                  <p className="text-gray-400 text-sm">
                    Perfect for driving and outdoor activities
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-b from-amber-800 to-amber-300 border-2 border-white/20"></div>
                  <h4 className="font-bold text-white mb-1">Brown 75/25%</h4>
                  <p className="text-gray-400 text-sm">
                    Enhanced contrast for outdoor sports
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-b from-gray-800 to-gray-400 border-2 border-white/20"></div>
                  <h4 className="font-bold text-white mb-1">Grey 90/40%</h4>
                  <p className="text-gray-400 text-sm">
                    Maximum protection with style
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToServicesButton />
    </>
  );
};

export default CliffTintedLenses;
