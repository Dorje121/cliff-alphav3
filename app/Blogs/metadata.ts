import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Cliff Lens - Vision Technology Insights',
  description: 'Discover the latest in lens technology, eye health, and vision science through our expert insights and cutting-edge research.',
  keywords: 'cliff lens, blog, vision technology, eye health, progressive lenses, lens innovation, eye care',
  openGraph: {
    title: 'Blog | Cliff Lens - Vision Technology Insights',
    description: 'Discover the latest in lens technology, eye health, and vision science through our expert insights and cutting-edge research.',
    type: 'website',
    images: [
      {
        url: '/ai1.jpg',
        width: 1200,
        height: 630,
        alt: 'Cliff Lens Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Cliff Lens - Vision Technology Insights',
    description: 'Discover the latest in lens technology, eye health, and vision science.',
    images: ['/ai1.jpg']
  }
};
