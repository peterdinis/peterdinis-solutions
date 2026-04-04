<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { SITE_URL } from "$lib/site";
  import { t } from "$lib/i18n";
  import { language } from "$lib/stores/language";
  import { page } from "$app/stores";

  const canonical = $derived(`${SITE_URL}${$page.url.pathname === "/" ? "" : $page.url.pathname}`);
  const errTitle = $derived(t($language, "error_meta_title"));
  const errDesc = $derived(t($language, "error_meta_desc"));
</script>

<svelte:head>
  <title>{errTitle}</title>
  <meta name="description" content={errDesc} />
  <meta name="robots" content="noindex, nofollow" />
  <link rel="canonical" href={canonical} />
  <meta property="og:title" content={errTitle} />
  <meta property="og:description" content={errDesc} />
  <meta property="og:url" content={canonical} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={errTitle} />
  <meta name="twitter:description" content={errDesc} />
</svelte:head>

<section class="relative overflow-hidden border-b border-slate-200/90 dark:border-slate-800/60">
  <div
    class="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-accent/5 dark:from-red-500/10"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 bg-grid-light bg-[length:48px_48px] opacity-40 [mask-image:linear-gradient(180deg,transparent,black_40%,black_60%,transparent)] dark:bg-grid-slate dark:opacity-60"
  ></div>

  <div class="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
    <div class="mx-auto max-w-2xl motion-safe:animate-fade-up">
      <p
        class="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-red-500 dark:text-red-400"
      >
        {t($language, "error_eyebrow")}
      </p>
      <div
        class="rounded-3xl border border-slate-200/90 bg-white/90 p-8 shadow-xl backdrop-blur-sm dark:border-slate-800/80 dark:bg-surface-card/95 sm:p-10"
      >
        <h1 class="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          {t($language, "error_title")}
        </h1>
        <p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {t($language, "error_lead")}
        </p>
        {#if $page.status}
          <p class="mt-6 rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900/50">
            <span class="font-medium text-slate-700 dark:text-slate-300">HTTP</span>
            <code class="mt-1 block font-mono text-xs text-slate-800 dark:text-slate-200">{$page.status}</code>
          </p>
        {/if}
        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button class="flex-1 sm:flex-none" href="/">{t($language, "error_try_home")}</Button>
          <Button variant="outline" class="flex-1 sm:flex-none" href="/#contact">{t($language, "error_contact")}</Button>
        </div>
      </div>
    </div>
  </div>
</section>
