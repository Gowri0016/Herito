import React from 'react'
import { motion } from 'framer-motion'
import Details from './Details'

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
        {/* Animated background orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-48 h-48 bg-red-700 blur-3xl rounded-full"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          className="absolute bottom-24 right-16 w-60 h-60 bg-sky-600 blur-3xl rounded-full"
        ></motion.div>

        {/* Main Content */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-sky-400 mb-4 drop-shadow-lg">
            Welcome to Herito Wellness <span className="text-white">Private Limited</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide">
            “At Herito Wellness, our journey began with a simple belief — that beverages should do more than refresh. They should energize, nourish, and inspire healthier lifestyles.”
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-sky-500 text-white font-semibold shadow-xl hover:shadow-red-500/50 transition duration-300"
          >
            Explore Our World
          </motion.button>
        </motion.section>

        {/* Decorative Lines */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-10 h-0.5 bg-gradient-to-r from-red-600 via-sky-500 to-transparent rounded-full"
        ></motion.div>
      </div>

      <Details />
    </>
  )
}
