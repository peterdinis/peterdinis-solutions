<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    class: className = undefined,
    ...rest
  }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn("rounded-xl border border-border bg-card text-card-foreground shadow", className)}
  {...rest}
>
  <slot />
</div>
