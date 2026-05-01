"use client";

import { useEffect, useRef } from "react";

/**
 * Client-only Mermaid renderer.
 * Initializes once on first mount, renders the chart into a div.
 * Syntax is passed as the `chart` prop.
 */
export function Mermaid({ chart, id }: { chart: string; id: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const mermaid = (await import("mermaid")).default;

      // Mermaid won't accept CSS variables — feed literal hex values.
      // These must stay in sync with globals.css design tokens.
      const isDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        fontFamily:
          "ui-sans-serif, -apple-system, BlinkMacSystemFont, sans-serif",
        themeVariables: {
          background: "transparent",
          primaryColor: "transparent",
          primaryTextColor: isDark ? "#f4f3ee" : "#0e0e0d",
          primaryBorderColor: isDark ? "#2a2a28" : "#d8d6d0",
          lineColor: isDark ? "#2a2a28" : "#d8d6d0",
          tertiaryColor: "transparent",
        },
        flowchart: {
          curve: "basis",
          htmlLabels: true,
          padding: 16,
        },
      });

      try {
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (e) {
        if (!cancelled && ref.current) {
          ref.current.innerHTML =
            '<pre class="t-small">Mermaid render failed.</pre>';
          console.error(e);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return (
    <div
      ref={ref}
      className="my-8 flex justify-center [&_svg]:max-w-full [&_svg]:h-auto"
      aria-label="forest-kit trail diagram"
    />
  );
}
