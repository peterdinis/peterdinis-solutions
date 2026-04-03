<script lang="ts">
  import SectionEyebrow from "$lib/components/SectionEyebrow.svelte";
  import { t } from "$lib/i18n";
  import { language } from "$lib/stores/language";
  import { reveal } from "$lib/actions/reveal";
</script>

<section id="about" class="scroll-mt-20 py-20 sm:py-28">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-14 lg:grid-cols-2 lg:items-stretch lg:gap-20">
      <div use:reveal data-reveal class="flex flex-col justify-center">
        <SectionEyebrow key="eyebrow_about" fallback="Who I am" />
        <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          {t($language, "about_title")}
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {t($language, "about_lead")}
        </p>
        <ul class="mt-10 space-y-4 text-slate-700 dark:text-slate-300">
          <li
            class="group flex gap-4 rounded-xl border border-transparent p-2 transition duration-300 hover:border-slate-200 hover:bg-slate-50 dark:hover:border-slate-800/80 dark:hover:bg-slate-900/30"
          >
            <span
              class="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(34,211,238,0.6)] transition group-hover:scale-125"
            ></span>
            <span>{t($language, "about_li1")}</span>
          </li>
          <li
            class="group flex gap-4 rounded-xl border border-transparent p-2 transition duration-300 hover:border-slate-200 hover:bg-slate-50 dark:hover:border-slate-800/80 dark:hover:bg-slate-900/30"
          >
            <span
              class="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(34,211,238,0.6)] transition group-hover:scale-125"
            ></span>
            <span>{t($language, "about_li2")}</span>
          </li>
          <li
            class="group flex gap-4 rounded-xl border border-transparent p-2 transition duration-300 hover:border-slate-200 hover:bg-slate-50 dark:hover:border-slate-800/80 dark:hover:bg-slate-900/30"
          >
            <span
              class="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(34,211,238,0.6)] transition group-hover:scale-125"
            ></span>
            <span>{t($language, "about_li3")}</span>
          </li>
        </ul>
      </div>
      <div
        use:reveal
        data-reveal
        class="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-9 shadow-lg transition delay-100 duration-500 ease-smooth dark:border-slate-800/80 dark:from-surface-card dark:via-surface-muted dark:to-surface-card dark:shadow-xl lg:p-11"
      >
        <div
          class="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition duration-700 hover:bg-accent/20"
        ></div>
        <div
          class="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-cyan-600/10 blur-3xl"
        ></div>
        <p class="relative text-sm font-semibold uppercase tracking-widest text-accent">
          {t($language, "mindset_title")}
        </p>
        <p class="relative mt-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {t($language, "mindset_body")}
        </p>
        <div class="relative mt-10 flex flex-wrap gap-2">
          {#each [".NET", "TypeScript", "SvelteKit", "React", "Cloud"] as tag (tag)}
            <span
              class="rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-accent/30 hover:text-accent dark:border-slate-700/80 dark:bg-slate-900/50 dark:text-slate-400"
            >
              {tag}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
