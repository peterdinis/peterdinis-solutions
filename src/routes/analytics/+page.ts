import type { PageLoad } from "./$types";
import type { MessageRecord } from "$lib/i18n";

export const load: PageLoad = () => ({
  seo: {
    titleKey: "analytics_meta_title" as keyof MessageRecord,
    descriptionKey: "analytics_meta_desc" as keyof MessageRecord,
    keywordsKey: "meta_keywords" as keyof MessageRecord,
  },
});
