export default function ZeroToScale() {
  const zeroSteps = [
    { title: 'Conhecimento', desc: 'Fundamentos sólidos sobre o mercado digital sem ruídos e sem termos confusos.' },
    { title: 'Mentalidade', desc: 'Blindagem inicial contra a dúvida, o comodismo e o medo de começar.' },
    { title: 'Primeiros Passos', desc: 'Direcionamento claro de onde focar sua energia desde o primeiro dia.' },
    { title: 'Disciplina', desc: 'Construção de uma rotina inegociável de estudos e prática diária.' },
    { title: 'Execução', desc: 'Colocar a mão na massa imediatamente em vez de virar acumulador passivo de cursos.' },
  ];

  const scaleSteps = [
    { title: 'Estratégia', desc: 'Refinamento de posicionamento de alto padrão e leitura afiada de mercado.' },
    { title: 'Crescimento', desc: 'Eliminação dos gargalos que travam seu faturamento no mesmo patamar.' },
    { title: 'Escala', desc: 'Modelos de alavancagem para expandir suas operações com maturidade.' },
    { title: 'Execução', desc: 'Velocidade implacável para validar novas ofertas e oportunidades.' },
    { title: 'Evolução', desc: 'Estar em um ambiente que não permite que você relaxe após os primeiros ganhos.' },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] font-semibold block mb-3">
            ACESSIBILIDADE REAL
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold uppercase tracking-tight text-white leading-[1.08]">
            COMEÇANDO DO ZERO? <br />
            <span className="gold-gradient-text">VOCÊ TAMBÉM TEM ESPAÇO AQUI.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light mt-4 leading-relaxed">
            A Savage é apresentada como uma comunidade tanto para quem está começando do zero quanto para quem já começou e quer escalar. De 14 a 20+ anos.
          </p>
        </div>

        {/* 2-Column Monumental Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Column A: Do Zero */}
          <div className="p-8 sm:p-12 rounded-2xl bg-[#09090C] border border-neutral-850 relative">
            <div className="pb-6 border-b border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block">
                  PONTO DE PARTIDA
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white mt-1">
                  DO ZERO
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded border border-neutral-700 text-neutral-300">
                Fundação
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-light mt-6 mb-8 leading-relaxed">
              Você ainda está no início, nunca vendeu nada e tem receio de errar. Não precisa fingir experiência: o ambiente te dá o mapa.
            </p>

            <div className="space-y-6">
              {zeroSteps.map((s, idx) => (
                <div key={s.title} className="flex items-start gap-4">
                  <span className="text-sm font-mono font-bold text-[#C6A85B] mt-0.5">→</span>
                  <div>
                    <h4 className="text-sm font-serif-luxury font-bold text-white uppercase tracking-wide">
                      {s.title}
                    </h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column B: Para Quem Já Começou */}
          <div className="p-8 sm:p-12 rounded-2xl bg-[#0B0B0F] border border-[#C6A85B]/30 shadow-[0_10px_40px_rgba(198,168,91,0.08)] relative">
            <div className="pb-6 border-b border-[#C6A85B]/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#DFBF73] block">
                  ACELERAÇÃO & REFINO
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white mt-1">
                  JÁ COMEÇOU?
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-[#C6A85B]/10 border border-[#C6A85B]/40 text-[#DFBF73]">
                Escala
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light mt-6 mb-8 leading-relaxed">
              Você já tem faturamento ou clientes rodando, mas atingiu um teto mental e operacional. Aqui você ganha ambiente e visão para multiplicar.
            </p>

            <div className="space-y-6">
              {scaleSteps.map((s, idx) => (
                <div key={s.title} className="flex items-start gap-4">
                  <span className="text-sm font-mono font-bold text-[#DFBF73] mt-0.5">→</span>
                  <div>
                    <h4 className="text-sm font-serif-luxury font-bold text-white uppercase tracking-wide">
                      {s.title}
                    </h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
