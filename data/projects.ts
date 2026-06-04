import type { Project } from "@/lib/types";

/**
 * ────────────────────────────────────────────────────────────
 *  AQUÍ VIVE TODO TU PORTAFOLIO.
 *  Para añadir un proyecto: copia un bloque, cambia el `slug`
 *  (único, sin espacios) y rellena los campos.
 *
 *  Imágenes → guárdalas en /public/projects/<slug>/...
 *  Videos   → pega la URL de YouTube / Vimeo o un .mp4 en /public
 *  thumbnail vacío "" → se genera solo desde el video (YouTube/Vimeo)
 * ────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    slug: "beneficios-del-tofu",
    title: "Beneficios del Tofu",
    type: "video",
    client: "Frutiferia",
    year: 2025,
    thumbnail: "", // se genera desde Vimeo
    videoUrl: "https://vimeo.com/1198466352?share=copy&fl=sv&fe=ci",
    description: `Cliente: Frutiferia (E-commerce y distribuidor de frutas, verduras y productos saludables en la Región de Valparaíso). 🍉🍍
    
    Objetivo del video: Posicionar un producto específico (tofu) mediante un formato educativo y colaborativo. El video busca resolver una necesidad común del público objetivo (cómo aumentar el consumo de proteína diariamente) a través de tres recetas rápidas, demostrando que comer sano no es aburrido ni complejo, impulsando así la compra del ingrediente en su plataforma. 💪`,
   
    roles: ["Dirección", "Dirección de Fotografía", "Edición", "Colorización"],
    categories: ["Comercial", "Video"],
    featured: true,
    accent: "#B8F0D8",
    credits: [
      { role: "Producción", name: "Baithiare Vásquez" },
    
    ],
  },
  {
    slug: "editorial-flores-de-invierno",
    title: "Flores de Invierno",
    type: "photo",
    client: "Revista Pétalo",
    year: 2025,
    thumbnail: "/projects/flores-de-invierno/cover.jpg",
    images: [
      "/projects/flores-de-invierno/01.jpg",
      "/projects/flores-de-invierno/02.jpg",
      "/projects/flores-de-invierno/03.jpg",
      "/projects/flores-de-invierno/04.jpg",
      "/projects/flores-de-invierno/05.jpg",
      "/projects/flores-de-invierno/06.jpg",
    ],
    description:
      "Editorial de moda inspirada en la fragilidad del invierno. Retratos con luz natural difusa, tonos pastel y una dirección de arte minimalista que deja respirar a cada imagen.",
    roles: ["Dirección Creativa", "Fotografía", "Retoque", "Producción"],
    categories: ["Editorial", "Moda", "Fotografía"],
    featured: true,
    accent: "#FFB8D0",
  },
  {
    slug: "examen-60seg",
    title: "El examen de 60 segundos",
    type: "video",
    client: "Bluro / Prime",
    year: 2026,
    thumbnail: "", // se genera desde Vimeo
    videoUrl: "https://vimeo.com/1198470570?share=copy&fl=sv&fe=ci",
    description: `Edición de contenido de alto impacto para Prime Propiedades, un proyecto desarrollado desde mi rol como editora de video en la agencia Bluro. ⌨️💻


​El objetivo de esta pieza fue dinamizar un contenido clave para el sector inmobiliario: cómo filtrar correctamente a los interesados al vender una propiedad para no perder tiempo con perfiles que no van a comprar. A través del montaje, el ritmo y la estructura visual, logramos transformar una explicación técnica en un formato ágil, entretenido y directo al grano.⌨️`,
   
    roles: ["Edición", "Colorización"],
    categories: ["Comercial", "Video"],
    featured: true,
    accent: "#B8F0D8",
    credits: [
      { role: "Edición", name: "Baithiare Vásquez" },
    ],
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
    categories: ["Fotografía", "Editorial"],
    accent: "#FFF0A0",
  },
  {
    slug: "tu-familia-crecio",
    title: "Tu familia creció",
    type: "video",
    client: "Bluro / Prime",
    year: 2026,
    thumbnail: "",
    videoUrl: "https://vimeo.com/1198470569?share=copy&fl=sv&fe=ci",
    description:
      `Agencia: Bluro.


​Cliente final: Prime Propiedades (Corredora y consultora inmobiliaria).

​Objetivo del video: Posicionar a la marca como experta en asesoría inmobiliaria mediante un formato educativo y cercano. La pieza busca guiar a potenciales compradores e inversionistas en la elección correcta de una vivienda, incrementando el nivel de confianza y facilitando la captación de leads cualificados para la corredora.

​Roles ejecutados: Postproducción audiovisual.`,
    
    roles: ["Edición", "Colorización", "Post Producción"],
    categories: ["Comercial", "Video"],
    accent: "#B8DEFF",
  },
  {
    slug: "lookbook-primavera",
    title: "Lookbook Primavera",
    type: "photo",
    client: "Camila R. — Lifestyle Brand",
    year: 2024,
    thumbnail: "/projects/lookbook-primavera/cover.jpg",
    images: [
      "/projects/lookbook-primavera/01.jpg",
      "/projects/lookbook-primavera/02.jpg",
      "/projects/lookbook-primavera/03.jpg",
      "/projects/lookbook-primavera/04.jpg",
      "/projects/lookbook-primavera/05.jpg",
    ],
    description:
      "Lookbook de temporada para una marca de lifestyle. Fotografía fresca al aire libre, paleta luminosa y una dirección de arte que respira frescura y juventud.",
    roles: ["Dirección Creativa", "Fotografía", "Producción", "Edición"],
    categories: ["Moda", "Comercial", "Fotografía"],
    accent: "#B8F0D8",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeatured(): Project[] {
  return projects.filter((p) => p.featured);
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
