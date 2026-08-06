import { Component } from '@angular/core';
import { Timeline } from '../../components/timeline/timeline';
import { WORK, WORK_DETAILS, MONTHS, LOCATION } from '../../shared/const-translation';
import { ICONS } from '../../shared/const-icons';
import { COLOR } from '../../shared/const-styles';
@Component({
  selector: 'app-work-experience',
  imports: [Timeline],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperience {

  events = [
        {
            status: WORK.GUIDE,
            startMonth: MONTHS.JUL,
            startYear: 2026,
            endMonth: MONTHS.SEP,
            endYear: 2026,
            city: LOCATION.ORDINO,
            nation: LOCATION.AD,
            icon: ICONS.HIKING,
            color: COLOR.PRIMARY,
            sites: [
                {
                    name: 'Esquí Club Ordino Arcalis - ECOA',
                    url: 'https://ecoa.ad/'
                }  
            ],
            details: [WORK_DETAILS.HIKING, WORK_DETAILS.NATURE]
        },
        {
            status: WORK.FACILITATOR,
            startMonth: MONTHS.MAY,
            startYear: 2026,
            city: LOCATION.BUK,
            nation: LOCATION.HU,
            icon: ICONS.HIKING,
            color: COLOR.PRIMARY,
            sites: [
                {
                    name: 'JUMP! Experiences',
                    url: 'https://jumpfoundation.org/programs/off-campus/'
                }  
            ],
            details: [WORK_DETAILS.OUTDOOR_GROUPS]
        },
        {
            status: WORK.SKI,
            startMonth: MONTHS.NOV,
            startYear: 2025,
            endMonth: MONTHS.APR,
            endYear: 2026,
            city: LOCATION.ORDINO,
            nation: LOCATION.AD,
            icon: ICONS.SKI,
            color: COLOR.ACCENT,
            sites: [
                {
                    name: 'Esquí Club Ordino Arcalis - ECOA',
                    url: 'https://ecoa.ad/'
                },
                {
                    name: 'Ordino Arcalís - Grandvalira Resorts',
                    url: 'https://www.ordinoarcalis.com'
                }  
            ],
            details: [WORK_DETAILS.PRIV_CLASSES]
        },
        {
            status: WORK.GUIDE,
            startMonth: MONTHS.JUL,
            startYear: 2025,
            endMonth: MONTHS.AUG,
            endYear: 2025,
            city: LOCATION.VERBIER,
            nation: LOCATION.CH,
            icon: ICONS.HIKING,
            color: COLOR.PRIMARY,
            sites: [
                {
                    name: 'Altitude Summer Camps',
                    url: 'https://www.altitude-camps.com/'
                }
            ],
            details: []
        },
        {
            status: WORK.FACILITATOR,
            startMonth: MONTHS.SEP,
            startYear: 2024,
            city: LOCATION.ANNECY,
            nation: LOCATION.FR,
            icon: ICONS.BIKE,
            color: COLOR.SECONDARY,
            sites: [
                {
                    name: 'It\'s',
                    url: 'https://itsschooltrips.com/'
                }
            ],
            details: [WORK_DETAILS.OUTDOOR_GROUPS]
        },
        {
            status: WORK.GUIDE,
            startMonth: MONTHS.JUL,
            startYear: 2024,
            endMonth: MONTHS.AUG,
            endYear: 2024,
            city: LOCATION.VERBIER,
            nation: LOCATION.CH,
            icon: ICONS.HIKING,
            color: COLOR.PRIMARY,
            sites: [
                {
                    name: 'Altitude Summer Camps',
                    url: 'https://www.altitude-camps.com/'
                }
            ],
            details: []
        },
        {
            status: WORK.CLIMBING,
            startMonth: MONTHS.JAN,
            startYear: 2021,
            endMonth: MONTHS.NOV,
            endYear: 2023,
            city: LOCATION.VILLANOVA,
            nation: LOCATION.PT,
            icon: ICONS.CLIMBING,
            color: COLOR.SECONDARY,
            sites: [
                {
                    name: 'Murus Climbing Temple',
                    url: 'https://www.tripadvisor.it/Attraction_Review-g189180-d23551277-Reviews-MURUS_The_Climbing_Temple-Porto_Porto_District_Northern_Portugal.html'
                } 
            ],
            details: [WORK_DETAILS.HR, WORK_DETAILS.RECEPTION, WORK_DETAILS.CLIMBING]
        },
        {
            status: WORK.SKI,
            startMonth: MONTHS.NOV,
            startYear: 2022,
            endMonth: MONTHS.APR,
            endYear: 2024,
            city: LOCATION.VERBIER,
            nation: LOCATION.CH,
            icon: ICONS.SKI,
            color: COLOR.ACCENT,
            sites: [
                {
                    name: 'Altitude Ski & Snowboard School',
                    url: 'https://www.altitudeskischool.com'
                } 
            ],
            details: [WORK_DETAILS.PRIV_CLASSES]
        },
        {
            status: WORK.SKI,
            startMonth: MONTHS.DEC,
            startYear: 2018,
            endMonth: MONTHS.APR,
            endYear: 2019,
            city: LOCATION.NISEKO,
            nation: LOCATION.JP,
            icon: ICONS.SKI,
            color: COLOR.ACCENT,
            sites: [
                {
                    name: 'Niseko Base Snowsports',
                    url: 'https://nbsjapan.com/niseko/'
                }
            ],
            details: [WORK_DETAILS.PRIV_CLASSES]
        },
        {
            status: WORK.ENTRENADORA,
            startMonth: MONTHS.JAN,
            startYear: 2018,
            endMonth: MONTHS.JAN,
            endYear: 2019,
            city: LOCATION.BARILOCHE,
            nation: LOCATION.AG,
            icon: ICONS.ROLLER,
            color: COLOR.SECONDARY,
            sites: [
                {
                    name: 'Club Andino Bariloche',
                    url: 'https://www.clubandino.org/'
                } 
            ],
            details: []
        },
        {
            status: WORK.ENTRENADORA,
            startMonth: MONTHS.JAN,
            startYear: 2016,
            endMonth: MONTHS.JAN,
            endYear: 2018,
            city: LOCATION.BARILOCHE,
            nation: LOCATION.AG,
            icon: ICONS.HOCKEY,
            color: COLOR.SECONDARY,
            sites: [
                {
                    name: 'Club Los Pehuenes',
                    url: 'http://www.pehuenes.com/index.html'
                } 
            ],
            details: [WORK_DETAILS.HOCKEY, WORK_DETAILS.SWIMMING, WORK_DETAILS.CLIMBING]
        },
        {
            status: WORK.SKI,
            startMonth: MONTHS.JUL,
            startYear: 2012,
            endMonth: MONTHS.OCT,
            endYear: 2020,
            city: LOCATION.BARILOCHE,
            nation: LOCATION.AG,
            icon: ICONS.SKI,
            color: COLOR.ACCENT,
            sites: [
                {
                    name: 'Club Andino Bariloche',
                    url: 'https://www.clubandino.org/'
                } 
            ],
            details: [WORK_DETAILS.Y3_Y15, WORK_DETAILS.U10_U12]
        }
  ];

}
