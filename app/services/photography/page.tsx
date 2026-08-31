// app/services/photography/page.tsx
import type { Metadata } from 'next';
import PhotographyClient from './client';

export const metadata: Metadata = {
  title: 'Professional Photography Services in Ottawa',
  description: 'Professional brand photography services in Ottawa. Corporate headshots, product photography, event coverage & personal branding sessions.',
  keywords: [
    'photography services Ottawa',
    'corporate headshots',
    'product photography',
    'event photography',
    'personal branding photoshoot',
  ],
  alternates: {
    canonical: 'https://www.lomediastudio.com/services/photography',
  },
  openGraph: {
    title: 'Professional Photography Services in Ottawa | LoMediaStudio',
    description: "Professional photography that captures your brand's essenceand elevates your visual identity.",
    url: 'https://www.lomediastudio.com/services/photography',
    siteName: 'LoMediaStudio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
        width: 1200,
        height: 630,
        alt: 'Photography Services in Ottawa',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Photography Services in Ottawa | LoMediaStudio',
    description: "Professional photography that captures your brand's essenceand elevates your visual identity.",
    images: ['https://images.unsplash.com/photo-1492691527719-9d1e07e534b4'],
  },
};

export default function Page() {
  return <PhotographyClient />;
}