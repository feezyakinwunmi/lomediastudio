// app/contact/page.tsx
import type { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact LoMediaStudio for video production, photography, branding and digital marketing services in Ottawa, Canada. Get a free consultation today.',
  keywords: [
    'contact LoMediaStudio',
    'media production quote Ottawa',
    'video production consultation',
    'photography booking Ottawa',
    'hire media agency',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'LoMediaStudio',
    title: 'Contact Us | LoMediaStudio',
    description: 'Get in touch with LoMediaStudio for your next video, photo or branding project in Ottawa.',
    url: 'https://www.lomediastudio.com/contact',
    images: [{ url: '/bw.jpg', width: 1200, height: 675, alt: 'Contact LoMediaStudio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | LoMediaStudio',
    description: 'Get in touch with LoMediaStudio for your next project in Ottawa.',
    images: ['/bw.jpg'],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}