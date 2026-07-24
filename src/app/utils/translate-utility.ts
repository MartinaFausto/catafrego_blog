import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

export const LANGUAGE_CODES = {
  IT: 'it',
  EN: 'en',
  PT: 'pt',
  ES: 'es',
  DE: 'de',
  FR: 'fr'
} as const;

export const LANGUAGE_STORAGE_KEY = 'language';

export function getStoredLanguage() {
  return localStorage.getItem(LANGUAGE_STORAGE_KEY);
}

export function getInitialLanguage() {
  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage && Object.values(LANGUAGE_CODES).includes(storedLanguage as any)) {
    return storedLanguage;
  }

  const browserLang = navigator.language.split('-')[0];

  return Object.values(LANGUAGE_CODES).includes(browserLang as any)
    ? browserLang
    : LANGUAGE_CODES.IT;
}

export function getBrowserLanguage() {
  const browserLang = navigator.language.split('-')[0];

  return Object.values(LANGUAGE_CODES).includes(browserLang as any)
    ? browserLang
    : LANGUAGE_CODES.IT;
}

export const SETTED_LANGUAGE = getBrowserLanguage();

@Injectable({
  providedIn: 'root'
})
export class TranslateUtility {

  private translate = inject(TranslateService);

  initLanguage() {
    const language = getInitialLanguage();

    this.translate.setFallbackLang(LANGUAGE_CODES.IT);

    return firstValueFrom(
      this.translate.use(language)
    );
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }
}