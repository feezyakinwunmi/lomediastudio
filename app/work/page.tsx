// app/work/page.tsx
import type { Metadata } from 'next';
import WorkClient from './client';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Explore LoMediaStudio portfolio — video production, photography, branding, web creation and recording studio projects for brands in Ottawa, Canada and worldwide.',
  keywords: [
    'LoMediaStudio portfolio',
    'video production portfolio',
    'branding projects Ottawa',
    'media studio work',
    'content creation portfolio',
  ],
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'LoMediaStudio',
    title: 'Our Work | LoMediaStudio',
    description: 'Explore our portfolio — video production, photography, branding and content creation projects.',
    url: 'https://www.lomediastudio.com/work',
    images: [{ url: '/bw.jpg', width: 1200, height: 675, alt: 'LoMediaStudio portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | LoMediaStudio',
    description: 'Explore our portfolio — video production, photography, branding and content creation projects.',
    images: ['/bw.jpg'],
  },
};

export default function WorkPage() {
  return <WorkClient />;
}