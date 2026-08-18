import { MessageSquare, Truck, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Solicite pelo WhatsApp",
    desc: "Informe o endereço da obra em Itaúna ou região, o tipo de entulho e escolha o tamanho da caçamba ideal.",
  },
  {
    step: "02",
    icon: Truck,
    title: "Receba a Caçamba",
    desc: "Nossa equipe posiciona a caçamba no local agendado de forma segura e dentro das normas vigentes.",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Coletamos o Entulho",
    desc: "Após o preenchimento ou ao final do prazo combinado, fazemos a retirada e a destinação correta dos resíduos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Passo a Passo
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-4">
            Como <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Processo simples e sem burocracia para alugar sua caçamba de entulho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 relative">
          {STEPS.map(({ step, icon: Icon, title, desc }) => (
            <div
              key={step}
              className="reveal relative bg-slate-950/60 rounded-3xl border border-slate-800 p-6 sm:p-8 hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-900/50 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-slate-800 group-hover:text-emerald-500/40 transition-colors">
                  {step}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3">{title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
