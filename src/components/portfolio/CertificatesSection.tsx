'use client';

const certificates = [
  {
    title: 'Licenciatura Plena em História',
    institution: 'Universidade Federal do Amazonas (UFAM)',
    period: '2017–2023',
    description:
      'Formação completa em História com ênfase em docência, pesquisa e extensão. A base de todo o conhecimento que compartilho em sala de aula.',
    image: '/cert-placeholder.png',
    category: 'Graduação',
  },
  {
    title: 'Ensino Médio — Técnico em Mecânica',
    institution: 'Instituto Federal do Amazonas (IFAM)',
    period: 'Concluído em 12/2016',
    description:
      'Formação técnica integrada ao ensino médio. Experiência inicial com disciplina e raciocínio lógico que contribui até hoje na metodologia de ensino.',
    image: '/cert-placeholder.png',
    category: 'Formação Base',
  },
  {
    title: 'Especialização em Ensino de História',
    institution: 'Pontifícia Universidade Católica de Minas Gerais (PUC-MG)',
    period: 'Pós-Graduação',
    description:
      'Aprofundamento em metodologias de ensino de História, abordagens pedagógicas contemporâneas e práticas inovadoras para sala de aula.',
    image: '/cert-placeholder.png',
    category: 'Pós-Graduação',
  },
  {
    title: 'Aulão Conquistar — SEDUC',
    institution: 'Secretaria de Educação do Amazonas',
    period: '2020',
    description:
      'Participação como docente no aulão ao vivo para todo o Estado do Amazonas, projeto oferecido pela Secretaria de Educação para preparação de estudantes.',
    image: '/cert-placeholder.png',
    category: 'Experiência',
  },
  {
    title: 'Projeto Regionais — Aprova Total',
    institution: 'Plataforma Aprova Total',
    period: 'Agosto 2022',
    description:
      'Gravação de aulas de História do Amazonas para a plataforma de preparação digital. O conhecimento amazônico alcançando alunos de todo o Brasil.',
    image: '/cert-placeholder.png',
    category: 'Produção Digital',
  },
  {
    title: 'Professor — ASPREM',
    institution: 'Academia Social de Preparação às Escolas Militares',
    period: '2019–2021',
    description:
      'Docência em cursinho social de preparação militar, contribuindo para o acesso de estudantes de baixa renda às escolas militares.',
    image: '/cert-placeholder.png',
    category: 'Educação Popular',
  },
];

export function CertificatesSection() {
  return (
    <section id="certificados" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-gold font-mono text-sm tracking-widest uppercase">
            Formação
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 tracking-tight">
            Meus <span className="text-gradient-crimson">Certificados</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Cada certificado representa um passo na construção de um educador 
            cada vez mais preparado para transformar vidas.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="cert-card group bg-card/60 border border-white/5 rounded-2xl overflow-hidden hover:border-crimson/20"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                {/* Category badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-gold/90 text-charcoal rounded-lg text-xs font-bold">
                  {cert.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-crimson-light transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold shrink-0">
                      <path d="M7 1L9 5H13L9.8 7.6L11 12L7 9.4L3 12L4.2 7.6L1 5H5L7 1Z" />
                    </svg>
                    <span className="text-xs text-gold line-clamp-1">{cert.institution}</span>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{cert.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for more */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Tem mais certificados e experiências por vir — a jornada continua!
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 hover:border-gold/60 text-gold hover:text-gold-light rounded-xl transition-all duration-300"
          >
            <span>Quer saber mais?</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
