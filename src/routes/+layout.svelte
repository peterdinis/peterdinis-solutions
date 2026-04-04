<script lang="ts">
  import "../app.css";
  import SeoHead from "$lib/components/SeoHead.svelte";
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import SiteHeader from "$lib/components/SiteHeader.svelte";
  import { page } from "$app/stores";
  import { tickVisitorIfNewSession } from "$lib/visitors";
  import { syncThemeToggleAria } from "$lib/theme";
  import { t } from "$lib/i18n";
  import { currency } from "$lib/stores/currency";
  import { language } from "$lib/stores/language";
  import { onMount } from "svelte";
  import { get } from "svelte/store";

  let { children } = $props();

  onMount(() => {
    language.init();
    currency.init();

    try {
      const v = localStorage.getItem("pds-theme");
      const dark = v ? v === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", dark);
    } catch {
      document.documentElement.classList.add("dark");
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("pds-preloader-skip");
      try {
        sessionStorage.setItem("pds_preloader_done", "1");
      } catch {
        /* ignore */
      }
    } else if (sessionStorage.getItem("pds_preloader_done")) {
      document.documentElement.classList.add("pds-preloader-skip");
    }

    tickVisitorIfNewSession();
    syncThemeToggleAria(get(language));

    const pre = document.getElementById("pds-preloader");
    if (!pre || document.documentElement.classList.contains("pds-preloader-skip")) {
      if (pre) {
        pre.classList.add("pds-preloader--hide");
        setTimeout(() => pre.remove(), 320);
      }
      return;
    }

    const start = performance.now();
    const minMs = 400;
    const done = () => {
      const wait = Math.max(0, minMs - (performance.now() - start));
      setTimeout(() => {
        try {
          sessionStorage.setItem("pds_preloader_done", "1");
        } catch {
          /* ignore */
        }
        pre.classList.add("pds-preloader--hide");
        setTimeout(() => pre.remove(), 320);
      }, wait);
    };

    if (document.readyState === "complete") done();
    else window.addEventListener("load", done, { once: true });

    const scrollBtn = document.getElementById("pds-scroll-top");
    const main = document.getElementById("main-content");
    const threshold = 360;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function syncScrollBtn() {
      if (!scrollBtn) return;
      const show = window.scrollY > threshold;
      scrollBtn.classList.toggle("pds-scroll-top--hidden", !show);
      scrollBtn.setAttribute("aria-hidden", show ? "false" : "true");
      if (show) scrollBtn.removeAttribute("tabindex");
      else scrollBtn.setAttribute("tabindex", "-1");
    }

    scrollBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      main?.focus({ preventScroll: true });
    });
    window.addEventListener("scroll", syncScrollBtn, { passive: true });
    syncScrollBtn();

    function closeMobileNav() {
      document.getElementById("pds-nav-details")?.removeAttribute("open");
    }
    document.querySelectorAll('#pds-nav-details a[href^="/#"]').forEach((a) => {
      a.addEventListener("click", closeMobileNav);
    });
    document.querySelectorAll('#pds-nav-details a[href^="/analytics"]').forEach((a) => {
      a.addEventListener("click", closeMobileNav);
    });
  });
</script>

{#if !$page.error}
  <SeoHead seo={$page.data.seo} />
{/if}

<div id="pds-preloader" role="status" aria-live="polite" aria-busy="true">
  <div class="flex flex-col items-center gap-6 px-6 text-center">
    <div class="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
      Peterdinis <span class="text-accent">Solutions</span>
    </div>
    <div class="h-1 w-52 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 sm:w-64">
      <div
        class="h-full w-2/5 rounded-full bg-gradient-to-r from-brand-dim via-accent to-brand-glow motion-safe:animate-preloader-bar"
      ></div>
    </div>
    <p class="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-500">
      {t($language, "preloader")}
    </p>
  </div>
</div>

<a
  href="#main-content"
  class="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-16 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-surface opacity-0 transition focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
>
  {t($language, "skip")}
</a>

<div class="flex min-h-screen flex-col">
  <SiteHeader />
  <main id="main-content" class="flex-1 outline-none" tabindex="-1">
    {@render children()}
  </main>
  <SiteFooter />
</div>

<button
  type="button"
  id="pds-scroll-top"
  tabindex="-1"
  aria-hidden="true"
  class="pds-scroll-top--hidden fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur-md transition-[opacity,transform,visibility] duration-300 ease-smooth dark:border-slate-600 dark:bg-slate-900/95 dark:text-slate-200 dark:shadow-black/40 motion-safe:hover:border-accent/40 motion-safe:hover:text-accent motion-safe:active:scale-95"
  aria-label={t($language, "scroll_top")}
>
  <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
  </svg>
</button>
