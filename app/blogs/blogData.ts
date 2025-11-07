// Available images from the public folder
const availableImages = [
  "/ai0.jpg",
  "/ai1.jpg",
  "/ai2.jpg",
  "/ai3.jpg",
  "/ai4.jpg",
  "/blur.jpeg",
  "/blurr.jpg",
  "/c1.jpeg",
  "/c2.jpeg",
  "/c3.jpeg",
  "/c4.jpeg",
  "/c5.jpeg",
  "/c6.jpeg",
  "/c7.jpeg",
  "/c8.jpeg",
  "/c9.jpeg",
  "/benefits.jpeg",
  "/bluesafe/Bluesafe.jpg",
  "/bluesafe/blue.png",
  "/bluesafe/blue1.png",
  "/bluesafe/clear.png",
  "/bluesafe/ctalist.jpg",
  "/bluesafe/drive.png",
  "/bluesafe/driveclear.png",
  "/bluesafe/image.png",
  "/bluesafe/lense.jpg",
  "/bluesafe/lense.png",
  "/bluesafe/photoz.jpg",
  "/bluesafe/stock-Cliff.jpg",
  "/bluesafecoatings/blue.png",
  "/bluesafecoatings/nox.png"
];

// Function to get a consistent image based on a key (slug or author name)
const getConsistentImage = (key: string): string => {
  // Create a hash of the key to get a consistent index
  const hash = key.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
  
  // Use the hash to get a consistent index within the available images range
  const index = Math.abs(hash) % availableImages.length;
  return availableImages[index];
};

// Alias for backward compatibility
const getImageForPost = getConsistentImage;

export { getConsistentImage };

interface BlogPost {
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
    category: "Lenses",
    author: "Barb Malobabich",
    authorBio: "Professional Education Manager at IOT",
    authorImage: getConsistentImage("author-barb-malobabich"),
    image: getImageForPost("progressive-lens-design"),
    content: `
      <p>Progressive lenses first became a reality in the early 20th century, driven by technological advancements that addressed the limitations of bifocal lenses. Breakthroughs came from early inventors in the 1900s-1920s, but it wasn't until the 1950s that commercial success followed. The development of early freeform technology marked a turning point, making progressive lens manufacturing easier and more accurate.</p>
      <p>This innovation has propelled progressive lenses forward, offering patients seamless multifocal corrections with greater clarity and convenience. This article explores the technical aspects of progressive lens design, modern advancements, and best practices for prescribing these lenses to patients.</p>
      <h2>Fundamentals of Progressive Lens Design</h2>
      <p>Understanding the optical principles behind progressive lenses is essential for both their manufacturing and effective prescription. These foundational concepts serve as the building blocks for creating innovative, high-performing lens designs that meet diverse patient needs.</p>
    `,
  },
  {
    slug: "blue-light-lenses",
    title: "The Truth About Blue Light Lenses",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    category: "Eye Health",
    author: "Dr. Sarah Chen",
    authorBio: "Optometrist & Digital Eye Strain Specialist",
    authorImage: getConsistentImage("author-sarah-chen"),
    image: getImageForPost("blue-light-lenses"),
    content: `
      <p>In our increasingly digital world, blue light exposure has become a growing concern. This article examines the science behind blue light, its potential effects on eye health, and whether blue light filtering lenses are truly beneficial.</p>
      <h2>Understanding Blue Light</h2>
      <p>Blue light is part of the visible light spectrum with high energy wavelengths. While natural sunlight is the largest source, digital screens have significantly increased our exposure to artificial blue light.</p>
    `,
  },
  {
    slug: "contact-lens-technology",
    title: "Breakthroughs in Contact Lens Technology",
    date: "Mar 3, 2025",
    readTime: "6 min read",
    category: "Contact Lenses",
    author: "Dr. Michael Torres",
    authorBio: "Research Scientist at VisionTech Innovations",
    authorImage: getConsistentImage("author-michael-torres"),
    image: getImageForPost("contact-lens-technology"),
    content: `
      <p>The contact lens industry has seen remarkable advancements in recent years. From smart lenses that monitor glucose levels to extended-wear options that provide unparalleled comfort, the future of contact lenses is here.</p>
      <h2>Smart Contact Lenses</h2>
      <p>Emerging technologies are transforming contact lenses into sophisticated medical devices. Learn about the latest developments that are changing how we think about vision correction and health monitoring.</p>
    `,
  },
  {
    slug: "children-vision-care",
    title: "Essential Vision Care for School-Aged Children",
    date: "Apr 10, 2025",
    readTime: "8 min read",
    category: "Pediatric Eye Care",
    author: "Dr. Emily Johnson",
    authorBio: "Pediatric Ophthalmologist at Children's Vision Center",
    authorImage: getConsistentImage("author-emily-johnson"),
    image: getImageForPost("children-vision-care"),
    content: `
      <p>Good vision is crucial for a child's learning and development. This comprehensive guide covers the signs of vision problems in children, recommended eye exam schedules, and how to protect young eyes in the digital age.</p>
      <h2>Early Detection is Key</h2>
      <p>Many vision problems in children go undetected because kids often don't realize they're seeing differently than others. Learn the subtle signs that may indicate your child is experiencing vision difficulties.</p>
    `,
  },
  {
    slug: "digital-eye-strain",
    title: "Combatting Digital Eye Strain in the Modern World",
    date: "May 22, 2025",
    readTime: "6 min read",
    category: "Eye Health",
    author: "Dr. James Wilson",
    authorBio: "Digital Vision Specialist at TechSight Institute",
    authorImage: getConsistentImage("author-james-wilson"),
    image: getImageForPost("digital-eye-strain"),
    content: `
      <p>With the average person spending over 7 hours a day in front of screens, digital eye strain has become a widespread issue. This article explores practical solutions and preventive measures to protect your eyes in our screen-dominated world.</p>
      <h2>Understanding Digital Eye Strain</h2>
      <p>Learn about the symptoms, causes, and long-term effects of prolonged screen time on your vision, and discover effective strategies to reduce digital eye strain in your daily life.</p>
    `,
  },
  {
    slug: "sports-vision-optics",
    title: "Enhancing Athletic Performance Through Sports Vision Training",
    date: "Jun 5, 2025",
    readTime: "7 min read",
    category: "Sports Vision",
    author: "Dr. Robert Davis",
    authorBio: "Sports Vision Specialist at Peak Performance Vision",
    authorImage: getConsistentImage("author-robert-davis"),
    image: getImageForPost("sports-vision-optics"),
    content: `
      <p>Athletic performance isn't just about physical ability - visual skills play a crucial role in sports success. Discover how specialized vision training can give athletes a competitive edge and improve reaction times, depth perception, and overall performance.</p>
      <h2>Vision Training Techniques</h2>
      <p>Explore the latest vision training methods used by professional athletes to enhance their visual processing, hand-eye coordination, and on-field decision making.</p>
    `,
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
