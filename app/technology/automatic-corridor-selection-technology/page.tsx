"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Eye, Zap, Shield, Clock, Users, Activity, Heart, Target, Ruler, Layers, Infinity, Cpu, Scan, Navigation, Crosshair, Map, GitMerge, Smartphone, Monitor, Book, Car, Maximize, Minimize, Route, Box } from 'lucide-react'

export default function AutomaticCorridorSelectionPage() {
  const features = [
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Automatic Corridor Mapping",
      description: "Intelligent algorithms automatically determine optimal vision corridor based on your prescription and frame choice"
    },
    {
      icon: <Crosshair className="w-8 h-8" />,
      title: "Precision Inset Optimization",
      description: "Advanced inset calculation for maximum usable vision area and minimal distortion"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Dynamic Zone Allocation",
      description: "Smart distribution of near, intermediate, and distance zones based on your visual behavior"
    },
    {
      icon: <GitMerge className="w-8 h-8" />,
      title: "Seamless Transition Paths",
      description: "Optimized transition corridors that match your natural eye movement patterns"
    }
  ];

  const optimizationParameters = [
    {
      category: "Corridor Optimization",
      parameters: [
        "Automatic corridor width calculation",
        "Prescription-based path optimization",
        "Frame shape adaptation",
        "Pupillary distance alignment",
        "Vertex distance compensation"
      ]
    },
    {
      category: "Inset Precision",
      parameters: [
        "Near zone inset optimization",
        "Peripheral distortion minimization",
        "Reading area positioning",
        "Intermediate zone balancing",
        "Distance zone preservation"
      ]
    },
    {
      category: "Zone Allocation",
      parameters: [
        "Dynamic near zone sizing",
        "Intermediate zone expansion",
        "Distance zone optimization",
        "Peripheral clarity enhancement",
        "Transition smoothness calibration"
      ]
    }
  ];

  const technologyBenefits = [
    {
      icon: <Maximize className="w-8 h-8" />,
      title: "Maximum Usable Area",
      description: "Optimized corridor and inset provide the largest possible clear vision zones"
    },
    {
      icon: <Minimize className="w-8 h-8" />,
      title: "Minimal Distortion",
      description: "Advanced algorithms eliminate peripheral distortion and swim effect"
    },
    {
      icon: <Route className="w-8 h-8" />,
      title: "Natural Eye Path",
      description: "Corridors designed to match your natural eye movement patterns"
    }
  ];

  const technicalAdvantages = [
    {
      title: "AI-Powered Corridor Calculation",
      description: "Machine learning algorithms analyze thousands of successful fittings to determine optimal corridor paths"
    },
    {
      title: "Real-time Inset Adjustment",
      description: "Dynamic inset optimization based on frame dimensions and wearer's visual requirements"
    },
    {
      title: "Multi-Parameter Synchronization",
      description: "Simultaneous optimization of corridor, inset, and zone allocation for perfect harmony"
    }
  ];

  const optimizationProcess = [
    {
      step: "01",
      title: "Frame & Prescription Analysis",
      description: "Comprehensive assessment of frame dimensions, prescription complexity, and visual requirements"
    },
    {
      step: "02",
      title: "Corridor Path Calculation",
      description: "AI algorithms determine optimal vision corridor based on multiple parameters and usage patterns"
    },
    {
      step: "03",
      title: "Inset Optimization",
      description: "Precision calculation of near zone inset for maximum comfort and minimal head movement"
    },
    {
      step: "04",
      title: "Zone Balancing",
      description: "Intelligent distribution of vision zones to match your specific lifestyle and visual tasks"
    }
  ];

  const applicationScenarios = [
    {
      scenario: "Complex Prescriptions",
      benefit: "Automatic optimization for high prescriptions, astigmatism, and multifocal requirements"
    },
    {
      scenario: "Modern Frame Styles",
      benefit: "Perfect adaptation to wide, narrow, round, and geometric frame shapes"
    },
    {
      scenario: "Active Lifestyles",
      benefit: "Optimized for dynamic visual needs and rapid focus changes"
    }
  ];

  const comparisonData = [
    {
      type: "Traditional Method",
      features: [
        "Fixed corridor templates",
        "Standard inset values",
        "Limited adaptation to frame",
        "Manual zone allocation",
        "One-size-fits-all approach"
      ],
      performance: "Variable results, often requiring adaptation period"
    },
    {
      type: "Automatic Optimization",
      features: [
        "Dynamic corridor calculation",
        "Custom inset optimization",
        "Frame-specific adaptation",
        "AI-powered zone allocation",
        "Completely personalized"
      ],
      performance: "Immediate comfort, maximum usable vision area"
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
            src="/bluesafe/lense.jpg"
            alt="Automatic Corridor Selection & Inset Optimization"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto pl-0 pr-8 py-8 font-poppins">
            <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight text-center">
              Automatic Corridor Selection & Inset Optimization
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              AI-powered vision path optimization for maximum clarity and comfort in every frame
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
            Automatic Corridor Selection & Inset Optimization™ uses advanced AI algorithms to create 
            perfectly personalized vision paths, eliminating compromise and delivering unprecedented 
            visual performance in any frame style.
          </h2>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Intelligent Vision Path Optimization</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Advanced algorithms that transform how progressive lenses are designed and fitted
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

      {/* Optimization Parameters */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-900/10">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Precision Optimization Parameters</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Comprehensive analysis across three critical optimization dimensions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {optimizationParameters.map((category, index) => (
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

      {/* Technology Comparison */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Traditional vs. Automatic Optimization</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Experience the revolutionary difference in vision path design
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {comparisonData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${index === 0 ? 'from-gray-800/30 to-transparent' : 'from-yellow-500/10 to-transparent'} border ${index === 0 ? 'border-gray-600/30' : 'border-yellow-500/30'} rounded-xl p-8`}
              >
                <h3 className={`text-2xl font-bold mb-6 text-center ${index === 0 ? 'text-gray-400' : 'text-yellow-300'}`}>
                  {item.type}
                </h3>
                <ul className="space-y-3 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${index === 0 ? 'bg-gray-500' : 'bg-yellow-400'}`}></div>
                      <span className={index === 0 ? 'text-gray-300' : 'text-yellow-200'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className={`text-center p-4 rounded-lg ${index === 0 ? 'bg-gray-700/30' : 'bg-yellow-500/10'}`}>
                  <p className={index === 0 ? 'text-gray-400' : 'text-yellow-300'}>
                    <strong>Performance:</strong> {item.performance}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">The Optimization Advantage</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Experience vision path engineering at its finest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {technologyBenefits.map((feature, index) => (
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
              <h2 className="text-3xl font-bold text-[#FFD700]">AI-Powered Vision Path Engineering</h2>
              <div className="space-y-6 text-[#FFD700]">
                <p className="text-xl">
                  Automatic Corridor Selection & Inset Optimization represents a quantum leap in progressive lens design, 
                  using artificial intelligence to analyze thousands of successful fittings and create perfectly optimized 
                  vision paths for every individual.
                </p>
                <p className="text-xl">
                  Our advanced algorithms consider frame dimensions, prescription complexity, visual behavior patterns, 
                  and lifestyle requirements to deliver corridors and insets that provide maximum usable vision area 
                  with minimal distortion.
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
                src="/bluesafe/blue.png"
                alt="Automatic Corridor Selection & Inset Optimization"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">The Optimization Process</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Four-step intelligent optimization for perfect vision paths
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optimizationProcess.map((step, index) => (
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

      {/* Application Scenarios */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Perfect for Every Scenario</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Intelligent optimization adapted to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicationScenarios.map((application, index) => (
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
               src="/bluesafe/photoz.jpg"
              alt="Automatic Corridor Selection & Inset Optimization"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
              <div className="h-full flex flex-col justify-center pl-12 md:pl-24 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Automatic Optimization
                </h2>
                <p className="text-yellow-200 text-lg md:text-xl">
                  AI-powered vision paths for unprecedented clarity and comfort
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}