import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "LoMediaStudio";
export const SITE_URL = "https://www.lomediastudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LoMediaStudio | Video Production, Photography & Digital Marketing in Ottawa",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "LoMediaStudio is a media production agency in Ottawa, Canada. We create video production, photography, digital marketing, branding and content that turns your vision into growth.",
  keywords: [
    "media production Ottawa",
    "video production Ottawa",
    "photography Ottawa",
    "digital marketing Ottawa",
    "content creation",
    "brand development",
    "email marketing",
    "creative direction",
    "LoMediaStudio",
  ],
  authors: [{ name: "LoMediaStudio" }],
  creator: "LoMediaStudio",
  publisher: "LoMediaStudio",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "LoMediaStudio | Video Production, Photography & Digital Marketing in Ottawa",
    description:
      "LoMediaStudio is a media production agency in Ottawa, Canada. We create video production, photography, digital marketing, branding and content that turns your vision into growth.",
    images: [{ url: "/bw.jpg", width: 1200, height: 675, alt: "LoMediaStudio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LoMediaStudio | Video Production, Photography & Digital Marketing in Ottawa",
    description:
      "LoMediaStudio is a media production agency in Ottawa, Canada. We create content that turns your vision into growth.",
    images: ["/bw.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Media production agency in Ottawa, Canada offering video production, photography, digital marketing, branding and content creation.",
    email: "layoobidikepublications@gmail.com",
    telephone: "+1-514-219-2987",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1551 Lycee Place",
      addressLocality: "Ottawa",
      addressRegion: "ON",
      postalCode: "K1G4B5",
      addressCountry: "CA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-514-219-2987",
      contactType: "sales",
      availableLanguage: "English",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-CA",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
  };

  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
