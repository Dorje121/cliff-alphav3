'use client'

import { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { EmblaCarouselType } from 'embla-carousel'
import Image from 'next/image'

const specs = [
  {
    title: 'Prescription & Addition',
    value: 'Customized to your needs',
    image: '/bluesafe/blue.png',
  },
  {
    title: 'Nasopupilar Distance',
    value: 'Optimized for comfort',
    image: '/bluesafe/clear.png',
  },
  {
    title: 'Pupilar Heights',
    value: 'Precisely measured',
    image: '/bluesafe/drive.png',
  },
  {
    title: 'Frame Dimensions',
    value: 'Perfect fit guaranteed',
    image: '/bluesafe/driveclear.png',
  },
  {
    title: 'Pantoscopic Angle',
    value: 'Optimal positioning',
    image: '/bluesafe/lense.png',
  },
  {
    title: 'Wrap Angle',
    value: 'Enhanced peripheral vision',
    image: '/bluesafecoatings/blue.png',
  },
  {
    title: 'Back Vertex Distance',
    value: 'Accurately calculated',
    image: '/bluesafecoatings/nox.png',
  },
  {
    title: 'Near Working Distance',
    value: 'Personalized for you',
    image: '/cliffcoating/bluee.png',
  }
]

export function SpecsCarousel() {
  const autoplay = useRef(
    Autoplay(
      { delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }
    )
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: true,
      dragFree: true,
    },
    [autoplay.current]
  )

  // Improved infinite scroll with rewind
  const rewind = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const lastIndex = engine.slideRects.length - 1
    
    // When we reach the end, rewind to start for seamless infinite scroll
    if (engine.index.get() === lastIndex) {
      emblaApi.scrollTo(0)
    }
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    // Enhanced autoplay with smooth infinite scroll
    const autoplayInstance = autoplay.current
    if (autoplayInstance.play) {
      autoplayInstance.play()
    }

    // Rewind when scroll reaches end
    emblaApi.on('scroll', () => {
      rewind(emblaApi)
    })

    // Handle visibility changes for better performance
    const handleVisibilityChange = () => {
      if (document.hidden) {
        autoplayInstance.stop?.()
      } else {
        autoplayInstance.play?.()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      autoplayInstance.stop?.()
    }
  }, [emblaApi, rewind])

  return (
    <div className="w-full py-10 bg-black overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {specs.map((spec, index) => (
            <div 
              className="embla__slide flex-shrink-0" 
              key={`${spec.title}-${index}`}
            >
              <div className="relative bg-black rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-out h-full mx-2 min-w-[300px] sm:min-w-[400px] lg:min-w-[480px]">
                <div className="w-full h-full min-h-[240px] md:min-h-[280px] relative">
                  <Image
                    src={spec.image}
                    alt={spec.title}
                    fill
                    priority={index < 2}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    quality={80}
                    className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-7 pt-16 md:pt-20">
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 leading-tight">
                    {spec.title}
                  </h3>
                  <p className="text-gray-200 text-base md:text-lg leading-relaxed font-light">
                    {spec.value}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .embla {
          overflow: hidden;
          width: 100%;
        }
        .embla__container {
          display: flex;
          gap: 0.2rem;  /* Reduced from 1rem to 0.5rem */
          backface-visibility: hidden;
          touch-action: pan-y;
        }
        .embla__slide {
          flex: 0 0 auto;
          min-width: 0;
          position: relative;
        }
        
        /* Smooth scrolling animation */
        .embla__container {
          animation: scroll 40s linear infinite;
        }
        
        .embla__container:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        /* Optimize performance */
        .embla__slide * {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .embla__container {
            gap: 0.1rem;  /* Reduced from 0.75rem to 0.375rem */
          }
        }
      `}</style>
    </div>
  )
}