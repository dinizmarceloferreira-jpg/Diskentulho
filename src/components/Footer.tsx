import { useState } from "react";
import { MapPin, Phone, ArrowUp, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import LegalModal from "./LegalModal";
import { trackWhatsAppClick } from "../lib/analytics";
import { getWhatsAppLink, WHATSAPP_DISPLAY } from "../config/whatsapp";
import { COMPANY_DATA } from "../config/company";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Por Que Nós", href: "#porque" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Regiões", href: "#regioes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const SERVICES = [
  "Caçamba de Entulho Goiânia",
  "Caçamba para Obra",
  "Caçamba para Reforma",
  "Retirada de Entulho",
  "Limpeza de Terreno",
];

export default function Footer() {
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const waLink = getWhatsAppLink();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-14">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Logo light size="sm" className="mb-4" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
              Locação e aluguel de caçambas para obras, reformas e retirada de entulho em Goiânia e região.
            </p>
            <div className="text-xs text-slate-400 space-y-1 mb-4">
              <p><strong className="text-slate-200">Nome Comercial:</strong> {COMPANY_DATA.tradeName}</p>
              <p><strong className="text-slate-200">Razão Social:</strong> {COMPANY_DATA.legalName}</p>
              <p><strong className="text-slate-200">CNPJ:</strong> {COMPANY_DATA.cnpj}</p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('footer_phone_1')}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              {WHATSAPP_DISPLAY}
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-300 mb-4 sm:mb-5">
              Links Rápidos
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-300 mb-4 sm:mb-5">
              Serviços
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Sede */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-300 mb-4 sm:mb-5">
              Endereço Oficial
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-0.5">
                  <p className="font-semibold text-white">{COMPANY_DATA.tradeName}</p>
                  <p>{COMPANY_DATA.legalName}</p>
                  <p>CNPJ {COMPANY_DATA.cnpj}</p>
                  <p>{COMPANY_DATA.address.street}</p>
                  <p>{COMPANY_DATA.address.neighborhood}</p>
                  <p>{COMPANY_DATA.address.city} - {COMPANY_DATA.address.uf}</p>
                  <p>CEP {COMPANY_DATA.address.cep}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('footer_phone_2')}
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
                <ShieldCheck className="w-4 h-4" />
                Empresa Regularizada • CNPJ Ativo
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY_DATA.tradeName} — {COMPANY_DATA.legalName} (CNPJ {COMPANY_DATA.cnpj}). Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalType("terms")}
              className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors underline cursor-pointer"
            >
              Termos de Uso
            </button>
            <button
              onClick={() => setModalType("privacy")}
              className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors underline cursor-pointer"
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <LegalModal
        isOpen={!!modalType}
        onClose={() => setModalType(null)}
        type={modalType}
      />
    </footer>
  );
}
