import { X, Shield, FileText } from "lucide-react";

type LegalModalProps = {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms" | null;
};

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen || !type) return null;

  const isPrivacy = type === "privacy";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              {isPrivacy ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {isPrivacy ? "Política de Privacidade" : "Termos de Uso"}
              </h3>
              <p className="text-xs text-emerald-400 font-semibold">Diskentulho • Itaúna - MG</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {/* Identificação Oficial */}
          <div className="bg-slate-950/80 border border-emerald-500/30 rounded-2xl p-4 space-y-1.5 text-slate-200">
            <p className="font-bold text-white text-sm mb-1">Dados da Empresa:</p>
            <p><strong className="text-emerald-400">Razão Social:</strong> Itauna Locacao de Equipamentos LTDA</p>
            <p><strong className="text-emerald-400">Nome Fantasia:</strong> Diskentulho</p>
            <p><strong className="text-emerald-400">CNPJ:</strong> 01.766.086/0001-20</p>
            <p><strong className="text-emerald-400">Inscrição Estadual:</strong> 338263385.00-02</p>
            <p><strong className="text-emerald-400">Data de Abertura:</strong> 04/04/1997 (~29 anos de mercado)</p>
            <p><strong className="text-emerald-400">Endereço Oficial:</strong> Rua Manoel Ribeiro da Silva, 60, Bairro João Paulo II, Itaúna - MG, CEP 35681-293</p>
            <p><strong className="text-emerald-400">Contato:</strong> (31) 97252-8564</p>
          </div>

          {isPrivacy ? (
            <>
              <h4 className="font-display font-bold text-white text-base">1. Tratamento de Dados (LGPD)</h4>
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), a empresa <strong>Itauna Locacao de Equipamentos LTDA (CNPJ: 01.766.086/0001-20)</strong> declara que os dados fornecidos no site (nome, WhatsApp, e-mail e endereço de entrega) são tratados exclusivamente para o orçamento, contato logístico e prestação do serviço de locação de caçambas.
              </p>

              <h4 className="font-display font-bold text-white text-base">2. Confidencialidade e Segurança</h4>
              <p>
                As informações coletadas não são vendidas ou fornecidas a terceiros para fins de propaganda. O tratamento é restrito às finalidades operacionais de agendamento e atendimento ao cliente.
              </p>

              <h4 className="font-display font-bold text-white text-base">3. Direitos do Usuário</h4>
              <p>
                Você possui o direito de solicitar a atualização, retificação ou exclusão de seus dados a qualquer momento entrando em contato pelo telefone/WhatsApp (31) 97252-8564.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-display font-bold text-white text-base">1. Condições de Serviço</h4>
              <p>
                A locação de caçambas é realizada pela empresa <strong>Itauna Locacao de Equipamentos LTDA (CNPJ: 01.766.086/0001-20)</strong>. Os prazos, valores e especificações do local de entrega são acordados na contratação do serviço.
              </p>

              <h4 className="font-display font-bold text-white text-base">2. Uso Correto das Caçambas</h4>
              <p>
                O cliente compromete-se a descartar apenas resíduos permitidos (entulhos de obra, terra, madeira e podas). É vedado o descarte de lixo orgânico doméstico, pneus, resíduos industriais perigosos ou hospitalares.
              </p>

              <h4 className="font-display font-bold text-white text-base">3. Acesso e Posicionamento</h4>
              <p>
                O contratante deve assegurar que o local designado em Itaúna ou região permita o estacionamento seguro do caminhão e cumpra os requisitos municipais de sinalização.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/50 flex justify-end">
          <button
            onClick={onClose}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
