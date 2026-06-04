import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "beneficios-del-tofu",
    title: "Beneficios del Tofu",
    type: "video",
    client: "Frutiferia",
    year: 2025,
    thumbnail: "",
    videoUrl: "https://youtube.com/shorts/XQOFbY3JGpI?si=eqcMsTPdriljL0Sf",
    description: `Cliente: Frutiferia (E-commerce y distribuidor de frutas, verduras y productos saludables en la Región de Valparaíso). 🍉🍍

Objetivo del video: Posicionar un producto específico (tofu) mediante un formato educativo y colaborativo. El video busca resolver una necesidad común del público objetivo (cómo aumentar el consumo de proteína diariamente) a través de tres recetas rápidas, demostrando que comer sano no es aburrido ni complejo, impulsando así la compra del ingrediente en su plataforma. 💪`,
    roles: ["Dirección", "Dirección de Fotografía", "Edición", "Colorización"],
    categories: ["Edición", "Grabación", "Guionización", "Colorización"],
    featured: true,
    accent: "#B8F0D8",
    aspect: "vertical",
    credits: [{ role: "Producción", name: "Baithiare Vásquez" }],
  },
  {
    slug: "fruti-feria-expansion",
    title: "Video para Proyecto de Expansión",
    type: "video",
    client: "Fruti Feria",
    year: 2026,
    thumbnail: "",
    videoUrl: "https://vimeo.com/1198474686?share=copy&fl=sv&fe=ci",
    description: `Fruti Feria | Video para Proyecto de Expansión

Edición de video corporativo realizado para respaldar la presentación de un proyecto de expansión postulado a fondos de financiamiento.

A través del montaje, la estructura narrativa y el tratamiento audiovisual, el objetivo fue transmitir de forma clara la visión, trayectoria y proyección de crecimiento de la empresa.`,
    roles: ["Edición", "Motion Graphics"],
    categories: ["Edición", "Colorización", "Motion Graphics"],
    featured: true,
    accent: "#B8F0D8",
    credits: [{ role: "Edición", name: "Baithiare Vásquez" }],
  },
  {
    slug: "meflipa",
    title: "Meflipa",
    type: "photo",
    client: "Meflipa",
    year: 2026,
    thumbnail: "/projects/meflipa.jpeg",
    images: [
      "/projects/meflipa.jpeg",
      "/projects/meflipa-2.jpeg",
      "/projects/meflipa-3jpeg.jpeg",
    ],
    description:
      "Editorial de moda inspirada en la fragilidad del invierno. Retratos con luz natural difusa, tonos pastel y una dirección de arte minimalista que deja respirar a cada imagen.",
    roles: ["Dirección Creativa", "Fotografía", "Retoque", "Producción"],
    categories: ["Fotografía"],
    featured: true,
    accent: "#FFB8D0",
  },
  {
    slug: "examen-60seg",
    title: "El examen de 60 segundos",
    type: "video",
    client: "Bluro / Prime",
    year: 2026,
    thumbnail: "",
    videoUrl: "https://vimeo.com/1198470570?share=copy&fl=sv&fe=ci",
    description: `Edición de contenido de alto impacto para Prime Propiedades, un proyecto desarrollado desde mi rol como editora de video en la agencia Bluro. ⌨️💻

El objetivo de esta pieza fue dinamizar un contenido clave para el sector inmobiliario: cómo filtrar correctamente a los interesados al vender una propiedad para no perder tiempo con perfiles que no van a comprar. A través del montaje, el ritmo y la estructura visual, logramos transformar una explicación técnica en un formato ágil, entretenido y directo al grano. ⌨️`,
    roles: ["Edición", "Colorización"],
    categories: ["Edición", "Colorización"],
    featured: true,
    accent: "#B8F0D8",
    aspect: "vertical",
    credits: [{ role: "Edición", name: "Baithiare Vásquez" }],
  },
  {
    slug: "vlog-fruti-feria",
    title: "Vlog para Fruti Feria",
    type: "video",
    client: "Fruti Feria",
    year: 2025,
    thumbnail: "",
    videoUrl: "https://vimeo.com/1198474121?share=copy&fl=sv&fe=ci",
    description: `Vlog para Fruti Feria

Proyecto audiovisual donde estuve a cargo de la grabación y edición completa del contenido, capturando el día a día de la empresa desde una mirada cercana, dinámica y auténtica.

Una pieza pensada para fortalecer la conexión de la marca con su audiencia a través de contenido más humano y espontáneo.`,
    roles: ["Grabación", "Edición", "Corrección de color"],
    categories: ["Edición", "Guionización", "Colorización", "Grabación"],
    featured: true,
    accent: "#B8F0D8",
    aspect: "vertical",
    credits: [{ role: "Realización", name: "Baithiare Vásquez" }],
  },
  {
    slug: "retratos-de-estudio",
    title: "Retratos de Estudio",
    type: "photo",
    client: "Proyecto Personal",
    year: 2024,
    thumbnail: "/projects/retratos-de-estudio/cover.jpg",
    images: [
      "/projects/retratos-de-estudio/01.jpg",
      "/projects/retratos-de-estudio/02.jpg",
      "/projects/retratos-de-estudio/03.jpg",
      "/projects/retratos-de-estudio/04.jpg",
    ],
    description:
      "Serie de retratos en estudio explorando el color como emoción. Cada retrato usa un fondo pastel distinto para crear una identidad cromática propia.",
    roles: ["Dirección Creativa", "Fotografía", "Retoque"],
    categories: ["Fotografía"],
    accent: "#FFF0A0",
  },
  {
    slug: "spot-inmobiliaria",
    title: "Spot Inmobiliaria",
    type: "video",
    client: "Inmobiliaria Sol",
    year: 2024,
    thumbnail: "",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    description:
      "Spot publicitario para una desarrolladora inmobiliaria. Tomas aéreas, interiores luminosos y un montaje dinámico orientado a generar deseo y confianza.",
    roles: ["Dirección", "Edición", "Colorización", "Producción"],
    categories: ["Edición", "Colorización"],
    accent: "#B8DEFF",
  },
  {
    slug: "coterranea-ejecutivas",
    title: "Ejecutivas de Venta",
    type: "photo",
    client: "Coterránea",
    year: 2026,
    thumbnail: "/projects/ejecutivas-1.png",
    images: [
      "/projects/ejecutivas-1.png",
      "/projects/ejecutivas-2.png",
      "/projects/ejecutivas-1.png",
      "/projects/ejecutivas-1.png",
      
    ],
    description:
      "Lookbook de temporada para una marca de lifestyle. Fotografía fresca al aire libre, paleta luminosa y una dirección de arte que respira frescura y juventud.",
    roles: ["Dirección Creativa", "Fotografía", "Producción", "Edición"],
    categories: ["Fotografía", "Edición"],
    accent: "#B8F0D8",
  },
  {
    slug: "nuevo-short",
    title: "Título del video",
    type: "video",
    client: "Cliente",
    year: 2026,
    thumbnail: "",
    videoUrl: "https://www.youtube.com/shorts/ZLYSp5e89lA",
    description: `Descripción del proyecto.`,
    roles: ["Edición"],
    categories: ["Edición"],
    featured: true,
    aspect: "vertical",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Proyectos que aparecen en el inicio, en el orden que tú quieras (por slug)
export const featuredSlugs: string[] = [
  "meflipa",                // foto
  "beneficios-del-tofu",    // video
  "coterranea-ejecutivas",  // foto
  "examen-60seg",           // video
  "fruti-feria-expansion",  // video
];

export function getFeatured(): Project[] {
  return featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));
}

export function getAdjacent(slug: string): {
  prev: Project;
  next: Project;
} {
  const i = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return { prev, next };
}
