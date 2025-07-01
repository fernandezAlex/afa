# 🚀 AFA Creations - Next.js Portfolio

> **Sitio web profesional de Alex Fernández - Desarrollador Full Stack y Diseñador Digital**

Migrado exitosamente de Create React App a **Next.js 15** con enfoque en **SEO**, **rendimiento** e **internacionalización**.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## 🌟 **Características Principales**

- ⚡ **Next.js 15** con App Router para máximo rendimiento
- 🔍 **SEO avanzado** con meta tags dinámicos y structured data
- 🌐 **Internacionalización** completa (ES/EN)
- 📱 **Responsive design** optimizado para todos los dispositivos
- 🎨 **UI/UX moderno** con Tailwind CSS + Bootstrap
- 📊 **Analytics integrado** con Vercel Speed Insights
- 🚀 **Core Web Vitals** optimizados

## 🛠️ **Stack Tecnológico**

### **Frontend**
- **Next.js 15** - Framework React con SSG/SSR
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utilitario
- **Bootstrap** - Componentes UI
- **Sass/SCSS** - Preprocesador CSS
- **Framer Motion** - Animaciones

### **SEO & Performance**
- **Metadata API** - Meta tags dinámicos
- **Schema.org** - Structured data para Rich Snippets
- **Sitemap dinámico** - Generación automática
- **Robots.txt** - Control de crawlers
- **Image Optimization** - Next.js Image component
- **Font Optimization** - Google Fonts optimizadas

### **Internacionalización**
- **Sistema i18n** personalizado para App Router
- **Rutas localizadas** - URLs SEO-friendly por idioma
- **Detección automática** de idioma
- **Fallbacks** inteligentes

## 🚀 **Inicio Rápido**

### **Prerrequisitos**
- Node.js 18.0 o superior
- npm o yarn

### **Instalación**

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/afa-creations-nextjs.git

# Navegar al directorio
cd afa-creations-nextjs

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### **Scripts Disponibles**

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm start           # Inicia el servidor de producción

# Calidad de código
npm run lint        # Ejecuta ESLint
npm run lint:fix    # Corrige errores de ESLint automáticamente

# Utilidades
npm run type-check  # Verifica tipos de TypeScript
```

## 📁 **Estructura del Proyecto**

```
afa-creations-nextjs/
├── app/                    # 🚀 App Router (Next.js 15)
│   ├── layout.tsx         # Layout global con SEO
│   ├── page.tsx           # Página principal
│   ├── sitemap.ts         # Sitemap dinámico
│   ├── robots.ts          # Robots.txt
│   └── globals.css        # Estilos globales
│
├── components/             # 🧩 Componentes React
│   ├── Hero.tsx           # Sección hero
│   ├── About.tsx          # Sección sobre mí
│   ├── Portfolio.tsx      # Portfolio de proyectos
│   ├── Services.tsx       # Servicios ofrecidos
│   ├── Resume.tsx         # Currículum
│   ├── FAQs.tsx           # Preguntas frecuentes
│   ├── Testimonials.tsx   # Testimonios
│   ├── Contact.tsx        # Formulario de contacto
│   └── CallToAction.tsx   # Llamadas a la acción
│
├── lib/                   # 📚 Utilidades y configuración
│   ├── dictionaries.ts    # Sistema de internacionalización
│   └── data.ts            # Gestión de datos y APIs
│
├── locales/               # 🌐 Archivos de traducción
│   ├── es.json           # Textos en español
│   └── en.json           # Textos en inglés
│
├── data/                  # 📊 Datos del sitio
│   ├── projectsData.json # Información de proyectos
│   ├── faqs-es.json      # FAQs en español
│   ├── faqs-en.json      # FAQs en inglés
│   ├── reviews-es.json   # Testimonios en español
│   └── reviews-en.json   # Testimonios en inglés
│
├── public/                # 🖼️ Assets públicos
│   ├── images/           # Imágenes optimizadas
│   ├── icons/            # Iconos y favicons
│   └── documents/        # Documentos descargables
│
├── sass/                  # 🎨 Estilos SCSS
│   ├── stylesheet.scss   # Archivo principal
│   ├── _variables.scss   # Variables globales
│   └── ...              # Otros archivos SCSS
│
└── next.config.js         # ⚙️ Configuración de Next.js
```

## 🔍 **Características SEO**

### **Meta Tags Dinámicos**
Cada página genera automáticamente:
- Title y description optimizados
- Open Graph para redes sociales
- Twitter Cards
- URLs canónicas
- Hreflang para idiomas

### **Structured Data (Schema.org)**
- **Person** - Información de Alex Fernández
- **Organization** - Datos de AFA Creations
- **Service** - Servicios ofrecidos
- **FAQPage** - Preguntas frecuentes
- **Review** - Testimonios de clientes

### **Sitemap Automático**
Genera dinámicamente:
- Páginas principales
- Proyectos individuales
- Categorías de portfolio
- Versiones en múltiples idiomas

## 🌐 **Internacionalización**

### **Idiomas Soportados**
- 🇪🇸 **Español** (predeterminado)
- 🇺🇸 **Inglés**

### **URLs Localizadas**
```
https://afacreations.com/es/       # Español
https://afacreations.com/en/       # Inglés
https://afacreations.com/es/portfolio/  # Portfolio en español
https://afacreations.com/en/portfolio/  # Portfolio en inglés
```

### **Agregar Nuevo Idioma**

1. **Crear archivo de traducción:**
```bash
# Ejemplo para francés
touch locales/fr.json
```

2. **Actualizar tipos en `lib/dictionaries.ts`:**
```typescript
export type Locale = 'es' | 'en' | 'fr';
```

3. **Añadir configuración en `next.config.js`:**
```javascript
// Actualizar dominios de imágenes si es necesario
```

## 📊 **Performance y Optimización**

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)** < 2.5s
- **FID (First Input Delay)** < 100ms
- **CLS (Cumulative Layout Shift)** < 0.1

### **Optimizaciones Implementadas**
- ⚡ **Static Generation** para páginas principales
- 🖼️ **Image Optimization** automática
- 📦 **Code Splitting** inteligente
- 🔤 **Font Optimization** con Google Fonts
- 🗜️ **Minificación** de CSS y JS
- 📱 **Responsive Images** con múltiples tamaños

## 🚀 **Despliegue**

### **Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### **Netlify**
```bash
# Build command
npm run build

# Publish directory
out/
```

### **Variables de Entorno**
```bash
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://afacreations.com
```

## 🔧 **Configuración de Desarrollo**

### **ESLint**
```json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

### **TypeScript**
Configuración estricta para mejor calidad de código:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

## 📈 **Monitoreo y Analytics**

### **Métricas Incluidas**
- **Google Analytics 4** - Tráfico y comportamiento
- **Vercel Speed Insights** - Core Web Vitals
- **Google Search Console** - Rendimiento SEO
- **Schema Markup Validator** - Structured data

### **URLs de Validación**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema Markup Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

## 🤝 **Contribución**

### **Proceso de Desarrollo**
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

### **Estándares de Código**
- **TypeScript** para todo el código
- **ESLint** para linting
- **Prettier** para formateo
- **Conventional Commits** para mensajes

## 📝 **Licencia**

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 📞 **Contacto**

**Alex Fernández** - AFA Creations
- 🌐 Website: [afacreations.com](https://afacreations.com)
- 📧 Email: info@afacreations.com
- 💼 LinkedIn: [alejandro-fernandez](https://linkedin.com/in/alejandro-fernandez)
- 🐙 GitHub: [alexfernandez](https://github.com/alexfernandez)

---

**¡Gracias por revisar AFA Creations! Si tienes preguntas o sugerencias, no dudes en contactar.** 🚀
