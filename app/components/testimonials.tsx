// app/testimonials/page.tsx
'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
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

  const sectionOpacity = useTransform(smoothProgress, [0, 0.3, 0.6], [0, 0.8, 1]);
  const sectionY = useTransform(smoothProgress, [0, 0.4], [60, 0]);

  // First row - aligned tops, varying bottoms
  const firstRowCards = [
    {
      name: "Sarah Chen",
      role: "Design Director @ PixelForge",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "The quality and speed are unmatched. We got premium designs at a fraction of the usual cost. Their team truly understood our brand from day one.",
      date: "2 weeks ago",
      height: "short"
    },
    {
      name: "Marcus Okoro",
      role: "Founder @ Nova Startup",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      text: "We scaled from 3 to 12 products in 4 months. Every design was tailor-made and perfectly on-brand. The real-time collaboration made feedback loops incredibly fast. Best investment we've made this year.",
      date: "1 month ago",
      height: "taller"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Brand @ Lumora",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "The workflow integrations saved us so much time. Everything just clicks together with our existing tools.",
      date: "3 weeks ago",
      height: "short"
    }
  ];

  // Second row - varying tops, aligned bottoms
  const secondRowCards = [
    {
      name: "David Kim",
      role: "CTO @ Vertex Labs",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      text: "Scalability is real here. We started small and as our needs grew, they adapted seamlessly without any friction. The premium designers are genuinely world-class.",
      date: "5 days ago",
      height: "taller"
    },
    {
      name: "Priya Sharma",
      role: "Creative Director @ Indigo Co.",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      rating: 4,
      text: "Multilingual support + rollover hours made international campaigns so much easier. Highly recommend!",
      date: "2 months ago",
      height: "short"
    },
    {
      name: "Ahmed Hassan",
      role: "Founder @ Sahara Tech",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      text: "From trend reports to asset library and workshops — this platform has everything a growing design team needs. It's not just a service, it's a true partner.",
      date: "1 week ago",
      height: "taller"
    }
  ];

  return (
    <motion.section 
         ref={sectionRef}
         className="relative bg-gray-100 py-20 overflow-hidden"
         style={{
           opacity: sectionOpacity,
           y: sectionY,
         }}
       >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-red-500/5 blur-3xl"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3">
            <div className="bg-red-500/10 rounded-full px-4 py-1 border border-red-500/20">
              <span className="text-red-500 text-sm font-semibold">Testimonials</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our <span className="text-red-500">Customers</span> Are Saying
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Real stories from designers and teams who love working with us
          </p>
        </motion.div>

        {/* Brick Wall Layout */}
        <div className="space-y-6">
          {/* First Row - Aligned Tops (items-start), Varying Bottoms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {firstRowCards.map((testimonial, idx) => (
              <motion.div
                key={`first-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div 
                  className={`relative bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-6 transition-all duration-300 group-hover:shadow-xl group-hover:bg-white/90 flex flex-col ${
                    testimonial.height === 'short' ? 'min-h-[240px]' : 'min-h-[300px]'
                  }`}
                >
                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      whileHover={{ scale: 1.05 }}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-red-500/30" 
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Date */}
                  <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-400">
                    {testimonial.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - Varying Tops (different top margins), Aligned Bottoms (items-end) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[-75] items-end">
            {secondRowCards.map((testimonial, idx) => (
              <motion.div
                key={`second-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`group ${
                  idx === 0 ? 'md:mb-0' : 
                  idx === 1 ? 'md:mb-8' : 
                  'md:mb-4'
                }`}
              >
                <div 
                  className={`relative bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-6 transition-all duration-300 group-hover:shadow-xl group-hover:bg-white/90 flex flex-col ${
                    testimonial.height === 'short' ? 'min-h-[300px]' : 'min-h-[400px]'
                  }`}
                >
                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      whileHover={{ scale: 1.05 }}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-red-500/30" 
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Date */}
                  <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-400">
                    {testimonial.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200/50 text-gray-700 p-3 rounded-full hover:bg-white hover:shadow-lg transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200/50 text-gray-700 p-3 rounded-full hover:bg-white hover:shadow-lg transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "1,200+", label: "Projects Completed" },
            { value: "50+", label: "Team Members" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-red-500">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}