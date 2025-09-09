"use client";
import React from "react";
import ProductCarousel from "@/components/embla/product-carousel";
import { motion } from "motion/react";

const TestProductPage = () => {
  // Product data matching the Roger Federer Collection style from the image
  const productSlides = [
    {
      id: "r-16-brown",
      image: "/frames/ezgif-frame-001.jpg",
      title: "R-16",
      color: "Brown Tortoise",
    },
    {
      id: "r-16-green",
      image: "/frames/ezgif-frame-015.jpg",
      title: "R-16",
      color: "Forest Green",
    },
    {
      id: "r-16-blue",
      image: "/frames/ezgif-frame-025.jpg",
      title: "R-16",
      color: "Ocean Blue",
    },
    {
      id: "r-16-classic",
      image: "/frames/ezgif-frame-035.jpg",
      title: "R-16",
      color: "Classic Black",
    },
    {
      id: "r-16-burgundy",
      image: "/frames/ezgif-frame-045.jpg",
      title: "R-16",
      color: "Burgundy",
    },
  ];

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-gray-50 to-white">
      {/* Main Product Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="container mx-auto px-6 mb-12"
      >
        <div className="max-w-5xl mx-auto ">
          <ProductCarousel
            slides={productSlides}
            options={{
              align: "center",
              containScroll: "trimSnaps",
              dragFree: false,
              loop: true,
            }}
            showThumbnails={true}
            showNavigation={true}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TestProductPage;
