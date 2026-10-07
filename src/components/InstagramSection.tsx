import { Instagram, ArrowUpRight } from 'lucide-react';
import { SAVAGE_LINKS } from '../data/savageData';
import SavageLogo from './SavageLogo';

export default function InstagramSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#070709] border-b border-neutral-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="p-8 sm:p-14 rounded-3xl bg-[#09090D] border border-[#C6A85B]/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
            <SavageLogo size={76} />

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-[#C6A85B]/30 text-xs font-mono text-[#DFBF73]">
                <Instagram className="w-3.5 h-3.5" />
                <span>PERFIL OFICIAL</span>
                <span className="text-neutral-600">·</span>
                <span className="text-white font-bold">5.063 SEGUIDORES</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white tracking-wide">
                  {SAVAGE_LINKS.instagramHandle}
                </h3>
                <p className="text-sm font-serif-luxury text-[#C6A85B] font-semibold mt-0.5">
                  🐍 SAVAGE
                </p>
              </div>

              <div className="text-xs sm:text-sm text-neutral-400 font-light space-y-1">
                <p>Mentalidade forte. Disciplina diária.</p>
                <p>Construindo uma geração acima da média.</p>
                <p className="text-[#DFBF73] font-medium pt-1">⬇️ Faça parte.</p>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3.5 w-full sm:w-auto">
            <a
              href={SAVAGE_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-widest text-[#EADBAB] bg-black hover:bg-neutral-900 border border-[#C6A85B]/40 hover:border-[#DFBF73] rounded transition-all whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-[#C6A85B]" />
              <span>SEGUIR NO INSTAGRAM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex flex-col items-center gap-1.5 w-full sm:w-auto">
              <a
                href={SAVAGE_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#DFBF73] to-[#C6A85B] hover:brightness-110 rounded transition-all shadow-[0_0_25px_rgba(198,168,91,0.3)] whitespace-nowrap"
              >
                <span>ENTRAR EM CONTATO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-[10px] font-mono text-[#DFBF73]/80 tracking-wider">
                Você será direcionado ao WhatsApp oficial da Savage.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
