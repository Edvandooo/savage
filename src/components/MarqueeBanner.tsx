export default function MarqueeBanner() {
  const phrases = [
    'SAVAGE COMMUNITY 🐍',
    'MENTALIDADE FORTE',
    'DISCIPLINA DIÁRIA',
    'CONSTRUINDO UMA GERAÇÃO ACIMA DA MÉDIA',
    'O AMBIENTE MOLDA CARÁTER',
    'RECUSAR A MEDIOCRIDADE',
    'UMA VIDA ACIMA DA MÉDIA',
    'ESCOLHER EVOLUIR TODOS OS DIAS',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#070709] border-y border-[#C6A85B]/20 py-4 select-none">
      <div className="flex w-max animate-marquee space-x-8 text-xs font-serif-luxury uppercase tracking-[0.25em] text-neutral-400">
        {[...phrases, ...phrases, ...phrases].map((phrase, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span
              className={
                phrase.includes('SAVAGE') || phrase.includes('MEDIOCRIDADE')
                  ? 'gold-gradient-text font-bold'
                  : 'text-neutral-300'
              }
            >
              {phrase}
            </span>
            <span className="text-[#C6A85B]/40 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
