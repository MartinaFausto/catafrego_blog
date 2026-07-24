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
    this.translate.setFallbackLang(SETTED_LANGUAGE);

    return firstValueFrom(
      this.translate.use(SETTED_LANGUAGE)
    );
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }
}