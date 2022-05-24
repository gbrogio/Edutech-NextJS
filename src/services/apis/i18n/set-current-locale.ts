export function setCurrentLocale(locale: string) {
  if (locale === 'pt-br') {
    return 'default';
  }

  return locale;
}
