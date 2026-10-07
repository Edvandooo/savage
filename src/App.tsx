import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import Manifesto from './components/Manifesto';
import WhatIsSavage from './components/WhatIsSavage';
import EnvironmentSection from './components/EnvironmentSection';
import EagleVideoTransition from './components/EagleVideoTransition';
import TargetAudience from './components/TargetAudience';
import ZeroToScale from './components/ZeroToScale';
import ExecutionFlow from './components/ExecutionFlow';
import WhatYouFind from './components/WhatYouFind';
import RealProofsSection from './components/RealProofsSection';
import FounderSection from './components/FounderSection';
import CommunitySection from './components/CommunitySection';
import SavageParallaxShowcase from './components/SavageParallaxShowcase';
import FaqSection from './components/FaqSection';
import InstagramSection from './components/InstagramSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import MobileStickyCta from './components/MobileStickyCta';

import founderPhoto from './assets/images/founder_joao_portrait_1791327287646.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 flex flex-col font-sans selection:bg-[#C6A85B] selection:text-black pb-14 md:pb-0">
      <Navbar />

      <main className="flex-1">
        {/* 01: Hero com oferta clara, foto real do João e microcópia do WhatsApp */}
        <Hero founderPhoto={founderPhoto} />

        {/* 02: Marquee ticker - Gold & Black */}
        <MarqueeBanner />

        {/* 03: Manifesto ("Não é sobre ser perfeito. É sobre evoluir.") */}
        <Manifesto />

        {/* 04: O Que É a Savage ("Savage = Selvagem") */}
        <WhatIsSavage />

        {/* 05: O Ambiente Molda o Caráter */}
        <EnvironmentSection />

        {/* 06: Transição Cinematográfica com a Águia */}
        <EagleVideoTransition />

        {/* 07: Pra Quem É a Savage */}
        <TargetAudience />

        {/* 08: Começando do Zero */}
        <ZeroToScale />

        {/* 09: Transição Ágil do Loop de Execução */}
        <ExecutionFlow />

        {/* 10: O Que Você Encontra (9 Temas Consolidados) */}
        <WhatYouFind />

        {/* 11: Provas Reais & Faturamento R$ 7.234,55 + CTA com microcópia */}
        <RealProofsSection />

        {/* 12: Por Trás da Savage: João Ricardo */}
        <FounderSection founderImage={founderPhoto} />

        {/* 13: A Comunidade - Interação Real de Mentalidade */}
        <CommunitySection />

        {/* 14: Aceternity HeroParallax Oficial - Ecossistema Savage */}
        <SavageParallaxShowcase />

        {/* 15: FAQ Focado em Conversão */}
        <FaqSection />

        {/* 15: Instagram Oficial @savagecommunity._ */}
        <InstagramSection />

        {/* 16: CTA Final - Decisão & WhatsApp Oficial */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA */}
      <MobileStickyCta />
    </div>
  );
}
