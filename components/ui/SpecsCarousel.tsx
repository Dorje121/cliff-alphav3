'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
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
  return (
    <div className="w-full py-10 bg-black">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={16}
        slidesPerView="auto"
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
        }}
        speed={5000}
        loop={true}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumBounce: false,
          momentumVelocityRatio: 0.5,
        }}
        allowTouchMove={false}
        grabCursor={false}
        resistance={false}
        resistanceRatio={0}
        longSwipes={false}
        followFinger={false}
        preventInteractionOnTransition={true}
        cssMode={false} // Disable CSS mode for better performance
        breakpoints={{
          320: { 
            slidesPerView: 1.2,
            spaceBetween: 12
          },
          480: { 
            slidesPerView: 1.8,
            spaceBetween: 14
          },
          640: { 
            slidesPerView: 2.5,
            spaceBetween: 16
          },
          768: { 
            slidesPerView: 3.2,
            spaceBetween: 16
          },
          1024: { 
            slidesPerView: 4.2,
            spaceBetween: 20
          },
          1280: { 
            slidesPerView: 5.2,
            spaceBetween: 24
          },
        }}
        className="w-full !overflow-visible"
        onSwiper={(swiper) => {
          // Ensure autoplay starts properly
          setTimeout(() => {
            swiper.autoplay?.start();
          }, 100);
        }}
      >
        {specs.map((spec, index) => (
          <SwiperSlide 
            key={index} 
            className="!w-auto transition-all duration-300 ease-out"
          >
            <div className="relative bg-black rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-out h-full min-w-[280px]">
              {/* Image background - using Next.js Image for optimization */}
              <div className="w-full h-full min-h-[200px] md:min-h-[250px] relative">
                <Image
                  src={spec.image}
                  alt={spec.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-12">
                <h3 className="text-lg font-bold text-yellow-400 mb-2 leading-tight">
                  {spec.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">{spec.value}</p>
              </div>

              {/* Hover effect indicator */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for smoother animations */}
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .swiper-slide {
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }
        .swiper-slide:hover {
          opacity: 1;
        }
        .swiper-slide-active {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}