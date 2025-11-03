interface TechnologyBenefit {
  title: string;
  description: string;
}

interface TechnologySection {
  title: string;
  description: string;
  benefits: TechnologyBenefit[];
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  video: string;
  slug: string;
  technology?: TechnologySection;
  comparisonImages?: {
    standard: string;
    product: string;
  };
  comparisonLabels?: {
    standard: string;
    product: string;
  };
  durabilityAndCare: {
    title: string;
    subtitle: string;
    description: string;
  };
  professionalContent?: {
    description: string;
    benefits: string[];
    features: string[];
  };
}

export const products: Record<string, Product> = {
  'single-vision': {
    id: '01',
    title: 'Single Vision',
    subtitle: 'Sharper Vision. Smarter Design.',
    description: 'Cliff Single Vision Lenses are engineered to deliver precise, comfortable, and natural vision correction for every lifestyle. Whether for reading, driving, or digital use, each lens is crafted with advanced Digital Ray Path Technology to provide exceptional optical accuracy and clarity.',
    features: [
      'Blue light filtering technology',
      'Reduced digital eye strain',
      'Enhanced contrast and clarity',
      'Anti-reflective coating'
    ],
    image: '/homeimage/singlelense.png',
    video: '/videos/single.webm',
    technology: {
      title: 'Digital Ray Path Technology',
      description: 'Our lenses incorporate advanced Digital Ray Path technology, which precisely calculates and optimizes the path of light through the lens to your eye. This results in sharper, clearer vision with reduced distortion, especially in higher prescriptions.',
      benefits: [
        {
          title: 'Versatile Design',
          description: 'The most versatile design for Single Vision Lenses'
        },
        {
          title: '76% More Stable',
          description: '76% more stable than conventional lenses in higher prescriptions'
        },
        {
          title: 'Superior Vision',
          description: 'Better vision in all gaze directions'
        }
      ]
    },
    benefits: [
      'Perfect for digital device users',
      'Reduces eye fatigue',
      'Improves sleep quality',
      'Enhances visual comfort'
    ],
    slug: 'single-vision',
    comparisonImages: {
      standard: 'single1.png',
      product: 'single2.png'
    },
    comparisonLabels: {
      standard: 'STANDARD LENS',
      product: 'CLIFF SINGLE VISION LENSES'
    },
    durabilityAndCare: {
      title: 'CLIFF DuraVision Lens Coatings',
      subtitle: 'Durability & Care',
      description: 'Like superpowers for your glasses.'
    },
    professionalContent: {
      description: 'Each single vision lens produced by CLIFF is designed with a focus on visual quality, appearance, and wearing comfort. Whether your customers need reading lenses or if you prescribe a solution to correct ametropia – you\'ll find a solution in our portfolio of single vision lenses.',
      benefits: [
        'Benefit from our wide range of single vision products',
        'Perfect solution for various vision correction needs',
        'Ideal for all age groups and lifestyles'
      ],
      features: [
        'Full UV protection as standard',
        'Advanced lens materials',
        'Customizable options available'
      ]
    }
  },
  'versatile-progressive': {
    id: '02',
    title: 'VERSATILE PROGRESSIVE',
    subtitle: 'Premium Optical Excellence',
    image: '/homeimage/progressive.jpg',
    video: '/videos/progressive.webm',
    description: 'Photochromic lenses that adapt to changing light conditions automatically',
    features: [
      'Light-adaptive technology',
      'UV protection',
      'Scratch-resistant coating',
      'Glare reduction'
    ],
    benefits: [
      'Seamless indoor-outdoor transition',
      '100% UV protection',
      'Durable and long-lasting',
      'Enhanced visual clarity'
    ],
    slug: 'versatile-progressive',
    durabilityAndCare: {
      title: 'CLIFF DuraVision Lens Coatings',
      subtitle: 'Durability & Care',
      description: 'Like superpowers for your glasses.'
    }
  },
  'dynamic-progressive': {
    id: '03',
    title: 'Dynamix Progressive',
    subtitle: 'Seamless Vision. Natural Transitions.',
    description: 'Cliff Dynamix Progressive Lenses provide smooth, natural vision at all distances. Experience seamless transitions between near, intermediate, and distance vision with our advanced progressive lens technology, designed for comfort and clarity in every situation.',
    features: [
      'Wider viewing zones',
      'Enhanced distance vision',
      'Reduced distortion',
      'Anti-glare technology'
    ],
    image: '/homeimage/dynamix.png',
    video: '/videos/dynamic.webm',
    technology: {
      title: 'Balance Process Design, Continuum Design Technology (6K Definition), Wear Fit Customization, AdaptEase Technology',
      description: 'Our Dynamix Progressive lenses feature state-of-the-art technology that provides a smooth transition between different vision zones, eliminating the visible lines of traditional bifocals while offering clear vision at all distances.',
      benefits: [
        {
          title: 'Seamless Transitions',
          description: 'Natural vision from near to far without image jumps'
        },
        {
          title: 'Wider Viewing Areas',
          description: 'Expanded vision zones for better peripheral vision'
        },
        {
          title: 'Reduced Distortion',
          description: 'Minimized peripheral distortion for more comfortable vision'
        }
      ]
    },
    benefits: [
      'Improved peripheral vision',
      'Better depth perception',
      'Reduced eye strain',
      'Enhanced night vision',
      'Ideal for active lifestyles'
    ],
    slug: 'dynamic-progressive',
    comparisonImages: {
      standard: 'traditional.png',
      product: 'cliffprogressive.png'
    },
    durabilityAndCare: {
      title: 'CLIFF DuraVision Lens Coatings',
      subtitle: 'Durability & Care',
      description: 'Advanced coatings that protect your lenses and enhance visual clarity.'
    }
  },
  'zenn-series': {
    id: '04',
    title: 'ZENN SERIES',
    subtitle: 'Premium Optical Excellence',
    video: '/videos/zenn.webm',
    description: 'Multi-focal progressive lenses for seamless vision at all distances and visibility',
    features: [
      'Advanced multi-focal technology',
      'Wide viewing zones',
      'Smooth transition between distances',
      'Customized for your prescription'
    ],
    image: '/product/10.jpg',
    benefits: [
      'Crystal clear vision at all distances',
      'Reduced head movement',
      'Natural vision experience',
      'Personalized to your needs'
    ],
    slug: 'zenn-series',
    durabilityAndCare: {
      title: 'CLIFF DuraVision Lens Coatings',
      subtitle: 'Durability & Care',
      description: 'Like superpowers for your glasses.'
    }
  },
  'speciality-lenses': {
    id: '05',
    title: 'SPECIALITY LENSES',
    subtitle: 'Premium Optical Excellence',
    video: '/videos/speciality.webm',
    description: 'Specialized lenses for specific needs and conditions',
    features: [
      'Custom solutions for unique needs',
      'High-index materials',
      'Specialty coatings available',
      'Wide range of options'
    ],
    image: '/product/6.jpg',
    benefits: [
      'Tailored to your specific requirements',
      'Lightweight and comfortable',
      'Enhanced visual performance',
      'Expert consultation available'
    ],
    slug: 'speciality-lenses',
    durabilityAndCare: {
      title: 'CLIFF DuraVision Lens Coatings',
      subtitle: 'Durability & Care',
      description: 'Like superpowers for your glasses.'
    }
  }
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products[slug];
};

export const getAllProducts = (): Product[] => {
  return Object.values(products);
};