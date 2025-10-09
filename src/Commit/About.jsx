import React from 'react';
import { motion } from 'framer-motion';
import FounderImg from '../Asset/Pineapple.png';

export default function About() {
  return (
    <section className="relative max-w-full mx-auto mt-24 p-4 md:p-8 text-gray-900 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl">
      {/* Layout Wrapper */}
      <div className="flex flex-col md:flex-col gap-8 md:gap-12 relative z-10">

        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: 0, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="flex justify-center"
        >
          <motion.img
            src={FounderImg}
            alt="Founder"
            className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-700"
            whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0], y: [0, -5, 0] }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* About, Business Model, Product Quality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, staggerChildren: 0.2 }}
          className="flex flex-col justify-start space-y-6 md:space-y-8"
        >
          {/* About Section */}
          <motion.div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">About Herito Wellness Private Limited</h1>
            <p className="text-base md:text-lg text-gray-700">
              At <strong>Herito Wellness Private Limited</strong>, we go beyond simple refreshment — we focus on wellness with a purpose. Our mission is to create beverages and foods that not only taste great but also support a healthier lifestyle.
            </p>
          </motion.div>

          {/* Business Model Section */}
          <motion.div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">Our Business Model</h2>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2 text-gray-700">
              <li><strong>Manufacturing & Packaging:</strong> High-quality beverages and processed foods crafted with precision.</li>
              <li><strong>R&D & Cold-Storage:</strong> Dedicated facilities to innovate, test, and store products safely.</li>
              <li><strong>Distribution Channels:</strong> Wholesale, retail, e-commerce, and institutional supply chains to ensure accessibility nationwide.</li>
            </ul>
          </motion.div>

          {/* Product Quality Section */}
          <motion.div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">Products Quality & Assurance</h2>
            <p className="text-base md:text-lg text-gray-700">
              All our products are developed under strict quality control standards. From sourcing ingredients to packaging, we follow internationally recognized protocols to ensure consistency, safety, and premium quality.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}