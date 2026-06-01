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
    slug: "campana-marca-x",
    title: "Campaña Marca X",
    type: "video",
    client: "Marca X",
    year: 2025,
    thumbnail: "", // se genera desde YouTube
    videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
    description:
      "Campaña audiovisual de lanzamiento para una marca de skincare. Dirección de una pieza cinemática centrada en la textura, la luz suave y el detalle del producto, con una paleta cálida y orgánica.",
    roles: ["Dirección", "Dirección de Fotografía", "Edición", "Colorización"],
    categories: ["Comercial", "Video"],
    featured: true,
    accent: "#B8F0D8",
    credits: [
      { role: "Producción", name: "Estudio Aurora" },
      { role: "Música", name: "Lucía Fernández" },
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
    slug: "videoclip-luz",
    title: "Luz — Videoclip",
    type: "video",
    client: "Sello Pastel Records",
    year: 2024,
    thumbnail: "",
    videoUrl: "https://vimeo.com/76979871",
    description:
      "Videoclip musical rodado en locación natural. Un relato visual sobre el amanecer, construido con cámara en mano, transiciones orgánicas y una colorización de tonos miel.",
    roles: ["Dirección", "Cámara", "Edición", "Motion Graphics"],
    categories: ["Video", "Dirección Creativa"],
    featured: true,
    accent: "#D8BFFF",
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
