import type { Lang } from "$lib/i18n";
import type { Currency } from "$lib/stores/currency";

const EUR_TO_USD = 1.09;
const EUR_TO_CZK = 24.65;

function localeFor(lang: Lang): string {
  if (lang === "cs") return "cs-CZ";
  if (lang === "en") return "en-GB";
  return "sk-SK";
}

export function formatMoney(eurAmount: number, currency: Currency, lang: Lang): string {
  const loc = localeFor(lang);
  if (currency === "usd") {
    const usd = Math.round(eurAmount * EUR_TO_USD);
    return new Intl.NumberFormat(loc, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(usd);
  }
  if (currency === "czk") {
    const czk = Math.round(eurAmount * EUR_TO_CZK);
    return new Intl.NumberFormat(loc, {
      style: "currency",
      currency: "CZK",
      maximumFractionDigits: 0,
    }).format(czk);
  }
  return new Intl.NumberFormat(loc, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(eurAmount);
}
