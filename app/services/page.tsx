'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import Link from 'next/link';
import { 
  ArrowRight, 
  Video, 
  BookOpen, 
  Palette, 
  PenTool, 
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
  Camera,
  Mail,
  Star
} from 'lucide-react';

// Service Data for the main page (simplified - no modals)
const services = [
  {
    id: 1,
    title: "Media Content Creation",
    slug: "media-content-creation",
    icon: PenTool,
    color: "blue",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
    shortDesc: "Drive engagement, build authority & convert your audience with strategic media content that performs."
  },
  {
    id: 2,
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: TrendingUp,
    color: "green",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    shortDesc: "Data-driven digital marketing solutions designed to deliver measurable results and grow your brand."
  },
  {
    id: 3,
    title: "Email Marketing",
    slug: "email-marketing",
    icon: Mail,
    color: "purple",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070",
    shortDesc: "Build meaningful relationships with your audience through strategic, data-driven email campaigns."
  },
  {
    id: 4,
    title: "Photography",
    slug: "photography",
    icon: Camera,
    color: "orange",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071",
    shortDesc: "Professional photography that captures your brand's essence and elevates your visual identity."
  },
  {
    id: 5,
    title: "Storytelling",
    slug: "storytelling",
    icon: MessageCircle,
    color: "red",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069",
    shortDesc: "Transform your message into meaningful stories that connect, inspire, and drive action."
  },
  {
    id: 6,
    title: "Video Production",
    slug: "video-production",
    icon: Video,
    color: "pink",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071",
    shortDesc: "Professional video content that captivates audiences and converts viewers into customers."
  },
  {
    id: 7,
    title: "Visual Brand Development",
    slug: "visual-brand-development",
    icon: Palette,
    color: "indigo",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
    shortDesc: "Create a powerful, strategic visual identity that positions your brand for visibility and growth."
  },
  {
    id: 8,
    title: "Creative Direction",
    slug: "creative-direction",
    icon: Sparkles,
    color: "yellow",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    shortDesc: "Expert creative guidance to elevate your brand and ensure consistent, impactful messaging."
  }
];

// Service Card Component - Now with Next.js Link
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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

  const bgColorMap: Record<string, string> = {
    blue: "bg-blue-500/20",
    green: "bg-green-500/20",
    purple: "bg-purple-500/20",
    orange: "bg-orange-500/20",
    red: "bg-red-500/20",
    pink: "bg-pink-500/20",
    indigo: "bg-indigo-500/20",
    yellow: "bg-yellow-500/20"
  };

  return (
    <Link 

    href={`/services/${service.slug}`} target="_blank">
      <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[service.color]} opacity-60`} />
          <div className="absolute bottom-4 left-4">
            <div className={`inline-flex p-2 rounded-lg ${bgColorMap[service.color]} backdrop-blur-sm`}>
              <Icon className={`w-5 h-5 ${textColorMap[service.color]}`} />
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {service.shortDesc}
          </p>
          
          <div className="text-red-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn More
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

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

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Happy Clients", icon: Users },
              { value: "500+", label: "Projects Completed", icon: CheckCircle },
              { value: "98%", label: "Satisfaction Rate", icon: Star },
              { value: "24/7", label: "Support", icon: Clock }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="inline-flex p-2 rounded-lg bg-red-50 mb-3">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
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
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gray-900 rounded-full font-medium text-sm hover:scale-105 transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}