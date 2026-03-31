"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovepurpleItem, setHovepurpleItem] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        {/* Glassy bubble container */}
        <div className="relative">
          {/* Animated gradient background */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(black, 0.1) 0%, rgba(purple-900, 0.1) 100%)",
                "radial-gradient(circle at 80% 50%, rgba(black, 0.1) 0%, rgba(purple-900, 0.1) 100%)",
                "radial-gradient(circle at 20% 50%, rgba(black, 0.1) 0%, rgba(purple-900, 0.1) 100%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full "
          />
          
          {/* Main navbar container */}
          <div className="relative backdrop-blur-2xl bg-white/20 rounded-full shadow-2xl border border-white/30 px-4 py-2">
            <div className="flex items-center gap-4 md:gap-6">
              {/* Logo */}
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl md:text-2xl font-bold text-white bg-clip-text  cursor-pointer"
                >
                  <Image
                    src="/logo.png"
                    alt="LoMediaStudio"
                    width={42}
                    height={42}
                    className="inline-block mr-2"
                  />
                  Lo<span className="bg-gradient-to-r from-purple-900 to-red-600 bg-clip-text text-transparent">Media</span>Studio
                </motion.div>
              </Link>

              {/* Desktop Navigation Links - Separate Bubbles */}
              <div className="hidden md:flex items-center gap-2">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      onHoverStart={() => setHovepurpleItem(item.name)}
                      onHoverEnd={() => setHovepurpleItem(null)}
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        backgroundColor: hovepurpleItem === item.name 
                          ? "rgba(239, 68, 68, 0.15)" 
                          : "rgba(255, 255, 255, 0)",
                      }}
                      className="relative px-4 py-2 rounded-full transition-all duration-300 cursor-pointer"
                    >
                      <span className="relative text-gray-700 hover:text-purple-900 transition-colors font-medium">
                        {item.name}
                      </span>
                      {/* Animated dot indicator */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: hovepurpleItem === item.name ? 1 : 0,
                          opacity: hovepurpleItem === item.name ? 1 : 0
                        }}
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-900 rounded-full"
                      />
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700 hover:text-purple-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu - separate from navbar */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed top-24 left-4 right-4 z-40 md:hidden"
        >
          <div className="backdrop-blur-2xl bg-white/90 rounded-2xl shadow-2xl border border-white/20 p-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ x: 10, backgroundColor: "#fef2f2" }}
                    className="px-4 py-3 text-gray-700 hover:text-purple-900 transition-colors rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}