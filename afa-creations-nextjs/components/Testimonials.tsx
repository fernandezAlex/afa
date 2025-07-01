import { Dictionary } from '@/lib/dictionaries';
import { Review } from '@/lib/data';

interface TestimonialsProps {
  reviews: Review[];
  dictionary: Dictionary;
  locale: string;
}

export default function Testimonials({ reviews, dictionary, locale }: TestimonialsProps) {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {dictionary['what-clients-say']}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">&ldquo;{review.review}&rdquo;</p>
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}