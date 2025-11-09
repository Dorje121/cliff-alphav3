"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Eye, Zap, Shield, Clock, Sun, Moon, Users, Activity, Heart, Target } from 'lucide-react'

export default function WearFitTechnologyPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Fit",
      description: "Advanced ergonomic design that adapts to your unique facial structure for ultimate comfort"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Active Lifestyle Optimized",
      description: "Secure fit technology that stays in place during physical activities and movement"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Durability & Flexibility",
      description: "Advanced materials that provide both strength and flexibility for long-lasting wear"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "All-Day Comfort",
      description: "Lightweight construction and pressure-point elimination for extended wear without discomfort"
    }
  ];

  const technologySteps = [
    {
      step: "01",
      title: "3D Facial Mapping",
      description: "Advanced scanning technology analyzes your unique facial contours for perfect frame alignment"
    },
    {
      step: "02",
      title: "Pressure Distribution",
      description: "Strategic weight distribution eliminates pressure points on nose and ears"
    },
    {
      step: "03",
      title: "Flex Engineering",
      description: "Patented flexible hinges and materials that move with your facial expressions"
    },
    {
      step: "04",
      title: "Custom Adjustment",
      description: "Smart adjustment system that allows micro-customizations for perfect individual fit"
    }
  ];

  const comfortFeatures = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Zero Pressure Points",
      description: "Eliminates discomfort on nose bridge and behind ears"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Perfect Balance",
      description: "Optimal weight distribution prevents sliding and shifting"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Adaptation",
      description: "Feels natural from the first wear, no break-in period required"
    }
  ];

  const materialBenefits = [
    {
      title: "Advanced Memory Alloy",
      description: "Returns to perfect shape after bending, ensuring consistent fit over time"
    },
    {
      title: "Ultra-Lightweight Polymers",
      description: "Advanced materials that are 30% lighter than traditional frames without sacrificing durability"
    },
    {
      title: "Hypoallergenic Coatings",
      description: "Special coatings prevent skin irritation and allergic reactions for sensitive skin"
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
            src="/wearfit/wear.png"
            alt="WearFit Technology"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto pl-0 pr-8 py-8 font-poppins">
            <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight text-center">
              WearFit<sup>™</sup> Technology
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              Revolutionary frame technology designed for perfect comfort and all-day wearability
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
            WearFit Technology™ revolutionizes eyewear comfort through advanced ergonomic design and smart materials, 
            creating frames that feel like they were custom-made for your face from the very first wear.
          </h2>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Advanced Comfort Features</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Experience the next generation of eyewear comfort with technology designed for modern lifestyles
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
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">{feature.title}</h3>
                <p className="text-yellow-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-900/10">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Unmatched Comfort Experience</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Designed to eliminate common eyewear discomforts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {comfortFeatures.map((feature, index) => (
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
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-[#FFD700]">The Science of Perfect Fit</h2>
              <div className="space-y-6 text-[#FFD700]">
                <p className="text-xl">
                  WearFit Technology represents a breakthrough in eyewear ergonomics, combining advanced materials science 
                  with precision engineering to create frames that adapt to your unique facial structure.
                </p>
                <p className="text-xl">
                  Our proprietary fit system uses millions of data points from facial scans to design frames that distribute 
                  weight evenly, eliminate pressure points, and maintain perfect alignment throughout the day.
                </p>
              </div>
              
              {/* Material Benefits */}
              <div className="space-y-4 mt-8">
                <h3 className="text-2xl font-semibold text-yellow-300">Advanced Materials</h3>
                {materialBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-yellow-300 font-semibold">{benefit.title}</h4>
                      <p className="text-yellow-200">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="md:w-1/2 h-[500px] relative rounded-lg overflow-hidden">
              <Image
                src="/wearfit/wear.png"
                alt="WearFit Comfort Technology"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">How WearFit Technology Works</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              A sophisticated four-step process that revolutionizes eyewear comfort
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
                    <span className="text-2xl font-bold text-yellow-400">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-yellow-300 mb-3">{step.title}</h3>
                    <p className="text-yellow-200 text-lg">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 bg-gradient-to-t from-black to-yellow-900/10">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Perfect for Every Lifestyle</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Engineered to perform in any situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Activity className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">Active Lifestyle</h3>
              <p className="text-yellow-200">
                Secure fit technology keeps glasses in place during sports and physical activities
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">Professional Use</h3>
              <p className="text-yellow-200">
                All-day comfort for work environments, eliminating distraction and discomfort
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">Daily Wear</h3>
              <p className="text-yellow-200">
                Lightweight design perfect for everyday use, from morning to night
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full width image with overlay */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="w-full h-[500px] relative rounded-xl overflow-hidden">
            <Image
              src="/wearfit/wear.png"
              alt="WearFit Technology"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
              <div className="h-full flex flex-col justify-center pl-12 md:pl-24 max-w-2xl">
                <span className="text-yellow-400 text-sm uppercase tracking-widest mb-2">Cliff Eyewear™</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  WearFit<sup>™</sup> Technology
                </h2>
                <p className="text-yellow-200 text-lg md:text-xl">
                  Revolutionizing eyewear comfort through advanced ergonomic design
                </p>
                <div className="mt-8">
                  <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                    Experience WearFit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}