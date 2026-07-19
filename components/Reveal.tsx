"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * §8 — once-only section reveals. One IntersectionObserver for every
 * [data-reveal] / [data-draw-rule] element; reveals fire at 20% viewport
 * entry and never re-run on scroll-up. The hidden state exists only after
 * html.motion-ok is set here, so content is always visible without JS and
 * under prefers-reduced-motion.
 */
export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("motion-ok");

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal]:not(.is-in), [data-draw-rule]:not(.is-in)",
      ),
    );
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
    );

    for (const el of targets) {
      // Anything the user has already scrolled past must not sit hidden.
      if (el.getBoundingClientRect().bottom < 0) {
        el.classList.add("is-in");
      } else {
        io.observe(el);
      }
    }

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
