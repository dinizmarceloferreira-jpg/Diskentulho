import { Award, Shield, MapPin, MessageSquare } from "lucide-react";

const STATS = [
  { icon: Award, value: "29 Anos", label: "De Atuação (Desde 1997)" },
  { icon: Shield, value: "Desde 1997", label: "CNPJ 01.766.086/0001-20" },
  { icon: MapPin, value: "Itaúna - MG", label: "Sede & Região Atendida" },
  { icon: MessageSquare, value: "Direto", label: "Atendimento via WhatsApp" },
];

export default function TrustIndicators() {
  return (
    <section className="relative -mt-8 sm:-mt-12 md:-mt-16 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="reveal bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-xl hover:shadow-emerald-600/10 transition-all duration-300 hover:-translate-y-1 group min-w-0 flex flex-col justify-center items-center"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-950 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-emerald-900/50 transition-colors">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
            </div>
            <span className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-white tracking-tight">
              {value}
            </span>
            <p className="text-slate-400 text-xs sm:text-sm font-medium mt-1.5 sm:mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
