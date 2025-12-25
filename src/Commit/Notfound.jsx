import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

export default function Notfound() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  /* Auto redirect after 10 seconds */
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 10000)

    return () => clearTimeout(timer)
  }, [navigate])

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/${query.toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f8f5] dark:bg-[#0f172a]
                     flex items-center justify-center px-6 text-gray-700 dark:text-gray-300">

      <div className="max-w-2xl w-full text-center">

        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">404</span>
        </nav>

        {/* Error Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1 text-xs font-medium tracking-wider
                           bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700
                           rounded-full">
            Error 404
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white"
        >
          Page Not Found
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400"
        >
          The page you are looking for may have been moved or no longer exists.
          You will be redirected to the homepage shortly.
        </motion.p>

        {/* Search */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex gap-2"
        >
          <input
            type="text"
            placeholder="Search pages (about, products, enquiry)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 dark:border-slate-700
                       rounded-md text-sm focus:outline-none focus:ring-1
                       focus:ring-gray-400 dark:bg-slate-900"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-gray-900 text-white rounded-md
                       hover:bg-gray-700 transition"
          >
            Search
          </button>
        </motion.form>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="px-6 py-3 rounded-md bg-gray-900 text-white font-medium
                       hover:bg-gray-700 transition"
          >
            Go to Homepage
          </Link>

          <Link
            to="/enquiry"
            className="px-6 py-3 rounded-md border border-gray-300
                       hover:border-gray-400 hover:text-gray-900
                       dark:border-slate-700 dark:hover:text-white transition"
          >
            Contact Support
          </Link>
        </motion.div>

        {/* Redirect Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-sm text-gray-500 dark:text-gray-400"
        >
          Redirecting to homepage in <strong>10 seconds</strong>.
        </motion.p>

        {/* Brand */}
        <p className="mt-4 text-xs text-gray-400">
          Herito Wellness Private Limited — Science-driven wellness.
        </p>

      </div>
    </main>
  )
}
