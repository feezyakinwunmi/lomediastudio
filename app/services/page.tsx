// app/services/page.tsx
import type { Metadata } from 'next';
import ServicesClient from './client';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Discover LoMediaStudio services in Ottawa, Canada — video production, photography, digital marketing, email marketing, storytelling, visual brand development, media content creation and creative direction.',
  keywords: [
    'media services Ottawa',
    'video production services',
    'photography services Ottawa',
    'digital marketing services',
    'brand development services',
    'content creation services',
    'email marketing services',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'LoMediaStudio',
    title: 'Our Services | LoMediaStudio',
    description:
      'Video production, photography, digital marketing, branding and content creation services in Ottawa, Canada.',
    url: 'https://www.lomediastudio.com/services',
    images: [{ url: '/bw.jpg', width: 1200, height: 675, alt: 'LoMediaStudio services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | LoMediaStudio',
    description: 'Video production, photography, digital marketing, branding and content services in Ottawa.',
    images: ['/bw.jpg'],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}