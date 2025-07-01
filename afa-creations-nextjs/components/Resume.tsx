import { Dictionary } from '@/lib/dictionaries';

interface ResumeProps {
  dictionary: Dictionary;
  locale: string;
}

export default function Resume({ dictionary, locale }: ResumeProps) {
  return (
    <section id="resume" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {dictionary['work-career']}
        </h2>
        <p className="text-center text-gray-600">
          Experiencia profesional y educación
        </p>
      </div>
    </section>
  );
}