import { Clock, DollarSign, Shield, Leaf, Headphones, Truck } from "lucide-react";
import type { ComponentType } from "react";
import serviceImg from "../assets/why_choose_us.jpg";

type Reason = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

const REASONS: Reason[] = [
  { icon: Clock, title: "Entrega Ágil", desc: "Posicionamento e retirada da caçamba alinhados com o cronograma da sua obra em Itaúna." },
  { icon: DollarSign, title: "Preço Justo", desc: "Valores transparentes sem taxas escondidas. O melhor custo-benefício da região." },
  { icon: Shield, title: "CNPJ Regularizado", desc: "Empresa constituída sob o CNPJ 01.766.086/0001-20 em atividade regular desde 1997." },
  { icon: Leaf, title: "Destinação Responsável", desc: "Encaminhamento correto dos resíduos de construção e reformas para locais autorizados." },
  { icon: Headphones, title: "Suporte Dedicado", desc: "Atendimento direto e personalizado via WhatsApp e telefone com agilidade." },
  { icon: Truck, title: "Equipamentos Adequados", desc: "Caçambas e veículos apropriados para transporte seguro de entulhos e resíduos." },
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
                alt="Equipamentos de locação e caçambas - Diskentulho Itaúna"
                className="relative rounded-3xl shadow-2xl shadow-black/40 w-full h-auto object-cover h-[340px] sm:h-[420px]"
                loading="lazy"
              />
              <div className="flex absolute -bottom-4 right-3 sm:-bottom-6 sm:-right-6 bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-3 sm:p-5 shadow-xl animate-float">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-xs sm:text-base leading-tight">Desde 1997</p>
                    <p className="text-emerald-400 text-[10px] sm:text-xs font-semibold">CNPJ 01.766.086/0001-20</p>
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
                Aproximadamente 29 anos de tradição e atuação contínua no segmento de locação de equipamentos e caçambas em Itaúna e centro-oeste mineiro.
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
