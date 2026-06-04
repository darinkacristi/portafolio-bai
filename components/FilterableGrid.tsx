"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import { CATEGORIES } from "@/lib/types";
import { cx } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

export default function FilterableGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return projects;
    return projects.filter((p) => p.categories.includes(active as never));
  }, [active, projects]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cx(
                "rounded-full border-[1.5px] px-4 py-2 text-[0.55rem] font-bold uppercase tracking-[0.18em] transition-all",
                isActive
                  ? "border-ink bg-ink text-bg"
                  : "border-lilac/60 bg-surface text-ink2 hover:border-lilac hover:text-ink"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-ink3">
          No hay proyectos en esta categoría todavía 🌷
        </p>
      )}
    </div>
  );
}
