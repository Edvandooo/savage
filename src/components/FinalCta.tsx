import { SAVAGE_LINKS } from '../data/savageData';
import SavageLogo from './SavageLogo';
import { Button as StatefulButton } from '@/components/ui/stateful-button';

export default function FinalCta() {
  return (
    <section className="py-28 sm:py-44 bg-[#050505] relative overflow-hidden border-b border-neutral-900 text-center">
      {/* Background Subtle Gold Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(198,168,91,0.18)_0%,_transparent_65%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(198,168,91,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* Savage Royal Crest Centerpiece */}
        <SavageLogo size={100} className="mb-8" />

        <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C6A85B] font-bold block mb-4">
          A DECISÃO FUNDAMENTAL
        </span>

        <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury font-black uppercase tracking-tight text-white mb-6 leading-[1.04] text-balance">
          A VIDA ACIMA DA MÉDIA <br />
          <span className="gold-gradient-text drop-shadow-[0_4px_40px_rgba(198,168,91,0.4)]">
            COMEÇA COM UMA DECISÃO.
          </span>
        </h2>

        <p className="text-xl sm:text-3xl font-serif-luxury text-neutral-300 font-light mb-12">
          “Escolher evoluir todos os dias.”
        </p>

        {/* Grand CTA Button with official Aceternity Stateful interaction */}
        <div className="mb-12 w-full flex flex-col items-center gap-3">
          <StatefulButton
            onClick={() => {
              window.open(SAVAGE_LINKS.whatsapp, '_blank', 'noopener,noreferrer');
            }}
            className="w-full sm:w-auto px-10 sm:px-14 py-5 text-sm sm:text-base font-bold uppercase tracking-widest bg-gradient-to-r from-[#FAF1D2] via-[#DFBF73] to-[#C6A85B] text-[#050505] shadow-[0_0_50px_rgba(198,168,91,0.45)] hover:ring-[#DFBF73]"
          >
            QUERO FAZER PARTE DA SAVAGE 🐍
          </StatefulButton>
          <span className="text-[11px] font-mono text-[#DFBF73]/80 tracking-wider">
            Você será direcionado ao WhatsApp oficial da Savage.
          </span>
        </div>

        {/* Brand Creed */}
        <div className="space-y-1.5 text-xs sm:text-sm font-serif-luxury uppercase tracking-[0.2em] text-neutral-400">
          <p className="text-neutral-300 font-medium">Mentalidade forte.</p>
          <p className="text-neutral-300 font-medium">Disciplina diária.</p>
          <p className="gold-gradient-text font-bold">Construindo uma geração acima da média.</p>
        </div>

      </div>
    </section>
  );
}
