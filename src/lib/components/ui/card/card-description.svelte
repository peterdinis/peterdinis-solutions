<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    class: className = undefined,
    ...rest
  }: HTMLAttributes<HTMLParagraphElement> = $props();
</script>

<!-- svelte-ignore slot_element_deprecated -->
<p class={cn("text-sm text-muted-foreground", className)} {...rest}>
  <slot />
</p>
