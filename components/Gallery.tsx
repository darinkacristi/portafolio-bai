"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Gallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: 1 | -1) =>
      setOpen((cur) =>
        cur === null ? cur : (cur + dir + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, go]);

  return (
    <>
      {/* Masonry con CSS columns */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            onClick={() => setOpen(i)}
            className="group relative block w-full overflow-hidden rounded-xl2 border-[1.5px] border-lilac/40 bg-surface"
          >
            <Image
              src={src}
              alt={`${title} — imagen ${i + 1}`}
              width={800}
              height={1000}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md sm:p-10"
          >
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-bg/60 bg-bg/20 text-bg backdrop-blur-sm transition-colors hover:bg-bg/40"
            >
              ✕
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-bg/60 bg-bg/20 text-bg backdrop-blur-sm transition-colors hover:bg-bg/40 sm:left-6"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-bg/60 bg-bg/20 text-bg backdrop-blur-sm transition-colors hover:bg-bg/40 sm:right-6"
            >
              ›
            </button>

            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-auto"
            >
              <Image
                src={images[open]}
                alt={`${title} — imagen ${open + 1}`}
                width={1400}
                height={1800}
                className="max-h-[85vh] w-auto rounded-xl2 object-contain"
              />
              <div className="mt-3 text-center text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-bg/80">
                {open + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
