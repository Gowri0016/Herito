import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    setTimeout(() => {
      setIsSubmitting(false);
      if (formData.name && formData.email && formData.message) {
        console.log("Form Data Sent:", formData);
        setSubmitMessage({ type: "success", text: "Message successfully sent!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitMessage({ type: "error", text: "Please fill all required fields." });
      }
    }, 2000);
  };

  const InputField = ({ label, name, type = "text", placeholder }) => (
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition-all duration-300
                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 focus:bg-indigo-50
                   placeholder-gray-400 text-sm"
      />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center p-6 overflow-hidden relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-200/40 to-pink-200/40"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-5xl mt-16 p-10 sm:p-14 bg-white rounded-3xl shadow-2xl border border-gray-100"
      >
        <div className="text-center mb-10">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="mt-3 text-gray-500 text-base sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We’d love to hear from you! Please share your details below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            className="lg:col-span-1 space-y-6 text-sm"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl font-bold tracking-wide text-indigo-600 border-b border-indigo-200 pb-2">
              Reach Us
            </h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>Email:</strong> support@herito.tech</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Location:</strong> Sector 42, Neo-City</p>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors text-xl">🌐</a>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-xl">📷</a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-xl">🐦</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField label="Name" name="name" placeholder="Your full name" />
                <InputField label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <InputField label="Subject" name="subject" placeholder="Message subject" />
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition-all duration-300
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 focus:bg-indigo-50
                             placeholder-gray-400 text-sm resize-y min-h-[120px]"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-6 py-3 mt-4 text-lg font-bold text-white uppercase tracking-widest rounded-lg
                           bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 shadow-lg
                           disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </motion.svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-lg text-center font-mono text-sm ${
                    submitMessage.type === "success"
                      ? "bg-green-50 text-green-600 border border-green-200 shadow-sm"
                      : "bg-red-50 text-red-600 border border-red-200 shadow-sm"
                  }`}
                >
                  {submitMessage.text}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
