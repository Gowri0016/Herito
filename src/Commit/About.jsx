import React, { useEffect, useRef } from 'react';

const AboutHerito = () => {
  const missionCardsRef = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Animation for mission cards on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    missionCardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
      }
    });

    // Add energy pulses dynamically to sections
    sectionsRef.current.forEach(section => {
      if (section) {
        for (let i = 0; i < 3; i++) {
          const pulse = document.createElement('div');
          pulse.classList.add('energy-pulse');
          pulse.style.left = `${Math.random() * 90 + 5}%`;
          pulse.style.top = `${Math.random() * 80 + 10}%`;
          pulse.style.animationDelay = `${Math.random() * 4}s`;
          section.appendChild(pulse);
        }
      }
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black mt-6 text-white font-['Poppins']">

      {/* Hero Section */}
      <section 
        className="hero-pattern py-16 md:py-24 px-6 relative overflow-hidden"
        ref={el => sectionsRef.current[0] = el}
      >
        <div className="hidden md:block absolute top-10 left-10 w-20 h-20 opacity-20 fruit-float">
          <img src="https://cdn-icons-png.flaticon.com/512/4150/4150715.png" alt="Pineapple" className="w-full h-full" />
        </div>
        <div className="hidden md:block absolute top-1/4 right-16 w-16 h-16 opacity-20 fruit-pulse">
          <img src="https://cdn-icons-png.flaticon.com/512/6215/6215478.png" alt="Strawberry" className="w-full h-full" />
        </div>
        <div className="hidden md:block absolute bottom-20 left-1/4 w-14 h-14 opacity-20 fruit-float" style={{animationDelay: '1s'}}>
          <img src="https://cdn-icons-png.flaticon.com/512/547/547525.png" alt="Orange" className="w-full h-full" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-pink-500">Story</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            From a vision in 2024 to revolutionizing energy drinks with natural fruit power
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section 
        className="py-16 px-6 bg-gray-900 relative"
        ref={el => sectionsRef.current[1] = el}
      >
        <div className="hidden md:block absolute top-10 right-20 w-16 h-16 opacity-20 fruit-pulse" style={{animationDelay: '0.5s'}}>
          <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" alt="Green Apple" className="w-full h-full" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 relative mb-8 md:mb-0">
              <div className="founder-img rounded-lg overflow-hidden shadow-2xl">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-white text-4xl md:text-6xl">DK</span>
                </div>
              </div>
              <div className="energy-pulse" style={{top: '40%', left: '40%', animationDelay: '1s'}}></div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Meet Our Founder <span className="text-pink-500">Dinesh K</span></h2>
              <p className="text-gray-300 mb-4">
                In June 2024, Dinesh K set out on a mission to create an energy drink that doesn't just boost your energy but nourishes your body with natural ingredients.
              </p>
              <p className="text-gray-300 mb-4">
                With a background in nutrition and a passion for innovation, Dinesh noticed that most energy drinks were loaded with artificial ingredients and excessive sugars. He envisioned a better alternative - one that harnesses the natural power of fruits.
              </p>
              <p className="text-gray-300">
                "We believe that what fuels your body should empower you, not drain you. That's why we created Herito - to provide clean, sustainable energy from nature's best ingredients."
              </p>
              <div className="mt-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
                  <i className="fas fa-lightbulb text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Innovation Through Nature</h4>
                  <p className="text-sm text-gray-400">Harnessing fruit power for sustainable energy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        className="py-16 px-6 bg-black relative"
        ref={el => sectionsRef.current[2] = el}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our <span className="text-pink-500">Journey</span></h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-600 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative pl-10 md:pl-0 md:flex md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">June 2024</h3>
                  <p className="text-pink-500">The Beginning</p>
                </div>
                <div className="timeline-item md:w-1/2 md:pl-12 relative">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <p>Herito was founded by Dinesh K with a vision to create natural energy drinks that actually benefit your body.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-10 md:pl-0 md:flex md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">July 2024</h3>
                  <p className="text-pink-500">Product Development</p>
                </div>
                <div className="timeline-item md:w-1/2 md:pl-12 relative">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <p>Months of research and development resulted in our unique formula combining natural fruit extracts with sustainable energy boosters.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-10 md:pl-0 md:flex md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">September 2024</h3>
                  <p className="text-pink-500">Launch</p>
                </div>
                <div className="timeline-item md:w-1/2 md:pl-12 relative">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <p>Herito Energy Drink launched with five initial flavors: Pineapple, Strawberry, Orange, Mojito Lemon, and Green Apple.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-10 md:pl-0 md:flex md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Today</h3>
                  <p className="text-pink-500">Growing Strong</p>
                </div>
                <div className="timeline-item md:w-1/2 md:pl-12 relative">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <p>Herito continues to expand its product line while staying true to its core values of natural ingredients and sustainable energy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        className="py-16 px-6 bg-gray-900"
        ref={el => sectionsRef.current[3] = el}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our <span className="text-pink-500">Mission</span></h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">We're committed to transforming the energy drink industry with our natural approach</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              ref={el => missionCardsRef.current[0] = el}
              className="mission-card bg-gray-800 p-6 md:p-8 rounded-xl transition-all duration-300"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-pink-500 flex items-center justify-center mb-4 md:mb-6">
                <i className="fas fa-leaf text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 md:mb-4">Natural Ingredients</h3>
              <p className="text-gray-400 text-sm md:text-base">We use only real fruit extracts and natural energy sources, avoiding artificial additives and excessive sugars.</p>
            </div>
            
            <div 
              ref={el => missionCardsRef.current[1] = el}
              className="mission-card bg-gray-800 p-6 md:p-8 rounded-xl transition-all duration-300"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-pink-500 flex items-center justify-center mb-4 md:mb-6">
                <i className="fas fa-recycle text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 md:mb-4">Sustainability</h3>
              <p className="text-gray-400 text-sm md:text-base">From sourcing to packaging, we prioritize eco-friendly practices to minimize our environmental impact.</p>
            </div>
            
            <div 
              ref={el => missionCardsRef.current[2] = el}
              className="mission-card bg-gray-800 p-6 md:p-8 rounded-xl transition-all duration-300"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-pink-500 flex items-center justify-center mb-4 md:mb-6">
                <i className="fas fa-heart text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 md:mb-4">Health Focused</h3>
              <p className="text-gray-400 text-sm md:text-base">Our drinks are designed to provide clean energy without the crash, supporting your active lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        body {
          font-family: 'Poppins', sans-serif;
          background-color: #0a0a0a;
          color: white;
          margin: 0;
          padding: 0;
        }
        
        .hero-pattern {
          background: radial-gradient(circle, rgba(20,20,20,0.9) 0%, rgba(10,10,10,1) 70%);
        }
        
        .fruit-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .fruit-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 8px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ec4899;
        }
        
        .mission-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(236, 72, 153, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.04);
        }
        
        .founder-img {
          transition: transform 0.5s ease;
        }
        
        .founder-img:hover {
          transform: scale(1.05);
        }
        
        .energy-pulse {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(236, 72, 153, 0.3);
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

        /* Responsive adjustments for medium screens */
        @media (max-width: 768px) {
          .timeline-item::before {
            left: -15px;
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutHerito;