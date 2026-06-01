import type { Metadata } from "next";
import { projects } from "@/data/projects";
import FilterableGrid from "@/components/FilterableGrid";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Todos los proyectos de BAI: fotografía, video cinemático, campañas comerciales, editoriales y dirección creativa.",
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-36">
      <div className="section-label mb-2">Trabajo</div>
      <h1 className="section-title mb-4">Portafolio</h1>
      <p className="mb-12 max-w-xl text-sm leading-relaxed text-ink2">
        Una selección de proyectos audiovisuales. Filtra por categoría y entra a
        cada uno para ver los detalles, roles y créditos.
      </p>
      <FilterableGrid projects={projects} />
    </section>
  );
}
