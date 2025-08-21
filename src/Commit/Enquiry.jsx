import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  // Floating particles background component
  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 15 + 5;
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;
          const positionX = Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-pink-500/30"
              style={{
                width: size,
                height: size,
                left: `${positionX}%`,
                top: '-5%'
              }}
              animate={{
                y: ['0vh', '100vh'],
                x: [0, Math.random() * 50 - 25],
                rotate: [0, 360],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "linear"
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <FloatingParticles />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-500 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotateY: -180 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="bg-gray-800/30 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-lg text-white border border-white/10 relative overflow-hidden"
          >
            {/* Shimmer effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Get In Touch
              </motion.h2>
              <motion.p 
                className="text-gray-400 text-center mb-8"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </motion.p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { icon: FaUser, name: "name", placeholder: "Your Name", type: "text" },
                  { icon: FaEnvelope, name: "email", placeholder: "Your Email", type: "email" },
                  { icon: FaPhoneAlt, name: "phone", placeholder: "Your Phone", type: "tel" },
                ].map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className={`relative flex items-center p-3 rounded-xl transition-all duration-300 ${
                      isFocused[field.name] 
                        ? 'bg-white/10 border border-pink-500/50 shadow-lg' 
                        : 'bg-gray-900/50 border border-gray-700'
                    }`}
                  >
                    <field.icon className={`mr-3 transition-colors duration-300 ${
                      isFocused[field.name] ? 'text-pink-400' : 'text-gray-500'
                    }`} />
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field.name)}
                      onBlur={() => handleBlur(field.name)}
                      placeholder={field.placeholder}
                      required
                      className="bg-transparent outline-none w-full placeholder-gray-500 text-white"
                    />
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 ${
                        isFocused[field.name] ? 'w-full' : 'w-0'
                      }`}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className={`relative flex items-start p-3 rounded-xl transition-all duration-300 ${
                    isFocused.message 
                      ? 'bg-white/10 border border-pink-500/50 shadow-lg' 
                      : 'bg-gray-900/50 border border-gray-700'
                  }`}
                >
                  <FaCommentDots className={`mr-3 mt-1 transition-colors duration-300 ${
                    isFocused.message ? 'text-pink-400' : 'text-gray-500'
                  }`} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    placeholder="Your Message"
                    rows="4"
                    required
                    className="bg-transparent outline-none w-full placeholder-gray-500 text-white resize-none"
                  />
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 ${
                      isFocused.message ? 'w-full' : 'w-0'
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.5)" 
                  }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  <span className="relative z-10">Submit Enquiry</span>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="relative z-10"
                  >
                    <FaPaperPlane />
                  </motion.div>
                  
                  {/* Button shine effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="bg-gray-800/30 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-2xl w-full max-w-md text-white text-center border border-white/10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <FaCheckCircle className="text-6xl text-green-400 mx-auto mb-6" />
            </motion.div>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Thank You!
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Your enquiry has been submitted successfully. We'll get back to you soon.
            </motion.p>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}