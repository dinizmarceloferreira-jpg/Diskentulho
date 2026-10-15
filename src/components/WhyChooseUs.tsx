import { Clock, DollarSign, Shield, Leaf, Headphones, Truck } from "lucide-react";
import type { ComponentType } from "react";
import { COMPANY_DATA } from "../config/company";
import serviceImg from "../assets/why_choose_us.jpg";

type Reason = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

const REASONS: Reason[] = [
  { icon: Clock, title: "Entrega e Retirada", desc: "Entrega e retirada combinadas com agilidade conforme o cronograma da sua obra." },
  { icon: DollarSign, title: "Valores Transparentes", desc: "Orçamento claro e justo para locação de caçamba em Goiânia e região metropolitana." },
  { icon: Shield, title: "CNPJ Regularizado", desc: `Empresa constituída sob o CNPJ ${COMPANY_DATA.cnpj} com registro oficial em atividade.` },
  { icon: Leaf, title: "Retirada de Resíduos", desc: "Descarte responsável e transporte seguro de entulhos de obras e reformas." },
  { icon: Headphones, title: "Atendimento Ágil", desc: "Suporte direto via WhatsApp para consultar disponibilidade, prazos e tirar dúvidas." },
  { icon: Truck, title: "Equipamentos Adequados", desc: "Caçambas nos tamanhos ideais e veículos adequados para entregas com segurança." },
];

export default function WhyChooseUs() {
  return (
    <section id="porque" className="py-16 sm:py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 items-center">
          <div className="lg:w-5/12 reveal w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl" />
              <img
                src={serviceImg}
                alt="Equipamentos de locação e caçambas - JP Entulho Goiânia"
                className="relative rounded-3xl shadow-2xl shadow-black/40 w-full h-auto object-cover h-[340px] sm:h-[420px]"
                loading="lazy"
              />
              <div className="flex absolute -bottom-4 right-3 sm:-bottom-6 sm:-right-6 bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-3 sm:p-5 shadow-xl animate-float">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-xs sm:text-base leading-tight">Empresa Regular</p>
                    <p className="text-emerald-400 text-[10px] sm:text-xs font-semibold">CNPJ {COMPANY_DATA.cnpj}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 w-full">
            <div className="reveal">
              <span className="inline-block text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-3">
                Por Que Nos Escolher
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-4">
                A Confiança que sua{" "}
                <span className="gradient-text">Obra Merece</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 sm:mb-10">
                Atuação séria e transparente na locação de caçambas e retirada de entulho em Goiânia e cidades da região metropolitana.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {REASONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="reveal flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/40 group-hover:bg-emerald-950/40 transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm sm:text-base mb-1">{title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
