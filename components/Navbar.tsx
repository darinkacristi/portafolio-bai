"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { cx } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b-[1.5px] border-lilac bg-bg/[0.88] px-6 py-4 backdrop-blur-[14px] sm:px-10">
      <Link
        href="/"
        className="text-[1.4rem] font-black uppercase tracking-[0.25em] text-ink no-underline"
      >
        BAI
      </Link>
      <ul className="flex list-none gap-5 sm:gap-8">
        {siteConfig.nav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cx(
                  "text-[0.6rem] font-semibold uppercase tracking-[0.2em] no-underline transition-colors",
                  active ? "text-ink" : "text-ink2 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
