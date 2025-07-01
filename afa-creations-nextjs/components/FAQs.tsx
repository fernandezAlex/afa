import { Dictionary } from '@/lib/dictionaries';
import { FAQ } from '@/lib/data';

interface FAQsProps {
  faqs: FAQ[];
  dictionary: Dictionary;
  locale: string;
}

export default function FAQs({ faqs, dictionary, locale }: FAQsProps) {
  return (
    <section id="faqs" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {dictionary['have-questions']}
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}