import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Logo from '../Asset/3.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 md:h-24 bg-black text-white flex items-center justify-between px-4 md:px-12 shadow-xl z-50">
      {/* Logo */}
      <motion.div
        className="flex items-center gap-2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a href="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Energy Drink Logo"
            className="w-12 md:w-16 brightness-0 invert"
          />
          <span className="text-lg md:text-2xl font-bold tracking-wide text-white">
            Wellness
          </span>
        </a>
      </motion.div>

      {/* Actions for md and larger */}
      <div className="hidden md:flex items-center gap-4 md:gap-6 relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 md:px-5 py-2 rounded-xl bg-white text-black font-semibold shadow-md hover:shadow-lg transition text-xs md:text-sm"
        >
          <a href="/enquiry">Enquiry</a>
        </motion.button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(true)} className="focus:outline-none">
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center gap-6 z-50"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-2xl"
            >
              <FaTimes />
            </button>

            <a
              href="/enquiry"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-lg shadow-md hover:shadow-lg"
            >
              Enquiry
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
