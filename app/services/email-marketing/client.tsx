// app/services/email-marketing/client.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle, Sparkles, MessageSquare, Mail,
  Heart, Users, TrendingUp, Target, Gift, Clock,
  ChevronDown, ChevronUp, HelpCircle, Inbox, Send,
  MailOpen, ThumbsUp, Star, Phone, MapPin, Calendar
} from 'lucide-react';

const faqs = [
  { q: "What is email marketing and how does it work for businesses in Ottawa?", a: "Email marketing is a digital marketing strategy that involves sending targeted messages to a list of subscribers. For businesses in Ottawa, it provides a direct way to communicate with customers, share updates, promote products, and build long term relationships in a measurable way." },
  { q: "Why should businesses in Ottawa invest in email marketing?", a: "For businesses in Ottawa, email marketing offers a reliable and cost effective way to stay connected with customers. Unlike social media platforms, Ottawa businesses own their email lists, which means they are not dependent on changing algorithms to reach their audience." },
  { q: "How can email marketing help increase sales for stores in Ottawa?", a: "Email marketing helps Ottawa based stores increase sales by promoting offers, new arrivals, and exclusive deals directly to their audience. It also drives repeat purchases by keeping Ottawa customers engaged and connected to the brand." },
  { q: "Is email marketing suitable for small and medium sized businesses in Ottawa?", a: "Yes, email marketing is highly effective for small and medium sized businesses in Ottawa. It is scalable, affordable, and allows local businesses to compete with larger brands by building strong and personalized customer relationships." },
  { q: "What kind of results can Ottawa businesses expect from email marketing?", a: "Ottawa businesses can expect improved customer engagement, higher conversion rates, and stronger customer retention. When executed properly, email marketing consistently delivers one of the highest returns on investment for businesses in Ottawa." },
  { q: "How does email marketing help build customer loyalty in Ottawa?", a: "Email marketing helps Ottawa businesses build loyalty by maintaining consistent communication with their audience. Through valuable content, updates, and personalized offers, businesses can strengthen trust and long term relationships with Ottawa customers." },
  { q: "Do Ottawa businesses need a large email list to get started?", a: "No, Ottawa businesses do not need a large email list to begin. Even a small but engaged audience in Ottawa can deliver strong results. The focus should be on building a quality list of interested subscribers over time." },
  { q: "How can a media house like LO Media support email marketing for Ottawa businesses?", a: "A media house like LO Media helps Ottawa businesses by combining strategy, design, and technical expertise to deliver effective email campaigns. From list building to campaign execution and performance tracking, Ottawa businesses benefit from a structured system designed for consistent growth." }
];

// Envelope opening animation component
function EnvelopeIcon() {
  return (
    <div className="relative w-20 h-20 mx-auto">
      <motion.div
        className="absolute inset-0 bg-pink-500 rounded-lg"
        initial={{ rotateX: 0 }}
        animate={{ rotateX: 180 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
        style={{ transformOrigin: "top", backfaceVisibility: "visible" }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-pink-400 rounded-b-lg" />
      </motion.div>
      <Mail className="w-20 h-20 text-pink-500 absolute inset-0" />
    </div>
  );
}

export default function EmailMarketingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [activeCampaign, setActiveCampaign] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const campaigns = [
    { type: "Welcome Series", openRate: "68%", ctr: "24%", conversion: "12%" },
    { type: "Newsletter", openRate: "42%", ctr: "11%", conversion: "5%" },
    { type: "Abandoned Cart", openRate: "52%", ctr: "18%", conversion: "15%" },
    { type: "Re-engagement", openRate: "35%", ctr: "8%", conversion: "4%" }
  ];

  const benefits = [
    { icon: Heart, title: "Build Customer Loyalty", desc: "Create lasting relationships with personalized communication" },
    { icon: TrendingUp, title: "Increase Sales", desc: "Drive repeat purchases with targeted offers" },
    { icon: Target, title: "High ROI", desc: "Average $42 return for every $1 spent" },
    { icon: Users, title: "Own Your Audience", desc: "No algorithm changes can affect your reach" }
  ];

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 min-h-screen pt-20 overflow-hidden">
      
      {/* Hero Section - Warm & Inviting */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30" />
        
        {/* Floating hearts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/30"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [-20, -100], opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            style={{ left: `${10 + i * 15}%`, top: `${20 + i * 10}%` }}
          >
            <Heart className="w-6 h-6" fill="currentColor" />
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 mb-6"
              >
                <Mail className="w-4 h-4 text-pink-500" />
                <span className="text-pink-600 text-sm font-semibold">Direct & Personal</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Email Marketing
                <span className="text-pink-500 block">That Connects</span>
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Build meaningful relationships with your audience through strategic, 
                data-driven email campaigns that nurture leads and drive conversions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105"
                >
                  Start Building <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/15142192987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-pink-500" />
                  Free Strategy Call
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 mt-8">
                {["42x ROI", "98% Deliverability", "24/7 Support"].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Email Preview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
              style={{ perspective: 1000 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:rotate-0 transition-transform duration-500">
                {/* Email Header */}
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">LO Media Studio</p>
                      <p className="text-white/70 text-xs">newsletter@lomediastudio.com</p>
                    </div>
                  </div>
                </div>
                
                {/* Email Body */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3"
                    animate={{ opacity: [0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    Special Offer Just for You! 🎉
                  </motion.h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Hi there! We have an exclusive deal for our Ottawa subscribers...
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-pink-500 text-white px-6 py-2 rounded-lg text-sm font-semibold"
                  >
                    Claim Your Offer →
                  </motion.button>
                </div>
                
                {/* Email Footer */}
                <div className="bg-gray-50 p-4 border-t border-gray-100">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Unsubscribe</span>
                    <span>View in Browser</span>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <MailOpen className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">68%</div>
                    <div className="text-xs text-gray-500">Open Rate</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaign Performance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-pink-500 text-sm uppercase tracking-wider font-semibold">Campaign Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Email Campaigns <span className="text-pink-500">That Perform</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaigns.map((campaign, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {idx === 0 && <Gift className="w-6 h-6 text-pink-500" />}
                  {idx === 1 && <Mail className="w-6 h-6 text-pink-500" />}
                  {idx === 2 && <ShoppingCart className="w-6 h-6 text-pink-500" />}
                  {idx === 3 && <Heart className="w-6 h-6 text-pink-500" />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{campaign.type}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Open Rate</span>
                    <span className="font-semibold text-pink-500">{campaign.openRate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Click-Through</span>
                    <span className="font-semibold text-pink-500">{campaign.ctr}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Conversion</span>
                    <span className="font-semibold text-pink-500">{campaign.conversion}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-pink-500 text-sm uppercase tracking-wider font-semibold">Why Email Works</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                The Power of <span className="text-pink-500">Direct Communication</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Email marketing delivers the highest ROI of any marketing channel, 
                with an average return of $42 for every $1 spent.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                    >
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-pink-500" />
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-900">ROI Comparison</h3>
                  <span className="text-xs text-gray-400">Annual Average</span>
                </div>
                <div className="space-y-4">
                  {[
                    { channel: "Email Marketing", roi: 4200, color: "bg-pink-500" },
                    { channel: "SEO", roi: 1400, color: "bg-blue-500" },
                    { channel: "Social Media", roi: 950, color: "bg-purple-500" },
                    { channel: "PPC", roi: 800, color: "bg-green-500" }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{item.channel}</span>
                        <span className="font-semibold">${item.roi} per $1</span>
                      </div>
                      <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.roi / 42}%` }}
                          transition={{ duration: 1, delay: idx * 0.2 }}
                          className={`h-full ${item.color} rounded-lg flex items-center justify-end pr-2 text-white text-xs font-bold`}
                        >
                          {item.roi}%
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automation Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Automated <span className="text-pink-500">Workflows</span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Set it once, and let automation do the heavy lifting
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 hidden lg:block" />
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "User Signs Up", icon: Users, desc: "Subscriber joins your list" },
                { step: "2", title: "Welcome Email", icon: Mail, desc: "Automated welcome sequence" },
                { step: "3", title: "Nurture Series", icon: Heart, desc: "Educational content" },
                { step: "4", title: "Conversion", icon: Target, desc: "Make the sale" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative text-center"
                  >
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 z-10 relative">
                      <Icon className="w-8 h-8 text-pink-500" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-pink-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-pink-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Send className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Connect With Your Audience?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Start building meaningful email relationships that drive real results
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
                  Start Your Campaign
                </button>
              </Link>
              <a
                href="https://wa.me/15142192987"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Ask Questions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing imports
const ShoppingCart = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 2h4l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L22 7H6"/></svg>;