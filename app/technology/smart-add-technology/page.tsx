"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Zap, Users, Activity, Heart, Smartphone, Monitor, Book } from 'lucide-react'

export default function SmartAddTechnologyPage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Dynamic Power Adjustment",
      description: "Intelligently adjusts lens power based on viewing distance for optimal clarity"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Digital Optimization",
      description: "Specifically designed for computer work and digital device usage"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Smooth Transitions",
      description: "Seamless shift between near and intermediate vision without visible lines"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Reduced Eye Strain",
      description: "Minimizes visual fatigue during extended screen time and reading"
    }
  ];

  const technologySteps = [
    {
      step: "01",
      title: "Vision Analysis",
      description: "Comprehensive assessment of your visual behavior and digital lifestyle needs"
    },
    {
      step: "02",
      title: "Smart Power Mapping",
      description: "Intelligent algorithms create optimized power zones for near and intermediate vision"
    },
    {
      step: "03",
      title: "Seamless Integration",
      description: "Smooth blending of vision zones for natural, effortless focus changes"
    },
    {
      step: "04",
      title: "Digital Lifestyle Calibration",
      description: "Fine-tuned for modern device usage patterns and screen distances"
    }
  ];

  const resolutionBenefits = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Device Comfort",
      description: "Perfect clarity for smartphones, tablets, and computer screens"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Reading Enhancement",
      description: "Crystal-clear vision for books, documents, and close-up work"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Interaction",
      description: "Natural vision for conversations and social settings"
    }
  ];

  const technicalAdvantages = [
    {
      title: "Intelligent Power Distribution",
      description: "Smart algorithms optimize lens power based on your specific visual tasks"
    },
    {
      title: "Adaptive Vision Zones",
      description: "Dynamic zones that adjust to your natural viewing distances and habits"
    },
    {
      title: "Digital Lifestyle Focus",
      description: "Specifically engineered for modern multi-screen environments"
    }
  ];

  const lifestyleApplications = [
    {
      scenario: "Office & Computer Work",
      benefit: "Seamless transition between multiple screens, documents, and keyboard"
    },
    {
      scenario: "Digital Reading",
      benefit: "Comfortable viewing of tablets, e-readers, and smartphones without strain"
    },
    {
      scenario: "Creative & Technical Work",
      benefit: "Clear vision for detailed tasks, instruments, and close-up precision work"
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
            src="/nox/continumn.jpg"
            alt="Smart Add Technology"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto pl-0 pr-8 py-8 font-poppins">
            <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight text-center">
              Smart Add Technology
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              Intelligent vision enhancement for seamless near and intermediate distance clarity
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
            Smart Add Technology™ revolutionizes intermediate vision with intelligent power adaptation, 
            delivering crystal-clear focus for digital devices and close-up tasks without compromising natural vision.
          </h2>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Smart Vision Enhancement</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Intelligent technology designed for modern digital lifestyles
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

      {/* Resolution Benefits */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-900/10">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Perfect for Digital Life</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Optimized vision for the devices and activities that define modern living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {resolutionBenefits.map((feature, index) => (
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
              <h2 className="text-3xl font-bold text-[#FFD700]">Intelligent Vision Enhancement</h2>
              <div className="space-y-6 text-[#FFD700]">
                <p className="text-xl">
                  Smart Add Technology represents a breakthrough in optical design, specifically engineered 
                  for today's digital world where we constantly shift between devices and viewing distances.
                </p>
                <p className="text-xl">
                  Unlike traditional lenses with fixed power zones, Smart Add dynamically adapts to your 
                  visual needs, providing optimal clarity for computer work, reading, and intermediate tasks 
                  without the compromises of conventional progressive lenses.
                </p>
              </div>
              
              {/* Technical Advantages */}
              <div className="space-y-4 mt-8">
                <h3 className="text-2xl font-semibold text-yellow-300">Technical Innovation</h3>
                {technicalAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-yellow-300 font-semibold">{advantage.title}</h4>
                      <p className="text-yellow-200">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="md:w-1/2 h-[500px] relative rounded-lg overflow-hidden">
              <Image
                src="/technology/lense.png"
                alt="Smart Add Technology"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Applications */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Designed for Modern Living</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Smart vision solutions for today's multi-screen, multi-task lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lifestyleApplications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-yellow-500/5 to-transparent border border-yellow-500/20 rounded-xl p-6 text-center"
              >
                <h3 className="text-2xl font-semibold text-yellow-300 mb-4">{application.scenario}</h3>
                <p className="text-yellow-200 text-lg">{application.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">How Smart Add Technology Works</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              A sophisticated approach to personalized vision enhancement
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

      {/* Full width image with overlay */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="w-full h-[500px] relative rounded-xl overflow-hidden">
            <Image
               src="/technology/lense.png"
              alt="Smart Add Technology"
              fill
              className="object-contain"
              priority
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
              <div className="h-full flex flex-col justify-center pl-12 md:pl-24 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Smart Add Technology
                </h2>
                <p className="text-yellow-200 text-lg md:text-xl">
                  Intelligent vision enhancement for the digital age
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

    </main>
  );
}