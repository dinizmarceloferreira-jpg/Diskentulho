import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import QuoteForm from "./QuoteForm";
import { trackWhatsAppClick } from "../lib/analytics";

const WA_LINK = "https://wa.me/5531972528564";

const CONTACT_INFO = [
  { icon: Phone, label: "WhatsApp / Telefone", value: "(31) 97252-8564", href: "https://wa.me/5531972528564" },
  { icon: MapPin, label: "Endereço Oficial", value: "Rua Manoel Ribeiro da Silva, 60 - João Paulo II, Itaúna - MG", href: null },
  { icon: Clock, label: "Horário de Atendimento", value: "Seg a Sáb • 7h às 18h", href: null },
];

export default function ContactSection() {
  return (
    <section id="contato" className="py-16 sm:py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Contato & Orçamento
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-4">
            Solicite seu <span className="gradient-text">Orçamento</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Preencha o formulário abaixo para enviar diretamente ao nosso WhatsApp. Atendimento rápido e sem compromisso!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-3 reveal">
            <QuoteForm />
          </div>

          <div className="lg:col-span-2 reveal space-y-4 sm:space-y-5">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="bg-slate-950/80 rounded-2xl border border-slate-800 p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('contact_section_list')}
                      className="font-semibold text-sm sm:text-base text-white hover:text-emerald-400 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-sm sm:text-base text-slate-200">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('contact_section_direct')}
              className="block bg-emerald-600 rounded-2xl p-5 sm:p-6 text-center hover:bg-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-600/20 group"
            >
              <p className="text-emerald-100 text-xs sm:text-sm mb-1">Prefere falar diretamente?</p>
              <p className="text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2">
                Chamar no WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
