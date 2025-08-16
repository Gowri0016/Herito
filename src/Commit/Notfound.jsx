import React from "react";
import { motion } from "framer-motion";
import Logo from "../Asset/3.png";
import Pine from "../Asset/Pineapple.png";
import Green from "../Asset/Greenapple.png";
import Stab from "../Asset/Stabery.png";
import Orange from "../Asset/Orange.png";
import Moji from "../Asset/Mojito.png";

export default function Notfound() {
  const drinks = [Pine, Green, Stab, Orange, Moji];

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Logo */}
      <motion.img
        src={Logo}
        alt="Logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.05, scale: 1.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 m-auto w-96 md:w-[30rem] opacity-5"
      />

      {/* 404 Text */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold text-pink-500 drop-shadow-lg z-10"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-lg md:text-2xl text-gray-300 z-10"
      >
        Oops! Page Not Found
      </motion.p>

      {/* Drink Images Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        {drinks.map((drink, index) => (
          <motion.img
            key={index}
            src={drink}
            alt="drink"
            className="w-20 md:w-32 absolute"
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
            animate={{
              x: Math.cos(index * (Math.PI * 2 / drinks.length)) * 200,
              y: Math.sin(index * (Math.PI * 2 / drinks.length)) * 200,
              opacity: 1,
              scale: 1,
              rotate: 360,
            }}
            transition={{ duration: 2, delay: index * 0.3 }}
          />
        ))}
      </div>

      {/* Back Home Button */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-xl font-semibold text-white shadow-lg z-10"
      >
        Go Back Home
      </motion.a>
    </div>
  );
}
