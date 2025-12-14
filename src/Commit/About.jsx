import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-[#05080A] via-[#0A0F12] to-[#05080A] text-slate-200 overflow-hidden">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
        >
          About Us
        </motion.h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pb-28 space-y-14 text-lg leading-relaxed">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-slate-300"
        >
          Herito Wellness Company is a modern wellness innovation company creating science-driven functional beverages and functional foods designed to elevate everyday performance.
          From hydration and energy to recovery and immunity, we create products that combine clinical science, clean formulations, and superior taste, built for the needs of today’s active, health-conscious consumer.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-300"
        >
          Rooted in our deep capability across manufacturing, R&D, processing, cold-chain facilities, and global-standard quality systems, we are building India’s most trusted functional wellness ecosystem.
          Our portfolio spans electrolyte beverages, functional drinks, wellness-focused RTDs, flavoured waters, protein and nutrient foods, and next-gen lifestyle nutrition solutions.
        </motion.p>

        {/* PHILOSOPHY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center py-14"
        >
          <p className="text-2xl md:text-3xl font-medium text-emerald-400">
            Simple. Functional. Effective. Ultra-premium.
          </p>
        </motion.div>

        {/* PRINCIPLES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-slate-200">
            Every product we make follows our core principles:
          </p>

          <ul className="space-y-4 border-l border-emerald-500/20 pl-6">
            <li>Scientifically validated ingredients with proven functional benefits</li>
            <li>Minimal and clean formulations inspired by global wellness practices</li>
            <li>Precise manufacturing powered by strict quality, safety, and R&D systems</li>
            <li>International taste benchmarks refined for Indian palates</li>
            <li>Sustainable, modern, minimal design that reflects purity and performance</li>
            <li>
              Multi-channel availability—retail, supermarkets, modern trade, gyms,
              fitness centers, turfs, sports clubs, institutional and industry supply,
              corporate supply, events, catering, B to B, e-commerce, and D2C
            </li>
          </ul>
        </motion.div>

        {/* PURPOSE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="pt-16"
        >
          <p className="text-slate-200 font-medium">Our purpose is clear:</p>
          <p className="mt-4 text-xl font-semibold text-white">
            To enhance hydration, energy, endurance, and overall lifestyle wellness—one product at a time.
          </p>
        </motion.div>

        {/* CLOSING */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="pt-16 text-slate-400"
        >
          Herito Wellness Company stands at the intersection of nutrition science, advanced manufacturing,
          and premium brand experience, shaping the future of functional wellness in India and beyond.
        </motion.p>

      </div>
    </section>
  );
}
