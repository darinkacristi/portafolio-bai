import Blobs from "./Blobs";
import { siteConfig } from "@/lib/site";

const LINKS = [
  { label: "✉ Email", href: `mailto:${siteConfig.contact.email}`, bg: "bg-blush" },
  { label: "📸 Instagram", href: siteConfig.contact.instagram, bg: "bg-lilac" },
  { label: "🎥 YouTube", href: siteConfig.contact.youtube, bg: "bg-mint" },
  { label: "💬 WhatsApp", href: siteConfig.contact.whatsapp, bg: "bg-butter" },
];

export default function ContactCTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t-[1.5px] border-lilac bg-surface px-6 py-28 text-center"
    >
      <Blobs opacity={0.25} />
      <div className="relative z-[1] mx-auto max-w-[600px]">
        <div className="section-label justify-center">Hablemos</div>
        <h2 className="my-4 text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-none tracking-[-0.03em] text-ink">
          ¿Creamos juntos?
        </h2>
        <p className="mb-10 text-sm font-light italic tracking-[0.05em] text-ink2">
          Siempre lista para el próximo proyecto
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-ink no-underline transition-transform hover:-translate-y-0.5 hover:scale-[1.04] ${l.bg}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
