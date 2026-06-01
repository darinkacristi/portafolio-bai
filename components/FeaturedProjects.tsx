import Link from "next/link";
import { getFeatured } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featured = getFeatured();
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="section-label mb-2">Selección</div>
          <h2 className="section-title">Proyectos</h2>
        </div>
        <Link
          href="/portfolio"
          className="rounded-full border-[1.5px] border-lilac px-6 py-3 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ink2 no-underline transition-colors hover:bg-lilac hover:text-ink"
        >
          Ver todo →
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
