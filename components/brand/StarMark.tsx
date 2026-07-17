import type { SVGProps } from "react";

/**
 * The Yoranix four-point north-star mark with the negative-space "Y"
 * aperture carved from the top point. Fill follows currentColor so the
 * mark inherits its colour from the surrounding text utilities.
 */
export function StarMark({ title, ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 120 132"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d={STAR_DIAMOND_PATH} />
      <path d={STAR_BODY_PATH} />
    </svg>
  );
}

/**
 * Small solid four-point sparkle (the wordmark tittle / list marker).
 */
export function StarSpark({ title, ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d={STAR_SPARK_PATH} />
    </svg>
  );
}

/** Top point: a detached diamond, separated from the body by the "Y" channel. */
export const STAR_DIAMOND_PATH =
  "M60 0 C 61 12, 65.5 28, 75 39 C 69 47, 64 54, 60 60 C 56 54, 51 47, 45 39 C 54.5 28, 59 12, 60 0 Z";

/** Body: left wing, right wing, bottom point, with the rounded Y-stem slot. */
export const STAR_BODY_PATH =
  "M0 66 C 26 61, 34 53, 40 43 L 53.5 62 L 53.5 88 C 53.5 96.6, 66.5 96.6, 66.5 88 L 66.5 62 L 80 43 C 86 53, 94 61, 120 66 C 88 74, 66 98, 60 132 C 54 98, 32 74, 0 66 Z";

export const STAR_SPARK_PATH =
  "M14 0 C 15.6 7.4, 20.6 12.4, 28 14 C 20.6 15.6, 15.6 20.6, 14 28 C 12.4 20.6, 7.4 15.6, 0 14 C 7.4 12.4, 12.4 7.4, 14 0 Z";
