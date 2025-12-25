import React from "react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <main className="bg-[#f7f8f5] text-gray-700">

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-gray-900"
        >
          About Herito Wellness
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg">
          Science-driven functional nutrition designed to elevate everyday wellness.
        </p>
      </header>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 space-y-8 text-lg leading-relaxed">
        <p>
          Herito Wellness Company is a modern wellness innovation company creating
          science-driven functional beverages and functional foods designed to
          elevate everyday performance.
        </p>
        <p>
          From hydration and energy to recovery and immunity, we create products
          that combine clinical science, clean formulations, and superior taste,
          built for today’s health-conscious consumer.
        </p>
      </section>

      {/* BRAND STATEMENT */}
      <section className="mt-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
          <p className="text-2xl md:text-3xl font-medium text-gray-900">
            Simple. Functional. Effective. Ultra-Premium.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Capabilities</h2>
          <p>
            Rooted in manufacturing excellence, R&D, processing, cold-chain facilities,
            and global-standard quality systems, we are building India’s most trusted
            functional wellness ecosystem.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Portfolio</h2>
          <p>
            Our portfolio spans electrolyte beverages, functional drinks,
            wellness-focused RTDs, flavoured waters, protein and nutrient foods,
            and next-generation lifestyle nutrition solutions.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>

          <div className="space-y-10 border-l border-gray-300 pl-6">
            {[
              ["2022", "Conceptualization of Herito Wellness and product research"],
              ["2023", "R&D, formulation trials, and manufacturing partnerships"],
              ["2024", "Brand development, certifications, and pilot launches"],
              ["2025", "Market expansion, B2B partnerships, and D2C growth"]
            ].map(([year, text], i) => (
              <div key={i}>
                <p className="text-sm font-semibold text-gray-900">{year}</p>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
            Leadership & Advisory
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              ["Dinesh K", "Founder & Managing Director"],
              ["Advisory Member", "Nutrition Science Advisor"],
              ["Advisory Member", "Manufacturing & Quality Advisor"]
            ].map(([name, role], i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-4" />
                <h3 className="font-semibold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10 text-center">
            Our Core Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Scientifically validated ingredients",
              "Clean and minimal formulations",
              "Precision manufacturing & safety systems",
              "Global taste benchmarks",
              "Sustainable, modern design",
              "Multi-channel availability (Retail, B2B, D2C)"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#f7f8f5] border border-gray-200 rounded-xl p-6 text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Certifications & Compliance
          </h2>
          <p className="text-gray-600 mb-8">
            Our operations follow nationally and internationally recognized
            quality, safety, and regulatory standards.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700">
            <span>ISO Certified</span>
            <span>GMP Compliant</span>
            <span>FSSAI Approved</span>
            <span>Quality Assured</span>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24 text-center">
        <p className="text-gray-600 mb-4">Our purpose</p>
        <p className="text-2xl md:text-3xl font-semibold text-gray-900 max-w-3xl mx-auto">
          To enhance hydration, energy, endurance, and overall lifestyle wellness —
          one product at a time.
        </p>
      </section>

      {/* CLOSING */}
      <footer className="max-w-6xl mx-auto px-6 md:px-12 pb-24 text-center text-gray-500">
        Herito Wellness Company stands at the intersection of nutrition science,
        advanced manufacturing, and premium brand experience — shaping the future
        of functional wellness in India and beyond.
      </footer>

    </main>
  )
}
