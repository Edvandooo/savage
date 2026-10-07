import { SAVAGE_WHAT_YOU_FIND } from '../data/savageData';

export default function WhatYouFind() {
  return (
    <section id="pilares" className="py-24 sm:py-36 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6 border-b border-[#C6A85B]/20 pb-10">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C6A85B] font-semibold block mb-3">
              ESTRUTURA DE DESENVOLVIMENTO
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold uppercase tracking-tight text-white leading-[1.05]">
              O QUE VOCÊ ENCONTRA <br />
              <span className="gold-gradient-text">NA SAVAGE.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-light leading-relaxed">
            Uma formação prática e contínua baseada em 9 temas integrados. Mente, rotina de execução e visão de mercado trabalhando juntos.
          </p>
        </div>

        {/* Unified 9 Themes Editorial Spread */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 gap-x-12">
          {SAVAGE_WHAT_YOU_FIND.map((item) => (
            <div
              key={item.number}
              className="flex flex-col justify-between group border-l border-[#C6A85B]/25 pl-6 sm:pl-8 py-2 hover:border-[#DFBF73] transition-colors"
            >
              <div>
                <div className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#C6A85B]/70 group-hover:text-[#DFBF73] transition-colors mb-3">
                  {item.number}
                </div>

                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] block mb-2 font-semibold">
                  {item.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white tracking-wide uppercase mb-3 group-hover:text-[#FAF1D2] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/[0.04] text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center justify-between">
                <span>PILAR OFICIAL</span>
                <span className="text-[#C6A85B]/70">SAVAGE 🐍</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
