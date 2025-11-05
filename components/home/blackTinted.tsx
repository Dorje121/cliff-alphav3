"use client";
import Image from "next/image";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import HeroSection from "@/components/Services/heropage";
import { ArrowRight } from "lucide-react";

const CliffTintedLenses = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const [selectedTints, setSelectedTints] = useState<{
    [category: string]: {
      color: string;
      name: string;
      hex: string;
    };
  }>({
    Black: {
      color: "bg-zinc-900",
      name: "Black 25%",
      hex: "#111827",
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
        // {
        //   name: "Black 60%",
        //   color: "bg-black",
        //   intensity: "60%",
        //   hex: "#000000",
        // },
        // {
        //   name: "Black 75%",
        //   color: "bg-black",
        //   intensity: "75%",
        //   hex: "#000000",
        // },
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
        // {
        //   name: "Black 75/25%",
        //   color: "bg-gradient-to-b from-black to-zinc-900",
        //   intensity: "75/25%",
        //   hex: "#000000",
        // },
        {
          name: "Black 90/40%",
          color: "bg-gradient-to-b from-black to-zinc-700",
          intensity: "90/40%",
          hex: "#000000",
        },
      ],
    },
  ];

  return (
    <>
      <div className="max-w-screen mx-auto">
        <div className="relative  mx-auto pb-12">
          {/* Tint Categories */}
          <div className="relative z-[999]">
            {tintCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="z-[999] backdrop-blur-sm">
                <div className="h-[100dvh] w-full z-[99] relative">
                  <Image
                    src={"/cliffcoating/street.png"}
                    fill
                    alt="scene"
                    className="object-cover brightness-90 object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t  to-transparent"></div>
                  <div className="absolute flex justify-end gap-8 items-center flex-col z-40 inset-0 p-4 lg:p-6">
                    <div className=" relative w-40 lg:w-80 xl:w-96 mb-10 lg:mb-16  ">
                      <div className="absolute right-5 opacity-90 top-10">
                        <Image
                          src="/logo/logo.png"
                          alt=""
                          className="w-13"
                          height={1000}
                          width={1500}
                        />
                      </div>
                      <svg
                        viewBox="0 0 805 602"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill={selectedTints[category.name].hex}
                          d="M10.5961 220.112C47.3961 385.312 51 439 142 537.5C233 636 429.929 600.112 533.596 564.112C800.096 478.612 780.096 391.612 789 362.5C797.904 333.388 802.096 208.445 802.596 147.112C817.396 57.1118 668.43 19.2785 592.096 11.6118C288.496 -25.1882 137 42.7874 95.5 53.5C-26.0958 84.8881 0.929469 165.279 10.5961 220.112Z"
                          fill-opacity="0.3"
                          stroke="yellow"
                        />
                      </svg>
                    </div>
                    {/* Tint Options Grid */}
                    <div className="flex justify-center flex-wrap  gap-4 sm:gap-6">
                      {category.tints.map((tint, tintIndex) => (
                        <div key={tintIndex} className="group">
                          <div className=" ">
                            {/* Tint Circle */}
                            <div
                              className={`relative mx-auto size-20 rounded-full border-2 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                                selectedTints[category.name].name === tint.name
                                  ? "border-[#FFD700] shadow-[#FFD700] "
                                  : "border-zinc-400 hover:border-amber-300"
                              }`}
                              onClick={() =>
                                setSelectedTints((prev) => ({
                                  ...prev,
                                  [category.name]: {
                                    color: tint.color,
                                    name: tint.name,
                                    hex: tint.hex,
                                  },
                                }))
                              }
                            >
                              <div
                                className={`w-full h-full ${tint.color} opacity-80`}
                              ></div>
                              {/* Glass Effect Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-full"></div>
                              <div className="absolute top-2 right-2 w-3 h-3 bg-black/40 rounded-full blur-sm"></div>
                              {/* Selection Indicator */}
                              {selectedTints[category.name].name ===
                                tint.name &&
                                ""
                                // <div className="absolute inset-0 flex items-center justify-center">
                                //   <div className="w-5 h-5 bg-[#FFD700] rounded-full animate-pulse"></div>
                                // </div>
                              }
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center  p-2 mb-6 sm:mb-8">
                      <h2 className="text-2xl montserrat sm:text-3xl lg:text-4xl font-medium mb-2 text-[#FFD700]">
                        Lens Tints
                      </h2>
                      <p className="text-[#FFD700] poppins text-base sm:text-lg">
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
