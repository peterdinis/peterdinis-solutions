import { browser } from "$app/environment";
import type { Lang } from "$lib/i18n";
import { writable } from "svelte/store";

function detectLang(): Lang {
  if (!browser) return "sk";
  try {
    const v = localStorage.getItem("pds-lang");
    if (v === "sk" || v === "cs" || v === "en") return v;
  } catch {
    /* ignore */
  }
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("cs")) return "cs";
  if (nav.startsWith("en")) return "en";
  return "sk";
}

function createLanguageStore() {
  const { subscribe, set } = writable<Lang>("sk");

  return {
    subscribe,
    init() {
      const l = detectLang();
      set(l);
      if (browser) document.documentElement.lang = l;
    },
    setLang(lang: Lang) {
      set(lang);
      if (browser) {
        try {
          localStorage.setItem("pds-lang", lang);
        } catch {
          /* ignore */
        }
        document.documentElement.lang = lang;
      }
    },
  };
}

export const language = createLanguageStore();
