// app/services/video-production/page.tsx
import type { Metadata } from 'next';
import VideoProductionClient from './client';

export const metadata: Metadata = {
  title: 'Professional Video Production Services in Ottawa',
  description: 'Professional video production services in Ottawa. Brand videos, commercials, social media content,and corporate storytellingthat captivates audiences.',
  keywords: [
    'video production Ottawa',
    'brand video production',
    'commercial production',
    'corporate video services',
    'social media video',
  ],
  alternates: {
    canonical: 'https://www.lomediastudio.com/services/video-production',
  },
  openGraph: {
    title: 'Professional Video Production Services in Ottawa | LoMediaStudio',
    description: 'Professional video content that captivates audiences and converts viewers into customers.',
    url: 'https://www.lomediastudio.com/services/video-production',
    siteName: 'LoMediaStudio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
        width: 1200,
        height: 630,
        alt: 'Video Production Services in Ottawa',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Video Production Services in Ottawa | LoMediaStudio',
    description: 'Professional video content that captivates audiences and converts viewers into customers.',
    images: ['https://images.unsplash.com/photo-1492691527719-9d1e07e534b4'],
  },
};

export default function Page() {
  return <VideoProductionClient />;
}