<script lang="ts">
  import { t } from "$lib/i18n";
  import type { MessageRecord } from "$lib/i18n";
  import { language } from "$lib/stores/language";

  let { key, fallback }: { key: keyof MessageRecord; fallback: string } = $props();

  const text = $derived(t($language, key) || fallback);
</script>

<p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
  {text}
</p>
