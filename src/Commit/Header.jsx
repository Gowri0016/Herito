import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../Asset/3.jpeg'
import { HiOutlineMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Products', to: '/products' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-white shadow-sm' : 'bg-white'}`}
    >
      <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 md:px-12">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Herito Wellness Private Limited"
            className="w-20 md:w-24 object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10 text-gray-700 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `pb-1 transition-colors duration-200 ${
                      isActive
                        ? 'text-gray-900 border-b-2 border-gray-900'
                        : 'hover:text-gray-900'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <NavLink
            to="/enquiry"
            className="ml-6 px-5 py-2 rounded-full border border-gray-900 text-gray-900
                       text-sm font-medium hover:bg-gray-900 hover:text-white
                       transition-colors duration-300"
          >
            Enquire Now
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-gray-900">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={26} /> : <HiOutlineMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-gray-800 text-base font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive ? 'text-gray-900' : 'hover:text-gray-900'
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

              {/* Mobile CTA */}
              <NavLink
                to="/enquiry"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-6 py-2 rounded-full border border-gray-900
                           text-gray-900 hover:bg-gray-900 hover:text-white
                           transition"
              >
                Enquire Now
              </NavLink>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
