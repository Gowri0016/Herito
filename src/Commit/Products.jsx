import React from 'react';
import { motion } from 'framer-motion';
import FounderImg from '../Asset/Pineapple.png';
import P from '../Asset/003.jpg';
import S from '../Asset/002.jpg';
import M from '../Asset/006.jpg';
import O from '../Asset/005.jpg';
import A from '../Asset/004.jpg';
import G from '../Asset/001.jpg';

export default function AboutMissionVision() {
  const products = [
    { name: 'Pineapple Boost', img: P, desc: 'Tropical energy drink with real pineapple extract for instant revitalization.' },
    { name: 'Strawberry Bliss', img: S, desc: 'Refreshing strawberry flavour packed with antioxidants and vitamins.' },
    { name: 'Minty Mojito', img: M, desc: 'Cooling mint and lime blend for a fresh, hydrating experience.' },
    { name: 'Orange Zest', img: O, desc: 'Zesty orange drink rich in vitamin C for daily refreshment.' },
    { name: 'Apple Fusion', img: A, desc: 'Crisp apple flavour crafted to energize your senses naturally.' },
    { name: 'Grape Spark', img: G, desc: 'Rich grape-infused drink combining taste and natural nutrients.' },
  ];

  // Enhanced container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: 45
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageHoverVariants = {
    initial: { 
      scale: 1,
      rotate: 0,
      filter: "brightness(100%)"
    },
    hover: { 
      scale: 1.08,
      rotate: [0, -1, 1, -1, 0],
      filter: "brightness(120%) contrast(110%)",
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const buttonHoverVariants = {
    initial: {
      scale: 1,
      background: "linear-gradient(to right, #ef4444, #3b82f6)"
    },
    hover: {
      scale: 1.05,
      background: "linear-gradient(to right, #3b82f6, #ef4444)",
      boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const textGlowVariants = {
    initial: { 
      textShadow: "0 0 0px rgba(59, 130, 246, 0)" 
    },
    hover: { 
      textShadow: [
        "0 0 0px rgba(59, 130, 246, 0)",
        "0 0 20px rgba(59, 130, 246, 0.8)",
        "0 0 10px rgba(59, 130, 246, 0.4)"
      ],
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative mt-10 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden py-20 px-8">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-red-500/20 to-sky-400/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-sky-400/20 to-red-500/20 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Enhanced Title with Staggered Letters */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-sky-400 mb-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {"Herito Wellness".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "backOut"
                  }
                }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="text-gray-300 text-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Innovation | Quality | Wellness
        </motion.p>
      </div>

      {/* Enhanced Product Sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {products.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <motion.div
              className="w-full md:w-1/2 relative"
              whileHover="hover"
              initial="initial"
            >
              <motion.img
                src={item.img}
                alt={item.name}
                className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-2xl border-2 border-gray-700"
                variants={imageHoverVariants}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 1, 
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -100 : 100 
                }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div 
              className="md:w-1/2 bg-gradient-to-br from-gray-800/70 to-gray-900/50 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-700 backdrop-blur-md"
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 1.2, 
                  delay: index * 0.2 + 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? 100 : -100 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.4 }
              }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-sky-400"
                variants={textGlowVariants}
                whileHover="hover"
              >
                {item.name}
              </motion.h2>
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.6 }}
              >
                {item.desc}
              </motion.p>
              <motion.button
                variants={buttonHoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-sky-500 rounded-full text-white font-semibold shadow-md"
              >
                Enquiry Now
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Founder Section */}
      <div className="mt-32 flex flex-col md:flex-row items-center gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -80, rotateY: 10 }}
          whileInView={{ 
            opacity: 1, 
            x: 0, 
            rotateY: 0,
            transition: {
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          viewport={{ once: true }}
          className="md:w-1/2 bg-gradient-to-br from-gray-800/70 to-gray-900/50 p-10 rounded-3xl shadow-2xl border border-gray-700 backdrop-blur-md"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.4 }
          }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-sky-400 mb-6"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Founder's Note
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-lg leading-relaxed mb-6 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            "At Herito Wellness, our journey began with a simple belief — that beverages should do more than refresh. They should energize, nourish, and inspire healthier lifestyles."
          </motion.p>
          
          <motion.p 
            className="text-gray-400 text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            When we started this company, our vision was to create products that blend science and nature, combining global standards with India's wellness needs. Every drink embodies our promise of quality and care.
          </motion.p>
          
          <motion.p 
            className="text-gray-400 text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Herito is more than a beverage company — it's a movement towards a healthier, more energetic India, one sip at a time.
          </motion.p>
          
          <motion.h3 
            className="mt-6 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-sky-400"
            whileHover={{ 
              scale: 1.05,
              x: 10,
              transition: { duration: 0.3 }
            }}
          >
            — Founder, Herito Wellness Pvt. Ltd.
          </motion.h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          whileInView={{ 
            opacity: 1, 
            x: 0, 
            scale: 1,
            transition: {
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.div
            animate={floatingAnimation}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.5 }
            }}
          >
            <motion.img
              src={FounderImg}
              alt="Founder"
              className="w-96 h-96 object-cover rounded-3xl border-2 border-gray-700 shadow-2xl"
              whileHover={{ 
                filter: "brightness(110%) saturate(120%)",
                transition: { duration: 0.4 }
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/10 to-sky-400/10 pointer-events-none"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}