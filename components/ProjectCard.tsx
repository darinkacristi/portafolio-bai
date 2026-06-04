"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { getThumbnail } from "@/lib/utils";

const icons: Record<string, string> = { photo: "📷", video: "🎬" };

const aspectClass: Record<string, string> = {
  vertical: "aspect-[9/16]",
  horizontal: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
};

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [failed, setFailed] = useState(false);
  const src = getThumbnail(project);
  const showImage = src && !failed;
  const forced = project.aspect ? aspectClass[project.aspect] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3), ease: "easeOut" }}
      className="mb-4 break-inside-avoid"
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group relative block overflow-hidden rounded-xl2 border-[1.5px] border-lilac/40 bg-surface no-underline"
      >
        <div className="relative w-full overflow-hidden">
          {showImage ? (
            forced ? (
              <div className={`relative w-full ${forced}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={project.title}
                  loading="lazy"
                  onError={() => setFailed(true)}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={project.title}
                loading="lazy"
                onError={() => setFailed(true)}
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
              />
            )
          ) : (
            <div
              className={`flex w-full flex-col items-center justify-center gap-2 ${forced ?? aspectClass.horizontal}`}
              style={{ background: project.accent ?? "#EDD9FF" }}
            >
              <span className="text-4xl opacity-40">{icons[project.type]}</span>
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-ink3">
                Tu imagen aquí
              </span>
            </div>
          )}

          <span className="pill absolute left-3 top-3 z-10 bg-bg/85 backdrop-blur-sm">
            {project.type === "video" ? "▶ Video" : "◳ Foto"}
          </span>

          <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-bg/80">
              {project.client} · {project.year}
            </div>
            <div className="mt-1 text-base font-bold uppercase leading-tight tracking-[0.02em] text-bg">
              {project.title}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
