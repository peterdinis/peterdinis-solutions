<script lang="ts">
  import { t } from "$lib/i18n";
  import { language } from "$lib/stores/language";
  import { reveal } from "$lib/actions/reveal";

  const year = new Date().getUTCFullYear();
</script>

<footer class="border-t border-slate-200/90 bg-slate-100 dark:border-slate-800/80 dark:bg-surface-muted">
  <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
    <div class="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center" use:reveal data-reveal>
      <div>
        <p class="font-display text-lg font-semibold text-slate-900 dark:text-white">Peterdinis Solutions</p>
        <p class="mt-2 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-500">
          {t($language, "footer_tag")}
        </p>
      </div>
      <div class="flex flex-wrap gap-x-8 gap-y-3 text-sm">
        <a
          href="/#pricing"
          class="text-slate-600 transition duration-300 hover:translate-x-0.5 hover:text-accent dark:text-slate-400"
        >
          {t($language, "footer_pricing")}
        </a>
        <a
          href="https://github.com/peterdinis/Dinis-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-600 transition duration-300 hover:translate-x-0.5 hover:text-accent dark:text-slate-400"
        >
          {t($language, "footer_github")}
        </a>
        <a
          href="https://dinis-portfolio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-600 transition duration-300 hover:translate-x-0.5 hover:text-accent dark:text-slate-400"
        >
          {t($language, "footer_live")}
        </a>
        <a
          href="/#contact"
          class="text-slate-600 transition duration-300 hover:translate-x-0.5 hover:text-accent dark:text-slate-400"
        >
          {t($language, "footer_email")}
        </a>
      </div>
    </div>
    <p
      class="mt-10 border-t border-slate-200/90 pt-8 text-center text-xs text-slate-500 motion-safe:transition motion-safe:duration-500 dark:border-slate-800/80 dark:text-slate-600"
    >
      © {year} Peterdinis Solutions. {t($language, "footer_rights")}
    </p>
  </div>
</footer>
