<script lang="ts">
  import SectionEyebrow from "$lib/components/SectionEyebrow.svelte";
  import { t } from "$lib/i18n";
  import { language } from "$lib/stores/language";
  import { reveal } from "$lib/actions/reveal";
</script>

<section
  id="services"
  class="scroll-mt-20 border-b border-slate-200/90 bg-slate-100/70 py-20 dark:border-slate-800/60 dark:bg-surface-muted/50 sm:py-28"
>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl" use:reveal data-reveal>
      <SectionEyebrow key="eyebrow_services" fallback="Capabilities" />
      <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {t($language, "services_title")}
      </h2>
      <p class="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        {t($language, "services_sub")}
      </p>
    </div>

    <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        use:reveal
        data-reveal
        class="group relative rounded-2xl border border-slate-200/90 bg-white/95 p-8 shadow-lg backdrop-blur-sm transition duration-500 ease-smooth hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl dark:border-slate-800/80 dark:bg-surface-card/80 dark:shadow-xl dark:hover:shadow-glow"
      >
        <div
          class="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
        ></div>
        <div
          class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-2xl shadow-inner transition duration-500 ease-smooth group-hover:scale-110 group-hover:bg-accent/20 group-hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.5)]"
        >
          ⚙️
        </div>
        <h3 class="font-display text-xl font-semibold text-slate-900 transition group-hover:text-accent dark:text-white">
          {t($language, "s1_title")}
        </h3>
        <p class="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
          {t($language, "s1_body")}
        </p>
        <ul class="mt-6 space-y-2 text-sm text-slate-500 dark:text-slate-500">
          <li class="flex items-center gap-2">
            <span class="text-accent">→</span>
            {t($language, "s1_li1")}
          </li>
          <li class="flex items-center gap-2">
            <span class="text-accent">→</span>
            {t($language, "s1_li2")}
          </li>
        </ul>
      </article>

      <article
        use:reveal
        data-reveal
        class="group relative rounded-2xl border border-slate-200/90 bg-white/95 p-8 shadow-lg backdrop-blur-sm transition delay-75 duration-500 ease-smooth hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl dark:border-slate-800/80 dark:bg-surface-card/80 dark:shadow-xl dark:hover:shadow-glow"
      >
        <div
          class="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
        ></div>
        <div
          class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-2xl shadow-inner transition duration-500 ease-smooth group-hover:scale-110 group-hover:bg-accent/20 group-hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.5)]"
        >
          🌐
        </div>
        <h3 class="font-display text-xl font-semibold text-slate-900 transition group-hover:text-accent dark:text-white">
          {t($language, "s2_title")}
        </h3>
        <p class="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
          {t($language, "s2_body")}
        </p>
        <ul class="mt-6 space-y-2 text-sm text-slate-500 dark:text-slate-500">
          <li class="flex items-center gap-2">
            <span class="text-accent">→</span>
            {t($language, "s2_li1")}
          </li>
          <li class="flex items-center gap-2">
            <span class="text-accent">→</span>
            {t($language, "s2_li2")}
          </li>
        </ul>
      </article>

      <article
        use:reveal
        data-reveal
        class="group relative rounded-2xl border border-slate-200/90 bg-white/95 p-8 shadow-lg backdrop-blur-sm transition delay-150 duration-500 ease-smooth hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl dark:border-slate-800/80 dark:bg-surface-card/80 dark:shadow-xl dark:hover:shadow-glow sm:col-span-2 lg:col-span-1"
      >
        <div
          class="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
        ></div>
        <div
          class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-2xl shadow-inner transition duration-500 ease-smooth group-hover:scale-110 group-hover:bg-accent/20 group-hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.5)]"
        >
          📱
        </div>
        <h3 class="font-display text-xl font-semibold text-slate-900 transition group-hover:text-accent dark:text-white">
          {t($language, "s3_title")}
        </h3>
        <p class="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
          {t($language, "s3_body")}
        </p>
        <ul class="mt-6 space-y-2 text-sm text-slate-500 dark:text-slate-500">
          <li class="flex items-center gap-2">
            <span class="text-accent">→</span>
            {t($language, "s3_li1")}
          </li>
          <li class="flex items-center gap-2">
            <span class="text-accent">→</span>
            {t($language, "s3_li2")}
          </li>
        </ul>
      </article>
    </div>
  </div>
</section>
