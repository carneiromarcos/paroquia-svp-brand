import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = `${title} | Paroquia Sao Vicente de Paulo`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);
}
