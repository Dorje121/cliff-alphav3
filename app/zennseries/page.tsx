import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ZennSeries() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="container mx-auto pt-16 px-8 py-8">
        <Link href="/products" className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>
      </div>

      <section className="py-4 md:py-2 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl monserrat leading-tight">
                Cliff Zen Series 
              </h1>
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
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Clarity */}
            <div className="p-4 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-18 h-18 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Clarity</h3>
              </div>
            </div>

            {/* Comfort */}
            <div className="p-4 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-18 h-18 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Comfort</h3>
              </div>
            </div>

            {/* Digital Ready */}
            <div className="p-4 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-18 h-18 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Digital Ready</h3>
              </div>
            </div>

            {/* Precise */}
            <div className=" p-4 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-18 h-18 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                    <path d="M12 2v4" />
                    <path d="m16.24 7.76 2.83-2.83" />
                    <path d="M17 12h4" />
                    <path d="m16.24 16.24 2.83 2.83" />
                    <path d="M12 18v4" />
                    <path d="m7.76 16.24-2.83 2.83" />
                    <path d="M7 12H3" />
                    <path d="m7.76 7.76-2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Precise</h3>
              </div>
            </div>

            {/* Personalized */}
            <div className=" p-4 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-18 h-18 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Personalized</h3>
              </div>
            </div>

            {/* Durable */}
            <div className=" p-4 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-18 h-18 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Durable</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}