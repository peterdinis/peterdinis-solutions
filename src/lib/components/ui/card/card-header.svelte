<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    class: className = undefined,
    ...rest
  }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<!-- svelte-ignore slot_element_deprecated -->
<div class={cn("flex flex-col space-y-1.5 p-6", className)} {...rest}>
  <slot />
</div>
