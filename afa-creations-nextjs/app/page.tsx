import { Metadata } from 'next';
import { getDictionary, getLocalizedMetaTags } from '@/lib/dictionaries';
import { getProjects, getFAQs, getReviews, getPortfolioStats } from '@/lib/data';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Resume from '@/components/Resume';
import FAQs from '@/components/FAQs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import CallToAction from '@/components/CallToAction';

// 🔍 Configuración de la página para SSG (Static Site Generation)
// Esto hace que la página se genere en tiempo de build para mejor SEO
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidar cada hora

// 🏷️ Meta tags dinámicos optimizados para SEO
export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getLocalizedMetaTags('es', '/');
  
  return {
    title: metaTags.title,
    description: metaTags.description,
    keywords: [
      'desarrollo web Barcelona',
      'diseño UI/UX',
      'programador full stack',
      'Next.js developer',
      'React specialist',
      'transformación digital',
      'automatización IA',
      'SEO Barcelona',
      'freelance developer',
      'portfolio desarrollador'
    ],
    openGraph: {
      title: metaTags.title,
      description: metaTags.description,
      url: metaTags.canonical,
      siteName: 'AFA Creations',
      images: [
        {
          url: '/images/hero-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Alex Fernández - Desarrollador Full Stack y Diseñador Digital',
        },
      ],
      locale: 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTags.title,
      description: metaTags.description,
      images: ['/images/hero-image.jpg'],
    },
    alternates: {
      canonical: metaTags.canonical,
      languages: {
        'es-ES': 'https://afacreations.com/es',
        'en-US': 'https://afacreations.com/en',
      },
    },
    // 🏗️ Structured data específico para la página principal
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://afacreations.com/#webpage',
        url: 'https://afacreations.com',
        name: metaTags.title,
        description: metaTags.description,
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://afacreations.com/#website',
        },
        about: {
          '@type': 'Person',
          '@id': 'https://afacreations.com/#person',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://afacreations.com/images/hero-image.jpg',
        },
        datePublished: '2024-01-01T00:00:00+00:00',
        dateModified: new Date().toISOString(),
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: 'https://afacreations.com',
            },
          ],
        },
      }),
    },
  };
}

// 📄 Componente principal de la página de inicio
export default async function HomePage() {
  // 🚀 Obtener todos los datos en paralelo para mejor performance
  const [
    dictionary,
    faqs,
    reviews,
    portfolioStats
  ] = await Promise.all([
    getDictionary('es'),
    getFAQs('es'),
    getReviews('es'),
    getPortfolioStats()
  ]);

  // 📊 Datos para structured data de los proyectos destacados
  const featuredProjects = portfolioStats.latestProjects.slice(0, 3);
  
  return (
    <>
      {/* 🏗️ Structured data adicional para proyectos destacados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Proyectos Destacados - AFA Creations',
            description: 'Selección de proyectos más recientes de desarrollo web y diseño digital',
            itemListElement: featuredProjects.map((project, index) => ({
              '@type': 'CreativeWork',
              position: index + 1,
              name: project.title,
              description: project.document?.projectInfo || project.title,
              image: `https://afacreations.com/${project.thumbImage}`,
              creator: {
                '@type': 'Person',
                name: 'Alex Fernández',
              },
              dateCreated: project.document?.date || '2024',
              about: project.document?.industry || 'Desarrollo Web',
            })),
          }),
        }}
      />

      {/* 🎯 Contenido principal de la página */}
      <main className="main-content">
        {/* 🚀 Sección Hero - Primera impresión crucial para SEO */}
        <Hero 
          dictionary={dictionary}
          locale="es"
        />

        {/* 👨‍💻 Sección Sobre Mí - Contenido importante para personal branding */}
        <About 
          dictionary={dictionary}
          locale="es"
        />

        {/* 🎨 Sección Portfolio - Contenido principal para SEO */}
        <Portfolio 
          projects={featuredProjects}
          dictionary={dictionary}
          locale="es"
          showAll={false}
        />

        {/* 🛠️ Sección Servicios - Keywords importantes para SEO */}
        <Services 
          dictionary={dictionary}
          locale="es"
        />

        {/* 📞 Call to Action - Conversión y engagement */}
        <CallToAction 
          dictionary={dictionary}
          locale="es"
        />

        {/* 📋 Sección Currículum - Autoridad y experiencia */}
        <Resume 
          dictionary={dictionary}
          locale="es"
        />

        {/* ❓ Sección FAQs - Long-tail keywords y user intent */}
        <FAQs 
          faqs={faqs}
          dictionary={dictionary}
          locale="es"
        />

        {/* ⭐ Sección Testimonios - Social proof y confianza */}
        <Testimonials 
          reviews={reviews}
          dictionary={dictionary}
          locale="es"
        />

        {/* 📞 Sección Contacto - Conversión final */}
        <Contact 
          dictionary={dictionary}
          locale="es"
        />
      </main>

      {/* 🏗️ Structured data para FAQ (Rich Snippets) */}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      {/* 🏗️ Structured data para reviews (Rich Snippets) */}
      {reviews.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://afacreations.com/#organization',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1),
                reviewCount: reviews.length,
                bestRating: 5,
                worstRating: 1,
              },
              review: reviews.slice(0, 5).map(review => ({
                '@type': 'Review',
                author: {
                  '@type': 'Person',
                  name: review.name,
                },
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: review.rating,
                  bestRating: 5,
                  worstRating: 1,
                },
                reviewBody: review.review,
                datePublished: '2024-01-01', // Idealmente esto vendría de los datos
              })),
            }),
          }}
        />
      )}

      {/* 🏗️ Structured data para servicios ofrecidos */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://afacreations.com/#services',
            name: 'Servicios de Desarrollo Web y Diseño Digital',
            description: 'Servicios profesionales de desarrollo web, diseño UI/UX, transformación digital e implementación de IA',
            provider: {
              '@type': 'Person',
              '@id': 'https://afacreations.com/#person',
            },
            areaServed: {
              '@type': 'Country',
              name: 'España',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Servicios de Desarrollo Web',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Desarrollo Web',
                    description: 'Creación de sitios web modernos y aplicaciones web con Next.js y React',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Diseño UI/UX',
                    description: 'Diseño de interfaces de usuario y experiencia de usuario optimizada',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Transformación Digital',
                    description: 'Implementación de soluciones digitales y automatización con IA',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'SEO y Marketing Digital',
                    description: 'Optimización para motores de búsqueda y estrategias de marketing digital',
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
