// app/contact/page.tsx
'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
//   Instagram,
//   Twitter,
//   Facebook,
//   Linkedin,
//   Youtube,
  Globe,
  Building2,
  Users,
  Award,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@lomediastudio.com", "support@lomediastudio.com"],
      link: "mailto:hello@lomediastudio.com",
      color: "text-purple-900",
      bgColor: "bg-purple-900/10"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      link: "tel:+15551234567",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: ["+234 801 234 5678", "Available 24/7"],
      link: "https://wa.me/2348012345678",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Creative Avenue", "New York, NY 10001", "United States"],
      link: "https://maps.google.com",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

//   const socialLinks = [
//     { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
//     { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
//     { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
//     { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
//     { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" }
//   ];

  const services = [
    "Web Creation",
    "Event Videography",
    "Recording Studio",
    "Book Writing",
    "Branding",
    "Content Creation",
    "Marketing Strategy",
    "Creative Direction"
  ];

  return (
    <main ref={sectionRef} className="bg-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative md:py-20 min-h-[50vh] flex items-center overflow-hidden">
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
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-full px-4 py-1 border border-purple-900/30">
                <span className="text-red-400 text-sm font-semibold">Get in Touch</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Let's Start a
              <span className="text-purple-900 block">Conversation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Have a project in mind? We'd love to hear about it. Reach out to us and let's create something amazing together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link}
                target={method.icon === MapPin ? "_blank" : undefined}
                rel={method.icon === MapPin ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-6 text-center group hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 ${method.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className={`w-7 h-7 ${method.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                {method.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 text-sm mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-all"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-purple-900 hover:bg-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Information Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-900/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="text-gray-900 font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-900/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-purple-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Connect With Us</h3>
                </div>
                {/* <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-all`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div> */}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: "500+", label: "Happy Clients" },
                  { icon: Award, value: "50+", label: "Awards Won" },
                  { icon: Building2, value: "15+", label: "Countries" },
                  { icon: Sparkles, value: "98%", label: "Satisfaction" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-xl p-4 text-center"
                  >
                    <stat.icon className="w-6 h-6 text-purple-900 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl overflow-hidden"
          >
            <div className="h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e6e5c0b%3A0xc5c5e5c5e5c5e5c5!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-6 text-center border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                123 Creative Avenue, New York, NY 10001, United States
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-3">
              <div className="bg-purple-900/10 rounded-full px-4 py-1 border border-purple-900/20">
                <span className="text-purple-900 text-sm font-semibold">FAQ</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can I expect a response?",
                a: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please give us a call."
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer a free 30-minute initial consultation to discuss your project and understand your needs."
              },
              {
                q: "What's your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. We'll provide a detailed timeline during our consultation."
              },
              {
                q: "Do you work with international clients?",
                a: "Absolutely! We work with clients worldwide and have experience managing remote collaborations seamlessly."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900 to-red-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Reach out to us today!
            </p>
            <a
              href="https://wa.me/2348012345678?text=Hi! I'm interested in starting a project with LomeMediaStudio. Can we discuss?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:shadow-lg transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}