import Link from "next/link";
import Blobs from "@/components/Blobs";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Blobs opacity={0.4} />
      <div className="relative z-10">
        <span className="mb-4 block text-6xl">🦋</span>
        <h1 className="text-[clamp(4rem,15vw,9rem)] font-black uppercase leading-none tracking-[-0.03em] text-ink">
          404
        </h1>
        <p className="mb-8 mt-2 text-sm font-light italic text-ink2">
          Esta página se fue volando…
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-ink px-10 py-3.5 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-bg no-underline transition-all hover:scale-[1.04] hover:bg-ink2"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
