// app/blog/page.tsx
import { Metadata } from 'next';
import BlogClient from './BlogClient';

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Write High Converting Email Sequences Without Annoying Your Audience",
    slug: "how-to-write-high-converting-email-sequences-without-annoying-your-audience",
    excerpt: "Master the art of writing email sequences that convert while keeping your audience happy and engaged.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070",
    category: "Email Marketing",
    readTime: "10 min read",
    date: "May 18, 2026",
    author: "LOPublications"
  },
  {
    id: 2,
    title: "5 Signs Your Ottawa Business Needs a Professional Media Strategy",
    slug: "5-signs-your-ottawa-business-needs-professional-media-strategy",
    excerpt: "Is your Ottawa business struggling with visibility? Here are 5 clear signs it's time to invest in a professional media strategy.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071",
    category: "Strategy",
    readTime: "8 min read",
    date: "May 15, 2026",
    author: "LOPublications"
  },
  {
    id: 3,
    title: "How Ottawa CEOs Can Build Authority Using Strategic Video Content",
    slug: "how-ottawa-ceos-can-build-authority-using-strategic-video-content",
    excerpt: "Why top Ottawa CEOs are using strategic video content to establish authority and grow their influence.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
    category: "Video Production",
    readTime: "9 min read",
    date: "May 12, 2026",
    author: "LOPublications"
  },
  {
    id: 4,
    title: "Social Media Content Creation for Ottawa Businesses",
    slug: "social-media-content-creation-for-ottawa-businesses",
    excerpt: "How Ottawa businesses can create engaging, locally relevant social media content that drives real growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    category: "Social Media",
    readTime: "7 min read",
    date: "May 10, 2026",
    author: "LOPublications"
  },
    {
    id: 5,
    title: "5 Ways Video Marketing Helps Ottawa Businesses Grow Faster",
    slug: "5-ways-video-marketing-helps-ottawa-businesses-grow-faster",
    excerpt: "Video marketing has become such a valuable tool for businesses looking to grow.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070",
    category: "Video Production",
    readTime: "9 min read",
    date: "May 26, 2026",
    author: "LOPublications"
  },

  {
    id: 6,
    title: "Instagram Reels for Ottawa Brands: Strategy That Converts",
    slug: "instagram-reels-for-ottawa-brands",
    excerpt: "If your brand is still posting static graphics while competitors dominate feeds with compelling Reels, you are already behind.",
    image: "https://images.unsplash.com/photo-1611162618071-6f8a0f9e5b0b?q=80&w=2074",
    category: "Social Media",
    readTime: "9 min read",
    date: "May 26, 2026",
    author: "LOPublications"
  }
];

export const generateMetadata = (): Metadata => {
  return {
    title: "Blog | Creative Strategies & Marketing Insights | Ottawa",
    description: "Expert insights on email marketing, video production, social media content, branding strategies, and professional media tips for businesses in Ottawa.",
    keywords: [
      "email marketing", "video production Ottawa", "social media content", 
      "digital marketing strategy", "Ottawa business", "content creation", 
      "brand strategy", "high converting emails", "media strategy", "Ottawa marketing"
    ],
    authors: [{ name: "LOPublications" }],
    openGraph: {
      title: "Blog - Creative Strategies & Marketing Insights",
      description: "Discover proven strategies in email marketing, video content, social media, and media production.",
      images: [{ url: blogPosts[0].image, alt: "Marketing Blog" }],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: [blogPosts[0].image],
    },
    alternates: {
      canonical: "/blog",
    },
  };
};

export default function BlogPage() {
  return <BlogClient blogPosts={blogPosts} />;
}