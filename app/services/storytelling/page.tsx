// app/services/storytelling/page.tsx
import type { Metadata } from 'next';
import StorytellingClient from './client';

export const metadata: Metadata = {
  title: 'Brand Storytelling Services in Ottawa | LO Media Studio',
  description: 'Professional brand storytelling services in Ottawa. Transform your message into meaningful stories that connect, inspire, and drive action.',
  openGraph: {
    title: 'Brand Storytelling Services in Ottawa | LO Media Studio',
    description: 'Transform your message into meaningful stories that connect, inspire, and drive action.',
    images: ['https://images.unsplash.com/photo-1455849318743-b2233052fcff'],
  },
};

export default function Page() {
  return <StorytellingClient />;
}