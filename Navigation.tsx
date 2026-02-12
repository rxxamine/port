
import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-black tracking-tighter">
          RX <span className="text-gray-500">|</span> 🕷
        </a>
        
        <div className="flex items-center gap-10">
          <a 
            href="#work" 
            className="text-[10px] font-bold text-white hover:text-gray-400 transition-colors duration-200 tracking-[0.2em]"
          >
            WORK
          </a>
          <a 
            href="https://instagram.com/rxaminex" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block font-mono text-[10px] text-white border-b border-white/40 pb-1 hover:border-white transition-all tracking-widest uppercase"
          >
            Initialize_Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
