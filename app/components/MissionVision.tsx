'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Target, Eye, Zap, Shield, Heart } from 'lucide-react';

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

  return (
    <motion.section 
      ref={sectionRef}
      className="relative bg-black py-5 overflow-hidden"
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
            className="absolute inset-0 border border-purple-900/40 rounded-full"
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
            className="absolute inset-1 border border-red-400/60 rounded-full"
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
            className="absolute inset-0 m-auto w-1.5 h-1.5 bg-purple-900 rounded-full"
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
              className="absolute w-0.5 h-0.5 bg-red-400 rounded-full"
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
            className="absolute rounded-full bg-purple-900/5 blur-2xl"
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

      <div className=" mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - with scatter animation */}
        <motion.div
          style={{
            y: headerY,
            opacity: headerOpacity,
          }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3">
            <div className="bg-purple-900/10 rounded-full px-4 py-1 border border-purple-900/20">
              <span className="text-purple-900 text-sm font-semibold">Our Foundation</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What Drives Us
          </h2>
          
          <p className="text-gray-200 text-base max-w-2xl mx-auto">
            Our mission and vision shape everything we do
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
            <div className="relative bg-black/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/50 transition-all duration-300 group-hover:shadow-xl group-hover:bg-black/90 h-full flex flex-col">
              <motion.div
                animate={{
                  rotate: hoveredCard === 'mission' ? [0, 5, -5, 0] : 0,
                  scale: hoveredCard === 'mission' ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-purple-900/10 rounded-xl flex items-center justify-center mb-4"
              >
                <Target className="w-6 h-6 text-purple-900" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                Our Mission
              </h3>
              
              <p className="text-gray-200 text-sm leading-relaxed mb-4 flex-grow">
                To empower modern brands with innovative media solutions that transcend traditional boundaries, creating experiences that resonate deeply with audiences and drive meaningful connections.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {[
                  { value: "500+", label: "Projects" },
                  { value: "98%", label: "Satisfaction" },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx} 
                    className="bg-gray-50 rounded-lg p-2 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-lg font-bold text-purple-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
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
            <div className="relative bg-black/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/50 transition-all duration-300 group-hover:shadow-xl group-hover:bg-black/90 h-full flex flex-col">
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
              
              <h3 className="text-xl font-bold text-white mb-2">
                Our Vision
              </h3>
              
              <p className="text-gray-200 text-sm leading-relaxed mb-4 flex-grow">
                To become the world's most sought-after creative studio, known for pushing the boundaries of media innovation and setting new standards for brand storytelling.
              </p>
              
              <div className="space-y-2 mt-auto">
                {[
                  { icon: Zap, text: "Innovation First", color: "text-yellow-500" },
                  { icon: Shield, text: "Uncompromised Quality", color: "text-blue-500" },
                  { icon: Heart, text: "Purpose-Driven", color: "text-purple-900" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center gap-2 bg-gray-50 rounded-lg p-2"
                    whileHover={{ x: 5, backgroundColor: "#fef2f2" }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className={`w-3 h-3 ${item.color}`} />
                    <span className="text-gray-200 text-xs">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}