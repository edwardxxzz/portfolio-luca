'use client';

const skills = [
  {
    category: 'Disciplinas',
    icon: '📚',
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
    icon: '🎯',
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
    icon: '⚡',
    items: [
      { name: 'Educação Popular e Acessível', level: 100, highlight: true },
      { name: 'Pensamento Crítico Amplo', level: 95 },
      { name: 'Conexão com Alunos', level: 92 },
      { name: 'Compromisso Social', level: 100 },
      { name: 'Atualização Constante', level: 88 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="habilidades" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-gold font-mono text-sm tracking-widest uppercase">
            Competências
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 tracking-tight">
            Minhas <span className="text-gradient-crimson">Habilidades</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Do domínio do conteúdo à sensibilidade pedagógica — ferramentas 
            que transformam aula em experiência.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-card/60 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-crimson/20 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-xl font-bold text-foreground">{group.category}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-sm font-medium ${
                          skill.highlight ? 'text-gold-light' : 'text-muted-foreground'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.highlight
                            ? 'bg-gradient-to-r from-crimson to-gold'
                            : 'bg-gradient-to-r from-crimson-dark to-crimson'
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

        {/* Guitar accent image */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <img
            src="/guitar-accent.png"
            alt="Guitarra elétrica — paixão de Luca além da sala de aula"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-charcoal/90 via-charcoal/50 to-transparent flex items-center justify-end">
            <div className="px-8 sm:px-12 text-right">
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-2">
                A Vida Fora da Sala
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-sm">
                Quando não está ensinando, Luca está tocando guitarra, ouvindo rock 
                e sendo pai. A mesma energia que coloca no palco, ele leva para a sala de aula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
