'use client';

const journeyItems = [
  {
    year: '2016',
    title: 'Ensino Médio — IFAM',
    description:
      'Conclusão do Ensino Médio integrado ao Técnico em Mecânica no Instituto Federal de Educação, Ciência e Tecnologia do Amazonas. Primeiro passo rumo à carreira acadêmica.',
    institution: 'Instituto Federal do Amazonas',
    image: '/amazon-landscape.png',
    tags: ['Formação Base', 'IFAM'],
  },
  {
    year: '2017',
    title: 'Início da Graduação — UFAM',
    description:
      'Ingresso na Licenciatura Plena em História pela Universidade Federal do Amazonas. Onde a paixão pelo ensino e pela pesquisa histórica começou a tomar forma.',
    institution: 'Universidade Federal do Amazonas',
    image: '/hero-banner.png',
    tags: ['Graduação', 'UFAM'],
  },
  {
    year: '2019',
    title: 'Primeiras Salas de Aula',
    description:
      'Início da carreira docente na Oficina do Aprender+ como professor de reforço em Ciências Humanas (História, Filosofia, Sociologia). Elaboração de materiais avaliativos e aulas expositivas e dialógicas.',
    institution: 'Oficina do Aprender+',
    image: '/cert-placeholder.png',
    tags: ['Primeira Aula', 'Educação Popular'],
  },
  {
    year: '2019–2021',
    title: 'Professor — ASPREM',
    description:
      'Atuação como Professor de História na Academia Social de Preparação às Escolas Militares. Elaboração de materiais e aulas expositivas para preparação de alunos de baixa renda.',
    institution: 'ASPREM',
    image: '/guitar-accent.png',
    tags: ['Cursinho Popular', 'Escolas Militares'],
  },
  {
    year: '2020',
    title: 'Aulão Estadual — SEDUC',
    description:
      'Aulão ao vivo para todo o Estado do Amazonas no projeto Conquistar, oferecido pela Secretaria de Educação. Demonstração de oratória para centenas de alunos simultaneamente.',
    institution: 'SEDUC — Projeto Conquistar',
    image: '/amazon-landscape.png',
    tags: ['Aulão', 'Oratória', 'SEDUC'],
  },
  {
    year: '2021–Atual',
    title: 'Professor — Pró-Vest',
    description:
      'Professor de História, Filosofia e Sociologia. Aulas dinâmicas com linguagem acessível, garantindo que cada aluno absorva o conteúdo de forma significativa.',
    institution: 'Pró-Vest Vestibulares e Concursos',
    image: '/hero-banner.png',
    tags: ['Cursinho', 'Atual'],
  },
  {
    year: '2021–2022',
    title: 'Professor — Inst. Denizard Rivail',
    description:
      'Professor de História no 9º ano e Ensino Médio. Elaboração de materiais e aulas expositivas para turmas diversificadas.',
    institution: 'Instituto Denizard Rivail',
    image: '/cert-placeholder.png',
    tags: ['Escola', 'Ensino Médio'],
  },
  {
    year: '2022',
    title: 'Projeto Regionais — Aprova Total',
    description:
      'Gravação de aulas de História do Amazonas para a plataforma de preparação Aprova Total. O diferencial amazônica ganhando alcance digital.',
    institution: 'Aprova Total',
    image: '/guitar-accent.png',
    tags: ['Online', 'História do Amazonas'],
  },
  {
    year: '2023',
    title: 'Professor — Escolas IDAAM',
    description:
      'Professor de História no Ensino Fundamental II e Ensino Médio. Continuidade do compromisso com a educação de qualidade.',
    institution: 'Escolas IDAAM',
    image: '/amazon-landscape.png',
    tags: ['Escola', 'Fundamental II'],
  },
  {
    year: '2023–Atual',
    title: 'Professor — Fundação Matias Machline',
    description:
      'Professor de História no Ensino Médio. Atuação atual com foco em aulas expositivas, dialógicas e explicativas, além de elaboração de materiais avaliativos.',
    institution: 'Fundação Matias Machline',
    image: '/hero-banner.png',
    tags: ['Atual', 'Ensino Médio'],
  },
  {
    year: '2023',
    title: 'Graduação Concluída — UFAM',
    description:
      'Conclusão da Licenciatura Plena em História pela Universidade Federal do Amazonas. Um marco na formação acadêmica.',
    institution: 'UFAM',
    image: '/cert-placeholder.png',
    tags: ['Graduação', 'Conclusão'],
  },
  {
    year: '2024+',
    title: 'Pós-Graduação — PUC-MG',
    description:
      'Especialização em Ensino de História pela Pontifícia Universidade Católica de Minas Gerais. Aprofundamento pedagógico para transformar ainda mais vidas em sala de aula.',
    institution: 'PUC-MG',
    image: '/guitar-accent.png',
    tags: ['Pós-Graduação', 'Especialização'],
  },
];

export function JourneySection() {
  return (
    <section id="jornada" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-gold font-mono text-sm tracking-widest uppercase">
            Trajetória
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 tracking-tight">
            Minha <span className="text-gradient-crimson">Jornada</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            De estudante do IFAM a professor especializado — cada passo construiu 
            o educador que sou hoje.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-crimson via-gold to-crimson-dark" />

          <div className="space-y-8 sm:space-y-12">
            {journeyItems.map((item, index) => (
              <div key={index} className="relative pl-14 sm:pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-5 top-2 w-5 h-5 sm:w-5 sm:h-5 rounded-full border-2 border-crimson bg-charcoal group-hover:bg-crimson group-hover:border-gold transition-all duration-300 z-10" />

                {/* Card */}
                <div className="bg-card/60 border border-white/5 rounded-2xl overflow-hidden hover:border-crimson/20 transition-all duration-300 group-hover:bg-card/80">
                  {/* Image placeholder */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    {/* Year badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-crimson/90 rounded-lg text-white text-xs font-bold">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-crimson-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                        <path d="M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 2.5c.83 0 1.5.67 1.5 1.5S8.83 6.5 8 6.5 6.5 5.83 6.5 5 7.17 3.5 8 3.5zm2 8H6v-1c0-1.1.9-2 2-2s2 .9 2 2v1z" />
                      </svg>
                      <span className="text-sm text-gold">{item.institution}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-secondary/50 border border-white/5 rounded-md text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
