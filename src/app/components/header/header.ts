import { Component, ElementRef, HostListener, inject } from '@angular/core';import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { LanguageSelector } from '../language-selector/language-selector';
import { TagModule } from 'primeng/tag';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ROUTES } from '../../app.routes';
import { NgClass } from '@angular/common';

interface HeaderLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-header',
  imports: [ToolbarModule, NgClass, TranslatePipe, RouterLink,TagModule, ButtonModule, LanguageSelector],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

    private elementRef = inject(ElementRef);

    scrolled = true;
    menuOpen = false;

    @HostListener('window:scroll')
    onScroll() {
      //this.scrolled = window.scrollY > 50;
    }

    @HostListener('document:click', ['$event'])
    clickOutside(event: MouseEvent) {
      if (!this.elementRef.nativeElement.contains(event.target)) {
          this.menuOpen = false;
      }
    }

    links: HeaderLink[] = [
    /*{ label: 'HOME',
      route: ''
    },*/
    {
      label: 'WORK_EXPERIENCE',
      route: '/'+ROUTES.WORK_EXPERIENCE
    },
    {
      label: 'SKILLS',
      route: '/'+ROUTES.SKILLS
    },
    /*{
      label: 'DIARY',
      route: '/'+ROUTES.DIARY
    },*/
    {
      label: 'CONTACTS',
      route: '/'+ROUTES.CONTACTS
    }
  ];

}