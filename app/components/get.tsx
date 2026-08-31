'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Star, Users, TrendingUp, Sparkles, Rocket, Zap } from 'lucide-react';
import { 
  SiFigma, 
  SiNotion, 
  SiSlack, 
  SiX, 
  SiDiscord,
  SiGithub,
  SiVercel,
  SiGoogle
} from 'react-icons/si';

export default function Get() {
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

  // Scroll animations
  const sectionOpacity = useTransform(smoothProgress, [0, 0.3, 0.6], [0, 0.8, 1]);
  const sectionY = useTransform(smoothProgress, [0, 0.4], [60, 0]);

  const cards = [
    {
      title: "Cost Effective Solution",
      description: "Get high-quality design work at a fraction of the cost.",
      icon: TrendingUp,
      color: "text-purple-900",
      bgColor: "bg-purple-900/10",
      graphData: [4, 6, 5, 7, 4, 8, 6, 9, 7, 8]
    },
    {
      title: "Tailor-made Design",
      description: "We've got the expertise to make your vision a reality.",
      icon: Sparkles,
      color: "text-purple-900",
      bgColor: "bg-purple-900/10",
      isNew: true
    },
    {
      title: "Scalable as You Grow",
      description: "We're ready to meet your evolving needs.",
      icon: Rocket,
      color: "text-purple-900",
      bgColor: "bg-purple-900/10"
    }
  ];

  const apps = [
    { name: 'Figma', icon: SiFigma, color: 'bg-purple-500' },
    { name: 'Notion', icon: SiNotion, color: 'bg-white' },
    { name: 'Slack', icon: SiSlack, color: 'bg-emerald-500' },
    { name: 'X', icon: SiX, color: 'bg-black' },
    { name: 'Discord', icon: SiDiscord, color: 'bg-indigo-500' },
    { name: 'GitHub', icon: SiGithub, color: 'bg-gray-300' },
    { name: 'Vercel', icon: SiVercel, color: 'bg-white' },
    { name: 'Google', icon: SiGoogle, color: 'bg-blue-500' },
  ];

  const features = [
    'Design workshops', 'Trend reports', 'Asset library', 
    'Rollover hours', 'Premium designers', 'Multilingual support',
    '24/7 Support', 'Custom Solutions'
  ];

  return (
    <motion.section suppressHydrationWarning
      ref={sectionRef}
      className="relative bg-black py-20 overflow-hidden"
      style={{
        opacity: sectionOpacity,
        y: sectionY,
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div suppressHydrationWarning
            key={`orb-${i}`}
            className="absolute rounded-full bg-purple-900/5 blur-3xl"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 20, 0],
            }}
            transition={{
              duration: 15 + i * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div suppressHydrationWarning
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Everything You Need to <span className="text-purple-900">Succeed</span>
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Comprehensive solutions designed to help your business grow and thrive
          </p>
        </motion.div>

        {/* Top Row - 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, idx) => (
            <motion.div suppressHydrationWarning
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-black/80 backdrop-blur-lg border border-gray-100/50 rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-xl group-hover:bg-black/90">
                {/* Icon */}
                <div className={`w-12 h-12 ${card.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <card.icon className={`w-6 h-6 ${card.color}`} />
                </div>

                {card.graphData && (
                  <div className="h-32 flex items-end justify-center mb-4">
                    <div className="flex items-end gap-1.5">
                      {card.graphData.map((height, i) => (
                        <motion.div suppressHydrationWarning
                          key={i}
                          className="bg-purple-900 rounded-t w-3"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height * 6}px` }}
                          transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {card.isNew && (
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-1.5 bg-purple-900/10 text-purple-900 text-xs px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-purple-900 rounded-full animate-pulse" />
                      NEW
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Latest design</p>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Workflow + Collaboration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Workflow Integration */}
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative bg-black/80 backdrop-blur-lg border border-gray-100/50 rounded-2xl p-6 transition-all duration-300 group-hover:shadow-xl group-hover:bg-black/90 h-full">
              <h3 className="text-xl font-bold text-white mb-2">Workflow Integration</h3>
              <p className="text-gray-300 text-sm mb-6">
                Seamlessly connect all your existing apps and tools.
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {apps.map((app, i) => (
                  <motion.div suppressHydrationWarning
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`${app.color} rounded-xl p-3 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <app.icon className="w-6 h-6 text-black" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Collaborate Real-time */}
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative bg-black/80 backdrop-blur-lg border border-gray-100/50 rounded-2xl p-6 transition-all duration-300 group-hover:shadow-xl group-hover:bg-black/90 h-full">
              <h3 className="text-xl font-bold text-white mb-2">Collaborate Real-time</h3>
              <p className="text-gray-300 text-sm mb-6">
                Work together seamlessly with your team, anywhere in the world.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((_, i) => (
                    <motion.div suppressHydrationWarning
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-gray-300 font-semibold text-sm"
                    >
                      {String.fromCharCode(65 + i)}
                    </motion.div>
                  ))}
                </div>

                <motion.div suppressHydrationWarning
                  className="bg-purple-900 text-black text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <Users className="w-4 h-4" />
                  <span>12 active now</span>
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                </motion.div>
              </div>

              {/* Collaboration stats */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Messages sent</span>
                  <span className="text-white font-semibold">2,847</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Files shared</span>
                  <span className="text-white font-semibold">156</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Tags */}
        <motion.div suppressHydrationWarning
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {features.map((feature, i) => (
            <motion.div suppressHydrationWarning
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/80 backdrop-blur-sm hover:bg-black border border-gray-100 text-gray-300 text-sm px-5 py-2 rounded-full flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <Star className="w-3 h-3 text-purple-900" />
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}