"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';



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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the position to scroll to
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // Adjust offset as needed
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
    
    switch(category) {
      case 'Speciality Lenses':
        // Scroll to the specialty lenses section
        window.location.href = '/speciality-lenses';
        break;
      case 'Coatings':
        // Navigate to the Coatings page
        window.location.href = '/Coating';
        break;
      case 'Technologies':
        // Navigate to the Technologies page
        window.location.href = '/technology';
        break;
      case 'Products':
        // Scroll to top if Products is selected
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

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
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-6xl montserrat text-[#FFD700] mb-4">
              Products Highlights
            </h2>
            <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl">
              Discover our premium collection of lens products and optical solutions
              for superior vision and eye protection
            </p>
          </div>
          
          
          <div className="relative w-full md:w-64 pt-12 md:mt-0" ref={dropdownRef}>
            <button
              type="button"
              className="flex items-center justify-between w-full md:w-64 px-4 py-3 bg-black border border-gray-700 rounded-md text-left text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{selectedCategory}</span>
              <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>

            
            {isOpen && (
              <div className="absolute right-0 mt-2 w-full bg-black border border-gray-700 rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button
                    className={`block w-full text-left px-4 py-2 text-white hover:bg-gray-800 ${selectedCategory === 'All Categories' ? 'bg-gray-800' : ''}`}
                    onClick={() => {
                      setSelectedCategory('All Categories');
                      setIsOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`block w-full text-left px-4 py-2 text-white hover:bg-gray-800 ${selectedCategory === category ? 'bg-gray-800' : ''}`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        
        <div className="w-full">
          <DropProducts />
        </div>
        
      </div>
    </div>
  );
};

export default ProductDropdown;