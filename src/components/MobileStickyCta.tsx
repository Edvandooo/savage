import { ArrowUpRight } from 'lucide-react';
import { SAVAGE_LINKS } from '../data/savageData';

export default function MobileStickyCta() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-[#050505]/95 backdrop-blur-xl border-t border-[#C6A85B]/25 shadow-[0_-5px_30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <a
          href={SAVAGE_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-[#FAF1D2] via-[#DFBF73] to-[#C6A85B] active:scale-[0.98] text-[#050505] text-xs font-bold uppercase tracking-widest rounded shadow-[0_0_20px_rgba(198,168,91,0.35)]"
        >
          <span>FAZER PARTE DA SAVAGE 🐍</span>
          <ArrowUpRight className="w-4 h-4 text-[#050505]" />
        </a>
      </div>
    </div>
  );
}
