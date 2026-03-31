// app/about/page.tsx
'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { 
  Award, 
  Users, 
  Globe, 
  Heart, 
  Target, 
  Eye, 
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle,
  Zap,
  X,
  Mail,
  Quote
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroScale = useTransform(smoothProgress, [0, 0.3], [1, 0.95]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0.7]);

  const stats = [
    { value: "500+", label: "Projects Completed", icon: Award, color: "text-red-500" },
    { value: "50+", label: "Team Members", icon: Users, color: "text-blue-500" },
    { value: "15+", label: "Countries Served", icon: Globe, color: "text-green-500" },
    { value: "98%", label: "Client Satisfaction", icon: Heart, color: "text-pink-500" },
  ];

  const values = [
    {
      title: "Creativity First",
      description: "We believe in pushing boundaries and creating work that stands out.",
      icon: Sparkles,
      color: "text-red-500"
    },
    {
      title: "Client-Centric",
      description: "Your vision is our mission. We're committed to bringing your ideas to life.",
      icon: Target,
      color: "text-blue-500"
    },
    {
      title: "Quality Excellence",
      description: "We never compromise on quality. Every project is crafted with precision.",
      icon: Award,
      color: "text-green-500"
    },
    {
      title: "Innovation Driven",
      description: "Constantly evolving with the latest trends and technologies.",
      icon: Zap,
      color: "text-purple-500"
    },
  ];

  const timeline = [
    { 
      year: "2020", 
      title: "Founded", 
      description: "Started with a vision to transform media creation in a small studio with big dreams." 
    },
    { 
      year: "2021", 
      title: "First Award", 
      description: "Won Best Creative Studio of the Year, establishing our reputation for excellence." 
    },
    { 
      year: "2022", 
      title: "Global Expansion", 
      description: "Opened offices in 3 countries, bringing our creative vision worldwide." 
    },
    { 
      year: "2023", 
      title: "500 Projects", 
      description: "Reached milestone of 500 successful projects with clients across 5 continents." 
    },
    { 
      year: "2024", 
      title: "Innovation Hub", 
      description: "Launched cutting-edge creative lab for experimental media and immersive experiences." 
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "/bg4.jpg",
      bio: "Leading creative vision with 12+ years of experience in brand storytelling.",
      social: { linkedin: "#", X: "#", email: "#" }
    },
    {
      name: "Michael Chen",
      role: "Head of Production",
      image: "/bg2.jpg",
      bio: "Award-winning producer with expertise in large-scale video productions.",
      social: { linkedin: "#", X: "#", email: "#" }
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Designer",
      image: "/bg1.jpg",
      bio: "Visual storyteller specializing in motion graphics and brand identity.",
      social: { linkedin: "#", X: "#", email: "#" }
    },
    {
      name: "David Kim",
      role: "Technical Director",
      image: "/bg2.jpg",
      bio: "Innovative technologist pushing boundaries in interactive media.",
      social: { linkedin: "#", X: "#", email: "#" }
    },
    {
      name: "Priya Sharma",
      role: "Content Strategist",
      image: "/bg1.jpg",
      bio: "Strategic storyteller crafting compelling narratives across platforms.",
      social: { linkedin: "#", X: "#", email: "#" }
    },
    {
      name: "Marcus Thompson",
      role: "Lead Videographer",
      image: "/bg4.jpg",
      bio: "Cinematic storyteller with an eye for capturing authentic moments.",
      social: { linkedin: "#", X: "#", email: "#" }
    },
  ];

  const achievements = [
    { number: "15+", label: "International Awards", icon: Award },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "50+", label: "Expert Team", icon: Zap },
    { number: "100%", label: "Client Retention", icon: Heart },
  ];

  return (
    <main ref={sectionRef} className="bg-gray-100 overflow-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden md:py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg3.jpg"
            alt="Creative studio workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-red-900/70" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`hero-bg-${i}`}
              className="absolute rounded-full bg-red-500/20 blur-3xl"
              style={{
                width: `${400 + i * 100}px`,
                height: `${400 + i * 100}px`,
                left: `${10 + i * 20}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -40, 20, 0],
              }}
              transition={{
                duration: 20 + i * 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
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
                <span className="text-red-400 text-sm font-semibold">Our Story</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              We Create Media That
              <span className="text-red-500 block">Moves The World</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              LomeMediaStudio is a creative powerhouse dedicated to crafting compelling visual stories 
              that resonate with audiences and elevate brands to new heights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Link href="#team">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all"
                >
                  Meet Our Team
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-6 text-center"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower modern brands with innovative media solutions that transcend traditional boundaries, 
                  creating experiences that resonate deeply with audiences and drive meaningful connections across the globe.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To become the world's most sought-after creative studio, known for pushing the boundaries of media innovation 
                  and setting new standards for brand storytelling across every platform and medium.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline & Achievements Section */}
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
              <div className="bg-red-500/10 rounded-full px-4 py-1 border border-red-500/20">
                <span className="text-red-500 text-sm font-semibold">Our Journey</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Milestones & Achievements
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline - Left Side */}
            <div>
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                        {item.year.slice(-2)}
                      </div>
                      <div className="w-0.5 h-full bg-red-500/20 mx-auto mt-2 group-last:hidden" />
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-xl p-4 hover:shadow-lg transition-all">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Achievements & Quote */}
            <div className="space-y-6">
              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-xl p-4 text-center"
                  >
                    <achievement.icon className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                    <div className="text-xs text-gray-500">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Inspirational Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white"
              >
                <Quote className="w-8 h-8 mb-4 opacity-50" />
                <p className="text-lg font-semibold mb-3">
                  "Creativity is intelligence having fun. We don't just create media; we create experiences that last forever."
                </p>
                <p className="text-sm opacity-80">— Sarah Johnson, Creative Director</p>
              </motion.div>

              {/* Culture Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-gray-600 text-sm">
                  We believe in fostering a culture of creativity, collaboration, and continuous growth.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-3">
              <div className="bg-red-500/10 rounded-full px-4 py-1 border border-red-500/20">
                <span className="text-red-500 text-sm font-semibold">Creative Minds</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate creatives behind every project, dedicated to bringing your vision to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-red-500 text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex gap-2">
                    
                      <a href={member.social.X} className="p-2 bg-gray-100 hover:bg-red-500 rounded-lg transition-colors group">
                        <X className="w-4 h-4 text-gray-600 group-hover:text-white" />
                      </a>
                      <a href={member.social.email} className="p-2 bg-gray-100 hover:bg-red-500 rounded-lg transition-colors group">
                        <Mail className="w-4 h-4 text-gray-600 group-hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
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
            className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life. Join the hundreds of brands that trust us with their creative journey.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:shadow-lg transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}