import { useState } from 'react';
import { FAQ_DATA, SAVAGE_LINKS } from '../data/savageData';
import { ChevronDown, MessageSquare } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-36 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] font-semibold block mb-3">
            CLAREZA & RESPOSTAS REAIS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold uppercase tracking-tight text-white leading-[1.08]">
            PERGUNTAS <br />
            <span className="gold-gradient-text">& RESPOSTAS.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light mt-3">
            Respostas oficiais dadas pela comunidade nas suas publicações e diretrizes.
          </p>
        </div>

        {/* Minimalist Editorial Accordion */}
        <div className="divide-y divide-neutral-850 border-y border-neutral-850">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 sm:py-8 transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-start justify-between gap-6 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono font-bold text-[#C6A85B] mt-1">0{idx + 1}</span>
                    <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-white group-hover:text-[#DFBF73] transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`p-1.5 rounded-full text-[#C6A85B] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#FAF1D2]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pl-8 sm:pl-9 pr-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-[#09090D] border border-[#C6A85B]/25 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base font-serif-luxury font-bold text-white uppercase tracking-wider">
              Ainda tem alguma dúvida sobre a entrada?
            </h4>
            <p className="text-xs text-neutral-400 font-light mt-1">
              Fale diretamente com a equipe para consultar condições oficiais.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1.5">
            <a
              href={SAVAGE_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#DFBF73] to-[#C6A85B] hover:brightness-110 rounded transition-all shadow-[0_0_20px_rgba(198,168,91,0.25)] whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              <span>Falar com o Time</span>
            </a>
            <span className="text-[10px] font-mono text-[#DFBF73]/80 tracking-wider">
              Você será direcionado ao WhatsApp oficial da Savage.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
