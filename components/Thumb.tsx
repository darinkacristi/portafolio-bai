"use client";

import Image from "next/image";
import { useState } from "react";
import { cx } from "@/lib/utils";

interface ThumbProps {
  src: string;
  alt: string;
  accent?: string;
  icon?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Imagen optimizada con Next Image que cae a un placeholder pastel
 * si `src` está vacío o la imagen falla al cargar. Así el portafolio
 * se ve completo aunque todavía no hayas subido los archivos reales.
 */
export default function Thumb({
  src,
  alt,
  accent = "#EDD9FF",
  icon = "🌸",
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: ThumbProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    return (
      <div
        className={cx(
          "flex h-full w-full flex-col items-center justify-center gap-2",
          className
        )}
        style={{ background: accent }}
      >
        <span className="text-4xl opacity-40">{icon}</span>
        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-ink3">
          Tu imagen aquí
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={cx("object-cover", className)}
    />
  );
}
