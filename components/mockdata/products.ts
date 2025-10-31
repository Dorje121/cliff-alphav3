export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  slug: string;
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
    description: 'Photochromic lenses that adapt to changing light conditions automatically',
    features: [
      'Light-adaptive technology',
      'UV protection',
      'Scratch-resistant coating',
      'Glare reduction'
    ],
    image: '/homeimage/progressive.jpg',
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
    title: 'DYNAMIC PROGRESSIVE',
    subtitle: 'Premium Optical Excellence',
    description: 'Specialized lenses optimized for driving and enhanced road visibility',
    features: [
      'Wider viewing zones',
      'Enhanced distance vision',
      'Reduced distortion',
      'Anti-glare technology'
    ],
    image: '/product/9.jpg',
    benefits: [
      'Improved peripheral vision',
      'Better depth perception',
      'Reduced eye strain',
      'Enhanced night vision'
    ],
    slug: 'dynamic-progressive',
    durabilityAndCare: {
      title: 'CLIFF DuraVision Lens Coatings',
      subtitle: 'Durability & Care',
      description: 'Like superpowers for your glasses.'
    }
  },
  'zenn-series': {
    id: '04',
    title: 'ZENN SERIES',
    subtitle: 'Premium Optical Excellence',
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