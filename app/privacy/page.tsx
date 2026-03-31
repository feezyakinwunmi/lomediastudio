// app/privacy/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Eye, Database, Mail, Globe, Calendar, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const sectionRef = useRef<HTMLElement>(null);

  const lastUpdated = "March 31, 2024";

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number, etc.)",
        "Company information and project details",
        "Payment information (processed securely through third-party providers)",
        "Technical data (IP address, browser type, device information)",
        "Communication preferences and interaction history"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To process your requests and transactions",
        "To communicate with you about projects and updates",
        "To improve our services and user experience",
        "To comply with legal obligations"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "All data is encrypted during transmission using SSL/TLS protocols",
        "Regular security audits and vulnerability assessments",
        "Limited access to personal data on a need-to-know basis",
        "Secure data storage with regular backups"
      ]
    },
    {
      icon: Globe,
      title: "Data Sharing and Disclosure",
      content: [
        "We do not sell your personal information to third parties",
        "We may share data with trusted service providers for business operations",
        "Information may be disclosed to comply with legal requirements",
        "Business transfers in case of merger or acquisition"
      ]
    },
    {
      icon: Eye,
      title: "Your Rights",
      content: [
        "Access your personal data",
        "Correct inaccurate or incomplete data",
        "Request deletion of your data",
        "Withdraw consent at any time",
        "Opt-out of marketing communications",
        "Data portability"
      ]
    },
    {
      icon: Mail,
      title: "Contact Us",
      content: [
        "For privacy-related inquiries: privacy@lomediastudio.com",
        "For general inquiries: hello@lomediastudio.com",
        "Phone: +1 (555) 123-4567",
        "Address: 123 Creative Avenue, New York, NY 10001"
      ]
    }
  ];

  return (
    <main ref={sectionRef} className="bg-gray-100 min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-block mb-4">
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-full px-4 py-1 border border-purple-900/30">
                <span className="text-red-400 text-sm font-semibold">Legal</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-6 text-gray-300 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8 mb-8"
          >
            <p className="text-gray-600 leading-relaxed">
              At LomeMediaStudio, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or engage with our services. Please read this policy carefully to understand our views and practices regarding your 
              personal data.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-900/10 rounded-xl flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-purple-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Cookies Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8 mt-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-900/10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cookie Policy</h2>
            </div>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files 
              that are stored on your device to help us understand how you interact with our site and improve our services.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-sm text-gray-600">Required for basic website functionality and security.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-sm text-gray-600">Help us understand how visitors interact with our website.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Preference Cookies</h3>
                <p className="text-sm text-gray-600">Remember your settings and preferences.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="text-sm text-gray-600">Used to deliver relevant advertisements.</p>
              </div>
            </div>
          </motion.div>

          {/* Changes to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8 mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. 
              We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-gray-600">
              We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="bg-gradient-to-r from-purple-900 to-red-600 rounded-2xl p-8 mt-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Have Questions About Your Privacy?</h2>
            <p className="mb-6 opacity-90">
              If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-900 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}