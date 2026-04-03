import type { Action } from "svelte/action";

export const reveal: Action<HTMLElement> = (node) => {
  if (typeof window === "undefined") return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    node.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
};
