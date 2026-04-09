'use client';

import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import Image from 'next/image';
import { 
  ArrowRight, 
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
  Heart,
  Zap,
  Shield,
  TrendingUp,
  MessageCircle,
  FileText,
  Share2,
  Eye,
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
  MessageSquare,
  X,
  Mail,
  Phone,
  DollarSign,
  Star
} from 'lucide-react';

// Service Data with all the detailed content you provided
const services = [
  {
    id: 1,
    title: "Media Content Creation",
    icon: PenTool,
    color: "blue",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
    shortDesc: "Drive engagement, build authority & convert your audience with strategic media content that performs.",
    fullDescription: `At LO Media Studio, we don't just create content; we create strategic media experiences that attract, engage, and convert your audience to clients. In today's digital world, your brand's success depends on how well you communicate your message. That communication starts with high-quality media content creation.

Digital success has gone beyond posting randomly. It's now creating content that speaks directly to your audience to inform, entertain, and inspire action. That's exactly what we do at LO Media Studio.

Our media content creation strategy combines creativity, storytelling, and data-driven execution to deliver content that performs across platforms.`,
    whatItIs: "Media content creation is the process of developing visual, written, and video content that represents your brand online. At LO Media Studio, we help create the right content for the right audience at the right time.",
    services: [
      "Video Content Production (Brand videos, Social media reels, Product showcases, Promotional ads)",
      "Creative Visual Content (Social media graphics, Campaign visuals, Brand identity content, Motion graphics)",
      "Content Strategy & Storytelling (Define content direction, Understand your audience, Create consistent brand messaging)",
      "Social Media Content Creation (Scroll-stopping posts, Engaging captions, Platform-specific content)",
      "Short-Form & Viral Content (TikTok-style content, Instagram Reels, YouTube Shorts)"
    ],
    benefits: [
      "Increase brand awareness",
      "Build audience trust",
      "Drive traffic to your website",
      "Generate leads and conversions",
      "Stay ahead of competitors"
    ],
    whyChooseUs: "We don't just post content; we post content that converts. Strategy-driven creation, high-quality visuals, platform-specific optimization, and consistent brand storytelling.",
    whatsappMessage: "Hi! I'm interested in your Media Content Creation services."
  },
  {
    id: 2,
    title: "Digital Marketing",
    icon: TrendingUp,
    color: "green",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    shortDesc: "Data-driven digital marketing solutions designed to deliver measurable results and grow your brand.",
    fullDescription: `At LO Media Studio, we help brands grow, scale, and thrive through strategic digital marketing services designed to deliver measurable results. In today's fast-evolving digital landscape, success requires more than just visibility—it requires the right strategy, the right tools, and the right execution.

Our professional digital marketing solutions are tailored for businesses, organizations, and ministries seeking to increase brand awareness, attract the right audience, and convert engagement into real business growth. We combine creativity, data, and technology to build campaigns that not only reach people but move them to action.

We take a holistic and results-driven approach to digital marketing, ensuring every channel works together to support your overall business goals.`,
    whatItIs: "Strategic digital marketing that combines creativity, data, and technology to build campaigns that move people to action.",
    services: [
      "Social Media Marketing and Advertising",
      "Search Engine Optimization (SEO)",
      "Email Marketing and Automation",
      "Content Marketing and Strategy",
      "Paid Advertising (Google Ads, Social Ads)",
      "Brand Positioning and Digital Campaigns",
      "Analytics, Tracking, and Performance Optimization"
    ],
    benefits: [
      "Increased brand awareness",
      "Higher quality leads",
      "Better conversion rates",
      "Improved ROI on marketing spend",
      "Data-driven decision making"
    ],
    whyChooseUs: "We prioritize consistency, creativity, and clarity. Every campaign is designed to reflect your brand identity while maintaining a strong and unified message across all digital platforms.",
    whatsappMessage: "Hi! I'm interested in your Digital Marketing services."
  },
  {
    id: 3,
    title: "Email Marketing",
    icon: Mail,
    color: "purple",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070",
    shortDesc: "Build meaningful relationships with your audience through strategic, data-driven email campaigns.",
    fullDescription: `At LO Media Studio, we help brands build meaningful, long-term relationships with their audience through strategic email marketing services. In a fast-paced digital world, email remains one of the most effective and direct channels for communication, engagement, and conversion.

Our professional email marketing solutions are designed for businesses, organizations, and ministries looking to nurture leads, retain customers, and drive consistent growth. We go beyond sending emails; we create targeted, data-driven campaigns that deliver the right message to the right audience at the right time.

We begin by understanding your brand, your audience, and your goals. From there, we develop a custom email marketing strategy that aligns with your overall branding and marketing efforts.`,
    whatItIs: "Strategic email marketing that nurtures leads, retains customers, and drives consistent growth through targeted campaigns.",
    services: [
      "Email Strategy Development and Campaign Planning",
      "Audience Segmentation and List Management",
      "Engaging Email Content and Copywriting",
      "Email Design and Branded Templates",
      "Automated Email Workflows (Welcome series, Follow-ups, Nurturing sequences)",
      "Newsletter Creation and Distribution",
      "Performance Tracking, Analytics, and Optimization"
    ],
    benefits: [
      "Higher open and click-through rates",
      "Improved customer retention",
      "Increased sales and conversions",
      "Better ROI on marketing spend",
      "Stronger customer relationships"
    ],
    whyChooseUs: "We prioritize personalization and relevance, ensuring your emails feel tailored rather than generic. Every campaign is tracked and optimized for better performance.",
    whatsappMessage: "Hi! I'm interested in your Email Marketing services."
  },
  {
    id: 4,
    title: "Photography",
    icon: Camera,
    color: "orange",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071",
    shortDesc: "Professional photography that captures your brand's essence and elevates your visual identity.",
    fullDescription: `At LO Media Studio, we believe powerful visuals are essential for telling compelling brand stories. Our professional photography services are designed to help businesses, organizations, and ministries capture high-quality images that elevate their brand identity and enhance their marketing efforts.

We specialize in brand photography that communicates your message with clarity and creativity. Whether you need corporate portraits, product photography, event coverage, or lifestyle shoots, our team delivers visually striking images that reflect your brand's personality and values.

Our commercial photography services are tailored to support your digital presence across websites, social media platforms, and marketing campaigns.`,
    whatItIs: "Professional brand photography that communicates your message with clarity, creativity, and strategic purpose.",
    services: [
      "Corporate and Personal Brand Photography",
      "Product Photography for Businesses and E-commerce",
      "Event and Conference Coverage",
      "Social Media Content Photography",
      "Promotional and Campaign Shoots"
    ],
    benefits: [
      "Professional, polished brand image",
      "Increased audience trust",
      "Better engagement on social media",
      "Higher conversion rates",
      "Consistent visual identity"
    ],
    whyChooseUs: "We combine creativity, technical expertise, and strategic branding to produce visuals that elevate your brand, engage your audience, and drive business growth.",
    whatsappMessage: "Hi! I'm interested in your Photography services."
  },
  {
    id: 5,
    title: "Storytelling",
    icon: MessageCircle,
    color: "red",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069",
    shortDesc: "Transform your message into meaningful stories that connect, inspire, and drive action.",
    fullDescription: `At LO Media Studio, storytelling is at the heart of everything we create. We help brands, organizations, and ministries communicate their vision through powerful, authentic narratives that connect, inspire, and drive action.

In today's digital world, people don't just buy products; they connect with stories. That's why we craft strategic, emotion-driven content that reflects your brand identity and speaks directly to your audience across platforms.

From brand positioning to campaign messaging and documentary-style storytelling, we ensure your voice is clear, consistent, and impactful.`,
    whatItIs: "Strategic, emotion-driven content that reflects your brand identity and speaks directly to your audience.",
    services: [
      "Brand Storytelling and Identity Development",
      "Scriptwriting for Videos, Ads, and Campaigns",
      "Documentary and Impact Storytelling",
      "Social Media Storytelling Strategies",
      "Campaign Messaging and Narrative Structuring",
      "Content Direction for Digital Platforms"
    ],
    benefits: [
      "Deeper audience connection",
      "Increased brand loyalty",
      "Better message retention",
      "Higher engagement rates",
      "Stronger brand identity"
    ],
    whyChooseUs: "We don't just tell stories; we create experiences that build trust, strengthen brand loyalty, and position your brand for long-term growth.",
    whatsappMessage: "Hi! I'm interested in your Storytelling services."
  },
  {
    id: 6,
    title: "Video Production",
    icon: Video,
    color: "pink",
    image: "/bg1.jpg",
    shortDesc: "Professional video content that captivates audiences and converts viewers into customers.",
    fullDescription: `At LO Media Studio, we create high-quality video content that brings your ideas to life and positions your brand for visibility, engagement, and results.

From concept development to post-production, our team delivers visually compelling and strategically crafted videos tailored to your goals—whether for marketing, awareness, or storytelling.

We understand that video is one of the most powerful tools in digital marketing today, and we ensure every production reflects excellence, creativity, and purpose.`,
    whatItIs: "End-to-end video production from concept development to post-production, tailored to your marketing goals.",
    services: [
      "Promotional and brand videos",
      "Corporate and organisational videos",
      "Event coverage and highlight videos",
      "Social media content (Reels, Shorts, Ads)",
      "Interviews and testimonial videos",
      "Product and commercial video production",
      "Video editing, color grading, and motion graphics"
    ],
    process: [
      "Concept Development – Understanding your vision and goals",
      "Pre-Production – Planning, scripting, and storyboarding",
      "Production – Filming with professional equipment and crew",
      "Post-Production – Editing, sound design, and final delivery"
    ],
    benefits: [
      "Increased brand visibility",
      "Higher engagement rates",
      "Better conversion metrics",
      "Professional brand perception",
      "Shareable, viral-ready content"
    ],
    whyChooseUs: "We don't just create content—we create impact. Strategy-first approach, high-quality execution, and results-driven production.",
    whatsappMessage: "Hi! I'm interested in your Video Production services."
  },
  {
    id: 7,
    title: "Visual Brand Development",
    icon: Palette,
    color: "indigo",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
    shortDesc: "Create a powerful, strategic visual identity that positions your brand for visibility and growth.",
    fullDescription: `At LO Media Studio, we help brands move beyond ordinary visuals to create powerful, strategic identities that leave lasting impressions. Our visual brand development services are designed to position businesses, organizations, and ministries for visibility, credibility, and growth in today's competitive digital space.

We specialize in professional brand identity design, crafting distinctive visuals that reflect your brand's voice, values, and purpose. From logo creation to complete brand systems, we develop cohesive and impactful designs that ensure your brand is instantly recognizable across all platforms.

Our branding and marketing approach goes beyond design; we build visual identities that support your overall marketing strategy.`,
    whatItIs: "Complete visual identity development from logo creation to brand systems that ensure consistency across all platforms.",
    services: [
      "Logo and Identity Design",
      "Brand Color Systems and Typography",
      "Social Media Branding Kits",
      "Marketing and Promotional Design Assets",
      "Brand Guidelines for Consistency"
    ],
    benefits: [
      "Instant brand recognition",
      "Consistent visual identity",
      "Professional brand perception",
      "Higher customer trust",
      "Competitive advantage"
    ],
    whyChooseUs: "We focus on delivering high-impact visual branding solutions that strengthen your brand presence, increase audience engagement, and drive business growth.",
    whatsappMessage: "Hi! I'm interested in your Visual Brand Development services."
  },
  {
    id: 8,
    title: "Creative Direction",
    icon: Sparkles,
    color: "yellow",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    shortDesc: "Expert creative guidance to elevate your brand and ensure consistent, impactful messaging.",
    fullDescription: `Get expert guidance to elevate your creative output. Our creative directors provide strategic oversight, ensuring your brand's visual and narrative consistency across all platforms and campaigns.

We help you define and communicate your unique value through strategic brand positioning and digital campaigns. Our team develops integrated marketing campaigns that align your messaging, visuals, and communication across all digital channels.

By combining brand storytelling, creative direction, and market insights, we ensure your brand stands out and resonates with your target audience.`,
    whatItIs: "Strategic creative oversight ensuring your brand's visual and narrative consistency across all platforms.",
    services: [
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
      "Cohesive brand experience",
      "Enhanced creative quality",
      "Faster decision making",
      "Award-winning expertise",
      "Consistent brand messaging"
    ],
    whyChooseUs: "We provide strategic creative direction that ensures your brand stands out and resonates with your target audience across all touchpoints.",
    whatsappMessage: "Hi! I'm interested in your Creative Direction services."
  }
];

// Modal Component
function ServiceModal({ service, isOpen, onClose }: { service: typeof services[0] | null; isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  const whatsappNumber = "2348012345678";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header with Image */}
        <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <div className="absolute bottom-4 left-6">
            <div className={`inline-flex p-2 rounded-lg bg-${service.color}-500/20 backdrop-blur-sm mb-2`}>
              <service.icon className={`w-5 h-5 text-${service.color}-400`} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Short Description */}
          <p className="text-gray-700 text-base font-medium mb-6">
            {service.shortDesc}
          </p>

          {/* Full Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {service.fullDescription}
            </p>
          </div>

          {/* What It Is */}
          {service.whatItIs && (
            <div className="mb-6 bg-gray-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">What It Is</h3>
              <p className="text-gray-600 text-sm">{service.whatItIs}</p>
            </div>
          )}

          {/* Services Offered */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Offer</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {service.services.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process (for Video Production) */}
          {service.process && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Process</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-gray-600">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-6 bg-gradient-to-r from-red-50 to-purple-50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Why Choose LO Media Studio</h3>
            <p className="text-gray-600 text-sm">{service.whyChooseUs}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Inquire on WhatsApp
            </a>
            <a
              href="/contact"
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service, index, onLearnMore }: { service: typeof services[0]; index: number; onLearnMore: (service: typeof services[0]) => void }) {
  const Icon = service.icon;
  const colorMap: Record<string, string> = {
    blue: "from-blue-500/20 to-cyan-500/20",
    green: "from-green-500/20 to-emerald-500/20",
    purple: "from-purple-500/20 to-pink-500/20",
    orange: "from-orange-500/20 to-amber-500/20",
    red: "from-red-500/20 to-rose-500/20",
    pink: "from-pink-500/20 to-rose-500/20",
    indigo: "from-indigo-500/20 to-blue-500/20",
    yellow: "from-yellow-500/20 to-orange-500/20"
  };

  const textColorMap: Record<string, string> = {
    blue: "text-blue-500",
    green: "text-green-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
    red: "text-red-500",
    pink: "text-pink-500",
    indigo: "text-indigo-500",
    yellow: "text-yellow-500"
  };

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[service.color]} opacity-60`} />
        <div className="absolute bottom-4 left-4">
          <div className={`inline-flex p-2 rounded-lg bg-${service.color}-500/20 backdrop-blur-sm`}>
            <Icon className={`w-5 h-5 ${textColorMap[service.color]}`} />
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {service.shortDesc}
        </p>
        
        <button
          onClick={() => onLearnMore(service)}
          className="text-red-500 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
          end: "top 70%",
          scrub: 0.5,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleLearnMore = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div ref={sectionRef} className="bg-gray-100 min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center opacity-30" />
        
        <div ref={heroRef} className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-white tracking-wide">OUR SERVICES</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Comprehensive Creative
            <br />
            <span className="text-red-500">Solutions.</span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
            From concept to execution, we provide end-to-end creative services that elevate your brand 
            and captivate your audience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">WHAT WE OFFER</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our Creative
              <br />
              <span className="text-red-500">Services.</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4">
              Discover our comprehensive range of creative and media production services designed to help your brand stand out.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">WHY CHOOSE US</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              What Sets
              <br />
              <span className="text-red-500">Us Apart.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Strategy-First Approach", desc: "Every project begins with a clear strategy aligned with your goals." },
              { icon: Users, title: "Expert Team", desc: "Dedicated professionals with years of industry experience." },
              { icon: Clock, title: "On-Time Delivery", desc: "We respect your deadlines and deliver on time, every time." },
              { icon: Heart, title: "Client-First Approach", desc: "Your vision is our mission. We're committed to your success." },
              { icon: Zap, title: "Cutting-Edge Technology", desc: "We use the latest tools and techniques for superior results." },
              { icon: Shield, title: "Results-Driven", desc: "We don't just create content—we create measurable impact." }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                  <div className="inline-flex p-2 rounded-lg bg-red-50 mb-4">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center opacity-10" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Elevate
                <br />
                <span className="text-white/90">Your Brand?</span>
              </h2>
              <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto mb-6">
                Let's discuss your project and create something extraordinary together.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gray-900 rounded-full font-medium text-sm hover:scale-105 transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}