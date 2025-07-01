# 🛠️ COMANDOS ÚTILES - AFA Creations Next.js

## 🚀 **Comandos de Desarrollo**

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start

# Verificar tipos TypeScript
npx tsc --noEmit

# Linting y corrección
npm run lint
npm run lint -- --fix
```

## 🔍 **Comandos de SEO y Validación**

```bash
# Generar sitemap (automático en build)
npm run build

# Validar structured data
curl -s "https://validator.schema.org/validate" \
  -H "Content-Type: application/json" \
  -d '{"url": "http://localhost:3000"}'

# Verificar meta tags
curl -s http://localhost:3000 | grep -i "meta\|title"
```

## 📊 **Comandos de Análisis**

```bash
# Analizar bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build

# Verificar performance
npx lighthouse http://localhost:3000 --view

# Audit de accesibilidad
npx lighthouse http://localhost:3000 --only-categories=accessibility --view
```

## 🌐 **Comandos de Internacionalización**

```bash
# Verificar archivos de idioma
ls -la locales/

# Validar JSON de idiomas
node -e "console.log(JSON.parse(require('fs').readFileSync('locales/es.json')))"
node -e "console.log(JSON.parse(require('fs').readFileSync('locales/en.json')))"
```

## 🚀 **Comandos de Despliegue**

### **Vercel**
```bash
# Instalar CLI
npm i -g vercel

# Login
vercel login

# Desplegar
vercel

# Desplegar a producción
vercel --prod
```

### **Netlify**
```bash
# Instalar CLI
npm i -g netlify-cli

# Login
netlify login

# Desplegar
netlify deploy

# Desplegar a producción
netlify deploy --prod
```

## 🔧 **Comandos de Mantenimiento**

```bash
# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit

# Corregir vulnerabilidades automáticamente
npm audit fix

# Limpiar cache
rm -rf .next
rm -rf node_modules
npm install
```

## 📱 **Comandos de Testing**

```bash
# Testing con diferentes dispositivos (usando Chrome DevTools)
google-chrome --remote-debugging-port=9222

# Verificar responsive design
npx puppeteer-cli screenshot http://localhost:3000 \
  --viewport 375x667 \
  --output mobile.png

npx puppeteer-cli screenshot http://localhost:3000 \
  --viewport 1920x1080 \
  --output desktop.png
```

## 🎯 **Comandos de Optimización**

```bash
# Optimizar imágenes (si tienes imagemin instalado)
npx imagemin public/images/* --out-dir=public/images/optimized

# Comprimir archivos estáticos
find .next/static -name "*.js" -exec gzip -k {} \;
find .next/static -name "*.css" -exec gzip -k {} \;

# Verificar tamaño de build
du -sh .next/

# Analizar qué archivos ocupan más espacio
find .next -type f -exec ls -la {} \; | sort -k5 -nr | head -20
```

## 🔍 **Comandos de Debug**

```bash
# Debug con Node.js inspector
NODE_OPTIONS='--inspect' npm run dev

# Ver logs detallados de Next.js
DEBUG=next* npm run dev

# Verificar variables de entorno
node -e "console.log(process.env)"

# Verificar configuración de Next.js
node -e "console.log(require('./next.config.js'))"
```

## 📊 **Comandos de Monitoreo**

```bash
# Verificar Core Web Vitals
npx web-vitals-cli http://localhost:3000

# Monitorear performance en tiempo real
npx autocannon http://localhost:3000

# Verificar accesibilidad
npx pa11y http://localhost:3000
```

## 🌐 **URLs Útiles para Testing**

```bash
# Desarrollo local
http://localhost:3000
http://localhost:3000/es
http://localhost:3000/en

# Sitemap
http://localhost:3000/sitemap.xml

# Robots
http://localhost:3000/robots.txt

# Testing de meta tags
curl -s http://localhost:3000 | grep -E "(title|meta)"
```

## 🔧 **Solución de Problemas Comunes**

```bash
# Error de puerto ocupado
lsof -ti:3000 | xargs kill -9
npm run dev

# Problemas con cache
rm -rf .next
npm run dev

# Problemas con dependencias
rm -rf node_modules package-lock.json
npm install

# Problemas con TypeScript
npx tsc --noEmit --skipLibCheck

# Verificar sintaxis de archivos JSON
find . -name "*.json" -exec node -e "JSON.parse(require('fs').readFileSync('{}'))" \;
```

## 📈 **Comandos de Análisis SEO**

```bash
# Verificar structured data
curl -s http://localhost:3000 | grep -o 'application/ld+json[^>]*>[^<]*' | head -5

# Verificar meta tags específicos
curl -s http://localhost:3000 | grep -i "og:\|twitter:\|canonical"

# Verificar hreflang
curl -s http://localhost:3000 | grep -i "hreflang"

# Verificar sitemap
curl -s http://localhost:3000/sitemap.xml | head -20
```

---

**💡 Tip:** Guarda este archivo como referencia rápida para el desarrollo y mantenimiento del proyecto.