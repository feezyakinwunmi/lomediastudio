// app/services/digital-marketing/page.tsx
import type { Metadata } from 'next';
import DigitalMarketingClient from './client';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Ottawa | LO Media Studio',
  description: 'Data-driven digital marketing services in Ottawa. SEO, PPC, social media marketing & more. Grow your brand with measurable results.',
  openGraph: {
    title: 'Digital Marketing Services in Ottawa | LO Media Studio',
    description: 'Data-driven digital marketing solutions designed to deliver measurable results and grow your brand.',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f'],
  },
};

export default function Page() {
  return <DigitalMarketingClient />;
}