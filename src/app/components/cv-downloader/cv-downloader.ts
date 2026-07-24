import { Component, OnInit } from '@angular/core';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { TranslatePipe } from '@ngx-translate/core';
import { LANGUAGE_CODES } from '../../utils/translate-utility';

@Component({
  selector: 'app-cv-downloader',
  imports: [TieredMenuModule, ButtonModule, TranslatePipe],
  templateUrl: './cv-downloader.html',
  styleUrl: './cv-downloader.scss',
})
export class CvDownloader implements OnInit {

    items: MenuItem[] | undefined;

    ngOnInit() {
     this.items = [
      {
        label: 'IT',
        icon: LANGUAGE_CODES.IT,
        command: () => this.downloadCv(LANGUAGE_CODES.IT)
      },
      {
        label: 'EN',
        icon: LANGUAGE_CODES.EN,
        command: () => this.downloadCv(LANGUAGE_CODES.EN)
      },
      {
        label: 'ES',
        icon: LANGUAGE_CODES.ES,
        command: () => this.downloadCv(LANGUAGE_CODES.ES)
      }
    ];
  }

  downloadCv(language: string) {
    const link = document.createElement('a');

    link.href = `assets/cv/Martina_Fausto_${language.toUpperCase()}_CV.pdf`;
    link.download = `CV-${language}.pdf`;

    link.click();
  }
}