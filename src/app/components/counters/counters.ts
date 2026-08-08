import { Component, AfterViewInit, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CountUp } from 'countup.js';
import { CardModule } from 'primeng/card';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-counters',
  imports: [CardModule, TranslatePipe],
  templateUrl: './counters.html',
  styleUrl: './counters.scss',
})
export class Counters implements AfterViewInit {

  @ViewChild('statsSection') statsSection!: ElementRef;

  @ViewChildren('counter') counters!: QueryList<ElementRef>;


  stats = [
    {
      icon: 'pi-calendar',
      value: 14,
      suffix: '+',
      label: 'COUNTERS.1'
    },
    {
      icon: 'pi-map',
      value: 6,
      suffix: '+',
      label: 'COUNTERS.2'
    },
    {
      icon: 'pi-compass',
      value: 150,
      suffix: '+',
      label: 'COUNTERS.3'
    },
    {
      icon: 'pi-verified',
      value: 7,
      suffix: '',
      label: 'COUNTERS.4'
    }
  ];


  ngAfterViewInit(): void {

    const observer = new IntersectionObserver(
      entries => {

        if (entries[0].isIntersecting) {

          this.startCounters();

          observer.disconnect();

        }

      },
      {
        threshold: 0.3
      }
    );


    observer.observe(this.statsSection.nativeElement);

  }


  private startCounters(): void {

    this.counters.forEach((counter, index) => {

      const stat = this.stats[index];

      new CountUp(
        counter.nativeElement,
        stat.value,
        {
          suffix: stat.suffix
        }
      ).start();

    });

  }

}