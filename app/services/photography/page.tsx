// app/services/photography/page.tsx
import type { Metadata } from 'next';
import PhotographyClient from './client';

export const metadata: Metadata = {
  title: 'Professional Photography Services in Ottawa | LO Media Studio',
  description: 'Professional brand photography services in Ottawa. Corporate headshots, product photography, event coverage & personal branding sessions.',
  openGraph: {
    title: 'Professional Photography Services in Ottawa | LO Media Studio',
    description: 'Professional photography that captures your brand\'s essence and elevates your visual identity.',
    images: ['https://images.unsplash.com/photo-1492691527719-9d1e07e534b4'],
  },
};

export default function Page() {
  return <PhotographyClient />;
}