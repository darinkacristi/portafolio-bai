import type { Project, VideoProject } from "./types";

/** Une clases condicionales sin dependencias externas */
export function cx(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export type VideoSource =
  | { kind: "youtube"; id: string; embed: string; thumb: string }
  | { kind: "vimeo"; id: string; embed: string; thumb: string }
  | { kind: "file"; src: string };

/** Detecta el proveedor de video y devuelve URL de embed + thumbnail */
export function parseVideoUrl(url: string): VideoSource {
  // YouTube
  const yt =
    url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/) ||
    [];
  if (yt[1]) {
    const id = yt[1];
    return {
      kind: "youtube",
      id,
      embed: `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`,
      thumb: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    };
  }

  // Vimeo
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/) || [];
  if (vimeo[1]) {
    const id = vimeo[1];
    return {
      kind: "vimeo",
      id,
      embed: `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`,
      thumb: `https://vumbnail.com/${id}.jpg`,
    };
  }

  // Archivo local / mp4
  return { kind: "file", src: url };
}

/** Thumbnail efectivo de un proyecto (auto desde el video si no hay propio) */
export function getThumbnail(project: Project): string {
  if (project.thumbnail) return project.thumbnail;
  if (project.type === "video") {
    const src = parseVideoUrl((project as VideoProject).videoUrl);
    if (src.kind !== "file") return src.thumb;
  }
  return "";
}
