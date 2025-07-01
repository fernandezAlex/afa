import { Dictionary } from '@/lib/dictionaries';

interface ContactProps {
  dictionary: Dictionary;
  locale: string;
}

export default function Contact({ dictionary, locale }: ContactProps) {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {dictionary['lets-get-in-touch']}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {dictionary['contact-description']}
        </p>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder={dictionary['your-name']}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder={dictionary['your-email']}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder={dictionary['how-can-help']}
              rows={4}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {dictionary.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}