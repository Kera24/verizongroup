"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroEnhancement = dynamic(() => import("./HeroEnhancement"), { ssr: false });

/**
 * Motion gate for the hero signature. The enhancement chunk (canvas field +
 * GSAP) is only requested after hydration and never under reduced motion,
 * so it stays out of the initial bundle and never blocks content.
 */
export function HeroMotion() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEnabled(true);
    }
  }, []);

  return enabled ? <HeroEnhancement /> : null;
}
