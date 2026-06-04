export type ProjectType = "photo" | "video";

export type Category =
  | "Edición"
  | "Guionización"
  | "Fotografía"
  | "Colorización"
  | "Grabación"
  | "Motion Graphics";

export type Aspect = "vertical" | "horizontal" | "square" | "portrait";

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
  thumbnail: string;
  accent?: string;
  /** Orientación de la portada: "vertical", "horizontal" o "square" */
  aspect?: Aspect;
}

export interface PhotoProject extends BaseProject {
  type: "photo";
  images: string[];
}

export interface VideoProject extends BaseProject {
  type: "video";
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
