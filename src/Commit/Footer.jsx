import React from "react";
import { motion } from "framer-motion";

// Fruit images (replace with your actual webp/png/jpg paths)
import Pineapple from "../Asset/Pineapple.png";
import Strawberry from "../Asset/Stabery.png";
import Orange from "../Asset/Orange.png";
import Mojito from "../Asset/Mojito.png";
import GreenApple from "../Asset/Greenapple.png";

export default function Footer() {
  const fruits = [
    { name: "Pineapple", img: Pineapple },
    { name: "Strawberry", img: Strawberry },
    { name: "Orange", img: Orange },
    { name: "Mojito Lemon", img: Mojito },
    { name: "Green Apple", img: GreenApple },
  ];

  return (
    <footer className="relative bg-black text-white py-8 md:py-12 overflow-hidden">
      {/* Floating Fruits Background */}
      {fruits.map((fruit, index) => (
        <motion.img
          key={index}
          src={fruit.img}
          alt={fruit.name}
          className="absolute w-16 md:w-24 opacity-30"
          initial={{ x: Math.random() * 400 - 200, y: Math.random() * 200 }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 90}%`,
          }}
        />
      ))}

      {/* Footer Content */}
      <div className="relative z-10 text-center px-4 md:px-6">
        <h2 className="text-xl md:text-3xl font-bold tracking-wide mb-3 md:mb-4">
          Stay Energized with <span className="text-pink-400">Herito</span>
        </h2>
        <p className="text-gray-300 max-w-xl md:max-w-2xl mx-auto mb-4 md:mb-6 text-xs md:text-base">
          Crafted with natural fruits by <span className="text-pink-400 font-semibold">Poeage Technology Pvt. Ltd.</span> – boosting your energy, hydration, and
          performance for sports, gym, work, and late nights.
        </p>
        <p className="text-gray-500 text-[10px] md:text-sm">
          © {new Date().getFullYear()} Herito Energy Drink · Powered by Poeage Technology Pvt. Ltd. · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
