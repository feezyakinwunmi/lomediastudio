// app/services/visual-brand-development/page.tsx
import type { Metadata } from 'next';
import VisualBrandDevelopmentClient from './client';

export const metadata: Metadata = {
  title: 'Visual Brand Development Services in Ottawa',
  description: 'Professional visual brand development services in Ottawa. Logo design, brand identity, color systems,and complete brand guidelines for businesses.',
  keywords: [
    'brand development Ottawa',
    'logo design services',
    'brand identity design',
    'brand guidelines',
    'visual identity',
  ],
  alternates: {
    canonical: 'https://www.lomediastudio.com/services/visual-brand-development',
  },
  openGraph: {
    title: 'Visual Brand Development Services in Ottawa | LoMediaStudio',
    description: 'Create a powerful, strategic visual identity that positions your brand for visibilityand growth.',
    url: 'https://www.lomediastudio.com/services/visual-brand-development',
    siteName: 'LoMediaStudio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
        width: 1200,
        height: 630,
        alt: 'Visual Brand Development Services in Ottawa',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visual Brand Development Services in Ottawa | LoMediaStudio',
    description: 'Create a powerful, strategic visual identity that positions your brand for visibilityand growth.',
    images: ['https://images.unsplash.com/photo-1561070791-2526d30994b5'],
  },
};

export default function Page() {
  return <VisualBrandDevelopmentClient />;
}