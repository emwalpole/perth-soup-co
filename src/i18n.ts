import { register, init } from 'svelte-i18n';

// Register the languages
register('en-ca', () => import('./locales/en-ca.json'));
register('fr-ca', () => import('./locales/fr-ca.json'));

// Initialize with a default language
init({
  fallbackLocale: 'en-ca',
});
