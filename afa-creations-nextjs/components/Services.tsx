import { Dictionary } from '@/lib/dictionaries';

interface ServicesProps {
  dictionary: Dictionary;
  locale: string;
}

export default function Services({ dictionary, locale }: ServicesProps) {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {dictionary['service-title']}
        </h2>
        <p className="text-center text-gray-600">
          Servicios de desarrollo web y diseño digital
        </p>
      </div>
    </section>
  );
}