/**
 * useSeo.ts
 *
 * A tiny, dependency-free hook that updates the page <title> and the
 * existing meta tags (already sitting in client/index.html) whenever a
 * page component mounts. This gives each route its own title/description
 * for search engines and social shares, without installing react-helmet.
 *
 * Place this file at: client/src/lib/useSeo.ts
 */

import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path: string; // e.g. "/gallery" — must start with a slash
}

const SITE_URL = "https://holy-ganges-dorms.holygangesvns.workers.dev";

export function useSeo({ title, description, path }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', `${SITE_URL}${path}`);
    setMeta('meta[property="twitter:title"]', title);
    setMeta('meta[property="twitter:description"]', description);
    setMeta('meta[property="twitter:url"]', `${SITE_URL}${path}`);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `${SITE_URL}${path}`);
  }, [title, description, path]);
}
