// app/privacy/page.tsx
import type { Metadata } from 'next';
import PrivacyClient from './client';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the LoMediaStudio privacy policy — how we collect, use, and protect your personal information when you use our website and services.',
  robots: {
    index: true,
    follow: false,
  },
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'LoMediaStudio',
    title: 'Privacy Policy | LoMediaStudio',
    description: 'How LoMediaStudio collects, uses,and protects your personal information.',
    url: 'https://www.lomediastudio.com/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}