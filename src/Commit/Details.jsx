import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pine from '../Asset/Pineapple.png';
import Green from '../Asset/Greenapple.png';
import Stab from '../Asset/Stabery.png';
import Orange from '../Asset/Orange.png';
import Moji from '../Asset/Mojito.png';

// Updated flavor images
const flavorImages = [
  { name: 'Pineapple', src: Pine },
  { name: 'Strawberry', src: Stab },
  { name: 'Orange', src: Orange },
  { name: 'Mojito', src: Moji },
  { name: 'Green Apple', src: Green },
];

const flavours = [
  {
    name: 'Pineapple Blast',
    img: Pine,
    details: 'Refreshing pineapple flavour with natural extracts and instant energy boost.',
    health: 'Per 500ml: Best for night workers, athletes, and gym-goers. Boosts stamina and focus.'
  },
  {
    name: 'Strawberry Surge',
    img: Stab,
    details: 'Sweet strawberry blend packed with antioxidants and freshness.',
    health: 'Per 500ml: Ideal for sports recovery, enhances endurance and immunity.'
  },
  {
    name: 'Orange Spark',
    img: Orange,
    details: 'Tangy orange flavour for hydration and vitamin C support.',
    health: 'Per 500ml: Keeps you refreshed during physical activity and boosts energy.'
  },
  {
    name: 'Mojito Rush',
    img: Moji,
    details: 'Minty mojito taste with lime twist for ultimate refreshment.',
    health: 'Per 500ml: Perfect for late-night workers, improves alertness and focus.'
  },
  {
    name: 'Green Apple Shock',
    img: Green,
    details: 'Crisp green apple extract with a punch of instant energy.',
    health: 'Per 500ml: Enhances stamina, reduces fatigue, and fuels active lifestyles.'
  },
];

export default function Details() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % flavorImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="md:mt-24">
        {/* Hero Slideshow */}
        <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden bg-black flex flex-col items-center justify-center text-white">
          <AnimatePresence mode="wait">
            {flavorImages.map((flavor, index) =>
              index === current ? (
                <motion.div
                  key={flavor.name}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={flavor.src}
                      alt={flavor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-6 flex gap-3 z-10">
            {flavorImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  current === index ? 'bg-white scale-125 shadow-lg' : 'bg-gray-500'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Flavours Grid */}
        <section className="py-12 md:py-16 bg-black text-white">
          <div className="text-center mb-8 md:mb-12 px-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide">Our Flavours</h1>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Every flavour is crafted with natural fruit extracts, providing not just taste but also health benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 px-6 md:px-16">
            {flavours.map((flavour, index) => (
              <div
                key={index}
                onClick={() => setSelected(flavour)}
                className="relative h-64 md:h-80 rounded-xl shadow-lg overflow-hidden group bg-gray-900 cursor-pointer"
              >
                <img
                  src={flavour.img}
                  alt={flavour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/50">
                  <h2 className="text-lg md:text-2xl font-semibold tracking-wide mb-2">
                    {flavour.name}
                  </h2>
                  <p className="text-xs md:text-sm text-gray-200 opacity-90">
                    {flavour.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
                onClick={() => setSelected(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-white text-black rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className="text-2xl font-bold mb-4">{selected.name}</h2>
                  <img
                    src={selected.img}
                    alt={selected.name}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <p className="text-gray-700 mb-2">{selected.details}</p>
                  <p className="text-gray-900 font-semibold">{selected.health}</p>
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-6 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Products Section */}
        <section className="py-12 md:py-16 bg-black text-white">
          <div className="text-center mb-8 md:mb-12 px-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
              Herito Energy Drink
            </h1>
            <p className="mt-4 text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
              Refresh your day with Herito Energy Drink Juice, now available in sleek, modern bottles filled with pure energy and natural flavours.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 px-6 md:px-16">
            {[
              { name: "Pineapple Blast", img: "/images/pineapple-bottle.png" },
              { name: "Strawberry Surge", img: "/images/strawberry-bottle.png" },
              { name: "Orange Spark", img: "/images/orange-bottle.png" },
              { name: "Mojito Rush", img: "/images/mojito-bottle.png" },
              { name: "Green Apple Shock", img: "/images/greenapple-bottle.png" },
            ].map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative h-44 w-28 md:h-72 md:w-52 rounded-xl shadow-lg overflow-hidden bg-white">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h2 className="mt-4 text-xs md:text-lg font-semibold">{product.name}</h2>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
