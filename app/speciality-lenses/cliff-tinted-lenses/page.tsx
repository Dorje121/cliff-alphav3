"use client";
import Image from "next/image";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

const CliffTintedLenses = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const [selectedTints, setSelectedTints] = useState<{
    [category: string]: {
      color: string;
      name: string;
      hex: string;
    };
  }>({
    Grey: {
      color: "bg-zinc-300",
      name: "Grey 25%",
      hex: "#D1D5DB",
    },
    Black: {
      color: "bg-zinc-900",
      name: "Black 25%",
      hex: "#111827",
    },
    Brown: {
      color: "bg-amber-300",
      name: "Brown 25%",
      hex: "#FBBF24",
    },
    Green: {
      color: "bg-green-300",
      name: "Green 25%",
      hex: "#86EFAC",
    },
    Pink: {
      color: "bg-pink-300",
      name: "Pink 25%",
      hex: "#F9A8D4",
    },
  });

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
        {
          name: "Grey 15%",
          color: "bg-zinc-200",
          intensity: "15%",
          hex: "#E5E7EB",
        },
        {
          name: "Grey 25%",
          color: "bg-zinc-300",
          intensity: "25%",
          hex: "#D1D5DB",
        },
        {
          name: "Grey 60%",
          color: "bg-zinc-500",
          intensity: "60%",
          hex: "#6B7280",
        },
        {
          name: "Grey 75%",
          color: "bg-zinc-700",
          intensity: "75%",
          hex: "#374151",
        },
        {
          name: "Grey 95%",
          color: "bg-zinc-900",
          intensity: "95%",
          hex: "#1F2937",
        },
        {
          name: "Grey 25/0%",
          color: "bg-gradient-to-b from-zinc-300 to-transparent",
          intensity: "25/0%",
          hex: "#D1D5DB",
        },
        {
          name: "Grey 75/25%",
          color: "bg-gradient-to-b from-zinc-700 to-zinc-300",
          intensity: "75/25%",
          hex: "#374151",
        },
        {
          name: "Grey 90/40%",
          color: "bg-gradient-to-b from-zinc-800 to-zinc-400",
          intensity: "90/40%",
          hex: "#1F2937",
        },
      ],
    },
    {
      name: "Black",
      description: "Bold and sophisticated for maximum sun protection",
      tints: [
        {
          name: "Black 15%",
          color: "bg-zinc-800",
          intensity: "15%",
          hex: "#1F2937",
        },
        {
          name: "Black 25%",
          color: "bg-zinc-900",
          intensity: "25%",
          hex: "#111827",
        },
        {
          name: "Black 60%",
          color: "bg-black",
          intensity: "60%",
          hex: "#000000",
        },
        {
          name: "Black 75%",
          color: "bg-black",
          intensity: "75%",
          hex: "#000000",
        },
        {
          name: "Black 95%",
          color: "bg-black",
          intensity: "95%",
          hex: "#000000",
        },
        {
          name: "Black 25/0%",
          color: "bg-gradient-to-b from-zinc-900 to-transparent",
          intensity: "25/0%",
          hex: "#111827",
        },
        {
          name: "Black 75/25%",
          color: "bg-gradient-to-b from-black to-zinc-900",
          intensity: "75/25%",
          hex: "#000000",
        },
        {
          name: "Black 90/40%",
          color: "bg-gradient-to-b from-black to-zinc-700",
          intensity: "90/40%",
          hex: "#000000",
        },
      ],
    },
    {
      name: "Brown",
      description: "Warm tones that enhance contrast and reduce glare",
      tints: [
        {
          name: "Brown 15%",
          color: "bg-amber-200",
          intensity: "15%",
          hex: "#FEF3C7",
        },
        {
          name: "Brown 25%",
          color: "bg-amber-300",
          intensity: "25%",
          hex: "#FBBF24",
        },
        {
          name: "Brown 60%",
          color: "bg-amber-700",
          intensity: "60%",
          hex: "#B45309",
        },
        {
          name: "Brown 75%",
          color: "bg-amber-800",
          intensity: "75%",
          hex: "#7E2E0E",
        },
        {
          name: "Brown 95%",
          color: "bg-amber-900",
          intensity: "95%",
          hex: "#3B0E0E",
        },
        {
          name: "Brown 25/0%",
          color: "bg-gradient-to-b from-amber-300 to-transparent",
          intensity: "25/0%",
          hex: "#FBBF24",
        },
        {
          name: "Brown 75/25%",
          color: "bg-gradient-to-b from-amber-800 to-amber-300",
          intensity: "75/25%",
          hex: "#7E2E0E",
        },
        {
          name: "Brown 90/40%",
          color: "bg-gradient-to-b from-amber-900 to-amber-600",
          intensity: "90/40%",
          hex: "#3B0E0E",
        },
      ],
    },
    {
      name: "Green",
      description: "Natural tint that provides excellent color perception",
      tints: [
        {
          name: "Green 15%",
          color: "bg-green-200",
          intensity: "15%",
          hex: "#BBF7D0",
        },
        {
          name: "Green 25%",
          color: "bg-green-300",
          intensity: "25%",
          hex: "#86EFAC",
        },
        {
          name: "Green 60%",
          color: "bg-green-600",
          intensity: "60%",
          hex: "#4ADE80",
        },
        {
          name: "Green 75%",
          color: "bg-green-700",
          intensity: "75%",
          hex: "#22C55E",
        },
        {
          name: "Green 95%",
          color: "bg-green-900",
          intensity: "95%",
          hex: "#165E33",
        },
        {
          name: "Green 25/0%",
          color: "bg-gradient-to-b from-green-300 to-transparent",
          intensity: "25/0%",
          hex: "#86EFAC",
        },
        {
          name: "Green 75/25%",
          color: "bg-green-700",
          intensity: "75/25%",
          hex: "#22C55E",
        },
        {
          name: "Green 90/40%",
          color: "bg-gradient-to-b from-green-800 to-green-500",
          intensity: "90/40%",
          hex: "#165E33",
        },
      ],
    },
    {
      name: "Pink",
      description: "Fashionable tint with unique aesthetic appeal",
      tints: [
        {
          name: "Pink 15%",
          color: "bg-pink-200",
          intensity: "15%",
          hex: "#FBCFE8",
        },
        {
          name: "Pink 25%",
          color: "bg-pink-300",
          intensity: "25%",
          hex: "#F9A8D4",
        },
        {
          name: "Pink 60%",
          color: "bg-pink-500",
          intensity: "60%",
          hex: "#D946EF",
        },
        {
          name: "Pink 75%",
          color: "bg-pink-600",
          intensity: "75%",
          hex: "#A21CAF",
        },
        {
          name: "Pink 95%",
          color: "bg-pink-800",
          intensity: "95%",
          hex: "#6B0F8A",
        },
      ],
    },
  ];

  return (
    <>
    <section className="relative h-[80vh] min-h-[450px] flex flex-col justify-end pb-8 items-start overflow-hidden">
        <Image
         src="/cliffcoating/changable.gif"
         alt="Premium Tinted Lenses"
         fill
         className="object-cover"
        priority
       />   
        <div className="relative z-10 text-center w-full px-8">
             <h1 className="montserrat montserrat  text-[#FFD700] text-4xl md:text-6xl lg:text-7xl capitalize mb-6">
             Cliff Tinted Lenses
             </h1>
             <p className="text-lg md:text-xl text-[#FFD700]/80 max-w-3xl mx-auto">
             Discover our premium collection of lens coatings and optical
             solutions for superior vision and eye protection
             </p>
        </div>
        <div className="absolute inset-0 bg-black/60 z-[1]" />
                    
    </section>


      <div className="min-h-screen bg-black text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zinc-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative  mx-auto">
          {/* Benefits Section */}
          <div className="mt-8 sm:my-12 lg:my-16">
            <div className="p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center text-white">
                Benefits of Tinted Lenses
              </h3>

              <div className="w-1/2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4 w-20 h-20 mx-auto">
                    <img
                      className="w-full h-full object-contain object-center"
                      src="/svgs/uvprotection.svg"
                      alt="cliff uvprotection"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    UV Protection
                  </h4>
                  <p className="text-zinc-300 text-sm">
                    Blocks harmful UV rays from the sun
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4 w-20 h-20 mx-auto">
                    <img
                      className="w-full h-full object-contain object-center"
                      src="/svgs/bluelight.svg"
                      alt="cliff bluelight"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Reduced Glare
                  </h4>
                  <p className="text-zinc-300 text-sm">
                    Minimizes glare for comfortable vision
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-8 w-16 h-16 mx-auto">
                    <img
                      className="w-full h-full object-contain object-center"
                      src="/style.svg"
                      alt="style customize cliff"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Style Options
                  </h4>
                  <p className="text-zinc-300 text-sm">
                    Multiple colors and intensity levels
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4 w-20 h-20 mx-auto">
                    <img
                      className="w-full h-full object-contain object-center"
                      src="/svgs/antireflective.svg"
                      alt="cliff antireflective"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Driving Comfort
                  </h4>
                  <p className="text-zinc-300 text-sm">
                    Enhanced visibility while driving
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tint Categories */}
          <div className="relative z-[999]">
            {tintCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gradient-to-br z-[999] from-zinc-800/30 to-zinc-700/30 rounded-2xl sm:rounded-3xl  backdrop-blur-sm"
              >
                <div className="h-[100dvh] w-full z-[99] relative">
                  <Image
                    src={"/cliffcoating/street.png"}
                    fill
                    alt="scene"
                    className="object-cover brightness-90 object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute flex justify-end gap-8 items-center flex-col z-40 inset-0 p-4 lg:p-6">


                    <div className=" relative w-40 lg:w-80 xl:w-96 mb-10 lg:mb-16  ">
                      <div className="absolute right-5 opacity-90 top-10">
                        <img src="/logo/logo.png" alt="" className="w-13" />
                      </div>
                      <svg viewBox="0 0 805 602" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill={selectedTints[category.name].hex}
                          d="M10.5961 220.112C47.3961 385.312 51 439 142 537.5C233 636 429.929 600.112 533.596 564.112C800.096 478.612 780.096 391.612 789 362.5C797.904 333.388 802.096 208.445 802.596 147.112C817.396 57.1118 668.43 19.2785 592.096 11.6118C288.496 -25.1882 137 42.7874 95.5 53.5C-26.0958 84.8881 0.929469 165.279 10.5961 220.112Z" fill-opacity="0.3" stroke="white" />
                      </svg>

                    </div>
                    {/* Tint Options Grid */}
                    <div className="flex justify-center flex-wrap  gap-4 sm:gap-6">
                      {category.tints.map((tint, tintIndex) => (
                        <div key={tintIndex} className="group">
                          <div className=" ">
                            {/* Tint Circle */}
                            <div
                              className={`relative mx-auto mb-3 size-10 rounded-full border-2 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg ${selectedTints[category.name].name === tint.name
                                ? "border-green-500 shadow-amber-400/50 "
                                : "border-white hover:border-amber-300"
                                }`}
                              onClick={() =>
                                setSelectedTints(prev => ({
                                  ...prev,
                                  [category.name]: {
                                    color: tint.color,
                                    name: tint.name,
                                    hex: tint.hex,
                                  }
                                }))
                              }
                            >
                              <div
                                className={`w-full h-full ${tint.color} opacity-80`}
                              ></div>
                              {/* Glass Effect Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                              <div className="absolute top-2 right-2 w-3 h-3 bg-white/40 rounded-full blur-sm"></div>
                              {/* Selection Indicator */}
                              {selectedTints[category.name].name === tint.name && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center  p-2 mb-6 sm:mb-8">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                        {category.name} Tints
                      </h2>
                      <p className="text-zinc-300 text-base sm:text-lg">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </>
  );
};

export default CliffTintedLenses;
