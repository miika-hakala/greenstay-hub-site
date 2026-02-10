import en from './en.json';
import es from './es.json';
import fi from './fi.json';

export const locales = ['en', 'es', 'fi'] as const;
export type Locale = (typeof locales)[number];

const translations: Record<Locale, Record<string, any>> = { en, es, fi };

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  for (const k of keys) {
    value = value?.[k];
  }
  if (typeof value === 'string') return value;
  // Fallback to English
  value = translations.en;
  for (const k of keys) {
    value = value?.[k];
  }
  return typeof value === 'string' ? value : key;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
