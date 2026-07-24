import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [TranslatePipe, NgClass],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {

  contacts = [
    {
        name: 'Email',
        mobileValue: 'catafrego94\n@gmail.com',
        value: 'catafrego94@gmail.com',
        icon: 'assets/icons/maildotru.svg',
        link: 'mailto:catafrego94@gmail.com'
    },
    {
        name: 'WhatsApp',
        value: '+39 3758756265',
        icon: 'assets/icons/whatsapp.svg',
        link: 'https://wa.me/393758756265'
    },
    {
        name: 'Instagram',
        value: '@catafrego',
        icon: 'assets/icons/instagram.svg',
        link: 'https://instagram.com/catafrego'
    }
];

}
