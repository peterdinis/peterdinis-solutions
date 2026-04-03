<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import SectionEyebrow from "$lib/components/SectionEyebrow.svelte";
  import { getContactEmail } from "$lib/email";
  import { t } from "$lib/i18n";
  import { language } from "$lib/stores/language";
  import { reveal } from "$lib/actions/reveal";
  import { onMount } from "svelte";

  let email = $state("…");
  let mailto = $state("#");

  onMount(() => {
    const e = getContactEmail();
    email = e;
    mailto = `mailto:${e}`;
  });
</script>

<section id="contact" class="scroll-mt-20 py-20 sm:py-28">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div use:reveal data-reveal class="relative">
      <div
        class="absolute -inset-px rounded-[1.65rem] bg-[length:200%_200%] bg-gradient-to-br from-accent/30 via-cyan-500/15 to-accent/25 opacity-80 blur-sm motion-safe:animate-gradient-shift motion-reduce:opacity-50 dark:from-accent/40 dark:via-cyan-500/20 dark:to-accent/30 dark:opacity-70"
      ></div>
      <div
        class="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50 to-white p-8 shadow-lg dark:border-slate-800/90 dark:from-surface-card dark:via-surface-muted dark:to-surface-card dark:shadow-none sm:p-12 lg:p-14"
      >
        <div
          class="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl motion-safe:animate-float-slow"
        ></div>
        <div class="relative max-w-2xl">
          <SectionEyebrow key="eyebrow_contact" fallback="Contact" />
          <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            {t($language, "contact_title")}
          </h2>
          <p class="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {t($language, "contact_lead")}
          </p>
        </div>
        <div class="relative mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={mailto} class="group inline-flex w-fit items-center gap-2 px-8 py-4 text-base">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {email}
          </Button>
          <p class="text-sm text-slate-500 dark:text-slate-500">{t($language, "contact_reply")}</p>
        </div>
      </div>
    </div>
  </div>
</section>
