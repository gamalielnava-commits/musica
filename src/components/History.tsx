
import React from 'react';

const History: React.FC = () => {
  return (
    <section id="vision" className="py-20 md:py-32 lg:py-40 px-6 bg-[#FDFCFB] border-y border-[#E8E6E1] scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center reveal">
        <span className="text-[#8E8A84] font-black text-[10px] tracking-[0.8em] uppercase mb-12 block">Manifiesto</span>
        <h3 className="text-5xl md:text-7xl font-cinzel font-bold mb-16 text-[#2D2926] tracking-widest uppercase">Nuestra Esencia</h3>

        <div className="space-y-12 text-2xl text-[#2D2926]/60 leading-relaxed font-light italic">
          <p className="max-w-2xl mx-auto">"La visión es expandir el mensaje de Dios a través de la música creada por las herramientas tecnológicas disponibles."</p>
        </div>
      </div>
    </section>
  );
};

export default History;
