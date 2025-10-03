import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pine from '../Asset/Pineapple.png';
import Stabarrey from '../Asset/Stabery.png';
import Orange from '../Asset/Orange.png';
import Green from '../Asset/Greenapple.png';
import Mojito from '../Asset/Mojito.png'

// --- Image Placeholder URLs (Local imports are replaced with simple placeholders) ---
const PINE_IMG = Pine
const STAB_IMG = Stabarrey
const ORANGE_IMG = Orange
const MOJI_IMG = Mojito
const GREEN_IMG = Green

// Placeholder URLs for the "bottle" images in the Products Section (vertical format)
const PINE_BOTTLE = 'https://placehold.co/120x300/fcd34d/1f2937?text=PINE';
const STAB_BOTTLE = 'https://placehold.co/120x300/f87171/1f2937?text=STRAW';
const ORANGE_BOTTLE = 'https://placehold.co/120x300/fb923c/1f2937?text=ORANGE';
const MOJI_BOTTLE = 'https://placehold.co/120x300/34d399/1f2937?text=MOJITO';
const GREEN_BOTTLE = 'https://placehold.co/120x300/6ee7b7/1f2937?text=APPLE';


const flavorImages = [
  { name: 'Pineapple', src: PINE_IMG, color: 'bg-yellow-500' },
  { name: 'Strawberry', src: STAB_IMG, color: 'bg-red-500' },
  { name: 'Orange', src: ORANGE_IMG, color: 'bg-orange-400' },
  { name: 'Mojito', src: MOJI_IMG, color: 'bg-green-400' },
  { name: 'Green Apple', src: GREEN_IMG, color: 'bg-green-300' },
];

const flavours = [
  {
    name: 'Pineapple Blast',
    img: PINE_IMG,
    details: 'Refreshing pineapple flavour with natural extracts and instant energy boost.',
    health: 'Per 500ml: Best for night workers, athletes, and gym-goers. Boosts stamina and focus.',
    color: 'from-yellow-500/20 to-yellow-700/40'
  },
  {
    name: 'Strawberry Surge',
    img: STAB_IMG,
    details: 'Sweet strawberry blend packed with antioxidants and freshness.',
    health: 'Per 500ml: Ideal for sports recovery, enhances endurance and immunity.',
    color: 'from-red-500/20 to-red-700/40'
  },
  {
    name: 'Orange Spark',
    img: ORANGE_IMG,
    details: 'Tangy orange flavour for hydration and vitamin C support.',
    health: 'Per 500ml: Keeps you refreshed during physical activity and boosts energy.',
    color: 'from-orange-400/20 to-orange-600/40'
  },
  {
    name: 'Mojito Rush',
    img: MOJI_IMG,
    details: 'Minty mojito taste with lime twist for ultimate refreshment.',
    health: 'Per 500ml: Perfect for late-night workers, improves alertness and focus.',
    color: 'from-green-400/20 to-green-600/40'
  },
  {
    name: 'Green Apple Shock',
    img: GREEN_IMG,
    details: 'Crisp green apple extract with a punch of instant energy.',
    health: 'Per 500ml: Enhances stamina, reduces fatigue, and fuels active lifestyles.',
    color: 'from-green-300/20 to-green-500/40'
  },
];

// Floating particles component
const FloatingParticles = ({ count = 20, flavorColor }) => {
  const particles = Array.from({ length: count });
  
  // Custom particle color based on Tailwind class, extracting the base color for opacity
  const baseColorHex = {
    'bg-yellow-500': 'rgba(245, 158, 11, 0.7)', // amber-500
    'bg-red-500': 'rgba(239, 68, 68, 0.7)', // red-500
    'bg-orange-400': 'rgba(251, 146, 60, 0.7)', // orange-400
    'bg-green-400': 'rgba(52, 211, 153, 0.7)', // emerald-400 (close to green-400)
    'bg-green-300': 'rgba(110, 232, 167, 0.7)', // green-300
  }[flavorColor] || 'rgba(255, 255, 255, 0.7)';

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
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${positionX}%`,
              top: '-5%',
              backgroundColor: baseColorHex, // Use calculated color for the glow
              filter: `blur(${size / 10}px)`, // Add blur for a high-tech/liquid feel
            }}
            animate={{
              y: ['0vh', '100vh'],
              x: [0, Math.random() * 50 - 25],
              rotate: [0, 360],
              opacity: [0, 0.9, 0]
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
    <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden opacity-50 z-20">
      <motion.div 
        className={`w-[200%] h-full ${flavorColor} rounded-t-[45%]`}
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 18, // Slow down wave motion
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          boxShadow: '0 -20px 40px rgba(0,0,0,0.5)', // Add shadow for depth
          filter: 'brightness(1.2)'
        }}
      />
    </div>
  );
};

// Renamed Details to App to match the original component export
const App = () => { 
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
        const windowHeight = window.innerHeight;
        // Calculate progress based on the start of the section until it reaches the top
        const progress = Math.min(1, Math.max(0, (scrollTop - sectionTop + windowHeight) / windowHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect for hero text - adjusted calculation
  const heroTextY = scrollProgress * -150;

  return (
    <div className="min-h-screen bg-black text-white font-['Inter',_sans-serif] overflow-x-hidden">
      <div className="md:mt-0" ref={sectionRef}>
        
        {/* Hero Slideshow - Unique Concept: Dynamic Liquid Energy Focus */}
        <div className="relative w-full h-[600px] md:h-[80vh] overflow-hidden bg-gray-900 flex flex-col items-center justify-center text-white border-b-4 border-purple-500/50">
          <AnimatePresence mode="wait">
            {flavorImages.map((flavor, index) =>
              index === current ? (
                <motion.div
                  key={flavor.name}
                  className="absolute inset-0"
                  initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }} // Initial wipe up animation
                  animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                  exit={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }} // Exit wipe down
                  transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.9] }} // Custom spring-like easing
                >
                  <div className="relative w-full h-full">
                    {/* Background Image/Color */}
                    <motion.img
                      src={flavor.src}
                      alt={flavor.name}
                      className="w-full h-full object-cover opacity-30" // Lower opacity for high-tech look
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 10, ease: 'easeOut' }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent`} />
                    
                    {/* Dynamic liquid wave based on flavor */}
                    <LiquidWave flavorColor={flavor.color.replace('bg-', 'from-').replace('-500', '-700/80')} />
                    
                    {/* Floating particles */}
                    <FloatingParticles flavorColor={flavor.color} />
                  </div>
                  
                  {/* Animated Hero Text with Parallax */}
                  <motion.div 
                    className="absolute bottom-32 left-0 right-0 text-center px-4 z-30"
                    style={{ y: heroTextY }}
                  >
                    <motion.h1 
                      className="text-5xl md:text-8xl font-extrabold mb-4 uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      style={{ textShadow: '0 0 10px rgba(255,255,255,0.2)' }}
                    >
                      {flavor.name}
                    </motion.h1>
                    <motion.p 
                      className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-400"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    >
                      Unleash the burst of **pure natural energy** and vibrant {flavor.name.toLowerCase()} essence.
                    </motion.p>
                  </motion.div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Dots with flavor color and subtle glow */}
          <div className="absolute bottom-8 flex gap-3 z-30">
            {flavorImages.map((flavor, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white/50 ${
                  current === index ? 'scale-150 shadow-2xl' : 'bg-gray-700/50'
                }`}
                style={{ 
                  // Complex inline style to generate the background and shadow colors dynamically for the dots
                  backgroundColor: current === index ? flavorImages[current].color.replace('bg-', '').replace('red-500', '#ef4444').replace('yellow-500', '#f59e0b').replace('orange-400', '#fb923c').replace('green-400', '#34d399').replace('green-300', '#6ee7b7') : '',
                  boxShadow: current === index ? `0 0 15px 2px ${flavorImages[current].color.replace('bg-', '').replace('red-500', '#ef4444').replace('yellow-500', '#f59e0b').replace('orange-400', '#fb923c').replace('green-400', '#34d399').replace('green-300', '#6ee7b7')}` : ''
                }}
              >
              </motion.button>
            ))}
          </div>
        </div>

        {/* Flavours Grid - Data Display Concept */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            {flavorImages.map((flavor, i) => (
              <motion.div
                key={i}
                className={`absolute ${flavor.color.replace('-500', '-700')} rounded-full`}
                style={{
                  width: 250,
                  height: 250,
                  left: `${10 + i * 20}%`,
                  top: `${10 + i * 15}%`,
                  filter: 'blur(50px)'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.1, 0.5, 0.1]
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
          
          <div className="text-center mb-16 px-4 relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold tracking-wide text-purple-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Flavour Matrix Analysis
            </motion.h1>
            <motion.p 
              className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Each matrix point details the composition, benefit profile, and taste signature of our core energy lines.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-6 md:px-16 relative z-10">
            {flavours.map((flavour, index) => (
              <motion.div
                key={index}
                onClick={() => setSelected(flavour)}
                onHoverStart={() => setIsHovering(index)}
                onHoverEnd={() => setIsHovering(null)}
                className="relative h-auto p-6 rounded-2xl border border-gray-800 shadow-xl bg-gray-900/80 backdrop-blur-sm cursor-pointer hover:border-pink-500 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(236, 72, 153, 0.2)' }}
              >
                {/* Visual Glow Header */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${flavour.color.replace('from-', 'from-pink-500/0 from-').replace('to-', 'to-purple-500/0 to-')} rounded-t-xl`} />
                
                <div className="flex items-start mb-4">
                    <motion.div 
                        className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center mr-4 shadow-lg`}
                        style={{ background: flavour.color.split(' ')[0].replace('from-', 'linear-gradient(45deg, #ec4899, #a855f7), ') }}
                        animate={isHovering === index ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Placeholder for Icon (e.g., Lucide icon if available, or simple text) */}
                        <span className="text-white text-xl font-bold">{index + 1}</span>
                    </motion.div>
                    <motion.h2 
                      className="text-2xl font-bold tracking-wide text-pink-400 mt-1"
                      animate={isHovering === index ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {flavour.name}
                    </motion.h2>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{flavour.details}</p>
                
                <div className="text-xs text-gray-400 p-3 rounded-lg border border-gray-700 bg-gray-800/50">
                    <p className="font-semibold text-purple-300 mb-1">Health Profile:</p>
                    <p>{flavour.health}</p>
                </div>
                
                <motion.button 
                  className="mt-6 w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-semibold rounded-lg opacity-90 hover:opacity-100 transition-all duration-300 shadow-lg shadow-purple-900/40"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Data Profile
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Modal - Detailed Data Viewer */}
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4 backdrop-blur-md"
                onClick={() => setSelected(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-gray-900 text-white rounded-3xl shadow-2xl max-w-xl w-full p-8 relative overflow-hidden border border-purple-500/50"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Animated Background Pulse */}
                  <motion.div 
                    className={`absolute -inset-20 z-0 opacity-20 rounded-full`}
                    style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(0,0,0,0) 70%)' }}
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <motion.button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 z-10 p-2"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                  
                  <div className="relative z-10 text-center">
                    <motion.h2 
                      className="text-4xl font-extrabold mb-4 text-pink-400 border-b border-gray-700 pb-2"
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
                        className="w-full h-48 object-cover rounded-xl mb-6 shadow-xl"
                      />
                    </motion.div>
                    
                    <div className="text-left space-y-3">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gray-800 p-4 rounded-lg"
                        >
                            <h3 className="font-bold text-purple-400">Flavor Profile:</h3>
                            <p className="text-gray-300">{selected.details}</p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-gray-800 p-4 rounded-lg"
                        >
                            <h3 className="font-bold text-pink-400">Functional Benefits:</h3>
                            <p className="text-gray-300">{selected.health}</p>
                        </motion.div>
                    </div>
                    
                    <motion.button
                      onClick={() => setSelected(null)}
                      className="mt-8 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:from-purple-500 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close Data Stream
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Products Section - Bottle Visualizer */}
        <section className="py-20 bg-gray-900/50 text-white relative overflow-hidden border-t border-purple-500/30">
          
          <div className="text-center mb-16 px-4 relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold tracking-wide text-pink-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Physical Product Rendering
            </motion.h1>
            <motion.p 
              className="mt-4 text-sm md:text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sleek, modern bottles designed for performance and accessibility.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 px-6 md:px-16 relative z-10">
            {[
              { name: "Pineapple Blast", img: PINE_BOTTLE, color: "bg-yellow-500", glow: "shadow-yellow-500" },
              { name: "Strawberry Surge", img: STAB_BOTTLE, color: "bg-red-500", glow: "shadow-red-500" },
              { name: "Orange Spark", img: ORANGE_BOTTLE, color: "bg-orange-400", glow: "shadow-orange-400" },
              { name: "Mojito Rush", img: MOJI_BOTTLE, color: "bg-green-400", glow: "shadow-green-400" },
              { name: "Green Apple Shock", img: GREEN_BOTTLE, color: "bg-green-300", glow: "shadow-green-300" },
            ].map((product, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
              >
                <motion.div 
                  className={`relative h-56 w-32 md:h-80 md:w-44 rounded-xl shadow-2xl overflow-hidden bg-white/10 border border-gray-700`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 0 40px -10px ${product.glow.replace('shadow-', '')}/70`,
                    transition: { type: "spring", stiffness: 300, damping: 15 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {/* Liquid fill effect */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 ${product.color} opacity-40`}
                    initial={{ height: "0%" }}
                    whileInView={{ height: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.2 + 0.5 }}
                  />
                  
                  <motion.img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain p-3 relative z-10"
                    whileHover={{ 
                      y: -10,
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                  />
                </motion.div>
                
                <motion.h2 
                  className="mt-4 text-sm md:text-lg font-bold text-gray-200"
                  whileHover={{ color: product.color.replace('bg-', '') }}
                >
                  {product.name}
                </motion.h2>
                
                <motion.button 
                  className={`mt-2 px-4 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Inquire
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
