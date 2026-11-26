import english from "./en.json";
import spanish from "./es.json";
import portuguese from "./pt.json";
import type { Locale } from "./routes";

const dictionaries: Record<Locale, Record<string, string>> = {
  pt: portuguese,
  en: english,
  es: spanish,
};

export function translator(locale: Locale) {
  const dictionary = dictionaries[locale];
  return <T>(value: T, args?: readonly (string | number)[]): T => {
    if (typeof value !== "string") return value;
    const message = Object.hasOwn(dictionary, value) ? dictionary[value] : value;
    return (args ? message.replace(/\{(\d+)\}/g, (match, index: string) => String(args[Number(index)] ?? match)) : message) as T;
  };
}
