// app/services/storytelling/client.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle, Sparkles, MessageSquare, Mail,
  BookOpen, Heart, Users, Target, Award, Clock, Quote,
  ChevronDown, ChevronUp, HelpCircle, Film, PenTool,
  Play, Star, Mic, LucideBook, Edit, Globe, Compass,
  Feather, Lightbulb, TrendingUp, Zap, Shield, Crown
} from 'lucide-react';

const faqs = [
  { q: "What services does LO Media Studio provide?", a: "LO Media Studio offers professional creative services including media content creation, digital marketing, email marketing, video production, photography, storytelling, visual brand development, and creative direction. Our solutions are designed to help brands grow, engage audiences, and increase conversions." },
  { q: "What is a full-service creative agency?", a: "A full-service creative agency like LO Media Studio handles everything from strategy and content creation to marketing and execution. This means you get a consistent brand message, streamlined communication, and better results across all platforms." },
  { q: "How can storytelling improve my brand?", a: "Brand storytelling helps you connect emotionally with your audience, making your message more memorable and impactful. It improves engagement, builds trust, and increases customer loyalty, which ultimately drives business growth." },
  { q: "Do you offer digital marketing services for small businesses?", a: "Yes, we provide digital marketing services tailored for startups, small businesses, and growing brands. Our strategies are data-driven and designed to increase visibility, attract the right audience, and deliver measurable results." },
  { q: "What types of video production services do you offer?", a: "We offer professional video production services including brand videos, promotional videos, social media content, documentaries, and campaign videos that captivate audiences and drive engagement." },
  { q: "How does LO Media Studio create effective content?", a: "We start with a clear strategy, understand your target audience, and create high-quality, engaging content aligned with your brand goals. Every piece of content is designed to perform and deliver measurable impact." },
  { q: "Can you help develop my brand identity?", a: "Yes, our visual brand development services help you create a strong and consistent brand identity, including design direction, messaging, and positioning to stand out in a competitive market." },
  { q: "What industries do you work with?", a: "We work with a wide range of clients including businesses, personal brands, organizations, and ministries across different industries looking to elevate their brand presence." },
  { q: "How long does it take to complete a project?", a: "Project timelines vary depending on scope and complexity. However, we prioritize on-time delivery and maintain clear communication throughout the process to ensure deadlines are met." },
  { q: "How do I get started with LO Media Studio?", a: "Getting started is easy. Simply contact us through our website, WhatsApp, or email to discuss your project. Our team will guide you through the next steps and create a strategy tailored to your goals." }
];

export default function StorytellingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [activeStory, setActiveStory] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  const stories = [
    { 
      title: "The Hero's Journey", 
      desc: "Every brand has a hero - your customer. We help you tell their story.",
      icon: Crown,
      color: "from-amber-500 to-orange-500"
    },
    { 
      title: "Origin Stories", 
      desc: "Share where you came from and why you do what you do.",
      icon: Compass,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Transformation Tales", 
      desc: "Show how your brand transforms lives and solves problems.",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "Vision Narratives", 
      desc: "Paint a picture of the future your brand is building.",
      icon: Globe,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div ref={containerRef} className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 min-h-screen pt-20 overflow-hidden">
      
      {/* Hero Section - Cinematic Opening */}
      <section className="relative min-h-screen flex items-center">
        {/* Cinematic overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />
        
        {/* Background Video Placeholder - Cinematic shot */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff"
            alt="Cinematic Storytelling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-purple-900/50" />
        </div>

        {/* Film grain effect */}
<div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')] bg-repeat" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Clapperboard style badge */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border-l-4 border-amber-400 mb-6"
              >
                <Film className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-semibold tracking-wide">FEATURE PRESENTATION</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              >
                Your Brand's
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 block">
                  Greatest Story
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
              >
                Transform your message into meaningful stories that connect, inspire, 
                and drive action. Every brand has a story. Let's tell yours.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105"
                >
                  Start Your Story <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#stories"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all border border-white/20"
                >
                  <Play className="w-4 h-4" />
                  Watch Our Reel
                </a>
              </motion.div>

              {/* Quote animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-16 flex items-center gap-4"
              >
                <Quote className="w-8 h-8 text-amber-400/50" />
                <p className="text-gray-300 italic text-sm">
                  "Stories are the single most powerful tool in a leader's toolkit."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Film strip decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500" />
      </section>

      {/* Story Types Section - Narrative Cards */}
      <section id="stories" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm uppercase tracking-wider font-semibold">Story Frameworks</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
              Stories That <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Resonate</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Different narratives for different goals. We'll find the perfect story structure for your brand.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story, idx) => {
              const Icon = story.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/30 transition-all">
                    <div className={`w-14 h-14 bg-gradient-to-br ${story.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{story.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Process - LucideBook Style */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 rounded-full mb-4">
                <LucideBook className="w-3 h-3 text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold">ACT I • II • III</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Storytelling
                <span className="text-amber-400 block">Blueprint</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Our proven process for crafting compelling brand narratives
              </p>
              <div className="space-y-6">
                {[
                  { act: "ACT I", title: "Discovery", desc: "We uncover your brand's unique voice, values, and vision through deep-dive interviews and research.", icon: Compass },
                  { act: "ACT II", title: "Development", desc: "We craft your narrative arc, key messages, and story framework across all platforms.", icon: PenTool },
                  { act: "ACT III", title: "Delivery", desc: "We bring your story to life through video, content, and strategic campaigns.", icon: Film }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 p-4 border-l-2 border-amber-500/30 hover:border-amber-500 transition-all"
                    >
                      <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-amber-400 text-xs font-mono">{item.act}</span>
                          <h3 className="font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* LucideBook page mockup */}
              <div className="bg-amber-50 rounded-lg p-6 shadow-2xl transform rotate-2">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-amber-200">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-amber-600 ml-2">LucideBook_v04_FINAL.pdf</span>
                </div>
                <div className="space-y-3">
                  <motion.p 
                    className="text-amber-800 text-sm font-mono"
                    animate={{ opacity: [0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-amber-400">INT. BOARDROOM - DAY</span>
                  </motion.p>
                  <p className="text-gray-700 text-sm font-mono">
                    The CEO stands before the team, ready to unveil the new brand direction.
                  </p>
                  <p className="text-gray-700 text-sm font-mono mt-2">
                    <span className="text-amber-500">CEO</span><br />
                    "Today, we're not just launching a product. We're sharing a story..."
                  </p>
                  <motion.p 
                    className="text-amber-800 text-sm font-mono mt-3"
                    animate={{ opacity: [0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <span className="text-amber-400">FADE IN:</span>
                  </motion.p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full p-3 shadow-xl"
              >
                <Feather className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "87%", label: "Better Message Recall", icon: Brain },
              { value: "3x", label: "Higher Engagement", icon: TrendingUp },
              { value: "22x", label: "More Memorable", icon: Zap },
              { value: "70%", label: "Purchase Intent", icon: Target }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What We <span className="text-amber-400">Offer</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Brand Storytelling", desc: "Define your brand's unique narrative and voice" },
              { icon: PenTool, title: "LucideBookwriting", desc: "Compelling LucideBooks for videos, ads, and campaigns" },
              { icon: Film, title: "Documentary Style", desc: "Authentic, impact-driven storytelling" },
              { icon: MessageSquare, title: "Social Stories", desc: "Platform-specific narrative strategies" },
              { icon: Target, title: "Campaign Messaging", desc: "Coherent messaging across all channels" },
              { icon: Edit, title: "Content Direction", desc: "Strategic guidance for all content" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-amber-400/30 transition-all"
                >
                  <Icon className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Story format */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-purple-900/20" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-16 h-16 text-amber-400/30 mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-white italic leading-relaxed">
              "LO Media Studio didn't just create content for us. They helped us discover 
              our brand's authentic voice. Our engagement increased by 300% in three months."
            </p>
            <div className="mt-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full mx-auto mb-2" />
              <p className="text-white font-semibold">Sarah Chen</p>
              <p className="text-gray-400 text-sm">Founder, Lumina Health</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white">Storytelling FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.slice(0, 8).map((faq, idx) => (
              <motion.div
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
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-rose-600/20 to-purple-600/20" />
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Next Chapter?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Every brand has a story waiting to be told. Let's bring yours to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
                  Start Your Story
                </button>
              </Link>
              <a
                href="https://wa.me/15142192987"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white px-8 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all"
              >
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Tell Us Your Vision
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing components
const Brain = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4a4 4 0 0 1 3.5 6A4 4 0 0 1 12 18a4 4 0 0 1-3.5-6A4 4 0 0 1 12 4z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M17 7l1.5-1.5"/><path d="M6 17l-1.5 1.5"/><path d="M22 12h-2"/><path d="M4 12H2"/><path d="M17 17l1.5 1.5"/><path d="M6 7L4.5 5.5"/></svg>;