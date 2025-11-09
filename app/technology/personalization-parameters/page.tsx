"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Eye, Zap, Shield, Clock, Users, Activity, Heart, Target, Ruler, Layers, Infinity, Cpu, Scan, User, Settings, GitBranch, BarChart3, Palette, Gauge, EyeOff } from 'lucide-react'

export default function PersonalizationParametersPage() {
  const features = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Individual Profile Mapping",
      description: "Comprehensive analysis of your unique visual behavior and lifestyle patterns"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Parameter Optimization",
      description: "200+ adjustable parameters tailored to your specific vision requirements"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Dynamic Adaptation",
      description: "Real-time adjustment based on your changing visual needs and environments"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Continuous monitoring and optimization of your visual performance"
    }
  ];

  const parameterCategories = [
    {
      category: "Visual Behavior",
      parameters: [
        "Reading distance preferences",
        "Screen viewing habits",
        "Head movement patterns",
        "Eye dominance mapping",
        "Peripheral vision usage"
      ]
    },
    {
      category: "Lifestyle Factors",
      parameters: [
        "Digital device usage time",
        "Outdoor activity levels",
        "Work environment lighting",
        "Hobbies and sports",
        "Driving frequency"
      ]
    },
    {
      category: "Physical Attributes",
      parameters: [
        "Pupillary distance variations",
        "Frame fitting parameters",
        "Vertex distance optimization",
        "Pantoscopic tilt adjustment",
        "Face form angle calibration"
      ]
    }
  ];

  const customizationBenefits = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Tailored Vision Experience",
      description: "Lenses crafted specifically for your unique visual patterns and preferences"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Precision Optimization",
      description: "Micro-adjustments that deliver maximum visual comfort and clarity"
    },
    {
      icon: <EyeOff className="w-8 h-8" />,
      title: "Reduced Adaptation Time",
      description: "Faster brain acceptance with personalized optical design"
    }
  ];

  const technicalAdvantages = [
    {
      title: "Multi-Dimensional Profiling",
      description: "Comprehensive assessment of visual, behavioral, and environmental factors"
    },
    {
      title: "Adaptive Algorithm Technology",
      description: "Smart algorithms that learn and adapt to your visual preferences over time"
    },
    {
      title: "Precision Manufacturing",
      description: "Advanced digital surfacing with micron-level accuracy for each parameter"
    }
  ];

  const personalizationProcess = [
    {
      step: "01",
      title: "Comprehensive Assessment",
      description: "Detailed analysis of your visual behavior, lifestyle, and physical attributes"
    },
    {
      step: "02",
      title: "Parameter Calibration",
      description: "Fine-tuning of 200+ individual parameters based on your unique profile"
    },
    {
      step: "03",
      title: "Digital Simulation",
      description: "Virtual testing and optimization of your personalized lens design"
    },
    {
      step: "04",
      title: "Precision Manufacturing",
      description: "Advanced digital surfacing with your custom parameters embedded"
    }
  ];

  const lifestyleApplications = [
    {
      scenario: "Professional Customization",
      benefit: "Optimized for your specific work environment, screen usage, and task requirements"
    },
    {
      scenario: "Active Lifestyle Tailoring",
      benefit: "Personalized for your sports, hobbies, and daily activity patterns"
    },
    {
      scenario: "Environmental Adaptation",
      benefit: "Customized performance for your specific lighting conditions and visual environments"
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
            alt="Personalization Parameters Technology"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto pl-0 pr-8 py-8 font-poppins">
            <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight text-center">
              Personalization Parameters
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              Advanced lens customization with 200+ adjustable parameters for your unique visual identity
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
            Personalization Parameters™ technology revolutionizes vision correction by analyzing 200+ individual factors 
            to create lenses that are as unique as your fingerprint, delivering unparalleled visual comfort and performance.
          </h2>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Advanced Personalization Technology</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Comprehensive customization for your unique visual identity
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

      {/* Parameter Categories */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-900/10">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">200+ Customization Parameters</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Comprehensive analysis across three key dimensions of personalization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {parameterCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black/50 border border-yellow-500/20 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">{category.category}</h3>
                <ul className="space-y-3">
                  {category.parameters.map((parameter, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-yellow-200">{parameter}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">The Personalization Advantage</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Experience vision correction tailored specifically to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {customizationBenefits.map((feature, index) => (
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
              <h2 className="text-3xl font-bold text-[#FFD700]">Precision Personalization Technology</h2>
              <div className="space-y-6 text-[#FFD700]">
                <p className="text-xl">
                  Personalization Parameters technology represents the pinnacle of customized vision correction, 
                  analyzing over 200 individual factors to create lenses that are uniquely tailored to your visual identity.
                </p>
                <p className="text-xl">
                  Unlike standard lenses that use average measurements, our advanced profiling system captures 
                  your unique visual behavior, lifestyle patterns, and physical attributes to deliver unprecedented 
                  visual comfort and performance.
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
                alt="Personalization Parameters Technology"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">The Personalization Journey</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              A comprehensive four-step process to create your perfectly customized lenses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalizationProcess.map((step, index) => (
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

      {/* Lifestyle Applications */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Tailored for Your Life</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Comprehensive customization for every aspect of your daily routine
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

      {/* Full width image with overlay */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="w-full h-[500px] relative rounded-xl overflow-hidden">
            <Image
               src="/technology/lense.png"
              alt="Personalization Parameters Technology"
              fill
              className="object-contain"
              priority
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
              <div className="h-full flex flex-col justify-center pl-12 md:pl-24 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Personalization Parameters
                </h2>
                <p className="text-yellow-200 text-lg md:text-xl">
                  200+ parameters for vision as unique as you are
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}