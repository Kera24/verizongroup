"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

/**
 * Lenis smooth scrolling — progressive enhancement only.
 * Loaded lazily, skipped entirely under prefers-reduced-motion, and torn
 * down on unmount. Content and navigation never depend on it.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: Lenis | undefined;
    let rafId = 0;
    let cancelled = false;

    import("lenis").then(({ default: LenisCtor }) => {
      if (cancelled) return;
      lenis = new LenisCtor({ duration: 1.05, anchors: true });
      const loop = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
