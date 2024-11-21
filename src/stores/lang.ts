import { writable } from 'svelte/store';

let defaultLanguage = 'en-ca';

// Check if we're in the browser environment before accessing `localStorage`
const getSavedLanguage = () => {
  if (typeof window !== 'undefined' && localStorage.getItem('language')) {
    return localStorage.getItem('language');
  }
  return defaultLanguage;
};

export const language = writable(getSavedLanguage());