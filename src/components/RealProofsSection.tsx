import { REAL_COMMUNITY_PROOFS, SAVAGE_STATS, SAVAGE_LINKS } from '../data/savageData';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { Button as StatefulButton } from '@/components/ui/stateful-button';
import { ImageGenerationLoader } from '@/components/ui/image-generation-loader';

export default function RealProofsSection() {
  return (
    <section id="provas" className="py-28 sm:py-40 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Statistics Ticker / Stats Strip */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C6A85B] font-semibold block mb-2">
              MOVIMENTO EM EXPANSÃO
            </span>
            <h2 className="text-2xl sm:text-5xl font-serif-luxury font-bold uppercase tracking-tight text-white">
              UMA COMUNIDADE QUE <br />
              <span className="gold-gradient-text">JÁ ESTÁ EM MOVIMENTO.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {SAVAGE_STATS.map((stat, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[#09090D] border border-[#C6A85B]/20 text-center flex flex-col justify-center items-center hover:border-[#DFBF73]/40 transition-colors"
              >
                <div className="text-3xl sm:text-5xl font-serif-luxury font-black text-white tracking-tight mb-2">
                  <span className="gold-gradient-text">{stat.value}</span>
                  {stat.suffix && <span className="text-xs sm:text-sm font-mono text-[#DFBF73] ml-1.5">{stat.suffix}</span>}
                </div>
                <div className="text-xs sm:text-sm font-serif-luxury font-bold text-neutral-200 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-neutral-400 font-light leading-tight">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] font-semibold block mb-3">
            EVIDÊNCIAS & PRÁTICA
          </span>
          <h3 className="text-3xl sm:text-6xl font-serif-luxury font-bold uppercase tracking-tight text-white mb-4">
            RESULTADOS REAIS <br />
            <span className="gold-gradient-text">DE QUEM COLOCA EM PRÁTICA.</span>
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Resultados variam de pessoa para pessoa. O conteúdo e a comunidade oferecem conhecimento, orientação e ambiente para execução.
          </p>
        </div>

        {/* Featured Case: R$ 7.234,55 Report Card with official Aceternity 3D Card Effect */}
        <CardContainer containerClassName="py-0 mb-20 w-full" className="w-full max-w-4xl mx-auto">
          <CardBody className="p-8 sm:p-14 rounded-3xl bg-[#0A0A0E] border border-[#C6A85B]/40 shadow-[0_20px_60px_rgba(198,168,91,0.15)] relative overflow-hidden group w-full h-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_rgba(198,168,91,0.15)_0%,_transparent_70%)] pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#C6A85B]/20">
              <CardItem translateZ="30" className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded bg-[#C6A85B] text-black font-bold">
                  PROVA SOCIAL OFICIAL
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  MÊS DE SETEMBRO
                </span>
              </CardItem>
              <CardItem translateZ="20" className="text-xs font-mono text-[#DFBF73] flex items-center gap-1.5">
                <span>✦ APLICAÇÃO DA MENTORIA</span>
              </CardItem>
            </div>

            <div className="my-10 text-center sm:text-left">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-400 block mb-2">
                FATURAMENTO LÍQUIDO REPORTADO
              </span>
              <CardItem translateZ="60">
                <div className="text-5xl sm:text-7xl lg:text-8xl font-serif-luxury font-extrabold text-white tracking-tight flex items-baseline justify-center sm:justify-start gap-3">
                  <span className="text-[#C6A85B] text-3xl sm:text-5xl">R$</span>
                  <span className="gold-gradient-text">7.234,55</span>
                </div>
              </CardItem>
            </div>

            {/* Official Aceternity Image Generation Loader for Verified Protocol */}
            <CardItem translateZ="35" className="w-full mb-8">
              <div className="relative overflow-hidden rounded-xl border border-[#C6A85B]/30 bg-black/60 p-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#DFBF73] relative z-10 mb-2">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DFBF73] animate-pulse" />
                    <span>VALIDAÇÃO DE RESULTADO EM TEMPO REAL</span>
                  </span>
                  <span className="text-neutral-500 uppercase tracking-widest">SAVAGE PROTOCOL</span>
                </div>
                <div className="relative h-12 w-full overflow-hidden rounded-lg bg-neutral-950/80 border border-neutral-900">
                  <ImageGenerationLoader
                    effect="shimmer"
                    text="SAVAGE"
                    cellSize={3}
                    gap={1}
                    bandHeight={32}
                    colors={["#C6A85B", "#050505"]}
                  />
                </div>
              </div>
            </CardItem>

            <CardItem translateZ="45" as="blockquote" className="p-6 sm:p-8 rounded-2xl bg-black/80 border border-[#C6A85B]/20 text-neutral-200 text-base sm:text-xl font-serif-luxury leading-relaxed mb-8 w-full">
              “Resultado do mês de setembro aplicando o conteúdo da mentoria, SAVAGE ATÉ O FIM.”
            </CardItem>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-neutral-400 pt-6 border-t border-white/[0.04]">
              <span>Relato voluntário compartilhado no ecossistema da comunidade</span>
              <CardItem translateZ="25" className="text-[#C6A85B]">EXECUÇÃO COMPROVADA</CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* 3 Secondary Real Verifications with Official Aceternity 3D Card Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REAL_COMMUNITY_PROOFS.slice(1).map((proof) => (
            <CardContainer key={proof.id} containerClassName="py-0 h-full w-full" className="h-full w-full">
              <CardBody className="p-8 rounded-2xl bg-[#09090D] border border-neutral-850 hover:border-[#C6A85B]/40 transition-colors flex flex-col justify-between h-full w-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <CardItem translateZ="20" className="text-[10px] font-mono text-[#C6A85B] uppercase font-bold tracking-widest">{proof.tag}</CardItem>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase">{proof.badge}</span>
                  </div>

                  <CardItem translateZ="30" as="h4" className="text-lg font-serif-luxury font-bold text-white mb-2">{proof.title}</CardItem>

                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-light">
                    {proof.context}
                  </p>

                  <CardItem translateZ="40" className="p-4 rounded-xl bg-black/60 border border-neutral-800 text-xs text-neutral-300 font-serif-luxury italic mb-4 w-full">
                    “{proof.quote}”
                  </CardItem>
                </div>

                <div className="pt-4 border-t border-neutral-900 text-[11px] text-neutral-500 font-mono flex items-center justify-between">
                  <span>{proof.highlight}</span>
                  <CardItem translateZ="20" className="text-[#C6A85B]">VALIDADO ✦</CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* Responsible Disclaimer */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-black/40 border border-neutral-850 text-center mb-20">
          <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
            <strong>Aviso de Responsabilidade:</strong> Resultados apresentados são exemplos compartilhados pela comunidade e não representam garantia de resultados futuros. Resultados dependem de diversos fatores, incluindo execução, experiência, contexto e dedicação individual.
          </p>
        </div>

        {/* Intermediate CTA with official Aceternity Stateful Button */}
        <div className="max-w-2xl mx-auto text-center p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-[#101015] to-[#050505] border border-[#C6A85B]/30 shadow-[0_10px_40px_rgba(198,168,91,0.1)]">
          <h4 className="text-2xl sm:text-4xl font-serif-luxury font-bold uppercase tracking-tight text-white mb-3">
            VOCÊ ESTÁ PRONTO PARA EVOLUIR?
          </h4>
          <p className="text-xs sm:text-sm text-neutral-400 mb-8 font-light max-w-md mx-auto leading-relaxed">
            Dê o primeiro passo para sair da inércia e entrar no grupo de quem busca uma vida acima da média.
          </p>
          <div className="flex flex-col items-center gap-3">
            <StatefulButton
              onClick={() => {
                window.open(SAVAGE_LINKS.whatsapp, '_blank', 'noopener,noreferrer');
              }}
              className="bg-gradient-to-r from-[#FAF1D2] via-[#DFBF73] to-[#C6A85B] text-[#050505] font-bold uppercase tracking-widest text-xs sm:text-sm px-9 py-4 shadow-[0_0_30px_rgba(198,168,91,0.35)] hover:ring-[#DFBF73]"
            >
              QUERO CONHECER A SAVAGE
            </StatefulButton>
            <span className="text-[11px] font-mono text-[#DFBF73]/80 tracking-wider">
              Você será direcionado ao WhatsApp oficial da Savage.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
