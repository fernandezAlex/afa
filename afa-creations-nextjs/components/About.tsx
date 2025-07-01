import Image from 'next/image';
import { Dictionary } from '@/lib/dictionaries';

interface AboutProps {
  dictionary: Dictionary;
  locale: string;
}

export default function About({ dictionary, locale }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 🖼️ Imagen profesional */}
          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/alex-fernandez-profile.jpg"
                alt="Alex Fernández - Desarrollador Full Stack y Diseñador Digital"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-xl" />
          </div>

          {/* 📝 Contenido textual */}
          <div>
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {dictionary['about-title']}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                {dictionary['intro-welcome-2']}
                <span className="text-blue-600">Alex Fernández</span>
              </h2>
            </div>

            {/* 📊 Años de experiencia */}
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl mr-4">
                5+
              </div>
              <span 
                className="text-gray-700 font-medium"
                dangerouslySetInnerHTML={{ 
                  __html: dictionary['years-experience'] 
                }}
              />
            </div>

            {/* 📄 Descripción profesional */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{dictionary['about-me-description-1-modified']}</p>
              <p>{dictionary['about-me-description-2']}</p>
            </div>

            {/* 🏷️ Información personal */}
            <div className="grid grid-cols-2 gap-4 mt-8 p-6 bg-white rounded-xl shadow-lg">
              <div>
                <span className="text-gray-500 text-sm font-medium">{dictionary.name}:</span>
                <p className="font-semibold text-gray-900">Alex Fernández</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm font-medium">{dictionary.from}:</span>
                <p className="font-semibold text-gray-900">Barcelona, España</p>
              </div>
            </div>

            {/* 🎯 Habilidades principales */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Especialidades</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Next.js', 'React', 'TypeScript', 'Node.js', 'UI/UX Design', 
                  'SEO', 'Transformación Digital', 'IA & Automatización'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}