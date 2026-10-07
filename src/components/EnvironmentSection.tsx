export default function EnvironmentSection() {
  return (
    <section className="py-24 sm:py-36 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] font-semibold block mb-3">
            LEI DA CONVIVÊNCIA
          </span>
          <h2 className="text-3xl sm:text-6xl font-serif-luxury font-bold uppercase tracking-tight text-white leading-[1.08]">
            O AMBIENTE <br />
            <span className="gold-gradient-text">MOLDA VOCÊ.</span>
          </h2>
          <p className="text-base sm:text-xl text-neutral-300 font-light mt-4 leading-relaxed">
            Você se torna aquilo que constantemente escolhe consumir, praticar e vivenciar.
          </p>
        </div>

        {/* Dynamic Editorial Split Screen */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Ambient 1: Comum (Muted, Dark, Restrained) */}
          <div className="md:col-span-5 p-8 sm:p-10 rounded-2xl bg-[#09090C] border border-neutral-850 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  A REALIDADE DA MÉDIA
                </span>
                <span className="text-xs text-neutral-400">✕</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-neutral-200">
                O Ambiente Tradicional
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                <p>— Conversas vazias sobre futilidades que roubam sua energia e seu foco diário.</p>
                <p>— Zombam das suas metas de independência ou te chamam de obcecado por querer estudar.</p>
                <p>— Uma pressão silenciosa e constante para que você se acomode com o básico.</p>
                <p>— Ninguém cobra seu treino, sua disciplina ou a saúde do seu negócio.</p>
              </div>
            </div>

            <div className="pt-8 text-[11px] font-mono text-neutral-400 tracking-wider">
              RESULTADO: ESTAGNAÇÃO LENTA E INVISÍVEL
            </div>
          </div>

          {/* Ambient 2: Savage (High Luxury, Gold Rim, Bold Presence) */}
          <div className="md:col-span-7 p-8 sm:p-12 rounded-2xl bg-[#0C0C10] border border-[#C6A85B]/35 shadow-[0_10px_40px_rgba(198,168,91,0.12)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,_rgba(198,168,91,0.15)_0%,_transparent_70%)] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-[#C6A85B]/20">
                <span className="text-xs font-mono uppercase tracking-widest text-[#DFBF73] font-bold">
                  O AMBIENTE SAVAGE 🐍
                </span>
                <span className="text-xs text-[#DFBF73]">✦</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                Onde a Evolução é Padrão
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-neutral-200 font-light leading-relaxed">
                <p className="flex items-start gap-3">
                  <span className="text-[#C6A85B] font-bold">✦</span>
                  <span>Jovens e adultos que não têm vergonha de trabalhar duro e buscar liberdade financeira.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#C6A85B] font-bold">✦</span>
                  <span>Discussão madura sobre execução no mercado digital, posicionamento e resultados reais.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#C6A85B] font-bold">✦</span>
                  <span>Apoio coletivo quando bate a dúvida. Na Savage, todos puxam uns aos outros para cima.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#C6A85B] font-bold">✦</span>
                  <span>Corpo e mente alinhados: treino diário, postura inabalável e respeito à própria palavra.</span>
                </p>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <div className="p-4 rounded-lg bg-black/60 border border-[#C6A85B]/20 text-xs sm:text-sm text-neutral-300 font-serif-luxury tracking-wide">
                “Por isso criamos um ambiente onde pessoas ambiciosas podem aprender, trocar experiências e evoluir juntas.”
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
