import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { SAVAGE_LINKS } from '../data/savageData';
import SavageLogo from './SavageLogo';

interface FounderSectionProps {
  founderImage: string;
}

export default function FounderSection({ founderImage }: FounderSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mq.matches);
      const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mq.addEventListener('change', listener);
      return () => mq.removeEventListener('change', listener);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-10, 12]);
  const smoothY = useSpring(rawY, { stiffness: 90, damping: 25, mass: 0.5 });

  return (
    <section
      ref={containerRef}
      id="fundador"
      className="py-28 sm:py-40 bg-[#070709] border-b border-neutral-900 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column: Massive Presence, Editorial Luxury with subtle parallax */}
          <div className="lg:col-span-6 relative">
            <motion.div
              style={{ y: reducedMotion ? 0 : smoothY }}
              className="relative rounded-3xl overflow-hidden border border-[#C6A85B]/35 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(198,168,91,0.15)] group"
            >
              <img
                src={founderImage}
                alt="João Ricardo - Fundador da Savage Community"
                className="w-full h-[520px] sm:h-[620px] object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-8 inset-x-8 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#DFBF73] font-bold block mb-1">
                    LIDERANÇA & MENTORIA
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white tracking-wide">
                    JOÃO RICARDO
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    Fundador da Savage Community
                  </p>
                </div>
                <SavageLogo size={52} />
              </div>
            </motion.div>
          </div>

          {/* Biography & Vision */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] font-semibold block mb-3">
                AUTORIDADE & ORIGEM
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold uppercase tracking-tight text-white leading-[1.08]">
                POR TRÁS DA SAVAGE: <br />
                <span className="gold-gradient-text">JOÃO RICARDO.</span>
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              <p>
                À frente desse projeto está <strong className="text-white font-medium">João Ricardo</strong>, empreendedor que dedicou anos ao estudo e à prática no mercado digital e hoje compartilha parte desse conhecimento através da Savage.
              </p>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                Sem encenação, sem mentiras de enriquecimento fácil da noite para o dia. A Savage nasceu para reunir quem tem ambição genuína e quer aprender com disciplina diária, sob a condução de quem está no campo de batalha executando.
              </p>
            </div>

            {/* 3 Pillars of Leadership */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#C6A85B]/20">
              <div>
                <span className="text-xs font-serif-luxury font-bold uppercase tracking-wider text-[#DFBF73] block mb-1">
                  Estudo Contínuo
                </span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Anos de dedicação direta ao entendimento de mercado e modelos digitais.
                </p>
              </div>

              <div>
                <span className="text-xs font-serif-luxury font-bold uppercase tracking-wider text-[#DFBF73] block mb-1">
                  Foco em Execução
                </span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Mentorias e direcionamentos estratégicos desenhados para gerar tração real.
                </p>
              </div>

              <div>
                <span className="text-xs font-serif-luxury font-bold uppercase tracking-wider text-[#DFBF73] block mb-1">
                  Movimento Real
                </span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Construindo uma geração acima da média que não aceita o comodismo.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SAVAGE_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DFBF73] hover:text-white transition-colors"
              >
                <span>Acompanhar no Instagram @savagecommunity._</span>
                <ArrowUpRight className="w-4 h-4 text-[#C6A85B]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
