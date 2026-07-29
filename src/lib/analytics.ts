export function trackWhatsAppClick(location: string) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', 'conversion', {
      send_to: 'AW-17696330213/whatsapp_click',
      event_category: 'engagement',
      event_label: location,
    });
  }
}
