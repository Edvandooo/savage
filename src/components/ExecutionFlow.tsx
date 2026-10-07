export default function ExecutionFlow() {
  const steps = [
    { num: '01', title: 'APRENDER' },
    { num: '02', title: 'APLICAR' },
    { num: '03', title: 'ERRAR' },
    { num: '04', title: 'CORRIGIR' },
    { num: '05', title: 'EVOLUIR' },
  ];

  return (
    <div className="py-8 sm:py-10 bg-[#070709] border-y border-[#C6A85B]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6A85B] font-semibold block">
              LOOP DE EXECUÇÃO
            </span>
            <span className="text-sm font-serif-luxury font-bold text-white tracking-wide">
              Não é só consumir. É colocar em prática.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono uppercase tracking-widest">
            {steps.map((st, i) => (
              <div key={st.num} className="flex items-center gap-2 sm:gap-4">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <span className="text-[#C6A85B] text-[10px]">{st.num}.</span>
                  <span className={i === 4 ? 'gold-gradient-text font-bold' : ''}>{st.title}</span>
                </span>
                {i < steps.length - 1 && <span className="text-neutral-700">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
