import { AUDIENCE_PROFILES } from '../data/savageData';

export default function TargetAudience() {
  return (
    <section className="py-24 sm:py-36 bg-[#070709] border-b border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] font-semibold block mb-3">
              FILTRO DE ENTRADA
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold uppercase tracking-tight text-white leading-[1.08]">
              A SAVAGE É PARA <br />
              <span className="gold-gradient-text">QUEM NÃO QUER FICAR PARADO.</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm font-light leading-relaxed">
            Não é sobre seu passado ou o que você tem hoje. É sobre sua decisão inegociável de avançar a partir de agora.
          </p>
        </div>

        {/* Editorial Index - Numbered Rows with Deep Negative Space, No Boxes */}
        <div className="divide-y divide-neutral-800/80 border-y border-neutral-800/80">
          {AUDIENCE_PROFILES.map((item, idx) => (
            <div
              key={item.id}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-white/[0.015] transition-colors px-2"
            >
              {/* Col 1: Number */}
              <div className="md:col-span-2 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-serif-luxury font-extrabold text-[#C6A85B]/60 group-hover:text-[#DFBF73] transition-colors">
                  0{idx + 1}
                </span>
                <span className="text-[10px] font-mono text-neutral-600 uppercase">/ PERFIL</span>
              </div>

              {/* Col 2: Title & Badge */}
              <div className="md:col-span-4 space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C6A85B] block font-semibold">
                  {item.badge}
                </span>
                <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-white group-hover:text-[#EADBAB] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Col 3: Description Quote */}
              <div className="md:col-span-6 text-sm text-neutral-300 font-light leading-relaxed">
                “{item.description}”
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
            ✦ Não importa se você tem 14, 18 ou 25 anos. A fome de evoluir é a mesma régua.
          </span>
        </div>

      </div>
    </section>
  );
}
