import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export const LANGUAGE_CODES = {
  IT: 'it',
  EN: 'en',
  PT: 'pt',
  ES: 'es',
  DE: 'de',
  FR: 'fr'
} as const;

export const SETTED_LANGUAGE = LANGUAGE_CODES.IT;

@Injectable({
  providedIn: 'root'
})
export class TranslateUtility {

  private translate = inject(TranslateService);

  initLanguage() {
    this.translate.setFallbackLang(SETTED_LANGUAGE);
    this.translate.use(SETTED_LANGUAGE);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }
}