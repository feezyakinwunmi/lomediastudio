// app/services/creative-direction/page.tsx
import type { Metadata } from 'next';
import CreativeDirectionClient from './client';

export const metadata: Metadata = {
  title: 'Creative Direction Services in Ottawa | LO Media Studio',
  description: 'Professional creative direction services in Ottawa. Strategic creative oversight, brand positioning, campaign conceptualization, and art direction.',
  openGraph: {
    title: 'Creative Direction Services in Ottawa | LO Media Studio',
    description: 'Expert creative guidance to elevate your brand and ensure consistent, impactful messaging across all platforms.',
    images: ['https://images.unsplash.com/photo-1557804506-669a67965ba0'],
  },
};

export default function Page() {
  return <CreativeDirectionClient />;
}