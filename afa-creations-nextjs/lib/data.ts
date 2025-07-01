import 'server-only';
import fs from 'fs';
import path from 'path';

// 🎯 Tipos para los datos del proyecto
export interface Project {
  title: string;
  type: 'document' | 'image';
  thumbImage: string;
  categories: string[];
  document?: {
    projectInfo: string;
    client: string;
    technologies: string;
    industry: string;
    date: string;
    url: {
      name: string;
      link: string;
    };
    sliderImages: string[];
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  position: string;
  review: string;
  rating: number;
  image?: string;
}

// 📂 Rutas de los archivos de datos
const DATA_DIR = path.join(process.cwd(), 'data');
const PROJECTS_FILE = path.join(DATA_DIR, 'projectsData.json');
const FAQS_ES_FILE = path.join(DATA_DIR, 'faqs-es.json');
const FAQS_EN_FILE = path.join(DATA_DIR, 'faqs-en.json');
const REVIEWS_ES_FILE = path.join(DATA_DIR, 'reviews-es.json');
const REVIEWS_EN_FILE = path.join(DATA_DIR, 'reviews-en.json');

// 🚀 Cache en memoria para mejor performance
let projectsCache: Project[] | null = null;
let faqsCache: { [key: string]: FAQ[] } = {};
let reviewsCache: { [key: string]: Review[] } = {};

// 📊 Función para leer y parsear archivos JSON de forma segura
const readJsonFile = async <T>(filePath: string): Promise<T | null> => {
  try {
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return null;
    }
    
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent) as T;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
};

// 🎨 Funciones para obtener proyectos
export const getProjects = async (): Promise<Project[]> => {
  if (projectsCache) {
    return projectsCache;
  }
  
  const projects = await readJsonFile<Project[]>(PROJECTS_FILE);
  if (!projects) {
    return [];
  }
  
  // ✅ Agregar slugs para URLs SEO-friendly
  const projectsWithSlugs = projects.map((project, index) => ({
    ...project,
    slug: generateSlug(project.title),
    id: index + 1,
  }));
  
  projectsCache = projectsWithSlugs;
  return projectsWithSlugs;
};

// 🔍 Función para obtener un proyecto específico por slug
export const getProject = async (slug: string): Promise<(Project & { slug: string; id: number }) | null> => {
  const projects = await getProjects() as (Project & { slug: string; id: number })[];
  return projects.find(project => project.slug === slug) || null;
};

// 📝 Función para obtener proyectos por categoría
export const getProjectsByCategory = async (category: string): Promise<Project[]> => {
  const projects = await getProjects();
  
  if (category === 'all' || !category) {
    return projects;
  }
  
  return projects.filter(project => 
    project.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
  );
};

// 🏷️ Función para obtener todas las categorías únicas
export const getProjectCategories = async (): Promise<string[]> => {
  const projects = await getProjects();
  const categories = new Set<string>();
  
  projects.forEach(project => {
    project.categories.forEach(category => {
      categories.add(category);
    });
  });
  
  return Array.from(categories).sort();
};

// ❓ Funciones para obtener FAQs
export const getFAQs = async (locale: 'es' | 'en' = 'es'): Promise<FAQ[]> => {
  const cacheKey = `faqs-${locale}`;
  
  if (faqsCache[cacheKey]) {
    return faqsCache[cacheKey];
  }
  
  const filePath = locale === 'es' ? FAQS_ES_FILE : FAQS_EN_FILE;
  const faqs = await readJsonFile<FAQ[]>(filePath);
  
  if (!faqs) {
    return [];
  }
  
  faqsCache[cacheKey] = faqs;
  return faqs;
};

// ⭐ Funciones para obtener reviews/testimonios
export const getReviews = async (locale: 'es' | 'en' = 'es'): Promise<Review[]> => {
  const cacheKey = `reviews-${locale}`;
  
  if (reviewsCache[cacheKey]) {
    return reviewsCache[cacheKey];
  }
  
  const filePath = locale === 'es' ? REVIEWS_ES_FILE : REVIEWS_EN_FILE;
  const reviews = await readJsonFile<Review[]>(filePath);
  
  if (!reviews) {
    return [];
  }
  
  reviewsCache[cacheKey] = reviews;
  return reviews;
};

// 🔗 Función para generar slugs SEO-friendly
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remover caracteres especiales
    .replace(/[\s_-]+/g, '-') // Reemplazar espacios y guiones por un solo guión
    .replace(/^-+|-+$/g, ''); // Remover guiones al inicio y final
};

// 📊 Función para obtener estadísticas del portfolio
export const getPortfolioStats = async () => {
  const projects = await getProjects();
  const categories = await getProjectCategories();
  
  const stats = {
    totalProjects: projects.length,
    totalCategories: categories.length,
    projectsByCategory: {} as { [key: string]: number },
    latestProjects: projects.slice(0, 6), // Los 6 más recientes
  };
  
  // Contar proyectos por categoría
  categories.forEach(category => {
    stats.projectsByCategory[category] = projects.filter(project =>
      project.categories.includes(category)
    ).length;
  });
  
  return stats;
};

// 🔍 Función para búsqueda de proyectos
export const searchProjects = async (query: string): Promise<Project[]> => {
  if (!query.trim()) {
    return [];
  }
  
  const projects = await getProjects();
  const searchTerm = query.toLowerCase();
  
  return projects.filter(project => {
    const matchTitle = project.title.toLowerCase().includes(searchTerm);
    const matchCategory = project.categories.some(cat => 
      cat.toLowerCase().includes(searchTerm)
    );
    const matchTechnology = project.document?.technologies?.toLowerCase().includes(searchTerm);
    const matchIndustry = project.document?.industry?.toLowerCase().includes(searchTerm);
    
    return matchTitle || matchCategory || matchTechnology || matchIndustry;
  });
};

// 🎯 Función para obtener proyectos relacionados
export const getRelatedProjects = async (currentProjectSlug: string, limit: number = 3): Promise<Project[]> => {
  const projects = await getProjects();
  const currentProject = projects.find(p => (p as any).slug === currentProjectSlug);
  
  if (!currentProject) {
    return projects.slice(0, limit);
  }
  
  // Encontrar proyectos con categorías similares
  const relatedProjects = projects.filter(project => {
    if ((project as any).slug === currentProjectSlug) return false;
    
    return project.categories.some(category =>
      currentProject.categories.includes(category)
    );
  });
  
  // Si no hay suficientes proyectos relacionados, completar con otros proyectos
  if (relatedProjects.length < limit) {
    const otherProjects = projects.filter(p => 
      (p as any).slug !== currentProjectSlug && 
      !relatedProjects.includes(p)
    );
    relatedProjects.push(...otherProjects.slice(0, limit - relatedProjects.length));
  }
  
  return relatedProjects.slice(0, limit);
};

// 🎨 Función para obtener colores de categorías (útil para UI)
export const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'DESIGN': '#e74c3c',
    'WEB': '#3498db',
    'PHOTOGRAPHY': '#f39c12',
    'ECOMMERCE': '#27ae60',
    'MOBILE': '#9b59b6',
    'BRANDING': '#e67e22',
  };
  
  return colors[category.toUpperCase()] || '#95a5a6';
};

// 🔄 Función para limpiar cache (útil en desarrollo)
export const clearCache = () => {
  projectsCache = null;
  faqsCache = {};
  reviewsCache = {};
};

// 📈 Función para obtener métricas de performance del sitio
export const getSiteMetrics = async () => {
  const projects = await getProjects();
  const categories = await getProjectCategories();
  
  return {
    totalProjects: projects.length,
    totalCategories: categories.length,
    averageProjectsPerCategory: Math.round(projects.length / categories.length),
    lastUpdated: new Date().toISOString(),
    dataSize: {
      projects: JSON.stringify(projects).length,
      categories: JSON.stringify(categories).length,
    },
  };
};