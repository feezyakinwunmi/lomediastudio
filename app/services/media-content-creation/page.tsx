// app/services/media-content-creation/page.tsx
import type { Metadata } from 'next';
import MediaContentCreationClient from './client';

export const metadata: Metadata = {
  title: 'Media Content Creation Services in Ottawa',
  description: 'Professional media content creation services in Ottawa. Drive engagement, build authority & convert your audience with strategic video, social media & visual content that performs.',
  keywords: 'media content creation Ottawa, content creation services, video production Ottawa, social media content, visual content creation',
  openGraph: {
    title: 'Media Content Creation Services in Ottawa | LO Media Studio',
    description: 'Drive engagement, build authority & convert your audience with strategic media content that performs.',
    url: 'https://www.lomediastudio.com/services/media-content-creation',
    siteName: 'LoMediaStudio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
        width: 1200,
        height: 630,
        alt: 'Media Content Creation Services',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media Content Creation Services in Ottawa | LoMediaStudio',
    description: 'Drive engagement, build authority & convert your audience with strategic media content.',
    images: ['https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7'],
  },
  alternates: {
    canonical: 'https://www.lomediastudio.com/services/media-content-creation',
  },
};

export default function MediaContentCreationPage() {
  return <MediaContentCreationClient />;
}