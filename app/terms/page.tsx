// app/terms/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Scale, Clock, Shield, CreditCard, AlertCircle, CheckCircle, Globe, Users, Briefcase, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  const sectionRef = useRef<HTMLElement>(null);

  const lastUpdated = "March 31, 2024";
  const effectiveDate = "April 1, 2024";

  const sections = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content: [
        "By accessing or using LomeMediaStudio's services, you agree to be bound by these Terms of Service.",
        "These terms apply to all visitors, users, and others who access our services.",
        "If you disagree with any part of the terms, you may not access our services."
      ]
    },
    {
      icon: Briefcase,
      title: "Services Provided",
      content: [
        "Web creation and development services",
        "Event videography and photography",
        "Recording studio services",
        "Book writing and publishing",
        "Branding and identity design",
        "Content creation and marketing strategy",
        "Creative direction and consulting"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        "A 50% deposit is required to initiate any project",
        "Final payment is due upon project completion",
        "Payment methods: Bank transfer, Credit card, PayPal",
        "All fees are non-refundable unless otherwise specified",
        "Late payments may incur additional charges",
        "Custom pricing available for ongoing partnerships"
      ]
    },
    {
      icon: Clock,
      title: "Project Timeline and Delivery",
      content: [
        "Timelines are estimated and may be adjusted based on project complexity",
        "Client feedback and approvals must be provided within agreed timeframes",
        "Delays caused by client may extend the project timeline",
        "We strive to deliver all projects within the agreed timeframe",
        "Expedited services may incur additional fees"
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        "All original work created remains our property until final payment is received",
        "Upon full payment, clients receive full ownership of final deliverables",
        "We retain the right to showcase completed work in our portfolio",
        "Third-party assets and licensed materials have their own terms",
        "Unauthorized reproduction or distribution is prohibited"
      ]
    },
    {
      icon: Scale,
      title: "Client Responsibilities",
      content: [
        "Provide accurate and timely information for project execution",
        "Secure necessary permissions for any third-party materials",
        "Review and approve deliverables within specified timeframes",
        "Maintain open communication throughout the project",
        "Make payments as agreed in the payment schedule"
      ]
    },
    {
      icon: AlertCircle,
      title: "Limitation of Liability",
      content: [
        "We are not liable for indirect, incidental, or consequential damages",
        "Maximum liability is limited to the amount paid for services",
        "We do not guarantee specific business outcomes or results",
        "Force majeure events may affect service delivery"
      ]
    },
    {
      icon: Users,
      title: "Client Confidentiality",
      content: [
        "We maintain strict confidentiality of client information",
        "Non-disclosure agreements available upon request",
        "Client data is never sold or shared without consent",
        "Team members are bound by confidentiality obligations"
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
              Terms of Service
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Effective: {effectiveDate}</span>
              </div>
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
              Welcome to LomeMediaStudio. These Terms of Service govern your use of our website and services. 
              By engaging with our services, you agree to be bound by these terms. Please read them carefully 
              as they affect your legal rights and obligations.
            </p>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Cancellation Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8 mt-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-900/10 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-purple-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cancellation Policy</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Project Cancellation</h3>
                <p className="text-gray-600">If a project is canceled after work has commenced, the client is responsible for payment for all work completed up to the cancellation date.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Retainer Services</h3>
                <p className="text-gray-600">For ongoing retainer services, 30 days written notice is required for cancellation.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Refunds</h3>
                <p className="text-gray-600">Deposits are non-refundable. Refunds for completed work are not provided unless otherwise agreed in writing.</p>
              </div>
            </div>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8 mt-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-900/10 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-purple-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
            </div>
            <p className="text-gray-600 mb-4">
              These terms shall be governed by and construed in accordance with the laws of the United States, 
              without regard to its conflict of law provisions. Any disputes arising under or in connection 
              with these terms shall be subject to the exclusive jurisdiction of the courts located in New York.
            </p>
            <p className="text-gray-600">
              If any provision of these terms is found to be unenforceable or invalid, that provision shall be 
              limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain 
              in full force and effect.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="bg-gradient-to-r from-purple-900 to-red-600 rounded-2xl p-8 mt-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="mb-6 opacity-90">
              If you have any questions about these Terms of Service, please contact us. We're here to help!
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