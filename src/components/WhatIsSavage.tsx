import SavageLogo from './SavageLogo';

export default function WhatIsSavage() {
  return (
    <section id="o-que-e" className="py-24 sm:py-36 bg-[#070709] border-b border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Asymmetric 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Typographic Anchor */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] font-semibold block">
              IDENTIDADE & RAÍZES
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold uppercase tracking-tight text-white leading-[1.08]">
              MAIS DO QUE UMA COMUNIDADE, <br />
              <span className="gold-gradient-text">UM MOVIMENTO.</span>
            </h2>

            <div className="pt-4 flex items-center gap-4">
              <SavageLogo size={64} />
              <div className="border-l border-[#C6A85B]/30 pl-4">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  CONCEITO FUNDAMENTAL
                </div>
                <div className="text-sm font-serif-luxury text-[#EADBAB] font-bold">
                  “Savage” = Selvagem
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Contrast Editorial Text & Big Concept Numbers */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-lg sm:text-xl font-light text-neutral-200 leading-relaxed space-y-4">
              <p>
                <strong className="text-white font-medium">“Savage”</strong> significa selvagem em inglês. Para a nossa comunidade, representa a mentalidade exata de quem{' '}
                <span className="text-white font-semibold underline decoration-[#C6A85B] underline-offset-4">
                  se recusa a ser comum
                </span>{' '}
                e escolhe evoluir todos os dias.
              </p>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                A Savage não é um agrupamento passivo de vídeos em um painel qualquer. É um movimento de transformação pessoal e profissional para jovens e adultos que buscam disciplina inegociável, clareza sobre o mercado digital e ambição sem vergonha.
              </p>
            </div>

            {/* 3 Editorial Pillars - Minimalist Lines, No Clunky Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[#C6A85B]/20">
              <div className="space-y-2">
                <span className="text-2xl font-serif-luxury font-extrabold text-[#C6A85B]">01</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Ambição Diária</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Recusa absoluta ao comodismo e busca ativa por uma régua mais alta.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-2xl font-serif-luxury font-extrabold text-[#C6A85B]">02</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Prática no Digital</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Aprendizado direto com quem vive a rotina do mercado, sem enrolação.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-2xl font-serif-luxury font-extrabold text-[#C6A85B]">03</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Ambiente Blindado</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Convivência com pessoas com o mesmo objetivo onde ninguém retrocede.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
