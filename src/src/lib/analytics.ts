export function trackWhatsAppClick(location: string) {
  if (typeof window !== 'undefined') {
    if ('gtag' in window) {
      // @ts-ignore
      window.gtag('event', 'conversion', {
        send_to: 'AW-18226966667/-x5OCMSr6d8cEIvhpfND',
        event_category: 'engagement',
        event_label: location,
      });
    }
    // @ts-ignore
    if (typeof window.gtag_report_conversion === 'function') {
      // @ts-ignore
      window.gtag_report_conversion();
    }
  }
}
