import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { Box } from '@primeicons/angular/box';
import { MapMarker } from '@primeicons/angular/map-marker';
import { PIcon } from '@primeicons/angular/p-icon';

@Component({
  selector: 'app-timeline',
  imports: [AvatarModule, TimelineModule, ButtonModule, Box, MapMarker, PIcon],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Timeline {
    events = [
        {
            status: 'Order Placed',
            date: 'Oct 15, 2026',
            time: '10:30 AM',
            icon: 'shopping-cart',
            color: 'bg-blue-500',
            user: 'JD',
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        },
        {
            status: 'Payment Confirmed',
            date: 'Oct 15, 2026',
            time: '10:32 AM',
            icon: 'credit-card',
            color: 'bg-green-500',
            user: 'SY',
            description: 'Payment of $149.99 was successfully processed via Credit Card ending in 4242.'
        },
        {
            status: 'Shipped',
            date: 'Oct 16, 2026',
            time: '02:15 PM',
            icon: 'truck',
            color: 'bg-orange-500',
            user: 'MK',
            description: 'Package has been handed to the carrier and is on its way.',
            tracking: 'TRK-892374651'
        },
        {
            status: 'Delivered',
            date: 'Oct 18, 2026',
            time: '11:20 AM',
            icon: 'check-circle',
            color: 'bg-lime-500',
            user: 'JD',
            description: 'Package was delivered and signed for at the front door.'
        }
  ];
}
