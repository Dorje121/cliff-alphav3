'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const lensOptions = [
  {
    name: 'Photochromic Gray',
    leftImage: '/polarized/gray.png',
    rightImage: '/photochromatic/gray.png',
    features: ['Neutral color balance', 'Reduces brightness', 'Minimizes eye fatigue']
  },
  {
    name: 'Photochromic Gold',
    leftImage: '/polarized/gold.png',
    rightImage: '/photochromatic/golden.png',
    features: ['Enhances contrast', 'Ideal for sports', 'Reduces glare']
  }
]

export default function Polarized() {
  const [currentLens, setCurrentLens] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const lensImages = lensOptions.map(option => option.rightImage)
  const modalImage = '/photochromatic/modal.png'
  const [currentImage, setCurrentImage] = useState(lensImages[0])

  // GSAP ref for last image
  const zoomImageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (zoomImageRef.current) {
      gsap.fromTo(
        zoomImageRef.current,
        { 
          scale: 0.8,
          opacity: 0.9
        },
        {
          scale: 1.3,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: zoomImageRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 1.2,
            pin: false,
            markers: false,
            onUpdate: (self) => {
              // Add a subtle parallax effect
              if (zoomImageRef.current) {
                const progress = self.progress || 0;
                zoomImageRef.current.style.transform = `scale(${0.8 + progress * 0.5})`;
              }
            }
          }
        }
      );
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])

  const selectLens = (index: number) => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentLens(index)

    setTimeout(() => {
      setCurrentImage(lensImages[index])
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    }, 100)
  }

  const fadeInKeyframes = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 0.8; }
    }
    .animate-fadeIn {
      animation: fadeIn 3s ease-in-out forwards;
    }
  `;

  return (
    <div className="min-h-screen bg-black">
      <style jsx global>{fadeInKeyframes}</style>

      <div className="max-w-[94rem] w-full mx-auto pl-8 pt-24 absolute z-40">
        <Link
          href="/speciality-lenses"
          className="inline-flex items-center text-[#FFD700] hover:text-amber-300 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
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
              src="/polarized/polo.jpg"
              alt="Polarized Lenses"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 pt-70 text-center px-6 sm:px-8 w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl montserrat text-[#FFD700] mb-6">
            Polarized Lenses
          </h1>
          <p className="text-xl md:text-2xl poppins text-[#FFD700] leading-relaxed max-w-3xl mx-auto">
            Eliminate glare and enhance clarity with our premium polarized lenses. Perfect for driving, sports, and outdoor activities.
          </p>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-12 bg-black overflow-x-auto">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full min-w-[1200px] sm:min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                title: "Glare Elimination",
                description: "Block reflected glare from water, snow, roads, and other surfaces for comfortable vision",
                icon: "mdi:shield-sun"
              },
              {
                title: "Enhanced Contrast",
                description: "See colors more vividly and clearly with improved contrast and reduced eye strain",
                icon: "mdi:contrast"
              },
              {
                title: "UV Protection",
                description: "100% protection from harmful UVA and UVB rays for long-term eye health",
                icon: "mdi:weather-sunny"
              },
              {
                title: "Safer Driving",
                description: "Reduce glare from wet roads and other vehicles for safer driving conditions",
                icon: "mdi:car"
              },
              {
                title: "Better Outdoor Experience",
                description: "Perfect for fishing, skiing, golf, and other outdoor activities",
                icon: "mdi:fish"
              },
              {
                title: "Reduced Eye Fatigue",
                description: "Less squinting and strain means more comfortable all-day wear",
                icon: "mdi:eye-remove"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-[#FFD700]/10 to-transparent p-6 rounded-lg border border-[#FFD700]/20">
                <div className="flex justify-center mb-4">
                  <Icon icon={benefit.icon} className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-3 montserrat">{benefit.title}</h3>
                <p className="text-[#FFD700]/90 poppins">{benefit.description}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

    
       {/* Content area divider */}
      <div className="relative bg-yellow-300/10 py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-1 h-16 bg-yellow-400 mx-auto"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl leading-12 text-yellow-300 mb-6">
            Designed for everyday clarity, Cliff Polarized Lenses are crafted to reduce glare and enhance contrast perfect for bright days and reflective surfaces. Experience true color, sharper vision, and all-day comfort whether you’re driving, outdoors, or simply enjoying the view. Because every detail deserves to be seen clearly.
          </h2>
        </div>
      </div>

        {/* Lens Options Section */}
              <section className="py-16 bg-black">
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Side */}
                    <div className="pl-6 space-y-6 lg:col-span-5 sticky top-35 self-start">
                      <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg ">
                        <h3 className="text-2xl md:text-3xl montserrat text-[#FFD700] mb-2">Choose Your Lens Style</h3>
                        <p className="text-[#FFD700] poppins text-lg md:text-xl">Select a lens to see how it looks</p>
                      </div>
                      <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-1 py-0.5">
                        <div className="grid grid-cols-3 sm:grid-cols-3 pl-6 gap-6">
                          {lensOptions.map((lens, index) => (
                            <div
                              key={index}
                              className={`group relative bg-black/50 backdrop-blur-sm rounded-md p-1 border transition-all duration-200 cursor-pointer ${
                                currentLens === index 
                                  ? 'border-yellow-400 scale-[1.01] shadow-sm shadow-yellow-500/5' 
                                  : 'border-yellow-800/20 hover:border-yellow-500/40 hover:bg-black/60'
                              }`}
                              onClick={() => selectLens(index)}
                            >
                              <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                                <Image
                                  src={lens.leftImage}
                                  alt={`${lens.name} Photochromic Lenses`}
                                  fill
                                  className={`object-contain transition-transform duration-200 ${
                                    currentLens === index ? 'scale-105' : 'group-hover:scale-102'
                                  }`}
                                />
                              </div>
                              <div className="mt-1 text-center">
                                <h3 className={`font-medium text-[10px] xs:text-xs transition-colors line-clamp-2 leading-tight ${
                                  currentLens === index ? 'text-yellow-400' : 'text-yellow-300/90 group-hover:text-yellow-400'
                                }`}>
                                  {lens.name}
                                </h3>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
        
                    {/* Right Side - Large Lens Preview */}
                    <div className="lg:col-span-7 p-4 flex items-center justify-end relative">
                      <div className="relative w-[650px] h-[650px] ml-20">
                        <div className="absolute inset-0">
                          <Image
                            src={modalImage}
                            alt="Photochromic Lenses Base"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
        
                        <div className="absolute inset-0">
                          <div className="relative w-full h-full">
                            <div
                              className={`absolute inset-0 transition-opacity duration-1000 ${
                                isTransitioning ? 'opacity-0' : 'opacity-80'
                              }`}
                            >
                              <Image
                                src={currentImage}
                                alt="Photochromic Lenses Overlay"
                                fill
                                className="object-contain"
                                priority
                              />
                            </div>
        
                            {isTransitioning && (
                              <div className="absolute inset-0 animate-fadeIn">
                                <Image
                                  src={lensImages[currentLens]}
                                  alt="Photochromic Lenses Overlay"
                                  fill
                                  className="object-contain opacity-80"
                                  priority
                                  onLoadingComplete={() => {
                                    setCurrentImage(lensImages[currentLens])
                                    setTimeout(() => setIsTransitioning(false), 500)
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>    
                </div>
              </section>


      <section className="bg-black py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 group/cards">
          {/* Card 1 */}
          <Link 
            href="/speciality-lenses/photochrome-plus" 
            className="block h-[50vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-20"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/5.jpg"
                alt="Photochromic Technology"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="w-full bg-gradient-to-t from-black/100 via-black/80 to-transparent pt-36 pb-4 px-4 text-center">
                  <h3 className="text-3xl montserrat text-[#FFD700]">Photochromatic Plus</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link 
            href="/speciality-lenses/cliff-tinted-lenses" 
            className="block h-[50vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/6.jpg"
                alt="UV Protection"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="w-full bg-gradient-to-t from-black/100 via-black/50 to-transparent h-1/2 pt-34 pb-4 px-4 text-center">
                  <h3 className="text-3xl montserrat text-[#FFD700]">Tinted Lenses</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link 
            href="/speciality-lenses/photochrome" 
            className="block h-[50vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/7.jpg"
                alt="All-Day Comfort"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="w-full bg-gradient-to-t from-black/100 via-black/50 to-transparent h-1/2 pt-34 pb-4 px-4 text-center">
                  <h3 className="text-3xl montserrat text-[#FFD700]">Photochromatic</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link 
            href="/speciality-lenses/blue-shield" 
            className="block h-[50vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/9.jpg"
                alt="Blue Shield"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="w-full bg-gradient-to-t from-black/100 via-black/50 to-transparent h-1/2 pt-32 pb-4 px-4 text-center">
                  <h3 className="text-3xl montserrat text-[#FFD700]">Blue Shield</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}