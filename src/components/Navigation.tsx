
import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-[#E8E6E1]' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-[#2D2926] rounded-lg rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
            <span className="text-white text-[8px] font-black -rotate-45 group-hover:-rotate-90 transition-transform duration-500">DM</span>
          </div>
          <span className="font-cinzel text-2xl font-bold tracking-[0.2em] text-[#2D2926]">DIADEMAS</span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <a href="#musica" className="text-[10px] font-black text-[#8E8A84] tracking-[0.4em] uppercase hover:text-[#2D2926] transition-colors">Música</a>
          <a href="#vision" className="text-[10px] font-black text-[#8E8A84] tracking-[0.4em] uppercase hover:text-[#2D2926] transition-colors">Visión</a>
          <a 
            href="mailto:diademasworship@gmail.com" 
            className="px-8 py-3 bg-[#2D2926] text-white text-[9px] font-black tracking-[0.4em] uppercase rounded-full hover:bg-[#4A4541] transition-all hover:scale-105 active:scale-95"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
