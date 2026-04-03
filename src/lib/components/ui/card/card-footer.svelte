<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    class: className = undefined,
    ...rest
  }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={cn("flex items-center p-6 pt-0", className)} {...rest}>
  <slot />
</div>
