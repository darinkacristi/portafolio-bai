"use client";

import { useState } from "react";
import Image from "next/image";
import { parseVideoUrl } from "@/lib/utils";

export default function VideoPlayer({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const source = parseVideoUrl(url);
  const [playing, setPlaying] = useState(false);

  // Archivo local MP4
  if (source.kind === "file") {
    return (
      <div className="overflow-hidden rounded-xl2 border-[1.5px] border-mint/50 bg-black">
        <video
          controls
          playsInline
          className="aspect-video w-full"
          src={source.src}
        >
          Tu navegador no soporta video HTML5.
        </video>
      </div>
    );
  }

  // YouTube / Vimeo — fachada con thumbnail (mejor rendimiento Lighthouse)
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl2 border-[1.5px] border-mint/50 bg-surface">
      {playing ? (
        <iframe
          src={`${source.embed}${source.embed.includes("?") ? "&" : "?"}autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`Reproducir ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={source.thumb}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-ink/20" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-bg bg-bg/60 text-xl text-ink backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-bg">
            ▶
          </span>
        </button>
      )}
    </div>
  );
}
