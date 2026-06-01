import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import Thumb from "@/components/Thumb";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Soy BAI, creadora visual apasionada por contar historias a través de la imagen y el movimiento.",
};

const STATS = [
  { num: "50+", label: "Proyectos" },
  { num: "3+", label: "Años" },
  { num: "∞", label: "Ideas" },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1100px] px-6 pb-24 pt-36">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Foto */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl2 border-[1.5px] border-lilac/50">
              <Thumb
                src="/about/bai.jpg"
                alt="Retrato de BAI"
                accent="#EDD9FF"
                icon="🌸"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-xl2 border-[1.5px] border-mint" />
          </div>

          {/* Texto */}
          <div>
            <div className="section-label mb-2">Sobre mí</div>
            <h1 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-none tracking-[-0.03em] text-ink">
              Soy Bai
            </h1>
            <div className="space-y-5 text-[0.85rem] leading-[1.9] text-ink2">
              <p>
                Soy una creadora visual apasionada por contar historias a través
                de la imagen y el movimiento. Mi trabajo vive en la intersección
                entre la fotografía, el cine y el diseño.
              </p>
              <p>
                Desde retratos editoriales hasta producciones cinemáticas, cada
                proyecto es una oportunidad de transformar lo ordinario en algo
                completamente inesperado.
              </p>
              <p>
                Disponible para colaboraciones, proyectos creativos y
                producciones audiovisuales en Chile y el mundo.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t-[1.5px] border-lilac pt-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <span className="block text-[2.8rem] font-black leading-none tracking-[-0.03em] text-ink">
                    {s.num}
                  </span>
                  <span className="mt-1.5 block text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-ink3">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
