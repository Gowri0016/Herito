import React, { useState } from 'react';
import { motion } from 'framer-motion';
import P from '../Asset/003.jpg';
import S from '../Asset/005.jpg';
import M from '../Asset/006.jpg';
import O from '../Asset/002.jpg';
import A from '../Asset/004.jpg';
import G from '../Asset/001.jpg';
import BackgroundImg from '../Asset/3.jpeg'; // New background image

export default function Enquiry() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry Submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const flavours = [
    { name: 'Pineapple Boost', img: P },
    { name: 'Orange Zest', img: S },
    { name: 'Minty Mojito', img: M },
    { name: 'Strawberry Bliss', img: O },
    { name: 'Apple Fusion', img: A },
    { name: 'Grape Spark', img: G },
  ];

  return (
    <section className="relative mx-auto mt-24 p-6 md:p-10 text-white overflow-hidden" style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Title */}
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-sky-400 animate-pulse relative z-10">
        Enquiry Form & Flavours
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8 relative z-10">
        {/* Enquiry Form */}
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="md:w-1/2 flex flex-col gap-5 bg-black/50 p-6 rounded-3xl border border-gray-700 backdrop-blur-md shadow-lg">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="p-4 rounded-xl bg-gray-800/50 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="p-4 rounded-xl bg-gray-800/50 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-sky-500" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-4 rounded-xl bg-gray-800/50 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-green-400" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} className="p-4 rounded-xl bg-gray-800/50 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-500 rounded-full font-semibold text-white shadow-lg hover:shadow-pink-400/50 transition">
            Submit Enquiry
          </motion.button>
        </motion.form>

        {/* Flavours Showcase */}
        <motion.div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
          {flavours.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="relative bg-black/50 rounded-3xl overflow-hidden border border-gray-700 shadow-lg backdrop-blur-md group">
              <img src={item.img} alt={item.name} className="w-full h-36 md:h-44 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                <h3 className="text-sm md:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 group-hover:scale-105 transition-transform duration-300">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}