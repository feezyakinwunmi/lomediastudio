// app/services/digital-marketing/page.tsx
import type { Metadata } from 'next';
import DigitalMarketingClient from './client';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Ottawa',
  description: 'Data-driven digital marketing services in Ottawa. SEO, PPC, social media marketing & more. Grow your brand with measurable results.',
  keywords: [
    'digital marketing Ottawa',
    'SEO services Ottawa',
    'PPC advertising',
    'social media marketing',
    'online advertising',
  ],
  alternates: {
    canonical: 'https://www.lomediastudio.com/services/digital-marketing',
  },
  openGraph: {
    title: 'Digital Marketing Services in Ottawa | LoMediaStudio',
    description: 'Data-driven digital marketing solutions designed to deliver measurable resultsand grow your brand.',
    url: 'https://www.lomediastudio.com/services/digital-marketing',
    siteName: 'LoMediaStudio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services in Ottawa',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services in Ottawa | LoMediaStudio',
    description: 'Data-driven digital marketing solutions designed to deliver measurable resultsand grow your brand.',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f'],
  },
};

export default function Page() {
  return <DigitalMarketingClient />;
}