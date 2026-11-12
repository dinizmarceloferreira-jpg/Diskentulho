let lastTrackedTime = 0;

export function trackWhatsAppClick(location: string) {
  const now = Date.now();
  // Evita disparos duplicados por duplo clique ou cliques repetidos em menos de 1.5s
  if (now - lastTrackedTime < 1500) {
    return;
  }
  lastTrackedTime = now;

  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', 'conversion', {
      send_to: 'AW-18226966667/AdFMCImG-uMcEIvhpfND',
      event_category: 'engagement',
      event_label: location,
    });
  }
}
