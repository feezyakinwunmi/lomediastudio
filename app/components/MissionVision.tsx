'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Target, Eye, Zap, Shield, Heart, Sparkles, Award, Users, Globe } from 'lucide-react';

export default function MissionVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Entrance animation (fade in from bottom)
  const sectionOpacity = useTransform(smoothProgress, [0, 0.3, 0.6], [0, 0.8, 1]);
  const sectionY = useTransform(smoothProgress, [0, 0.4], [80, 0]);
  
  // Scatter animation when scrolling away (exit)
  const missionX = useTransform(smoothProgress, [0.6, 0.9, 1], [0, -50, -100]);
  const missionOpacity = useTransform(smoothProgress, [0.6, 0.8, 1], [1, 0.5, 0]);
  const missionRotate = useTransform(smoothProgress, [0.6, 1], [0, -15]);
  
  const visionX = useTransform(smoothProgress, [0.6, 0.9, 1], [0, 50, 100]);
  const visionOpacity = useTransform(smoothProgress, [0.6, 0.8, 1], [1, 0.5, 0]);
  const visionRotate = useTransform(smoothProgress, [0.6, 1], [0, 15]);
  
  const headerY = useTransform(smoothProgress, [0.6, 0.9, 1], [0, -30, -60]);
  const headerOpacity = useTransform(smoothProgress, [0.6, 0.8, 1], [1, 0.3, 0]);

  // Mouse move effect for the moving dot
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Key focus areas for Mission
  const missionFocusAreas = [
    "Creating visually compelling designs and brand assets",
    "Producing professional photography and video content",
    "Developing strategic social media campaigns",
    "Building strong and consistent visual brand identities",
    "Delivering storytelling that connects emotionally and culturally"
  ];

  // Vision aspirations
  const visionAspirations = [
    { icon: Globe, text: "Brands communicate with clarity and confidence", color: "text-blue-400" },
    { icon: Zap, text: "Creative content drives meaningful engagement", color: "text-yellow-400" },
    { icon: Award, text: "African and global brands represented authentically", color: "text-purple-400" },
    { icon: Sparkles, text: "A creative ecosystem where ideas grow", color: "text-red-400" }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="relative bg-black py-20 overflow-hidden"
      style={{
        opacity: sectionOpacity,
        y: sectionY,
      }}
    >
      {/* Small Moving Dot with Border */}
      <motion.div
        className="fixed w-12 h-12 pointer-events-none z-50 hidden lg:block"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute inset-0 border border-red-500/40 rounded-full"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          <motion.div
            className="absolute inset-1 border border-purple-400/60 rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.div
            className="absolute inset-0 m-auto w-1.5 h-1.5 bg-red-500 rounded-full"
            animate={{
              scale: [1, 2, 1],
              boxShadow: [
                "0 0 0 0 rgba(239, 68, 68, 0.4)",
                "0 0 0 6px rgba(239, 68, 68, 0)",
                "0 0 0 0 rgba(239, 68, 68, 0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-purple-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: Math.cos(i * 60 * Math.PI / 180) * 18,
                y: Math.sin(i * 60 * Math.PI / 180) * 18,
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-red-500/5 blur-2xl"
            style={{
              width: `${150 + i * 40}px`,
              height: `${150 + i * 40}px`,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -40, 20, 0],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header - with scatter animation */}
        <motion.div
          style={{
            y: headerY,
            opacity: headerOpacity,
          }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3">
            <div className="bg-red-500/10 rounded-full px-4 py-1 border border-red-500/20">
              <span className="text-red-500 text-sm font-semibold">Our Foundation</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Mission & Vision
          </h2>
          
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Guiding principles that shape how we create, collaborate, and deliver results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Mission Card - with scatter animation */}
          <motion.div
            ref={missionRef}
            style={{
              x: missionX,
              opacity: missionOpacity,
              rotate: missionRotate,
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onHoverStart={() => setHoveredCard('mission')}
            onHoverEnd={() => setHoveredCard(null)}
            className="group h-full"
          >
            <div className="relative bg-black/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-800 transition-all duration-300 group-hover:shadow-xl group-hover:bg-black/90 group-hover:border-red-500/30 h-full flex flex-col">
              <motion.div
                animate={{
                  rotate: hoveredCard === 'mission' ? [0, 5, -5, 0] : 0,
                  scale: hoveredCard === 'mission' ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4"
              >
                <Target className="w-6 h-6 text-red-500" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Our Mission
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                To help brands tell meaningful stories through creative media that inspires, engages, and drives real results.
              </p>
              
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                We focus on delivering high-quality visual and digital content that reflects the true identity of every brand we work with. From concept development to final execution, our goal is to turn ideas into impactful media experiences.
              </p>
              
              <div className="mt-auto">
                <h4 className="text-xs font-semibold text-red-400 mb-2">Key Focus Areas:</h4>
                <div className="space-y-1.5">
                  {missionFocusAreas.slice(0, 3).map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-red-500" />
                      <span className="text-gray-400 text-xs">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card - with scatter animation */}
          <motion.div
            ref={visionRef}
            style={{
              x: visionX,
              opacity: visionOpacity,
              rotate: visionRotate,
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onHoverStart={() => setHoveredCard('vision')}
            onHoverEnd={() => setHoveredCard(null)}
            className="group h-full"
          >
            <div className="relative bg-black/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-800 transition-all duration-300 group-hover:shadow-xl group-hover:bg-black/90 group-hover:border-purple-500/30 h-full flex flex-col">
              <motion.div
                animate={{
                  rotate: hoveredCard === 'vision' ? [0, 5, -5, 0] : 0,
                  scale: hoveredCard === 'vision' ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4"
              >
                <Eye className="w-6 h-6 text-purple-500" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Our Vision
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                To become a leading creative media studio known for innovation, originality, and excellence in visual storytelling.
              </p>
              
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                We aim to set the standard for how brands communicate in the digital age—where creativity meets strategy and content goes beyond aesthetics to create real impact.
              </p>
              
              <div className="mt-auto">
                <h4 className="text-xs font-semibold text-purple-400 mb-2">What We Envision:</h4>
                <div className="space-y-2">
                  {visionAspirations.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className={`w-3 h-3 ${item.color}`} />
                      <span className="text-gray-400 text-xs">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <div className="inline-block bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full px-5 py-2 border border-red-500/20">
            <p className="text-gray-300 text-xs">
              <span className="text-red-400 font-medium">LO Media Studio</span> is more than a creative unit — it's a storytelling powerhouse built to help brands stand out.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}