"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { getThumbnail } from "@/lib/utils";
import Thumb from "./Thumb";

const icons: Record<string, string> = {
  photo: "📷",
  video: "🎬",
};

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.4), ease: "easeOut" }}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group block overflow-hidden rounded-xl2 border-[1.5px] border-lilac/40 bg-surface no-underline"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
            <Thumb
              src={getThumbnail(project)}
              alt={project.title}
              accent={project.accent}
              icon={icons[project.type]}
            />
          </div>

          {/* badge de tipo */}
          <span className="pill absolute left-3 top-3 z-10 bg-bg/85 backdrop-blur-sm">
            {project.type === "video" ? "▶ Video" : "◳ Foto"}
          </span>

          {/* overlay al hover */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end bg-bg/0 p-5 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-bg/90 group-hover:opacity-100 group-hover:backdrop-blur-sm">
            <div className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-ink2">
              {project.client} · {project.year}
            </div>
            <div className="mt-1 text-lg font-bold uppercase leading-tight tracking-[0.02em] text-ink">
              {project.title}
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.roles.slice(0, 3).map((r) => (
                <span
                  key={r}
                  className="rounded-full bg-lilac/50 px-2 py-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-ink2"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[0.8rem] font-bold uppercase tracking-[0.03em] text-ink">
            {project.title}
          </span>
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-ink3">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
