"use client";

import { useState } from "react";
import Image from "next/image";
import { parseVideoUrl } from "@/lib/utils";
import type { Aspect } from "@/lib/types";

const aspectClass: Record<string, string> = {
  vertical: "aspect-[9/16]",
  horizontal: "aspect-video",
  square: "aspect-square",
};

const wrapClass: Record<string, string> = {
  vertical: "mx-auto max-w-[420px]",
  horizontal: "",
  square: "mx-auto max-w-[640px]",
};

export default function VideoPlayer({
  url,
  title,
  aspect = "horizontal",
}: {
  url: string;
  title: string;
  aspect?: Aspect;
}) {
  const source = parseVideoUrl(url);
  const [playing, setPlaying] = useState(false);
  const ar = aspectClass[aspect];
  const wrap = wrapClass[aspect];

  if (source.kind === "file") {
    return (
      <div
        className={`relative overflow-hidden rounded-xl2 border-[1.5px] border-mint/50 bg-black ${ar} ${wrap}`}
      >
        <video
          controls
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src={source.src}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl2 border-[1.5px] border-mint/50 bg-surface ${ar} ${wrap}`}
    >
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
            sizes="(max-width: 768px) 100vw, 600px"
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
