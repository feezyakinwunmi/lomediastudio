// app/services/digital-marketing/client.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle, Sparkles, MessageSquare, Mail,
  TrendingUp, BarChart, Target, Users, Eye, Zap, Award,
  ChevronDown, ChevronUp, HelpCircle, Globe, Search, 
  ShoppingCart,
  PieChart, LineChart, Activity, DollarSign, Clock
} from 'lucide-react';

const faqs = [
  { q: "What digital marketing services does LO Media Studio offer in Ottawa?", a: "LO Media Studio provides a full suite of digital marketing services including Search Engine Optimization (SEO), Google Ads (PPC), social media marketing, content marketing, email campaigns, and lead generation strategies. These services are tailored to help Ottawa-based businesses increase online visibility, attract qualified traffic, and convert leads into customers." },
  { q: "Why is digital marketing important for businesses in Ottawa?", a: "Digital marketing helps Ottawa businesses compete locally and nationally by reaching customers where they spend most of their time, which is online. Whether you're targeting local searches, improving brand awareness, or driving sales, digital marketing ensures your business stays visible in a competitive market." },
  { q: "How does SEO help my Ottawa business grow?", a: "Search Engine Optimization (SEO) improves your website's ranking on Google, making it easier for potential customers in Ottawa to find your business when searching for related services. With proper keyword targeting, local SEO, and website optimization, SEO drives consistent and organic traffic to your site." },
  { q: "What is local SEO and why does it matter in Ottawa?", a: "Local SEO focuses on optimizing your business for location-based searches such as 'digital marketing agency in Ottawa.' It helps your business appear in Google Maps and local search results, making it easier for nearby customers to discover and contact you." },
  { q: "How long does it take to see results from digital marketing?", a: "Results vary depending on the strategy used. SEO typically takes 3–6 months to show significant improvement, while paid advertising like Google Ads can generate results almost immediately. A consistent, data-driven approach ensures long-term success." },
  { q: "What makes LO Media Studio different from other Ottawa agencies?", a: "LO Media Studio focuses on customized strategies, transparent reporting, and measurable results. Instead of using generic campaigns, they tailor each strategy to suit the unique goals and budget of Ottawa businesses, ensuring better ROI and sustainable growth." },
  { q: "Is digital marketing suitable for small businesses in Ottawa?", a: "Yes. Digital marketing is highly scalable, making it ideal for small businesses. Whether you're just starting or expanding, strategies like local SEO, social media marketing, and targeted ads help you reach the right audience without overspending." },
  { q: "How do I get started with digital marketing in Ottawa?", a: "Getting started is simple. Begin with a consultation to assess your business goals, target audience, and current online presence. From there, a tailored strategy is developed to help you grow your brand, generate leads, and increase revenue in the Ottawa market." }
];

// Animated counter component
function Counter({ from, to, suffix = '' }: { from: number; to: number; suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      const duration = 2000;
      const increment = (end - start) / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, from, to]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </div>
  );
}

export default function DigitalMarketingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google and drive organic traffic" },
    { icon: BarChart, title: "PPC Advertising", desc: "Targeted ads that deliver immediate results" },
    { icon: Mail, title: "Email Marketing", desc: "Nurture leads and build customer loyalty" },
    { icon: Target, title: "Lead Generation", desc: "Convert prospects into paying customers" },
    { icon: PieChart, title: "Analytics & Reporting", desc: "Data-driven decisions for better ROI" }
  ];

  const metrics = [
    { value: 300, label: "Campaigns Run", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 4.5, label: "Avg ROI", suffix: "x" },
    { value: 50, label: "Happy Clients", suffix: "+" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen pt-20 overflow-hidden">
      
      {/* Hero Section - Dashboard Style */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Animated grid background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6"
              >
                <Activity className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">Data-Driven Results</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Digital Marketing
                <span className="text-green-400 block">That Delivers ROI</span>
              </h1>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Data-driven digital marketing solutions designed to deliver measurable results and grow your brand in Ottawa's competitive market.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-105"
                >
                  Start Growing <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/15142192987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all border border-white/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  Free Consultation
                </a>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-4 gap-4 mt-12">
                {metrics.map((metric, idx) => (
                  <motion.div suppressHydrationWarning
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="text-center"
                  >
                    <Counter from={0} to={metric.value} suffix={metric.suffix} />
                    <p className="text-gray-400 text-xs mt-1">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Animated Dashboard Card */}
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 shadow-2xl">
                {/* Chart Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-gray-400 text-sm">live-analytics.dashboard</span>
                </div>
                
                {/* Animated Line Chart */}
                <svg className="w-full h-48 mb-6" viewBox="0 0 500 150">
                  <motion.path suppressHydrationWarning
                    d="M0,100 Q50,80 100,90 T200,60 T300,70 T400,40 T500,30"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.path suppressHydrationWarning
                    d="M0,120 Q50,110 100,115 T200,95 T300,100 T400,85 T500,75"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                </svg>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Click-Through Rate", value: "4.8%", change: "+0.6%", up: true },
                    { label: "Conversion Rate", value: "12.3%", change: "+2.1%", up: true },
                    { label: "Cost Per Click", value: "$0.42", change: "-$0.08", up: false },
                    { label: "ROAS", value: "487%", change: "+32%", up: true }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-900/50 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">{item.label}</p>
                      <p className="text-white text-xl font-bold">{item.value}</p>
                      <p className={`text-xs ${item.up ? 'text-green-400' : 'text-red-400'}`}>{item.change}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div suppressHydrationWarning
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-green-500 rounded-full p-3 shadow-lg"
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Card Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-green-500 text-sm uppercase tracking-wider font-semibold">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Comprehensive Digital Marketing
              <span className="text-green-500"> Solutions</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Everything you need to grow your online presence and drive measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div suppressHydrationWarning
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Design */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-500 text-sm uppercase tracking-wider font-semibold">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              How We Drive <span className="text-green-500">Results</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500 to-transparent hidden lg:block" />
            
            {[
              { step: "01", title: "Discovery & Audit", desc: "We analyze your current digital presence, competitors, and market opportunities", icon: Search, color: "green" },
              { step: "02", title: "Strategy Development", desc: "Custom marketing strategy tailored to your goals, budget, and target audience", icon: Target, color: "blue" },
              { step: "03", title: "Implementation", desc: "Launch campaigns across SEO, PPC, social media, and email channels", icon: Zap, color: "purple" },
              { step: "04", title: "Monitor & Optimize", desc: "Continuous tracking, A/B testing, and optimization for maximum ROI", icon: BarChart, color: "orange" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div suppressHydrationWarning
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 mb-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-green-500" />
                        </div>
                        <span className="text-2xl font-bold text-gray-300">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Everything you need to know about our digital marketing services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div suppressHydrationWarning
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-green-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div suppressHydrationWarning
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Scale Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's create a custom digital marketing strategy that drives real growth
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
                  Get Free Audit
                </button>
              </Link>
              <a
                href="https://wa.me/15142192987"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}