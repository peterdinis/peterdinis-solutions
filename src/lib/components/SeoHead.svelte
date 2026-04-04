<script lang="ts">
  import { page } from "$app/stores";
  import { buildJsonLd } from "$lib/seo/build-jsonld";
  import { SITE_URL, absoluteUrl, DEFAULT_OG_PATH, ogLocale } from "$lib/site";
  import { t, type Lang } from "$lib/i18n";
  import type { MessageRecord } from "$lib/i18n";
  import { language } from "$lib/stores/language";

  type SeoKeys = {
    titleKey: keyof MessageRecord;
    descriptionKey: keyof MessageRecord;
    keywordsKey?: keyof MessageRecord;
    noindex?: boolean;
  };

  let { seo }: { seo: SeoKeys } = $props();

  const pathname = $derived($page.url.pathname);
  const canonical = $derived(`${SITE_URL}${pathname === "/" ? "" : pathname}`);
  const lang = $derived($language as Lang);

  const title = $derived(t(lang, seo.titleKey));
  const description = $derived(t(lang, seo.descriptionKey));
  const keywords = $derived(seo.keywordsKey ? t(lang, seo.keywordsKey) : "");

  const ogImage = $derived(absoluteUrl(DEFAULT_OG_PATH));
  const robots = $derived(seo.noindex ? "noindex, nofollow" : "index, follow");

  const localePrimary = $derived(ogLocale(lang));
  const localesAll = ["sk_SK", "cs_CZ", "en_GB"] as const;
  const localeAlternates = $derived(localesAll.filter((l) => l !== localePrimary));

  const jsonLdString = $derived(
    JSON.stringify(
      buildJsonLd({
        pageUrl: canonical,
        pageTitle: title,
        description,
        lang,
      }),
    ),
  );

  const scriptEl = "script";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if keywords}
    <meta name="keywords" content={keywords} />
  {/if}
  <meta name="robots" content={robots} />
  <meta name="author" content="Peterdinis Solutions" />
  <link rel="canonical" href={canonical} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Peterdinis Solutions" />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={title} />
  <meta property="og:locale" content={localePrimary} />
  {#each localeAlternates as alt}
    <meta property="og:locale:alternate" content={alt} />
  {/each}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  <meta name="twitter:image:alt" content={title} />

  <svelte:element this={scriptEl} type="application/ld+json">{jsonLdString}</svelte:element>
</svelte:head>
