// Configuração centralizada do WhatsApp para a Disk Caçamba Goiás

export const WHATSAPP_NUMBER = "556296625818";
export const WHATSAPP_DISPLAY = "(62) 9662-5818";
export const DEFAULT_WHATSAPP_MESSAGE = "Olá vim pelo site e preciso de uma caçamba em Goiânia";

/**
 * Retorna o link completo do WhatsApp com mensagem opcional
 */
export function getWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
