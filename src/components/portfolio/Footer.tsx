'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-crimson flex items-center justify-center font-bold text-white text-sm">
                L
              </div>
              <span className="text-lg font-bold text-foreground tracking-tight">
                Luca<span className="text-crimson">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Professor de História com especialização em História do Amazonas. 
              Transformando educação com paixão, rock e compromisso social.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              {['Sobre', 'Minha Jornada', 'Certificados', 'Habilidades', 'Contato'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-crimson-light transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Disciplinas */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
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
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Values */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
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
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Luca — Professor de História. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground/50 flex items-center gap-1">
              Feito com <span className="text-crimson">❤</span> e <span className="text-gold">🎸</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
