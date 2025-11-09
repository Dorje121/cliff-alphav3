import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personalization Parameters | Cliff Lenses',
  description: 'Experience truly customized vision with our advanced Personalization Parameters, tailoring every aspect of your lenses to your unique visual needs and lifestyle.'
};

export default function PersonalizationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-fuchsia-100"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              TAILORED VISION TECHNOLOGY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-600">
              Personalization Parameters
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your vision is unique. Your lenses should be too.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mb-12 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Vision as Unique as You Are
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our advanced Personalization Parameters technology takes into account over 20 individual measurements and preferences to create lenses that are perfectly tailored to your eyes and lifestyle.
                </p>
                <ul className="space-y-3">
                  {[
                    'Customized to your exact prescription',
                    'Tailored to your daily activities',
                    'Optimized for your frame choice',
                    'Adjusted for your working distance',
                    'Personalized visual comfort settings'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="relative h-96 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl overflow-hidden border border-purple-100 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-200 opacity-40 animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-fuchsia-200 opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full bg-purple-200 opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 to-fuchsia-100 shadow-inner"></div>
                      <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="text-4xl mb-2">👓</div>
                          <p className="text-sm text-gray-500">Personalized Vision<br />Parameters</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Vision, Your Way</h2>
            <p className="text-xl text-gray-600">We consider multiple personalization factors to create your perfect lenses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Pupillary Distance',
                description: 'Precise measurement of the distance between your pupils',
                icon: '👁️',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Vertex Distance',
                description: 'The distance between your eye and the back of the lens',
                icon: '📏',
                color: 'from-fuchsia-500 to-fuchsia-600'
              },
              {
                title: 'Pantoscopic Tilt',
                description: 'The vertical angle of your frames on your face',
                icon: '⬆️',
                color: 'from-purple-400 to-fuchsia-500'
              },
              {
                title: 'Frame Wrap',
                description: 'The curvature of your frames around your face',
                icon: '🔄',
                color: 'from-fuchsia-400 to-purple-500'
              },
              {
                title: 'Working Distance',
                description: 'How far you typically hold reading material',
                icon: '📱',
                color: 'from-purple-500 to-fuchsia-500'
              },
              {
                title: 'Lifestyle Needs',
                description: 'Your daily activities and visual requirements',
                icon: '🏃',
                color: 'from-fuchsia-500 to-purple-600'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-purple-100 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl mb-4 bg-gradient-to-r ${feature.color} text-white flex items-center justify-center text-2xl shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Personalization Matters</h2>
            <p className="text-xl text-gray-600">Experience the difference of truly customized vision</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Enhanced Comfort',
                description: 'Reduced eye strain and fatigue from lenses that match your natural vision',
                icon: '😌',
                color: 'bg-purple-100 text-purple-600'
              },
              {
                title: 'Sharper Vision',
                description: 'Crisper, clearer vision with fewer distortions',
                icon: '🔍',
                color: 'bg-fuchsia-100 text-fuchsia-600'
              },
              {
                title: 'Better Adaptation',
                description: 'Easier adjustment period with lenses designed specifically for you',
                icon: '⏱️',
                color: 'bg-purple-50 text-purple-500'
              }
            ].map((benefit, index) => (
              <div key={index} className="group p-8 bg-white rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

      {/* Personalization Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Your Personalization Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 to-fuchsia-200 transform -translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {[
                  {
                    title: 'Comprehensive Eye Exam',
                    description: 'Detailed assessment of your vision and eye health',
                    icon: '👁️',
                    side: 'left'
                  },
                  {
                    title: 'Frame Selection',
                    description: 'Choose frames that complement your style and facial features',
                    icon: '👓',
                    side: 'right'
                  },
                  {
                    title: 'Precise Measurements',
                    description: 'Advanced technology captures exact measurements for optimal lens positioning',
                    icon: '📐',
                    side: 'left'
                  },
                  {
                    title: 'Lens Customization',
                    description: 'Lenses are crafted with your unique parameters in mind',
                    icon: '🔧',
                    side: 'right'
                  },
                  {
                    title: 'Perfect Fit',
                    description: 'Professional fitting to ensure maximum comfort and performance',
                    icon: '✅',
                    side: 'left'
                  }
                ].map((step, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row ${step.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className="md:flex-1 mb-6 md:mb-0">
                      <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto md:mx-0 ${step.side === 'left' ? 'md:mr-auto' : 'md:ml-auto'}`}>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-fuchsia-100 flex items-center justify-center text-2xl mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-purple-100 flex items-center justify-center text-lg font-bold text-purple-600 z-10 mx-auto md:mx-0">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Perfect Pair?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the difference of truly personalized lenses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Book a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Find a Store
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}