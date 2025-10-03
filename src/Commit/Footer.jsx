import React, { useEffect, useState } from "react";

const Footer = () => {
  const [nodeStyles, setNodeStyles] = useState([]);
  const [extraEnergyPulses, setExtraEnergyPulses] = useState([]);

  useEffect(() => {
    // Randomize node positions and animation duration
    const styles = Array(10).fill().map((_, i) => ({
      // Position the nodes within a safe boundary
      top: `${Math.random() * 80 + 10}%`, 
      left: `${Math.random() * 80 + 10}%`,
      animationDuration: `${10 + Math.random() * 5}s`,
      // Distribute delays evenly
      animationDelay: `${i * 0.5}s`
    }));
    setNodeStyles(styles);
    
    // Create additional energy pulses
    const newEnergyPulses = Array(6).fill().map(() => ({
      left: `${Math.random() * 90 + 5}%`,
      top: `${Math.random() * 80 + 10}%`,
      animationDelay: `${Math.random() * 5}s`
    }));
    setExtraEnergyPulses(newEnergyPulses);
  }, []);

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-10 overflow-hidden border-t-4 border-purple-600/50 shadow-[0_-5px_20px_rgba(168,85,247,0.3)] font-['Inter',_sans-serif]">
      <style>{`
        /* --- Custom Keyframes for High-Tech Look --- */
        
        @keyframes node-float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
          25% { transform: translate(15px, -10px) rotate(10deg); opacity: 0.8; }
          50% { transform: translate(-15px, 20px) rotate(-5deg); opacity: 0.6; }
          75% { transform: translate(5px, -5px) rotate(5deg); opacity: 0.9; }
        }
        
        @keyframes flux-pulse {
          0% {
            transform: scale(0.1);
            opacity: 0.9;
            box-shadow: 0 0 10px 5px rgba(236, 72, 153, 0.5);
          }
          100% {
            transform: scale(3);
            opacity: 0;
            box-shadow: 0 0 30px 15px rgba(168, 85, 247, 0.1);
          }
        }

        @keyframes plasma-glow {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
            transform: translateY(-50px) scale(0.8);
          }
          100% {
            transform: translateY(-200px) scale(1.5);
            opacity: 0;
          }
        }

        .animate-node-float { animation: node-float linear infinite; }
        .animate-flux-pulse { animation: flux-pulse 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }
        .animate-plasma-glow { animation: plasma-glow 10s linear infinite; }

        .plasma-particle {
          position: absolute;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, rgba(168, 85, 247, 0) 70%);
          border-radius: 50%;
          bottom: -10px;
          filter: blur(5px);
          pointer-events: none;
        }

        .energy-pulse {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid rgba(168, 85, 247, 0.5);
          background: rgba(168, 85, 247, 0.1);
          animation: flux-pulse 4s infinite cubic-bezier(0.39, 0.575, 0.565, 1);
          pointer-events: none;
        }
      `}</style>

      {/* --- Animated Background Elements (Energy System) --- */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Data Nodes */}
        {nodeStyles.map((style, index) => (
          <div
            key={index}
            className={`absolute w-3 h-3 md:w-4 md:h-4 bg-pink-500/80 rounded-sm shadow-[0_0_8px_rgba(236,72,153,0.8)] animate-node-float`}
            style={style}
          ></div>
        ))}

        {/* Energy Flux Pulses (Circles) */}
        {extraEnergyPulses.map((pulse, index) => (
          <div 
            key={index} 
            className="energy-pulse"
            style={{
              left: pulse.left,
              top: pulse.top,
              animationDelay: pulse.animationDelay
            }}
          ></div>
        ))}
        
        {/* Plasma Glow Particles (Vertical drift) */}
        <div className="plasma-particle" style={{ left: '10%', width: '60px', height: '60px', animationDuration: '12s', animationDelay: '0s' }}></div>
        <div className="plasma-particle" style={{ left: '30%', width: '40px', height: '40px', animationDuration: '15s', animationDelay: '2s' }}></div>
        <div className="plasma-particle" style={{ left: '65%', width: '50px', height: '50px', animationDuration: '11s', animationDelay: '4s' }}></div>
        <div className="plasma-particle" style={{ left: '85%', width: '70px', height: '70px', animationDuration: '13s', animationDelay: '1s' }}></div>
      </div>

      {/* --- Footer Content (Relative to the background) --- */}
      <div className="relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
        
        {/* Header/Divider */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-widest mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 drop-shadow-lg">
            HERITO // NETWORK PROTOCOL
          </h2>
          <div className="w-16 h-1 mx-auto bg-purple-500/50 rounded-full"></div>
        </div>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          
          {/* 1. Mission Statement */}
          <div className="md:col-span-1 border-l-2 border-pink-500 pl-4">
            <h3 className="text-xl font-bold mb-3 tracking-wider text-pink-400">OUR CORE MISSION</h3>
            <p className="text-gray-400 text-sm">
              **Poeage Technology Pvt. Ltd.** is dedicated to optimizing human biological performance through advanced bio-nutritional synthesis. We synchronize energy cycles, delivering unparalleled focus, endurance, and system resilience for the modern world.
            </p>
          </div>
          
          {/* 2. Corporate Links */}
          <div className="md:col-span-1 border-l-2 border-purple-500 pl-4">
            <h3 className="text-xl font-bold mb-3 tracking-wider text-purple-400">CORPORATE ACCESS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">System Integrity (Terms)</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Data Privacy Protocol</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Investor Relations</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Press Kit & Media</a>
              </li>
            </ul>
          </div>

          {/* 3. Contact / Social */}
          <div className="md:col-span-1 border-l-2 border-pink-500 pl-4">
            <h3 className="text-xl font-bold mb-3 tracking-wider text-pink-400">CONNECT CHANNEL</h3>
            <p className="text-gray-400 text-sm mb-4">
              Headquarters: <span className="font-mono text-xs block text-gray-500">Cholla Nagar, Gobicettipalayam-City, Erode</span>
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Support Line: <span className="font-mono text-xs block text-gray-500">1-800-HERITO (24/7 Monitoring)</span>
            </p>

            {/* Social links - Using high-tech colors */}
            <div className="flex space-x-6">
              {/* Facebook */}
              <a href="#" aria-label="Facebook Link" className="text-gray-500 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram Link" className="text-gray-500 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter/X Link" className="text-gray-500 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <p className="text-gray-600 text-[10px] md:text-sm mt-12 pt-4 border-t border-gray-800 text-center">
          © {new Date().getFullYear()} Herito Energy Drink. All Rights Reserved. **Poeage Technology Pvt. Ltd.** - Optimizing Tomorrow's Performance Today.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
