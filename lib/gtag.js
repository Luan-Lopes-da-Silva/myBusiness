export const measurementId = 'G-2RW4KC3BJP'


export const pageview = url => {
    window.gtag("config", measurementId, {
      page_path: url,
    });
  };
  
  export const event = ({ action, category, label, value ,link_url,page_url}) => {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      link_url:link_url,
      page_url: page_url
    });
  };