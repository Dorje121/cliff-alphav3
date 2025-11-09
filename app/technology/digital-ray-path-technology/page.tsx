import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Ray Path Technology | Cliff Lenses',
  description: 'Experience the future of vision with our Digital Ray Path Technology, delivering unparalleled clarity and precision through advanced light manipulation.'
};

export default function DigitalRayPathPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              NEXT-GENERATION VISION TECHNOLOGY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Digital Ray Path Technology
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Harnessing the power of light for crystal-clear, high-definition vision
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-12 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Precision Light Control
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our Digital Ray Path Technology uses advanced algorithms to precisely control how light travels through your lenses, optimizing every ray for maximum clarity and reduced visual distortion.
                </p>
                <ul className="space-y-3">
                  {[
                    'Enhanced light transmission',
                    'Reduced glare and halos',
                    'Sharper contrast and clarity',
                    'True-to-life color perception',
                    'Reduced eye strain'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden border border-blue-100 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 opacity-30 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100"></div>
                  <div className="absolute inset-8 rounded-full bg-white shadow-inner flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-4xl mb-2">👁️</div>
                      <p className="text-sm text-gray-500">Digital Ray Path<br />Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Light Optimization</h2>
            <p className="text-xl text-gray-600">Our technology ensures every ray of light is perfectly directed to your retina</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Precision Optics',
                description: 'Microscopic precision in lens design for optimal light control',
                icon: '🔬',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Digital Surfacing',
                description: 'Advanced digital surfacing for perfect light distribution',
                icon: '💻',
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                title: 'HD Clarity',
                description: 'Crisp, high-definition vision at all distances',
                icon: '✨',
                color: 'from-blue-400 to-indigo-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} text-white flex items-center justify-center text-2xl shadow-lg`}>
                  {feature.icon}
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">How Digital Ray Path Works</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-indigo-200 transform -translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-16">
                {[
                  {
                    title: 'Light Capture',
                    description: 'Advanced lens materials capture and focus light with exceptional precision',
                    icon: '☀️',
                    side: 'left'
                  },
                  {
                    title: 'Digital Processing',
                    description: 'Proprietary algorithms calculate the optimal light path for your vision',
                    icon: '⚡',
                    side: 'right'
                  },
                  {
                    title: 'Precision Delivery',
                    description: 'Light is precisely directed to your retina for crystal-clear vision',
                    icon: '🎯',
                    side: 'left'
                  },
                  {
                    title: 'Enhanced Vision',
                    description: 'Experience sharper, more vibrant vision in all lighting conditions',
                    icon: '👁️',
                    side: 'right'
                  }
                ].map((step, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row ${step.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className="md:flex-1 mb-6 md:mb-0">
                      <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto md:mx-0 ${step.side === 'left' ? 'md:mr-auto' : 'md:ml-auto'}`}>
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600 z-10 mx-auto md:mx-0">
                      {index + 1}
                    </div>
                    <div className="md:flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience the Difference</h2>
            <p className="text-xl text-gray-600">Digital Ray Path Technology delivers exceptional visual performance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Sharper Vision',
                description: 'Experience crystal-clear vision with enhanced detail and definition',
                icon: '🔍',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                title: 'Reduced Eye Strain',
                description: 'Minimizes visual fatigue during extended use',
                icon: '😌',
                color: 'bg-indigo-100 text-indigo-600'
              },
              {
                title: 'Better Night Vision',
                description: 'Improved visibility in low-light conditions',
                icon: '🌙',
                color: 'bg-blue-50 text-blue-500'
              }
            ].map((benefit, index) => (
              <div key={index} className="group p-8 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center text-2xl mb-6 mx-auto transition-transform group-hover:scale-110`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Sharper Vision?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover how Digital Ray Path Technology can transform your vision experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Book an Eye Exam
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}