'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { 
  Mail, 
  ArrowRight, 
  Award, 
  Users, 
  Globe, 
  Heart, 
  Target, 
  Eye, 
  Sparkles,
  Zap,
  Clock,
  CheckCircle,
  Quote,
  Phone,
  Briefcase,
  TrendingUp,
  Camera,
  PenTool,
  Video,
  Layout
} from 'lucide-react';

// Custom social icons as simple SVG components (Lucide doesn't have these)
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9z" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M12 14c-1 0-2-.5-2.5-1" />
  </svg>
);

// Team data from leadership page
const team = [
  {
    name: "Layo Obidike",
    role: "Chief Executive Officer",
    image: "/layo.jpg",
    bio: "Visionary entrepreneur and revolutionary dedicated to empowering individuals to achieve their full potential. With a passion for innovation and commitment to excellence, Layo has established herself as a leader in the creative industry.",
    expertise: ["Leadership", "Innovation Strategy", "Business Development", "Empowerment"],
    social: { 
      linkedin: "https://www.linkedin.com/in/layoobidike/", 
      facebook: "https://www.facebook.com/layoobidike", 
      instagram: "https://www.instagram.com/layoobidike",
      email: "layo@lomediahouse.com",
      website: "https://layoobidike.com/"
    },
    color: "from-red-500 to-orange-500"
  },
  {
    name: "John Olumutimi",
    role: "Chief Operating Officer",
    image: "/john.jpg",
    bio: "Leads operational execution, service delivery, and client experience across the organisation. Ensures vision translates into efficient systems, consistent processes, and high-quality outcomes.",
    expertise: ["Operations", "Service Delivery", "Client Experience", "Process Optimization"],
    social: {}, // Empty socials for now
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Toyin Oyinloye",
    role: "Chief Technology Officer",
    image: "/kenny.jpg",
    bio: "Leads development and execution of technology strategy to support innovative platforms, digital workflows, and scalable system solutions.",
    expertise: ["Tech Strategy", "Digital Workflows", "Platform Development", "System Scalability"],
    social: { 
      linkedin: "https://www.linkedin.com/in/toyin-kennie-oyinloye/" 
    },
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Julius Edicha",
    role: "Technical Expert",
    image: "/julius.jpg",
    bio: "Combines deep technical expertise with creative insights to enhance user experience and interface design. Develops intuitive, visually appealing, and responsive platforms.",
    expertise: ["UI/UX Design", "Frontend Development", "Creative Tech", "Responsive Design"],
    social: {},
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Omolara Adeola",
    role: "Senior Editor",
    image: "/omolara.jpg",
    bio: "Senior Editor shaping and refining editorial content. With a deep passion for storytelling and a keen eye for detail, Omolara ensures all published material meets the highest standards.",
    expertise: ["Editorial Direction", "Storytelling", "Quality Control", "Content Strategy"],
    social: {},
    color: "from-rose-500 to-red-500"
  },
  {
    name: "Abiodun Jayeola",
    role: "Team Lead, Marketing & Communications",
    image: "/abiodun.jpg",
    bio: "Leads marketing and communications efforts, driving strategic initiatives to enhance visibility and impact across all channels.",
    expertise: ["Marketing Strategy", "Communications", "Brand Visibility", "Campaign Management"],
    social: {},
    color: "from-indigo-500 to-blue-500"
  }
];

// Core Values data
const values = [
  {
    title: "Creativity with Purpose",
    description: "We don't create just to look good—we create with intention. Every design, video, or campaign is crafted to serve a clear goal.",
    icon: Sparkles,
    color: "text-purple-500"
  },
  {
    title: "Excellence in Execution",
    description: "Committed to high standards in every project. From concept to delivery, we ensure every output reflects quality and professionalism.",
    icon: Award,
    color: "text-blue-500"
  },
  {
    title: "Authentic Storytelling",
    description: "The most powerful brands are the most authentic ones. We focus on telling real stories that connect with real people.",
    icon: Heart,
    color: "text-red-500"
  },
  {
    title: "Innovation and Growth",
    description: "The media space is constantly evolving, and so are we. We embrace new tools, trends, and ideas to stay ahead.",
    icon: Zap,
    color: "text-yellow-500"
  },
  {
    title: "Collaboration and Partnership",
    description: "We see our clients as partners. We listen, understand, and work closely to bring your vision to life.",
    icon: Users,
    color: "text-green-500"
  },
  {
    title: "Consistency and Reliability",
    description: "We deliver on our promises. Count on us for timely delivery, clear communication, and dependable results.",
    icon: Clock,
    color: "text-orange-500"
  }
];

// Services data
const services = [
  {
    title: "Visual Identity & Branding",
    description: "Building strong and consistent visual brand identities that reflect your true essence.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064"
  },
  {
    title: "Photography & Video Production",
    description: "Professional photography and cinematic video content that captures your brand's story.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071"
  },
  {
    title: "Social Media Strategy",
    description: "Strategic campaigns that drive engagement and build meaningful connections with your audience.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074"
  },
  {
    title: "Content Production",
    description: "Compelling visual and digital content that reflects the true identity of your brand.",
    icon: Video,
    image: "/bg1.jpg"
  }
];

// Stats data
const stats = [
  { value: "500+", label: "Projects Completed", icon: Award },
  { value: "50+", label: "Team Members", icon: Users },
  { value: "15+", label: "Countries Served", icon: Globe },
  { value: "98%", label: "Client Satisfaction", icon: Heart },
];

// Helper function to render social icons
const SocialLinks = ({ social }: { social: any }) => {
  const socialItems = [
    { key: 'linkedin', icon: LinkedinIcon, label: 'LinkedIn' },
    { key: 'facebook', icon: FacebookIcon, label: 'Facebook' },
    { key: 'instagram', icon: InstagramIcon, label: 'Instagram' },
    { key: 'twitter', icon: TwitterIcon, label: 'Twitter' },
    { key: 'whatsapp', icon: WhatsappIcon, label: 'WhatsApp' },
    { key: 'website', icon: Globe, label: 'Website' },
    { key: 'phone', icon: Phone, label: 'Phone' },
    { key: 'email', icon: Mail, label: 'Email' }
  ];

  const getSocialUrl = (key: string, value: string) => {
    if (key === 'email') return `mailto:${value}`;
    if (key === 'phone') return `tel:${value}`;
    if (key === 'whatsapp') return `https://wa.me/${value.replace(/[^0-9]/g, '')}`;
    return value;
  };

  const hasAnySocial = socialItems.some(({ key }) => social[key]);

  if (!hasAnySocial) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {socialItems.map(({ key, icon: Icon, label }) => {
        const value = social[key];
        if (!value) return null;
        
        return (
          <a
            key={key}
            href={getSocialUrl(key, value)}
            target={key !== 'email' && key !== 'phone' ? '_blank' : undefined}
            rel={key !== 'email' && key !== 'phone' ? 'noopener noreferrer' : undefined}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            title={label}
          >
            <Icon className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors" />
          </a>
        );
      })}
    </div>
  );
};

export default function AboutStudioPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement[]>([]);
  const teamRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Hero fade in
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

    // Mission section
    gsap.fromTo(missionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 85%",
          end: "top 70%",
          scrub: 0.5,
        }
      }
    );

    // Values - staggered
    valuesRef.current.forEach((value, i) => {
      if (value) {
        gsap.fromTo(value,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: value,
              start: "top 90%",
              end: "top 75%",
              scrub: 0.5,
            }
          }
        );
      }
    });

    // Team - staggered
    teamRef.current.forEach((member, i) => {
      if (member) {
        gsap.fromTo(member,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: member,
              start: "top 90%",
              end: "top 75%",
              scrub: 0.5,
            }
          }
        );
      }
    });

    // Stats - staggered
    statsRef.current.forEach((stat, i) => {
      if (stat) {
        gsap.fromTo(stat,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: i * 0.1,
            ease: "back.out(0.4)",
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              end: "top 75%",
              scrub: 0.5,
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-white min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center opacity-30" />
        
        <div ref={heroRef} className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-white tracking-wide">LO MEDIA STUDIO</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            We Create Media That
            <br />
            <span className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">Moves The World</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
            LO Media Studio is a full-service creative and media production division combining design, photography, 
            video production, and digital storytelling to help brands communicate clearly and connect deeply.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="#mission" className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all duration-300 group text-sm">
              Discover Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#team" className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-sm">
              Meet Our Team
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-400 tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  ref={(el) => { if (el) statsRef.current[idx] = el; }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 rounded-full bg-red-50 mb-3">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction / Mission & Vision */}
      <section id="mission" ref={missionRef} className="py-16 md:py-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            {/* Mission */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To help brands tell meaningful stories through creative media that inspires, engages, and drives real results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We focus on delivering high-quality visual and digital content that reflects the true identity of every brand we work with. 
                From concept development to final execution, our goal is to turn ideas into impactful media experiences.
              </p>
              <div className="mt-5 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">Key focus:</span> Compelling designs, professional photography/video, 
                  strategic campaigns, consistent brand identity, emotional storytelling.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To become a leading creative media studio known for innovation, originality, and excellence in visual storytelling.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We aim to set the standard for how brands communicate in the digital age—where creativity meets strategy 
                and content goes beyond aesthetics to create real impact.
              </p>
              <div className="mt-5 pt-4 border-t border-red-200">
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs px-2 py-1 bg-white rounded-full text-gray-600">Authentic Representation</span>
                  <span className="text-xs px-2 py-1 bg-white rounded-full text-gray-600">Creative Ecosystem</span>
                  <span className="text-xs px-2 py-1 bg-white rounded-full text-gray-600">Business Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / What We Do */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">WHAT WE DO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our Creative
              <br />
              <span className="text-red-500">Services.</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4">
              From concept to execution, we deliver comprehensive creative solutions that elevate your brand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <div className="inline-flex p-2 rounded-lg bg-red-50 mb-3">
                      <Icon className="w-4 h-4 text-red-500" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">OUR FOUNDATION</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Core Values That
              <br />
              <span className="text-red-500">Guide Us.</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4">
              Every project we take on is aligned with our purpose: to create media that not only looks good but works effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  ref={(el) => { if (el) valuesRef.current[index] = el; }}
                  className="group relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="inline-flex p-2 rounded-lg bg-red-50 mb-3">
                    <Icon className={`w-5 h-5 ${value.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">CREATIVE MINDS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Meet the
              <br />
              <span className="text-red-500">Team.</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4">
              The passionate creatives behind every project, dedicated to bringing your vision to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                ref={(el) => { if (el) teamRef.current[index] = el; }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                  <img 
                    src={member.image}
                    alt={member.name}
                    className=" mx-auto object-fit rounded-md group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5">{member.name}</h3>
                  <p className="text-red-500 text-xs font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.expertise.slice(0, 3).map((skill, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <SocialLinks social={member.social} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters / Quote Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center opacity-10" />
            <div className="relative z-10">
              <Quote className="w-10 h-10 text-white/30 mx-auto mb-4" />
              <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed">
                "LO Media Studio is more than a creative unit—it's a storytelling powerhouse built to help brands stand out 
                in a crowded digital space."
              </p>
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="w-10 h-px bg-white/30" />
                <span className="text-white/70 text-sm">LO Media Studio</span>
                <div className="w-10 h-px bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Create
              <br />
              <span className="text-red-500">Something Amazing?</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-6">
              Let's bring your vision to life. Join the hundreds of brands that trust us with their creative journey.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-500 text-white rounded-full font-medium text-sm hover:bg-red-600 hover:scale-105 transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}