import { MapPin, CheckCircle2, Navigation, ExternalLink } from "lucide-react";
import { COMPANY_DATA } from "../config/company";

const MAPS_NAVIGATE_URL = "https://www.google.com/maps/search/?api=1&query=Rua+Joanna+Ant%C3%B4nia+do+Desterro,+16,+Goi%C3%A2nia+-+GO,+74735-583";

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
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Atendimento prioritário em Goiânia e região metropolitana.
          </p>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-1">
            Consulte a entrega rápida e disponibilidade para o seu bairro.
          </p>
        </div>

        <p className="text-slate-400 text-xs sm:text-sm font-medium text-center mb-4 sm:mb-6 reveal">
          Principais cidades atendidas:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-10 sm:mb-12">
          {COMPANY_DATA.serviceAreas.map(({ name, highlight }) => (
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
              title="Mapa de Atendimento Disk Caçamba Goiás - Goiânia GO"
              src="https://maps.google.com/maps?q=Rua%20Joanna%20Ant%C3%B4nia%20do%20Desterro%2C%2016%2C%20Goi%C3%A2nia%20-%20GO%2C%2074735-583&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
                  <h4 className="font-bold text-xs sm:text-sm text-white">Sede Oficial Disk Caçamba Goiás</h4>
                  <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed mt-0.5">
                    {COMPANY_DATA.address.full}
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
            Consulte a disponibilidade e prazos de entrega para o seu bairro em Goiânia e região pelo WhatsApp.
          </div>
        </div>
      </div>
    </section>
  );
}
