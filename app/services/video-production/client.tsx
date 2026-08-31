// app/services/video-production/client.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle, Sparkles, MessageSquare, Mail,
  Video, Play, Film, Clapperboard, Edit, Camera, Mic,
  ChevronDown, ChevronUp, HelpCircle, TrendingUp, Users,
  Award, Clock, Zap, Shield, Star, Eye, Heart, Share2,
  Volume2, Scissors
} from 'lucide-react';

const faqs = [
  { q: "What video production services does LO Media Studio offer?", a: "LO Media Studio provides full-service video production, covering everything from concept development and scripting to filming, editing, and post-production. We create brand videos, commercials, social media content, documentaries, and corporate storytelling videos designed to communicate your message clearly and creatively." },
  { q: "How much does video production cost?", a: "Video production costs vary depending on the scope, duration, location, and complexity of the project. At LO Media Studio, we offer flexible packages tailored to your goals and budget. Contact us for a custom quote." },
  { q: "How long does it take to produce a video?", a: "The timeline for video production typically ranges from a few days to several weeks. Simple social media videos may take 3–7 days, while larger projects like commercials or brand documentaries can take several weeks. We always provide a clear production timeline before starting." },
  { q: "Do you help with video concepts and storytelling?", a: "Yes. At LO Media Studio, storytelling is at the core of what we do. We work closely with you to develop creative concepts, scripts, and visual direction that align with your brand identity and connect emotionally with your audience." },
  { q: "What types of businesses do you work with?", a: "We work with startups, small businesses, corporate brands, churches, creatives, and organizations across different industries. Whether you need promotional content, event coverage, or branded storytelling, our team adapts to your specific needs." },
  { q: "Can you create videos for social media platforms?", a: "Absolutely. We specialize in creating optimized video content for platforms like Instagram, YouTube, TikTok, and Facebook. Our videos are designed to boost engagement, improve visibility, and align with current digital trends." },
  { q: "Where is LO Media Studio located, and do you work internationally?", a: "Our studio is located at 1551 Lycee Place, Ottawa, ON K1G4B5, Canada, but we work with clients globally. We offer both on-site production and remote collaboration depending on your project requirements." },
  { q: "Why choose LO Media Studio for video production?", a: "LO Media Studio stands out because we combine video production with design, photography, and digital storytelling. This integrated approach ensures your content is visually consistent, strategically aligned, and impactful across all platforms." }
];

export default function VideoProductionClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const videoTypes = [
    { icon: Play, title: "Brand Videos", desc: "Tell your brand's story", color: "from-red-500 to-orange-500" },
    { icon: Film, title: "Commercials", desc: "High-impact ads", color: "from-blue-500 to-cyan-500" },
    { icon: Clapperboard, title: "Documentaries", desc: "Authentic storytelling", color: "from-purple-500 to-pink-500" },
    { icon: Camera, title: "Social Media", desc: "Short-form content", color: "from-green-500 to-emerald-500" },
    { icon: Mic, title: "Interviews", desc: "Testimonials & talks", color: "from-amber-500 to-orange-500" },
    { icon: Edit, title: "Corporate", desc: "Professional communications", color: "from-indigo-500 to-blue-500" }
  ];

  const processSteps = [
    { step: "01", title: "Pre-Production", desc: "Concept, script, storyboard, planning", icon: Clapperboard, duration: "1-2 weeks" },
    { step: "02", title: "Production", desc: "Filming with professional crew & equipment", icon: Video, duration: "1-5 days" },
    { step: "03", title: "Post-Production", desc: "Editing, color grading, sound design", icon: Edit, duration: "1-3 weeks" },
    { step: "04", title: "Delivery", desc: "Final export & distribution", icon: Sparkles, duration: "Ready to share" }
  ];

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 min-h-screen pt-20 overflow-hidden">
      
      {/* Hero Section - Video Player Style */}
      <section className="relative min-h-screen flex items-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div suppressHydrationWarning
            className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div suppressHydrationWarning
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-400 text-sm font-semibold">NOW PLAYING</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Video Production
                <span className="text-red-500 block">That Captivates</span>
              </h1>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Professional video content that brings your ideas to life, captivates audiences, 
                and converts viewers into customers.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-105"
                >
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#work"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all border border-white/20"
                >
                  <Play className="w-4 h-4" />
                  Watch Showreel
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex gap-4 mt-8">
                {["4K Quality", "Pro Equipment", "Expert Team", "Fast Turnaround"].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1 text-xs text-gray-400">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Animated Video Player Mock */}
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              style={{ perspective: 1000 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Video Thumbnail */}
                <img 
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
                  alt="Video Production"
                  className="w-full h-auto"
                />
                
                {/* Play Button Overlay */}
                <motion.div suppressHydrationWarning
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                >
                  <motion.div suppressHydrationWarning
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center cursor-pointer shadow-2xl"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </motion.div>

                {/* Video Controls Mock */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                      <motion.div suppressHydrationWarning
                        className="h-full bg-red-500 rounded-full"
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 10, repeat: Infinity }}
                      />
                    </div>
                    <Volume2 className="w-4 h-4 text-white" />
                    <span className="text-white text-xs">01:23 / 04:56</span>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <motion.div suppressHydrationWarning
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-slate-800 rounded-xl p-3 shadow-xl border border-slate-700"
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-red-400" />
                  <span className="text-white text-sm font-bold">250K+</span>
                  <span className="text-gray-400 text-xs">Views</span>
                </div>
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
            <span className="text-gray-400 text-xs">Scroll to explore</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Video Types Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-red-500 text-sm uppercase tracking-wider font-semibold">What We Create</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
              Video <span className="text-red-500">Solutions</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              From concept to completion, we produce videos that drive results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <motion.div suppressHydrationWarning
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${type.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all">
                    <div className={`w-14 h-14 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-400 text-sm">{type.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production Process - Timeline */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Our <span className="text-red-500">Production</span> Process
            </h2>
            <p className="text-gray-400 mt-4">End-to-end video production made simple</p>
          </div>

          <div className="relative">
            {/* Timeline track */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-purple-500 to-transparent hidden lg:block" />
            
            <div className="space-y-12">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div suppressHydrationWarning
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className="lg:w-1/2">
                      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-red-500/30 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-red-500" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-red-500/50">{step.step}</span>
                            <span className="text-xs text-gray-500">{step.duration}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.desc}</p>
                      </div>
                    </div>
                    <div className="lg:w-1/2 hidden lg:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-red-500 text-sm uppercase tracking-wider font-semibold">Professional Gear</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Industry-Leading
                <span className="text-red-500 block">Equipment</span>
              </h2>
              <p className="text-gray-400 mb-6">
                We use the latest professional cameras, lighting, and audio equipment to deliver stunning results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Camera, label: "Sony FX6 / RED Komodo", desc: "Cinema cameras" },
                  { icon: Mic, label: "Sennheiser / RODE", desc: "Pro audio" },
                  { icon: Film, label: "Arri Lighting", desc: "Professional lighting" },
                  { icon: Scissors, label: "DaVinci / Premiere", desc: "Pro editing" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Icon className="w-5 h-5 text-red-400" />
                      <div>
                        <div className="text-white text-sm font-semibold">{item.label}</div>
                        <div className="text-gray-500 text-xs">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-3 gap-4">
                  {["Camera", "Lens", "Mic", "Tripod", "Light", "Monitor"].map((item, idx) => (
                    <motion.div suppressHydrationWarning
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-3 bg-white/5 rounded-lg"
                    >
                      <div className="text-2xl mb-2">
                        {item === "Camera" && "📷"}
                        {item === "Lens" && "🔍"}
                        {item === "Mic" && "🎤"}
                        {item === "Tripod" && "🔭"}
                        {item === "Light" && "💡"}
                        {item === "Monitor" && "🖥️"}
                      </div>
                      <div className="text-white text-xs">{item}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Videos Produced", icon: Video },
              { value: "50M+", label: "Total Views", icon: Eye },
              { value: "98%", label: "Client Retention", icon: Heart },
              { value: "24/7", label: "Production Support", icon: Clock }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div suppressHydrationWarning
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
                >
                  <Icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white">Video Production FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div suppressHydrationWarning
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white/5 rounded-xl overflow-hidden border border-white/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/10 transition-colors"
                >
                  <span className="font-semibold text-white text-sm">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-red-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div suppressHydrationWarning
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-400 text-sm">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvgwidth=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Film className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Let's create video content that tells your story and drives real results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
                  Start Your Project
                </button>
              </Link>
              <a
                href="https://wa.me/15142192987"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white px-8 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all"
              >
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}