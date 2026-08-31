// app/about/page.tsx
import type { Metadata } from 'next';
import AboutClient from './client';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet LoMediaStudio, a media production agency in Ottawa, Canada. Learn about our mission, our team of creatives, and how we turn brands into stories people remember.',
  keywords: [
    'about LoMediaStudio',
    'media agency Ottawa',
    'creative team Ottawa',
    'video production company',
    'brand storytelling',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'LoMediaStudio',
    title: 'About Us | LoMediaStudio',
    description:
      'Meet LoMediaStudio, a media production agency in Ottawa, Canada. Our mission is turning brands into stories people remember.',
    url: 'https://www.lomediastudio.com/about',
    images: [{ url: '/bw.jpg', width: 1200, height: 675, alt: 'LoMediaStudio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | LoMediaStudio',
    description: 'Meet LoMediaStudio, a media production agency in Ottawa, Canada.',
    images: ['/bw.jpg'],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}