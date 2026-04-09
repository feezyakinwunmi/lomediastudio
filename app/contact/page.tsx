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
      details: ["info@lopublications.com"],
      link: "mailto:info@lopublications.com",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+514 219 2987"],
      link: "tel:+5142192987",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: ["+234 801 234 5678", "Available 24/7"],
      link: "https://wa.me/2348012345678",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["1551 Lycee Place", "Ottawa, ON K1G4B5", "Canada"],
      link: "https://maps.google.com/?q=1551+Lycee+Place+Ottawa+ON+K1G4B5",
      color: "text-red-500",
      bgColor: "bg-red-50"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ];

  const services = [
    "Media Content Creation",
    "Digital Marketing",
    "Email Marketing",
    "Photography",
    "Storytelling",
    "Video Production",
    "Visual Brand Development",
    "Creative Direction"
  ];

  return (
    <main ref={sectionRef} className="bg-gray-100 overflow-hidden pt-20">
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
              <div className="bg-red-500/20 backdrop-blur-sm rounded-full px-4 py-1 border border-red-500/30">
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
              <span className="text-red-500 block">Conversation</span>
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
      <section className="py-16">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                className="bg-white border border-gray-200 rounded-2xl p-5 text-center group hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 ${method.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <method.icon className={`w-5 h-5 ${method.color}`} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{method.title}</h3>
                {method.details.map((detail, i) => (
                  <p key={i} className="text-gray-500 text-xs">{detail}</p>
                ))}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-500 text-sm mb-6">
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
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
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
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
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
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
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
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
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
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
              className="space-y-6"
            >
              {/* Contact Info Cards */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                    <Mail className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                </div>
                <a href="mailto:info@lopublications.com" className="text-gray-600 hover:text-red-500 transition-colors text-sm block">
                  info@lopublications.com
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                    <Phone className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
                </div>
                <a href="tel:+5142192987" className="text-gray-600 hover:text-red-500 transition-colors text-sm block">
                  +514 219 2987
                </a>
                <span className="text-[11px] text-gray-400 mt-1 block">Mon-Fri, 9am - 6pm EST</span>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Visit Us</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  1551 Lycee Place<br />
                  Ottawa, ON K1G4B5<br />
                  Canada
                </p>
              </div>

              {/* Office Hours */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                    <Clock className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600 text-sm">{item.day}</span>
                      <span className="text-gray-900 font-medium text-sm">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: "50+", label: "Happy Clients" },
                  { icon: Award, value: "15+", label: "Awards Won" },
                  { icon: Building2, value: "10+", label: "Countries" },
                  { icon: Sparkles, value: "98%", label: "Satisfaction" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 text-center"
                  >
                    <stat.icon className="w-5 h-5 text-red-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-[11px] text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
          >
            <div className="h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.678912345678!2d-75.660123456789!3d45.400123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b3c8b5e5e5%3A0x123456789abcdef!2s1551%20Lycee%20Pl%2C%20Ottawa%2C%20ON%20K1G4B5!5e0!3m2!1sen!2sca!4v1641234567890!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-5 text-center border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                1551 Lycee Place, Ottawa, ON K1G4B5, Canada
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-block mb-3">
              <div className="bg-red-50 rounded-full px-4 py-1 border border-red-200">
                <span className="text-red-500 text-sm font-semibold">FAQ</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How quickly can I expect a response?",
                a: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please give us a call."
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer a free initial consultation to discuss your project and understand your needs."
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
                className="bg-white border border-gray-200 rounded-xl p-5"
              >
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h3>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto">
              Let's create something extraordinary together. Reach out to us today!
            </p>
            <a
              href="https://wa.me/2348012345678?text=Hi! I'm interested in starting a project with LO Media House. Can we discuss?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 mx-auto hover:shadow-lg transition-all text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}