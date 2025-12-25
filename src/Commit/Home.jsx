import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import Details from './Details'

export default function Home() {
  return (
    <main className="bg-[#f7f8f5]">
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        {/* Soft ambient shapes */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25, y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-[#e7ebe5] blur-3xl"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2, y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#eef2ed] blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT CONTENT */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest uppercase text-[#7a8a7a]">
              Wellness • Nutrition • Balance
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-[#1f2933] leading-tight">
              Wellness Crafted for<br className="hidden md:block" /> Modern Living
            </h1>

            <p className="mt-6 max-w-xl text-[#4b5563] leading-relaxed">
              At Herito Wellness, we believe wellness should be simple,
              transparent, and built into everyday routines — supporting
              long-term vitality and balance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/products"
                className="px-6 py-3 rounded-full bg-[#1f2933] text-white text-sm font-medium hover:bg-[#111827] transition"
              >
                Explore Products
              </NavLink>

              <NavLink
                to="/enquiry"
                className="px-6 py-3 rounded-full border border-[#1f2933] text-[#1f2933] text-sm font-medium hover:bg-[#1f2933] hover:text-white transition"
              >
                Enquire Now
              </NavLink>
            </div>
          </motion.header>

          {/* RIGHT VISUAL / DASHBOARD CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl border border-[#e5e7eb] shadow-sm p-8">
              <p className="text-sm font-medium text-[#1f2933]">
                Wellness Snapshot
              </p>

              <div className="mt-6 space-y-5">
                {[{ label: 'Daily Nutrition', value: 'Balanced Intake' }, { label: 'Immunity Focus', value: 'Year-round Support' }, { label: 'Clean Ingredients', value: 'Carefully Sourced' }].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-[#4b5563]">{item.label}</span>
                    <span className="text-[#1f2933] font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <Details />
    </main>
  )
}
