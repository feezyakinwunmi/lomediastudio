"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ethereal Dreams",
    category: "Music Video",
    color: "bg-purple-900",
  },
  {
    title: "Urban Pulse",
    category: "Commercial",
    color: "bg-red-600",
  },
  {
    title: "Horizon",
    category: "Short Film",
    color: "bg-red-400",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-purple-900">Work</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Each project is a unique story, meticulously crafted to leave a lasting impression.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.2}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className={`${project.color} h-64 rounded-2xl shadow-lg overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <span className="text-white font-bold text-xl">View Project →</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-purple-900">{project.category}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}