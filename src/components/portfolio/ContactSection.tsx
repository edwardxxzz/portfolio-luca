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
    // In production, this would send to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contato" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-crimson/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-gold font-mono text-sm tracking-widest uppercase">
            Vamos Conversar
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 tracking-tight">
            Entre em <span className="text-gradient-crimson">Contato</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Interessado em aulas, parcerias ou palestras? Vamos conversar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card/60 border border-white/5 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-crimson/10 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-light">
                      <path d="M3 8l7 5 7-5M3 5h14v10H3V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground font-medium">luca.historia@email.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-light">
                      <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c-1.67 0-3.15-.82-4.06-2.07C6.79 12.68 8.34 12 10 12s3.21.68 4.06 1.93C13.15 15.18 11.67 16 10 16z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Localização</div>
                    <div className="text-foreground font-medium">Manaus, Amazonas — Brasil</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-crimson/10 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-light">
                      <path d="M10 2L2 7v6l8 5 8-5V7l-8-5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Disponibilidade</div>
                    <div className="text-foreground font-medium">Aulas, Palestras e Preparação</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/60 border border-white/5 rounded-xl p-5 text-center">
                <div className="text-2xl mb-2">🎓</div>
                <div className="text-sm font-bold text-foreground">Pós-Graduado</div>
                <div className="text-xs text-muted-foreground">Ensino de História — PUC-MG</div>
              </div>
              <div className="bg-card/60 border border-white/5 rounded-xl p-5 text-center">
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-sm font-bold text-foreground">Especialista</div>
                <div className="text-xs text-muted-foreground">História do Amazonas</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/60 border border-white/5 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/30 transition-all"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/30 transition-all"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Assunto</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/30 transition-all"
                  placeholder="Aulas, Palestras, Parcerias..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Mensagem</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary/50 border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/30 transition-all resize-none"
                  placeholder="Conte-me como posso ajudar..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-crimson hover:bg-crimson-light text-white font-semibold rounded-xl transition-all duration-300 glow-crimson hover:scale-[1.02]"
              >
                {submitted ? '✓ Mensagem Enviada!' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
