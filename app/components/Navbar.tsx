"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, Calendar, User, ArrowRight, Book, Video, PenTool, Mail, Camera } from "lucide-react";

import { allBlogPosts } from '@/data/blogs';
const blogPosts = allBlogPosts;

// Services data from your services page
const services = [
  {
    title: "Media Content Creation",
    slug: "media-content-creation",
    icon: PenTool,
    category: "Media Content Creation",
    shortDesc: "Drive engagement, build authority & convert your audience with strategic media content that performs."
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: ArrowRight,
    category: "Digital Marketing",
    shortDesc: "Data-driven digital marketing solutions designed to deliver measurable results and grow your brand."
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    icon: Mail,
    category: "Email Marketing",
    shortDesc: "Build meaningful relationships with your audience through strategic, data-driven email campaigns."
  },
  {
    title: "Photography",
    slug: "photography",
    icon: Camera,
    category: "Photography",
    shortDesc: "Professional photography that captures your brand's essence and elevates your visual identity."
  },
  {
    title: "Storytelling",
    slug: "storytelling",
    icon: Book,
    category: "Storytelling",
    shortDesc: "Transform your message into meaningful stories that connect, inspire, and drive action."
  },
  {
    title: "Video Production",
    slug: "video-production",
    icon: Video,
    category: "Video Production",
    shortDesc: "Professional video content that captivates audiences and converts viewers into customers."
  },
  {
    title: "Visual Brand Development",
    slug: "visual-brand-development",
    icon: PenTool,
    category: "Visual Brand Development",
    shortDesc: "Create a powerful, strategic visual identity that positions your brand for visibility and growth."
  },
  {
    title: "Creative Direction",
    slug: "creative-direction",
    icon: ArrowRight,
    category: "Creative Direction",
    shortDesc: "Expert creative guidance to elevate your brand and ensure consistent, impactful messaging."
  }
];

interface SearchItem {
  title: string;
  href: string;
  type: string;
  excerpt?: string;
  category?: string;
  date?: string;
  author?: string;
  image?: string;
  icon?: any;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [allContent, setAllContent] = useState<SearchItem[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" }
  ];

  // Load all content on mount
  useEffect(() => {
    const items: SearchItem[] = [];

    // Add blog posts
    blogPosts.forEach(post => {
      items.push({
        title: post.title,
        href: `/blog/${post.slug}`,
        type: "Blog Post",
        excerpt: post.excerpt,
        category: post.category,
        date: post.date,
        author: post.author,
        image: post.image
      });
    });

    // Add services
    services.forEach(service => {
      items.push({
        title: service.title,
        href: `/services/${service.slug}`,
        type: "Service",
        excerpt: service.shortDesc,
        category: service.category,
        icon: service.icon
      });
    });

    // Add static pages
    const staticPages = [
      { title: "Home", href: "/", type: "Page" },
      { title: "About", href: "/about", type: "Page" },
      { title: "Work", href: "/work", type: "Page" },
      { title: "Services", href: "/services", type: "Page" },
      { title: "Contact", href: "/contact", type: "Page" },
      { title: "Blog", href: "/blog", type: "Page" }
    ];

    staticPages.forEach(page => {
      if (!items.some(item => item.href === page.href)) {
        items.push(page);
      }
    });

    setAllContent(items);
  }, []);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        (item.excerpt && item.excerpt.toLowerCase().includes(query)) ||
        (item.category && item.category.toLowerCase().includes(query)) ||
        (item.author && item.author.toLowerCase().includes(query)) ||
        item.type.toLowerCase().includes(query)
    );
    setSearchResults(results.slice(0, 15));
  }, [searchQuery, allContent]);

  // Focus search input when modal opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
    // Prevent body scroll when search is open
    if (searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [searchOpen]);

  // Close search on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSearchOpen = () => {
    setSearchOpen(true);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleResultClick = (href: string) => {
    handleSearchClose();
    window.location.href = href;
  };

  // Get color for result type badge
  const getTypeColor = (type: string) => {
    switch(type) {
      case "Blog Post": return "bg-purple-100 text-purple-800";
      case "Service": return "bg-blue-100 text-blue-800";
      case "Page": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "Blog Post": return "📝";
      case "Service": return "💼";
      case "Page": return "📄";
      default: return "🔗";
    }
  };

  return (
    <>
      <motion.nav suppressHydrationWarning
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        {/* Glassy bubble container */}
        <div className="relative">
          {/* Animated gradient background */}
          <motion.div suppressHydrationWarning
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
            className="absolute inset-0 rounded-full"
          />
          
          {/* Main navbar container */}
          <div className="relative backdrop-blur-2xl bg-white/20 rounded-full shadow-2xl border border-white/30 px-4 py-2">
            <div className="flex items-center gap-4 md:gap-6">
              {/* Logo */}
              <Link href="/">
                <motion.div suppressHydrationWarning
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl md:text-2xl font-bold text-white bg-clip-text cursor-pointer"
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
                {/* Search Button */}
                <motion.button suppressHydrationWarning
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSearchOpen}
                  className="relative px-3 py-2 rounded-full transition-all duration-300 hover:bg-white/20"
                >
                  <Search className="w-5 h-5 text-gray-700 hover:text-purple-700 transition-colors" />
                </motion.button>

                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div suppressHydrationWarning
                      onHoverStart={() => setHoverItem(item.name)}
                      onHoverEnd={() => setHoverItem(null)}
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        backgroundColor: hoverItem === item.name 
                          ? "rgba(239, 68, 68, 0.15)" 
                          : "rgba(255, 255, 255, 0)",
                      }}
                      className="relative px-4 py-2 rounded-full transition-all duration-300 cursor-pointer"
                    >
                      <span className="relative text-black hover:text-purple-700 transition-colors font-medium">
                        {item.name}
                      </span>
                      {/* Animated dot indicator */}
                      <motion.div suppressHydrationWarning
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: hoverItem === item.name ? 1 : 0,
                          opacity: hoverItem === item.name ? 1 : 0
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
        <motion.div suppressHydrationWarning
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed top-24 left-4 right-4 z-40 md:hidden"
        >
          <div className="backdrop-blur-2xl bg-white/90 rounded-2xl shadow-2xl border border-white/20 p-4">
            <div className="flex flex-col space-y-2">
              {/* Search in mobile */}
              <button
                onClick={() => {
                  handleSearchOpen();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-purple-900 transition-colors rounded-lg hover:bg-purple-50"
              >
                <Search className="w-5 h-5" />
                Search blogs & services...
              </button>

              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div suppressHydrationWarning
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

      {/* Search Modal */}
      {searchOpen && (
        <>
          {/* Backdrop */}
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleSearchClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101] px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search blogs, services, pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-5 text-black text-lg outline-none border-b border-gray-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {searchQuery.trim() === "" ? (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-lg">Search blogs, services, and more</p>
                    <p className="text-sm mt-1">Try searching for "marketing" or "video"</p>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Email Marketing</span>
                      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Video Production</span>
                      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Branding</span>
                    </div>
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <p className="text-lg">No results found for "{searchQuery}"</p>
                    <p className="text-sm mt-1">Try different keywords</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result.href)}
                        className="w-full text-left px-6 py-4 hover:bg-gray-50 transition group"
                      >
                        <div className="flex items-start gap-4">
                          {/* Image if available */}
                          {result.image && (
                            <img 
                              src={result.image} 
                              alt={result.title}
                              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                            />
                          )}
                          
                          {/* Icon if available and no image */}
                          {!result.image && result.icon && (
                            <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-purple-50 flex items-center justify-center">
                              {result.icon && <result.icon className="w-6 h-6 text-purple-600" />}
                            </div>
                          )}
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-black font-medium group-hover:text-purple-700 transition line-clamp-1">
                                {result.title}
                              </h4>
                            </div>
                            
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(result.type)}`}>
                                {getTypeIcon(result.type)} {result.type}
                              </span>
                              {result.category && (
                                <span className="text-xs text-gray-400">• {result.category}</span>
                              )}
                              {result.date && (
                                <span className="text-xs text-gray-400">• {result.date}</span>
                              )}
                              {result.author && (
                                <span className="text-xs text-gray-400">• {result.author}</span>
                              )}
                            </div>
                            
                            {result.excerpt && (
                              <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                                {result.excerpt}
                              </p>
                            )}
                          </div>
                          <span className="text-purple-700 opacity-0 group-hover:opacity-100 transition flex-shrink-0">
                            →
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-3 bg-gray-50 text-xs text-gray-500 flex justify-between items-center">
                <span>Press ESC to close</span>
                <span>{searchResults.length} results found</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}