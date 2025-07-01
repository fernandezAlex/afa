import Image from 'next/image';
import Link from 'next/link';
import { Dictionary } from '@/lib/dictionaries';

interface HeroProps {
  dictionary: Dictionary;
  locale: string;
}

export default function Hero({ dictionary, locale }: HeroProps) {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 🌅 Background con optimización de imagen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Fondo profesional de desarrollo web"
          fill
          priority
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60" />
      </div>

      {/* 🎯 Contenido principal */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* 👋 Saludo principal */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-lg md:text-xl font-normal mb-2 text-blue-200">
              {dictionary['intro-welcome']}
            </span>
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex Fernández
            </span>
            <span className="block text-2xl md:text-3xl mt-2 font-medium">
              {dictionary['intro-developer']} & {dictionary['intro-designer']}
            </span>
          </h1>

          {/* 🎨 Especialidades */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-blue-600/80 rounded-full text-sm font-medium">
              {dictionary['intro-web-app']}
            </span>
            <span className="px-4 py-2 bg-purple-600/80 rounded-full text-sm font-medium">
              Next.js & React
            </span>
            <span className="px-4 py-2 bg-green-600/80 rounded-full text-sm font-medium">
              {dictionary.ia}
            </span>
            <span className="px-4 py-2 bg-orange-600/80 rounded-full text-sm font-medium">
              UI/UX Design
            </span>
          </div>

          {/* 📍 Ubicación */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {dictionary['intro-based']}
          </p>

          {/* 🎯 Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#portfolio"
              className="btn btn-primary px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Ver portfolio de proyectos de Alex Fernández"
            >
              {dictionary['view-jobs']}
            </Link>
            <Link
              href="#contact"
              className="btn btn-outline px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 rounded-lg font-semibold transition-all duration-300"
              aria-label="Contactar con Alex Fernández para proyectos"
            >
              {dictionary['contact-me']}
            </Link>
          </div>

          {/* 📊 Estadísticas rápidas */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">5+</div>
              <div className="text-sm text-blue-200">Años Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">50+</div>
              <div className="text-sm text-purple-200">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">100%</div>
              <div className="text-sm text-green-200">Satisfacción</div>
            </div>
          </div>
        </div>

        {/* 🔽 Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="text-white hover:text-blue-300 transition-colors"
            aria-label="Scroll hacia la sección sobre mí"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* 🎨 Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-8 w-16 h-16 bg-green-500/20 rounded-full blur-xl animate-pulse delay-500" />
    </section>
  );
}