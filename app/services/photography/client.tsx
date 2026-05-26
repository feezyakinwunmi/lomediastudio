// app/services/photography/client.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle, Sparkles, MessageSquare, Mail,
  Camera, Heart, Users, Target, Award, Clock, MapPin,
  ChevronDown, ChevronUp, HelpCircle, Image, Eye,
  Sun, Moon, Filter, ZoomIn, Play, Star, Calendar,
  Phone, 
} from 'lucide-react';

const faqs = [
  { q: "What photography services does LO Media Studio offer in Ottawa?", a: "We provide a full suite of professional services, including corporate headshots, personal brand sessions, product photography for e-commerce, and event coverage. Our work is tailored to help Ottawa-based businesses, organizations, and ministries build a visual identity that truly stands out." },
  { q: "Why is professional brand photography a must for local businesses?", a: "In a competitive market like the National Capital Region, high-quality, custom visuals build immediate trust. Whether you are a professional in Westboro or a tech firm in Kanata, custom photography proves you are established and authentic, which is something generic stock photos simply can't do." },
  { q: "Can we choose a specific Ottawa location for our shoot?", a: "Absolutely! We love using the city as our backdrop. If you want a historic, 'cobblestone' feel, we can head to the ByWard Market. For a cleaner, riverfront lifestyle look, Strathcona Park is a favorite. We'll help you pick a local spot that perfectly matches the 'vibe' of your brand." },
  { q: "Does LO Media Studio cover events at the Shaw Centre?", a: "Yes, we provide comprehensive event and conference coverage throughout the city. From small workshops to major summits at the Shaw Centre or other downtown venues, we capture the energy, the speakers, and the candid moments that make your event a success." },
  { q: "How do I prepare for a session given our unpredictable weather?", a: "Ottawa weather loves to keep us on our toes! We always have a backup plan. For outdoor shoots, we suggest bringing stylish layers. If it rains, we can move the session to our private indoor studio on Lycee Place or find a new date that works for you." },
  { q: "What is the turnaround time for photos from a local session?", a: "We know you are excited to share your new content. For most sessions in the Ottawa area, we send a few 'sneak peek' images within 48 hours for your social media. Your full, professionally edited gallery is typically delivered via a secure link within 7 to 10 business days." },
  { q: "How are your photography packages priced for Ottawa clients?", a: "Because every project from a single headshot to a full-day branding campaign is unique, we find that a quick chat is the best way to give you an accurate quote. Let's talk about your vision, and we will put together a package that fits your goals and your budget." },
  { q: "How do I book a session with your Ottawa-based team?", a: "Getting started is easy! Reach out through our Contact Page to schedule a consultation. We will discuss your brand goals, help you pick the right local location, and walk you through the entire process to ensure you get visuals you love." }
];

// Image gallery data
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e", category: "Portrait", alt: "Professional portrait" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", category: "Fashion", alt: "Fashion photography" },
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32", category: "Product", alt: "Product photography" },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", category: "Landscape", alt: "Landscape" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", category: "Nature", alt: "Nature photography" },
  { src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d", category: "Event", alt: "Event coverage" }
];

export default function PhotographyClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [activeImage, setActiveImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const categories = ['All', 'Portrait', 'Fashion', 'Product', 'Event', 'Nature'];

  const portfolioItems = [
    { id: 1, title: "Corporate Headshots", desc: "Professional portraits for Ottawa businesses", category: "Portrait", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a" },
    { id: 2, title: "Brand Storytelling", desc: "Visual narratives that connect", category: "Portrait", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" },
    { id: 3, title: "Product Launch", desc: "E-commerce ready product shots", category: "Product", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8" },
    { id: 4, title: "Wedding Photography", desc: "Capturing your special day", category: "Event", image: "https://images.unsplash.com/photo-1519741497674-611481863552" },
    { id: 5, title: "Fashion Editorial", desc: "High-end fashion campaigns", category: "Fashion", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b" },
    { id: 6, title: "Ottawa Landmarks", desc: "Iconic city locations", category: "Nature", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" }
  ];

  const filteredPortfolio = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div ref={containerRef} className="bg-black min-h-screen pt-20 overflow-hidden">
      
      {/* Hero Section - Fullscreen with Parallax */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ scale: scale }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4" 
            alt="Photography Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Animated light leak effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <Camera className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-semibold">Visual Storytelling</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Capture Your
                <span className="text-amber-400 block">Brand's Essence</span>
              </h1>
              
              <p className="text-gray-200 text-lg mb-8 leading-relaxed max-w-xl">
                Professional photography that tells your story, elevates your brand, 
                and creates lasting impressions. Serving Ottawa and beyond.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105"
                >
                  Book a Session <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#portfolio"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all border border-white/20"
                >
                  <Eye className="w-4 h-4" />
                  View Portfolio
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12">
                {[
                  { value: "500+", label: "Shoots Completed" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "48hr", label: "Sneak Peek Delivery" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5 text-white/50" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Gallery Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-amber-400 text-sm uppercase tracking-wider font-semibold">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Recent <span className="text-amber-400">Portfolio</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A glimpse into our creative work capturing moments that matter
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setActiveImage(idx)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                  <div className="flex items-center gap-1 mt-2 text-amber-400 text-xs">
                    <Camera className="w-3 h-3" />
                    <span>{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Camera Lens Style */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber-400 text-sm uppercase tracking-wider font-semibold">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Photography <span className="text-amber-400">Services</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Professional photography tailored to your brand's unique needs
              </p>
              <div className="space-y-3">
                {[
                  "Corporate & Personal Brand Photography",
                  "Product Photography for E-commerce",
                  "Event & Conference Coverage",
                  "Social Media Content Photography",
                  "Promotional & Campaign Shoots"
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-amber-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Camera Lens Animation */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-20 blur-2xl" />
                <div className="absolute inset-4 bg-gray-800 rounded-full border-4 border-gray-700">
                  <div className="absolute inset-4 bg-gradient-to-br from-gray-900 to-black rounded-full border border-gray-700">
                    <div className="absolute inset-8 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-16 h-16 text-amber-400" />
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="absolute -inset-2 rounded-full border-2 border-amber-500/30"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Location Badges */}
              <div className="absolute -bottom-6 -right-6 bg-gray-800 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="text-white text-sm">Ottawa Locations</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {["ByWard Market", "Strathcona Park", "Lansdowne", "Studio"].map((loc, idx) => (
                    <span key={idx} className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{loc}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Film Strip Style */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-sm uppercase tracking-wider font-semibold">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Your Photography <span className="text-amber-400">Journey</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400 to-transparent hidden lg:block" />
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision, goals, and preferred style", icon: Heart },
              { step: "02", title: "Planning", desc: "Location scouting, mood boards, and scheduling", icon: MapPin },
              { step: "03", title: "The Shoot", desc: "Professional photography session with guidance", icon: Camera },
              { step: "04", title: "Delivery", desc: "Edited gallery delivered within 7-10 days", icon: Sparkles }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 mb-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-6 border border-gray-800 hover:border-amber-500/30 transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-amber-400" />
                        </div>
                        <span className="text-3xl font-bold text-amber-500/30">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400 mt-2">Everything you need to know about our photography services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-amber-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-400">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32" 
            alt="CTA Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-black/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Camera className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Capture Your Story?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Let's create stunning visuals that elevate your brand
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
                  Book Your Session
                </button>
              </Link>
              <a
                href="https://wa.me/15142192987"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                <MessageSquare className="w-4 h-4 inline mr-2" />
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}