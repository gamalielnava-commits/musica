
import React, { useState } from 'react';
import { Headphones, Youtube, Music } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import History from './components/History';
import Discography from './components/Discography';
import { INITIAL_ALBUMS } from './constants';
import { Album } from './types';

const App: React.FC = () => {
  const [albums] = useState<Album[]>(INITIAL_ALBUMS);

  return (
    <div className="min-h-screen bg-[#F9F8F6] selection:bg-[#2D2926] selection:text-[#F9F8F6]">
      <Navigation />

      <main>
        <Hero />

        <section className="py-20 bg-[#F9F8F6] border-t border-[#E8E6E1]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#8E8A84] font-black text-[10px] tracking-[0.8em] uppercase mb-4 block">Streaming</span>
              <h3 className="text-3xl font-cinzel font-bold text-[#2D2926] uppercase tracking-tighter">Escúchanos en Spotify</h3>
            </div>
            <div className="soft-shadow rounded-xl overflow-hidden">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/album/2WVKO3Pfh3TXWCrg6VXoC1?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Embed"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 lg:py-40 bg-[#FDFCFB]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative group overflow-hidden rounded-[5rem] h-[600px] bg-white border border-[#E8E6E1] soft-shadow">
              <img
                src="https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=2000&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-10 transition-all duration-[4s] desaturate group-hover:scale-105"
                alt="Atmosphere"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <span className="text-[#8E8A84] font-black text-[11px] tracking-[1.2em] mb-12 uppercase">Legado Humano</span>
                <h3 className="text-6xl md:text-8xl font-cinzel font-bold text-[#2D2926] mb-10 leading-none uppercase tracking-tighter">Esencia y<br />Verdad</h3>
                <a
                  href="#vision"
                  className="px-16 py-5 bg-[#2D2926] text-white font-black text-[9px] tracking-[0.6em] rounded-full hover:bg-[#4A4541] hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-[#2D2926]/20 uppercase"
                >
                  Nuestra Visión
                </a>
              </div>
            </div>
          </div>
        </section>

        <Discography albums={albums} />

        <History />
      </main>

      <footer className="bg-[#F9F8F6] border-t border-[#E8E6E1] py-20 md:py-32 lg:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-24">
            <div>
              <div className="flex items-center gap-5 mb-10">
                <div className="w-12 h-12 bg-[#2D2926] rounded-xl rotate-45 flex items-center justify-center">
                  <span className="text-white text-[10px] font-black -rotate-45">DM</span>
                </div>
                <span className="font-cinzel text-4xl font-bold tracking-[0.2em] text-[#2D2926]">DIADEMAS</span>
              </div>
              <p className="text-[#8E8A84] text-sm max-w-sm leading-relaxed font-light italic">
                Plataforma musical con propósito eterno. Estética minimalista. Letras humanas.
              </p>
              <div className="flex gap-6 mt-12">
                <a href="https://open.spotify.com/artist/1kDs1rHwvtUVwpx42Ob1T6" target="_blank" rel="noopener noreferrer" className="opacity-20 hover:opacity-100 transition-opacity">
                  <Headphones className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@DiademasWorship" target="_blank" rel="noopener noreferrer" className="opacity-20 hover:opacity-100 transition-opacity">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://music.apple.com/us/artist/diademas-music/1875825878" target="_blank" rel="noopener noreferrer" className="opacity-20 hover:opacity-100 transition-opacity">
                  <Music className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20">
              <div className="space-y-4">
                <h6 className="text-[10px] font-black text-[#8E8A84] tracking-[0.4em] uppercase">Links</h6>
                <ul className="space-y-3 text-[11px] font-black text-[#2D2926]/40 tracking-widest uppercase">
                  <li><a href="https://www.youtube.com/@DiademasWorship" className="hover:text-[#2D2926]" target="_blank">YouTube</a></li>
                  <li><a href="https://open.spotify.com/artist/1kDs1rHwvtUVwpx42Ob1T6" className="hover:text-[#2D2926]" target="_blank">Spotify</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h6 className="text-[10px] font-black text-[#8E8A84] tracking-[0.4em] uppercase">Música</h6>
                <ul className="space-y-3 text-[11px] font-black text-[#2D2926]/40 tracking-widest uppercase">
                  <li><a href="#musica" className="hover:text-[#2D2926]">Discografía</a></li>
                  <li><a href="#vision" className="hover:text-[#2D2926]">Visión</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 lg:mt-40 pt-10 border-t border-[#E8E6E1] flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[9px] text-[#8E8A84] font-black tracking-[0.8em] uppercase text-center md:text-left">© 2026 DIADEMAS MUSIC OFFICIAL</span>
            <a href="mailto:diademasworship@gmail.com" className="text-[9px] text-[#2D2926] font-black tracking-[0.3em] uppercase hover:underline">CONTACT@DIADEMAS.COM</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
