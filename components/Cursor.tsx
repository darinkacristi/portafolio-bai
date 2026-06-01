"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const trail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Solo en dispositivos con puntero fino (no táctiles)
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    document.body.classList.add("has-custom-cursor");
    let mx = 0,
      my = 0,
      tx = 0,
      ty = 0,
      raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      tx += (mx - tx) * 0.14;
      ty += (my - ty) * 0.14;
      if (trail.current) {
        trail.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-[18px] w-[18px] rounded-full border-2 border-lilac bg-blush md:[body.has-custom-cursor_&]:block"
      />
      <div
        ref={trail}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-[7px] w-[7px] rounded-full bg-mint opacity-70 md:[body.has-custom-cursor_&]:block"
      />
    </>
  );
}
