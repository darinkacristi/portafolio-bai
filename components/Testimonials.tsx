"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/clients";
import { cx } from "@/lib/utils";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[700px] px-6 py-24">
      <div className="section-label mb-8 justify-center">Lo que dicen</div>
      <h2 className="section-title mb-12 text-center text-[clamp(2rem,5vw,3.5rem)]">
        Clientes
      </h2>
      <div className="flex flex-col gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className={cx(
              "flex items-end gap-4",
              t.side === "right" && "flex-row-reverse"
            )}
          >
            <div
              className={cx(
                "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-white text-xl",
                t.side === "left" ? "bg-lilac" : "bg-mint"
              )}
            >
              {t.avatar}
            </div>
            <div className="max-w-[75%]">
              <div
                className={cx(
                  "mb-1.5 text-[0.55rem] font-bold uppercase tracking-[0.15em] text-ink3",
                  t.side === "right" && "text-right"
                )}
              >
                {t.name} — {t.role}
              </div>
              <div
                className={cx(
                  "rounded-[18px] px-5 py-4 text-[0.78rem] leading-relaxed text-ink",
                  t.side === "left"
                    ? "rounded-bl-[4px] border-[1.5px] border-lilac/50 bg-white"
                    : "rounded-br-[4px] bg-lilac"
                )}
              >
                {t.message}
              </div>
              <div
                className={cx(
                  "mt-1.5 text-[0.5rem] font-medium text-ink3",
                  t.side === "right" && "text-right"
                )}
              >
                {t.time}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
