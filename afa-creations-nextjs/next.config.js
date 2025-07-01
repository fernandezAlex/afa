/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🌐 Nota: i18n se maneja manualmente en App Router
  
  // 🖼️ Optimización de imágenes para mejorar Core Web Vitals
  images: {
    domains: ['afacreations.com', 'localhost'],
    formats: ['image/webp', 'image/avif'], // Formatos modernos para mejor rendimiento
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // Cache de 1 año para imágenes estáticas
  },
  
  // ⚡ Optimizaciones experimentales para rendimiento
  experimental: {
    optimizeCss: true, // Optimización automática de CSS
    optimizePackageImports: ['react-bootstrap', 'framer-motion'], // Tree shaking mejorado
  },
  
  // 📦 Configuración de compilación para SEO
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remover console.log en producción
  },
  
  // 🔒 Headers de seguridad para mejor ranking SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // 📄 Configuración para páginas estáticas
  trailingSlash: false, // URLs limpias sin slash final
  
  // 🚀 Optimización de bundle
  webpack: (config, { isServer }) => {
    // Optimizaciones adicionales para el bundle
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;