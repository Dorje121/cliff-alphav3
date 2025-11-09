"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Minimize2, Weight, Eye, Zap, Shield, Clock, Sun, Moon, Users, Activity, Heart, Target, Ruler, Layers } from 'lucide-react'

export default function ThicknessControlTechnologyPage() {
  const features = [
    {
      icon: <Minimize2 className="w-8 h-8" />,
      title: "Ultra-Thin Profile",
      description: "Advanced lens thinning technology that reduces thickness by up to 40% without compromising optical clarity"
    },
    {
      icon: <Weight className="w-8 h-8" />,
      title: "Lightweight Design",
      description: "Significantly reduced weight for enhanced comfort and all-day wearability"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-Layer Precision",
      description: "Precision engineering that maintains optical performance while minimizing material use"
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Custom Thickness Control",
      description: "Smart algorithms calculate optimal thickness based on your prescription and frame selection"
    }
  ];

  const technologySteps = [
    {
      step: "01",
      title: "Prescription Analysis",
      description: "Advanced algorithms analyze your prescription to determine optimal thickness reduction points"
    },
    {
      step: "02",
      title: "Digital Surfacing",
      description: "Precision digital surfacing technology removes excess material while maintaining optical integrity"
    },
    {
      step: "03",
      title: "Edge Optimization",
      description: "Smart edge thinning reduces bulk while ensuring perfect fit in any frame style"
    },
    {
      step: "04",
      title: "Quality Verification",
      description: "Rigorous testing ensures optical clarity and durability despite reduced thickness"
    }
  ];

  const prescriptionBenefits = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "High-Power Solutions",
      description: "Even strong prescriptions can achieve slim, attractive lens profiles"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Adaptation",
      description: "No compromise on visual quality - experience immediate comfort and clarity"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Durability Maintained",
      description: "Advanced materials ensure thin lenses remain strong and impact-resistant"
    }
  ];

  const materialAdvantages = [
    {
      title: "High-Index Materials",
      description: "Advanced polymers that bend light more efficiently, allowing for thinner lenses"
    },
    {
      title: "Aspheric Design",
      description: "Complex surface curves that eliminate bulk while correcting visual distortions"
    },
    {
      title: "Premium Coatings",
      description: "Protective coatings that enhance durability without adding significant thickness"
    }
  ];

  const frameCompatibility = [
    {
      style: "Rimless Frames",
      benefit: "Perfect for minimalist designs where lens thickness is highly visible"
    },
    {
      style: "Semi-Rimless Frames",
      benefit: "Clean, attractive edge appearance without bulky look"
    },
    {
      style: "Full-Rim Frames",
      benefit: "Lighter weight and more comfortable fit, especially for strong prescriptions"
    }
  ];

  return (
    <main className="min-h-screen bg-black relative pb-28">
      {/* Back Button */}
      <div className="max-w-[94rem] w-full mx-auto pl-8 pt-24 absolute z-40">
        <Link
          href="/technology"
          className="inline-flex items-center text-[#FFD700] hover:text-amber-300 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Technology
        </Link>
      </div>

      {/* Hero Section */}
      <div className="h-[80vh] w-full mx-auto relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/lenses/lensInHand.png"
            alt="Thickness Control Technology"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto pl-0 pr-8 py-8 font-poppins">
            <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight text-center">
              Thickness Control<sup>™</sup> Technology
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              Advanced lens thinning technology for sleek, lightweight eyewear without compromising optical performance
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
            Thickness Control Technology™ revolutionizes lens design by combining advanced materials with precision engineering, 
            delivering ultra-thin lenses that maintain perfect optical clarity while reducing weight and bulk.
          </h2>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Advanced Thinning Features</h2>
            <p className="text-xl text-[#FFD700] max-w-2xl mx-auto">
              Experience the next generation of slim lens technology with precision thickness control
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-yellow-500/20 rounded-full text-yellow-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#FFD700] mb-3">{feature.title}</h3>
                <p className="text-[#FFD700]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prescription Benefits */}
      {/* <section className="py-20 bg-gradient-to-b from-black to-yellow-900/10">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Benefits for Every Prescription</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Superior results regardless of your vision needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {prescriptionBenefits.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-yellow-500/20 rounded-full text-yellow-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">{feature.title}</h3>
                <p className="text-yellow-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Content Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-[#FFD700]">The Science of Slim Lenses</h2>
              <div className="space-y-6 text-[#FFD700]">
                <p className="text-xl">
                  Thickness Control Technology represents a breakthrough in optical engineering, using advanced algorithms 
                  and precision manufacturing to create lenses that are significantly thinner and lighter without sacrificing visual quality.
                </p>
                <p className="text-xl">
                  Our proprietary thinning process analyzes every aspect of your prescription and frame selection to determine 
                  the optimal thickness reduction while maintaining perfect optical performance and durability.
                </p>
              </div>
              
              {/* Material Advantages */}
              <div className="space-y-4 mt-8">
                <h3 className="text-2xl font-semibold text-yellow-300">Advanced Material Technology</h3>
                {materialAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-[#FFD700] font-semibold">{advantage.title}</h4>
                      <p className="text-[#FFD700]">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="md:w-1/2 h-[500px] relative rounded-lg overflow-hidden">
              <Image
                src="/homeimage/lense1.png"
                alt="Thickness Control Technology"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frame Compatibility */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Perfect for All Frame Styles</h2>
            <p className="text-xl text-[#FFD700] max-w-2xl mx-auto">
              Enhanced aesthetics and comfort across all frame types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frameCompatibility.map((frame, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-yellow-500/5 to-transparent border border-yellow-500/20 rounded-xl p-6 text-center"
              >
                <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">{frame.style}</h3>
                <p className="text-[#FFD700] text-lg">{frame.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
         {/* Full width image with overlay */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="w-full h-[500px] relative rounded-xl overflow-hidden">
            <Image
              src="/homeimage/lense6.png"
              alt="Thickness Control Technology"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
              <div className="h-full flex flex-col justify-center  max-w-2xl">
                <span className="text-[#FFD700] text-sm uppercase tracking-widest mb-2">Cliff Eyewear™</span>
                <h2 className="text-4xl md:text-5xl montserrat text-white mb-4">
                  Thickness Control<sup>™</sup> Technology
                </h2>
                <p className="text-[#FFD700] text-lg md:text-xl montserrat">
                  Revolutionizing lens design with ultra-thin, lightweight performance
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">How Thickness Control Works</h2>
            <p className="text-xl text-[#FFD700] max-w-2xl mx-auto">
              A sophisticated four-step process that revolutionizes lens thinning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-black/50 border border-yellow-500/30 rounded-xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-[#FFD700]">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#FFD700] mb-3">{step.title}</h3>
                    <p className="text-[#FFD700] text-lg">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      {/* <section className="py-20 bg-gradient-to-t from-black to-yellow-900/10">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">See the Difference</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Dramatic thickness reduction without compromising quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Standard Lenses</h3>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-8">
                <div className="text-5xl text-yellow-400 mb-4">📏</div>
                <p className="text-yellow-200 text-lg mb-4">Thicker profile</p>
                <p className="text-yellow-200 text-lg mb-4">Heavier weight</p>
                <p className="text-yellow-200 text-lg">Limited frame options</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Thickness Control™</h3>
              <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-xl p-8">
                <div className="text-5xl text-yellow-400 mb-4">✨</div>
                <p className="text-yellow-200 text-lg mb-4">Up to 40% thinner</p>
                <p className="text-yellow-200 text-lg mb-4">Lightweight comfort</p>
                <p className="text-yellow-200 text-lg">Works with any frame</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

   

     
    </main>
  );
}