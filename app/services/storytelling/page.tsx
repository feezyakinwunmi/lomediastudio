// app/services/storytelling/page.tsx
import type { Metadata } from 'next';
import StorytellingClient from './client';

export const metadata: Metadata = {
  title: 'Brand Storytelling Services in Ottawa',
  description: 'Professional brand storytelling services in Ottawa. Transform your message into meaningful stories that connect, inspire,and drive action.',
  keywords: [
    'brand storytelling Ottawa',
    'storytelling services',
    'narrative strategy',
    'brand narrative',
    'content storytelling',
  ],
  alternates: {
    canonical: 'https://www.lomediastudio.com/services/storytelling',
  },
  openGraph: {
    title: 'Brand Storytelling Services in Ottawa | LoMediaStudio',
    description: 'Transform your message into meaningful stories that connect, inspire,and drive action.',
    url: 'https://www.lomediastudio.com/services/storytelling',
    siteName: 'LoMediaStudio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff',
        width: 1200,
        height: 630,
        alt: 'Brand Storytelling Services in Ottawa',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Storytelling Services in Ottawa | LoMediaStudio',
    description: 'Transform your message into meaningful stories that connect, inspire,and drive action.',
    images: ['https://images.unsplash.com/photo-1455849318743-b2233052fcff'],
  },
};

export default function Page() {
  return <StorytellingClient />;
}