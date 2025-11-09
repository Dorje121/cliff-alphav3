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
    name: 'Blue Shield Clear',
    leftImage: '/bluesafe/blue.png',
    rightImage: '/bluesafe/blue1.png',
    features: ['Blocks harmful blue light', 'Maintains natural color perception', 'Reduces digital eye strain']
  },
  {
    name: 'Blue Shield UV',
    leftImage: '/bluesafecoatings/blue.png',
    rightImage: '/coatings/blue.png',
    features: ['Enhanced blue light filtration', 'Warm color tint', 'Ideal for screen-intensive work']
  },
  {
    name: 'Blue Shield Premium',
    leftImage: '/homeimage/blue-safe.png',
    rightImage: '/homeimage/blue-safe2.png',
    features: ['Maximum blue light protection', 'Anti-reflective coating', 'UV400 protection']
  }
]

export default function BlueShield() {
  const [currentLens, setCurrentLens] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const lensImages = lensOptions.map(option => option.rightImage)
  const modalImage = '/newimage/bluesafeuv.avif'
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
              src="/cliffcoating/Blue-Safe.jpg"
              alt="Blue Shield Lenses"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>

        <div className="relative z-10 pt-70 text-center px-6 sm:px-8 w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl montserrat text-[#FFD700] mb-6">
            Blue Shield Lenses
          </h1>
          <p className="text-xl md:text-2xl poppins text-[#FFD700] leading-relaxed max-w-3xl mx-auto">
            Advanced blue light protection for the digital age. Shield your eyes from harmful blue light while maintaining crystal-clear vision.
          </p>
        </div>
      </section>

      {/* Enhanced Technology Overview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl montserrat text-[#FFD700] mb-6">
              Revolutionary Blue Light Technology
            </h2>
            <p className="text-xl text-[#FFD700]/80 max-w-4xl mx-auto">
              Blue Shield lenses incorporate cutting-edge nanotechnology to selectively filter harmful blue-violet light while allowing beneficial blue-turquoise light to pass through.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl montserrat text-[#FFD700]">How Blue Shield Works</h3>
              <p className="text-lg text-[#FFD700]/80 leading-relaxed">
                Our proprietary coating technology uses microscopic filters that target the specific wavelength range of 415-455nm - the most harmful portion of blue light emitted by digital screens and LED lighting.
              </p>
              <div className="space-y-4">
                {[
                  "Selective filtration maintains natural color perception",
                  "Multi-layer coating for maximum durability",
                  "Hydrophobic and oleophobic properties resist smudges",
                  "Compatible with all lens materials including high-index"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#FFD700]" />
                    <span className="text-[#FFD700]/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/nox/blue.png"
                alt="Blue Shield Technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl montserrat text-[#FFD700] mb-6">
              Comprehensive Eye Protection
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Digital Protection",
                description: "Essential for daily screen use including computers, phones, and tablets. Blocks up to 40% of harmful blue light from digital devices.",
                icon: "mdi:laptop",
                stats: "40% Reduction"
              },
              {
                title: "Sleep Quality",
                description: "Reduces blue light exposure in evening for better sleep patterns. Helps maintain natural melatonin production for restful sleep.",
                icon: "mdi:sleep",
                stats: "Better Sleep"
              },
              {
                title: "Eye Comfort",
                description: "Minimizes dry eyes, headaches, and blurred vision from screen time. Reduces eye strain during prolonged computer use.",
                icon: "mdi:eye-outline",
                stats: "Reduced Strain"
              },
              {
                title: "Long-term Health",
                description: "Protects against potential retinal damage from prolonged blue light exposure. Helps prevent digital eye fatigue syndrome.",
                icon: "mdi:shield-check",
                stats: "Retinal Protection"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-black/50 rounded-xl border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all group">
                <div className="flex justify-center mb-4">
                  <Icon icon={benefit.icon} className="w-12 h-12 text-[#FFD700] group-hover:scale-110 transition-transform" />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-[#FFD700]/60 font-semibold">{benefit.stats}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#FFD700] mb-3">{benefit.title}</h3>
                <p className="text-[#FFD700]/80 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl montserrat text-[#FFD700] mb-6">
              Technical Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-black/50 p-6 rounded-2xl border border-[#FFD700]/10">
                <h3 className="text-2xl montserrat text-[#FFD700] mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  {[
                    { spec: "Blue Light Filtration", value: "Up to 40%", detail: "Harmful blue-violet light" },
                    { spec: "UV Protection", value: "UV400", detail: "100% UVA/UVB protection" },
                    { spec: "Light Transmission", value: ">98%", detail: "Visible light spectrum" },
                    { spec: "Coating Hardness", value: "8H", detail: "Superior scratch resistance" },
                    { spec: "Water Contact Angle", value: "115°", detail: "Excellent water repellency" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-[#FFD700]/10">
                      <div>
                        <div className="text-[#FFD700] font-semibold">{item.spec}</div>
                        <div className="text-[#FFD700]/60 text-sm">{item.detail}</div>
                      </div>
                      <div className="text-[#FFD700] font-bold text-lg">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-black/50 p-6 rounded-2xl border border-[#FFD700]/10">
                <h3 className="text-2xl montserrat text-[#FFD700] mb-4">Recommended For</h3>
                <div className="space-y-4">
                  {[
                    "Office workers and professionals",
                    "Gamers and digital enthusiasts",
                    "Students and researchers",
                    "Frequent travelers",
                    "Anyone spending 4+ hours daily on screens",
                    "People sensitive to light",
                    "Night shift workers"
                  ].map((useCase, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon icon="mdi:check" className="w-5 h-5 text-[#FFD700]" />
                      <span className="text-[#FFD700]/80">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lens Comparison Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl montserrat text-[#FFD700] mb-6">
              Blue Shield Variants
            </h2>
            <p className="text-xl text-[#FFD700]/80 max-w-4xl mx-auto">
              Choose the perfect Blue Shield variant for your lifestyle and visual needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lensOptions.map((lens, index) => (
              <div 
                key={index}
                className={`bg-black/50 rounded-2xl p-6 border-2 transition-all cursor-pointer ${
                  currentLens === index ? 'border-[#FFD700]' : 'border-[#FFD700]/20 hover:border-[#FFD700]/50'
                }`}
                onClick={() => selectLens(index)}
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl montserrat text-[#FFD700] mb-2">{lens.name}</h3>
                </div>
                <div className="space-y-3">
                  {lens.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Icon icon="mdi:star" className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-[#FFD700]/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="bg-black py-20">
                 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 group/cards">
          {/* Card 1 */}
          <Link 
            href="/speciality-lenses/photochrome-plus" 
            className="block h-[50vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/5.jpg"
                alt="Photochromic Plus Lenses"
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
                src="/product/7.jpg"
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
            href="/speciality-lenses/photochrome" 
            className="block h-[50vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/9.jpg"
                alt="Photochrome Lenses"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="w-full bg-gradient-to-t from-black/100 via-black/50 to-transparent h-1/2 pt-32 pb-4 px-4 text-center">
                  <h3 className="text-3xl montserrat text-[#FFD700]">Photochrome</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

   
    </div>
  )
}