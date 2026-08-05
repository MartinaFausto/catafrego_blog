import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Counters } from '../../components/counters/counters';
import { MapsWork } from '../../components/maps-work/maps-work';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [Hero, Counters, TranslatePipe, MapsWork],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}