"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Feature {
  icon: string;
  label: string;
  description: string;
}

const coating = {
  id: "02",
  title: "BLUE SAFE COATING",
  subtitle: "Advanced Blue Light Protection",
  description: "Blue safe coating lenses provide advanced blue light protection, helping reduce eye strain, minimize glare, and maintain clear, comfortable vision throughout your day, whether working, studying, or enjoying screen time.",
  small: "Blue safe coating lenses provide advanced blue light protection to reduce digital eye strain, minimize glare, enhance visual clarity, and keep your eyes comfortable all day. Perfect for prolonged screen use, they help protect your vision and support sharper focus.",
  slug: "blue-safe-coating",
  image: "/bluesafe/Bluesafe.jpg",
  featureImage: "/homeimage/bluesafecoating.png",
  alignment: "right",
  buttonText: "Learn More",
  whyChoose: {
    title: "Why Choose BLUE SAFE COATING?",
    description: "Our Blue Safe Coating is designed for the digital age, offering superior protection against harmful blue light while maintaining excellent visual clarity. Ideal for professionals, students, and anyone who spends significant time in front of screens.",
    features: [
      "Blocks harmful blue light emissions",
      "Reduces eye strain during extended screen use",
      "Minimizes glare and reflections",
      "Maintains natural color perception"
    ]
  }
};

const features: Feature[] = [
  { 
    icon: "/svgs/uvprotection.svg", 
    label: "UV Protection",
    description: "Blocks 100% of harmful UV rays"
  },
  { 
    icon: "/svgs/scratchresistance.svg", 
    label: "Scratch Resistance",
    description: "Durable coating resists daily wear and tear"
  },
  { 
    icon: "/svgs/clearvision.svg", 
    label: "Clear Vision",
    description: "Enhanced visual clarity and sharpness"
  },
  { 
    icon: "/svgs/antireflective.svg", 
    label: "Reduced Reflection",
    description: "Minimizes glare and light reflections"
  },
  { 
    icon: "/svgs/superslippery.svg", 
    label: "Super Slippery Coating",
    description: "Repels water, oil, and dust"
  },
  { 
    icon: "/svgs/bluelight.svg", 
    label: "Blue Light Protection",
    description: "Filters harmful blue light from screens"
  }
];

export default function BlueSafePage() {
  return (
    <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[94rem] w-full mx-auto px-4 pt-18">
          <Link
            href="/Coating"
            className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors bg-transparent"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Coatings
          </Link>
        </div>
      </div>
      {/* Hero Section */}
      <div className="h-[80vh] w-full mx-auto relative overflow-hidden">
        {/* Animated Background Image */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            <Image
              src={"/bluesafe/Bluesafe.jpg"}
              alt={"Cliff Lens"}
              fill
              className="object-cover opacity-40"
              priority
            />
          </motion.div>
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto pl-0 pr-8 py-8 font-poppins">
            <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight text-center">
              Single Vision Lenses
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              Sharper Vision. Smarter Design.
            </p>
          </div>
        </div>
      </div>


       <div className="relative bg-yellow-300/10 py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-1 h-16 bg-yellow-400 mx-auto"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl leading-12 text-yellow-300 mb-6">
            Why let screens drain your eyes? CLIFF Blue Safe Coating’s Filters out harmful blue light so you stay focused and comfortable. 
          </h2>
        </div>
      </div>


        {/* Video Section with Side Content */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Video on the left */}
              <div className="w-full h-[600px] overflow-hidden rounded-lg">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src="/videos/cliffvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Content on the right */}
              <div className="text-white space-y-6">
                <h2 className="text-3xl md:text-4xl montserrat text-yellow-400">
                  Blue safe coating lenses provide advanced blue light protection to reduce digital eye strain, minimize glare, enhance visual clarity, and keep your eyes comfortable all day. Perfect for prolonged screen use, they help protect your vision and support sharper focus.
                </h2>
              
              </div>
            </div>
          </div>
        </section>

      {/* <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 w-full max-w-[95%] mx-auto">
          <div className="flex flex-col justify-center text-left">
            <h2 className="montserrat text-2xl md:text-4xl lg:text-5xl leading-snug">
              <span className="text-yellow-400">{coating.title}</span>{" "}
              {coating.description}
            </h2>
          </div>

          <div className="flex flex-col justify-center pt-20 text-left md:text-right">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl ml-auto">
              {coating.small}
            </p>
          </div>
        </div>
      </section> */}

      <section className="w-full bg-black py-20">
        <div className="max-w-[1800px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[400px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-black p-4 rounded-lg">
              <div className="relative w-full h-full max-w-[95%] max-h-[80%]">
                <Image
                  src={coating.featureImage}
                  alt={`${coating.title} Feature`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="text-white space-y-6 px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl montserrat">
                <span className="text-yellow-400">Why Choose</span>{" "}
                {coating.title}?
              </h2>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {coating.whyChoose.description}
              </p>

              <ul className="space-y-4 mt-8">
                {coating.whyChoose.features.map((feature, index) => (
                  <li key={`why-feature-${index}`} className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-black py-12">
        <div className="max-w-[1800px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl poppins text-white text-center mb-12">
            {coating.title} Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-2 sm:px-4 py-8">
            {features.map((feature, index) => (
              <div
                key={`feature-card-${index}`}
                className="flex flex-col h-full text-center bg-gradient-to-b from-zinc-900/50 to-zinc-900/10 p-6 rounded-xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex-shrink-0 flex items-center justify-center text-yellow-400">
                  {feature.icon.startsWith("/") ? (
                    <Image
                      src={feature.icon}
                      alt={feature.label}
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Icon icon={feature.icon} className="w-full h-full" />
                  )}
                </div>
                <h3 className="font-semibold text-sm sm:text-md mb-2 uppercase">
                  {feature.label}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>      
    </div>
  );
}