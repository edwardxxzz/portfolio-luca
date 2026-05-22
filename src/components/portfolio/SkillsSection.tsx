'use client';

const skills = [
  {
    category: 'Disciplinas',
    items: [
      { name: 'História do Amazonas', level: 100, highlight: true },
      { name: 'História do Brasil', level: 95 },
      { name: 'História Global / Mundial', level: 90 },
      { name: 'Filosofia', level: 85 },
      { name: 'Sociologia', level: 85 },
    ],
  },
  {
    category: 'Competências Docentes',
    items: [
      { name: 'Oratória e Comunicação', level: 98, highlight: true },
      { name: 'Aulas Expositivas e Dialógicas', level: 95 },
      { name: 'Elaboração de Material Avaliativo', level: 92 },
      { name: 'Didática Adaptativa', level: 90 },
      { name: 'Ensino Médio e Fundamental II', level: 95 },
    ],
  },
  {
    category: 'Valores e Diferenciais',
    items: [
      { name: 'Educação Popular e Acessível', level: 100, highlight: true },
      { name: 'Pensamento Crítico Amplo', level: 95 },
      { name: 'Conexão com Alunos', level: 92 },
      { name: 'Compromisso Social', level: 100 },
      { name: 'Atualização Constante', level: 88 },
    ],
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  'Disciplinas': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-light">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8M8 11h6" />
    </svg>
  ),
  'Competências Docentes': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-light">
      <path d="M11 1L3 6v5c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-5z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  'Valores e Diferenciais': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-light">
      <path d="M11 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
      <path d="M11 8v4M11 14h.01" />
    </svg>
  ),
};

export function SkillsSection() {
  return (
    <section id="habilidades" className="relative py-24 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="text-gold font-mono text-sm tracking-[0.15em] uppercase font-medium">
            Competências
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 tracking-tight leading-[1.1]">
            Minhas <span className="text-gradient-crimson">Habilidades</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg sm:text-xl font-light leading-relaxed">
            Do domínio do conteúdo à sensibilidade pedagógica — ferramentas 
            que transformam aula em experiência significativa.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-card/50 border border-white/[0.04] rounded-2xl p-6 sm:p-8 hover:border-crimson/15 transition-all duration-500 hover:shadow-xl hover:shadow-crimson/5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-11 h-11 rounded-xl bg-secondary/50 border border-white/[0.04] flex items-center justify-center">
                  {categoryIcons[group.category]}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">{group.category}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2.5">
                      <span
                        className={`text-sm font-medium ${
                          skill.highlight ? 'text-gold-light' : 'text-muted-foreground'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground/60 font-medium">{skill.level}%</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1.5 bg-secondary/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.highlight
                            ? 'bg-gradient-to-r from-crimson to-gold'
                            : 'bg-gradient-to-r from-crimson-dark to-crimson/70'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent banner */}
        <div className="mt-16 relative rounded-2xl overflow-hidden group">
          <img
            src="/amazon-landscape.png"
            alt="Paisagem do Amazonas — cenário da trajetória profissional"
            className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/30 flex items-center">
            <div className="px-8 sm:px-14">
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-3 tracking-tight">
                Compromisso que Transforma
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed font-light">
                Cada aula é uma oportunidade de transformar realidades. Do cursinho popular 
                à escola particular, o compromisso com a educação de qualidade é o fio condutor 
                de toda a minha trajetória profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
