// Image assets
export const availableImages = [
  "/ai0.jpg", "/ai1.jpg", "/ai2.jpg", "/ai3.jpg", "/ai4.jpg",
  "/blur.jpeg", "/blurr.jpg", "/c1.jpeg", "/c2.jpeg", "/c3.jpeg",
  "/c4.jpeg", "/c5.jpeg", "/c6.jpeg", "/c7.jpeg", "/c8.jpeg",
  "/c9.jpeg", "/benefits.jpeg", "/bluesafe/Bluesafe.jpg",
  "/bluesafe/blue.png", "/bluesafe/blue1.png", "/bluesafe/clear.png",
  "/bluesafe/ctalist.jpg", "/bluesafe/drive.png", "/bluesafe/driveclear.png",
  "/bluesafe/image.png", "/bluesafe/lense.jpg", "/bluesafe/lense.png",
  "/bluesafe/photoz.jpg", "/bluesafe/stock-Cliff.jpg",
  "/bluesafecoatings/blue.png", "/bluesafecoatings/nox.png"
];

// Function to get a consistent image based on a key
export const getConsistentImage = (key: string): string => {
  const hash = key.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
  
  const index = Math.abs(hash) % availableImages.length;
  return availableImages[index];
};

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  authorBio: string;
  authorImage: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "progressive-lens-design",
    title: "Advanced Insights into Progressive Lens Design",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    category: "Lens Technology",
    author: "Dr. Sarah Chen",
    authorBio: "Optometrist & Lens Technology Specialist",
    authorImage: getConsistentImage("author-sarah-chen"),
    image: getConsistentImage("progressive-lens-design"),
    content: `
      <p>Progressive lenses have revolutionized vision correction by providing a seamless transition between different prescriptions. This article explores the latest advancements in progressive lens technology and how they're changing the way we see the world.</p>
      <h2>Understanding Progressive Lenses</h2>
      <p>Learn about the science behind progressive lenses and how they differ from traditional bifocals and trifocals.</p>
    `,
  },
  {
    slug: "blue-light-protection",
    title: "The Truth About Blue Light Protection",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    category: "Eye Health",
    author: "Dr. Michael Johnson",
    authorBio: "Ophthalmologist & Digital Eye Strain Expert",
    authorImage: getConsistentImage("author-michael-johnson"),
    image: getConsistentImage("blue-light-protection"),
    content: `
      <p>With the increasing use of digital devices, blue light protection has become a hot topic. But how much do we really need to worry about it?</p>
      <h2>What the Research Says</h2>
      <p>We break down the latest research on blue light and its effects on eye health and sleep patterns.</p>
    `,
  },
  {
    slug: "contact-lens-innovations",
    title: "The Future of Contact Lenses",
    date: "Mar 22, 2025",
    readTime: "6 min read",
    category: "Contact Lenses",
    author: "Dr. Emily Rodriguez",
    authorBio: "Contact Lens Specialist & Researcher",
    authorImage: getConsistentImage("author-emily-rodriguez"),
    image: getConsistentImage("contact-lens-innovations"),
    content: `
      <p>From smart lenses to extended wear options, contact lens technology is advancing at an unprecedented pace. Discover what's new in the world of contact lenses.</p>
      <h2>Smart Contact Lenses</h2>
      <p>How smart contact lenses are transforming not just vision correction, but also health monitoring and augmented reality experiences.</p>
    `,
  }
];

// Helper function to get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
