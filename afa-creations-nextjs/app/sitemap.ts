import { MetadataRoute } from 'next';
import { getProjects } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://afacreations.com';
  
  // 🚀 Obtener proyectos para generar URLs dinámicas
  const projects = await getProjects();
  
  // 📄 URLs estáticas principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/es/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
  
  // 🎨 URLs dinámicas de proyectos
  const projectPages: MetadataRoute.Sitemap = projects.flatMap((project) => {
    const projectSlug = (project as any).slug;
    const lastModified = project.document?.date 
      ? new Date(project.document.date) 
      : new Date();
    
    return [
      {
        url: `${baseUrl}/portfolio/${projectSlug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/es/portfolio/${projectSlug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/en/portfolio/${projectSlug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      },
    ];
  });
  
  // 🏷️ URLs de categorías
  const categories = ['design', 'web', 'photography'];
  const categoryPages: MetadataRoute.Sitemap = categories.flatMap((category) => [
    {
      url: `${baseUrl}/portfolio/category/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/portfolio/category/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/portfolio/category/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
  ]);
  
  return [...staticPages, ...projectPages, ...categoryPages];
}