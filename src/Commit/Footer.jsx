import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-16 px-8 overflow-hidden">

      {/* Background Glow */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-pink-500 to-transparent blur-3xl rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-sky-500 to-transparent blur-3xl rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">Herito Wellness</h2>
          <p className="text-gray-300">Innovative wellness and beverage solutions crafted for health, taste, and vitality. Join us in redefining refreshment.</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-pink-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-pink-400 transition-colors">About</a></li>
            <li><a href="/products" className="hover:text-pink-400 transition-colors">Products</a></li>
            <li><a href="/enquiry" className="hover:text-pink-400 transition-colors">Enquiry</a></li>
          </ul>
        </div>

        {/* Support & Policies */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-2">Support & Policies</h3>
          <ul className="space-y-2">
             <li><a href="#" className="hover:text-pink-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Support</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 text-white text-xl">
            <motion.a whileHover={{ scale: 1.2, color: '#EC4899' }} href="#"><FaFacebookF /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: '#3B82F6' }} href="#"><FaTwitter /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: '#E1306C' }} href="#"><FaInstagram /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: '#0A66C2' }} href="#"><FaLinkedinIn /></motion.a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-400 mt-12">
        &copy; {new Date().getFullYear()} Herito Wellness Private Limited. All Rights Reserved.
      </div>

    </footer>
  );
}