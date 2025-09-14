"use client";

import TexturedTitle from "@/components/TexturedTitle";

export default function TextureDemoPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8">
        <h2 className="text-2xl text-gray-700 mb-8">Textured Title Component Demo</h2>
        
        {/* Default usage */}
        <div className="space-y-4">
          <TexturedTitle text="CLIFF LENS" />
          <p className="text-gray-600">Default textured title</p>
        </div>

        {/* Custom size */}
        <div className="space-y-4">
          <TexturedTitle 
            text="PREMIUM QUALITY" 
            fontSize="3rem"
            className="mt-8"
          />
          <p className="text-gray-600">Custom font size</p>
        </div>

        {/* Custom weight */}
        <div className="space-y-4">
          <TexturedTitle 
            text="EXCEPTIONAL SERVICE" 
            fontSize="2.5rem"
            fontWeight="900"
            className="mt-8"
          />
          <p className="text-gray-600">Custom font weight</p>
        </div>

        {/* With additional styling */}
        <div className="space-y-4">
          <TexturedTitle 
            text="INNOVATIVE DESIGN" 
            fontSize="3.5rem"
            className="mt-8 uppercase tracking-wider"
          />
          <p className="text-gray-600">With additional Tailwind classes</p>
        </div>
      </div>
    </div>
  );
}
