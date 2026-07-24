import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Counters } from '../../components/counters/counters';
import { MapsWork } from '../../components/maps-work/maps-work';
import { MapArgentina } from '../../components/map-argentina/map-argentina';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [Hero, MapArgentina, Counters, TranslatePipe, MapsWork],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}