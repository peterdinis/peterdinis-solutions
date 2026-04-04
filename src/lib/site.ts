/** Production site origin — no trailing slash. */
export const SITE_URL = "https://peterdinis-solutions.com";

/** Default Open Graph / Twitter image (place file in /static). */
export const DEFAULT_OG_PATH = "/og-image.png";

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export function ogLocale(lang: string): string {
  if (lang === "cs") return "cs_CZ";
  if (lang === "en") return "en_GB";
  return "sk_SK";
}
