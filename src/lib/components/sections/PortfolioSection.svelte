<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import SectionEyebrow from "$lib/components/SectionEyebrow.svelte";
  import { t } from "$lib/i18n";
  import { language } from "$lib/stores/language";
  import { reveal } from "$lib/actions/reveal";
</script>

<section
  id="portfolio"
  class="scroll-mt-20 border-y border-slate-200/90 bg-slate-100/60 py-20 dark:border-slate-800/60 dark:bg-surface-muted/40 sm:py-28"
>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col justify-between gap-10 lg:flex-row lg:items-end" use:reveal data-reveal>
      <div class="max-w-xl">
        <SectionEyebrow key="eyebrow_portfolio" fallback="Selected work" />
        <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          {t($language, "portfolio_title")}
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {t($language, "portfolio_lead")}
        </p>
      </div>
    </div>

    <div
      use:reveal
      data-reveal
      class="relative mt-14 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl transition delay-75 duration-500 dark:border-slate-800/90 dark:bg-surface-card"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.07] via-transparent to-cyan-600/[0.06] dark:from-accent/5 dark:to-cyan-600/10"
      ></div>
      <div
        class="relative border-b border-slate-200/90 bg-slate-100/90 px-4 py-3 dark:border-slate-800/80 dark:bg-slate-900/60 sm:px-6"
      >
        <div class="flex items-center gap-2">
          <span class="h-3 w-3 rounded-full bg-red-500/80"></span>
          <span class="h-3 w-3 rounded-full bg-amber-500/80"></span>
          <span class="h-3 w-3 rounded-full bg-emerald-500/80"></span>
          <span class="ml-4 truncate text-xs text-slate-500 dark:text-slate-500">dinis-portfolio.vercel.app</span>
        </div>
      </div>
      <div class="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p class="text-sm font-medium text-slate-500 dark:text-slate-500">
            {t($language, "portfolio_featured")}
          </p>
          <h3 class="font-display mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
            {t($language, "portfolio_project")}
          </h3>
          <p class="mt-3 max-w-lg text-slate-600 dark:text-slate-400">
            {t($language, "portfolio_body")}
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            {#each ["Next.js", "TypeScript", "Tailwind", "Framer Motion"] as tech (tech)}
              <span
                class="rounded-full bg-slate-200/90 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
              >
                {tech}
              </span>
            {/each}
          </div>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button
            variant="outline"
            class="rounded-full px-6 py-3"
            href="https://github.com/peterdinis/Dinis-Portfolio"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            {t($language, "portfolio_repo")}
          </Button>
          <Button class="rounded-full px-6 py-3" href="https://dinis-portfolio.vercel.app">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            {t($language, "portfolio_live")}
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
