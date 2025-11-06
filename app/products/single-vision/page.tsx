"use client";

import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import { ChevronLeft } from "lucide-react";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/comparision/Comparision";

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ProductPage: NextPage<PageProps> = () => {
  const features = [
    {
      icon: "solar:shield-check-bold",
      title: "UV Protection",
      description: "UV protection up to 400nm – even in your clear eyeglasses.",
    },
    {
      icon: "ion:eye",
      title: "Better Vision",
      description:
        "Better vision near or far – with optics tailored to your needs.",
    },
    {
      icon: "ion:glasses",
      title: "Comfort & Style",
      description: "Thin and light lenses for good looks and comfort.",
    },
  ];

  // const cards = [
  //   {
  //     id: "01",
  //     title: "TINT LENSES",
  //     subtitle: "Personalized Style & Comfort",
  //     image: "/lenses/tinted.png",
  //     points: [
  //       "Wide range of color options",
  //       "Reduces glare and eye strain",
  //       "Enhances contrast and visual comfort",
  //     ],
  //     slug: "tint-lenses",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Back Button */}
      <div className="max-w-[94rem] w-full mx-auto pl-8 pt-24 absolute z-40">
        <Link
          href="/products"
          className="inline-flex items-center text-[#FFD700] hover:text-amber-300 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Hero Section */}
      <div className="h-[80vh] w-full mx-auto relative">
        {/* Right Side - Hero Image */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 overflow-hidden"
        >
          <Image
            src={"/product/1.jpg"}
            alt={"Cliff Lens"}
            fill
            className="object-cover opacity-40 w-full h-auto"
            priority
          />
        </motion.div>

        {/* <div className="absolute inset-0 overflow-hidden">
          <Image
            src={"/product/1.jpg"}
            alt={"Cliff Lens"}
            fill
            className="object-cover opacity-40 w-full h-auto"
            priority
          />
        </div> */}

        <div className="absolute flex flex-col justify-end items-center w-full h-full mx-auto pl-0 pr-8 py-8 font-poppins">
          <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight">
            Single Vision
          </h1>
          <p className="text-[#FFD700] text-xl  leading-relaxed max-w-3xl">
            Sharper Vision. Smarter Design.
          </p>
        </div>
      </div>

      {/* Technology and Benefits Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-8 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <Icon
                    icon={feature.icon}
                    width="44"
                    height="44"
                    className="text-[#FFD700]"
                  />
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300"></div>

                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-yellow-300/80 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Content area divider */}
      <div className="relative bg-yellow-300/10 py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-1 h-16 bg-yellow-400 mx-auto"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl leading-12 text-yellow-300 mb-6">
            Designed for everyday clarity, Cliff Single Vision Lenses are
            optimized to your unique prescription and lifestyle. Enjoy sharper
            focus, wider vision, and the comfort your eyes deserve — because
            every detail matters.
          </h2>
        </div>
      </div>

      {/* Add image reveal */}
      <ImageComparison className="aspect-16/9 w-full h-[80vh]" enableHover>
        <ImageComparisonImage
          src="/embla/tin.jpg"
          className="blur-sm"
          alt="Motion Primitives Dark"
          position="left"
        />
        <ImageComparisonImage
          src="/embla/tin.jpg"
          alt="Motion Primitives Light"
          position="right"
        />
        <ImageComparisonSlider className="w-0.5 bg-yellow-400/50 backdrop-blur-xs">
          <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400"></div>
        </ImageComparisonSlider>
      </ImageComparison>

      <div className="w-full mx-auto px-8 relative">
        {/* Title Section */}
        <div className="  text-center py-16">
          <h2 className="text-2xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4">
            Drive Clear Coating
          </h2>
          <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl mx-auto">
            Customized solutions for specific vision needs and lifestyles.
          </p>
        </div>
        <div
          className={`relative h-[80vh] min-h-[600px] w-1/2 mx-auto rounded-3xl overflow-hidden group `}
        >
          <div className="absolute inset-0 ">
            <Image
              src={"/cliffcoating/Photo-Z.jpg"}
              alt={"Cliff Lens"}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              priority
            />
            {/* <div className="absolute inset-0 bg-[#FFD700]/20 group-hover:bg-black/10 transition-all duration-500" /> */}
          </div>

          {/* Bottom Gradient */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" /> */}
        </div>{" "}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={`/Coating/`}
            className="category-button px-8 py-3 bg-[#FFD700] rounded-full text-zinc-800 text-lg font-medium hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[140px] text-center"
          >
            Okay
          </Link>
        </div>
        {/* <div className="grid md:grid-cols-3 gap-4 px-2 md:px-6 pb-4 md:pb-16">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.id === "01" ? "/cliff-tinted-lenses" : "#"}
              className=""
            >
              <div className="bg-[#FFD700]/10 w-full rounded-lg h-auto flex flex-col overflow-hidden border border-yellow-900/30  transition  hover:border-yellow-800/50">
                <div className="w-full h-[280px] relative flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-6 pt-6 pb-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-amber-400 text-sm">{card.subtitle}</p>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <Check size={16} className="text-yellow-400 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex justify-end">
                    <Link
                      href={
                        card.id === "01"
                          ? "/cliff-tinted-lenses"
                          : `/products/${card.slug}`
                      }
                      className="inline-flex items-center text-amber-400 text-base font-medium hover:text-white transition-colors duration-300 group"
                    >
                      Learn More
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProductPage;
