// 'use client';

// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { useRef, useEffect, useState } from 'react';

// export default function GlobeSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   // Globe rotation based on scroll
//   const globeRotateX = useTransform(smoothProgress, [0, 0.5, 1], [0, 180, 360]);
//   const globeRotateY = useTransform(smoothProgress, [0, 0.5, 1], [0, 360, 720]);
//   const globeScale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1.1, 1]);
//   const globeOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  
//   // Shapes animation
//   const shapesY = useTransform(smoothProgress, [0, 0.5, 1], [100, 0, -100]);
//   const shapesScale = useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1, 1.2]);
  
//   // Parallax effect on mouse move
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 20;
//       const y = (e.clientY / window.innerHeight - 0.5) * 20;
//       setMousePosition({ x, y });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden py-20"
//     >
//       {/* Background with animated particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0, 0.5, 0],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <motion.div
//               animate={{
//                 y: [0, -5, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <div className="inline-block bg-red-500/20 backdrop-blur-sm rounded-full px-4 py-1 border border-red-500/30">
//                 <span className="text-red-400 text-sm font-semibold">Global Reach</span>
//               </div>
//             </motion.div>
            
//             <motion.h2 
//               className="text-4xl md:text-5xl font-bold text-white leading-tight"
//               animate={{
//                 textShadow: [
//                   "0 0 0px rgba(239, 68, 68, 0)",
//                   "0 0 20px rgba(239, 68, 68, 0.3)",
//                   "0 0 0px rgba(239, 68, 68, 0)",
//                 ],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 repeatDelay: 2,
//               }}
//             >
//               Connect With The
//               <span className="text-red-500 block">World</span>
//             </motion.h2>
            
//             <motion.p 
//               className="text-gray-300 text-lg"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               Our global network spans across continents, bringing together the brightest minds and most innovative solutions to serve clients worldwide.
//             </motion.p>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="flex flex-wrap gap-4"
//             >
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//                 <span className="text-gray-300 text-sm">15+ Countries</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
//                 <span className="text-gray-300 text-sm">50+ Partners</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
//                 <span className="text-gray-300 text-sm">200+ Projects</span>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Side - Globe Container */}
//           <motion.div
//             style={{
//               opacity: globeOpacity,
//               scale: globeScale,
//             }}
//             className="relative flex justify-center items-center"
//           >
//             <div 
//               ref={containerRef}
//               className="relative w-full max-w-[500px] aspect-square cursor-pointer"
//               style={{
//                 transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
//                 transition: "transform 0.1s ease-out",
//               }}
//             >
//               {/* Main Globe */}
//               <motion.div
//                 className="absolute inset-0 rounded-full overflow-hidden shadow-2xl"
//                 style={{
//                   rotateX: globeRotateX,
//                   rotateY: globeRotateY,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 50,
//                   damping: 20,
//                 }}
//               >
//                 <div className="relative w-full h-full">
//                   {/* Gradient background */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                  
//                   {/* Animated map-like grid */}
//                   <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
//                     <defs>
//                       <radialGradient id="glow" cx="50%" cy="50%" r="50%">
//                         <stop offset="0%" stopColor="rgba(239, 68, 68, 0.3)" />
//                         <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
//                       </radialGradient>
//                       <pattern id="grid" patternUnits="userSpaceOnUse" width="40" height="40">
//                         <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
//                       </pattern>
//                     </defs>
//                     <rect width="100%" height="100%" fill="url(#grid)" />
//                     <circle cx="200" cy="200" r="180" fill="url(#glow)" />
                    
//                     {/* Animated dots representing cities */}
//                     {[...Array(30)].map((_, i) => {
//                       const angle = (i * 12) * Math.PI / 180;
//                       const radius = 160;
//                       const x = 200 + Math.cos(angle) * radius;
//                       const y = 200 + Math.sin(angle) * radius;
//                       return (
//                         <motion.circle
//                           key={i}
//                           cx={x}
//                           cy={y}
//                           r="3"
//                           fill="rgba(239, 68, 68, 0.8)"
//                           animate={{
//                             r: [3, 6, 3],
//                             opacity: [0.5, 1, 0.5],
//                           }}
//                           transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             delay: i * 0.1,
//                           }}
//                         />
//                       );
//                     })}
//                   </svg>
                  
//                   {/* Rotating rings */}
//                   <motion.div
//                     className="absolute inset-0 rounded-full border-2 border-red-500/30"
//                     animate={{
//                       scale: [1, 1.05, 1],
//                       opacity: [0.3, 0.6, 0.3],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   />
                  
//                   <motion.div
//                     className="absolute inset-4 rounded-full border border-red-500/20"
//                     animate={{
//                       rotate: 360,
//                     }}
//                     transition={{
//                       duration: 20,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Rolling Shapes Background */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {/* Large rolling shapes */}
//           {[
//             { size: 80, color: "red-500/10", left: "10%", duration: 25, delay: 0 },
//             { size: 120, color: "blue-500/10", left: "70%", duration: 35, delay: 2 },
//             { size: 60, color: "purple-500/10", left: "30%", duration: 20, delay: 5 },
//             { size: 100, color: "orange-500/10", left: "85%", duration: 30, delay: 1 },
//             { size: 45, color: "green-500/10", left: "50%", duration: 18, delay: 3 },
//           ].map((shape, idx) => (
//             <motion.div
//               key={idx}
//               className={`absolute rounded-full bg-${shape.color} blur-3xl`}
//               style={{
//                 width: shape.size,
//                 height: shape.size,
//                 left: shape.left,
//                 top: -shape.size,
//               }}
//               animate={{
//                 y: ["-20vh", "120vh"],
//                 rotate: [0, 360],
//                 x: [0, Math.sin(idx) * 50, 0],
//               }}
//               transition={{
//                 duration: shape.duration,
//                 repeat: Infinity,
//                 delay: shape.delay,
//                 ease: "linear",
//               }}
//             />
//           ))}
          
//           {/* Rolling geometric shapes */}
//           {[
//             { type: "square", size: 40, left: "20%", duration: 22, delay: 1 },
//             { type: "triangle", size: 35, left: "60%", duration: 28, delay: 3 },
//             { type: "hexagon", size: 45, left: "40%", duration: 32, delay: 0 },
//             { type: "circle", size: 30, left: "80%", duration: 25, delay: 2 },
//             { type: "diamond", size: 38, left: "15%", duration: 30, delay: 4 },
//           ].map((shape, idx) => (
//             <motion.div
//               key={`shape-${idx}`}
//               className="absolute"
//               style={{
//                 left: shape.left,
//                 top: -shape.size,
//               }}
//               animate={{
//                 y: ["-10vh", "110vh"],
//                 rotate: [0, 360],
//                 x: [0, Math.cos(idx) * 30, 0],
//               }}
//               transition={{
//                 duration: shape.duration,
//                 repeat: Infinity,
//                 delay: shape.delay,
//                 ease: "linear",
//               }}
//             >
//               <div
//                 className={`${
//                   shape.type === "square" ? "bg-red-500/20 rotate-45" :
//                   shape.type === "triangle" ? "bg-blue-500/20" :
//                   shape.type === "hexagon" ? "bg-purple-500/20" :
//                   shape.type === "circle" ? "bg-orange-500/20 rounded-full" :
//                   "bg-green-500/20 rotate-45"
//                 } backdrop-blur-sm border border-white/20`}
//                 style={{
//                   width: shape.size,
//                   height: shape.size,
//                   clipPath: shape.type === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" :
//                             shape.type === "hexagon" ? "polygon(25% 0%, 75% 0%, 100% 25%, 75% 50%, 50% 75%, 25% 75%, 0% 50%, 25% 25%)" :
//                             shape.type === "diamond" ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" :
//                             "none",
//                 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }














'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GlobeSection() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    gsap.to(globeRef.current, {
      rotate: 360,
      ease: 'none',
      scrollTrigger: {
        trigger: globeRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true, // 🔥 smooth scroll sync
      },
    });
  }, []);

  return (
    <section className="h-[150vh] flex items-center justify-center bg-black">
      
      {/* Globe */}
      <div
        ref={globeRef}
        className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.2)]"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/pattern.jpg')", // your abstract shapes
          }}
        />
      </div>

    </section>
  );
}