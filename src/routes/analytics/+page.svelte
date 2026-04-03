<script lang="ts">
  import { Card, CardContent, CardHeader } from "$lib/components/ui/card";
  import { getVisitorTotal } from "$lib/visitors";
  import { t } from "$lib/i18n";
  import { language } from "$lib/stores/language";
  import { reveal } from "$lib/actions/reveal";
  import { onMount } from "svelte";

  let total = $state(0);

  onMount(() => {
    total = getVisitorTotal();
  });
</script>

<svelte:head>
  <title>{t($language, "analytics_meta_title")}</title>
  <meta name="description" content={t($language, "analytics_meta_desc")} />
</svelte:head>

<main class="relative min-h-screen overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:px-8">
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div class="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-accent/5 blur-[100px]"></div>
    <div class="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-24 rounded-full bg-cyan-500/5 blur-[100px]"></div>
  </div>

  <div class="relative mx-auto max-w-4xl" use:reveal data-reveal>
    <header class="mb-12 text-center">
      <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"></span>
        <span class="text-[11px] font-bold uppercase tracking-wider text-accent">{t($language, "visitors_eyebrow")}</span>
      </div>
      <h1 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{t($language, "analytics_title")}</h1>
      <p class="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
        {t($language, "analytics_lead")}
      </p>
    </header>

    <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <Card
        class="group relative border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/50"
      >
        <div
          class="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        ></div>
        <CardHeader class="relative flex flex-col gap-6 space-y-0">
          <div class="flex items-center justify-between">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <div class="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-500">
              <span class="h-1 w-1 rounded-full bg-emerald-500"></span>
              Live
            </div>
          </div>
          <div>
            <p class="mb-1 text-sm font-medium text-slate-500 dark:text-slate-400">{t($language, "analytics_total")}</p>
            <div class="text-6xl font-black tabular-nums tracking-tighter text-slate-900 dark:text-white">{total}</div>
          </div>
          <div class="border-t border-slate-100 pt-4 dark:border-slate-800/50">
            <p class="max-w-xs text-[11px] italic text-slate-500">{t($language, "visitors_lead")}</p>
          </div>
        </CardHeader>
      </Card>

      <Card class="flex flex-col gap-6 border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30">
        <CardHeader class="space-y-0">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-bold uppercase tracking-widest text-slate-400">
              {t($language, "platform_health")}
            </h3>
            <div class="flex gap-1">
              <div class="h-3 w-1 rounded-full bg-emerald-500/60"></div>
              <div class="h-5 w-1 rounded-full bg-emerald-500"></div>
              <div class="h-3 w-1 rounded-full bg-emerald-500/60"></div>
            </div>
          </div>
          <div class="space-y-4 pt-2">
            <div class="flex items-center justify-between">
              <span class="text-sm text-slate-600 dark:text-slate-400">{t($language, "response_rate")}</span>
              <span class="text-sm font-bold text-emerald-500">99.9%</span>
            </div>
            <div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div class="h-full w-[99.9%] bg-emerald-500"></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-slate-600 dark:text-slate-400">{t($language, "analytics_edge")}</span>
              <span class="text-sm font-bold text-accent">{t($language, "analytics_cdn")}</span>
            </div>
            <div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div class="h-full w-[12%] bg-accent"></div>
            </div>
          </div>
          <div
            class="mt-auto flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-800/50"
          >
            <div class="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">{t($language, "all_systems")}</span>
          </div>
        </CardHeader>
      </Card>

      <Card class="border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30">
        <CardContent class="pt-6">
          <h3 class="mb-6 text-sm font-bold uppercase tracking-widest text-slate-400">Environment</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-2xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-800/30">
              <p class="mb-1 text-[10px] font-bold uppercase text-slate-500">Runtime</p>
              <p class="text-sm font-bold">{t($language, "analytics_runtime")}</p>
            </div>
            <div class="rounded-2xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-800/30">
              <p class="mb-1 text-[10px] font-bold uppercase text-slate-500">Location</p>
              <p class="text-sm font-bold">Western Europe</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card
        class="flex flex-col items-center justify-center border-accent/10 bg-gradient-to-br from-accent/5 to-transparent text-center"
      >
        <CardContent class="flex flex-col items-center pt-8">
          <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
            <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h4 class="mb-2 text-lg font-bold">{t($language, "expanding_title")}</h4>
          <p class="max-w-sm text-xs leading-relaxed text-slate-500">{t($language, "expanding_body")}</p>
        </CardContent>
      </Card>
    </div>
  </div>
</main>
