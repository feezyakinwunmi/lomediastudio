// app/terms/page.tsx
import type { Metadata } from 'next';
import TermsClient from './client';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the LoMediaStudio terms of service — the agreement governing your use of our website, services, projects, and deliverables.',
  robots: {
    index: true,
    follow: false,
  },
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'LoMediaStudio',
    title: 'Terms of Service | LoMediaStudio',
    description: 'The terms governing your use of LoMediaStudio services and deliverables.',
    url: 'https://www.lomediastudio.com/terms',
  },
};

export default function TermsPage() {
  return <TermsClient />;
}