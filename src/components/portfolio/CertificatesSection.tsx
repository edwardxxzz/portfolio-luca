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
    <section id="certificados" className="relative py-24 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="text-gold font-mono text-sm tracking-[0.15em] uppercase font-medium">
            Formação
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 tracking-tight leading-[1.1]">
            Meus <span className="text-gradient-crimson">Certificados</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg sm:text-xl font-light leading-relaxed">
            Cada certificado representa um passo na construção de um educador 
            cada vez mais preparado para transformar vidas.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="cert-card group bg-card/50 border border-white/[0.04] rounded-2xl overflow-hidden hover:border-crimson/15"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                {/* Category badge */}
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-gold/90 text-charcoal rounded-lg text-xs font-bold tracking-wide">
                  {cert.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2.5 group-hover:text-crimson-light transition-colors duration-300 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-[1.7] mb-4 font-light">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold shrink-0">
                      <path d="M7 1L9 5H13L9.8 7.6L11 12L7 9.4L3 12L4.2 7.6L1 5H5L7 1Z" />
                    </svg>
                    <span className="text-xs text-gold truncate font-medium">{cert.institution}</span>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap font-medium">{cert.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for more */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground mb-5 font-light">
            Tem mais certificados e experiências por vir — a jornada continua.
          </p>
          <a
            href="#contato"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-gold/25 hover:border-gold/50 text-gold hover:text-gold-light rounded-xl transition-all duration-300 font-medium"
          >
            <span>Quer saber mais?</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
