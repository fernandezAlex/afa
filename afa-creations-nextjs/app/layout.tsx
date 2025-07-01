import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/stylesheet.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://afacreations.com"),
  title: {
    default: "AFA Creations | Desarrollo Web y Diseño Digital en Barcelona",
    template: "%s | AFA Creations",
  },
  description: "Servicios profesionales de desarrollo web, diseño UI/UX, transformación digital e implementación de IA en Barcelona. Especialista en Next.js, React y automatización de procesos.",
  keywords: [
    "desarrollo web Barcelona",
    "diseño digital",
    "Alex Fernández",
    "programación web",
    "UI/UX Barcelona",
    "Next.js",
    "React",
    "transformación digital",
    "automatización IA",
    "SEO Barcelona",
    "desarrollo aplicaciones web",
    "diseño responsive",
  ],
  authors: [{ name: "Alex Fernández", url: "https://afacreations.com" }],
  creator: "Alex Fernández - AFA Creations",
  publisher: "AFA Creations",
  
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://afacreations.com",
    title: "AFA Creations | Desarrollo Web y Diseño Digital en Barcelona",
    description: "Servicios profesionales de desarrollo web, diseño UI/UX y transformación digital. Especialista en Next.js, React y automatización con IA.",
    siteName: "AFA Creations",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AFA Creations - Desarrollo Web y Diseño Digital",
        type: "image/jpeg",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@afacreations",
    creator: "@alexfernandez",
    title: "AFA Creations | Desarrollo Web y Diseño Digital",
    description: "Servicios profesionales de desarrollo web y diseño digital en Barcelona",
    images: ["/images/twitter-card.jpg"],
  },
  
  alternates: {
    canonical: "https://afacreations.com",
    languages: {
      "es-ES": "https://afacreations.com/es",
      "en-US": "https://afacreations.com/en",
    },
  },
  
  verification: {
    google: "G-P33208TRQQ",
    yandex: "verification_token",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  manifest: "/manifest.json",
  
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  
  category: "technology",
  classification: "Business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://afacreations.com/#organization",
              name: "AFA Creations",
              legalName: "AFA Creations - Alex Fernández",
              description: "Servicios profesionales de desarrollo web, diseño UI/UX y transformación digital en Barcelona",
              url: "https://afacreations.com",
              logo: {
                "@type": "ImageObject",
                url: "https://afacreations.com/images/logo.png",
                width: 512,
                height: 512,
              },
              image: "https://afacreations.com/images/hero-image.jpg",
              telephone: "+34-XXX-XXX-XXX",
              email: "info@afacreations.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barcelona",
                addressRegion: "Cataluña",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.3851,
                longitude: 2.1734,
              },
              areaServed: {
                "@type": "Country",
                name: "España",
              },
              serviceType: [
                "Desarrollo Web",
                "Diseño UI/UX",
                "Transformación Digital",
                "Automatización con IA",
                "SEO y Marketing Digital"
              ],
              founder: {
                "@type": "Person",
                name: "Alex Fernández",
                jobTitle: "Desarrollador Full Stack y Diseñador Digital",
                url: "https://afacreations.com",
                sameAs: [
                  "https://www.linkedin.com/in/alejandro-fernandez/",
                  "https://github.com/alexfernandez",
                ],
              },
              sameAs: [
                "https://www.linkedin.com/company/afa-creations/",
                "https://github.com/afa-creations",
                "https://www.instagram.com/afacreations/",
              ],
              priceRange: "€€",
              paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
              currenciesAccepted: "EUR",
              openingHours: "Mo-Fr 09:00-18:00",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "27",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://afacreations.com/#person",
              name: "Alex Fernández",
              alternateName: "Alejandro Fernández",
              description: "Desarrollador Full Stack y Diseñador Digital especializado en Next.js, React y transformación digital",
              url: "https://afacreations.com",
              image: "https://afacreations.com/images/alex-fernandez.jpg",
              jobTitle: "Desarrollador Full Stack y Diseñador Digital",
              worksFor: {
                "@type": "Organization",
                name: "AFA Creations",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barcelona",
                addressCountry: "ES",
              },
              sameAs: [
                "https://www.linkedin.com/in/alejandro-fernandez/",
                "https://github.com/alexfernandez",
              ],
              knowsAbout: [
                "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
                "UI/UX Design", "SEO", "Digital Transformation", "AI Automation"
              ],
            }),
          }}
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P33208TRQQ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P33208TRQQ', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.className}`}>
        {children}
        
        <SpeedInsights />
        
        <noscript>
          <div style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            right: 0, 
            backgroundColor: "#f39c12", 
            color: "white", 
            padding: "10px", 
            textAlign: "center", 
            zIndex: 9999 
          }}>
            Para una mejor experiencia, por favor habilita JavaScript en tu navegador.
          </div>
        </noscript>
      </body>
    </html>
  );
}
