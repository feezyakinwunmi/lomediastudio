import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "LoMediaStudio - Your Vision, Our Creation",
  description: "LoMediaStudio is a dynamic media production company dedicated to bringing your vision to life. We specialize in creating compelling visual and digital content that reflects the true identity of your brand. With a team of passionate creatives, we offer a wide range of services including video production, photography, graphic design, and digital marketing. Whether you're looking to enhance your brand's online presence or create captivating content for your audience, LoMediaStudio is here to turn your ideas into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
              <FloatingWhatsApp />

    </html>
  );
}
