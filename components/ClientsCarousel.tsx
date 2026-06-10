"use client";

import Image from "next/image";
import { useState } from "react";
import { clients, type Client } from "@/data/clients";

function Logo({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);
  const show = client.logo && !failed;

  return (
    <div className="inline-flex h-[110px] flex-shrink-0 items-center justify-center opacity-85 drop-shadow-sm transition-all duration-200 hover:scale-105 hover:opacity-100">
      {show ? (
        <Image
          src={client.logo!}
          alt={client.name}
          width={200}
          height={110}
          onError={() => setFailed(true)}
          className="h-[110px] w-auto max-w-[200px] object-contain"
        />
      ) : (
        <div className="flex h-[110px] items-center justify-center gap-2.5 whitespace-nowrap rounded-xl2 border-[1.5px] border-dashed border-ink2/25 bg-white/50 px-6 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-ink3">
          <span className="text-2xl">{client.emoji}</span>
          {client.name}
        </div>
      )}
    </div>
  );
}

export default function ClientsCarousel() {
  const loop = [...clients, ...clients];
  return (
    <section className="overflow-hidden border-y-[1.5px] border-lilac bg-surface py-16">
      <div className="mb-10 text-center text-[0.55rem] font-bold uppercase tracking-[0.4em] text-ink3">
        ✦ Clientes &amp; Colaboraciones ✦
      </div>
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] bg-gradient-to-l from-surface to-transparent" />
        <div className="flex w-max animate-logos items-center gap-16 py-2 group-hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <Logo key={`${c.name}-${i}`} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
