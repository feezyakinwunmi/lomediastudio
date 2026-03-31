// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
//   Instagram, 
//   Twitter, 
//   Facebook, 
//   Linkedin,
//   Youtube
} from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Work', href: '/work' },
      { name: 'Our Services', href: '/services' },
    ],
    Services: [
      { name: 'Web Creation', href: '/services' },
      { name: 'Event Videography', href: '/services' },
      { name: 'Recording Studio', href: '/services' },
      { name: 'Branding ....', href: '/services' },
    ],
    Support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

//   const socialIcons = [
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Youtube, href: '#', label: 'YouTube' },
//   ];

  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`footer-orb-${i}`}
            className="absolute rounded-full bg-purple-900/5 blur-3xl"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${10 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/">
              <motion.h2 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-red-600 bg-clip-text text-transparent mb-4"
              >
                <Image
                    src="/logo.png"
                    alt="LoMediaStudio"
                    width={82}
                    height={82}
                    className="inline-block mr-2"
                  />
                LoMediaStudio
              </motion.h2>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Creating captivating media experiences that transform brands and inspire audiences worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-purple-900" />
                <span>hello@lomediastudio.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-purple-900" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-purple-900" />
                <span>123 Creative Ave, New York, NY 10001</span>
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIdx) => (
                  <motion.li
                    key={linkIdx}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-900 text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-white font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-sm">Get the latest updates on projects and industry insights.</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-purple-900 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-purple-900 hover:bg-red-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} LomeMediaStudio. All rights reserved.
          </p>
          
          {/* Social Links */}
          {/* <div className="flex gap-3">
            {socialIcons.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 bg-gray-800 hover:bg-purple-900 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}