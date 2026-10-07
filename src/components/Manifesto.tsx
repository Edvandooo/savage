import SavageLogo from './SavageLogo';

export default function Manifesto() {
  const manifestoWords = [
    { num: 'I', text: 'DISCIPLINA' },
    { num: 'II', text: 'ESTUDO' },
    { num: 'III', text: 'EXECUÇÃO' },
    { num: 'IV', text: 'TREINO' },
    { num: 'V', text: 'MENTALIDADE' },
    { num: 'VI', text: 'NEGÓCIOS' },
    { num: 'VII', text: 'EVOLUÇÃO' },
  ];

  return (
    <section id="manifesto" className="py-28 sm:py-40 bg-[#050505] relative overflow-hidden border-b border-neutral-900">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(198,168,91,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Kicker */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C6A85B] font-semibold">
            O MANIFESTO SAVAGE
          </span>
        </div>

        {/* Gigantic Editorial Headline with Negative Space */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-serif-luxury font-bold uppercase tracking-tight text-white leading-[1.08]">
            NÃO É SOBRE SER PERFEITO. <br />
            <span className="gold-gradient-text drop-shadow-[0_2px_20px_rgba(198,168,91,0.3)]">
              É SOBRE EVOLUIR.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-light text-neutral-400 max-w-lg mx-auto leading-relaxed pt-2">
            A mediocridade é aceita pela maioria por covardia ou cansaço. A Savage existe para quem escolheu a recusa ativa dessa postura.
          </p>
        </div>

        {/* Roman Numerals Strip — Pure Minimal Typography, No Boxes */}
        <div className="py-10 border-y border-[#C6A85B]/20 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
          {manifestoWords.map((item) => (
            <div key={item.text} className="flex flex-col items-center space-y-1 group">
              <span className="text-[11px] font-serif-luxury text-[#C6A85B]/70 tracking-widest group-hover:text-[#DFBF73] transition-colors">
                {item.num}
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.15em] text-neutral-200 group-hover:text-white transition-colors">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Central Asymmetric Quote */}
        <div className="mt-20 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0">
            <SavageLogo size={80} />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <blockquote className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white tracking-wide">
              “O ambiente molda caráter.”
            </blockquote>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              Uma pessoa é moldada pelo ambiente que escolhe frequentar. Se você convive com a distração diária, sua ambição diminui em silêncio. Na Savage, a régua é alta todos os dias.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
