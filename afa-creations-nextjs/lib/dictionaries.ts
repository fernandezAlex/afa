import 'server-only';

// 🌐 Tipos para mejor tipado y autocompletado
export type Locale = 'es' | 'en';

// 📚 Diccionarios tipados para mejor desarrollo
export interface Dictionary {
  // Meta tags para SEO
  'meta-title': string;
  'meta-description': string;
  
  // Navegación
  home: string;
  'about-me': string;
  'what-i-do': string;
  resume: string;
  portfolio: string;
  faq: string;
  'client-opinion': string;
  
  // Introducción
  'intro-welcome': string;
  'intro-designer': string;
  'intro-developer': string;
  'intro-web-app': string;
  ia: string;
  'intro-based': string;
  'view-jobs': string;
  'contact-me': string;
  
  // Sobre mí
  'about-title': string;
  'intro-welcome-2': string;
  'years-experience': string;
  'about-me-description-1': string;
  'about-me-description-1-modified': string;
  'about-me-description-2': string;
  name: string;
  from: string;
  
  // Servicios
  'service-title': string;
  'design-service-title': string;
  'design-service': string;
  'web-service-title': string;
  'web-service': string;
  'ecommerce-service-title': string;
  'ecommerce-service': string;
  'digital-transformation-service-title': string;
  'digital-transformation-service': string;
  'photography-service-title': string;
  'photography-service': string;
  'agenda-service-title': string;
  'agenda-service': string;
  'content-service-title': string;
  'content-service': string;
  
  // Currículum
  'work-career': string;
  'my-education': string;
  'my-experience': string;
  'my-skylls': string;
  current: string;
  'download-cv': string;
  
  // Educación
  'education-nuclio-title': string;
  'education-nuclio-description': string;
  'education-marketing-title': string;
  'education-marketing-description': string;
  'education-cfgs-title': string;
  'education-cfgs-description': string;
  'education-cfgm-title': string;
  'education-cfgm-description': string;
  'education-digital-manager-title': string;
  'education-digital-manager-description': string;
  
  // Experiencia
  'experience-travelport-title': string;
  'experience-travelport-description': string;
  'experience-mediamarkt-title': string;
  'experience-mediamarkt-description': string;
  'experience-topdoctors-title': string;
  'experience-topdoctors-description': string;
  
  // Contacto
  'lets-get-in-touch': string;
  'contact-description': string;
  'living-in': string;
  call: string;
  'estimate-project': string;
  'your-name': string;
  'your-email': string;
  'how-can-help': string;
  send: string;
  'interested-working': string;
  'hire-me': string;
  
  // Portfolio
  'recent-projects': string;
  'all-works': string;
  all: string;
  web: string;
  design: string;
  photography: string;
  'view-more': string;
  
  // FAQ
  'have-questions': string;
  'what-clients-say': string;
}

// 🎯 Cache de diccionarios para mejor performance
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import('../locales/es.json').then((module) => module.default),
  en: () => import('../locales/en.json').then((module) => module.default),
};

// 📖 Función principal para obtener diccionarios
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  // ✅ Validación del locale para evitar errores
  if (!dictionaries[locale]) {
    console.warn(`Locale ${locale} not found, falling back to 'es'`);
    return dictionaries.es();
  }
  
  try {
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error);
    // 🔄 Fallback al español en caso de error
    return dictionaries.es();
  }
};

// 🌍 Función para obtener todos los locales disponibles
export const getAvailableLocales = (): Locale[] => {
  return Object.keys(dictionaries) as Locale[];
};

// 🔍 Función para validar si un locale es válido
export const isValidLocale = (locale: string): locale is Locale => {
  return locale in dictionaries;
};

// 📊 Función para obtener información del locale
export const getLocaleInfo = (locale: Locale) => {
  const localeInfo = {
    es: {
      name: 'Español',
      nativeName: 'Español',
      flag: '🇪🇸',
      dir: 'ltr',
      htmlLang: 'es-ES',
    },
    en: {
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸',
      dir: 'ltr',
      htmlLang: 'en-US',
    },
  };
  
  return localeInfo[locale];
};

// 🎨 Función para obtener el locale alternativo
export const getAlternateLocale = (currentLocale: Locale): Locale => {
  return currentLocale === 'es' ? 'en' : 'es';
};

// 🔗 Función para generar URLs de idiomas alternativos (importante para SEO)
export const generateAlternateUrls = (currentPath: string, currentLocale: Locale) => {
  const baseUrl = 'https://afacreations.com';
  const alternateLocale = getAlternateLocale(currentLocale);
  
  // Remover el locale actual de la URL si existe
  const pathWithoutLocale = currentPath.replace(`/${currentLocale}`, '').replace(/^\/+/, '');
  
  return {
    current: `${baseUrl}/${currentLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`,
    alternate: `${baseUrl}/${alternateLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`,
    canonical: `${baseUrl}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`,
  };
};

// 📝 Función para formatear texto con variables (útil para contenido dinámico)
export const formatMessage = (template: string, variables: Record<string, string | number>): string => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return variables[key]?.toString() || match;
  });
};

// 🏷️ Función para obtener meta tags específicos del idioma
export const getLocalizedMetaTags = async (locale: Locale, path: string = '') => {
  const dict = await getDictionary(locale);
  const localeInfo = getLocaleInfo(locale);
  const urls = generateAlternateUrls(path, locale);
  
  return {
    title: dict['meta-title'],
    description: dict['meta-description'],
    language: localeInfo.htmlLang,
    canonical: urls.canonical,
    alternate: urls.alternate,
    hreflang: {
      [locale]: urls.current,
      [getAlternateLocale(locale)]: urls.alternate,
    },
  };
};