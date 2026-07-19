"use client";

import { useEffect } from "react";

/**
 * §6 — the entrance sequence and pointer parallax. Loaded lazily
 * (ssr:false, never in the initial bundle) and only when motion is
 * allowed. Uses gsap.from throughout so the server-rendered state is
 * the final state: crawlers, no-JS users, and reduced-motion users all
 * see the finished frame. Everything reverts on unmount.
 */
export default function HeroEnhancement() {
  useEffect(() => {
    let revertContext: { revert: () => void } | undefined;
    let removeParallax: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (!hero) return;

      revertContext = gsap.context(() => {
        const entrance = "expo.out"; // closest core ease to cubic-bezier(0.16,1,0.3,1)
        const tl = gsap.timeline();

        // 0ms — column hairlines draw downward
        tl.from("[data-hero-rule]", { scaleY: 0, duration: 0.7, stagger: 0.04, ease: "expo.out" }, 0);

        // 180ms — headline lines rise from their clipped masks
        tl.from(
          "[data-hero-line]",
          { yPercent: 110, duration: 0.9, stagger: 0.09, ease: entrance },
          0.18,
        );

        // 520ms — the bearing's stroke draws itself
        const paths = Array.from(hero.querySelectorAll<SVGPathElement>("[data-bearing-path]"));
        for (const path of paths) {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        }
        tl.to(paths, { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" }, 0.52);
        tl.set(paths, { clearProps: "strokeDasharray,strokeDashoffset" });

        // 700ms — sub-paragraph and actions fade + rise
        tl.from(
          "[data-hero-sub]",
          { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.08, ease: entrance },
          0.7,
        );

        // 760ms — corner micro-type
        tl.from("[data-hero-corner]", { autoAlpha: 0, duration: 0.4, ease: "power1.out" }, 0.76);
      }, hero);

      // §5a — pointer parallax: max 12px, eased, fine pointers only.
      if (window.matchMedia("(pointer: fine)").matches) {
        const target = hero.querySelector<HTMLElement>("[data-hero-parallax]");
        if (target) {
          const toX = gsap.quickTo(target, "x", { duration: 0.9, ease: "power3.out" });
          const toY = gsap.quickTo(target, "y", { duration: 0.9, ease: "power3.out" });
          const onMove = (event: PointerEvent) => {
            toX((event.clientX / window.innerWidth - 0.5) * 24);
            toY((event.clientY / window.innerHeight - 0.5) * 24);
          };
          hero.addEventListener("pointermove", onMove, { passive: true });
          removeParallax = () => hero.removeEventListener("pointermove", onMove);
        }
      }
    })();

    return () => {
      cancelled = true;
      removeParallax?.();
      revertContext?.revert();
    };
  }, []);

  return null;
}
