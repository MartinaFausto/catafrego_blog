import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { CheckCircle } from '@primeicons/angular/check-circle';
import { TranslatePipe } from '@ngx-translate/core';
import { Link } from '@primeicons/angular/link';

@Component({
  selector: 'app-timeline',
  imports: [AvatarModule, Link, TimelineModule, ButtonModule, CheckCircle, TranslatePipe],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Timeline {
    @Input() items!: any[];
    
}
