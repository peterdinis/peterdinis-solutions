import type { LayoutLoad } from "./$types";
import type { MessageRecord } from "$lib/i18n";

export const prerender = true;

const defaultSeo = {
  titleKey: "meta_title" as keyof MessageRecord,
  descriptionKey: "meta_desc" as keyof MessageRecord,
  keywordsKey: "meta_keywords" as keyof MessageRecord,
};

export const load: LayoutLoad = () => ({
  seo: defaultSeo,
});
