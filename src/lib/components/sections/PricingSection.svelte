<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardFooter, CardHeader } from "$lib/components/ui/card";
  import SectionEyebrow from "$lib/components/SectionEyebrow.svelte";
  import { formatMoney } from "$lib/format-price";
  import { t } from "$lib/i18n";
  import { currency } from "$lib/stores/currency";
  import { language } from "$lib/stores/language";
  import { reveal } from "$lib/actions/reveal";

  const hourly = $derived(
    `${t($language, "price_from")} ${formatMoney(20, $currency, $language)}`,
  );
  const project = $derived(
    `${t($language, "price_from")} ${formatMoney(500, $currency, $language)}`,
  );
  const retainer = $derived(
    `${t($language, "price_from")} ${formatMoney(320, $currency, $language)}`,
  );
</script>

<section id="pricing" class="scroll-mt-20 border-b border-slate-200/90 py-20 dark:border-slate-800/60 sm:py-28">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center" use:reveal data-reveal>
      <SectionEyebrow key="eyebrow_pricing" fallback="Pricing" />
      <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {t($language, "pricing_title")}
      </h2>
      <p class="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        {t($language, "pricing_sub")}
      </p>
    </div>

    <div class="mt-16 grid gap-6 lg:grid-cols-3">
      <div use:reveal data-reveal class="h-full">
      <Card
        class="flex h-full flex-col border-slate-200/90 bg-white shadow-lg transition duration-500 ease-smooth hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl dark:border-slate-800/80 dark:bg-surface-card/90 dark:shadow-none dark:hover:shadow-glow"
      >
        <CardHeader>
          <p class="text-sm font-semibold uppercase tracking-widest text-accent">
            {t($language, "d_name")}
          </p>
          <p class="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white">{hourly}</p>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-500">{t($language, "d_sub")}</p>
        </CardHeader>
        <CardContent class="flex flex-1 flex-col">
          <p class="text-slate-600 dark:text-slate-400">{t($language, "d_body")}</p>
          <ul class="mt-8 space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li class="flex gap-2"><span class="text-accent">✓</span> {t($language, "d_li1")}</li>
            <li class="flex gap-2"><span class="text-accent">✓</span> {t($language, "d_li2")}</li>
            <li class="flex gap-2"><span class="text-accent">✓</span> {t($language, "d_li3")}</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" class="w-full rounded-full py-3" href="#contact">
            {t($language, "d_cta")}
          </Button>
        </CardFooter>
      </Card>
      </div>

      <div use:reveal data-reveal class="h-full">
      <Card
        class="relative flex h-full flex-col overflow-hidden border-2 border-accent/40 bg-gradient-to-b from-white to-slate-50 shadow-glow transition delay-75 duration-500 ease-smooth hover:-translate-y-1 dark:from-surface-card dark:to-surface-muted dark:shadow-none"
      >
        <span
          class="absolute right-4 top-4 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent"
        >
          {t($language, "popular")}
        </span>
        <CardHeader>
          <p class="text-sm font-semibold uppercase tracking-widest text-accent">
            {t($language, "p_name")}
          </p>
          <p class="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white">{project}</p>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-500">{t($language, "p_sub")}</p>
        </CardHeader>
        <CardContent class="flex flex-1 flex-col">
          <p class="text-slate-600 dark:text-slate-400">{t($language, "p_body")}</p>
          <ul class="mt-8 space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li class="flex gap-2"><span class="text-accent">✓</span> {t($language, "p_li1")}</li>
            <li class="flex gap-2"><span class="text-accent">✓</span> {t($language, "p_li2")}</li>
            <li class="flex gap-2"><span class="text-accent">✓</span> {t($language, "p_li3")}</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button class="w-full rounded-full py-3" href="#contact">
            {t($language, "p_cta")}
          </Button>
        </CardFooter>
      </Card>
      </div>

      <div use:reveal data-reveal class="h-full">
      <Card
        class="flex h-full flex-col border-slate-200/90 bg-white shadow-lg transition delay-150 duration-500 ease-smooth hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl dark:border-slate-800/80 dark:bg-surface-card/90 dark:shadow-none dark:hover:shadow-glow"
      >
        <CardHeader>
          <p class="text-sm font-semibold uppercase tracking-widest text-accent">
            {t($language, "r_name")}
          </p>
          <p class="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white">{retainer}</p>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-500">{t($language, "r_sub")}</p>
        </CardHeader>
        <CardContent class="flex flex-1 flex-col">
          <p class="text-slate-600 dark:text-slate-400">{t($language, "r_body")}</p>
          <ul class="mt-8 space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li class="flex gap-2"><span class="text-accent">✓</span> {t($language, "r_li1")}</li>
            <li class="flex gap-2"><span class="text-accent">✓</span> {t($language, "r_li2")}</li>
            <li class="flex gap-2"><span class="text-accent">✓</span> {t($language, "r_li3")}</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" class="w-full rounded-full py-3" href="#contact">
            {t($language, "r_cta")}
          </Button>
        </CardFooter>
      </Card>
      </div>
    </div>

    <p class="mx-auto mt-12 max-w-2xl text-center text-sm text-slate-500 dark:text-slate-500" use:reveal data-reveal>
      {t($language, "pricing_foot")}
    </p>
  </div>
</section>
