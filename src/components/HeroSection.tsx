import { ArrowRight, Shield, Clock, Truck } from "lucide-react";
import { trackWhatsAppClick } from "../lib/analytics";
import { getWhatsAppLink } from "../config/whatsapp";
import { COMPANY_DATA } from "../config/company";
import heroBg from "../assets/hero_bg.jpg";

export default function HeroSection() {
  const waLink = getWhatsAppLink();

  return (
    <section id="inicio" className="relative min-h-[100dvh] min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Canteiro de obras com caçambas de entulho - Disk Caçamba Goiás"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative blur shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          {/* Badges */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 border border-emerald-500/30">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-xs sm:text-sm font-semibold">
              Atendimento em Goiânia e Região Metropolitana
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-4 sm:mb-6 tracking-tight drop-shadow-md">
            Aluguel de{" "}
            <span className="gradient-text">Caçambas</span>
            <br />
            em Goiânia e Região
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-200 max-w-xl mb-6 sm:mb-8 leading-relaxed font-normal drop-shadow-sm">
            Caçambas de 3, 4 e 5 m³ para obras, reformas e retirada de entulho com atendimento rápido no WhatsApp.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3 sm:mb-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero_section')}
              className="group flex items-center justify-center gap-2 sm:gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold transition-all hover:shadow-2xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.13 6.94C8.96 6.94 8.68 7 8.45 7.25C8.22 7.5 7.58 8.1 7.58 9.33C7.58 10.56 8.48 11.74 8.6 11.91C8.73 12.07 10.37 14.6 12.92 15.7C15.04 16.61 15.47 16.43 15.93 16.39C16.39 16.35 17.41 15.78 17.62 15.2C17.83 14.61 17.83 14.11 17.77 14C17.71 13.9 17.54 13.84 17.29 13.71C17.04 13.59 15.82 12.99 15.59 12.91C15.36 12.82 15.2 12.78 15.03 13.03C14.87 13.28 14.41 13.84 14.27 14C14.13 14.17 14 14.19 13.75 14.07C13.5 13.94 12.7 13.68 11.75 12.83C11.01 12.17 10.51 11.36 10.37 11.11C10.22 10.86 10.35 10.73 10.48 10.6C10.59 10.49 10.73 10.31 10.85 10.17C10.97 10.03 11.02 9.92 11.1 9.76C11.18 9.59 11.14 9.45 11.08 9.33C11.02 9.2 10.55 8.04 10.35 7.57C10.16 7.11 9.97 7.17 9.82 7.16C9.68 7.16 9.51 7.15 9.35 7.15C9.18 7.15 8.91 7.21 8.68 7.46" />
              </svg>
              Pedir Orçamento no WhatsApp
            </a>
            <a
              href="#contato"
              className="flex items-center justify-center gap-2 glass text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold hover:bg-white/15 transition-all"
            >
              Solicitar por Formulário
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          <p className="text-emerald-300/90 text-xs sm:text-sm font-medium mb-8 sm:mb-12 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            Atendimento em Goiânia, Aparecida de Goiânia, Senador Canedo e Trindade.
          </p>

          {/* Trust Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              { icon: Truck, text: "Caçambas de 3, 4 e 5 m³" },
              { icon: Shield, text: `CNPJ ${COMPANY_DATA.cnpj}` },
              { icon: Clock, text: "Entrega e retirada ágil" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 sm:gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-slate-800">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-slate-200 text-xs sm:text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
