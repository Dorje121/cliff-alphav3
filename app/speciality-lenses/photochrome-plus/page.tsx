'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const lensOptions = [
  {
    name: 'Photochromic Gray',
    leftImage: '/polarized/gray.png',
    rightImage: '/photochromatic/gray.png',
    features: ['Neutral color balance', 'Reduces brightness', 'Minimizes eye fatigue']
  },
  {
    name: 'Photochromic Brown',
    leftImage: '/polarized/brown.png',
    rightImage: '/photochromatic/brown.png',
    features: ['Enhances contrast', 'Ideal for sports', 'Reduces glare']
  },
  {
    name: 'Photochromic Blue',
    leftImage: '/polarized/blue.png',
    rightImage: '/photochromatic/blue.png',
    features: ['Reduces digital eye strain', 'Modern look', 'Enhances screen clarity']
  },
  {
    name: 'Photochromic Pink',
    leftImage: '/polarized/rose.png',
    rightImage: '/photochromatic/pink.png',
    features: ['Soothes the eyes', 'Enhances visual comfort', 'Stylish appearance']
  },
  {
    name: 'Photochromic Green',
    leftImage: '/polarized/green.png',
    rightImage: '/photochromatic/pink.png',
    features: ['Natural color perception', 'Reduces eye fatigue', 'Ideal for outdoor activities']
  },
  {
    name: 'Photochromic Gold',
    leftImage: '/polarized/gold.png',
    rightImage: '/photochromatic/brown.png',
    features: ['Mirror finish', 'Reduces glare', 'Stylish and modern look']
  }
]

export default function PhotochromeClient() {
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
  `

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <style jsx global>{fadeInKeyframes}</style>

      <div className="max-w-[94rem] w-full mx-auto pl-8 pt-24 absolute z-40">
        <Link
          href="/products"
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
              src="/photochromatic/hero.png"
              alt="Photochromatic Lenses"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 pt-70 text-center px-6 sm:px-8 w-full max-w-5xl">
          <h1 className="text-5xl md:text-6xl montserrat text-[#FFD700] mb-6">
            Photochromatic Plus Lenses
          </h1>
          <p className="text-xl md:text-2xl poppins text-[#FFD700] leading-relaxed max-w-3xl mx-auto">
            Experience the adaptive eyewear with our advanced photochromic technology that automatically adjusts to your environment.
          </p>
        </div>
      </section>

      {/* Features Icons Section */}
      <div className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-6 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img
                    className="w-16 h-16 object-contain object-center"
                    src="/svgs/uvprotection.svg"
                    alt="cliff uvprotection"
                  />
                </div>
                <h4 className="text-lg font-bold text-yellow-400 mb-2">UV Protection</h4>
                <p className="text-yellow-300/80 text-sm">Blocks harmful UV rays from the sun</p>
              </div>
            </div>

            <div className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-6 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img
                    className="w-16 h-16 object-contain object-center"
                    src="/svgs/bluelight.svg"
                    alt="cliff bluelight"
                  />
                </div>
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Reduced Glare</h4>
                <p className="text-yellow-300/80 text-sm">Minimizes glare for comfortable vision</p>
              </div>
            </div>

            <div className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-6 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img
                    className="w-16 h-16 object-contain object-center"
                    src="/style.svg"
                    alt="style customize cliff"
                  />
                </div>
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Style Options</h4>
                <p className="text-yellow-300/80 text-sm">Multiple colors and intensity levels</p>
              </div>
            </div>

            <div className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-6 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img
                    className="w-16 h-16 object-contain object-center"
                    src="/svgs/antireflective.svg"
                    alt="cliff antireflective"
                  />
                </div>
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Driving Comfort</h4>
                <p className="text-yellow-300/80 text-sm">Enhanced visibility while driving</p>
              </div>
            </div>
          </div>
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
            href="/speciality-lenses/photochrome" 
            className="block h-[50vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
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
                  <h3 className="text-3xl montserrat text-[#FFD700]">Photochromatic</h3>
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
                alt="Tinted Lenses"
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
            href="/speciality-lenses/polarized-lenses" 
            className="block h-[50vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/polarized/polacard.png"
                alt="Polarized Lenses"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="w-full bg-gradient-to-t from-black/100 via-black/50 to-transparent h-1/2 pt-34 pb-4 px-4 text-center">
                  <h3 className="text-3xl montserrat text-[#FFD700]">Polarized</h3>
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
                alt="Blue Shield Lenses"
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
