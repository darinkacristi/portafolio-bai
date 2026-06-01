"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Blobs from "./Blobs";

const TAGS = [
  ["bg-blush", "Fotografía"],
  ["bg-mint", "Video Cinemático"],
  ["bg-lilac", "Dirección Creativa"],
  ["bg-butter", "Diseño Visual"],
  ["bg-sky", "Editorial"],
];

const STICKERS = [
  { e: "🦋", c: "top-[14%] left-[7%] text-[2.5rem]", d: 0 },
  { e: "🌸", c: "top-[18%] right-[9%]", d: 0.8 },
  { e: "✨", c: "bottom-[22%] left-[6%]", d: 1.4 },
  { e: "🍬", c: "bottom-[18%] right-[7%] text-[1.6rem]", d: 2 },
  { e: "⭐", c: "top-[52%] left-[2%] text-[1.3rem]", d: 0.4 },
  { e: "🌷", c: "top-[42%] right-[3%] text-[1.8rem]", d: 1.8 },
  { e: "🎀", c: "top-[72%] right-[15%] text-[1.4rem]", d: 2.5 },
  { e: "💫", c: "top-[10%] left-[35%] text-[1.2rem]", d: 1.1 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-12 pt-28">
      <Blobs />

      {STICKERS.map((s, i) => (
        <span
          key={i}
          aria-hidden
          style={{ animationDelay: `${s.d}s` }}
          className={`absolute z-[2] animate-float text-[2rem] ${s.c}`}
        >
          {s.e}
        </span>
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-[3] text-center"
      >
        <motion.h1
          variants={item}
          className="text-[clamp(6rem,22vw,18rem)] font-black uppercase leading-[0.88] tracking-[-0.03em] text-ink"
        >
          BAI
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 text-[clamp(0.8rem,2.2vw,1.1rem)] font-light italic tracking-[0.04em] text-ink2"
        >
          Filmmaker · Fotógrafa · Directora Creativa
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap justify-center gap-2.5"
        >
          {TAGS.map(([bg, label]) => (
            <span
              key={label}
              className={`pill font-bold transition-transform hover:scale-[1.08] ${bg}`}
            >
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-9">
          <Link
            href="/portfolio"
            className="inline-block rounded-full bg-ink px-12 py-4 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-bg no-underline transition-all hover:scale-[1.04] hover:bg-ink2"
          >
            Ver mi trabajo
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
