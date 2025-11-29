import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Asset/3.jpeg';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Enquiry', href: '/enquiry' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50 shadow-lg">
      {/* Navigation Bar */}
      <nav className="max-w-7xl mx-auto h-24 flex items-center justify-between px-6 md:px-12 relative">
        {/* Logo with hover rotation & glow */}
       <a href="/"> <motion.img
          src={Logo}
          alt="Herito Wellness Private Limited"
          className="w-24 md:w-32 cursor-pointer relative z-20"
          whileHover={{ scale: 1.1, rotate: [0, 8, -8, 0], boxShadow: '0px 0px 25px rgba(255,0,0,0.6)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-semibold text-base md:text-lg relative z-20">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ y: -4, scale: 1.1, color: '#f472b6' }}
              transition={{ duration: 0.3 }}
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative z-20">
          <motion.div onClick={() => setMenuOpen(!menuOpen)} whileTap={{ scale: 0.9 }}>
            {menuOpen ? <HiX className="text-white w-8 h-8" /> : <HiOutlineMenu className="text-white w-8 h-8" />}
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="absolute top-24 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-6 md:hidden"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.1, color: '#f472b6' }}
                  transition={{ duration: 0.3 }}
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Animated Gradient Underline */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '35%' }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute top-24 left-8 h-1 bg-gradient-to-r from-red-600 via-pink-500 to-sky-500 rounded-full z-10"
      />

      {/* Floating Glow Circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
        className="absolute top-6 left-2 w-36 md:w-48 h-36 md:h-48 bg-gradient-to-br from-red-600 to-transparent blur-3xl rounded-full"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, scale: [1, 1.4, 1] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
        className="absolute bottom-0 right-2 w-48 md:w-60 h-48 md:h-60 bg-gradient-to-tr from-sky-500 to-transparent blur-3xl rounded-full"
      />
    </header>
  );
}