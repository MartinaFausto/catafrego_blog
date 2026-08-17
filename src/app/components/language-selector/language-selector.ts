import { Component, HostListener, inject } from '@angular/core';
import {
  TranslateUtility,
  getInitialLanguage
} from '../../utils/translate-utility';

interface Language {
  code: string;
}

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
})
export class LanguageSelector {
  private translateUtility = inject(TranslateUtility);

  languages: Language[] = [
    { code: 'IT' },
    { code: 'EN' },
    { code: 'ES' },
    { code: 'PT' },
    { code: 'DE' },
    { code: 'FR' }
  ];

  selectedLanguage: Language = this.languages.find(
    language => language.code.toLowerCase() === getInitialLanguage().toLowerCase()
  )!;

  isOpen = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  changeLanguage(language: Language): void {
    this.selectedLanguage = language;
    this.isOpen = false;

    this.translateUtility.changeLanguage(language.code.toLowerCase());
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    if (!(event.target as HTMLElement).closest('.language-selector')) {
      this.isOpen = false;
    }
  }
}