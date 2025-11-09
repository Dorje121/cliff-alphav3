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
  id: "03",
  title: "BLUE SAFE UV COATING",
  subtitle: "Dual Protection Technology",
  description: "Blue Safe UV Coating provides comprehensive protection against both harmful blue light and UV rays, ensuring your eyes are shielded from digital screens and sunlight. Experience crystal-clear vision with enhanced contrast and reduced eye strain.",
  small: "Our advanced Blue Safe UV Coating combines blue light filtering with 100% UV protection, making it the perfect solution for both indoor and outdoor vision needs. Ideal for digital device users and outdoor enthusiasts alike.",
  slug: "blue-safe-uv-coating",
  image: "/bluesafe/blue1.png",
  featureImage: "/bluesafe/blue1.png",
  video: "/newimage/blue-safe-video.mp4",
  alignment: "right",
  buttonText: "Discover More",
  whyChoose: {
    title: "Why Choose BLUE SAFE UV COATING?",
    description: "Our Blue Safe UV Coating is engineered for the modern lifestyle, providing complete protection against both digital eye strain and harmful UV radiation. Perfect for those who value both eye health and visual performance in all lighting conditions.",
    features: [
      "Blocks 100% of harmful UV rays",
      "Filters high-energy blue light from screens",
      "Reduces digital eye strain and fatigue",
      "Enhances contrast and visual clarity",
      "Minimizes glare and reflections",
      "Durable, scratch-resistant coating"
    ]
  }
};

const features: Feature[] = [
  { 
    icon: "/svgs/uvprotection.svg", 
    label: "UV400 Protection",
    description: "100% protection against UVA and UVB rays"
  },
  { 
    icon: "/svgs/bluelight.svg", 
    label: "Blue Light Filter",
    description: "Blocks harmful high-energy blue light"
  },
  { 
    icon: "/svgs/antireflective.svg", 
    label: "Anti-Reflective",
    description: "Reduces glare and eye strain"
  },
  { 
    icon: "/svgs/scratchresistance.svg", 
    label: "Scratch Resistant",
    description: "Durable coating for long-lasting wear"
  },
  { 
    icon: "/svgs/glareprotection.svg", 
    label: "Glare Protection",
    description: "Reduces distracting reflections"
  },
  { 
    icon: "/svgs/clearvision.svg", 
    label: "Clear Vision",
    description: "Enhances visual clarity"
  },
  { 
    icon: "/svgs/easytoclean.svg", 
    label: "Easy to Clean",
    description: "Repels dust and smudges"
  },
  { 
    icon: "/svgs/superslippery.svg", 
    label: "Smooth Surface",
    description: "Prevents water spots and smears"
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
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            <Image
              src={"/homeimage/blue-safe2.png"}
              alt="Blue Safe UV Protection"
              fill
              className="object-cover opacity-80"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full flex items-center">
          <div className="absolute inset-0 bg-black" />
          <div className="relative z-10 h-full flex flex-col pt-65 justify-center px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl montserrat text-white mb-4 leading-tight">
                {coating.title}
              </h1>
          
              <p className="text-lg md:text-2xl montserrat text-gray-200 mb-8 max-w-2xl text-center mx-auto">
                {coating.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Link 
                  href="/contact" 
                  className="bg-[#FFD700] hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full transition-colors duration-300"
                >
                  Get Yours Today
                </Link>
                <Link 
                  href="#features" 
                  className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 font-medium px-8 py-3 rounded-full transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <section className="py-16 bg-[#FFD700]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-black/50 p-6 rounded-xl border border-[#FFD700]/20">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#FFD700]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12l3 3 5-5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#FFD700]">100% UV Protection</h3>
              <p className="text-sm text-gray-300 mt-2">Blocks harmful UVA/UVB rays</p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl border border-[#FFD700]/20">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#FFD700]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#FFD700]">Blue Light Filter</h3>
              <p className="text-sm text-gray-300 mt-2">Reduces digital eye strain</p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl border border-[#FFD700]/20">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#FFD700]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#FFD700]">Anti-Reflective</h3>
              <p className="text-sm text-gray-300 mt-2">Minimizes glare and reflections</p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl border border-[#FFD700]/20">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#FFD700]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#FFD700]">Durable</h3>
              <p className="text-sm text-[#FFD700] mt-2">Scratch and smudge resistant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section with Side Content */}
      <section id="features" className="py-24 bg-[#FFD700]/10">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Video on the left */}
              <div className="w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/Video_blue-violet.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Content on the right */}
              <div className="text-white space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFD700] mb-6">
                  The Ultimate Eye Protection
                </h2>
                <p className="text-lg md:text-xl text-[#FFD700] leading-relaxed">
                  Our Blue Safe UV Coating is scientifically engineered to protect your eyes from both harmful blue light emitted by digital screens and damaging UV rays from the sun. Experience unparalleled visual comfort and clarity, whether you&apos;re working, gaming, or enjoying outdoor activities.
                </p>
                <div className="pt-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#FFD700] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#FFD700]">Blocks 100% of harmful UVA/UVB rays</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#FFD700] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#FFD700]">Reduces blue light exposure by up to 40%</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#FFD700] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#FFD700]">Enhances contrast and reduces glare</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#FFD700] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#FFD700]">Durable, scratch-resistant coating</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Why Choose Section */}
      <section className="w-full bg-black py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative h-[500px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-[400px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-black p-4 rounded-lg overflow-hidden">
                <Image
                  src={coating.featureImage}
                  alt={`${coating.title} Feature`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
            <motion.div 
              className="text-white space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-6">
                Why Choose {coating.title}?
              </h2>
              <p className="text-lg md:text-xl text-[#FFD700] leading-relaxed">
                {coating.whyChoose.description}
              </p>
              <ul className="space-y-4">
                {coating.whyChoose.features.map((feature, index) => (
                  <motion.li 
                    key={`benefit-${index}`} 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-3 text-lg text-[#FFD700]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] text-center mb-16">
            {coating.title} Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={`feature-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#FFD700]/10 rounded-full">
                  {feature.icon.startsWith("/") ? (
                    <Image
                      src={feature.icon}
                      alt={feature.label}
                      width={40}
                      height={40}
                      className="w-10 h-10 text-[#FFD700]"
                    />
                  ) : (
                    <Icon icon={feature.icon} className="w-10 h-10 text-[#FFD700]" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#FFD700] mb-3">
                  {feature.label}
                </h3>
                <p className="text-[#FFD700]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}