"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Spark = {
  x: number;
  y: number;
  depth: number; // 0.35–1, drives size, parallax and drift
  size: number;
  alpha: number;
  phase: number; // twinkle offset
  vx: number;
  vy: number;
};

/**
 * The hero signature: a drifting "north-star constellation" canvas field
 * with pointer parallax, plus a GSAP entrance that reveals the headline
 * through per-line masks and opens the aperture mark. Loaded lazily,
 * never under reduced motion; the server-rendered hero is the source of
 * truth for all content.
 */
export default function HeroEnhancement() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // --- Canvas constellation field ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.closest<HTMLElement>("[data-hero]");
    if (!canvas || !hero) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let sparks: Spark[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;
    let visible = true;
    let last = 0;
    const pointer = { tx: 0, ty: 0, x: 0, y: 0 };

    const seed = (w: number, h: number) => {
      const count = Math.min(110, Math.round((w * h) / 14000));
      sparks = Array.from({ length: count }, () => {
        const depth = 0.35 + Math.random() * 0.65;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          depth,
          size: (0.8 + Math.random() * 1.6) * depth,
          alpha: (0.25 + Math.random() * 0.5) * depth,
          phase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 4 * depth,
          vy: (Math.random() - 0.5) * 3 * depth,
        };
      });
    };

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed(width, height);
    };

    const drawSpark = (x: number, y: number, s: number, alpha: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - s);
      ctx.quadraticCurveTo(x, y, x + s, y);
      ctx.quadraticCurveTo(x, y, x, y + s);
      ctx.quadraticCurveTo(x, y, x - s, y);
      ctx.quadraticCurveTo(x, y, x, y - s);
      ctx.fillStyle = `rgba(168, 184, 214, ${alpha})`;
      ctx.fill();
    };

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;

      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;

      ctx.clearRect(0, 0, width, height);
      const time = t / 1000;
      for (const s of sparks) {
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        if (s.x < -4) s.x = width + 4;
        if (s.x > width + 4) s.x = -4;
        if (s.y < -4) s.y = height + 4;
        if (s.y > height + 4) s.y = -4;
        const twinkle = 0.75 + 0.25 * Math.sin(time * 1.4 + s.phase);
        drawSpark(
          s.x + pointer.x * 16 * s.depth,
          s.y + pointer.y * 10 * s.depth,
          s.size,
          s.alpha * twinkle,
        );
      }
    };

    const start = () => {
      if (running || !visible || document.hidden) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointer = (e: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      pointer.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onLeave = () => {
      pointer.tx = 0;
      pointer.ty = 0;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    const ro = new ResizeObserver(resize);
    ro.observe(hero);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    });
    io.observe(hero);

    resize();
    start();
    hero.addEventListener("pointermove", onPointer);
    hero.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    // The canvas replaces the static SSR star field while active.
    const staticField = hero.querySelector<SVGElement>("[data-hero-stars]");
    if (staticField) staticField.style.opacity = "0";

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      hero.removeEventListener("pointermove", onPointer);
      hero.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      if (staticField) staticField.style.opacity = "";
    };
  }, []);

  // --- Entrance: aperture mark opens, headline lines reveal through masks ---
  useGSAP(() => {
    const hero = canvasRef.current?.closest<HTMLElement>("[data-hero]");
    if (!hero) return;
    const headline = hero.querySelector<HTMLElement>("[data-hero-headline]");
    const items = hero.querySelectorAll<HTMLElement>("[data-hero-item]");
    const mark = hero.querySelector<HTMLElement>("[data-hero-mark]");

    let revert: (() => void) | undefined;

    const run = async () => {
      // Wait briefly for webfonts so line splitting matches final layout,
      // but never long enough to hurt LCP (next/font preloads them anyway).
      try {
        await Promise.race([document.fonts.ready, new Promise((res) => setTimeout(res, 250))]);
      } catch {
        /* non-blocking */
      }
      if (!headline) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      try {
        const { SplitText } = await import("gsap/SplitText");
        gsap.registerPlugin(SplitText);
        const split = SplitText.create(headline, { type: "lines", mask: "lines" });
        revert = () => split.revert();
        tl.from(split.lines, { yPercent: 110, duration: 0.7, stagger: 0.07 }, 0);
      } catch {
        // SplitText unavailable: plain fade keeps the moment intact.
        tl.from(headline, { autoAlpha: 0, y: 24, duration: 0.6 }, 0);
      }

      tl.from(items, { autoAlpha: 0, y: 18, duration: 0.5, stagger: 0.07 }, 0.2);
      if (mark) {
        tl.from(
          mark,
          { autoAlpha: 0, scale: 0.82, rotate: -6, transformOrigin: "50% 50%", duration: 1.0, ease: "power3.out" },
          0.2,
        );
      }
      if (canvasRef.current) {
        tl.from(canvasRef.current, { autoAlpha: 0, duration: 1.2, ease: "power2.out" }, 0);
      }
    };

    run();

    return () => {
      revert?.();
    };
  });

  // --- Gentle pointer parallax on the aperture mark ---
  useGSAP(() => {
    const hero = canvasRef.current?.closest<HTMLElement>("[data-hero]");
    const mark = hero?.querySelector<HTMLElement>("[data-hero-mark]");
    if (!hero || !mark) return;

    const xTo = gsap.quickTo(mark, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(mark, "y", { duration: 0.6, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      xTo(((e.clientX - rect.left) / rect.width - 0.5) * -18);
      yTo(((e.clientY - rect.top) / rect.height - 0.5) * -12);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  });

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />;
}
