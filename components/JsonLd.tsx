/**
 * Renders a JSON-LD structured-data block. Every schema passed here must
 * reflect content that is visible on the page (structured-data policy).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
