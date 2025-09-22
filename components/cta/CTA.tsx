import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <div className="text-center mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-0">
      <div className="relativep-6 sm:p-8 lg:p-12 backdrop-blur-sm overflow-hidden h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/bluesafe/ctalist.jpg"
            alt="Bluesafe Contact Lens Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-left">
          <p className="uppercase tracking-widest text-zinc-400 text-sm mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-amber-400">CLIFF</span> Eyewear
          </h2>
          <p className="text-zinc-300 mb-6 text-base sm:text-lg leading-relaxed w-1/2">
            Cliff is an esteemed eyewear company dedicated to transforming how
            people see the world, one pair of glasses at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={"/Contact"}
              className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300"
            >
              Become a Cliff Dealer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
