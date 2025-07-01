import Link from 'next/link';
import { Dictionary } from '@/lib/dictionaries';

interface CallToActionProps {
  dictionary: Dictionary;
  locale: string;
}

export default function CallToAction({ dictionary, locale }: CallToActionProps) {
  return (
    <section className="section-padding bg-blue-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          {dictionary['interested-working']}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {dictionary['estimate-project']}
        </p>
        <Link
          href="#contact"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {dictionary['hire-me']}
        </Link>
      </div>
    </section>
  );
}