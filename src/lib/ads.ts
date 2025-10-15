// src/lib/ads.ts

// Define gtag no objeto window para o TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Dispara um evento de conversão do Google Ads.
 * @param conversionLabel O Label de Conversão do Google Ads (ex: 'ASDFG_hJKL/xyz-123').
 * @param value Opcional. O valor da conversão (ex: 100.00).
 * @param currency Opcional. A moeda da conversão (ex: 'BRL').
 */
export const sendAdConversionEvent = (
  conversionLabel: string,
  value: number = 0,
  currency: string = 'BRL'
) => {
  // Verifica se o gtag.js foi carregado antes de disparar o evento
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      // Seu ID AW-17646884256 + o Label de Conversão
      'send_to': `AW-17646884256/${conversionLabel}`, 
      'value': value,
      'currency': currency,
      // 'transaction_id': '' // Adicione se estiver rastreando vendas com ID único
    });
    console.log(`Google Ads Conversion Fired: ${conversionLabel}`);
  } else {
    // Log para debugar, caso o script não tenha carregado
    console.warn("Google gtag is not loaded. Conversion event suppressed.");
  }
};