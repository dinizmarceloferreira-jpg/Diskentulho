import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import { COMPANY_DATA } from "../config/company";

const FAQS = [
  {
    q: "Qual o tamanho da caçamba?",
    a: "Trabalhamos com caçambas de 3m³, 4m³ e 5m³. A mais utilizada para reformas residenciais e obras é a de 5m³. Nossa equipe orienta na escolha do tamanho ideal para o volume de entulho da sua obra em Goiânia.",
  },
  {
    q: "Quanto tempo posso ficar com a caçamba?",
    a: "O período padrão varia conforme o combinado na contratação (geralmente de 3 a 5 dias). Caso sua obra necessite de prazo adicional, realizamos a extensão com total flexibilidade.",
  },
  {
    q: "O que pode ser colocado na caçamba?",
    a: "Resíduos de construção civil como concreto, tijolos, cerâmica, argamassa, madeira, ferragens, terra, pedras e restos de podas. É estritamente proibido o descarte de lixo doméstico orgânico, produtos químicos, pneus ou lixo hospitalar.",
  },
  {
    q: "A empresa possui CNPJ ativo e registro oficial?",
    a: `Sim! Operamos com a Razão Social ${COMPANY_DATA.legalName} (CNPJ: ${COMPANY_DATA.cnpj}). Atuamos com registro oficial e atividade regular em Goiânia - GO e região metropolitana.`,
  },
  {
    q: "Como solicitar uma caçamba?",
    a: "É muito simples! Entre em contato diretamente pelo WhatsApp informando seu bairro em Goiânia ou cidade da região metropolitana, o endereço e o tipo de entulho. Nossa equipe passará o orçamento rapidamente.",
  },
  {
    q: "Qual o valor da locação?",
    a: "O valor é calculado de acordo com o tamanho da caçamba e a localização da entrega. Solicite um orçamento via WhatsApp para receber a cotação rápida e sem compromisso.",
  },
  {
    q: "Vocês trabalham aos finais de semana?",
    a: `Nosso atendimento padrão funciona ${COMPANY_DATA.workingHours.toLowerCase()}. Agendamentos e entregas podem ser alinhados previamente com nossa equipe.`,
  },
  {
    q: "A caçamba pode ficar posicionada na rua?",
    a: "Sim, a caçamba pode ser colocada na via pública desde que respeite o estacionamento permitido e as diretrizes de trânsito e sinalização do município.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Perguntas Frequentes
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Dúvidas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Esclareça suas principais dúvidas sobre o aluguel de caçambas com a Disk Caçamba Goiás em Goiânia.
          </p>
        </div>

        <div className="reveal">
          <Accordion className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-slate-950/70 rounded-2xl border border-slate-800 px-6 overflow-hidden data-[state=open]:border-emerald-500/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-white text-base py-5 hover:text-emerald-400 transition-colors">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 leading-relaxed pb-5 text-sm sm:text-base">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
