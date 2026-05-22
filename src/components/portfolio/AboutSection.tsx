'use client';

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 sm:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <span className="text-gold font-mono text-sm tracking-[0.15em] uppercase font-medium">Sobre Mim</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 tracking-tight leading-[1.1]">
            Quem é <span className="text-gradient-crimson">Luca</span>?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-2xl shadow-black/30">
              <img
                src="/profile-placeholder.png"
                alt="Foto de perfil de Luca — Professor de História"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-1.5 rounded-2xl border border-crimson/15 -z-10" />
            {/* Floating badge — professional focus */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-charcoal-light/95 backdrop-blur-sm border border-crimson/20 rounded-xl px-5 py-3.5 glow-crimson">
              <div className="text-gold-light font-bold text-base leading-tight">História do</div>
              <div className="text-crimson-light font-bold text-base leading-tight">Amazonas</div>
              <div className="text-muted-foreground text-[10px] mt-1 tracking-wider uppercase">Diferencial</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-7">
            <p className="text-lg sm:text-xl text-muted-foreground leading-[1.8] font-light">
              Sou <strong className="text-foreground font-semibold">professor de História</strong> formado pela 
              Universidade Federal do Amazonas (UFAM), com licenciatura plena e pós-graduação em 
              Ensino de História pela PUC-MG. Minha trajetória é marcada pelo compromisso com a
              <strong className="text-crimson-light font-semibold"> educação popular</strong> e pela certeza de que 
              o conhecimento transforma vidas.
            </p>

            <p className="text-lg sm:text-xl text-muted-foreground leading-[1.8] font-light">
              Atuo em <strong className="text-foreground font-semibold">cursinhos populares e escolas</strong>, 
              onde leciono História, Filosofia e Sociologia. Acredito que a educação de qualidade 
              não deve ser privilégio — por isso, dedico parte da minha carreira a instituições que 
              cobram valores acessíveis, ampliando o acesso de jovens periféricos ao ensino superior.
            </p>

            <p className="text-lg sm:text-xl text-muted-foreground leading-[1.8] font-light">
              Meu diferencial? O <strong className="text-gold-light font-semibold">domínio da História do Amazonas</strong>,
              além da História do Brasil e Global. Minhas aulas são conhecidas pela 
              <strong className="text-foreground font-semibold"> oratória envolvente</strong> e pela capacidade de 
              conectar passado e presente, fazendo cada aluno sentir que a história é viva e 
              essencial para compreender o mundo contemporâneo.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-5">
              {[
                'Educação Popular',
                'Oratória',
                'História do Amazonas',
                'Pensamento Crítico',
                'Compromisso Social',
                'Pai',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2.5 bg-secondary/40 border border-white/[0.06] rounded-full text-sm text-muted-foreground hover:border-crimson/30 hover:text-foreground transition-all duration-300 cursor-default font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Amazon Landscape Banner */}
        <div className="mt-20 relative rounded-2xl overflow-hidden group">
          <img
            src="/amazon-landscape.png"
            alt="Paisagem do Rio Amazonas ao pôr do sol"
            className="w-full h-48 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-transparent flex items-center">
            <div className="px-8 sm:px-14">
              <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-3 tracking-tight">
                Raízes Amazônicas
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed font-light">
                Nascido e criado no Amazonas, trago a força da floresta e a resiliência do povo 
                norte-brasileiro para cada aula. A História do Amazonas não é apenas conteúdo — é parte de quem sou.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
