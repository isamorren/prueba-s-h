// CONFIGURACIÓN DE CAMPAÑA DIGITAL
export const CAMPAIGN_CONFIG = {
  ANALYTICS: {
    GA_ID: process.env.REACT_APP_GA_ID || 'GA_MEASUREMENT_ID',
    GTM_ID: process.env.REACT_APP_GTM_ID || 'GTM_CONTAINER_ID',
    FACEBOOK_PIXEL: process.env.REACT_APP_FB_PIXEL || 'FB_PIXEL_ID'
  },
  
  SEO: {
    SITE_NAME: 'Sodimac Homecenter',
    DEFAULT_TITLE: 'Muebles para Home Office, Home School y Gaming | Sodimac Homecenter',
    DEFAULT_DESCRIPTION: 'Transforma tu hogar con muebles ergonómicos para trabajo, estudio y gaming. +65,000 productos, 25+ estilos, financiamiento y entrega a domicilio.',
    KEYWORDS: [
      'muebles home office',
      'escritorios ergonómicos',
      'sillas gamer',
      'muebles home school',
      'decoración hogar',
      'sodimac homecenter'
    ]
  },
  
  CONVERSION_GOALS: {
    PRIMARY: 'product_view',
    SECONDARY: 'category_browse',
    TERTIARY: 'newsletter_signup'
  },
  
  CUSTOMER_JOURNEY: {
    AWARENESS: ['hero_view', 'category_discovery'],
    CONSIDERATION: ['product_comparison', 'guide_access'],
    DECISION: ['add_to_cart', 'contact_advisor'],
    RETENTION: ['newsletter', 'loyalty_program']
  }
}