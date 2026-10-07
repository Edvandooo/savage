import { HeroParallax } from '@/components/ui/hero-parallax';
import { SAVAGE_LINKS } from '../data/savageData';

import founderImg from '../assets/images/founder_joao_portrait_1791327287646.jpg';
import heroImg from '../assets/images/hero_cinematic_savage_1791327244214.jpg';
import brotherhoodImg from '../assets/images/savage_brotherhood_1791327254853.jpg';
import disciplineImg from '../assets/images/savage_discipline_training_1791327303734.jpg';

export const savageProducts = [
  {
    title: "RECUSAR A MEDIOCRIDADE",
    link: SAVAGE_LINKS.whatsapp,
    thumbnail: heroImg,
  },
  {
    title: "MENTALIDADE FORTE",
    link: "#manifesto",
    thumbnail: founderImg,
  },
  {
    title: "DISCIPLINA DIÁRIA",
    link: "#pilares",
    thumbnail: disciplineImg,
  },
  {
    title: "O AMBIENTE MOLDA O CARÁTER",
    link: "#comunidade",
    thumbnail: brotherhoodImg,
  },
  {
    title: "CONSTRUINDO UMA GERAÇÃO",
    link: SAVAGE_LINKS.instagram,
    thumbnail: founderImg,
  },
  {
    title: "DO ZERO À ESCALA",
    link: "#provas",
    thumbnail: heroImg,
  },
  {
    title: "JOÃO RICARDO — MENTORIA",
    link: "#fundador",
    thumbnail: founderImg,
  },
  {
    title: "COMUNIDADE & IRMANDADE",
    link: "#comunidade",
    thumbnail: brotherhoodImg,
  },
  {
    title: "FATURAMENTO COMPROVADO",
    link: "#provas",
    thumbnail: heroImg,
  },
  {
    title: "TREINO & FORÇA FÍSICA",
    link: "#pilares",
    thumbnail: disciplineImg,
  },
  {
    title: "EXECUÇÃO NO MERCADO DIGITAL",
    link: "#pilares",
    thumbnail: brotherhoodImg,
  },
  {
    title: "ESTRATÉGIAS DIGITAIS",
    link: "#pilares",
    thumbnail: heroImg,
  },
  {
    title: "NETWORKING DE ALTO NÍVEL",
    link: "#comunidade",
    thumbnail: brotherhoodImg,
  },
  {
    title: "ROTINA DE ALTO PADRÃO",
    link: "#pilares",
    thumbnail: disciplineImg,
  },
  {
    title: "SAVAGE COMMUNITY 🐍",
    link: SAVAGE_LINKS.whatsapp,
    thumbnail: founderImg,
  },
];

export default function SavageParallaxShowcase() {
  return (
    <section className="relative bg-[#050505] border-b border-neutral-900 overflow-hidden">
      <HeroParallax
        products={savageProducts}
        headerTitle={
          <span className="text-3xl sm:text-6xl md:text-7xl font-serif-luxury font-bold uppercase tracking-tight text-white leading-[1.05]">
            O ECOSSISTEMA <br />
            <span className="gold-gradient-text">SAVAGE COMMUNITY.</span>
          </span>
        }
        headerDescription={
          <span className="text-sm sm:text-lg text-neutral-300 font-light leading-relaxed block max-w-2xl mt-4">
            Uma imersão contínua em mentalidade, negócios, disciplina e execução prática. Conheça as frentes reais que formam o nosso movimento.
          </span>
        }
      />
    </section>
  );
}
