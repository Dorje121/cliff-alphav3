"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Details = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const features = [
    {
      id: 1,
      title: "Scratch Resistance",
      icon: "/svgs/scratchresistance.svg",
      image: "/c1.jpeg",
      benefits: ["Better Durability", "Protect Against Scratches"],
    },
    {
      id: 2,
      title: "Low Reflection",
      icon: "/svgs/clearvision.svg",
      image: "/c2.jpeg",
      benefits: ["Clearer and Sharper Image", "Better Aesthetics"],
    },
    {
      id: 3,
      title: "Super Hydrophobic Coating",
      icon: "/svgs/easytoclean.svg",
      image: "/c3.jpeg",
      benefits: [
        "Easy to Clean",
        "Repels Dust and Water",
        "Prolonged Cleanliness",
      ],
    },
    {
      id: 4,
      title: "Blue Filter",
      icon: "/svgs/bluelight.svg",
      image: "/c4.jpeg",
      benefits: ["Partially Filters Harmful Blue Rays"],
    },
    {
      id: 5,
      title: "UV Protection",
      icon: "/svgs/uvprotection.svg",
      image: "/c5.jpeg",
      benefits: ["As Recommended by WHO upto 400nm"],
    },
    {
      id: 6,
      title: "Anti Glare Coating",
      icon: "/svgs/glareprotection.svg",
      image: "/c6.jpeg",
      benefits: [
        "Reduce Distraction for reflection from Dashboard mirror",
        "Comfortable Night Driving",
      ],
    },
    {
      id: 7,
      title: "Spin Coating Photochromatic",
      icon: "/svgs/photochromatic.svg",
      image: "/c7.jpeg",
      benefits: ["Rapid Darkening"],
    },
  ];
  return (
    <>
      {/* Main Content */}
      <div className="min-h-screen text-white">
        <div className="max-w-[1500px] mx-auto p-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                CLIFF{" "}
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  PHOTO-Z UV{" "}
                </span>
              </h1>
            </div>
          </motion.div>
          {/* Features Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Left Side - Images */}
            <div className="lg:w-1/2">
              <div className="sticky top-8">
                <motion.div
                  key={selectedFeature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={
                        selectedFeature
                          ? features.find((f) => f.id === selectedFeature)
                              ?.image || "/c1.jpeg"
                          : "/c1.jpeg"
                      }
                      alt={
                        selectedFeature
                          ? features.find((f) => f.id === selectedFeature)
                              ?.title || "Feature"
                          : "Select a feature"
                      }
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Features List */}
            <div className="lg:w-1/2 space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-all duration-300 ${
                    selectedFeature === feature.id
                      ? "ring-1 ring-yellow-500/50 bg-gray-800/50"
                      : ""
                  }`}
                >
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-800/40 transition-all duration-300"
                    onClick={() =>
                      setSelectedFeature(
                        selectedFeature === feature.id ? null : feature.id
                      )
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={24}
                          height={24}
                          className="w-16 h-16 text-white filter brightness-0 invert"
                        />
                        <h3 className="text-xl font-semibold text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{
                          rotate: selectedFeature === feature.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-400"
                      >
                        <svg
                          className="w-5 h-5"
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
                      </motion.div>
                    </div>
                  </div>

                  {/* Dropdown Benefits */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: selectedFeature === feature.id ? "auto" : 0,
                      opacity: selectedFeature === feature.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-600/50 pt-4">
                        <ul className="space-y-2 text-gray-300">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <motion.li
                              key={benefitIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: selectedFeature === feature.id ? 1 : 0,
                                x: selectedFeature === feature.id ? 0 : -20,
                              }}
                              transition={{
                                duration: 0.3,
                                delay:
                                  selectedFeature === feature.id
                                    ? benefitIndex * 0.1
                                    : 0,
                              }}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                              <span>{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
