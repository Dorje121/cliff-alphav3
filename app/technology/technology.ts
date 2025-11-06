export type Technology = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  video?: string;
  technology?: {
    title: string;
    description: string;
    benefits: Array<{ title: string; description: string }>;
  };
};

export const technologyData: Record<string, Technology> = {
  'digital-ray-path-technology': {
    id: '01',
    slug: 'digital-ray-path-technology',
    title: 'Digital Ray Path Technology™',
    subtitle: 'Better Vision at every point on the lens',
    description: 'Lenses calculated with this technology method provide a better visual experience regardless of the prescription or frame selected.',
    features: [
      'Advanced digital lens design',
      'Wider field of vision',
      'Reduced eye strain',
      'Enhanced visual clarity',
      'Personalized optimization'
    ],
    benefits: [
      'Sharper vision at all distances',
      'Reduced peripheral distortion',
      'Improved contrast and clarity',
      'Enhanced comfort for extended wear',
      'Personalized to your prescription'
    ],
    image: '/homeimage/smart.png',
    technology: {
      title: 'Digital Ray Path Technology',
      description: 'Our Digital Ray Path Technology uses advanced algorithms to calculate the precise path of light through the lens, ensuring optimal focus and clarity at every point.',
      benefits: [
        { title: 'Enhanced Precision', description: 'Digital surfacing for accurate vision correction' },
        { title: 'Wider Viewing Area', description: 'Expanded clear zones for better peripheral vision' },
        { title: 'Reduced Distortion', description: 'Minimized peripheral distortion for natural vision' }
      ]
    }
  },
  'smart-add-technology': {
    id: '02',
    slug: 'smart-add-technology',
    title: 'Smart Add Technology™',
    subtitle: 'Adaptive Vision Solution',
    description: 'Intelligent lens technology that automatically adapts to different lighting conditions for optimal vision in any environment.',
    features: [
      'Light-adaptive technology',
      'Seamless transition between distances',
      'Reduced eye fatigue',
      'Enhanced depth perception',
      'Wider reading zones'
    ],
    benefits: [
      'Smooth vision at all distances',
      'Reduced need for multiple pairs',
      'Enhanced comfort for digital device use',
      'Natural vision experience',
      'Ideal for active lifestyles'
    ],
    image: '/homeimage/raypath.png',
    technology: {
      title: 'Smart Add Technology',
      description: 'Our Smart Add Technology dynamically adjusts the lens power to provide clear vision at all distances, with smooth transitions between near, intermediate, and distance vision.',
      benefits: [
        { title: 'Adaptive Focus', description: 'Automatically adjusts to different viewing distances' },
        { title: 'Wider Viewing Zones', description: 'Expanded areas for comfortable vision at all distances' },
        { title: 'Faster Adaptation', description: 'Reduced adaptation time for new wearers' }
      ]
    }
  },
  // Other technology items...
  'cdt-continuum-design-8k-definition': {
    id: '06',
    slug: 'cdt-continuum-design-8k-definition',
    title: 'CDT® (Continuum Design) 8K Definition',
    subtitle: 'Ultra-High Definition Vision',
    description: 'Experience crystal-clear vision with our advanced 8K definition lens technology, providing unparalleled sharpness and clarity in all lighting conditions.',
    features: [
      '8K ultra-high definition',
      'Enhanced contrast and clarity',
      'Wider field of view',
      'Reduced glare and reflections',
      'Improved night vision'
    ],
    benefits: [
      'Sharper, clearer vision',
      'Enhanced depth perception',
      'Better low-light performance',
      'Reduced eye strain',
      'Superior visual comfort'
    ],
    image: '/homeimage/8k.png',
    technology: {
      title: '8K Definition Technology',
      description: 'Our 8K Definition Technology delivers the highest resolution vision available, with pixel-perfect clarity and contrast that brings every detail into focus.',
      benefits: [
        { title: 'Crystal Clear Vision', description: 'Experience visuals with unprecedented clarity' },
        { title: 'Enhanced Contrast', description: 'Improved distinction between colors and details' },
        { title: 'Wider Viewing Angles', description: 'Consistent image quality across the entire lens' }
      ]
    }
  }
};

export const getAllTechnologySlugs = () => {
  return Object.keys(technologyData);
};

export const getTechnologyBySlug = (slug: string): Technology | undefined => {
  return technologyData[slug];
};
