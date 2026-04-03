import { browser } from "$app/environment";
import { writable } from "svelte/store";

export type Currency = "eur" | "usd" | "czk";

function detectCurrency(): Currency {
  if (!browser) return "eur";
  try {
    const v = localStorage.getItem("pds-currency");
    if (v === "eur" || v === "usd" || v === "czk") return v;
  } catch {
    /* ignore */
  }
  return "eur";
}

function createCurrencyStore() {
  const { subscribe, set } = writable<Currency>("eur");

  return {
    subscribe,
    init() {
      set(detectCurrency());
    },
    setCurrency(c: Currency) {
      set(c);
      if (browser) {
        try {
          localStorage.setItem("pds-currency", c);
        } catch {
          /* ignore */
        }
      }
    },
  };
}

export const currency = createCurrencyStore();
