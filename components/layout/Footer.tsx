import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
// import TextWithTexture from "@/components/textwithgoldentexture";

const Footer = () => {
  return (
    <footer
      className="relative md:h-[110vh] backdrop-blur-sm flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/footer/cliff-mount-lens.png)" }}
    >
      {/* Enhanced Overlay with gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div> */}

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 md:px-8 py-8  flex flex-col items-center sm:justify-center justify-start h-full">
        {/* Main Title */}

        <div className="text-[#FFD700] flex flex-col items-start justify-center px-4 py-8">
          <div className="text-center w-full ">
            <h2 className="text-4xl md:text-4xl uppercase pb-6 pt-44 font-medium montserrat text-[#FFD700]">
              Partner with us
            </h2>
          </div>
          <form className="w-full relative border-b border-[#FFD700]/70">
            <label className="block text-xs uppercase tracking-widest mb-2 text-[#FFD700]">
              Your Email <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-between">
              <input
                type="email"
                placeholder=""
                className="bg-transparent w-full text-[#FFD700] placeholder-[#b6ff00]/60 focus:outline-none text-sm tracking-wider"
              />
              <button
                type="submit"
                className="text-[#FFD700] uppercase text-nowrap cursor-pointer text-sm ml-3 tracking-widest hover:text-white transition-colors"
              >
                [ Submit ]
              </button>
            </div>
          </form>
        </div>
        {/* Navigation Links - Centered at Bottom */}
        <div className="flex justify-between flex-col lg:flex-row items-center w-full max-w-screen gap-4 sm:gap-8 lg:gap-0 mt-8 sm:mt-16 md:mt-32 lg:mt-52 lg:mb-16">
          {/* Logo and CTA */}
          <div className="flex flex-row items-center justify-center mb-4 sm:mb-6 lg:mb-0 order-1 lg:order-none">
            <Image
              src="/logo/fda-gold.png"
              alt="Cliff Eyewear Logo"
              width={160}
              height={120}
              className="object-contain w-32  sm:w-36  md:w-40 "
            />
          </div>

          <ul className="flex flex-wrap justify-center uppercase items-center font-semibold gap-4  gap-y-2 sm:gap-y-4 py-4 text-center tracking-wide  order-2 lg:order-none max-w-full overflow-hidden text-[#FFD700]">
            <li className="px-1 sm:px-2">
              <Link
                href="/"
                className="text-xs sm:text-sm md:text-base font-family-dm-sans transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap"
              >
                Home
              </Link>
            </li>
            <li className="px-1 sm:px-2">
              <Link
                href="/Services"
                className="text-xs sm:text-sm md:text-base font-family-dm-sans transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap"
              >
                Products
              </Link>
            </li>
            <li className="px-1 sm:px-2">
              <Link
                href="/Coating"
                className="text-xs sm:text-sm md:text-base font-family-dm-sans transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap"
              >
                Coatings
              </Link>
            </li>
            <li className="px-1 sm:px-2">
              <Link
                href="/Blogs"
                className="text-xs sm:text-sm md:text-base font-family-dm-sans transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap"
              >
                Technologies
              </Link>
            </li>
            <li className="px-1 sm:px-2">
              <Link
                href="/Contact"
                className="text-xs sm:text-sm md:text-base font-family-dm-sans transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Social Media */}
          <div className="flex flex-col items-center ">
            <div className="flex items-center justify-center gap-2 text-[#FFD700]">
              <Link href="https://facebook.com" className="p-1 pb-0">
                <Icon icon="ri:facebook-fill" width="24" height="24" />
              </Link>
              <Link href="https://instagram.com" className="p-1 pb-0">
                <Icon icon="basil:instagram-solid" width="24" height="24" />
              </Link>
              <Link href="https://linkedin.com" className="p-1 pb-0">
                <Icon icon="jam:linkedin" width="24" height="24" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full py-3 sm:py-4 px-4 sm:px-6 border-t border-yellow-600/40 absolute bottom-4 mt-4 sm:mt-6 ">
          <p className="text-[#FFD700] poppins text-xs text-center">
            © 2025 Cliff Eyewear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
