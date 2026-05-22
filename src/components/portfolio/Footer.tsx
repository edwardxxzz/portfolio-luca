'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04] bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-18">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-crimson/20">
                L
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground tracking-tight leading-none">
                  Luca
                </span>
                <span className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase mt-0.5">
                  Professor de História
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-light">
              Professor de História com especialização em História do Amazonas. 
              Transformando educação com compromisso social e pensamento crítico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-5 uppercase tracking-[0.15em]">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Sobre', href: '#sobre' },
                { label: 'Minha Jornada', href: '#jornada' },
                { label: 'Certificados', href: '#certificados' },
                { label: 'Habilidades', href: '#habilidades' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-crimson-light transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplinas */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-5 uppercase tracking-[0.15em]">
              Disciplinas
            </h4>
            <ul className="space-y-3">
              {[
                'História do Amazonas',
                'História do Brasil',
                'História Global',
                'Filosofia',
                'Sociologia',
              ].map((item) => (
                <li key={item} className="text-sm text-muted-foreground font-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Values */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-5 uppercase tracking-[0.15em]">
              Valores
            </h4>
            <ul className="space-y-3">
              {[
                'Educação Popular',
                'Acesso à Educação',
                'Pensamento Crítico',
                'Compromisso Social',
                'Transformação pela História',
              ].map((item) => (
                <li key={item} className="text-sm text-muted-foreground font-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.04] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-light">
            &copy; {currentYear} Luca — Professor de História. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-crimson rounded-full" />
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-xs text-muted-foreground/40 ml-1 font-light">Educação & Transformação</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
