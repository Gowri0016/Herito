import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We'll get back to you soon.");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-lg w-full max-w-lg text-white"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Enquiry Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <FaUser className="text-pink-400 mr-3" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-transparent outline-none w-full placeholder-gray-400"
            />
          </div>

          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <FaEnvelope className="text-pink-400 mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-transparent outline-none w-full placeholder-gray-400"
            />
          </div>

          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <FaPhoneAlt className="text-pink-400 mr-3" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              required
              className="bg-transparent outline-none w-full placeholder-gray-400"
            />
          </div>

          <div className="flex items-start bg-gray-700 p-3 rounded-lg">
            <FaCommentDots className="text-pink-400 mr-3 mt-1" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="3"
              required
              className="bg-transparent outline-none w-full placeholder-gray-400 resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 transition-colors py-3 rounded-lg font-semibold text-white"
          >
            Submit Enquiry
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
