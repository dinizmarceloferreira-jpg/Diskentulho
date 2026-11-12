import { trackWhatsAppClick } from "../lib/analytics";
import { getWhatsAppLink } from "../config/whatsapp";

export default function FloatingWhatsApp() {
  const waLink = getWhatsAppLink();

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('floating_button')}
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-600/40 transition-all hover:scale-105 group"
      aria-label="Falar pelo WhatsApp"
    >
      <div className="relative">
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.13 6.94C8.96 6.94 8.68 7 8.45 7.25C8.22 7.5 7.58 8.1 7.58 9.33C7.58 10.56 8.48 11.74 8.6 11.91C8.73 12.07 10.37 14.6 12.92 15.7C15.04 16.61 15.47 16.43 15.93 16.39C16.39 16.35 17.41 15.78 17.62 15.2C17.83 14.61 17.83 14.11 17.77 14C17.71 13.9 17.54 13.84 17.29 13.71C17.04 13.59 15.82 12.99 15.59 12.91C15.36 12.82 15.2 12.78 15.03 13.03C14.87 13.28 14.41 13.84 14.27 14C14.13 14.17 14 14.19 13.75 14.07C13.5 13.94 12.7 13.68 11.75 12.83C11.01 12.17 10.51 11.36 10.37 11.11C10.22 10.86 10.35 10.73 10.48 10.6C10.59 10.49 10.73 10.31 10.85 10.17C10.97 10.03 11.02 9.92 11.1 9.76C11.18 9.59 11.14 9.45 11.08 9.33C11.02 9.2 10.55 8.04 10.35 7.57C10.16 7.11 9.97 7.17 9.82 7.16C9.68 7.16 9.51 7.15 9.35 7.15C9.18 7.15 8.91 7.21 8.68 7.46" />
        </svg>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
      </div>
      <span className="hidden sm:inline font-bold text-sm">Falar no WhatsApp</span>
    </a>
  );
}
