import { t, type Lang } from "$lib/i18n";

export function syncThemeToggleAria(lang: Lang) {
  const btn = document.getElementById("pds-theme-toggle");
  if (!btn) return;
  const dark = document.documentElement.classList.contains("dark");
  btn.setAttribute("aria-label", dark ? t(lang, "theme_light") : t(lang, "theme_dark"));
  btn.setAttribute("title", dark ? t(lang, "theme_title_light") : t(lang, "theme_title_dark"));
}
