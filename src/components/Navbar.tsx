import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SAVAGE_LINKS } from '../data/savageData';
import SavageLogo from './SavageLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'O Que É', href: '#o-que-e' },
    { label: 'Pilares', href: '#pilares' },
    { label: 'Comunidade', href: '#comunidade' },
    { label: 'João Ricardo', href: '#fundador' },
    { label: 'Resultados', href: '#provas' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#050505]/90 border-b border-[#C6A85B]/15 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single brand element */}
        <a
          href="#"
          className="flex items-center gap-3 group transition-transform duration-300"
        >
          <SavageLogo size={40} />
          <div className="flex flex-col">
            <span className="font-serif-luxury font-bold tracking-[0.2em] text-white text-base sm:text-lg group-hover:text-[#DFBF73] transition-colors leading-none">
              SAVAGE
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-[#C6A85B] uppercase leading-none mt-1">
              COMMUNITY
            </span>
          </div>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#DFBF73] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#C6A85B] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action button in antique gold */}
        <div className="flex items-center gap-3">
          <a
            href={SAVAGE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#050505] bg-gradient-to-r from-[#DFBF73] to-[#C6A85B] hover:from-[#FAF1D2] hover:to-[#DFBF73] rounded transition-all shadow-[0_0_20px_rgba(198,168,91,0.25)] hover:shadow-[0_0_25px_rgba(198,168,91,0.45)] whitespace-nowrap"
          >
            <span>Fazer Parte</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-[#DFBF73] focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#C6A85B]/20 bg-[#08080A] px-6 py-6 space-y-5">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider font-medium text-neutral-200 hover:text-[#DFBF73] py-1 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href={SAVAGE_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#DFBF73] to-[#C6A85B] rounded shadow-[0_0_20px_rgba(198,168,91,0.3)]"
            >
              <span>Fazer Parte da Savage 🐍</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
