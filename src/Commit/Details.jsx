import React from 'react';
import { motion } from 'framer-motion';
import FounderImg from '../Asset/Pineapple.png';

export default function AboutMissionVision() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-12 px-4 md:px-6 lg:px-10 overflow-hidden">
      {/* Floating glowing accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-red-700 to-transparent blur-3xl rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25, scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        className="absolute bottom-5 right-5 md:bottom-10 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-tr from-sky-500 to-transparent blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-4xl md:max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-4 md:p-6 shadow-md md:shadow-xl hover:shadow-red-600/30 transition"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-400 mb-3 md:mb-5">
            About Us
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-5">
            Herito Wellness Private Limited is a modern wellness and beverage company, dedicated to redefining refreshment and nutrition. With a strong foundation in innovation and research, we specialize in developing high-quality beverages and processed foods that combine health, taste, and functionality.
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Our portfolio covers energy drinks, sports drinks, nutritional beverages, functional foods, and ready-to-drink solutions, all crafted with global quality benchmarks and designed to meet the lifestyle needs of today’s consumers. Based in India, Herito Wellness operates with world-class processes in manufacturing, blending, bottling, packaging, and distribution, ensuring every product delivers safety, consistency, and trust.
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 md:space-y-6"
        >
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-pink-600/25 transition">
            <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-400 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              To enrich lives by creating innovative, functional, and wellness-focused beverages and foods that combine great taste with health benefits, empowering consumers to perform, recover, and live better every day.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-sky-600/25 transition">
            <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              To be recognized as India’s most trusted wellness and beverage company — setting international standards in innovation, quality, and sustainability while making premium functional beverages accessible to every consumer in the country.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Founder Section */}
      <section className="relative text-white py-12 px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.img
            src={FounderImg}
            alt="Founder"
            className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg md:shadow-2xl border-2 border-gray-700 hover:scale-105 transition-transform duration-500"
            whileHover={{ rotate: [0, -1, 1, 0], scale: 1.05 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 bg-gradient-to-br from-gray-800/70 to-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-4 md:p-6 shadow-md md:shadow-xl hover:shadow-red-600/30 transition"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-400 mb-3 md:mb-5">
            Founder’s Note
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-5 italic">
            “At Herito Wellness, our journey began with a simple belief — that beverages should do more than refresh. They should energize, nourish, and inspire healthier lifestyles.”
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-5">
            When we started this company, our vision was to create products that reflect both science and nature, combining international standards with the unique needs of Indian consumers. Every drink we craft carries our promise of quality, safety, and wellness.
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-5">
            Herito is more than just a beverage company. It’s a movement towards a healthier, more energetic India — one sip at a time. Our mission is to make world-class functional beverages accessible to every individual, while ensuring that we stay responsible towards our environment and communities.
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            This is only the beginning. Together, we will build a brand that India is proud of — and the world respects.
          </p>

          <motion.h3
            whileHover={{ scale: 1.02 }}
            className="mt-4 md:mt-6 text-sm md:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-sky-400"
          >
            — Founder, Herito Wellness Private Limited
          </motion.h3>
        </motion.div>
      </section>
    </section>
  );
}