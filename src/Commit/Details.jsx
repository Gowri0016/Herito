import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pine from '../Asset/Pineapple.png';
import Green from '../Asset/Greenapple.png';
import Stab from '../Asset/Stabery.png';
import Orange from '../Asset/Orange.png';
import Moji from '../Asset/Mojito.png';

// Updated flavor images
const flavorImages = [
  { name: 'Pineapple', src: Pine, color: 'bg-yellow-500' },
  { name: 'Strawberry', src: Stab, color: 'bg-red-500' },
  { name: 'Orange', src: Orange, color: 'bg-orange-400' },
  { name: 'Mojito', src: Moji, color: 'bg-green-400' },
  { name: 'Green Apple', src: Green, color: 'bg-green-300' },
];

const flavours = [
  {
    name: 'Pineapple Blast',
    img: Pine,
    details: 'Refreshing pineapple flavour with natural extracts and instant energy boost.',
    health: 'Per 500ml: Best for night workers, athletes, and gym-goers. Boosts stamina and focus.',
    color: 'from-yellow-500/20 to-yellow-700/40'
  },
  {
    name: 'Strawberry Surge',
    img: Stab,
    details: 'Sweet strawberry blend packed with antioxidants and freshness.',
    health: 'Per 500ml: Ideal for sports recovery, enhances endurance and immunity.',
    color: 'from-red-500/20 to-red-700/40'
  },
  {
    name: 'Orange Spark',
    img: Orange,
    details: 'Tangy orange flavour for hydration and vitamin C support.',
    health: 'Per 500ml: Keeps you refreshed during physical activity and boosts energy.',
    color: 'from-orange-400/20 to-orange-600/40'
  },
  {
    name: 'Mojito Rush',
    img: Moji,
    details: 'Minty mojito taste with lime twist for ultimate refreshment.',
    health: 'Per 500ml: Perfect for late-night workers, improves alertness and focus.',
    color: 'from-green-400/20 to-green-600/40'
  },
  {
    name: 'Green Apple Shock',
    img: Green,
    details: 'Crisp green apple extract with a punch of instant energy.',
    health: 'Per 500ml: Enhances stamina, reduces fatigue, and fuels active lifestyles.',
    color: 'from-green-300/20 to-green-500/40'
  },
];

// Floating particles component
const FloatingParticles = ({ count = 20, flavorColor }) => {
  const particles = Array.from({ length: count });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 20 + 5;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        const positionX = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${flavorColor} opacity-70`}
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

// Liquid wave animation component
const LiquidWave = ({ flavorColor }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden opacity-30">
      <motion.div 
        className={`w-[200%] h-full ${flavorColor} rounded-t-[50%]`}
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default function Details() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isHovering, setIsHovering] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % flavorImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollTop = window.scrollY;
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const progress = Math.min(1, Math.max(0, (scrollTop - sectionTop + 300) / sectionHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect for hero text
  const heroTextY = scrollProgress * -100;

  return (
    <>
      <div className="md:mt-24" ref={sectionRef}>
        {/* Hero Slideshow */}
        <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden bg-black flex flex-col items-center justify-center text-white">
          <AnimatePresence mode="wait">
            {flavorImages.map((flavor, index) =>
              index === current ? (
                <motion.div
                  key={flavor.name}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                  <div className="relative w-full h-full">
                    <motion.img
                      src={flavor.src}
                      alt={flavor.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 8, ease: 'easeOut' }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent`} />
                    
                    {/* Dynamic liquid wave based on flavor */}
                    <LiquidWave flavorColor={flavor.color} />
                    
                    {/* Floating particles */}
                    <FloatingParticles flavorColor={flavor.color} />
                  </div>
                  
                  {/* Animated Hero Text */}
                  <motion.div 
                    className="absolute bottom-24 left-0 right-0 text-center px-4 z-10"
                    style={{ y: heroTextY }}
                  >
                    <motion.h1 
                      className="text-4xl md:text-6xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      {flavor.name} Energy
                    </motion.h1>
                    <motion.p 
                      className="text-lg md:text-xl max-w-2xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      Experience the burst of natural {flavor.name.toLowerCase()} flavor
                    </motion.p>
                  </motion.div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Dots with flavor color */}
          <div className="absolute bottom-6 flex gap-3 z-10">
            {flavorImages.map((flavor, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? 'scale-125 shadow-lg' : 'bg-gray-500'
                }`}
                style={{ backgroundColor: current === index ? flavorImages[current].color.split('-')[1] : '' }}
              ></motion.button>
            ))}
          </div>
        </div>

        {/* Flavours Grid */}
        <section className="py-12 md:py-16 bg-black text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            {flavorImages.map((flavor, i) => (
              <motion.div
                key={i}
                className={`absolute ${flavor.color} rounded-full`}
                style={{
                  width: 200,
                  height: 200,
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 5}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 15 + i * 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
          
          <div className="text-center mb-8 md:mb-12 px-4 relative z-10">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Flavours
            </motion.h1>
            <motion.p 
              className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Every flavour is crafted with natural fruit extracts, providing not just taste but also health benefits.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 px-6 md:px-16 relative z-10">
            {flavours.map((flavour, index) => (
              <motion.div
                key={index}
                onClick={() => setSelected(flavour)}
                onHoverStart={() => setIsHovering(index)}
                onHoverEnd={() => setIsHovering(null)}
                className="relative h-64 md:h-80 rounded-xl shadow-lg overflow-hidden group bg-gray-900 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-b ${flavour.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <motion.img
                  src={flavour.img}
                  alt={flavour.name}
                  className="w-full h-full object-cover relative z-0"
                  animate={isHovering === index ? 
                    { scale: 1.1, rotate: 2 } : 
                    { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.5 }}
                />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/50 group-hover:bg-black/30 transition-all duration-500">
                  <motion.h2 
                    className="text-lg md:text-2xl font-semibold tracking-wide mb-2"
                    animate={isHovering === index ? 
                      { y: -10, color: '#fff' } : 
                      { y: 0, color: '#fff' }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {flavour.name}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-xs md:text-sm text-gray-200 opacity-90"
                    animate={isHovering === index ? 
                      { opacity: 1, y: -5 } : 
                      { opacity: 0.9, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {flavour.details}
                  </motion.p>
                  
                  <motion.button 
                    className="mt-4 px-4 py-2 bg-white text-black text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
                
                {/* Hover effect border */}
                <motion.div 
                  className="absolute inset-0 rounded-xl border-2 border-transparent"
                  animate={isHovering === index ? 
                    { borderColor: '#fff', opacity: 1 } : 
                    { borderColor: 'transparent', opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
                  className="bg-white text-black rounded-2xl shadow-2xl max-w-lg w-full p-6 relative overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Animated background in modal */}
                  <motion.div 
                    className="absolute -inset-10 opacity-10 z-0"
                    initial={{ scale: 0.8, rotate: 0 }}
                    animate={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black z-10"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                  
                  <div className="relative z-10">
                    <motion.h2 
                      className="text-2xl font-bold mb-4"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selected.name}
                    </motion.h2>
                    
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <img
                        src={selected.img}
                        alt={selected.name}
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-700 mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {selected.details}
                    </motion.p>
                    
                    <motion.p 
                      className="text-gray-900 font-semibold"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {selected.health}
                    </motion.p>
                    
                    <motion.button
                      onClick={() => setSelected(null)}
                      className="mt-6 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Products Section */}
        <section className="py-12 md:py-16 bg-black text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-5">
            <motion.div 
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 40%)`,
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          <div className="text-center mb-8 md:mb-12 px-4 relative z-10">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Herito Energy Drink
            </motion.h1>
            <motion.p 
              className="mt-4 text-sm md:text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Refresh your day with Herito Energy Drink Juice, now available in sleek, modern bottles filled with pure energy and natural flavours.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 px-6 md:px-16 relative z-10">
            {[
              { name: "Pineapple Blast", img: "/images/pineapple-bottle.png", color: "bg-yellow-500" },
              { name: "Strawberry Surge", img: "/images/strawberry-bottle.png", color: "bg-red-500" },
              { name: "Orange Spark", img: "/images/orange-bottle.png", color: "bg-orange-400" },
              { name: "Mojito Rush", img: "/images/mojito-bottle.png", color: "bg-green-400" },
              { name: "Green Apple Shock", img: "/images/greenapple-bottle.png", color: "bg-green-300" },
            ].map((product, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="relative h-44 w-28 md:h-72 md:w-52 rounded-xl shadow-lg overflow-hidden bg-white"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {/* Liquid fill effect */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 ${product.color} opacity-30`}
                    initial={{ height: "0%" }}
                    whileInView={{ height: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  />
                  
                  <motion.img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain p-3 relative z-10"
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                  />
                  
                  {/* Bubble effects */}
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      className={`absolute ${product.color} rounded-full opacity-50`}
                      style={{
                        width: 10 + i * 5,
                        height: 10 + i * 5,
                        left: `${20 + i * 20}%`,
                        bottom: `${10 + i * 5}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
                
                <motion.h2 
                  className="mt-4 text-xs md:text-lg font-semibold"
                  whileHover={{ color: product.color.split('-')[1] }}
                >
                  {product.name}
                </motion.h2>
                
                <motion.button 
                  className="mt-2 px-3 py-1 bg-white text-black text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enquiry
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}