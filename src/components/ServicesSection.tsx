import { ArrowRight, Hammer, Building2, TreePine, Paintbrush } from "lucide-react";
import type { ComponentType } from "react";
import { trackWhatsAppClick } from "../lib/analytics";

import imgObra from "../assets/service_obra.jpg";
import imgComercial from "../assets/service_comercial.jpg";
import imgTerreno from "../assets/service_terreno.jpg";
import imgReforma from "../assets/service_reforma.jpg";

const WA_LINK = "https://wa.me/5531972528564";

type Service = {
  icon: ComponentType<{ className?: string }>;
  image: string;
  title: string;
  description: string;
  items: string[];
};

const SERVICES: Service[] = [
  {
    icon: Hammer,
    image: imgObra,
    title: "Entulho de Obra",
    description: "Remoção de resíduos de construção, reformas e demolições. Tijolos, concreto, argamassa, cerâmica e mais.",
    items: ["Concreto e Argamassa", "Tijolos e Blocos", "Cerâmica e Azulejos", "Madeira e Ferragens"],
  },
  {
    icon: Building2,
    image: imgComercial,
    title: "Resíduos Comerciais",
    description: "Soluções para empresas e comércios que precisam descartar grandes volumes de resíduos de forma organizada.",
    items: ["Limpeza de Galpões", "Mudanças Comerciais", "Sobras Industriais", "Descarte Regular"],
  },
  {
    icon: TreePine,
    image: imgTerreno,
    title: "Limpeza de Terreno",
    description: "Caçambas para limpeza de terrenos baldios, podas de árvores e remoção de vegetação em Itaúna e região.",
    items: ["Podas e Galhos", "Terra e Pedras", "Vegetação Seca", "Limpeza Geral"],
  },
  {
    icon: Paintbrush,
    image: imgReforma,
    title: "Reformas Residenciais",
    description: "Caçambas ideais para reformas domésticas de qualquer porte. Praticidade e agilidade na entrega e recolhimento.",
    items: ["Reformas de Cozinha", "Reformas de Banheiro", "Ampliações", "Demolições Parciais"],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Nossos Serviços
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-4">
            Soluções Completas em{" "}
            <span className="gradient-text">Caçambas</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Oferecemos caçambas para todos os tipos de resíduos em Itaúna - MG e região, com entrega ágil e preço justo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {SERVICES.map(({ icon: Icon, image, title, description, items }) => (
            <div
              key={title}
              className="reveal group bg-slate-950/70 rounded-3xl border border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-emerald-600/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Card Image Header */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white drop-shadow">{title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">{description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-900">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 p-6 sm:p-8 md:p-12 border border-emerald-500/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
            <div className="flex-1">
              <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white mb-3">
                Precisa de uma caçamba em Itaúna ou região?
              </h3>
              <p className="text-slate-300 text-base sm:text-lg">
                Solicite seu orçamento sem compromisso pelo WhatsApp. Respondemos rapidamente!
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('services_section')}
              className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all hover:shadow-xl hover:shadow-emerald-600/30 whitespace-nowrap"
            >
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
