"use client";
import React from "react";
import { motion } from "framer-motion";
import CoatingContents from "@/contexts/coatingcontents";
import CoatingsUV from "@/contexts/coatingsUV";
import Image from "next/image";

const List = () => {
  const coatingFeatures = [
    {
      icon: "/svgs/uvprotection.svg",
      title: "UV Protection",
      description:
        "Complete protection from harmful UV rays with advanced filtering technology",
      gradient: "from-yellow-400/20 to-amber-500/10",
    },
    {
      icon: "/svgs/scratchresistance.svg",
      title: "Scratch Resistant",
      description:
        "Diamond-like coating that provides exceptional durability against daily wear",
      gradient: "from-amber-400/20 to-yellow-500/10",
    },
    {
      icon: "/svgs/superslippery.svg",
      title: "Hydrophobic",
      description:
        "Water and oil repellent surface keeps lenses cleaner for longer",
      gradient: "from-yellow-300/20 to-amber-400/10",
    },
    {
      icon: "/svgs/antireflective.svg",
      title: "Anti-Reflective",
      description:
        "Eliminates glare and reflections for crystal clear vision in all conditions",
      gradient: "from-amber-300/20 to-yellow-400/10",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: "url(/homeimage/herotechnology.avif)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-amber-950/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="montserrat font-medium text-4xl md:text-6xl  capitalize mb-8 leading-none">
              Advanced Coatings
            </h1>

            <p className="text-md lg:text-lg max-w-3xl text-[#FFD700]/90  mx-auto leading-relaxed mb-12">
              Revolutionary lens technology engineered for unparalleled
              protection, clarity, and visual performance in every environment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="relative py-20 px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#FFD700_1px,_transparent_0)] bg-[length:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Enhanced Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coatingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="relative bg-yellow-800/10 backdrop-blur-sm rounded-3xl p-8 border border-yellow-800/30 hover:border-yellow-400/50 transition-all duration-500 h-full overflow-hidden">
                  {/* Animated Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                  />

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-yellow-400/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 flex items-center justify-center group-hover:from-yellow-400/20 group-hover:to-amber-500/10 transition-all duration-500 ">
                        <Image
                          src={feature.icon}
                          alt="Cliff Lens"
                          height={64}
                          width={64}
                          className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-yellow-300/80 text-lg leading-relaxed group-hover:text-yellow-200/90 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, #FFD70005 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, #FFD70008 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, #FFD70005 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>

        <CoatingContents />
        <CoatingsUV />
      </div>
    </div>
  );
};

export default List;
