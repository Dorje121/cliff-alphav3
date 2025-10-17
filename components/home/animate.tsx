import { motion } from 'framer-motion';
import Image from 'next/image';
import TextWithTexture from '../textwithgoldentexture';

export default function AnimateSection() {
  return (
    <div className="w-full text-white min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side - Earth GIF */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md h-80 md:h-96">
            <Image
              src="/videos/earth.gif"
              alt="Rotating Earth"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          
          <TextWithTexture
            text="Seeing the World Better"
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 montserrat"
          />
          <p className="text-lg md:text-xl poppins text-gray-300 max-w-lg">
            Experience the world like never before with our cutting-edge technology and innovative solutions. We bring you closer to the world's wonders through advanced visualization and immersive experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
}