'use client';

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-gold font-mono text-sm tracking-widest uppercase">Sobre Mim</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 tracking-tight">
            Quem é <span className="text-gradient-crimson">Luca</span>?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="/profile-placeholder.png"
                alt="Foto de perfil de Luca - Professor de História"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-1 rounded-2xl border border-crimson/20 -z-10" />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-charcoal-light border border-crimson/30 rounded-xl px-4 py-3 glow-crimson">
              <div className="text-crimson-light font-bold text-lg">🎸 Rock</div>
              <div className="text-muted-foreground text-xs">& História</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou <strong className="text-foreground">professor de História</strong> formado pela 
              Universidade Federal do Amazonas (UFAM), com licenciatura plena e pós-graduação em 
              Ensino de História pela PUC-MG. Minha trajetória é marcada pelo compromisso com a 
              <strong className="text-crimson-light"> educação popular</strong> e pela certeza de que 
              o conhecimento transforma vidas.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Atuo em <strong className="text-foreground">cursinhos populares e escolas</strong>, 
              onde leciono História, Filosofia e Sociologia. Acredito que a educação de qualidade 
              não deve ser privilégio — por isso, dedico parte da minha carreira a instituições que 
              cobram valores acessíveis, ampliando o acesso de jovens periféricos ao ensino superior.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Meu diferencial? O <strong className="text-gold-light">domínio da História do Amazonas</strong>,
              além da História do Brasil e Global. Minhas aulas são conhecidas pela 
              <strong className="text-foreground"> oratória envolvente</strong> e pela capacidade de 
              conectar passado e presente, fazendo cada aluno sentir que a história é viva — como 
              um bom solo de guitarra.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                '🎵 Amante de Rock',
                '🎸 Guitarrista',
                '🤝 Educação Popular',
                '🗣️ Oratória',
                '🌿 História do Amazonas',
                '👨‍👧 Pai',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-secondary/50 border border-white/5 rounded-full text-sm text-muted-foreground hover:border-crimson/30 hover:text-foreground transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Amazon Landscape Banner */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <img
            src="/amazon-landscape.png"
            alt="Paisagem do Rio Amazonas ao pôr do sol"
            className="w-full h-48 sm:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent flex items-center">
            <div className="px-8 sm:px-12">
              <h3 className="text-xl sm:text-3xl font-black text-foreground mb-2">
                Raízes Amazônicas
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md">
                Nascido e criado no Amazonas, trago a força da floresta e a resiliência do povo 
                norte-brasileiro para cada aula que dou.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
