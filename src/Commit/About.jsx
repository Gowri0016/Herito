import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Note: We assume Font Awesome is available in the environment for the 'fas' classes.

const App = () => {
  const missionCardsRef = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // 1. Intersection Observer for Scroll Effects
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-card');
        }
      });
    }, { threshold: 0.2 });

    missionCardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    // 2. Dynamic Energy Pulses for Background Aesthetic
    sectionsRef.current.forEach(section => {
      if (section && section.children.length < 10) { // Check to prevent duplicating pulses on re-render
        for (let i = 0; i < 5; i++) {
          const pulse = document.createElement('div');
          pulse.classList.add('energy-pulse');
          pulse.style.left = `${Math.random() * 90 + 5}%`;
          pulse.style.top = `${Math.random() * 80 + 10}%`;
          pulse.style.animationDelay = `${Math.random() * 4}s`;
          section.appendChild(pulse);
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  const MissionCard = ({ icon, title, desc, index }) => (
    <div
      ref={el => missionCardsRef.current[index] = el}
      className="mission-card bg-gray-900/50 p-6 rounded-xl border border-transparent hover:border-pink-600/50 shadow-md shadow-black/70 opacity-0 transform translate-y-10 transition-all duration-700 ease-out backdrop-blur-sm cursor-pointer"
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg pulse-shadow">
        <i className={`fas ${icon} text-white text-xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-2 text-pink-400">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white font-['Inter',_sans-serif] overflow-hidden">
      
      {/* Hero Section */}
      <section 
        className="relative py-28 md:py-36 px-6 border-b border-purple-900/50"
        ref={el => sectionsRef.current[0] = el}
      >
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <p className="text-md uppercase tracking-widest text-pink-500 mb-2">The Herito Standard</p>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 glowing-text">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto opacity-80">
            From a dedicated vision to a **global benchmark** in wellness, we are revolutionizing the beverage industry with **pure fruit power** and scientific innovation.
          </p>
        </motion.div>
      </section>

      {/* Founder’s Note Section */}
      <section className="py-20 px-6 bg-black/40 backdrop-blur-sm relative rounded-3xl mx-6 md:mx-16 my-16 shadow-inner-xl" ref={el => sectionsRef.current[1] = el}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-10 text-pink-400 border-b-2 border-pink-700/50 inline-block pb-2"
          >
            Founder’s Note
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-4xl mx-auto italic leading-loose text-lg"
          >
            “At Herito Wellness, our journey began with a simple belief — that beverages should do more than refresh. They should energize, nourish, and inspire healthier lifestyles.
            <br /><br />
            When we started this company, our vision was to create products that reflect both **science and nature**, combining international standards with the unique needs of Indian consumers. Every drink we craft carries our promise of quality, safety, and wellness.
            <br /><br />
            Herito is more than just a beverage company. It’s a movement towards a healthier, more energetic India — one sip at a time. Our mission is to make world-class functional beverages accessible to every individual, while ensuring that we stay responsible towards our environment and communities.
            <br /><br />
            This is only the beginning. Together, we will build a brand that India is proud of — and the world respects.”
            <br /><br />
            <span className="text-purple-400 font-semibold">— Founder, Herito Wellness Private Limited</span>
          </motion.p>
        </div>
      </section>

      {/* About Us & Company Sections */}
      <section className="py-20 px-6 relative" ref={el => sectionsRef.current[2] = el}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          
          {/* About Us */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="p-8 rounded-xl bg-gray-900/70 border border-purple-900/60 shadow-xl shadow-purple-900/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-purple-400">The Herito Identity</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Herito Wellness Private Limited is a modern wellness and beverage company, dedicated to redefining refreshment and nutrition. With a strong foundation in innovation and research, we specialize in developing high-quality beverages and processed foods that combine health, taste, and functionality.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our portfolio covers energy drinks, sports drinks, nutritional beverages, functional foods, and ready-to-drink solutions, all crafted with global quality benchmarks and designed to meet the lifestyle needs of today’s consumers.
            </p>
          </motion.div>

          {/* About Our Company */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="p-8 rounded-xl bg-gray-900/70 border border-purple-900/60 shadow-xl shadow-purple-900/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-pink-400">Our Operational Scope</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Herito Wellness, we believe in going beyond refreshment — we focus on wellness with purpose. Supported by modern production facilities, research-driven product development, and strict quality control systems, our company ensures that every product meets international standards.
            </p>
            <ul className="text-gray-400 space-y-3 text-left pl-5 list-disc marker:text-pink-500">
              <li>Manufacturing and precision packaging of functional beverages & foods.</li>
              <li>Establishing and operating advanced R&D and cold-storage facilities.</li>
              <li>Omnichannel distribution through wholesale, retail, e-commerce, and institutional supply chains.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 px-6 relative" ref={el => sectionsRef.current[3] = el}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold mb-16 text-center text-purple-400"
          >
            Vision & Core Directives
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Vision */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl border-2 border-pink-700/50 shadow-2xl shadow-pink-900/40 bg-black/50 h-full"
            >
              <h3 className="text-4xl font-bold mb-4 text-pink-400">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be recognized as India’s **most trusted wellness and beverage company** — setting international standards in innovation, quality, and sustainability while making premium functional beverages accessible to every consumer in the country.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl border-2 border-purple-700/50 shadow-2xl shadow-purple-900/40 bg-black/50"
            >
              <h3 className="text-4xl font-bold mb-6 text-purple-400">Our Mission</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                To enrich lives by creating innovative, functional, and wellness-focused beverages and foods that combine great taste with health benefits, empowering consumers to perform, recover, and live better every day.
              </p>
            </motion.div>
          </div>

          {/* Mission Cards / Core Values */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-10 text-pink-400">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <MissionCard index={0} icon={'fa-leaf'} title={'Natural Formulation'} desc={'Harnessing real fruit extracts and clean, sustainable energy sources.'} />
              <MissionCard index={1} icon={'fa-shield-alt'} title={'Global Quality'} desc={'Adhering to strict international standards for safety, consistency, and trust.'} />
              <MissionCard index={2} icon={'fa-hand-holding-heart'} title={'Conscious Wellness'} desc={'Creating products designed for active, modern lifestyles without the crash.'} />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Global & Utility Classes */
        .font-\['Inter',\_sans-serif\] {
          font-family: 'Inter', sans-serif;
        }

        /* Glowing Text Effect for Premium Feel */
        .glowing-text {
          background-image: linear-gradient(90deg, #ec4899, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 5px rgba(236, 72, 153, 0.6)) drop-shadow(0 0 10px rgba(168, 85, 247, 0.4));
        }

        /* Subtle Inner Shadow on Main Cards */
        .shadow-inner-xl {
          box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.8), 0 10px 20px rgba(0, 0, 0, 0.5);
        }
        
        /* Mission Card Scroll-In Effect */
        .mission-card {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .mission-card.show-card {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Icon Pulse Shadow */
        .pulse-shadow {
            box-shadow: 0 0 10px rgba(236,72,153,0.7), 0 0 20px rgba(168,85,247,0.5);
        }

        /* Animated Energy Pulses for Background */
        .energy-pulse {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(168, 85, 247, 0.5); /* Purple/Faint Blue */
          border-radius: 50%;
          filter: blur(2px);
          animation: float-pulse 8s infinite ease-in-out;
          pointer-events: none;
          z-index: 0;
        }
        @keyframes float-pulse {
          0% { transform: scale(0.6) translate(0, 0); opacity: 0; }
          25% { opacity: 1; }
          50% { transform: scale(1.5) translate(10px, -10px); opacity: 0.6; }
          75% { transform: scale(0.8) translate(-5px, 5px); opacity: 0.3; }
          100% { transform: scale(0.6) translate(0, 0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default App;
