import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEnvelope, FaBars } from 'react-icons/fa';
import Logo from '../Asset/3.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for header background change
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu item animation variants
  const menuItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  // Button hover animation
  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(255, 255, 255, 0.2)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  // Button tap animation
  const buttonTap = { scale: 0.95 };

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full h-20 md:h-24 flex items-center justify-between px-4 md:px-12 z-50 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-xl' : 'bg-black/70'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo with hover animation */}
      <motion.div
        className="flex items-center gap-2 z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <a href="/" className="flex items-center gap-2">
          <motion.img
            src={Logo}
            alt="Energy Drink Logo"
            className="w-12 md:w-16 brightness-0 invert"
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <motion.span 
            className="text-lg md:text-2xl font-bold tracking-wide text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Wellness
          </motion.span>
        </a>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden  md:flex items-center gap-8">
        <motion.a 
          href="#products" 
          className="text-white text-sm font-medium hover:text-yellow-400 transition-colors"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Products
        </motion.a>
        <motion.a 
          href="#about" 
          className="text-white text-sm font-medium hover:text-yellow-400 transition-colors"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          About
        </motion.a>
        <motion.a 
          href="#contact" 
          className="text-white text-sm font-medium hover:text-yellow-400 transition-colors"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Contact
        </motion.a>
        
        <motion.button
          whileHover={buttonHover}
          whileTap={buttonTap}
          className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold flex items-center gap-2 shadow-md group"
        >
          <FaEnvelope className="text-sm" />
          <a href="/enquiry">Enquiry</a>
          <motion.div
            className="w-0 h-0.5 bg-black absolute bottom-1.5 left-4 group-hover:w-12"
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </nav>

      {/* Mobile Menu Toggle - Animated Hamburger */}
      <motion.div 
        className="md:hidden flex items-center z-50"
        whileTap={{ scale: 0.9 }}
      >
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center relative focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 5 }
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white absolute"
          />
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-white absolute"
          />
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -5 }
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white absolute"
          />
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-black/95 backdrop-blur-xl shadow-2xl z-40 flex flex-col items-center justify-center gap-8 p-8"
            >
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-2xl p-2"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                
              </motion.button>

              <motion.a
                href="#products"
                onClick={() => setMenuOpen(false)}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                transition={{ delay: 0.1 }}
                className="text-white text-xl font-medium hover:text-yellow-400 transition-colors"
              >
                Products
              </motion.a>

              <motion.a
                href="#about"
                onClick={() => setMenuOpen(false)}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                transition={{ delay: 0.2 }}
                className="text-white text-xl font-medium hover:text-yellow-400 transition-colors"
              >
                About
              </motion.a>

              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                transition={{ delay: 0.3 }}
                className="text-white text-xl font-medium hover:text-yellow-400 transition-colors"
              >
                Contact
              </motion.a>

              <motion.button
                onClick={() => setMenuOpen(false)}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                transition={{ delay: 0.4 }}
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold flex items-center gap-2 mt-4"
              >
                <FaEnvelope className="text-sm" />
                <a href="/enquiry">Enquiry</a>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}