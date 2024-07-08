export const GA_TRACKING_ID = 'SUA_ID_DE_RASTREAMENTO_GA'; // Substitua pela sua ID de rastreamento

// Envia um evento pageview para o Google Analytics
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Envia um evento qualquer para o Google Analytics
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
