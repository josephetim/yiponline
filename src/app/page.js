"use client"
import React, { useState, useEffect } from 'react';
import { Robot, ShoppingCart, Cpu, GlobeHemisphereWest, Lightning } from "phosphor-react";


export default function YeepstersWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Check which sections are visible
      const sections = document.querySelectorAll('.fade-in-section');
      const newVisibleSections = new Set();
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
          newVisibleSections.add(index);
        }
      });
      
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animated particles component
  const AnimatedParticles = () => {
    const particles = Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${Math.random() * 10 + 10}s`,
        }}
      />
    ));
    
    return <div className="fixed inset-0 pointer-events-none z-0">{particles}</div>;
  };

  const services = [
    {
      icon:  <ShoppingCart size={32} color="#00FFFF" />,
      title: "E-commerce",
      description: "Have a physical store or an online business? We help you create a stunning online store that attracts customers and boosts sales."
    },
    {
      icon: "🏨",
      title: "Hospitality",
      description: "Thinking luxury, cozy, or budget-friendly, we have it all."
    },
    {
      icon:  <Robot size={32} color="#00FFFF" />,
      title: "SEO Optimization",
      description: "We help you reach your target audience and grow your business by boosting your online presence and rank higher on search engines."
    },
    {
      icon:  <Cpu size={32} color="#00FFFF" />,
      title: "Responsive Themes",
      description: "Our themes are designed to adapt to different screen sizes and resolutions, ensuring a smooth and consistent user experience."
    },
    {
      icon:  <GlobeHemisphereWest size={32} color="#00FFFF" />,
      title: "Custom Domain",
      description: "We help you create a unique and memorable identity for your website. Choose a domain name that reflects your brand."
    },
    {
      icon:  <Lightning size={32} color="#00FFFF" />,
      title: "Software Development",
      description: "Custom solutions built with cutting-edge technology to accelerate your business growth."
    }
  ];

  return (
<div className="min-h-screen font-futuristic bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-x-hidden">
<AnimatedParticles />
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }
        
        @keyframes floatShape {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        .animate-float {
          animation: float 20s infinite linear;
        }
        
        .animate-float-shape {
          animation: floatShape 10s infinite ease-in-out;
        }
        
        .animate-pulse-hero {
          animation: pulse 2s infinite;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #fff, #ffd93d, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-button {
          background: linear-gradient(45deg, #ff6b6b, #ffd93d);
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
        }
        
        .gradient-button:hover {
          box-shadow: 0 15px 40px rgba(255, 107, 107, 0.4);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full px-8 py-4 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 py-2' : 'bg-black/10'
      } backdrop-blur-md`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Yeepsters
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative font-medium hover:text-yellow-400 transition-all duration-300 hover:-translate-y-1 group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
          
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-400">
        {/* Floating shapes */}
        <div className="absolute top-1/4 left-1/12 w-20 h-20 bg-pink-500/20 rounded-2xl transform rotate-45 animate-float-shape opacity-30" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-3/5 right-1/6 w-15 h-15 bg-yellow-400/20 rounded-full animate-float-shape opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-25 h-25 bg-teal-400/20 animate-float-shape opacity-30" style={{animationDelay: '4s', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        
        <div className="max-w-4xl px-8 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-widest animate-pulse-hero">
  Empowering the AI-Powered Future
</h1>
<p className="text-lg md:text-2xl mb-8 opacity-80 leading-relaxed max-w-2xl mx-auto">
  Yeepsters builds AI-enhanced platforms that automate, elevate, and future-proof your business.
</p>
          <button
            
            className="gradient-button text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          </button>

       
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 px-8 glass-effect fade-in-section transition-all duration-700 ${
        visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Who We Are
          </h2>
          <p className="text-center text-xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            We Yeepsters make running a business a breeze by developing smart technology that simplifies tasks, streamlines operations, and boosts efficiency and profits.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Mission', content: 'Building accessible tech to Structure & Scale-up African Businesses!' },
              { title: 'Vision', content: 'Building a Friction-free Africa attractive for reverse migration' },
              { title: 'Our Approach', content: 'We focus on bringing value and leverage on technology to solve challenges that businesses face.' }
            ].map((item, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-3xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-yellow-400 to-teal-400"></div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{item.title}</h3>
                <p className="opacity-90 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 px-8 bg-gradient-to-br from-purple-600 to-indigo-600 fade-in-section transition-all duration-700 ${
        visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            What We Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) rotateY(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="opacity-90 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-8 glass-effect fade-in-section transition-all duration-700 ${
        visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Ready to transform your business? Let's work together to make your business soar!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '📍', title: 'Visit Our HQ', content: 'Lagos, Nigeria' },
              { icon: '📞', title: 'Support', content: '+234-(0)90-379-122-35' },
              { icon: '💼', title: 'Sales', content: '+234-(0)80-953-064-40' }
            ].map((item, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="opacity-90">{item.content}</p>
              </div>
            ))}
          </div>
          
          <a
            href="tel:+2348095306440"
            className="gradient-button text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group inline-block"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md py-8 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {['Home', 'About', 'Services', 'Contact', 'Careers'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          <p className="opacity-80">
            © 2024 Yeepsters. All Rights Reserved. | Redesigned with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}