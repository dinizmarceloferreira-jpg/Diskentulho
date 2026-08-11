import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

const FAQS = [
  {
    q: "Qual o tamanho da caçamba?",
    a: "Trabalhamos com caçambas de 3m³, 4m³ e 5m³. A mais utilizada para reformas residenciais e pequenas obras é a de 5m³. Nossa equipe orienta na escolha do tamanho ideal para seu volume de resíduos.",
  },
  {
    q: "Quanto tempo posso ficar com a caçamba?",
    a: "O período padrão de permanência varia conforme o combinado no ato da contratação (geralmente de 3 a 5 dias úteis). Caso sua obra necessite de tempo adicional, realizamos a extensão mediante ajuste prévio.",
  },
  {
    q: "O que pode ser colocado na caçamba?",
    a: "Resíduos de construção civil como concreto, tijolos, cerâmica, argamassa, madeira, ferragens, terra e pedras. É estritamente proibido o descarte de lixo doméstico orgânico, materiais perigosos, produtos químicos, pneus ou lixo hospitalar.",
  },
  {
    q: "A empresa possui CNPJ ativo e registro oficial?",
    a: "Sim! Operamos com a Razão Social Itauna Locacao de Equipamentos LTDA (CNPJ: 01.766.086/0001-20, Inscrição Estadual: 338263385.00-02). Atuamos com registro oficial e atividade regular desde 04/04/1997 (aproximadamente 29 anos de mercado) em Itaúna - MG e região.",
  },
  {
    q: "Como solicitar uma caçamba?",
    a: "É muito simples! Entre em contato diretamente pelo WhatsApp (31) 97252-8564 informando o endereço da entrega em Itaúna ou região e o tipo de entulho. Retornamos rapidamente para confirmar o envio.",
  },
  {
    q: "Qual o valor da locação?",
    a: "O valor é calculado de acordo com o tamanho da caçamba solicitada e a localização da entrega. Solicite um orçamento sem compromisso via WhatsApp para receber a cotação exata.",
  },
  {
    q: "Vocês trabalham aos finais de semana?",
    a: "Nosso atendimento principal funciona de segunda a sábado. Agendamentos e entregas em horários especiais podem ser alinhados previamente com nossa equipe.",
  },
  {
    q: "A caçamba pode ficar posicionada na rua?",
    a: "Sim, a caçamba pode ser colocada na via pública desde que respeite o estacionamento permitido e as diretrizes de trânsito e sinalização da prefeitura local.",
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
            Esclareça suas principais dúvidas sobre o aluguel de caçambas com a Diskentulho.
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
