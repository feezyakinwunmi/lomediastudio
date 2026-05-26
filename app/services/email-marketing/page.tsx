// app/services/email-marketing/page.tsx
import type { Metadata } from 'next';
import EmailMarketingClient from './client';

export const metadata: Metadata = {
  title: 'Email Marketing Services in Ottawa | LO Media Studio',
  description: 'Strategic email marketing services in Ottawa. Build customer relationships, nurture leads, and drive conversions with personalized email campaigns.',
  openGraph: {
    title: 'Email Marketing Services in Ottawa | LO Media Studio',
    description: 'Build meaningful relationships with your audience through strategic, data-driven email campaigns.',
    images: ['https://images.unsplash.com/photo-1557200134-90327ee9fafa'],
  },
};

export default function Page() {
  return <EmailMarketingClient />;
}