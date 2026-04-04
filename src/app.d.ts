declare global {
  namespace App {
    interface Locals {}
    interface PageData {
      seo: {
        titleKey: keyof import("$lib/i18n").MessageRecord;
        descriptionKey: keyof import("$lib/i18n").MessageRecord;
        keywordsKey?: keyof import("$lib/i18n").MessageRecord;
        noindex?: boolean;
      };
    }
    interface PageState {}
    interface Platform {}
  }
}

export {};
