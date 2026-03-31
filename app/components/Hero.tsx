'use client';

import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Sample images - replace with your own
const slides = [
  {
    id: 1,
    src: "/bg1.jpg",
    alt: "Creative team collaborating",
    title: "Creative Collaboration",
    description: "Where ideas come to life"
  },
  {
    id: 2,
    src: "/bg2.jpg",
    alt: "Modern office space",
    title: "Modern Workspace",
    description: "Designed for innovation"
  },
  {
    id: 3,
    src: "/bg3.jpg",
    alt: "Team meeting",
    title: "Strategic Planning",
    description: "Building the future together"
  },
  {
    id: 4,
    src: "/bg4.jpg",
    alt: "Creative process",
    title: "Creative Process",
    description: "From concept to reality"
  }
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const imageScale = useTransform(smoothProgress, [0, 1], [1, 0.8]);
  const imageY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Slide variants for animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 to-gray-100 min-h-[100vh] flex items-center py-16 overflow-hidden"
    >
      {/* Moving Background Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: [-1000, 1000],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent"
            style={{
              left: `${30 + i * 25}%`,
              top: 0,
              bottom: 0,
            }}
            animate={{
              y: [-500, 500],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: i,
            }}
          />
        ))}
      </div>

      <div className="mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="w-full">
          <div className="relative w-full">

            {/* SVG clipPath */}
            <svg width="0" height="0" className="absolute pointer-events-none">
              <defs>
                <clipPath id="heroShape" clipPathUnits="objectBoundingBox">
                  <path 
                    d="M 0,0 
                       L 0.48,0 
                       Q 0.52,0 0.52,0.04 
                       L 0.52,0.28 
                       Q 0.52,0.34 0.46,0.34 
                       L 0.04,0.34 
                       Q 0,0.34 0,0.38 
                       L 0,1 
                       L 0.7,1 
                       Q 0.74,1 0.74,0.96 
                       L 0.74,0.78 
                       Q 0.74,0.72 0.8,0.72 
                       L 0.96,0.72 
                       Q 1,0.72 1,0.68 
                       L 1,0 
                       Z" 
                  />
                </clipPath>
              </defs>
            </svg>

            {/* Slider Container */}
            <motion.div 
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              style={{ 
                clipPath: 'url(#heroShape)',
                height: '520px',
                scale: imageScale,
                y: imageY,
              }}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[currentSlide].src}
                    alt={slides[currentSlide].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-red-900/70" />

                  
                  {/* Slide Overlay Text */}
                  <motion.div 
                    className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md rounded-xl p-4 max-w-[300px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-white text-lg font-semibold">{slides[currentSlide].title}</h3>
                    <p className="text-white/80 text-sm">{slides[currentSlide].description}</p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Inner glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-red-500/20 pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Slider Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === idx 
                        ? 'w-8 h-2 bg-red-500' 
                        : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Auto-play Toggle */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all z-20"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* Animated H1 Text */}
            <motion.div 
              className="absolute top-10 md:left-8 max-w-[170px] sm:max-w-[300px] md:max-w-[620px]"
              style={{
                opacity: contentOpacity,
              }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1 
                className="text-black text-2xl md:text-5xl font-bold leading-tight tracking-tight"
                animate={{
                  textShadow: [
                    "0px 0px 0px rgba(239, 68, 68, 0)",
                    "2px 2px 10px rgba(239, 68, 68, 0.3)",
                    "0px 0px 0px rgba(239, 68, 68, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <div className="flex flex-col sm:flex-row gap-3"> 
                  <div>Innovative</div>
                  <div className='mt-[-25px] sm:mt-0' >Studio Agency</div>
                </div>
                {/* add linear gradient box */}
<div className="absolute h-10 rounded-xl mr-2 mt-15 inset-0 bg-gradient-to-br from-black via-black to-red-900/70 sm:hidden" />

                <motion.span 
                  className="text-red-500 mt-[20px] ml-2 sm:mt-[-100px]  inline-block"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  for Modern <span className='text-4xl sm:text-5xl'>Brands</span>
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Rotating Red Circle */}
            <motion.div 
              className="absolute top-8 right-8 w-20 h-20 rounded-full flex items-center justify-center pointer-events-none"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                opacity: contentOpacity,
              }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 border-[5px] border-red-500 rounded-full" />
                <motion.svg 
                  width="78" 
                  height="78" 
                  className="text-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <circle 
                    cx="39" 
                    cy="39" 
                    r="32" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="6" 
                    strokeDasharray="14 10"
                  />
                </motion.svg>
              </div>
            </motion.div>

            {/* Animated Glass Card */}
            <motion.div 
              className="absolute bottom-8 right-8 backdrop-blur-xl bg-white/10 rounded-3xl shadow-xl p-7 max-w-[275px] border border-white/20"
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                opacity: contentOpacity,
              }}
            >
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-orange-500/90 rounded-2xl flex items-center justify-center flex-shrink-0"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 1,
                    }}
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <motion.p 
                      className="font-semibold text-[18px] leading-none tracking-tight mb-3 text-white"
                      animate={{
                        letterSpacing: ["normal", "1px", "normal"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      MAKING IDEAS HAPPEN
                    </motion.p>
                  </div>
                </div>
                <motion.p 
                  className="text-black text-[13px] mt-4 leading-snug"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Where Innovation Meets Purpose<br />
                  to Grow Your Brand
                </motion.p>
              </motion.div>

              {/* Animated Leaf */}
              <motion.div 
                className="absolute -bottom-3 -right-3 bg-white/20 backdrop-blur-md p-3 rounded-2xl shadow text-3xl border border-white/30"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🌿
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}