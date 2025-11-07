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
    name: 'Blue Shield Amber',
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


        <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Digital Protection",
                description: "Essential for daily screen use including computers, phones, and tablets",
                icon: "mdi:laptop"
              },
              {
                title: "Sleep Quality",
                description: "Reduces blue light exposure in evening for better sleep patterns",
                icon: "mdi:sleep"
              },
              {
                title: "Eye Comfort",
                description: "Minimizes dry eyes, headaches, and blurred vision from screen time",
                icon: "mdi:eye-outline"
              },
              {
                title: "Long-term Health",
                description: "Protects against potential retinal damage from prolonged blue light exposure",
                icon: "mdi:shield-check"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-black/50 rounded-xl border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all">
                <div className="flex justify-center mb-4">
                  <Icon icon={benefit.icon} className="w-12 h-12 text-[#FFD700]" />
                </div>
                <h3 className="text-xl font-semibold text-[#FFD700] mb-3">{benefit.title}</h3>
                <p className="text-[#FFD700]/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

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