<script lang="ts">
  import { cn } from "$lib/utils";

  type Variant = "default" | "outline" | "ghost" | "link";

  let {
    variant = "default",
    class: className = undefined,
    href = undefined,
    type = "button",
    ...rest
  }: {
    variant?: Variant;
    class?: string;
    href?: string;
    type?: string;
    [key: string]: unknown;
  } = $props();

  const variants: Record<Variant, string> = {
    default:
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-glow hover:bg-brand-glow",
    outline:
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background text-sm font-semibold transition-colors hover:bg-accent/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-slate-600 dark:hover:bg-white/5",
    ghost:
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    link: "text-sm font-medium text-primary underline-offset-4 hover:underline",
  };

  const cls = $derived(cn(variants[variant], className));
</script>

{#if href}
  <a {href} class={cls} {...rest}>
    <slot />
  </a>
{:else}
  <button type={type as "button" | "submit" | "reset"} class={cls} {...rest}>
    <slot />
  </button>
{/if}
