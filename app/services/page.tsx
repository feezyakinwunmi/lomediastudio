// app/services/page.tsx
'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Code2, 
  Video, 
  Music, 
  BookOpen, 
  Palette, 
  PenTool, 
  Briefcase, 
  Sparkles,
  CheckCircle,
  Clock,
  Award,
  Users,
  Star,
  Zap,
  Shield,
  TrendingUp,
  MessageCircle,
  FileText,
  Share2,
  Eye,
  Heart,
  DollarSign,
  Target,
  Layers,
  Smartphone,
  Globe,
  Camera,
  Mic,
  Headphones,
  Film,
  Edit,
  Megaphone,
  BarChart,
  MessageSquare
} from 'lucide-react';

// Service Categories with Detailed Info
const services = [
  {
    id: 1,
    title: "Web Creation",
    icon: Code2,
    color: "blue",
    image: "/bg4.jpg",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    shape: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
    description: "Custom websites and web applications that blend stunning design with powerful functionality, creating digital experiences that captivate and convert.",
    detailedDescription: "We create bespoke digital experiences that not only look beautiful but also drive results. Our web solutions are built with cutting-edge technologies, responsive design, and user-centric approaches to ensure your online presence stands out.",
    features: [
      "Custom responsive web design",
      "E-commerce solutions",
      "CMS integration (WordPress, Sanity, etc.)",
      "Performance optimization",
      "SEO-friendly architecture",
      "Interactive animations",
      "Progressive Web Apps (PWA)",
      "API integration"
    ],
    benefits: [
      { icon: TrendingUp, text: "Increase conversion rates by up to 40%", highlight: true },
      { icon: Smartphone, text: "Fully responsive across all devices", highlight: false },
      { icon: Zap, text: "Lightning-fast load times", highlight: false },
      { icon: Globe, text: "Global reach with multilingual support", highlight: false }
    ],
    process: [
      "Discovery & Research",
      "UI/UX Design",
      "Development",
      "Testing & QA",
      "Launch & Deployment",
      "Ongoing Support"
    ],
    whatsappMessage: "Hi! I'm interested in your Web Creation services. Can we discuss my project?"
  },
  {
    id: 2,
    title: "Event Videography",
    icon: Video,
    color: "green",
    image: "/bg2.jpg",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    shape: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
    description: "Professional event coverage capturing every moment with cinematic precision and storytelling that preserves the emotion and energy of your special occasions.",
    detailedDescription: "From corporate conferences to weddings, our team captures the essence of your events with multiple camera angles, drone footage, and cinematic editing. We tell your story through the lens, creating lasting memories that resonate.",
    features: [
      "Multi-camera setup",
      "Drone aerial footage",
      "Live streaming capabilities",
      "Same-day highlight reels",
      "Professional audio capture",
      "Cinematic color grading",
      "Post-event documentary",
      "Social media ready clips"
    ],
    benefits: [
      { icon: Film, text: "Cinematic quality production", highlight: true },
      { icon: Clock, text: "Rapid turnaround time", highlight: false },
      { icon: Users, text: "Engage remote audiences", highlight: false },
      { icon: Award, text: "Award-winning cinematographers", highlight: false }
    ],
    process: [
      "Pre-production Planning",
      "Site Visit & Scouting",
      "Equipment Setup",
      "Live Coverage",
      "Post-Production",
      "Delivery & Archiving"
    ],
    whatsappMessage: "Hi! I'm interested in your Event Videography services. I have an upcoming event I'd like to discuss."
  },
  {
    id: 3,
    title: "Recording Studio",
    icon: Music,
    color: "purple",
    image: "/bg3.jpg",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    shape: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
    description: "State-of-the-art audio recording, mixing, and mastering for music, podcasts, and voiceovers, delivering crystal-clear sound that captures every nuance.",
    detailedDescription: "Our professional recording studio is equipped with top-tier equipment and acoustically treated rooms to deliver pristine audio quality. Whether you're recording an album, podcast, or voiceover, we ensure your sound is flawless.",
    features: [
      "Isolated recording booths",
      "Professional mixing consoles",
      "Vocal tuning & editing",
      "Mastering services",
      "Podcast production",
      "Voiceover recording",
      "Sound design",
      "Remote collaboration"
    ],
    benefits: [
      { icon: Mic, text: "Studio-grade audio quality", highlight: true },
      { icon: Headphones, text: "Professional monitoring", highlight: false },
      { icon: Clock, text: "Flexible booking hours", highlight: false },
      { icon: Award, text: "Experienced sound engineers", highlight: false }
    ],
    process: [
      "Pre-session Consultation",
      "Setup & Sound Check",
      "Recording Session",
      "Editing & Processing",
      "Mixing",
      "Mastering"
    ],
    whatsappMessage: "Hi! I'm interested in booking time at your Recording Studio. Can you share availability and rates?"
  },
  {
    id: 4,
    title: "Book Writing",
    icon: BookOpen,
    color: "orange",
    image: "/bw.jpg",
    bgGradient: "from-orange-500/20 to-amber-500/20",
    shape: "polygon(0% 0%, 100% 0%, 100% 80%, 85% 100%, 0% 100%)",
    description: "Professional ghostwriting, editing, and publishing services to bring your story to the world, turning your ideas into compelling narratives that captivate readers.",
    detailedDescription: "Whether you have a story to tell or expertise to share, our team of professional writers and editors helps you craft, refine, and publish your book. From memoirs to business books, we bring your vision to life.",
    features: [
      "Ghostwriting services",
      "Developmental editing",
      "Copy editing & proofreading",
      "Book formatting",
      "Cover design",
      "Publishing consultation",
      "Marketing strategy",
      "Audiobook production"
    ],
    benefits: [
      { icon: FileText, text: "Professional manuscript development", highlight: true },
      { icon: Award, text: "Industry-standard publishing", highlight: false },
      { icon: TrendingUp, text: "Increased authority & credibility", highlight: false },
      { icon: Share2, text: "Global distribution channels", highlight: false }
    ],
    process: [
      "Initial Consultation",
      "Outline Development",
      "Manuscript Writing",
      "Editing & Revisions",
      "Design & Formatting",
      "Publication & Launch"
    ],
    whatsappMessage: "Hi! I'm interested in your Book Writing services. I have a book idea I'd like to discuss."
  },
  {
    id: 5,
    title: "Branding",
    icon: Palette,
    color: "red",
    image: "/bg5.jpg",
    bgGradient: "from-purple-900/20 to-rose-500/20",
    shape: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)",
    description: "Comprehensive brand identity development from logo design to complete visual language systems that make your brand memorable and recognizable.",
    detailedDescription: "We help you build a brand that resonates with your audience. From strategy to visual identity, we create cohesive brand experiences that differentiate you from competitors and build lasting connections.",
    features: [
      "Brand strategy & positioning",
      "Logo & identity design",
      "Color palette development",
      "Typography systems",
      "Brand guidelines",
      "Packaging design",
      "Marketing collateral",
      "Brand voice & messaging"
    ],
    benefits: [
      { icon: Target, text: "Clear brand positioning", highlight: true },
      { icon: Heart, text: "Emotional connection with audience", highlight: false },
      { icon: TrendingUp, text: "Increased brand recognition", highlight: false },
      { icon: Shield, text: "Consistent brand identity", highlight: false }
    ],
    process: [
      "Discovery & Research",
      "Brand Strategy",
      "Visual Concept Development",
      "Design Refinement",
      "Brand Guidelines",
      "Asset Delivery"
    ],
    whatsappMessage: "Hi! I'm interested in your Branding services. I need help building/refreshing my brand identity."
  },
  {
    id: 6,
    title: "Content Creation",
    icon: PenTool,
    color: "pink",
    image: "/bg6.jpg",
    bgGradient: "from-pink-500/20 to-rose-500/20",
    shape: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
    description: "Engaging content strategy and production across all platforms to tell your brand's story and connect with your audience authentically.",
    detailedDescription: "Create compelling content that cuts through the noise. Our team develops strategic content that engages your audience, builds trust, and drives action across all digital platforms.",
    features: [
      "Content strategy development",
      "Blog & article writing",
      "Social media content",
      "Video content production",
      "Email marketing campaigns",
      "Infographic design",
      "Case studies & white papers",
      "Content calendar management"
    ],
    benefits: [
      { icon: Megaphone, text: "Increased brand visibility", highlight: true },
      { icon: BarChart, text: "Measurable engagement metrics", highlight: false },
      { icon: MessageCircle, text: "Authentic audience connection", highlight: false },
      { icon: Clock, text: "Consistent content delivery", highlight: false }
    ],
    process: [
      "Content Audit",
      "Strategy Development",
      "Content Creation",
      "Review & Approval",
      "Distribution",
      "Performance Analysis"
    ],
    whatsappMessage: "Hi! I'm interested in your Content Creation services. I need help with my content strategy."
  },
  {
    id: 7,
    title: "Marketing Strategy",
    icon: Briefcase,
    color: "indigo",
    image: "/bg7.jpg",
    bgGradient: "from-indigo-500/20 to-blue-500/20",
    shape: "polygon(0% 0%, 100% 5%, 95% 100%, 5% 100%)",
    description: "Data-driven marketing campaigns that connect with your audience and drive measurable results across all channels.",
    detailedDescription: "Transform your marketing with data-driven strategies. We develop comprehensive marketing plans that leverage insights, optimize channels, and deliver measurable ROI for your business.",
    features: [
      "Market research & analysis",
      "Competitor analysis",
      "Digital marketing strategy",
      "Social media management",
      "Email marketing campaigns",
      "PPC advertising",
      "SEO optimization",
      "Analytics & reporting"
    ],
    benefits: [
      { icon: DollarSign, text: "Higher ROI on marketing spend", highlight: true },
      { icon: Target, text: "Precision targeting", highlight: false },
      { icon: TrendingUp, text: "Scalable growth strategies", highlight: false },
      { icon: Eye, text: "Increased brand awareness", highlight: false }
    ],
    process: [
      "Market Research",
      "Strategy Development",
      "Campaign Execution",
      "Performance Monitoring",
      "Optimization",
      "Reporting & Insights"
    ],
    whatsappMessage: "Hi! I'm interested in your Marketing Strategy services. I'd like to discuss a marketing plan for my business."
  },
  {
    id: 8,
    title: "Creative Direction",
    icon: Sparkles,
    color: "yellow",
    image: "/bg8.jpg",
    bgGradient: "from-yellow-500/20 to-orange-500/20",
    shape: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 95%)",
    description: "Expert creative guidance to elevate your brand and ensure consistent, impactful messaging across all touchpoints.",
    detailedDescription: "Get expert guidance to elevate your creative output. Our creative directors provide strategic oversight, ensuring your brand's visual and narrative consistency across all platforms and campaigns.",
    features: [
      "Creative strategy",
      "Art direction",
      "Campaign conceptualization",
      "Team leadership",
      "Quality control",
      "Trend analysis",
      "Cross-channel consistency",
      "Creative workshops"
    ],
    benefits: [
      { icon: Layers, text: "Cohesive brand experience", highlight: true },
      { icon: Eye, text: "Enhanced creative quality", highlight: false },
      { icon: Zap, text: "Faster decision making", highlight: false },
      { icon: Star, text: "Award-winning expertise", highlight: false }
    ],
    process: [
      "Creative Audit",
      "Strategy Definition",
      "Concept Development",
      "Production Oversight",
      "Quality Assurance",
      "Final Delivery"
    ],
    whatsappMessage: "Hi! I'm interested in your Creative Direction services. I need creative guidance for my brand."
  }
];

// Service Card Component
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // WhatsApp link with pre-filled message
  const whatsappNumber = "2348012345678"; // Replace with your actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Image Section with Unique Shape */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-br opacity-60"
            style={{ 
              background: `linear-gradient(135deg, ${service.bgGradient.split(' ')[0]}, ${service.bgGradient.split(' ')[1] || service.bgGradient.split(' ')[0]})`,
              clipPath: service.shape
            }}
          />
          <div className="absolute bottom-4 left-4 z-10">
            <div className={`bg-${service.color}-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-${service.color}-500/30`}>
              <span className={`text-${service.color}-400 text-xs font-semibold`}>{service.title}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Title & Description */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

          {/* Quick Benefits */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <benefit.icon className="w-3.5 h-3.5 text-green-500" />
                <span className="text-xs text-gray-600">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-purple-900 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
            <ArrowRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>

          {/* Expanded Details */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-200 space-y-4"
            >
              <p className="text-gray-600 text-sm leading-relaxed">{service.detailedDescription}</p>
              
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-2">What You Get:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.slice(0, 6).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Our Process:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.process.map((step, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Me
                </button>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  const categories = [
    { name: "Digital", icon: Code2, color: "blue" },
    { name: "Production", icon: Video, color: "green" },
    { name: "Audio", icon: Music, color: "purple" },
    { name: "Creative", icon: Palette, color: "red" }
  ];

  return (
    <main ref={sectionRef} className="bg-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative md:py-20 min-h-[60vh] flex items-center overflow-hidden">
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
              className="inline-block mb-4 "
            >
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-full px-4 py-1 border border-purple-900/30">
                <span className="text-red-400 text-sm font-semibold">What We Offer</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Comprehensive Creative
              <span className="text-purple-900 block">Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              From concept to execution, we provide end-to-end creative services that elevate your brand and captivate your audience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-12 bg-white/50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-full px-4 py-2"
              >
                <cat.icon className={`w-4 h-4 text-${cat.color}-500`} />
                <span className="text-sm text-gray-700">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-3">
              <div className="bg-purple-900/10 rounded-full px-4 py-1 border border-purple-900/20">
                <span className="text-purple-900 text-sm font-semibold">Why Choose Us</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Award-Winning Quality",
                description: "Recognized for excellence in creative production and innovation."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Dedicated professionals with years of industry experience."
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "We respect your deadlines and deliver on time, every time."
              },
              {
                icon: Heart,
                title: "Client-First Approach",
                description: "Your vision is our mission. We're committed to your success."
              },
              {
                icon: Zap,
                title: "Cutting-Edge Technology",
                description: "We use the latest tools and techniques for superior results."
              },
              {
                icon: Shield,
                title: "Satisfaction Guaranteed",
                description: "We stand behind our work with a 100% satisfaction guarantee."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-purple-900/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-purple-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
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
                q: "How long does a typical project take?",
                a: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a comprehensive branding project could take 2-3 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                q: "How do I get started?",
                a: "Simply click the 'WhatsApp Me' button on any service card to reach out. We'll discuss your project needs and provide a custom quote within 24 hours."
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We offer ongoing maintenance and support packages for all our services. Whether you need regular content updates, technical support, or strategic guidance, we're here to help."
              },
              {
                q: "Can I see examples of your work?",
                a: "Absolutely! Check out our Work page to see a selection of our recent projects. We're proud of the results we've delivered for clients across various industries."
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
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together.
            </p>
            <a
              href={`https://wa.me/2348012345678?text=${encodeURIComponent("Hi! I'm interested in your services. Can we discuss my project?")}`}
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