<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    class: className = undefined,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h3 class={cn("font-display text-2xl font-semibold leading-none tracking-tight", className)} {...rest}>
  <slot />
</h3>
