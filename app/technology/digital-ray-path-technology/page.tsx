import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Ray Path Technology | Cliff Lenses',
  description: 'Experience the future of vision with our Digital Ray Path Technology, delivering unparalleled clarity and precision through advanced light manipulation.'
};

export default function DigitalRayPathPage() {
  const features = [
    {
      icon: '🔬',
      title: 'Precision Optics',
      description: 'Microscopic precision in lens design for optimal light control'
    },
    {
      icon: '💻',
      title: 'Digital Surfacing',
      description: 'Advanced digital surfacing for perfect light distribution'
    },
    {
      icon: '✨',
      title: 'HD Clarity',
      description: 'Crisp, high-definition vision at all distances'
    },
    {
      icon: '🎯',
      title: 'Light Optimization',
      description: 'Every ray of light precisely directed to your retina'
    }
  ];

  const technologySteps = [
    {
      step: "01",
      title: "Light Capture & Analysis",
      description: "Advanced lens materials capture and analyze light with exceptional precision"
    },
    {
      step: "02",
      title: "Digital Path Calculation",
      description: "Proprietary algorithms calculate optimal light paths for your vision"
    },
    {
      step: "03",
      title: "Precision Light Delivery",
      description: "Light is precisely directed to your retina for crystal-clear vision"
    },
    {
      step: "04",
      title: "Enhanced Visual Experience",
      description: "Experience sharper, more vibrant vision in all lighting conditions"
    }
  ];

  const resolutionBenefits = [
    {
      icon: '🔍',
      title: 'Sharper Vision',
      description: 'Experience crystal-clear vision with enhanced detail and definition'
    },
    {
      icon: '😌',
      title: 'Reduced Eye Strain',
      description: 'Minimizes visual fatigue during extended use'
    },
    {
      icon: '🌙',
      title: 'Better Night Vision',
      description: 'Improved visibility in low-light conditions'
    }
  ];

  const technicalAdvantages = [
    {
      title: "Advanced Light Manipulation",
      description: "Precise control over how light travels through lenses for optimal clarity"
    },
    {
      title: "Digital Precision Engineering",
      description: "Computer-optimized light paths based on individual prescription needs"
    },
    {
      title: "Enhanced Visual Performance",
      description: "Superior contrast, color perception, and reduced visual distortion"
    }
  ];

  const lifestyleApplications = [
    {
      scenario: "High-Definition Vision",
      benefit: "Crystal-clear vision with enhanced detail and true-to-life color perception"
    },
    {
      scenario: "Low-Light Performance",
      benefit: "Improved visibility and reduced glare in challenging lighting conditions"
    },
    {
      scenario: "Extended Comfort",
      benefit: "Reduced eye strain during prolonged screen time and reading"
    }
  ];

  return (
    <main className="min-h-screen bg-black relative pb-28">
      {/* Hero Section */}
      <div className="h-[80vh] w-full mx-auto relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/digital-ray/ray.png"
            alt="Digital Ray Path Technology"
            fill
            className="object-cover opacity-30"
            priority
          />
          
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto pl-0 pr-8 py-8 font-poppins">
            <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight text-center">
              Digital Ray Path Technology
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              Advanced light manipulation for unparalleled clarity and precision in vision
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative bg-[#FFD700]/10 py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-1 h-16 bg-[#FFD700] mx-auto"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl leading-12 text-[#FFD700] mb-6">
            Digital Ray Path Technology™ revolutionizes optical performance by precisely controlling 
            how light travels through your lenses, delivering crystal-clear, high-definition vision 
            with enhanced contrast and reduced distortion.
          </h2>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Advanced Light Optimization</h2>
            <p className="text-xl text-[#FFD700] max-w-2xl mx-auto">
              Our technology ensures every ray of light is perfectly directed to your retina
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-yellow-500/20 rounded-full text-yellow-400 text-2xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#FFD700] mb-3">{feature.title}</h3>
                <p className="text-[#FFD700]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resolution Benefits */}
      {/* <section className="py-20 bg-[#FFD700]/10">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Enhanced Visual Experience</h2>
            <p className="text-xl text-[#FFD700] max-w-2xl mx-auto">
              Digital Ray Path Technology delivers exceptional visual performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {resolutionBenefits.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-yellow-500/20 rounded-full text-yellow-400 text-2xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#FFD700] mb-3">{feature.title}</h3>
                <p className="text-[#FFD700]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-[#FFD700]">Precision Light Control</h2>
              <div className="space-y-6 text-[#FFD700]">
                <p className="text-xl">
                  Digital Ray Path Technology uses advanced algorithms to precisely control how light 
                  travels through your lenses, optimizing every ray for maximum clarity and reduced visual distortion.
                </p>
                <p className="text-xl">
                  Our innovative approach to light manipulation ensures that you experience true-to-life 
                  color perception, enhanced contrast, and superior visual comfort in all lighting conditions.
                </p>
              </div>
              
              {/* Technical Advantages */}
              <div className="space-y-4 mt-8">
                <h3 className="text-2xl font-semibold text-[#FFD700]">Technical Innovation</h3>
                {technicalAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-[#FFD700] font-semibold">{advantage.title}</h4>
                      <p className="text-[#FFD700]">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="md:w-1/2 h-[500px] relative rounded-lg overflow-hidden">
              <Image
                src="/technology/digitalraypath.png"
                alt="Digital Ray Path Technology"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

       {/* Full width image with overlay */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="w-full h-[500px] relative rounded-xl overflow-hidden">
            <Image
              src="/digital-ray/rayy.png"
              alt="Digital Ray Path Technology"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
              <div className="h-full flex flex-col justify-center pl-12 md:pl-24 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4">
                  Digital Ray Path Technology
                </h2>
                <p className="text-[#FFD700] text-lg md:text-xl">
                  Advanced light manipulation for unparalleled visual clarity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Applications */}
      {/* <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Perfect Visual Performance</h2>
            <p className="text-xl text-[#FFD700] max-w-2xl mx-auto">
              Enhanced vision quality for every aspect of your life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lifestyleApplications.map((application, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-xl p-6 text-center"
              >
                <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">{application.scenario}</h3>
                <p className="text-[#FFD700] text-lg">{application.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Technology Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">How Digital Ray Path Works</h2>
            <p className="text-xl text-[#FFD700] max-w-2xl mx-auto">
              Advanced light manipulation through sophisticated four-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologySteps.map((step, index) => (
              <div
                key={index}
                className="bg-black/50 border border-[#FFD700]/30 rounded-xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-[#FFD700]">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#FFD700] mb-3">{step.title}</h3>
                    <p className="text-[#FFD700] text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </main>
  );
}