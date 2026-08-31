// app/blog/page.tsx
import { Metadata } from 'next';
import { allBlogPosts } from '@/data/blogs';
import BlogClient from './BlogClient';

export const generateMetadata = (): Metadata => {
  return {
    title: "Blog",
    description:
      "Expert insights on email marketing, video production, social media content, branding strategies, and professional media tips for businesses in Ottawa, Canada.",
    keywords: [
      "email marketing", "video production Ottawa", "social media content",
      "digital marketing strategy", "Ottawa business", "content creation",
      "brand strategy", "high converting emails", "media strategy", "Ottawa marketing",
    ],
    authors: [{ name: "LoMediaStudio" }],
    alternates: {
      canonical: "/blog",
    },
    openGraph: {
      title: "Blog | LoMediaStudio",
      description:
        "Discover proven strategies in email marketing, video content, social media,and media production.",
      url: "https://www.lomediastudio.com/blog",
      siteName: "LoMediaStudio",
      images: [{ url: allBlogPosts[0].image, width: 2071, height: 1380, alt: "LoMediaStudio Blog" }],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | LoMediaStudio",
      description:
        "Discover proven strategies in email marketing, video content, social media,and media production.",
      images: [allBlogPosts[0].image],
    },
  };
};

export default function BlogPage() {
  return <BlogClient blogPosts={allBlogPosts} />;
}