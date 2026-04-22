// app/services/creative-direction/client.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle, Sparkles, MessageSquare, Mail,
  Compass, Eye, Target, Layers, Crown, Brain,Heart,
  ChevronDown, ChevronUp, HelpCircle, Award, Users,
  Clock, Zap, Shield, Star, Lightbulb, Route,
  TrendingUp, BarChart, PieChart, Globe, Coffee
} from 'lucide-react';

const faqs = [
  { q: "Why is creative direction more important for my brand than design?", a: "Things look good because of their design. They function because of creative direction. It ensures that your brand not only draws attention in Ottawa but also fosters trust and motivates action by coordinating your images, messaging, and content with a defined plan." },
  { q: "How do you make sure your innovative concepts genuinely produce outcomes?", a: "We don't make anything alone. Every idea is supported by strategy, which includes market positioning, audience analysis, and specific corporate objectives. This indicates that your efforts are purposefully designed to succeed in a cutthroat market like Ottawa in addition to being aesthetically pleasing." },
  { q: "How do you collaborate with brands located in Ottawa?", a: "To understand your brand, audience, and local context, we start with a discovery session. After that, we create a creative direction, present ideas, work together to enhance them, and monitor execution to make sure everything stays on track from beginning to end." },
  { q: "If I already have a brand but it seems inconsistent, can you take over?", a: "Yes, and you might be surprised to learn how frequent this is. We conduct an assessment of your existing brand, find any holes, and realign your language and images to make everything feel strong, unified, and purposeful across all touchpoints." },
  { q: "Do you modify creative direction for the local audience in Ottawa?", a: "Of course. We execute with local relevance while thinking internationally. To make sure your brand feels genuine and relevant while still standing out, we take into account Ottawa's varied audience, business environment, and cultural tone." },
  { q: "What results may I anticipate from your service for creative direction?", a: "Brand standards, campaign concepts, content direction, mood boards, message frameworks, and production oversight are all necessary to provide clarity and consistency, depending on your demands." },
  { q: "Will I participate in the process of creation?", a: "Indeed. We consider our customers to be partners. While we take care of the hard lifting of strategy and execution, you will be involved at crucial phases, particularly during concept creation and approvals." },
  { q: "How can I determine whether LO Media House is a good fit for my brand?", a: "We're a great fit if you're searching for more than just content—if you want a clear direction, a better identity, and innovative work that genuinely advances your company. Our strategy is designed for companies that are prepared to expand purposefully, particularly in cities such as Ottawa." }
];

export default function CreativeDirectionClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  const pillars = [
    { icon: Eye, title: "Vision", desc: "Define where your brand is heading", color: "from-indigo-500 to-blue-500" },
    { icon: Target, title: "Strategy", desc: "Map the path to get there", color: "from-purple-500 to-indigo-500" },
    { icon: Layers, title: "Execution", desc: "Bring ideas to life across channels", color: "from-blue-500 to-cyan-500" },
    { icon: Crown, title: "Leadership", desc: "Guide creative teams to excellence", color: "from-amber-500 to-orange-500" }
  ];

  const deliverables = [
    { title: "Brand Strategy", items: ["Positioning", "Messaging", "Voice & Tone"] },
    { title: "Creative Assets", items: ["Campaign Concepts", "Mood Boards", "Style Guides"] },
    { title: "Production", items: ["Photo/Video Direction", "Design Oversight", "Quality Control"] }
  ];

  const industries = [
    "Tech & SaaS", "Luxury Goods", "Hospitality", "Fashion & Beauty",
    "Healthcare", "Education", "Non-Profit", "Real Estate"
  ];

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 min-h-screen pt-20 overflow-hidden">
      
      {/* Hero Section - Executive / Leadership Style */}
      <section className="relative min-h-screen flex items-center">
        {/* Premium gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        </div>

        {/* Animated compass rings */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-indigo-500/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-indigo-500/30 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-6"
              >
                <Compass className="w-4 h-4 text-indigo-400" />
                <span className="text-indigo-400 text-sm font-semibold">CREATIVE LEADERSHIP</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Creative
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 block">
                  Direction
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Expert creative guidance to elevate your brand and ensure consistent, 
                impactful messaging across all platforms and campaigns.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-105"
                >
                  Lead Your Brand <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#process"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all border border-white/20"
                >
                  <Eye className="w-4 h-4" />
                  View Approach
                </a>
              </div>

              {/* Client logos placeholder */}
              <div className="mt-12">
                <p className="text-gray-500 text-xs mb-3">TRUSTED BY LEADING BRANDS</p>
                <div className="flex gap-6 opacity-50">
                  {["BRAND", "STUDIO", "AGENCY", "CREATIVE"].map((logo, idx) => (
                    <span key={idx} className="text-gray-400 text-xs font-bold tracking-wider">{logo}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Vision Board */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
                {/* Vision Statement */}
                <div className="mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 text-xs font-semibold">CREATIVE VISION</span>
                  </div>
                  <p className="text-white text-sm italic">
                    "To transform brands through visionary creative direction that 
                    inspires, connects, and leads markets."
                  </p>
                </div>

                {/* Leadership Principles */}
                <div className="space-y-4">
                  {[
                    { icon: Brain, title: "Strategic Clarity", desc: "Every decision serves a purpose" },
                    { icon: Lightbulb, title: "Innovation", desc: "Pushing creative boundaries" },
                    { icon: Users, title: "Collaboration", desc: "Partnership-driven approach" },
                    { icon: Target, title: "Results", desc: "Measurable business impact" }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">{item.title}</div>
                          <div className="text-gray-400 text-xs">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-3 shadow-xl"
              >
                <Route className="w-5 h-5 text-white" />
              </motion.div>
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
          <div className="flex flex-col items-center gap-1">
            <span className="text-gray-400 text-xs">Explore the vision</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-indigo-400 text-sm uppercase tracking-wider font-semibold">The Framework</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
              Four Pillars of <span className="text-indigo-400">Creative Direction</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-indigo-500/30 transition-all">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm">{pillar.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-indigo-400 text-sm uppercase tracking-wider font-semibold">Deliverables</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                What You <span className="text-indigo-400">Receive</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Comprehensive creative direction that provides clarity, consistency, and a competitive edge.
              </p>
              
              <div className="space-y-4">
                {deliverables.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/5 rounded-xl p-4"
                  >
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.items.map((subItem, sIdx) => (
                        <span key={sIdx} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
                          {subItem}
                        </span>
                      ))}
                    </div>
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
              {/* Compass Rose */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Compass className="w-40 h-40 text-indigo-400/30" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="w-32 h-32 border-2 border-indigo-400/50 rounded-full" />
                    </motion.div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <Crown className="w-8 h-8 text-amber-400 mx-auto" />
                      <span className="text-white text-xs mt-2 block">True North</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry tags */}
              <div className="absolute -bottom-6 left-0 right-0">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-gray-400 text-xs text-center mb-2">Industries We Serve</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {industries.map((industry, idx) => (
                      <span key={idx} className="text-xs text-white/70 bg-white/5 px-2 py-1 rounded">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Process - Leadership Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              The <span className="text-indigo-400">Creative Direction</span> Process
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 hidden lg:block" />
            
            {[
              { step: "01", title: "Discovery", desc: "Deep-dive into your brand, goals, and challenges", icon: Brain, duration: "2 weeks" },
              { step: "02", title: "Strategy", desc: "Define creative direction and brand positioning", icon: Target, duration: "2 weeks" },
              { step: "03", title: "Creation", desc: "Develop concepts, mood boards, and frameworks", icon: Lightbulb, duration: "3 weeks" },
              { step: "04", title: "Direction", desc: "Guide production and ensure quality execution", icon: Crown, duration: "Ongoing" }
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
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-indigo-400" />
                          </div>
                          <span className="text-3xl font-bold text-indigo-400/50">{item.step}</span>
                        </div>
                        <span className="text-xs text-gray-500">{item.duration}</span>
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Campaigns Directed", icon: Target },
              { value: "50+", label: "Brands Transformed", icon: Crown },
              { value: "98%", label: "Client Retention", icon: Heart },
              { value: "15+", label: "Industry Awards", icon: Award }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
                >
                  <Icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white">Creative Direction FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
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
                    <ChevronUp className="w-5 h-5 text-indigo-400" />
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

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Compass className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Lead Your Brand to New Heights?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Let's chart the course for your brand's creative future together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
                  Start the Conversation
                </button>
              </Link>
              <a
                href="https://wa.me/15142192987"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white px-8 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all"
              >
                <Coffee className="w-4 h-4 inline mr-2" />
                Schedule a Discovery Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}