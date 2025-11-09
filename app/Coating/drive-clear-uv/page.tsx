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
  title: "DRIVE SAFE UV COATING",
  subtitle: "Advanced UV Protection for Driving",
  description: "Drive Safe UV coating provides superior protection against harmful UV rays and glare while driving, enhancing visual clarity, reducing eye strain, and ensuring safer driving in all lighting conditions.",
  small: "Drive Safe UV coating offers comprehensive protection from UV radiation and intense glare, specifically designed for driving conditions. It improves contrast, reduces eye fatigue, and provides crystal-clear vision for safer journeys.",
  slug: "drive-safe-uv-coating",
  image: "/bluesafe/drive.png",
  featureImage: "/bluesafe/driveclear.png",
  alignment: "right",
  buttonText: "Learn More",
  whyChoose: {
    title: "Why Choose DRIVE SAFE UV COATING?",
    description: "Our Drive Safe UV Coating is specifically engineered for driving conditions, offering maximum UV protection, glare reduction, and enhanced visual clarity. Ideal for daily commuters, road trippers, and professional drivers who demand superior vision and protection.",
    features: [
      "Blocks 100% of harmful UVA and UVB rays",
      "Reduces glare from headlights and sunlight",
      "Enhances contrast for better road visibility",
      "Minimizes eye strain during long drives"
    ]
  }
};

const features: Feature[] = [
  { 
    icon: "/svgs/uvprotection.svg", 
    label: "100% UV Protection",
    description: "Complete protection from harmful UVA/UVB radiation"
  },
  { 
    icon: "/svgs/glareprotection.svg", 
    label: "Glare Reduction",
    description: "Reduces intense glare from headlights and reflective surfaces"
  },
  { 
    icon: "/svgs/clearvision.svg", 
    label: "Enhanced Vision",
    description: "Improved clarity for better object recognition on the road"
  },
  { 
    icon: "/svgs/bluelight.svg", 
    label: "Eye Comfort",
    description: "Reduces eye strain during extended driving periods"
  },
  { 
    icon: "/svgs/scratchresistance.svg", 
    label: "Durability",
    description: "Scratch-resistant coating for long-lasting performance"
  },
  { 
    icon: "/svgs/antireflective.svg", 
    label: "All-Weather",
    description: "Optimal performance in various weather conditions"
  }
];

export default function DriveSafeUVPage() {
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
              src={"/bluesafe/drive.png"}
              alt={"Drive Safe UV Coating"}
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
              Drive Safe UV Coating
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              Enhanced Vision. Maximum Protection. Safer Driving.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative bg-yellow-300/10 py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-1 h-16 bg-yellow-400 mx-auto"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl leading-12 text-yellow-300 mb-6">
            Drive with confidence in any light. CLIFF Drive Safe UV Coating filters harmful UV rays and reduces glare for clearer vision and safer journeys, day or night.
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
                <source src="/videos/Video_blue-violet.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Content on the right */}
            <div className="text-white space-y-6">
              <h2 className="text-3xl md:text-4xl montserrat text-yellow-400">
                Drive Safe UV coating provides superior protection against harmful UV radiation and intense glare while driving. It enhances visual clarity, improves contrast, and reduces eye strain for safer, more comfortable driving in all conditions.
              </h2>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-lg text-yellow-200">Blocks 100% of harmful UVA/UVB rays during driving</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-lg text-yellow-200">Reduces glare from oncoming headlights and bright sunlight</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-lg text-yellow-200">Enhances contrast for better road and obstacle recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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

      {/* Driving Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-900/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Enhanced Driving Experience</h2>
            <p className="text-xl text-[#FFD700] max-w-2xl mx-auto">
              Superior protection and clarity for every driving condition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 text-[#FFD700] gap-8">
            {[
              {
                title: "Daytime Driving",
                benefits: ["UV protection from sun exposure", "Reduced glare from reflective surfaces", "Enhanced contrast in bright conditions"]
              },
              {
                title: "Night Driving",
                benefits: ["Minimized headlight glare", "Improved low-light vision", "Reduced halo effects around lights"]
              },
              {
                title: "All-Weather Performance",
                benefits: ["Clear vision in rain and fog", "Reduced glare from wet roads", "Consistent performance in changing conditions"]
              }
            ].map((condition, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-500/5 to-transparent border border-yellow-500/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-[#FFD700] mb-4 text-center">{condition.title}</h3>
                <ul className="space-y-3">
                  {condition.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-[#FFD700]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full bg-black py-12">
        <div className="max-w-[1800px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl poppins text-[#FFD700] text-center mb-12">
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