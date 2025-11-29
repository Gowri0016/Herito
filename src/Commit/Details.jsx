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
        {/* ABOUT + MISSION + VISION GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition-all"
          >
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">About Us</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Herito Wellness Private Limited is a next-generation wellness & beverage brand focused on innovation,
              nutrition, and premium quality. We specialize in functional beverages, energy & sports drinks,
              nutritional blends, and ready-to-drink wellness solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With world-class manufacturing, R&D, and quality assurance systems, we ensure every product delivers
              trust, consistency, and purpose to modern consumers across India.
            </p>
          </motion.div>

          {/* MISSION & VISION */}
          <div className="space-y-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/20 transition-all"
            >
              <h3 className="text-2xl font-semibold text-pink-400 mb-3">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To create wellness-focused beverages that enhance performance, boost energy, support nutrition,
                and empower healthier lifestyles — all while delivering great taste & innovation.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become India’s most trusted and innovative wellness beverage brand — setting global standards
                in quality, sustainability, and functional nutrition, accessible to every consumer.
              </p>
            </motion.div>
          </div>
        </div>

        {/* FOUNDER SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 blur-2xl rounded-3xl opacity-70 group-hover:opacity-100 transition" />
              <motion.img
                src={FounderImg}
                alt="Founder"
                className="relative w-52 h-full md:w-64 md:h-full rounded-3xl shadow-2xl object-cover border border-gray-700"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition-all"
          >
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">Founder’s Note</h2>
            <p className="text-gray-300 italic mb-4">
              “Herito Wellness began with a belief: beverages should nourish, energize, and support wellness —
              not just refresh.”
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our products blend modern nutrition with mindful craftsmanship. Each drink is designed to support
              real-world performance, recovery, and everyday wellbeing.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We aim to build a brand that inspires trust, wellness, and long-term value — one that India is proud of
              and the world recognises.
            </p>
            <p className="text-gray-300 leading-relaxed font-medium">
              — Founder, Herito Wellness Private Limited
            </p>
          </motion.div>
        </section>
      </div>
    </section>
  );
}