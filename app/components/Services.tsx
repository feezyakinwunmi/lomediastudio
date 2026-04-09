"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { 
  PenTool,
  TrendingUp,
  Mail,
  Camera,
  MessageCircle,
  Video,
  Palette,
  Sparkles
} from "lucide-react";

const services = [
  { 
    icon: PenTool, 
    title: "Media Content Creation", 
    desc: "Drive engagement, build authority & convert your audience with strategic media content that performs across platforms.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  { 
    icon: TrendingUp, 
    title: "Digital Marketing", 
    desc: "Data-driven digital marketing solutions designed to deliver measurable results and grow your brand online.",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  { 
    icon: Mail, 
    title: "Email Marketing", 
    desc: "Build meaningful relationships with your audience through strategic, data-driven email campaigns that convert.",
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  { 
    icon: Camera, 
    title: "Photography", 
    desc: "Professional photography that captures your brand's essence and elevates your visual identity.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  { 
    icon: MessageCircle, 
    title: "Storytelling", 
    desc: "Transform your message into meaningful stories that connect, inspire, and drive action.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  { 
    icon: Video, 
    title: "Video Production", 
    desc: "Professional video content that captivates audiences and converts viewers into customers.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10"
  },
  { 
    icon: Palette, 
    title: "Visual Brand Development", 
    desc: "Create a powerful, strategic visual identity that positions your brand for visibility and growth.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10"
  },
  { 
    icon: Sparkles, 
    title: "Creative Direction", 
    desc: "Expert creative guidance to elevate your brand and ensure consistent, impactful messaging.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  }
];

// Corrected Swing/Pendulum Animation Variants
const swingAnimation = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  swing: {
    rotate: [0, 70, -12, 8, -5, 3, 0],
    scale: [1, 1.05, 1, 1.02, 1, 1, 1],
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    }
  }
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Entrance animation
  const sectionOpacity = useTransform(smoothProgress, [0, 0.3, 0.6], [0, 0.8, 1]);
  const sectionY = useTransform(smoothProgress, [0, 0.4], [60, 0]);
  
  // Scatter animation on exit
  const cardsScale = useTransform(smoothProgress, [0.6, 0.9, 1], [1, 0.95, 0.9]);
  const cardsOpacity = useTransform(smoothProgress, [0.6, 0.8, 1], [1, 0.5, 0]);
  const headerY = useTransform(smoothProgress, [0.6, 0.9, 1], [0, -30, -50]);

  return (
     <motion.section 
      ref={sectionRef}
      className="relative rounded-t-3xl bg-gray-100 px-4 py-20 overflow-hidden"
      style={{
        opacity: sectionOpacity,
        y: sectionY,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bg-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-red-500/5 to-purple-500/5 blur-3xl"
            style={{
              width: `${300 + i * 50}px`,
              height: `${300 + i * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 60, -40, 0],
              y: [0, -50, 30, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          style={{
            y: headerY,
            opacity: cardsOpacity,
          }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-red-500/10 backdrop-blur-sm rounded-full px-6 py-2 border border-red-500/20">
              <span className="text-red-500 font-semibold text-sm">What We Offer</span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-4"
          >
            Our <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Comprehensive creative solutions tailored to elevate your brand
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{
            scale: cardsScale,
            opacity: cardsOpacity,
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/50 transition-all duration-300 group-hover:shadow-2xl group-hover:bg-white/90 h-full">
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  animate={{
                    background: [
                      `radial-gradient(circle at 20% 50%, ${service.color.replace('text', 'bg').replace('-500', '-500/10')} 0%, transparent 70%)`,
                      `radial-gradient(circle at 80% 50%, ${service.color.replace('text', 'bg').replace('-500', '-500/10')} 0%, transparent 70%)`,
                      `radial-gradient(circle at 20% 50%, ${service.color.replace('text', 'bg').replace('-500', '-500/10')} 0%, transparent 70%)`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative z-10">
                  {/* Icon Container with Swing Animation */}
                  <motion.div
                    whileHover="swing"
                    initial="initial"
                    variants={swingAnimation}
                    className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:shadow-lg transition-all duration-300 cursor-pointer`}
                    style={{ transformOrigin: "top center" }}
                  >
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors duration-300"
                  >
                    {service.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  
                  {/* Decorative line */}
                  <motion.div 
                    className="h-0.5 bg-red-500/30 rounded-full mt-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: idx * 0.05 + 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              View All Services
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}