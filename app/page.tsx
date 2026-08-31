import type { Metadata } from "next";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MissionVision from "./components/MissionVision";
import Get from "./components/get";
import Testimonials from "./components/testimonials";

export const metadata: Metadata = {
  title: "Video Production, Photography & Digital Marketing in Ottawa",
  description:
    "LoMediaStudio is a media production agency in Ottawa, Canada. We create video production, photography, digital marketing, branding and content that turns your vision into growth.",
  keywords: [
    "media production Ottawa",
    "video production Ottawa",
    "photography Ottawa",
    "digital marketing Ottawa",
    "content creation",
    "brand development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "LoMediaStudio",
    title: "LoMediaStudio | Video Production, Photography & Digital Marketing in Ottawa",
    description:
      "LoMediaStudio is a media production agency in Ottawa, Canada. We create content that turns your vision into growth.",
    images: [{ url: "/bw.jpg", width: 1200, height: 675, alt: "LoMediaStudio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LoMediaStudio | Video Production, Photography & Digital Marketing in Ottawa",
    description:
      "LoMediaStudio is a media production agency in Ottawa, Canada. We create content that turns your vision into growth.",
    images: ["/bw.jpg"],
  },
};

export default function Home() {
  return (
    <main className="bg-black text-gray-900">
      <Hero />
      <MissionVision/>
      <Services />
      <Get />
      <Testimonials/>
    </main>
  );
}