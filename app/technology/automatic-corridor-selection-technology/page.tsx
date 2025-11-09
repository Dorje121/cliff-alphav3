import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatic Corridor Selection Technology | Cliff Lenses',
  description: 'Experience precision vision with our Automatic Corridor Selection Technology, optimizing your visual clarity for every distance and lighting condition.'
};

export default function AutomaticCorridorPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-gray-800 text-emerald-400 rounded-full text-sm font-medium mb-4">
              INNOVATIVE VISION TECHNOLOGY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Automatic Corridor Selection
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Intelligent vision optimization for seamless transitions between near and far distances
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-12 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Precision Vision Optimization
              </h2>
              <p className="text-lg text-gray-300">
                Our Automatic Corridor Selection Technology intelligently adjusts the optical path to provide optimal visual clarity at every distance, reducing eye strain and providing a more natural viewing experience.
              </p>
              <ul className="space-y-3">
                {[
                  'Dynamic optical path adjustment',
                  'Reduced eye fatigue',
                  'Enhanced depth perception',
                  'Seamless distance transitions',
                  'Personalized visual experience'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👁️</div>
                  <p>Automatic Corridor Selection<br />Technology Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Technology Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Adaptive Optics',
                description: 'Automatically adjusts to your visual needs',
                icon: '🔍',
                color: 'text-emerald-400'
              },
              {
                title: 'Precision Engineering',
                description: 'Microscopic accuracy in optical path calculation',
                icon: '⚙️',
                color: 'text-cyan-400'
              },
              {
                title: 'Smart Transitions',
                description: 'Smooth adaptation between different distances',
                icon: '🔄',
                color: 'text-emerald-400'
              },
              {
                title: 'Reduced Distortion',
                description: 'Minimized peripheral distortion',
                icon: '👁️',
                color: 'text-cyan-400'
              },
              {
                title: 'Enhanced Comfort',
                description: 'Reduced eye strain during extended use',
                icon: '😌',
                color: 'text-emerald-400'
              },
              {
                title: 'All-Day Performance',
                description: 'Consistent visual quality in all conditions',
                icon: '⏱️',
                color: 'text-cyan-400'
              }
            ].map((feature, index) => (
              <div key={index} className={`p-6 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-${feature.color.split('-')[1]}-400 hover:shadow-lg hover:shadow-${feature.color.split('-')[1]}-400/10 transition-all`}>
                <div className={`text-4xl mb-4 ${feature.color}`}>{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-cyan-400 transform -translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    title: 'Eye Movement Analysis',
                    description: 'Advanced sensors track your eye movements to understand your natural viewing patterns.',
                    icon: '👁️',
                    side: 'left'
                  },
                  {
                    title: 'Distance Calculation',
                    description: 'Precise algorithms calculate the optimal corridor based on your focus distance.',
                    icon: '📏',
                    side: 'right'
                  },
                  {
                    title: 'Optical Adjustment',
                    description: 'The lens automatically adjusts to provide the clearest possible vision for your current activity.',
                    icon: '🔍',
                    side: 'left'
                  },
                  {
                    title: 'Seamless Transition',
                    description: 'Smoothly transitions between different distances without distracting image jumps.',
                    icon: '🔄',
                    side: 'right'
                  }
                ].map((step, index) => (
                  <div key={index} className={`relative flex ${step.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white z-10 mx-auto md:mx-0">
                      <span className="text-xl">{step.icon}</span>
                    </div>
                    <div className={`flex-1 ${step.side === 'left' ? 'md:ml-8' : 'md:mr-8'} mt-6 md:mt-0`}>
                      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-emerald-400/50 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience the Difference</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Enhanced Visual Comfort',
                description: 'Reduces eye strain by automatically adjusting to your visual needs throughout the day.'
              },
              {
                title: 'Improved Productivity',
                description: 'Spend less time refocusing and more time being productive with seamless transitions.'
              },
              {
                title: 'Natural Vision',
                description: 'Experience vision that feels more natural and requires less conscious adjustment.'
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-400/5 transition-all">
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Ready to Experience the Future of Vision?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule an appointment to see how Automatic Corridor Selection Technology can enhance your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Book a Consultation
            </button>
            <button className="border-2 border-gray-400 text-gray-200 px-8 py-3 rounded-full font-semibold hover:bg-white/5 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}