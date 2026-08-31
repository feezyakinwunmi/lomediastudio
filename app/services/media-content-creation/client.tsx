// app/services/media-content-creation/page.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Award, 
  Heart, 
  Zap, 
  Shield,
  TrendingUp,
  Eye,
  Target,
  Layers,
  Smartphone,
  Globe,
  Camera,
  Film,
  Edit,
  Megaphone,
  BarChart,
  MessageSquare,
  Mail,
  Sparkles,
  Play,
  Quote,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';


// FAQ Accordion Component
function FAQAccordion({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-6 h-6 text-red-500" />
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <button
              onClick={() => toggleQuestion(idx)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-base font-semibold text-gray-900 pr-4">{faq.q}</span>
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            {openIndex === idx && (
              <motion.div suppressHydrationWarning
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-4"
              >
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Service-specific data
const serviceData = {
  title: "Media Content Creation",
  tagline: "Drive engagement, build authority & convert your audience",
  description: "At LO Media Studio, we don't just create content; we create strategic media experiences that attract, engage, and convert your audience to clients. In today's digital world, your brand's success depends on how well you communicate your message. That communication starts with high-quality media content creation.",
  
  whatItIs: "Media content creation is the process of developing visual, written, and video content that represents your brand online. At LO Media Studio, we help create the right content for the right audience at the right time.",
  
  servicesOffered: [
    "Video Content Production (Brand videos, Social media reels, Product showcases, Promotional ads)",
    "Creative Visual Content (Social media graphics, Campaign visuals, Brand identity content, Motion graphics)",
    "Content Strategy & Storytelling (Define content direction, Understand your audience, Create consistent brand messaging)",
    "Social Media Content Creation (Scroll-stopping posts, Engaging captions, Platform-specific content)",
    "Short-Form & Viral Content (TikTok-style content, Instagram Reels, YouTube Shorts)"
  ],
  
  benefits: [
    { icon: Eye, title: "Increase Brand Awareness", desc: "Get your brand in front of the right audience" },
    { icon: Users, title: "Build Audience Trust", desc: "Establish credibility with quality content" },
    { icon: TrendingUp, title: "Drive Website Traffic", desc: "Bring more visitors to your digital assets" },
    { icon: Target, title: "Generate Leads & Conversions", desc: "Turn viewers into paying customers" },
    { icon: Award, title: "Stay Ahead of Competitors", desc: "Dominate your niche with strategic content" }
  ],
  
  process: [
    { step: "01", title: "Discovery", desc: "We learn about your brand, audience, and goals" },
    { step: "02", title: "Strategy", desc: "Develop a content plan tailored to your needs" },
    { step: "03", title: "Creation", desc: "Produce high-quality, engaging content" },
    { step: "04", title: "Optimization", desc: "Analyze performance and refine approach" }
  ],
  
  whyChooseUs: "We don't just post content; we post content that converts. Strategy-driven creation, high-quality visuals, platform-specific optimization, and consistent brand storytelling.",
  
  faqs: [
    {
      q: "What is media content creation and why is it important for Ottawa businesses?",
      a: "Media content creation involves producing videos, photos, graphics, and branded digital content to promote your business. In Ottawa's competitive market, high-quality content helps businesses increase visibility, build trust, and attract local customers online."
    },
    {
      q: "What types of content creation services are available in Ottawa?",
      a: "Ottawa media agencies offer a wide range of services including video production, corporate photography, social media content, branding visuals, drone videography, and promotional campaigns tailored to local businesses."
    },
    {
      q: "How can video production help my Ottawa business grow?",
      a: "Video production helps Ottawa businesses boost engagement, improve SEO rankings, and increase conversions. Platforms like Google and YouTube prioritize video content, making it a powerful tool for attracting local customers."
    },
    {
      q: "Do you offer full-service media production in Ottawa?",
      a: "Yes, most Ottawa media content creation companies provide end-to-end services including concept development, scripting, filming, editing, and post-production to ensure high-quality results."
    },
    {
      q: "How much do content creation services cost in Ottawa, Canada?",
      a: "The cost of media content creation in Ottawa varies depending on project complexity, video length, and production requirements. Many agencies offer flexible pricing packages to suit small businesses and larger organizations."
    },
    {
      q: "How long does it take to produce media content?",
      a: "Simple projects like social media videos can take a few days, while larger productions may take several weeks. Ottawa agencies typically provide clear timelines during the planning phase."
    },
    {
      q: "Can content creation improve my social media presence in Ottawa?",
      a: "Yes. High-quality media content helps Ottawa businesses increase engagement, grow followers, and maintain a strong and consistent brand presence across platforms like Instagram, Facebook, and LinkedIn."
    },
    {
      q: "Why should I hire a professional media agency in Ottawa?",
      a: "Hiring a professional Ottawa media agency ensures access to expert storytelling, advanced equipment, and high-quality production. This results in polished content that enhances your brand credibility and drives results."
    }
  ]
};

export default function MediaContentCreationPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-gray-100 overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
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
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-1 border border-blue-500/30">
                <span className="text-blue-400 text-sm font-semibold">Content That Converts</span>
              </div>
            </motion.div>
            
            <motion.h1 suppressHydrationWarning
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {serviceData.title}
              <span className="text-blue-500 block">That Performs</span>
            </motion.h1>
            
            <motion.p suppressHydrationWarning
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              {serviceData.tagline}
            </motion.p>

            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center mt-8"
            >
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/15142192987"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 border border-white/20"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div suppressHydrationWarning
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div suppressHydrationWarning
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4">
                <div className="bg-blue-50 rounded-full px-4 py-1 border border-blue-200">
                  <span className="text-blue-600 text-sm font-semibold">Overview</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Strategic Media Content That Drives Results
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {serviceData.description}
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2">What It Is</h3>
                <p className="text-gray-600">{serviceData.whatItIs}</p>
              </div>
            </motion.div>

            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074"
                  alt="Media Content Creation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              {/* Floating stats card */}
              <motion.div suppressHydrationWarning
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-500">Client Satisfaction</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <div className="bg-blue-50 rounded-full px-4 py-1 border border-blue-200">
                <span className="text-blue-600 text-sm font-semibold">What We Offer</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comprehensive Content Solutions
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Everything you need to create compelling content that engages your audience and drives results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.servicesOffered.map((service, idx) => (
              <motion.div suppressHydrationWarning
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4">
                <div className="bg-green-50 rounded-full px-4 py-1 border border-green-200">
                  <span className="text-green-600 text-sm font-semibold">Key Benefits</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Quality Content Matters
              </h2>
              <p className="text-gray-600 mb-6">
                Professional content creation delivers measurable results that impact your bottom line
              </p>
              <div className="space-y-4">
                {serviceData.benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div suppressHydrationWarning
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                        <p className="text-sm text-gray-500">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <div className="text-center mb-6">
                <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Why Choose LO Media Studio</h3>
                <p className="text-white/80">{serviceData.whyChooseUs}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  "Strategy-Driven",
                  "High-Quality Visuals",
                  "Platform Optimized",
                  "Consistent Storytelling",
                  "Data-Backed Decisions",
                  "Results Focused"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white/70" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <div className="bg-purple-50 rounded-full px-4 py-1 border border-purple-200">
                <span className="text-purple-600 text-sm font-semibold">Our Process</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How We Create Content That Works
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A strategic approach to ensure every piece of content delivers value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {serviceData.process.map((step, idx) => (
              <motion.div suppressHydrationWarning
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center relative"
              >
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent -z-10" />
                )}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FAQAccordion faqs={serviceData.faqs} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4">
                <div className="bg-blue-50 rounded-full px-4 py-1 border border-blue-200">
                  <span className="text-blue-600 text-sm font-semibold">Get In Touch</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Create Amazing Content?
              </h2>
              <p className="text-gray-600 mb-6">
                Let's discuss your content needs and create a strategy that drives results for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <a href="mailto:layoobidikepublications@gmail.com" className="text-gray-900 hover:text-blue-600">
                      layoobidikepublications@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <a href="https://wa.me/15142192987" target="_blank" className="text-gray-900 hover:text-green-600">
                      +1 514 219 2987
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                    placeholder="Tell us about your content needs..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-white/80 mb-8">
              Let's create content that captures attention, builds trust, and drives real business results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <motion.button suppressHydrationWarning
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2"
                >
                  Book a Consultation <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button suppressHydrationWarning
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold border border-white/30"
                >
                  Explore All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}