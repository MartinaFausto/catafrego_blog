import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { CheckCircle } from '@primeicons/angular/check-circle';
import { MapMarker } from '@primeicons/angular/map-marker';
import { TranslatePipe } from '@ngx-translate/core';
import { ExternalLink } from '@primeicons/angular/external-link';

const ICONS = {
  HIKING: 'hiking',
  SKI: 'ski',
  CLIMBING: 'climbing',
  BIKE: 'bike'
} as const;

const MONTHS = {
  JAN: 'JAN',
  FEB: 'FEB',
  MAR: 'MAR',
  APR: 'APR',
  MAY: 'MAY',
  JUN: 'JUN',
  JUL: 'JUL',
  AUG: 'AUG',
  SEP: 'SEP',
  OCT: 'OCT',
  NOV: 'NOV',
  DEC: 'DEC'
} as const;

@Component({
  selector: 'app-timeline',
  imports: [AvatarModule, ExternalLink, TimelineModule, ButtonModule, CheckCircle, MapMarker, TranslatePipe],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Timeline {
    events = [
        {
            status: 'Order Placed',
            startMonth: MONTHS.JUL,
            startYear: 2026,
            endMonth: MONTHS.SEP,
            endYear: 2026,
            city: 'ORDINO',
            nation: 'AD',
            icon: ICONS.HIKING,
            color: 'bg-green-500',
            sites: [
                {
                    name: 'Ordino Arcalís - Grandvalira Resorts',
                    url: 'https://www.ordinoarcalis.com'
                }  
            ],
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        },
        {
            status: 'Order Placed',
            startMonth: MONTHS.NOV,
            startYear: 2025,
            endMonth: MONTHS.APR,
            endYear: 2026,
            city: 'ORDINO',
            nation: 'AD',
            icon: ICONS.SKI,
            color: 'bg-blue-500',
            sites: [
                {
                    name: 'Grandvalira - Grandvalira Resorts',
                    url: 'https://www.grandvalira.com'
                },
                {
                    name: 'Ordino Arcalís - Grandvalira Resorts',
                    url: 'https://www.ordinoarcalis.com'
                }  
            ],
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        },
        {
            status: 'Guida',
            startMonth: MONTHS.JUL,
            startYear: 2025,
            endMonth: MONTHS.AUG,
            endYear: 2025,
            city: 'VERBIER',
            nation: 'CH',
            icon: ICONS.HIKING,
            color: 'bg-green-500',
            sites: [
                {
                    name: 'Altitude Summer Camps',
                    url: 'https://www.altitude-camps.com/'
                }
            ],
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        },
        {
            status: 'Guida',
            startMonth: MONTHS.SEP,
            startYear: 2024,
            city: 'ANNECY',
            nation: 'FR',
            icon: ICONS.BIKE,
            color: 'bg-orange-500',
            sites: [
                {
                    name: 'Grandvalira - Grandvalira Resorts',
                    url: 'https://www.grandvalira.com'
                }
            ],
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        },
        {
            status: 'Guida',
            startMonth: MONTHS.JUL,
            startYear: 2024,
            endMonth: MONTHS.AUG,
            endYear: 2024,
            city: 'VERBIER',
            nation: 'CH',
            icon: ICONS.HIKING,
            color: 'bg-green-500',
            sites: [
                {
                    name: 'Altitude Summer Camps',
                    url: 'https://www.altitude-camps.com/'
                }
            ],
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        },
        {
            status: 'Istruttrice arrampicata',
            startMonth: MONTHS.NOV,
            startYear: 2025,
            endMonth: MONTHS.APR,
            endYear: 2026,
            city: 'PORTO',
            nation: 'PT',
            icon: ICONS.CLIMBING,
            color: 'bg-yellow-500',
            sites: [
                {
                    name: 'Murus Climbing Temple',
                    url: 'https://www.tripadvisor.it/Attraction_Review-g189180-d23551277-Reviews-MURUS_The_Climbing_Temple-Porto_Porto_District_Northern_Portugal.html'
                } 
            ],
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        },
        {
            status: 'Sci',
            startMonth: MONTHS.NOV,
            startYear: 2023,
            endMonth: MONTHS.APR,
            endYear: 2024,
            city: 'VERBIER',
            nation: 'CH',
            icon: ICONS.SKI,
            color: 'bg-blue-500',
            sites: [
                {
                    name: 'Altitude Ski & Snowboard School',
                    url: 'https://www.altitudeskischool.com'
                } 
            ],
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        },
        {
            status: 'Sci',
            startMonth: MONTHS.NOV,
            startYear: 2022,
            endMonth: MONTHS.APR,
            endYear: 2023,
            city: 'VERBIER',
            nation: 'CH',
            icon: ICONS.SKI,
            color: 'bg-blue-500',
            sites: [
                {
                    name: 'Altitude Ski & Snowboard School',
                    url: 'https://www.altitudeskischool.com'
                } 
            ],
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        },
        {
            status: 'Payment Confirmed',
            startMonth: MONTHS.DEC,
            startYear: 2018,
            endMonth: MONTHS.APR,
            endYear: 2019,
            city: 'NISEKO',
            nation: 'JP',
            icon: ICONS.SKI,
            color: 'bg-blue-500',
            sites: [
                {
                    name: 'Niseko Base Snowsports',
                    url: 'https://nbsjapan.com/'
                }
            ],
            description: 'Payment of $149.99 was successfully processed via Credit Card ending in 4242.'
        },
        {
            status: 'Sci',
            startMonth: MONTHS.NOV,
            startYear: 2025,
            endMonth: MONTHS.APR,
            endYear: 2026,
            city: 'BARILOCHE',
            nation: 'AG',
            icon: ICONS.SKI,
            color: 'bg-blue-500',
            sites: [
                {
                    name: 'Club Andino Bariloche',
                    url: 'https://www.clubandino.org/'
                } 
            ],
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        }
  ];
}
