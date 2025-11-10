'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Breadcrumb from "@/components/Breadcrumb";

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
  },
 
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
    <div className="min-h-screen bg-black">
      <style jsx global>{fadeInKeyframes}</style>

      

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
              src="/photochromatic/hero2.png"
              alt="Photochromatic Lenses"
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
            Photochromatic Lenses
          </h1>
          <p className="text-xl md:text-2xl poppins text-[#FFD700] leading-relaxed max-w-3xl mx-auto">
            Experience the adaptive eyewear with our advanced photochromic technology that automatically adjusts to your environment.
          </p>
        </div>
      </section>




           {/* Breadcrumb */}
          <div className="z-50 bg-black/80 backdrop-blur-sm py-3 border-b border-yellow-500/20">
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'Speciality Lenses', href: '/products/speciality-lenses' },
                { label: 'Photochromatic Lenses' }
              ]}
              className="max-w-9xl mx-auto px-6 sm:px-6 lg:px-10"
            />
          </div>


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
      
      {/* Features Card Section */}
      <section className="py-8 bg-black">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 h-[50vh] min-h-[500px]">
          <div className="bg-black rounded-xl overflow-hidden shadow-2xl h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left Side - Image */}
              <div className="relative h-full">
                <Image
                  src="/photochromatic/hero.png"
                  alt="Photochromic Lenses in Action"
                  fill
                  className="object-cover pl-4 pt-20 pb-4 pr-4"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:to-transparent"></div>
              </div>
              
              {/* Right Side - Content */}
              <div className="p-8 md:p-12 lg:p-16">
                <div className="max-w-lg mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-6">Cliff Photochromatic Lenses</h2>
                  <p className="text-lg text-[#FFD700] mb-8 leading-relaxed">Experience the perfect blend of style, comfort, and advanced technology with our premium photochromic lenses.</p>
                  
                  <div className="poppins text-[#FFD700] space-y-6">
                    {[
                      {
                        title: "Available in Cliff Zenn Single Vision Lenses",
                    
                      },
                      {
                        title: "Available in Cliff Progressive Lenses",
                       
                      },
                      {
                        title: "Available in Dynamix Profressive Lenses",
                        
                      },
                       {
                        title: "Available in Dynamix Profressive Lenses",
                        
                      },
                       {
                        title: "Available in Dynamix Profressive Lenses"
                        
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="bg-[#FFD700]/10 p-2 rounded-full mr-4 group-hover:bg-[#FFD700]/20 transition-colors">
                          <svg className="w-5 h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <div className="text-[#FFD700] poppins">
                          <h3 className="text-lg font-semibold text-[#FFD700] mb-1">{feature.title}</h3>
                     
                        </div>
                      </div>
                    ))}
                  </div>
                    
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

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

         <div className="text-center mb-16">
                    <h2 className="text-4xl montserrat text-[#FFD700] mb-4">Explore More Lense  Categories</h2>
                    
          </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 group/cards py-8">
          {/* Card 1 */}
          <Link 
           
             href="/products/speciality-lenses/photochrome-plus" 
            className="block h-[35vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-20"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/5.jpg"
                alt="Photochromic Technology"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
             
                <div className="absolute inset-0 flex items-center">
                <div className="h-full flex items-center pl-6">
                  <h3 className="text-2xl md:text-3xl montserrat text-[#FFD700] text-left">Photochromatic Plus</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link 
            href="/products/speciality-lenses/cliff-tinted-lenses" 
            className="block h-[35vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/6.jpg"
                alt="UV Protection"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex items-center">
                <div className="h-full flex items-center pl-6">
                  <h3 className="text-2xl md:text-3xl montserrat text-[#FFD700] text-left">Tinted Lenses</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link 
            href="/products/speciality-lenses/polarized-lenses" 
            className="block h-[35vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/7.jpg"
                alt="All-Day Comfort"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex items-center">
                <div className="h-full flex items-center pl-6">
                  <h3 className="text-2xl md:text-3xl montserrat text-[#FFD700] text-left">Polarized Lenses</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link 
            href="/products/speciality-lenses/blue-shield" 
            className="block h-[35vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/9.jpg"
                alt="Blue Shield"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex items-center">
                <div className="h-full flex items-center pl-6">
                  <h3 className="text-2xl md:text-3xl montserrat text-[#FFD700] text-left">Blue Shield</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

    </div>
  )
}
