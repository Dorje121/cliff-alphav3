"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import DropProducts with no SSR
const DropProducts = dynamic(
  () => import('./dropproducts'),
  { ssr: false }
);

const ProductDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const categories = [
    'Coatings',
    'Products',
    'Technologies',
    'Speciality Lenses'
  ];
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-[94rem] mx-auto px-4 py-12">
      <div className="flex flex-col">
        {/* Title and Dropdown Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-8xl montserrat text-[#FFD700] mb-4">
              Products Highlights
            </h2>
            <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl">
              Discover our premium collection of lens products and optical solutions
              for superior vision and eye protection
            </p>
          </div>
          
          {/* Dropdown on the right */}
          <div className="relative w-full md:w-64 pt-12 md:mt-0" ref={dropdownRef}>
            <button
              type="button"
              className="flex items-center justify-between w-full md:w-64 px-4 py-3 bg-black border border-gray-700 rounded-md text-left text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{selectedCategory}</span>
              <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-full bg-black border border-gray-700 rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button
                    className={`block w-full text-left px-4 py-2 text-white hover:bg-gray-800 ${selectedCategory === 'All Categories' ? 'bg-gray-800' : ''}`}
                    onClick={() => {
                      setSelectedCategory('All Categories');
                      setIsOpen(false);
                    }}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`block w-full text-left px-4 py-2 text-white hover:bg-gray-800 ${selectedCategory === category ? 'bg-gray-800' : ''}`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsOpen(false);
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          <DropProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;