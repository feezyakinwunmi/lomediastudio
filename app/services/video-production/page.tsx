// app/services/video-production/page.tsx
import type { Metadata } from 'next';
import VideoProductionClient from './client';

export const metadata: Metadata = {
  title: 'Professional Video Production Services in Ottawa | LO Media Studio',
  description: 'Professional video production services in Ottawa. Brand videos, commercials, social media content, and corporate storytelling that captivates audiences.',
  openGraph: {
    title: 'Professional Video Production Services in Ottawa | LO Media Studio',
    description: 'Professional video content that captivates audiences and converts viewers into customers.',
    images: ['https://images.unsplash.com/photo-1492691527719-9d1e07e534b4'],
  },
};

export default function Page() {
  return <VideoProductionClient />;
}