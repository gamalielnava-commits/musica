
import React, { useState, useEffect, useRef } from 'react';
import { Headphones, Music, Youtube, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const storeLinks = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/1kDs1rHwvtUVwpx42Ob1T6',
      icon: <Headphones className="w-6 h-6 text-[#1DB954]" />,
      color: 'hover:border-[#1DB954]'
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/us/artist/diademas-music/1875825878',
      icon: <Music className="w-6 h-6 text-[#FA243C]" />,
      color: 'hover:border-[#FA243C]'
    },
    {
      name: 'YouTube Music',
      url: 'https://music.youtube.com/channel/UCRqr9vzidmY8bIf2mJJYJMA',
      icon: <Youtube className="w-6 h-6 text-[#FF0000]" />,
      color: 'hover:border-[#FF0000]'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F9F8F6] pt-32 pb-20"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/linen.png')]"></div>

      <div
        className="absolute w-[1000px] h-[1000px] rounded-full blur-[200px] opacity-[0.5] pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: `calc(50% + ${mousePos.x * 60}px)`,
          top: `calc(50% + ${mousePos.y * 60}px)`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, #FFFFFF 0%, #E8E6E1 60%, transparent 90%)'
        }}
      ></div>

      <div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center text-center">
        <div className="reveal flex flex-col items-center mb-16">
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-[#2D2926] mb-3 tracking-[0.35em] leading-tight uppercase">
            DIADEMAS
          </h1>
          <p className="text-[#8E8A84] text-[10px] md:text-xs font-black tracking-[0.8em] uppercase mb-10">
            • Diademas Music Platform •
          </p>
          <div className="h-[1.5px] w-32 bg-[#2D2926]/10"></div>
        </div>

        <div className="w-full max-w-sm space-y-4 mb-16">
          {storeLinks.map((store, i) => (
            <a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal flex items-center justify-between w-full p-4 bg-white border border-[#E8E6E1] ${store.color} rounded-2xl transition-all duration-500 group soft-shadow hover:scale-[1.02] active:scale-[0.98]`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f9f8f6] border border-[#e8e6e1]">
                  {store.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#2D2926] font-black text-[10px] tracking-[0.2em] uppercase">{store.name}</span>
                  <span className="text-[#8E8A84] text-[7px] font-medium tracking-widest uppercase">Disponible ahora</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2D2926]/10 group-hover:text-[#2D2926] transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </a>
          ))}
        </div>

        <button
          onClick={() => document.getElementById('musica')?.scrollIntoView({ behavior: 'smooth' })}
          className="reveal group relative overflow-hidden px-20 py-6 bg-[#2D2926] text-white font-black rounded-full hover:scale-105 transition-all soft-shadow uppercase tracking-[0.6em] text-[9px] cursor-pointer"
        >
          <span className="relative z-10">Ver Discografía Completa</span>
          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
