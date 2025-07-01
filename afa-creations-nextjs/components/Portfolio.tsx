import { Dictionary } from '@/lib/dictionaries';
import { Project } from '@/lib/data';

interface PortfolioProps {
  projects: Project[];
  dictionary: Dictionary;
  locale: string;
  showAll: boolean;
}

export default function Portfolio({ projects, dictionary, locale, showAll }: PortfolioProps) {
  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {dictionary['recent-projects']}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {projects.length} proyectos destacados
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(0, showAll ? projects.length : 6).map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">
                {project.categories.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}