import React from 'react';
import { motion } from 'framer-motion';
import FounderImg from '../Asset/Pineapple.png';

export default function AboutMissionVision() {
  return (
    <section className="relative min-h-screen bg-black text-white py-16 px-4 md:px-8 overflow-hidden">
      
      {/* Soft premium glows */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-52 h-52 bg-emerald-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      {/* Main Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-20">

        {/* ABOUT + MISSION + VISION */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition-all"
          >
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">About Us</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Herito Wellness Company is a modern wellness innovation company creating science-driven functional
              beverages and functional foods designed to elevate everyday performance. From hydration and energy
              to recovery and immunity, we create products that combine clinical science, clean formulations,
              and superior taste, built for the needs of today’s active, health-conscious consumer.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Rooted in our deep capability across manufacturing, R&D, processing, cold-chain facilities, and
              global-standard quality systems, we are building India’s most trusted functional wellness ecosystem.
              Our portfolio spans electrolyte beverages, functional drinks, wellness-focused RTDs, flavoured
              waters, protein and nutrient foods, and next-gen lifestyle nutrition solutions.
            </p>

            <p className="text-gray-300 font-medium mb-2">
              At Herito, we believe wellness should be:
            </p>

            <p className="text-emerald-400 font-semibold mb-4">
              Simple. Functional. Effective. Ultra-premium.
            </p>

            <p className="text-gray-300 mb-2">
              Every product we make follows our core principles:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>Scientifically validated ingredients with proven functional benefits</li>
              <li>Minimal and clean formulations inspired by global wellness practices</li>
              <li>Precise manufacturing powered by strict quality, safety, and R&D systems</li>
              <li>International taste benchmarks refined for Indian palates</li>
              <li>Sustainable, modern, minimal design that reflects purity and performance</li>
              <li>
                Multi-channel availability—retail, supermarkets, modern trade, gyms, fitness centers, turfs,
                sports clubs, institutional and industry supply, corporate supply, events, catering, B to B,
                e-commerce, and D2C
              </li>
            </ul>

            <p className="text-gray-300 font-medium">Our purpose is clear:</p>
            <p className="text-gray-200 font-semibold mb-4">
              To enhance hydration, energy, endurance, and overall lifestyle wellness—one product at a time.
            </p>

            <p className="text-gray-400">
              Herito Wellness Company stands at the intersection of nutrition science, advanced manufacturing,
              and premium brand experience, shaping the future of functional wellness in India and beyond.
            </p>
          </motion.div>

          {/* MISSION + VISION */}
          <div className="space-y-8">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/20 transition-all"
            >
              <h3 className="text-2xl font-semibold text-pink-400 mb-3">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Herito Wellness Company exists to create functional foods and beverages that truly work —
                combining scientific formulation, clean nutrition, and exceptional taste.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the most trusted global wellness brand that elevates everyday living through
                science-backed hydration, nutrition, and lifestyle enhancement.
              </p>
            </motion.div>

          </div>
        </div>

        {/* FOUNDER NOTE */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 blur-2xl rounded-3xl" />
              <motion.img
                src={FounderImg}
                alt="Dinesh K – Founder"
                className="relative w-52 md:w-64 rounded-3xl shadow-2xl object-cover border border-gray-700"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>

          {/* Founder Text (UPDATED EXACT CONTENT) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition-all"
          >
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">Founder’s Note</h2>

            <p className="text-gray-300 mb-4">Dear Community,</p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Herito Wellness Company was created with one intention:
              to make functional nutrition simple, effective, and accessible for every individual seeking a better way to live.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              For years, I observed a gap—products claimed to offer wellness, yet lacked scientific grounding,
              clean ingredients, or real functional value. India deserved better. So, we began with a clear mission:
              build a wellness brand rooted in research, precision, and purity—crafted for modern lifestyles and aligned with global standards.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              At Herito, every formulation starts with science. Every product is refined with purpose.
              Every detail—from taste to texture, from packaging to performance—is obsessively designed to elevate
              how people hydrate, recover, energize, and nourish themselves daily.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              As a founder, I’ve always asked one question: “Will this truly help people live better?”
              Every product we create is built around that principle.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              We obsess over taste, functionality, sourcing, scientific validation, and user experience—because you deserve nothing less than world-class wellness solutions.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              We are not here to follow trends. We are here to redefine what wellness means for the next generation.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Herito is more than a company; it is a commitment—a commitment to transparency, to innovation,
              and to delivering functional products that truly make a difference.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              To support your journey with clean, science-backed, high-performance nutrition.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Thank you for believing in a vision that goes beyond products—a vision of a healthier, stronger,
              more empowered India.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Together, let’s continue to Move Better. Live Better.
            </p>

            <p className="text-gray-300 font-medium">
              Dinesh K <br />
              Founder & Managing Director <br />
              Herito Wellness Private Limited
            </p>
          </motion.div>

        </section>
      </div>
    </section>
  );
}
