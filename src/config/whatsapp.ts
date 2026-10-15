// Configuração centralizada do WhatsApp para a JP Entulho
// Quando o novo número oficial DDD 62 estiver disponível, altere apenas WHATSAPP_NUMBER e WHATSAPP_DISPLAY aqui.

export const WHATSAPP_NUMBER = "5531972528564";
export const WHATSAPP_DISPLAY = "(31) 97252-8564";
export const DEFAULT_WHATSAPP_MESSAGE = "Olá vim pelo site e preciso de uma caçamba em Goiânia";

/**
 * Retorna o link completo do WhatsApp com mensagem opcional
 */
export function getWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
