"use client";
import React from "react";
import Image from "next/image";

export const productIcons = [
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
];

const ProductIcons = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-4 px-2 sm:px-8 py-8">
      {productIcons.map((feature, idx) => (
        <div
          key={idx}
          className="text-center bg-gradient-to-b from-zinc-900/50 to-zinc-900/10 p-4 sm:p-6 rounded-xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300"
        >
          <Image
            src={feature.icon}
            alt={feature.title}
            height={64}
            width={64}
            className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4"
          />
          <h3 className="font-semibold text-sm sm:text-md mb-1 sm:mb-2 uppercase">
            {feature.title}
          </h3>
          <p className="text-xs sm:text-sm">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductIcons;