import React, { useEffect, useState } from "react";

const Footer = () => {
  const [fruitStyles, setFruitStyles] = useState([]);
  const [extraEnergyPulses, setExtraEnergyPulses] = useState([]);

  useEffect(() => {
    // Randomize fruit positions and animation duration
    const styles = Array(8).fill().map(() => ({
      top: `${Math.random() * 80 + 5}%`,
      left: `${Math.random() * 85 + 5}%`,
      animationDuration: `${5 + Math.random() * 5}s`
    }));
    setFruitStyles(styles);
    
    // Create additional energy pulses
    const newEnergyPulses = Array(5).fill().map(() => ({
      left: `${Math.random() * 90 + 5}%`,
      top: `${Math.random() * 80 + 10}%`,
      animationDelay: `${Math.random() * 4}s`
    }));
    setExtraEnergyPulses(newEnergyPulses);
  }, []);

  const fruits = [
    { 
      name: "Pineapple", 
      img: "https://cdn-icons-png.flaticon.com/512/4150/4150715.png",
      animation: "animate-float delay-1"
    },
    { 
      name: "Strawberry", 
      img: "https://cdn-icons-png.flaticon.com/512/6215/6215478.png",
      animation: "animate-pulse delay-2"
    },
    { 
      name: "Orange", 
      img: "https://cdn-icons-png.flaticon.com/512/547/547525.png",
      animation: "animate-spin-slow delay-3"
    },
    { 
      name: "Mojito Lemon", 
      img: "https://cdn-icons-png.flaticon.com/512/3193/3193898.png",
      animation: "animate-sway delay-4"
    },
    { 
      name: "Green Apple", 
      img: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
      animation: "animate-bounce-slow delay-2"
    },
    { 
      name: "Small Strawberry", 
      img: "https://cdn-icons-png.flaticon.com/512/6215/6215478.png",
      animation: "animate-float delay-3",
      size: "w-10 md:w-14 opacity-20"
    },
    { 
      name: "Small Orange", 
      img: "https://cdn-icons-png.flaticon.com/512/547/547525.png",
      animation: "animate-pulse delay-1",
      size: "w-10 md:w-14 opacity-20"
    },
    { 
      name: "Small Green Apple", 
      img: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
      animation: "animate-sway delay-4",
      size: "w-10 md:w-14 opacity-20"
    }
  ];

  return (
    <footer className="relative bg-black text-white py-8 md:py-12 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-pulse { animation: pulse 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-bounce-slow { animation: bounce 7s ease-in-out infinite; }
        .animate-sway { animation: sway 6s ease-in-out infinite; }
        
        .delay-1 { animation-delay: 1s; }
        .delay-2 { animation-delay: 2s; }
        .delay-3 { animation-delay: 3s; }
        .delay-4 { animation-delay: 4s; }
        
        .bubble {
          position: absolute;
          background: rgba(255, 105, 180, 0.1);
          border-radius: 50%;
          bottom: -100px;
          animation: rise 15s infinite ease-in;
        }
        
        @keyframes rise {
          0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-300px) translateX(20px) scale(1.2);
            opacity: 0;
          }
        }
        
        .energy-pulse {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(255, 105, 180, 0.3);
          animation: energy 4s infinite linear;
          opacity: 0;
        }
        
        @keyframes energy {
          0% {
            transform: scale(0.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Energy pulses */}
        <div className="energy-pulse" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="energy-pulse" style={{ top: '60%', left: '80%', animationDelay: '1s' }}></div>
        <div className="energy-pulse" style={{ top: '40%', left: '50%', animationDelay: '2s' }}></div>
        
        {/* Additional energy pulses */}
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
        
        {/* Bubbles */}
        <div className="bubble" style={{ left: '10%', width: '40px', height: '40px', animationDuration: '12s', animationDelay: '0s' }}></div>
        <div className="bubble" style={{ left: '20%', width: '25px', height: '25px', animationDuration: '15s', animationDelay: '1s' }}></div>
        <div className="bubble" style={{ left: '50%', width: '30px', height: '30px', animationDuration: '13s', animationDelay: '3s' }}></div>
        <div className="bubble" style={{ left: '70%', width: '35px', height: '35px', animationDuration: '16s', animationDelay: '2s' }}></div>
        <div className="bubble" style={{ left: '90%', width: '20px', height: '20px', animationDuration: '14s', animationDelay: '4s' }}></div>
      </div>

      {/* Floating Fruits with unique animations */}
      {fruits.map((fruit, index) => (
        <img
          key={index}
          src={fruit.img}
          alt={fruit.name}
          className={`fruit absolute ${fruit.size || 'w-16 md:w-24 opacity-30'} ${fruit.animation}`}
          style={fruitStyles[index] || {}}
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
        
        {/* Social links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;