// app/services/creative-direction/page.tsx
import type { Metadata } from 'next';
import CreativeDirectionClient from './client';

export const metadata: Metadata = {
  title: 'Creative Direction Services in Ottawa',
  description: 'Professional creative direction services in Ottawa. Strategic creative oversight, brand positioning, campaign conceptualization,and art direction.',
  keywords: [
    'creative direction Ottawa',
    'art direction services',
    'brand positioning',
    'campaign conceptualization',
    'creative consulting',
  ],
  alternates: {
    canonical: 'https://www.lomediastudio.com/services/creative-direction',
  },
  openGraph: {
    title: 'Creative Direction Services in Ottawa | LoMediaStudio',
    description: 'Expert creative guidance to elevate your brand and ensure consistent, impactful messaging across all platforms.',
    url: 'https://www.lomediastudio.com/services/creative-direction',
    siteName: 'LoMediaStudio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
        width: 1200,
        height: 630,
        alt: 'Creative Direction Services in Ottawa',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Direction Services in Ottawa | LoMediaStudio',
    description: 'Expert creative guidance to elevate your brand and ensure consistent, impactful messaging.',
    images: ['https://images.unsplash.com/photo-1557804506-669a67965ba0'],
  },
};

export default function Page() {
  return <CreativeDirectionClient />;
}