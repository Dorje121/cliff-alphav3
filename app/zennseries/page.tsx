import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Fixed images for each lens type
const lensImages = {
  clear: '/homeimage/single1.png',
  photoz: '/homeimage/photz.png',
  photochrome: '/homeimage/technology.png',
  polarized: '/homeimage/driveclear.png'
};

export default function ZennSeries() {
  // Use fixed images for each lens type
  const { clear, photoz, photochrome, polarized } = lensImages;
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      {/* <div className="container mx-auto pt-16 px-8 py-8">
        <Link href="/products" className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>
      </div> */}

      <section className="py-4 md:py-2 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl monserrat leading-tight">
                Cliff Zen Series 
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">
                In today's connected world, people expect more than vision correction - They want clarity, comfort, and adaptability.
              </p>
            </div>
            <div className="relative h-80 md:h-[500px] w-full">
              <Image
                src="/lenses/zenn.png"
                alt="Cliff Zen Series"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {/* Clarity */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-[#FFD700]/70 backdrop-blur-md rounded-xl flex items-center justify-center p-4 shadow-lg border border-white/10">
                <Image 
                  src="/flattyicon/clarity.png" 
                  alt="Clarity" 
                  width={60} 
                  height={60}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Clarity</h3>
            </div>

            {/* Comfort */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-[#FFD700]/70 backdrop-blur-md rounded-xl flex items-center justify-center p-4 shadow-lg border border-white/10">
                <Image 
                  src="/flattyicon/comfort.png" 
                  alt="Comfort" 
                  width={60} 
                  height={60}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Comfort</h3>
            </div>

            {/* Digital Ready */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-[#FFD700]/70 backdrop-blur-md rounded-xl flex items-center justify-center p-4 shadow-lg border border-white/10">
                <Image 
                  src="/flattyicon/digitalready.png" 
                  alt="Digital Ready" 
                  width={60} 
                  height={60}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Digital Ready</h3>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 gap-8">
            {/* Durable */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-[#FFD700]/70 backdrop-blur-md rounded-xl flex items-center justify-center p-4 shadow-lg border border-white/10">
                <Image 
                  src="/flattyicon/durable.png" 
                  alt="Durable" 
                  width={60} 
                  height={60}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Durable</h3>
            </div>

            {/* Personalized */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-[#FFD700]/70 backdrop-blur-md rounded-xl flex items-center justify-center p-4 shadow-lg border border-white/10">
                <Image 
                  src="/flattyicon/personalize.png" 
                  alt="Personalized" 
                  width={60} 
                  height={60}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Personalized</h3>
            </div>

            {/* Precise */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-[#FFD700]/70 backdrop-blur-md rounded-xl flex items-center justify-center p-4 shadow-lg border border-white/10">
                <Image 
                  src="/flattyicon/precised.png" 
                  alt="Precise" 
                  width={60} 
                  height={60}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Precise</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Lens Types Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-left mb-8">Choose Your Cliff Single Vision Lenses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
            {/* Clear Lens */}
            <a href="/products/single-vision" className="group block h-full">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full   flex flex-col">
                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                  <Image 
                    src={clear}
                    alt="Clear Lens" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">Clear</h3>
                  <p className="text-gray-400">Perfect for indoor use and low-light conditions, providing true color vision.</p>
                </div>
              </div>
            </a>
            {/* Photoz Lens */}
            <a href="/products/single-vision" className="group block h-full">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                  <Image 
                    src={photoz}
                    alt="Photoz Lens" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">Photoz</h3>
                  <p className="text-gray-400">Light-adaptive lenses that automatically adjust to changing light conditions.</p>
                </div>
              </div>
            </a>
            {/* Photochrome Lens */}
            <a href="/products/single-vision" className="group block h-full">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                  <Image 
                    src={photochrome}
                    alt="Photochrome Lens" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">Photochrome</h3>
                  <p className="text-gray-400">Transitions from clear to dark outdoors, offering UV protection and comfort.</p>
                </div>
              </div>
            </a>
            {/* Polarized Lens */}
            <a href="/products/single-vision" className="group block h-full">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                  <Image 
                    src={polarized}
                    alt="Polarized Lens" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">Polarized</h3>
                  <p className="text-gray-400">Reduces glare from reflective surfaces, ideal for driving and outdoor activities.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-left mb-8">Choose Your Cliff zenn Progressive Lenses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
            {/* Clear Lens */}
            <a href="/products/progressive" className="group block h-full">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full   flex flex-col">
                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                  <Image 
                    src={clear}
                    alt="Clear Lens" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">Clear</h3>
                  <p className="text-gray-400">Perfect for indoor use and low-light conditions, providing true color vision.</p>
                </div>
              </div>
            </a>

            {/* Photoz Lens */}
            <a href="/products/single-vision" className="group block h-full">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                  <Image 
                    src={photoz}
                    alt="Photoz Lens" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">Photoz</h3>
                  <p className="text-gray-400">Light-adaptive lenses that automatically adjust to changing light conditions.</p>
                </div>
              </div>
            </a>

            {/* Photochrome Lens */}
            <a href="/products/single-vision" className="group block h-full">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                  <Image 
                    src={photochrome}
                    alt="Photochrome Lens" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">Photochrome</h3>
                  <p className="text-gray-400">Transitions from clear to dark outdoors, offering UV protection and comfort.</p>
                </div>
              </div>
            </a>

            {/* Polarized Lens */}
            <a href="/products/single-vision" className="group block h-full">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                  <Image 
                    src={polarized}
                    alt="Polarized Lens" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">Polarized</h3>
                  <p className="text-gray-400">Reduces glare from reflective surfaces, ideal for driving and outdoor activities.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}