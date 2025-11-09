"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Eye, Zap, Shield, Clock, Sun, Moon, Users, Activity, Heart, Target, Ruler, Layers, Infinity, Cpu, Scan } from 'lucide-react'

export default function ContinuumDesignTechnologyPage() {
  const features = [
    {
      icon: <Infinity className="w-8 h-8" />,
      title: "Seamless Transition",
      description: "8K precision optics provide uninterrupted vision from near to far without visible lines"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Digital Precision",
      description: "Advanced digital surfacing with 8K resolution for crystal-clear vision at every distance"
    },
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Wide Viewing Zones",
      description: "Expanded clear vision areas that mimic natural eye movement and head positioning"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Adaptation",
      description: "Quick neural adaptation with smooth, natural transitions between vision zones"
    }
  ];

  const technologySteps = [
    {
      step: "01",
      title: "8K Digital Mapping",
      description: "Ultra-high resolution mapping of your visual needs and prescription requirements"
    },
    {
      step: "02",
      title: "Seamless Zone Integration",
      description: "Advanced algorithms create invisible transitions between near, intermediate, and far vision"
    },
    {
      step: "03",
      title: "Peripheral Optimization",
      description: "Enhanced peripheral vision with reduced distortion and wider clear zones"
    },
    {
      step: "04",
      title: "Neural Calibration",
      description: "Technology designed to work with your brain's natural visual processing"
    }
  ];

  const resolutionBenefits = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Crystal Clear Vision",
      description: "8K precision ensures razor-sharp clarity at every viewing distance"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Natural Movement",
      description: "Smooth transitions that feel completely natural, like perfect vision"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Zero Eye Strain",
      description: "Eliminates the adaptation period and reduces visual fatigue"
    }
  ];

  const technicalAdvantages = [
    {
      title: "8K Digital Surfacing",
      description: "Ultra-high precision manufacturing with resolution equivalent to 8K display technology"
    },
    {
      title: "Aspheric Design",
      description: "Complex curved surfaces that eliminate distortion and provide wider viewing angles"
    },
    {
      title: "Intelligent Zone Mapping",
      description: "Smart algorithms that optimize lens zones based on your specific visual behavior"
    }
  ];

  const lifestyleApplications = [
    {
      scenario: "Digital Workspace",
      benefit: "Perfect for computer work with seamless transition between screen, keyboard, and surroundings"
    },
    {
      scenario: "Active Lifestyle",
      benefit: "Maintain clear vision while moving between different distances and activities"
    },
    {
      scenario: "Social Settings",
      benefit: "Natural eye contact and effortless focus shifts during conversations"
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
            alt="Continuum Design Technology"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto pl-0 pr-8 py-8 font-poppins">
            <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight text-center">
              CDT<sup>™</sup>(Continuum Design Technology) 8K Definition
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              8K resolution lens technology for seamless, uninterrupted vision across all distances
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
            Continuum Design Technology™ with 8K precision represents the ultimate evolution in progressive lenses, 
            delivering seamless visual transitions that feel as natural as perfect unaided vision.
          </h2>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">8K Precision Features</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Experience the next generation of seamless vision with ultra-high resolution optics
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
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">The 8K Difference</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Ultra-high precision optics for unparalleled visual clarity
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
              <h2 className="text-3xl font-bold text-[#FFD700]">The Science of Seamless Vision</h2>
              <div className="space-y-6 text-[#FFD700]">
                <p className="text-xl">
                  Continuum Design Technology with 8K precision represents a quantum leap in progressive lens design, 
                  using ultra-high resolution digital mapping to create completely seamless transitions between all vision zones.
                </p>
                <p className="text-xl">
                  Our proprietary 8K surfacing technology analyzes millions of data points to design lenses that work 
                  in perfect harmony with your natural eye movements, eliminating the traditional compromises of progressive lenses.
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
                alt="Continuum Design Technology"
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
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Perfect for Every Scenario</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Seamless vision adaptation for all aspects of modern life
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
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">How Continuum Design Works</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              A sophisticated four-step process that revolutionizes progressive vision
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
              alt="Continuum Design Technology"
              fill
              className="object-contain"
              priority
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
              <div className="h-full flex flex-col justify-center pl-12 md:pl-24 max-w-2xl">
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Continuum Design<sup>™</sup> Technology
                </h2>
                <p className="text-yellow-200 text-lg md:text-xl">
                  Revolutionizing progressive vision with 8K seamless precision
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}