import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Add Technology | Cliff Lenses',
  description: 'Experience the future of vision with Smart Add Technology, dynamically adjusting to your visual needs for seamless near and intermediate vision.'
};

export default function SmartAddPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-teal-900"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-emerald-900/30 text-emerald-400 rounded-full text-sm font-medium mb-4 border border-emerald-500/30">
              INTELLIGENT VISION TECHNOLOGY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Smart Add Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Seamless vision from near to intermediate distances with intelligent adaptation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-12 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-teal-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Intelligent Vision Enhancement
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Smart Add Technology uses advanced algorithms to dynamically adjust the power of your lenses based on your viewing distance, providing crystal-clear vision for all your daily activities.
                </p>
                <ul className="space-y-3">
                  {[
                    'Smooth transition between distances',
                    'Reduced eye strain and fatigue',
                    'Enhanced clarity for digital devices',
                    'Optimized for modern lifestyles',
                    'Personalized to your visual needs'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-emerald-900/50 flex items-center justify-center">
                          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-2xl overflow-hidden border border-gray-700/50 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-emerald-900/30 opacity-70 animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-teal-900/30 opacity-70 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full bg-emerald-900/30 opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-900/30 to-teal-900/30 shadow-inner"></div>
                      <div className="absolute inset-4 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="text-4xl mb-2">👁️</div>
                          <p className="text-sm text-gray-300">Smart Add<br />Technology</p>
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

      {/* Technology Features */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How Smart Add Works</h2>
            <p className="text-xl text-gray-300">Advanced technology for seamless vision at every distance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Dynamic Power Adjustment',
                description: 'Automatically adjusts lens power based on viewing distance',
                icon: '⚡',
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                title: 'Smooth Transitions',
                description: 'Seamless shift between near and intermediate vision',
                icon: '🔄',
                color: 'from-teal-500 to-teal-600'
              },
              {
                title: 'Digital Optimization',
                description: 'Enhanced for digital device use and screen time',
                icon: '💻',
                color: 'from-emerald-400 to-teal-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} text-white flex items-center justify-center text-2xl shadow-lg`}>
                  {feature.icon}
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Experience the Difference</h2>
            <p className="text-xl text-gray-300">Smart Add Technology enhances your vision in every situation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Digital Device Comfort',
                description: 'Reduced eye strain during extended screen time',
                icon: '📱',
                color: 'bg-emerald-900/30 text-emerald-400 border border-emerald-500/20'
              },
              {
                title: 'Reading Ease',
                description: 'Clear, comfortable vision for books and documents',
                icon: '📖',
                color: 'bg-teal-900/30 text-teal-400 border border-teal-500/20'
              },
              {
                title: 'Everyday Activities',
                description: 'Natural vision for all your daily tasks',
                icon: '👓',
                color: 'bg-emerald-800/30 text-emerald-300 border border-emerald-400/20'
              }
            ].map((benefit, index) => (
              <div key={index} className="group p-8 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center text-2xl mb-6 mx-auto transition-transform group-hover:scale-110`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Smart Add vs. Traditional Lenses</h2>
            
            <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-900/30 text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-4">
                      🚀
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">Smart Add Technology</h3>
                    <p className="text-gray-400">Advanced vision solution</p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      '✓ Dynamic power adjustment',
                      '✓ Seamless transitions',
                      '✓ Optimized for digital use',
                      '✓ Reduced eye strain',
                      '✓ All-day comfort'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-200">{item.replace('✓', '').trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-gray-800/30">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-700/50 text-gray-400 flex items-center justify-center text-2xl mx-auto mb-4">
                      👓
                    </div>
                    <h3 className="text-2xl font-bold text-gray-400 mb-2">Traditional Lenses</h3>
                    <p className="text-gray-500">Standard vision correction</p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      '✗ Fixed power zones',
                      '✗ Noticeable transitions',
                      '✗ Not optimized for screens',
                      '✗ Can cause eye strain',
                      '✗ May require adaptation'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-400">{item.replace('✗', '').trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Smarter Vision?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the future of vision with Smart Add Technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
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