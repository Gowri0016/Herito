import React from 'react';
import { motion } from 'framer-motion';
import FounderImg from '../Asset/Pineapple.png';

export default function About() {
  return (
    <section className="relative max-w-full mx-auto mt-24 p-6 md:p-12 text-gray-100 bg-black overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950 opacity-90" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />

      {/* Wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-14 max-w-4xl mx-auto">

        {/* Founder Image Floating Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur-lg opacity-30" />
          <motion.img
            src={FounderImg}
            alt="Founder"
            className="relative w-52 h-64 md:w-64 md:h-80 rounded-3xl shadow-2xl object-cover border border-gray-700"
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:bg-white/20 transition-all"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-3">Herito Wellness Pvt. Ltd.</h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              At <strong>Herito Wellness</strong>, we focus on creating refreshing, purposeful wellness beverages and foods
              that enrich everyday lifestyles through taste, nutrition, and quality.
            </p>
          </motion.div>

          {/* Business Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:bg-white/20 transition-all"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-2">Business Model</h2>
            <ul className="text-gray-300 text-base md:text-lg space-y-2">
              <li><strong>Manufacturing:</strong> Premium beverages & processed foods.</li>
              <li><strong>R&D Facilities:</strong> Innovation, testing, and cold-storage systems.</li>
              <li><strong>Distribution:</strong> Wholesale, retail, e-commerce, and institutional supply.</li>
            </ul>
          </motion.div>

          {/* Product Quality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border-l-4 border-emerald-500 shadow-lg hover:bg-white/20 transition-all"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-2">Quality & Assurance</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              We follow trusted international standards—right from sourcing natural ingredients to precision packaging—ensuring
              purity, consistency, and top-tier quality across all our products.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}