import React from 'react'
import { motion } from 'framer-motion'

export default function Enquiry() {
  return (
    <main className="bg-[#f7f8f5] text-gray-700">

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-gray-900"
        >
          Enquiry
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg">
          Connect with us for partnerships, product enquiries, or business opportunities.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-28 grid lg:grid-cols-2 gap-16">

        {/* Left – Trust Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Herito Wellness collaborates with distributors, retailers, corporate
            partners, fitness institutions, and healthcare-focused organizations.
            We welcome enquiries aligned with quality, innovation, and wellness.
          </p>

          <ul className="space-y-4 text-sm text-gray-600">
            <li>• Product & distribution enquiries</li>
            <li>• Corporate & institutional partnerships</li>
            <li>• B2B supply & private label discussions</li>
            <li>• Media & strategic collaborations</li>
          </ul>

          <div className="mt-8 p-6 bg-white border border-gray-200 rounded-xl">
            <p className="text-sm font-medium text-gray-900 mb-1">
              Registered Office
            </p>
            <p className="text-sm text-gray-600">
              115/33, Gobichettipalayam,<br />
              Erode – 638476, Tamil Nadu, India
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Phone: <a href="tel:+919445454943" className="hover:text-gray-900 transition">+91 94454 54943</a>
            </p>
          </div>
        </motion.div>

        {/* Right – Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Send an Enquiry
          </h3>

          <form className="space-y-5">

            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Nature of Enquiry</label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-1 focus:ring-gray-400"
              >
                <option>General Enquiry</option>
                <option>Product Information</option>
                <option>Distribution / Partnership</option>
                <option>Corporate / Institutional</option>
                <option>Media / Collaboration</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Tell us more about your enquiry"
                className="w-full px-4 py-3 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-900 text-white font-medium rounded-md
                         hover:bg-gray-700 transition"
            >
              Submit Enquiry
            </button>

          </form>
        </motion.div>

      </section>
    </main>
  )
}
