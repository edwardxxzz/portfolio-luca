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
      'Ingresso na Licenciatura Plena em História pela Universidade Federal do Amazonas. A paixão pelo ensino e pela pesquisa histórica começou a tomar forma.',
    institution: 'Universidade Federal do Amazonas',
    image: '/amazon-landscape.png',
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
    image: '/amazon-landscape.png',
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
    image: '/cert-placeholder.png',
    tags: ['Cursinho', 'Atual'],
  },
  {
    year: '2021–2022',
    title: 'Professor — Inst. Denizard Rivail',
    description:
      'Professor de História no 9o ano e Ensino Médio. Elaboração de materiais e aulas expositivas para turmas diversificadas.',
    institution: 'Instituto Denizard Rivail',
    image: '/amazon-landscape.png',
    tags: ['Escola', 'Ensino Médio'],
  },
  {
    year: '2022',
    title: 'Projeto Regionais — Aprova Total',
    description:
      'Gravação de aulas de História do Amazonas para a plataforma de preparação Aprova Total. O conhecimento amazônico ganhando alcance digital.',
    institution: 'Aprova Total',
    image: '/cert-placeholder.png',
    tags: ['Online', 'História do Amazonas'],
  },
  {
    year: '2023',
    title: 'Professor — Escolas IDAAM',
    description:
      'Professor de História no Ensino Fundamental II e Ensino Médio. Continuidade do compromisso com a educação de qualidade.',
    institution: 'Escolas IDAAM',
    image: '/cert-placeholder.png',
    tags: ['Escola', 'Fundamental II'],
  },
  {
    year: '2023–Atual',
    title: 'Professor — Fundação Matias Machline',
    description:
      'Professor de História no Ensino Médio. Atuação atual com foco em aulas expositivas, dialógicas e explicativas, além de elaboração de materiais avaliativos.',
    institution: 'Fundação Matias Machline',
    image: '/amazon-landscape.png',
    tags: ['Atual', 'Ensino Médio'],
  },
  {
    year: '2023',
    title: 'Graduação Concluída — UFAM',
    description:
      'Conclusão da Licenciatura Plena em História pela Universidade Federal do Amazonas. Um marco na formação acadêmica e profissional.',
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
    image: '/cert-placeholder.png',
    tags: ['Pós-Graduação', 'Especialização'],
  },
];

export function JourneySection() {
  return (
    <section id="jornada" className="relative py-24 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="text-gold font-mono text-sm tracking-[0.15em] uppercase font-medium">
            Trajetória
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 tracking-tight leading-[1.1]">
            Minha <span className="text-gradient-crimson">Jornada</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg sm:text-xl font-light leading-relaxed">
            De estudante do IFAM a professor especializado — cada passo construiu 
            o educador que sou hoje.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-crimson/60 via-gold/40 to-crimson-dark/60" />

          <div className="space-y-8 sm:space-y-10">
            {journeyItems.map((item, index) => (
              <div key={index} className="relative pl-14 sm:pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-5 top-3 w-4 h-4 rounded-full border-2 border-crimson/60 bg-charcoal group-hover:bg-crimson group-hover:border-gold group-hover:scale-125 transition-all duration-300 z-10" />

                {/* Card */}
                <div className="bg-card/50 border border-white/[0.04] rounded-2xl overflow-hidden hover:border-crimson/15 transition-all duration-500 group-hover:bg-card/70 group-hover:shadow-xl group-hover:shadow-crimson/5">
                  {/* Image */}
                  <div className="relative h-36 sm:h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    {/* Year badge */}
                    <div className="absolute top-3 left-3 px-3 py-1.5 bg-crimson/90 backdrop-blur-sm rounded-lg text-white text-xs font-bold tracking-wide">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2.5 group-hover:text-crimson-light transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-muted-foreground leading-[1.7] mb-4 font-light">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold shrink-0">
                        <path d="M2 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm6-3v3l2 2" />
                      </svg>
                      <span className="text-sm text-gold font-medium">{item.institution}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs bg-secondary/40 border border-white/[0.04] rounded-md text-muted-foreground font-medium"
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
