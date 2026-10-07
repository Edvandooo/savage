export default function EagleVideoTransition() {
  return (
    <section className="relative w-full bg-[#050505] py-16 sm:py-24 overflow-hidden border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-black shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
          {/* Eagle Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
          >
            <source src="/eagle.mp4" type="video/mp4" />
          </video>

          {/* Minimalist Subtle Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/60 pointer-events-none" />

          {/* Discreet Cinematic Overlay Text */}
          <div className="absolute bottom-6 sm:bottom-10 inset-x-0 text-center px-4 pointer-events-none">
            <span className="text-xs sm:text-sm font-serif-luxury uppercase tracking-[0.35em] text-[#EADBAB] font-semibold drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              “VOCÊ NÃO PRECISA SER COMUM.”
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
