import SavageLogo from './SavageLogo';

export default function CommunitySection() {
  return (
    <section id="comunidade" className="py-24 sm:py-36 bg-[#070709] border-b border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] font-semibold block mb-3">
            IRMANDADE & ALIANÇA
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold uppercase tracking-tight text-white leading-[1.08]">
            VOCÊ NÃO PRECISA <br />
            <span className="gold-gradient-text">EVOLUIR SOZINHO.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light mt-4 leading-relaxed">
            Na Savage, pessoas com objetivos semelhantes compartilham experiências, aprendizados e apoio contínuo ao longo de toda a jornada.
          </p>
        </div>

        {/* Authentic Interaction Transcript Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-[#09090D] border border-[#C6A85B]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
            
            {/* Header bar of the transcript */}
            <div className="p-6 sm:p-7 border-b border-[#C6A85B]/20 flex items-center justify-between bg-black/60">
              <div className="flex items-center gap-4">
                <SavageLogo size={42} />
                <div>
                  <h4 className="text-base font-serif-luxury font-bold text-white tracking-wider">
                    Savage Community · Diálogo Oficial
                  </h4>
                  <span className="text-[11px] font-mono text-[#DFBF73]">
                    Ambiente Interno de Mentalidade
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-3 py-1 rounded bg-[#C6A85B]/10 border border-[#C6A85B]/30 text-[#DFBF73] uppercase tracking-wider">
                REGISTRO REAL
              </span>
            </div>

            {/* Transcript Flow */}
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Question */}
              <div className="p-6 rounded-xl bg-black/80 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>DÚVIDA ENVIADA POR SEGUIDOR</span>
                  <span>PERGUNTA OFICIAL</span>
                </div>
                <blockquote className="text-base sm:text-xl font-serif-luxury text-white font-semibold pt-1">
                  “Quero mudar minha mentalidade, a Savage seria o lugar ideal?”
                </blockquote>
              </div>

              {/* Answer */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#0F0F14] border-l-4 border-l-[#C6A85B] border border-neutral-850 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#C6A85B]">
                  <span>RESPOSTA DA SAVAGE</span>
                  <span>POSICIONAMENTO</span>
                </div>
                <p className="text-lg sm:text-2xl font-serif-luxury text-[#FAF1D2] font-bold leading-relaxed">
                  “Sim, lá todos ajudam uns aos outros em relação à mentalidade. O ambiente molda caráter.”
                </p>
                <p className="text-xs text-neutral-400 font-light pt-2 border-t border-white/[0.04]">
                  Princípio fundacional: ninguém vence isolado em um quarto cercado por distrações e vozes derrotistas.
                </p>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="p-6 bg-black/40 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="text-[#C6A85B]">✦</span>
                <span>Membros dos 14 aos 20+ anos trocando visão diariamente</span>
              </span>
              <span className="text-neutral-400 font-bold">#AmbienteSavage</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
