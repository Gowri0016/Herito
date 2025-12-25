import React from 'react'
import { motion } from 'framer-motion'
import FounderImg from '../Asset/Pineapple.png'

export default function AboutMissionVision() {
  return (
    <section className="bg-[#f7f8f5] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ABOUT + MISSION + VISION */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ABOUT */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-[#e5e7eb] p-10"
          >
            <h2 className="text-3xl font-semibold text-[#1f2933] mb-6">
              About Herito Wellness
            </h2>

            <div className="space-y-5 text-[#4b5563] leading-relaxed text-sm">
              <p>
                Herito Wellness Company is a modern wellness innovation company creating
                science-driven functional beverages and functional foods designed to elevate
                everyday performance.
              </p>

              <p>
                Rooted in strong manufacturing, R&D, processing, cold-chain facilities,
                and global-standard quality systems, we are building India’s most trusted
                functional wellness ecosystem.
              </p>

              <p className="font-medium text-[#1f2933]">
                Wellness should be simple. Functional. Effective. Ultra-premium.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Scientifically validated ingredients</li>
                <li>Minimal, clean formulations</li>
                <li>Precision manufacturing & safety systems</li>
                <li>Global taste benchmarks for Indian palates</li>
                <li>Sustainable, modern design</li>
                <li>Retail, B2B, institutional, D2C & e-commerce reach</li>
              </ul>

              <p className="font-medium text-[#1f2933]">
                Our purpose is to enhance hydration, energy, endurance, and lifestyle wellness.
              </p>
            </div>
          </motion.article>

          {/* MISSION + VISION */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-[#e5e7eb] p-8"
            >
              <h3 className="text-xl font-semibold text-[#1f2933] mb-3">
                Our Mission
              </h3>
              <p className="text-[#4b5563] text-sm leading-relaxed">
                To create functional foods and beverages that truly work—combining
                scientific formulation, clean nutrition, and exceptional taste.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-[#e5e7eb] p-8"
            >
              <h3 className="text-xl font-semibold text-[#1f2933] mb-3">
                Our Vision
              </h3>
              <p className="text-[#4b5563] text-sm leading-relaxed">
                To become the most trusted global wellness brand that elevates
                everyday living through science-backed hydration and nutrition.
              </p>
            </motion.div>
          </div>
        </div>

        {/* FOUNDER SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center bg-white rounded-3xl border border-[#e5e7eb] p-12"
        >
          {/* Founder Image */}
          <div className="flex justify-center">
            <img
              src={FounderImg}
              alt="Dinesh K – Founder"
              className="w-56 rounded-3xl object-cover"
            />
          </div>

          {/* Founder Note */}
          <div>
            <h2 className="text-3xl font-semibold text-[#1f2933] mb-6">
              Founder’s Note
            </h2>

            <div className="space-y-4 text-[#4b5563] text-sm leading-relaxed">
              <p>Dear Community,</p>

              <p>
                Herito Wellness Company was created with one intention:
                to make functional nutrition simple, effective, and accessible.
              </p>

              <p>
                Every formulation starts with science. Every product is refined
                with purpose—from taste to performance.
              </p>

              <p>
                We are not here to follow trends. We are here to redefine
                wellness for the next generation.
              </p>

              <p className="font-medium text-[#1f2933]">
                Together, let’s Move Better. Live Better.
              </p>

              <p className="font-medium text-[#1f2933] pt-4">
                Dinesh K <br />
                Founder & Managing Director <br />
                Herito Wellness Private Limited
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </section>
  )
}
