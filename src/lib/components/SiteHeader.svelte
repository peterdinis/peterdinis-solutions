<script lang="ts">
  import { t, type Lang } from "$lib/i18n";
  import { currency, type Currency } from "$lib/stores/currency";
  import { language } from "$lib/stores/language";
  import { syncThemeToggleAria } from "$lib/theme";
  import { cn } from "$lib/utils";
  import { get } from "svelte/store";

  const selectBase = cn(
    "pds-lang-select h-11 w-full cursor-pointer appearance-none rounded-xl border border-slate-200/90 bg-white py-0 pl-3 pr-10 text-sm font-medium text-slate-800 shadow-sm transition duration-200 hover:border-accent/35 hover:bg-slate-50/80 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-600 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-accent/40 dark:hover:bg-slate-800/80 lg:h-10 lg:min-w-[9.25rem] lg:w-auto",
  );
  const selectCurr = cn(
    "pds-curr-select h-11 w-full cursor-pointer appearance-none rounded-xl border border-slate-200/90 bg-white py-0 pl-3 pr-10 text-sm font-medium text-slate-800 shadow-sm transition duration-200 hover:border-accent/35 hover:bg-slate-50/80 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-600 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-accent/40 dark:hover:bg-slate-800/80 lg:h-10 lg:min-w-[7.75rem] lg:w-auto",
  );
  const chevron = "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 dark:text-slate-400";
  const navLink = cn(
    "pds-nav-link relative rounded-xl px-4 py-3 text-[15px] font-medium text-slate-700 transition duration-200 ease-smooth hover:bg-slate-100 hover:text-slate-900 active:scale-[0.99] dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white lg:px-3.5 lg:py-2 lg:text-sm",
  );

  function onLangChange(e: Event) {
    const v = (e.currentTarget as HTMLSelectElement).value as Lang;
    if (v === "sk" || v === "cs" || v === "en") {
      language.setLang(v);
      syncThemeToggleAria(v);
    }
  }

  function onCurrChange(e: Event) {
    const v = (e.currentTarget as HTMLSelectElement).value as Currency;
    if (v === "eur" || v === "usd" || v === "czk") currency.setCurrency(v);
  }

  function toggleTheme() {
    const el = document.documentElement;
    const dark = !el.classList.contains("dark");
    el.classList.toggle("dark", dark);
    try {
      localStorage.setItem("pds-theme", dark ? "dark" : "light");
    } catch {
      /* ignore */
    }
    syncThemeToggleAria(get(language));
  }
</script>

<header
  class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 shadow-sm shadow-slate-900/[0.03] backdrop-blur-2xl backdrop-saturate-150 motion-safe:animate-fade-in dark:border-slate-800/70 dark:bg-surface/75 dark:shadow-black/20"
>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-[3.75rem] items-center justify-between gap-3 lg:h-16 lg:gap-6">
      <a href="/" class="flex min-w-0 shrink-0 items-center gap-2 rounded-xl py-1">
        <span class="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white lg:text-xl">
          Peterdinis
        </span>
        <span
          class="hidden rounded-lg bg-accent/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent sm:inline"
        >
          Solutions
        </span>
      </a>

      <nav class="hidden items-center gap-0.5 lg:flex" aria-label={t($language, "nav_aria")}>
        <div
          class="flex items-center gap-0.5 rounded-full border border-slate-200/80 bg-slate-100/60 p-1 dark:border-slate-700/60 dark:bg-slate-900/40"
        >
          <a href="/#services" class={navLink}>{t($language, "nav_services")}</a>
          <a href="/#pricing" class={navLink}>{t($language, "nav_pricing")}</a>
          <a href="/#about" class={navLink}>{t($language, "nav_about")}</a>
          <a href="/#portfolio" class={navLink}>{t($language, "nav_portfolio")}</a>
          <a href="/analytics" class={navLink}>{t($language, "nav_analytics")}</a>
        </div>
        <a
          href="/#contact"
          class="ml-3 inline-flex min-h-[2.5rem] items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-surface shadow-glow transition duration-300 ease-smooth hover:bg-brand-glow hover:shadow-[0_0_36px_-10px_rgba(34,211,238,0.55)] active:scale-[0.98]"
        >
          {t($language, "nav_contact")}
        </a>
      </nav>

      <div class="flex shrink-0 items-center gap-2 sm:gap-2.5">
        <div
          data-locale-group
          aria-label={t($language, "select_group_aria")}
          class="hidden items-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-1.5 dark:border-slate-700/70 dark:bg-slate-900/50 lg:flex"
        >
          <div class="relative">
            <label for="pds-lang-select-desktop" class="sr-only">{t($language, "select_lang_label")}</label>
            <select
              id="pds-lang-select-desktop"
              class={selectBase}
              aria-label={t($language, "select_lang_aria")}
              value={$language}
              onchange={onLangChange}
            >
              <option value="sk">🇸🇰 Slovenčina</option>
              <option value="cs">🇨🇿 Čeština</option>
              <option value="en">🇬🇧 English</option>
            </select>
            <svg class={chevron} aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div class="hidden h-6 w-px bg-slate-200 dark:bg-slate-600 sm:block" aria-hidden="true"></div>
          <div class="relative">
            <label for="pds-currency-select-desktop" class="sr-only">{t($language, "select_curr_label")}</label>
            <select
              id="pds-currency-select-desktop"
              class={selectCurr}
              aria-label={t($language, "select_curr_aria")}
              value={$currency}
              onchange={onCurrChange}
            >
              <option value="eur">€ EUR</option>
              <option value="usd">$ USD</option>
              <option value="czk">Kč CZK</option>
            </select>
            <svg class={chevron} aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <button
          type="button"
          id="pds-theme-toggle"
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-slate-50 text-slate-700 transition duration-200 hover:border-accent/40 hover:bg-white hover:text-accent active:scale-95 dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-accent/35 dark:hover:bg-slate-800"
          aria-label={t($language, "theme_dark")}
          title={t($language, "theme_title_dark")}
          onclick={toggleTheme}
        >
          <span class="block dark:hidden" aria-hidden="true">
            <svg class="h-[1.35rem] w-[1.35rem]" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
          <span class="hidden dark:block" aria-hidden="true">
            <svg class="h-[1.35rem] w-[1.35rem]" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </span>
        </button>

        <details id="pds-nav-details" class="relative lg:hidden">
          <summary
            class="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200/90 bg-slate-50 text-slate-800 transition hover:border-accent/35 hover:bg-white dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800 [&::-webkit-details-marker]:hidden"
          >
            <span class="sr-only">{t($language, "nav_menu")}</span>
            <span class="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span class="block h-0.5 w-full rounded-full bg-current"></span>
              <span class="block h-0.5 w-full rounded-full bg-current"></span>
              <span class="block h-0.5 w-full rounded-full bg-current"></span>
            </span>
          </summary>
          <div
            class="absolute right-0 top-[calc(100%+0.5rem)] z-[60] w-[min(calc(100vw-2rem),20rem)] origin-top-right rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-2xl shadow-slate-900/10 ring-1 ring-black/5 backdrop-blur-xl dark:border-slate-700 dark:bg-surface-card/95 dark:shadow-black/40 dark:ring-white/5"
          >
            <nav
              class="flex flex-col gap-0.5 border-b border-slate-200/80 pb-3 dark:border-slate-700/80"
              aria-label={t($language, "nav_aria")}
            >
              <a href="/#services" class={navLink}>{t($language, "nav_services")}</a>
              <a href="/#pricing" class={navLink}>{t($language, "nav_pricing")}</a>
              <a href="/#about" class={navLink}>{t($language, "nav_about")}</a>
              <a href="/#portfolio" class={navLink}>{t($language, "nav_portfolio")}</a>
              <a href="/analytics" class={navLink}>{t($language, "nav_analytics")}</a>
              <a
                href="/#contact"
                class="mt-1 flex min-h-[3rem] items-center justify-center rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-surface shadow-glow transition hover:bg-brand-glow active:scale-[0.99]"
              >
                {t($language, "nav_contact")}
              </a>
            </nav>
            <div data-locale-group class="mt-3 space-y-3" aria-label={t($language, "select_group_aria")}>
              <p class="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                {t($language, "select_lang_label")}
              </p>
              <div class="relative">
                <select
                  class={selectBase}
                  aria-label={t($language, "select_lang_aria")}
                  value={$language}
                  onchange={onLangChange}
                >
                  <option value="sk">🇸🇰 Slovenčina</option>
                  <option value="cs">🇨🇿 Čeština</option>
                  <option value="en">🇬🇧 English</option>
                </select>
                <svg class={chevron} aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p class="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                {t($language, "select_curr_label")}
              </p>
              <div class="relative">
                <select
                  class={selectCurr}
                  aria-label={t($language, "select_curr_aria")}
                  value={$currency}
                  onchange={onCurrChange}
                >
                  <option value="eur">€ EUR</option>
                  <option value="usd">$ USD</option>
                  <option value="czk">Kč CZK</option>
                </select>
                <svg class={chevron} aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  </div>
</header>
