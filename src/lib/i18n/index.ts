import messages from "./messages.json";

export type Lang = keyof typeof messages;
export type MessageRecord = (typeof messages)["sk"];

export function t(lang: Lang, key: keyof MessageRecord | string): string {
  const row = messages[lang] as Record<string, string>;
  const v = row[key as string];
  return v ?? String(key);
}
