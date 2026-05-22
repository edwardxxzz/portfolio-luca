'use client';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-banner.png"
          alt="Banner temático de história e rock"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-crimson/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/8 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-crimson/30 bg-crimson/10 mb-8">
          <span className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
          <span className="text-sm text-crimson-light font-medium tracking-wide uppercase">
            Professor de História
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1]">
          <span className="text-foreground">Luca</span>
          <br />
          <span className="text-gradient-crimson">História & Paixão</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Transformando salas de aula em palcos de conhecimento.
          <br className="hidden sm:block" />
          Do Amazonas ao mundo — com a energia do rock e o compromisso
          com a educação popular.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#jornada"
            className="px-8 py-4 bg-crimson hover:bg-crimson-light text-white font-semibold rounded-xl transition-all duration-300 glow-crimson hover:scale-105 text-center w-full sm:w-auto"
          >
            Conheça Minha Jornada
          </a>
          <a
            href="#contato"
            className="px-8 py-4 border border-white/20 hover:border-gold/50 text-foreground hover:text-gold-light font-semibold rounded-xl transition-all duration-300 text-center w-full sm:w-auto"
          >
            Entre em Contato
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { value: '7+', label: 'Anos de sala' },
            { value: '5+', label: 'Instituições' },
            { value: '1000+', label: 'Alunos impactados' },
            { value: 'Pós', label: 'Especialização' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-crimson-light">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
          <path d="M10 4v12M4 10l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
