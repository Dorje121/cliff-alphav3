"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Eye, Zap, Shield, Clock, Sun, Moon } from 'lucide-react'

export default function PsicoptixTechnologyPage() {
  const technologySteps = [
    {
      step: "01",
      title: "Neural Optimization",
      description: "Our lenses are designed using visual neuroscience principles to optimize how your brain processes visual information"
    },
    {
      step: "02",
      title: "Light Management",
      description: "Advanced filtering technology manages light intensity and spectrum for optimal visual clarity"
    },
    {
      step: "03",
      title: "Contrast Enhancement",
      description: "Specialized coatings enhance contrast and reduce glare in challenging lighting conditions"
    },
    {
      step: "04",
      title: "Adaptive Focus",
      description: "Dynamic lens technology that adapts to your visual needs throughout the day"
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
        {/* Animated Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/psycoptix/image.png"
            alt="Psicoptix Technology"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto pl-0 pr-8 py-8 font-poppins">
            <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight text-center">
              Psicoptix<sup>™</sup> Technology
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              Advanced lens technology for crystal-clear vision and unparalleled visual comfort in any lighting condition
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
            Psicoptix Technology™ Innovation that merges advanced optics and visual neuroscience to design lenses that not only
            correct vision but also optimize how the brain interprets images, providing a more precise, natural, and adaptive visual
            experience.
          </h2>
        </div>
      </div>

    
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Optimized for Every Environment</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              Exceptional performance across all lighting conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Sun className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">Bright Daylight</h3>
              <p className="text-yellow-200">
                Advanced glare reduction and UV protection for optimal comfort in direct sunlight
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Eye className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">Indoor Lighting</h3>
              <p className="text-yellow-200">
                Perfect balance of contrast and clarity for artificial lighting environments
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Moon className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">Low Light</h3>
              <p className="text-yellow-200">
                Enhanced light transmission and reduced halo effects for night vision
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
              src="/psycoptix/image3.png"
              alt="Psicoptix Technology"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
              <div className="h-full flex flex-col justify-center pl-12 md:pl-24 max-w-2xl">
                <span className="text-yellow-400 text-sm uppercase tracking-widest mb-2">Cliff Eyewear™</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Psicoptix<sup>™</sup> Technology
                </h2>
                <p className="text-yellow-200 text-lg md:text-xl">
                  Revolutionizing vision through advanced optical innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="space-y-6 text-[#FFD700]">
                <p className="text-xl">
                  Experience the future of vision with our cutting-edge lens technology that adapts to your visual needs in real-time, providing crystal clear vision in any lighting condition.
                </p>
                <p className="text-xl">
                  Our advanced optical technology delivers enhanced contrast and clarity, ensuring every detail is sharp and defined. The innovative design reduces eye strain and fatigue, making it perfect for extended wear. With superior light management, you&apos;ll enjoy optimal vision in any environment.
                </p>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="md:w-1/2 h-[400px] relative rounded-lg overflow-hidden">
              <Image
                src="/psycoptix/image2.png"
                alt="Advanced Lens Technology"
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
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">How Psicoptix Works</h2>
            <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
              A sophisticated four-step process that revolutionizes how you see the world
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

    
    
     
    </main>
  );
}