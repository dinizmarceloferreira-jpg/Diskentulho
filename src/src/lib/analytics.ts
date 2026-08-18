export function trackWhatsAppClick(location: string) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', 'conversion', {
      send_to: 'AW-18226966667/AdFMCImG-uMcEIvhpfND',
      event_category: 'engagement',
      event_label: location,
    });
  }
}
