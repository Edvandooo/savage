import { SAVAGE_LINKS } from '../data/savageData';
import SavageLogo from './SavageLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#C6A85B]/20 py-16 text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-neutral-900 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SavageLogo size={42} />
              <div>
                <span className="font-serif-luxury font-bold tracking-[0.2em] text-white text-base block">
                  SAVAGE COMMUNITY
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-[#C6A85B] uppercase">
                  MOVIMENTO OFICIAL
                </span>
              </div>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-light">
              Mais do que uma comunidade, um movimento de transformação pessoal e profissional para jovens e adultos que recusam a mediocridade.
            </p>
            <div className="pt-2 text-[11px] font-mono text-neutral-500">
              Canal de Atendimento: <span className="text-[#DFBF73]">{SAVAGE_LINKS.contactDisplay}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] block mb-2 font-semibold">
              MAPA DA PÁGINA
            </span>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider">
              <li>
                <a href="#o-que-e" className="hover:text-[#DFBF73] transition-colors">O Que É</a>
              </li>
              <li>
                <a href="#pilares" className="hover:text-[#DFBF73] transition-colors">Os Pilares</a>
              </li>
              <li>
                <a href="#comunidade" className="hover:text-[#DFBF73] transition-colors">Comunidade</a>
              </li>
              <li>
                <a href="#fundador" className="hover:text-[#DFBF73] transition-colors">João Ricardo</a>
              </li>
              <li>
                <a href="#provas" className="hover:text-[#DFBF73] transition-colors">Resultados</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#DFBF73] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Official Channels */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] block mb-2 font-semibold">
              CANAIS OFICIAIS
            </span>
            <div className="space-y-2 text-xs">
              <a
                href={SAVAGE_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-300 hover:text-[#DFBF73] transition-colors font-mono"
              >
                Instagram: {SAVAGE_LINKS.instagramHandle}
              </a>
              <a
                href={SAVAGE_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-300 hover:text-[#DFBF73] transition-colors font-mono"
              >
                Atendimento Oficial via WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-[11px] text-neutral-400 leading-relaxed font-light">
          <p>
            <strong>Aviso Legal & Resultados:</strong> Resultados apresentados são exemplos compartilhados pela comunidade e não representam garantia de resultados futuros. Resultados dependem de diversos fatores, incluindo execução, experiência, contexto e dedicação individual. As condições de adesão e acesso devem ser verificadas diretamente com o canal oficial da Savage Community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-neutral-400 font-mono text-[10px]">
            <span>© {currentYear} Savage Community. Todos os direitos reservados.</span>
            <span className="text-[#C6A85B]">CONSTRUINDO UMA GERAÇÃO ACIMA DA MÉDIA. 🐍</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
