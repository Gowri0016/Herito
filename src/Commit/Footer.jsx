import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-16 px-6 md:px-12 overflow-hidden">
      {/* Gradient Accent Backgrounds */}
      <motion.div
        className="absolute -top-10 -left-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12, scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 22 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-400 text-transparent bg-clip-text mb-3">Herito Wellness</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Transforming refreshment through wellness-oriented, innovative beverages that energize, restore, and inspire.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-pink-400">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="/" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-pink-400 transition">About</a></li>
            <li><a href="/products" className="hover:text-pink-400 transition">Products</a></li>
            <li><a href="/enquiry" className="hover:text-pink-400 transition">Enquiry</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-pink-400">Support & Policies</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-pink-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Support</a></li>
            <li><a href="/privacy" className="hover:text-pink-400 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-pink-400 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-pink-400">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <motion.a whileHover={{ scale: 1.2, color: '#EC4899' }} href="#"><FaFacebookF /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: '#3B82F6' }} href="#"><FaTwitter /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: '#E1306C' }} href="#"><FaInstagram /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: '#0A66C2' }} href="#"><FaLinkedinIn /></motion.a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Herito Wellness Private Limited. All rights reserved.</p>
        <motion.p
          className="text-pink-400 mt-1"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Crafted with ❤️ by <span className="text-white hover:text-pink-400 font-semibold">Poeage Technology Pvt. Ltd.</span>
        </motion.p>
      </div>
    </footer>
  );
}
