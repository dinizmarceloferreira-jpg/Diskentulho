import { MapPin, CheckCircle2, Navigation, ExternalLink } from "lucide-react";

const CITIES = [
  { name: "Itaúna", highlight: true },
  { name: "Pará de Minas", highlight: true },
  { name: "Mateus Leme", highlight: false },
  { name: "Itatiaiuçu", highlight: false },
  { name: "Juatuba", highlight: false },
  { name: "Igarapé", highlight: false },
  { name: "Divinópolis", highlight: false },
  { name: "Nova Serrana", highlight: false },
];

const MAPS_NAVIGATE_URL = "https://www.google.com/maps/search/?api=1&query=Rua+Manoel+Ribeiro+da+Silva,+60,+Bairro+Jo%C3%A3o+Paulo+II,+Ita%C3%BAna+-+MG";

export default function AreasSection() {
  return (
    <section id="regioes" className="py-16 sm:py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Áreas Atendidas
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-4">
            Onde <span className="gradient-text">Atuamos</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Atendemos a cidade de Itaúna - MG e principais municípios do entorno com agilidade e tradição.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-10 sm:mb-12">
          {CITIES.map(({ name, highlight }) => (
            <div
              key={name}
              className={`reveal flex items-center gap-2 sm:gap-3 rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-w-0 ${
                highlight
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                  : "bg-slate-900 border border-slate-800 hover:border-emerald-500/30 text-slate-200"
              }`}
            >
              <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${highlight ? "text-emerald-100" : "text-emerald-400"}`} />
              <span className="font-semibold text-xs sm:text-sm md:text-base leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Map Container */}
        <div className="reveal max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <iframe
              title="Mapa de Atendimento Diskentulho - Itaúna MG"
              src="https://maps.google.com/maps?q=Rua%20Manoel%20Ribeiro%20da%20Silva%2C%2060%2C%20Bairro%20Jo%C3%A3o%20Paulo%20II%2C%20Ita%C3%BAna%20-%20MG%2C%2035681-293&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale contrast-125 brightness-90"
              loading="lazy"
            />
            {/* Map Overlay Badge */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl p-3 sm:p-4 max-w-xs shadow-xl">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <Navigation className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white">Sede Oficial Diskentulho</h4>
                  <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed mt-0.5">
                    Rua Manoel Ribeiro da Silva, 60 — João Paulo II, Itaúna - MG
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Open Maps Link Button */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
              <a
                href={MAPS_NAVIGATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg transition-all hover:scale-105"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8 reveal">
          <div className="inline-flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Sua localização não está na lista? Entre em contato e consulte a disponibilidade para sua região.
          </div>
        </div>
      </div>
    </section>
  );
}
