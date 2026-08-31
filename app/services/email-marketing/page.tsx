// app/services/email-marketing/page.tsx
import type { Metadata } from 'next';
import EmailMarketingClient from './client';

export const metadata: Metadata = {
  title: 'Email Marketing Services in Ottawa',
  description: 'Strategic email marketing services in Ottawa. Build customer relationships, nurture leads,and drive conversions with personalized email campaigns.',
  keywords: [
    'email marketing Ottawa',
    'email campaign services',
    'lead nurturing',
    'email automation',
    'newsletter design',
  ],
  alternates: {
    canonical: 'https://www.lomediastudio.com/services/email-marketing',
  },
  openGraph: {
    title: 'Email Marketing Services in Ottawa | LoMediaStudio',
    description: 'Build meaningful relationships with your audience through strategic, data-driven email campaigns.',
    url: 'https://www.lomediastudio.com/services/email-marketing',
    siteName: 'LoMediaStudio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa',
        width: 1200,
        height: 630,
        alt: 'Email Marketing Services in Ottawa',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Marketing Services in Ottawa | LoMediaStudio',
    description: 'Build meaningful relationships with your audience through strategic, data-driven email campaigns.',
    images: ['https://images.unsplash.com/photo-1557200134-90327ee9fafa'],
  },
};

export default function Page() {
  return <EmailMarketingClient />;
}