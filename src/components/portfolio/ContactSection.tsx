'use client';

import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contato" className="relative py-24 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-crimson/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="text-gold font-mono text-sm tracking-[0.15em] uppercase font-medium">
            Vamos Conversar
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 tracking-tight leading-[1.1]">
            Entre em <span className="text-gradient-crimson">Contato</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg sm:text-xl font-light leading-relaxed">
            Interessado em aulas, parcerias ou palestras? Vamos conversar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card/50 border border-white/[0.04] rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground mb-7 tracking-tight">
                Informações de Contato
              </h3>
              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-crimson/10 border border-crimson/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-light">
                      <path d="M3 5h12v10H3V5zM3 5l6 5 6-5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground/60 uppercase tracking-wider font-medium mb-1">Email</div>
                    <div className="text-foreground font-medium">luca.historia@email.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-light">
                      <path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
                      <path d="M9 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5.5 13.5C6.3 12.1 7.5 11.3 9 11.3s2.7.8 3.5 2.2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground/60 uppercase tracking-wider font-medium mb-1">Localização</div>
                    <div className="text-foreground font-medium">Manaus, Amazonas — Brasil</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-crimson/10 border border-crimson/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-light">
                      <path d="M9 1L2 5v5c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V5L9 1z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground/60 uppercase tracking-wider font-medium mb-1">Disponibilidade</div>
                    <div className="text-foreground font-medium">Aulas, Palestras e Preparação</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/50 border border-white/[0.04] rounded-xl p-5 text-center hover:border-crimson/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/10 flex items-center justify-center mx-auto mb-3">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-light">
                    <path d="M5 1v3M13 1v3M2 7h14M4 4h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <div className="text-sm font-bold text-foreground">Pós-Graduado</div>
                <div className="text-xs text-muted-foreground mt-1">Ensino de História — PUC-MG</div>
              </div>
              <div className="bg-card/50 border border-white/[0.04] rounded-xl p-5 text-center hover:border-crimson/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/10 flex items-center justify-center mx-auto mb-3">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-light">
                    <path d="M9 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
                    <path d="M9 5v4l3 3" />
                  </svg>
                </div>
                <div className="text-sm font-bold text-foreground">Especialista</div>
                <div className="text-xs text-muted-foreground mt-1">História do Amazonas</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 border border-white/[0.04] rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-foreground mb-7 tracking-tight">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs text-muted-foreground/70 mb-2.5 uppercase tracking-wider font-medium">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 bg-secondary/30 border border-white/[0.06] rounded-xl text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-crimson/40 focus:ring-1 focus:ring-crimson/20 transition-all duration-300 font-medium"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground/70 mb-2.5 uppercase tracking-wider font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 bg-secondary/30 border border-white/[0.06] rounded-xl text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-crimson/40 focus:ring-1 focus:ring-crimson/20 transition-all duration-300 font-medium"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground/70 mb-2.5 uppercase tracking-wider font-medium">Assunto</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3.5 bg-secondary/30 border border-white/[0.06] rounded-xl text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-crimson/40 focus:ring-1 focus:ring-crimson/20 transition-all duration-300 font-medium"
                  placeholder="Aulas, Palestras, Parcerias..."
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground/70 mb-2.5 uppercase tracking-wider font-medium">Mensagem</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3.5 bg-secondary/30 border border-white/[0.06] rounded-xl text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-crimson/40 focus:ring-1 focus:ring-crimson/20 transition-all duration-300 resize-none font-medium"
                  placeholder="Conte-me como posso ajudar..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-crimson hover:bg-crimson-light text-white font-semibold rounded-xl transition-all duration-300 glow-crimson hover:scale-[1.01] tracking-wide"
              >
                {submitted ? 'Mensagem Enviada!' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
