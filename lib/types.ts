export type ProjectType = "photo" | "video";

export type Category =
  | "Edición"
  | "Guionización"
  | "Fotografía"
  | "Colorización"
  | "Grabación"
  | "Motion Graphics";

export interface BaseProject {
  slug: string;
  title: string;
  type: ProjectType;
  client: string;
  year: number;
  description: string;
  roles: string[];
  categories: Category[];
  featured?: boolean;
  /** Imagen usada como portada en grids y como og:image */
  thumbnail: string;
  /** Color pastel de fallback mientras carga / si falta la imagen */
  accent?: string;
}

export interface PhotoProject extends BaseProject {
  type: "photo";
  images: string[];
}

export interface VideoProject extends BaseProject {
  type: "video";
  /** URL de YouTube, Vimeo o ruta a un .mp4 local en /public */
  videoUrl: string;
  credits?: { role: string; name: string }[];
}

export type Project = PhotoProject | VideoProject;

export const CATEGORIES: ("Todos" | Category)[] = [
  "Todos",
  "Edición",
  "Guionización",
  "Fotografía",
  "Colorización",
  "Grabación",
  "Motion Graphics",
];
