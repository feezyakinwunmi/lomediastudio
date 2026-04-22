// app/services/visual-brand-development/page.tsx
import type { Metadata } from 'next';
import VisualBrandDevelopmentClient from './client';

export const metadata: Metadata = {
  title: 'Visual Brand Development Services in Ottawa | LO Media Studio',
  description: 'Professional visual brand development services in Ottawa. Logo design, brand identity, color systems, and complete brand guidelines for businesses.',
  openGraph: {
    title: 'Visual Brand Development Services in Ottawa | LO Media Studio',
    description: 'Create a powerful, strategic visual identity that positions your brand for visibility and growth.',
    images: ['https://images.unsplash.com/photo-1561070791-2526d30994b5'],
  },
};

export default function Page() {
  return <VisualBrandDevelopmentClient />;
}