// app/services/visual-brand-development/client.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle, Sparkles, MessageSquare, Mail,
  Palette, Brush, Droplet, Layers, Layout, Grid,
  ChevronDown, ChevronUp, HelpCircle, Eye, Heart,
  Star, Target, Award, Clock, Zap, Shield, Crown,
  Type, Circle, Square, Hexagon, PenTool, Sliders
} from 'lucide-react';

const faqs = [
  { q: "What is Visual Brand Development, and why is it important to Ottawa businesses?", a: "Visual Brand Development involves creating a consistent and compelling visual identity for your brand in Ottawa, including your logo, colors, typography, and overall design style. At LO Media Studio, we ensure your visuals clearly communicate your brand's personality and values, helping you stand out in Ottawa's competitive market and build a strong recognition across platforms." },
  { q: "What does your Visual Brand Development Service in Ottawa include?", a: "Our services in Ottawa cover everything you need to establish a strong visual presence, including logo design, brand color palettes, typography selection, brand guidelines, and visual direction for digital and print content. As a full-service content creation studio in Ottawa, we ensure that your brand's identity aligns seamlessly with your social media video content and overall marketing strategy." },
  { q: "How does visual branding impact my business growth in Ottawa?", a: "A strong visual brand builds trust, attracts the right audience, and improves brand recall. It also enhances the effectiveness of your marketing efforts, especially in video marketing and promotional video services in Ottawa, where visual consistency plays a key role in audience engagement and conversions." },
  { q: "Can you redesign or improve my existing brand visuals?", a: "Yes, we offer brand refresh and rebranding services in Ottawa. Whether your brand needs a modern update or a complete transformation, our team ensures your new visual identity aligns with the current trends and your business goals in Ottawa. As a professional video production company in Ottawa, we also ensure that your updated visuals integrate smoothly into your corporate video production and digital content." },
  { q: "Will my visual brand be consistent across all platforms?", a: "Absolutely. Consistency is key to effective branding. We develop detailed brand guidelines that ensure your visuals remain uniform across your website, social media, marketing materials, and video production services in Ottawa." },
  { q: "How do you ensure that my brand stands out from competitors in Ottawa, Canada?", a: "We take a strategic approach by researching your industry, target audience, and competitors in Ottawa to create a unique visual identity that reflects your brand's personality. As a video marketing agency in Ottawa, Canada, we also ensure that your visuals are optimized for digital storytelling and social media video content, giving you a competitive edge." },
  { q: "Do you align visual branding with video and content production?", a: "Yes, that's one of our strengths. At LO Media Studio, Ottawa, we integrate visual branding into all aspects of content creation. From design to promotional video services, we ensure a cohesive and professional brand experience." },
  { q: "How long does the Visual Brand Development process take?", a: "The timeline depends on the scope of your project, but typically ranges from a few days to a few weeks. We prioritize quality, creativity, and strategy to ensure that your brand's visuals are impactful and aligned with your goals. As a trusted provider of video production services in Ottawa, Canada, we also ensure that your visual identity is ready to support future corporate video production and marketing campaigns." }
];

export default function VisualBrandDevelopmentClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [activeColor, setActiveColor] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const brandElements = [
    { icon: Palette, title: "Color Systems", desc: "Strategic color palettes that evoke emotion", color: "from-purple-500 to-pink-500" },
    { icon: Type, title: "Typography", desc: "Font pairings that express your voice", color: "from-blue-500 to-cyan-500" },
    { icon: Layout, title: "Logo Design", desc: "Memorable marks that represent you", color: "from-amber-500 to-orange-500" },
    { icon: Grid, title: "Brand Guidelines", desc: "Rules for consistent application", color: "from-green-500 to-emerald-500" },
    { icon: Layers, title: "Visual Systems", desc: "Templates & assets for all needs", color: "from-red-500 to-rose-500" },
    { icon: Eye, title: "Brand Audit", desc: "Strategic analysis of current brand", color: "from-indigo-500 to-blue-500" }
  ];

  const colorPalettes = [
    { name: "Modern Minimal", colors: ["#1a1a2e", "#16213e", "#0f3460", "#e94560"], accent: "#e94560" },
    { name: "Nature Inspired", colors: ["#2d6a4f", "#40916c", "#52b788", "#74c69d"], accent: "#52b788" },
    { name: "Luxury Gold", colors: ["#1a1a1a", "#2d2d2d", "#3d3d3d", "#d4af37"], accent: "#d4af37" },
    { name: "Creative Energy", colors: ["#5f0f40", "#9a031e", "#fb8b67", "#fce762"], accent: "#fb8b67" }
  ];

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-screen pt-20 overflow-hidden">
      
      {/* Hero Section - Design Studio Style */}
      <section className="relative min-h-screen flex items-center">
        {/* Abstract shapes background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-20" />
          
          {/* Animated floating shapes */}
          <motion.div suppressHydrationWarning
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 left-1/4"
          >
            <div className="w-8 h-8 border-2 border-purple-300 rounded-lg rotate-45" />
          </motion.div>
          <motion.div suppressHydrationWarning
            animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/3 right-1/4"
          >
            <div className="w-6 h-6 border-2 border-pink-300 rounded-full" />
          </motion.div>
          <motion.div suppressHydrationWarning
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-2/3 left-1/3"
          >
            <div className="w-4 h-4 bg-amber-300 rounded-full" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div suppressHydrationWarning
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6"
              >
                <Palette className="w-4 h-4 text-purple-600" />
                <span className="text-purple-600 text-sm font-semibold">Design That Stands Out</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Visual Brand
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
                  Development
                </span>
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Create a powerful, strategic visual identity that positions your brand 
                for visibility, credibility, and growth in today's competitive market.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105"
                >
                  Build Your Brand <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#portfolio"
                  className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all shadow-md"
                >
                  <Eye className="w-4 h-4" />
                  View Portfolio
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 mt-8">
                {["100+ Brands", "5-Star Rated", "Strategy-First"].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Brand Board Mockup */}
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
              style={{ perspective: 1000 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:rotate-0 transition-all duration-500">
                {/* Brand Board Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Palette className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold">Brand Identity Board</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                    </div>
                  </div>
                </div>

                {/* Brand Board Content */}
                <div className="p-6">
                  {/* Logo Preview */}
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">LO</span>
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">COLOR PALETTE</h4>
                    <div className="flex gap-2">
                      {["#8B5CF6", "#EC4899", "#F59E0B", "#10B981"].map((color, idx) => (
                        <motion.div suppressHydrationWarning
                          key={idx}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="w-12 h-12 rounded-lg cursor-pointer"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">TYPOGRAPHY</h4>
                    <div className="space-y-1">
                      <div className="font-serif text-xl text-gray-900">Playfair Display</div>
                      <div className="font-sans text-sm text-gray-500">Inter - Regular, Medium, Bold</div>
                    </div>
                  </div>

                  {/* Brand Elements */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">BRAND ELEMENTS</h4>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 border-2 border-purple-300 rounded-lg" />
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      <div className="w-10 h-10 border-2 border-pink-300 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div suppressHydrationWarning
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-3"
              >
                <Droplet className="w-5 h-5 text-purple-500" />
              </motion.div>
              <motion.div suppressHydrationWarning
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-3"
              >
                <Brush className="w-5 h-5 text-pink-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div suppressHydrationWarning
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-gray-400 text-xs">Discover our process</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Brand Elements Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-purple-600 text-sm uppercase tracking-wider font-semibold">Brand Architecture</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              Elements of a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Strong Brand</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every visual element works together to tell your brand's story
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandElements.map((element, idx) => {
              const Icon = element.icon;
              return (
                <motion.div suppressHydrationWarning
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-200 transition-all">
                    <div className={`w-14 h-14 bg-gradient-to-r ${element.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{element.title}</h3>
                    <p className="text-gray-500 text-sm">{element.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Color Palette Showcase */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-purple-600 text-sm uppercase tracking-wider font-semibold">Color Psychology</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Strategic <span className="text-purple-600">Color</span> Systems
              </h2>
              <p className="text-gray-600 mb-6">
                Colors evoke emotions and influence perception. We create strategic color palettes 
                that align with your brand's personality and resonate with your audience.
              </p>
              <div className="space-y-4">
                {[
                  { color: "Purple", emotion: "Creativity, Luxury, Wisdom", hex: "#8B5CF6" },
                  { color: "Pink", emotion: "Passion, Energy, Youth", hex: "#EC4899" },
                  { color: "Blue", emotion: "Trust, Professional, Calm", hex: "#3B82F6" },
                  { color: "Green", emotion: "Growth, Health, Nature", hex: "#10B981" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-white rounded-xl">
                    <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: item.hex }} />
                    <div>
                      <div className="font-semibold text-gray-900">{item.color}</div>
                      <div className="text-xs text-gray-500">{item.emotion}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Sample Color Palettes</h3>
                <div className="space-y-6">
                  {colorPalettes.map((palette, idx) => (
                    <motion.div suppressHydrationWarning
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-gray-50 rounded-xl cursor-pointer"
                      onClick={() => setActiveColor(idx)}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-gray-900">{palette.name}</span>
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: palette.accent }} />
                      </div>
                      <div className="flex gap-2">
                        {palette.colors.map((color, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex-1 h-12 rounded-lg transition-all hover:scale-105"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Our <span className="text-purple-600">Branding</span> Process
            </h2>
            <p className="text-gray-600 mt-4">A strategic approach to building your visual identity</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Research & brand audit", icon: Target, color: "purple" },
              { step: "02", title: "Strategy", desc: "Define direction & positioning", icon: PenTool, color: "pink" },
              { step: "03", title: "Creation", desc: "Design & development", icon: Palette, color: "amber" },
              { step: "04", title: "Delivery", desc: "Guidelines & assets", icon: Sparkles, color: "green" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div suppressHydrationWarning
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative text-center"
                >
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-pink-200" />
                  )}
                  <div className={`w-20 h-20 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose <span className="text-yellow-300">LO Media Studio</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Crown, title: "Strategy-First", desc: "Every design decision backed by research" },
              { icon: Shield, title: "Consistency Guaranteed", desc: "Detailed brand guidelines for all platforms" },
              { icon: Zap, title: "Fast Turnaround", desc: "Quality designs delivered on time" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div suppressHydrationWarning
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                >
                  <Icon className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Brand Development FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div suppressHydrationWarning
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-purple-200 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-purple-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div suppressHydrationWarning
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Palette className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Build a Brand That Stands Out?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Let's create a visual identity that captures your essence and captivates your audience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
                  Start Your Brand Journey
                </button>
              </Link>
              <a
                href="https://wa.me/15142192987"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-700 px-8 py-3 rounded-full font-semibold border border-gray-300 hover:shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Discuss Your Vision
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}