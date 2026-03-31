"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Create <span className="text-red-500">Magic</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch with us today.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-red-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-red-600 transition-colors"
          >
            Start Your Project
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
}