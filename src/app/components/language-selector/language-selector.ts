import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TranslateUtility } from '../../utils/translate-utility';
import { LANGUAGE_CODES, SETTED_LANGUAGE } from '../../utils/translate-utility';

interface Language {
  label: string;
  code: string;
}

@Component({
  selector: 'app-language-selector',
  imports: [FormsModule, SelectModule],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
})

export class LanguageSelector {

  private translateUtility = inject(TranslateUtility);

  languages: Language[] = [
      { code: LANGUAGE_CODES.EN, label: 'EN' },
      { code: LANGUAGE_CODES.DE, label: 'DE' },
      { code: LANGUAGE_CODES.ES, label: 'ES' },
      { code: LANGUAGE_CODES.FR, label: 'FR' },
      { code: LANGUAGE_CODES.IT, label: 'IT' },
      { code: LANGUAGE_CODES.PT, label: 'PT' }
  ];
  
  selectedLanguage: Language = this.languages.find(
    lang => lang.code === SETTED_LANGUAGE
  )!;
  
  changeLanguage(language: Language) {
    this.translateUtility.changeLanguage(language.code);
  }

}
