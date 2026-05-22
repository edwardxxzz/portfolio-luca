'use client';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - solid gradient, no image */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-mid to-charcoal" />

      {/* Subtle decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-crimson/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson/[0.03] rounded-full blur-[200px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-crimson/20 bg-crimson/[0.08] mb-10 backdrop-blur-sm">
          <span className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
          <span className="text-sm text-crimson-light font-medium tracking-wider uppercase">
            Professor de História
          </span>
        </div>

        {/* Main Title - only the name, big and bold */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight mb-6 leading-[1]">
          <span className="text-foreground">Luca</span>
        </h1>

        {/* Subtitle line - professional description, not equated to the name */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed font-light">
          Professor de História especializado em História do Amazonas,
          <br className="hidden sm:block" />
          com atuação em educação popular e pensamento crítico.
        </p>

        {/* Secondary info line */}
        <p className="text-base sm:text-lg text-muted-foreground/60 max-w-2xl mx-auto mb-14 leading-relaxed font-light">
          UFAM &bull; PUC-MG &bull; Manaus, Amazonas
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#jornada"
            className="group px-8 py-4 bg-crimson hover:bg-crimson-light text-white font-semibold rounded-xl transition-all duration-300 glow-crimson hover:scale-105 text-center w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span>Conheça Minha Jornada</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <path d="M4 9h10M10 5l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#contato"
            className="px-8 py-4 border border-white/15 hover:border-gold/40 text-foreground hover:text-gold-light font-semibold rounded-xl transition-all duration-300 text-center w-full sm:w-auto backdrop-blur-sm"
          >
            Entre em Contato
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-2xl mx-auto">
          {[
            { value: '7+', label: 'Anos em sala de aula' },
            { value: '5+', label: 'Instituições' },
            { value: '1000+', label: 'Alunos impactados' },
            { value: 'Pós', label: 'Especialização' },
          ].map((stat) => (
            <div key={stat.label} className="text-center group cursor-default">
              <div className="text-3xl sm:text-4xl font-black text-crimson-light group-hover:text-gold-light transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1.5 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-muted-foreground/60 tracking-[0.2em] uppercase font-medium">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground/40">
          <path d="M8 2v12M3 9l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
