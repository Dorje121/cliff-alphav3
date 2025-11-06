import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const product = {
  id: "02",
  title: "VERSATILE PROGRESSIVE",
  subtitle: "Seamless Vision at Every Distance",
  image: "/homeimage/progressive.jpg",
  video: "/videos/progressive.webm",
  description: "Cliff Versatile Progressive Lenses offer a sophisticated solution for presbyopia, providing clear vision at all distances with a smooth, natural transition. Our advanced lens technology ensures maximum comfort and visual acuity whether you're reading, working on a computer, or driving.",
  features: [
    "Wide, distortion-free viewing zones",
    "Light-adaptive photochromic technology",
    "100% UV protection",
    "Scratch-resistant and anti-reflective coating",
    "Reduced peripheral distortion",
    "Enhanced contrast and clarity"
  ],
  technology: {
    title: "Adaptive Focus Technology",
    description: "Our Versatile Progressive lenses incorporate cutting-edge Adaptive Focus Technology that dynamically adjusts to your visual needs. The lenses feature a sophisticated design with optimized progression corridors, ensuring a wider field of view and smoother transitions between distances. The precision-crafted surface provides consistent visual performance across all gaze angles.",
    benefits: [
      {
        title: "Natural Vision",
        description: "Smooth, natural transitions between near, intermediate, and distance vision"
      },
      {
        title: "Wider Viewing Zones",
        description: "Expanded areas for comfortable reading and computer use"
      },
      {
        title: "Faster Adaptation",
        description: "Reduced adaptation time compared to conventional progressives"
      }
    ]
  },
  benefits: [
    "Crystal clear vision at all distances",
    "Reduced eye strain during prolonged screen use",
    "Enhanced depth perception",
    "Improved night vision",
    "Ideal for active lifestyles",
    "Stylish and lightweight design"
  ],
  slug: "versatile-progressive",
  comparisonImages: {
    standard: "progressive.png",
    product: "progressive.png"
  },
  comparisonLabels: {
    standard: "STANDARD PROGRESSIVE",
    product: "CLIFF VERSATILE PROGRESSIVE"
  },
  durabilityAndCare: {
    title: "CLIFF DuraVision Lens Coatings",
    subtitle: "Durability & Care",
    description: "Advanced coatings that protect your investment and enhance visual clarity."
  },
  professionalContent: {
    description: "The CLIFF Versatile Progressive lens is designed for today's dynamic lifestyles, offering exceptional visual comfort and performance. Whether your patients are professionals working long hours on digital devices or active individuals who demand clear vision at all distances, these lenses deliver uncompromising quality and comfort.",
    benefits: [
      "Reduced adaptation period for new wearers",
      "Enhanced visual comfort in all lighting conditions",
      "Ideal for patients with active, on-the-go lifestyles",
      "Available in various materials including high-index and photochromic options"
    ],
    features: [
      "Customizable for individual prescriptions",
      "Multiple design options for different visual needs",
      "Compatible with all frame types",
      "Premium anti-reflective treatments available"
    ]
  }
};

export default function VersatileProgressivePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="max-w-[94rem] w-full mx-auto px-4 pt-24">
        <Link
          href="/products"
          className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-[94rem] w-full mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Content */}
          <div className="lg:w-3/5">
            <div className="space-y-6 max-w-4xl pl-0 pr-8 py-8 font-poppins">
              <h3 className="text-2xl montserrat text-[#FFD700] mb-2">
                {product.subtitle}
              </h3>
              <h1 className="text-4xl md:text-5xl montserrat text-white mb-4 leading-tight">
                CLIFF {product.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                {product.description}
              </p>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[60vh] min-h-[350px] relative rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          </div>
        </div>
      </div>

      {/* Technology and Benefits Section */}
      {product.technology && (
        <div className="max-w-[94rem] w-full mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side - Technology */}
            <div className="lg:col-span-7 pr-8 py-8 h-full">
              <h3 className="text-2xl font-semibold mb-4 text-amber-300">
                {product.technology.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.technology.description}
              </p>
            </div>

            {/* Right Side - Key Benefits */}
            {product.technology.benefits && product.technology.benefits.length > 0 && (
              <div className="lg:col-span-5 lg:pl-8">
                <h3 className="text-2xl font-semibold mb-6 text-amber-400">
                  Key Benefits
                </h3>
                <div className="space-y-6">
                  {product.technology.benefits.map((benefit, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-medium text-amber-300 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Comparison Section */}
      {product.comparisonImages && (
        <div className="max-w-[94rem] w-full mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Lens */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
              <Image
                src={`/homeimage/${product.comparisonImages.standard}`}
                alt="Standard Progressive Lens"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-1 left-4">
                <span className="text-lg font-medium text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded">
                  {product.comparisonLabels?.standard || "STANDARD PROGRESSIVE"}
                </span>
              </div>
            </div>

            {/* Product Lens */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
              <Image
                src={`/homeimage/${product.comparisonImages.product}`}
                alt={`${product.title} Lenses`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-1 left-4">
                <span className="text-lg font-medium text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded">
                  {product.comparisonLabels?.product || `CLIFF ${product.title}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="max-w-[94rem] w-full mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-amber-400 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.features.map((feature, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-amber-500/30 transition-colors">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-amber-400 text-xl">✓</span>
              </div>
              <p className="text-gray-200">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Durability and Care Section */}
      <div className="max-w-[94rem] w-full mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-amber-900/20 to-transparent p-8 rounded-xl border border-amber-500/20">
          <h3 className="text-2xl font-semibold text-amber-300 mb-2">
            {product.durabilityAndCare.title}
          </h3>
          <h4 className="text-xl text-amber-200 mb-4">
            {product.durabilityAndCare.subtitle}
          </h4>
          <p className="text-gray-300 max-w-3xl">
            {product.durabilityAndCare.description}
          </p>
        </div>
      </div>

      {/* Professional Content Section */}
      {product.professionalContent && (
        <div className="max-w-[94rem] w-full mx-auto px-4 py-12">
          <div className="bg-gray-900/50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-amber-300 mb-4">
              For Eye Care Professionals
            </h3>
            <p className="text-gray-300 mb-6">
              {product.professionalContent.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-xl font-medium text-amber-200 mb-4">Key Benefits</h4>
                <ul className="space-y-3">
                  {product.professionalContent.benefits.map((benefit, index) => (
                    <li key={`pro-benefit-${index}`} className="flex items-start">
                      <span className="text-amber-400 mr-2 mt-1">•</span>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-amber-200 mb-4">Features</h4>
                <ul className="space-y-3">
                  {product.professionalContent.features.map((feature, index) => (
                    <li key={`pro-feature-${index}`} className="flex items-start">
                      <span className="text-amber-400 mr-2 mt-1">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}