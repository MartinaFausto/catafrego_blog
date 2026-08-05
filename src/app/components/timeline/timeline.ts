import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { CheckCircle } from '@primeicons/angular/check-circle';
import { MapMarker } from '@primeicons/angular/map-marker';
import { TranslatePipe } from '@ngx-translate/core';
import { ExternalLink } from '@primeicons/angular/external-link';

@Component({
  selector: 'app-timeline',
  imports: [AvatarModule, ExternalLink, TimelineModule, ButtonModule, CheckCircle, MapMarker, TranslatePipe],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Timeline {
    @Input() items!: any[];
    
}
