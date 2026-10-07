import { useRef, useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { SAVAGE_LINKS, SAVAGE_OFFER_CORE } from '../data/savageData';
import SavageLogo from './SavageLogo';
import { Button as StatefulButton } from '@/components/ui/stateful-button';

interface HeroProps {
  founderPhoto: string;
}

export default function Hero({ founderPhoto }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
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

  // Subtle, slow, cinematic parallax (5-15px) inspired by Aceternity Hero Parallax concept
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const smoothY = useSpring(rawY, { stiffness: 90, damping: 25, mass: 0.5 });

  const rawBgY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const smoothBgY = useSpring(rawBgY, { stiffness: 80, damping: 25, mass: 0.5 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] border-b border-[#C6A85B]/20"
    >
      {/* Background Ambience: Subtle Golden Lighting and Dark Noise with soft parallax */}
      <motion.div
        style={{ y: reducedMotion ? 0 : smoothBgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(198,168,91,0.12)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 noise-overlay opacity-40" />
      </motion.div>

      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Brand Statement & Monumental Typography */}
          <div className="lg:col-span-7 min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7 pr-0 lg:pr-2">
            
            {/* Authentic Brand Crest Monogram */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#C6A85B]/30 bg-black/60 backdrop-blur-md">
              <SavageLogo size={28} />
              <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C6A85B] uppercase">
                <span>SAVAGE COMMUNITY</span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-400">OFICIAL</span>
              </div>
            </div>

            {/* Monumental Headline - Proportionally scaled to fit without overlapping */}
            <div className="space-y-2 max-w-full">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.4rem] xl:text-[4.1rem] font-serif-luxury font-black uppercase tracking-tight text-white leading-[1.05]">
                RECUSAR A <br />
                <span className="gold-gradient-text drop-shadow-[0_4px_30px_rgba(198,168,91,0.35)] block mt-1">
                  MEDIOCRIDADE.
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#DFBF73] to-transparent mx-auto lg:mx-0 mt-4" />
            </div>

            {/* Direct Offer Clarity */}
            <p className="text-base sm:text-lg text-neutral-200 max-w-xl font-light leading-relaxed">
              {SAVAGE_OFFER_CORE}
            </p>

            {/* Actions & WhatsApp Direction Microcopy */}
            <div className="flex flex-col items-center lg:items-start gap-3 w-full sm:w-auto pt-1">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <StatefulButton
                  onClick={() => {
                    window.open(SAVAGE_LINKS.whatsapp, '_blank', 'noopener,noreferrer');
                  }}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#FAF1D2] via-[#DFBF73] to-[#C6A85B] text-[#050505] font-bold uppercase tracking-widest text-xs sm:text-sm px-8 py-4 shadow-[0_0_35px_rgba(198,168,91,0.35)] hover:ring-[#DFBF73]"
                >
                  QUERO FAZER PARTE DA SAVAGE
                </StatefulButton>

                <a
                  href="#manifesto"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-neutral-300 hover:text-[#DFBF73] bg-black/40 hover:bg-black/80 border border-neutral-800 hover:border-[#C6A85B]/40 rounded transition-all"
                >
                  <span>CONHECER A SAVAGE</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#C6A85B]" />
                </a>
              </div>

              {/* Discreet Conversion Microcopy */}
              <span className="text-[11px] font-mono text-[#DFBF73]/80 tracking-wider">
                Você será direcionado ao WhatsApp oficial da Savage.
              </span>
            </div>

            {/* Quick Micro Proofs */}
            <div className="pt-5 border-t border-neutral-900 w-full flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="text-[#DFBF73]">✦</span>
                <span>5.063+ NO INSTAGRAM</span>
              </span>
              <span className="hidden sm:inline text-neutral-700">|</span>
              <span className="flex items-center gap-2">
                <span className="text-[#DFBF73]">✦</span>
                <span>MEMBROS DE 14 A 20+ ANOS</span>
              </span>
              <span className="hidden sm:inline text-neutral-700">|</span>
              <span className="flex items-center gap-2">
                <span className="text-[#DFBF73]">✦</span>
                <span>DO ZERO À ESCALA</span>
              </span>
            </div>
          </div>

          {/* Right Column: High-Impact Editorial Portrait with Smooth Parallax */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end shrink-0">
            <motion.div
              style={{ y: reducedMotion ? 0 : smoothY }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[380px] xl:max-w-[410px] aspect-[3/4] rounded-2xl overflow-hidden border border-[#C6A85B]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(198,168,91,0.15)] group"
            >
              <img
                src={founderPhoto}
                alt="João Ricardo - Savage Community"
                className="w-full h-full object-cover object-center filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Scrims */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#C6A85B]/20 rounded-2xl pointer-events-none" />

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-6 inset-x-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#DFBF73] block mb-1">
                    FUNDADOR
                  </span>
                  <div className="text-xl font-serif-luxury font-bold text-white tracking-wide">
                    JOÃO RICARDO
                  </div>
                  <div className="text-xs text-neutral-400 font-light mt-0.5">
                    À frente da Savage Community
                  </div>
                </div>
                <SavageLogo size={44} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
