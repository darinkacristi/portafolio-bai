import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, getAdjacent, projects } from "@/data/projects";
import { getThumbnail } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import Gallery from "@/components/Gallery";
import VideoPlayer from "@/components/VideoPlayer";
import ProjectNav from "@/components/ProjectNav";
import ContactCTA from "@/components/ContactCTA";
import type { PhotoProject, VideoProject } from "@/lib/types";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Proyecto no encontrado" };

  const image = getThumbnail(project);
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `${siteConfig.url}/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} · ${siteConfig.name}`,
      description: project.description,
      type: "article",
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacent(slug);

  return (
    <article>
      <section className="mx-auto max-w-[1100px] px-6 pb-12 pt-36">
        {/* Breadcrumb */}
        <Link
          href="/portfolio"
          className="mb-8 inline-block text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink3 no-underline transition-colors hover:text-ink"
        >
          ← Volver al portafolio
        </Link>

        {/* Encabezado */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="section-label mb-2">
              {project.categories.join(" · ")}
            </div>
            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-ink">
              {project.title}
            </h1>
          </div>
          <div className="text-right text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink2">
            <div>{project.client}</div>
            <div className="text-ink3">{project.year}</div>
          </div>
        </div>

        {/* Media principal */}
        {project.type === "video" ? (
          <VideoPlayer
            url={(project as VideoProject).videoUrl}
            title={project.title}
            aspect={project.aspect}
          />
        ) : (
          <Gallery
            images={(project as PhotoProject).images}
            title={project.title}
          />
        )}

        {/* Info + roles */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="section-label mb-3">Sobre el proyecto</div>
            {project.description.split("\n").filter((l) => l.trim()).map((parrafo, i) => (
              <p key={i} className="mb-4 text-[0.9rem] leading-[1.9] text-ink2">
                {parrafo}
              </p>
            ))}
          </div>
          <div>
            <div className="section-label mb-3">Roles</div>
            <div className="flex flex-wrap gap-2">
              {project.roles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border-[1.5px] border-lilac/60 bg-surface px-3.5 py-1.5 text-[0.55rem] font-bold uppercase tracking-[0.12em] text-ink2"
                >
                  {r}
                </span>
              ))}
            </div>

            {project.type === "video" &&
              (project as VideoProject).credits && (
                <div className="mt-8">
                  <div className="section-label mb-3">Créditos</div>
                  <ul className="space-y-1.5 text-[0.7rem] text-ink2">
                    {(project as VideoProject).credits!.map((c) => (
                      <li key={c.role} className="flex justify-between gap-4">
                        <span className="text-ink3">{c.role}</span>
                        <span className="font-semibold text-ink">{c.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>

        <ProjectNav prev={prev} next={next} />
      </section>

      <ContactCTA />
    </article>
  );
}
