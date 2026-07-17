import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

/**
 * Everything is crawlable. AI answer-engine crawlers are named explicitly so
 * the permission is unambiguous (Bing indexability also feeds ChatGPT).
 */
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bingbot"];
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
