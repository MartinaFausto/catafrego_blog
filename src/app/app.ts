import { Component, signal, inject  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateUtility } from '../app/utils/translate-utility';
import { AvatarModule } from "primeng/avatar";
import { Header } from './components/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AvatarModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('Catalina Fregonese');

  private initLanguage = inject(TranslateUtility).initLanguage();
}
