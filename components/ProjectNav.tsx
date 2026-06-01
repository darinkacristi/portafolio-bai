import Link from "next/link";
import type { Project } from "@/lib/types";

export default function ProjectNav({
  prev,
  next,
}: {
  prev: Project;
  next: Project;
}) {
  return (
    <div className="mt-20 grid grid-cols-2 gap-4 border-t-[1.5px] border-lilac pt-10">
      <Link
        href={`/portfolio/${prev.slug}`}
        className="group rounded-xl2 border-[1.5px] border-lilac/50 bg-surface p-5 no-underline transition-colors hover:border-lilac"
      >
        <div className="text-[0.5rem] font-semibold uppercase tracking-[0.25em] text-ink3">
          ← Anterior
        </div>
        <div className="mt-1 text-sm font-bold uppercase tracking-[0.02em] text-ink transition-colors group-hover:text-ink2">
          {prev.title}
        </div>
      </Link>
      <Link
        href={`/portfolio/${next.slug}`}
        className="group rounded-xl2 border-[1.5px] border-lilac/50 bg-surface p-5 text-right no-underline transition-colors hover:border-lilac"
      >
        <div className="text-[0.5rem] font-semibold uppercase tracking-[0.25em] text-ink3">
          Siguiente →
        </div>
        <div className="mt-1 text-sm font-bold uppercase tracking-[0.02em] text-ink transition-colors group-hover:text-ink2">
          {next.title}
        </div>
      </Link>
    </div>
  );
}
