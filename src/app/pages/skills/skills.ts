import { Component } from '@angular/core';
import { CvDownloader } from '../../components/cv-downloader/cv-downloader';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { LANGUAGE_CODES } from '../../utils/translate-utility';
import { DividerModule } from 'primeng/divider';
import { TranslatePipe } from '@ngx-translate/core';
import { COURSE, EDUCATION, LANGUAGE_LEVEL, LOCATION, MONTHS } from '../../shared/const-translation';
import { Timeline } from '../../components/timeline/timeline';
import { COLOR } from '../../shared/const-styles';
import { ICONS } from '../../shared/const-icons';

interface Skill {
  label: string;
  icon: string;
  severity: 'info' | 'success' | 'secondary' | 'warn';
}

interface Language {
  label: string;
  level: typeof LANGUAGE_LEVEL[keyof typeof LANGUAGE_LEVEL];
  flag: string;
}

@Component({
  selector: 'app-skills',
  imports: [CvDownloader, TranslatePipe, CardModule, DividerModule, TagModule, Timeline],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  education = [
    {
        status: 'TD2 Senderismo',
        startMonth: MONTHS.OCT,
        startYear: 2025,
        endMonth: MONTHS.MAR,
        endYear: 2026,
        city: LOCATION.POBLA,
        nation: LOCATION.SP,
        icon: ICONS.HIKING,
        color: COLOR.PRIMARY,
        sites: [
            {
                name: COURSE.ICEMP,
                url: 'https://icempallars.net/estudi/cf-gm-de-muntanya-mitjana/'
            }, 
        ],
        details: []
    },
    {
        status: EDUCATION.PROF,
        startMonth: MONTHS.JAN,
        startYear: 2013,
        endMonth: MONTHS.JAN,
        endYear: 2017,
        city: LOCATION.BARILOCHE,
        nation: LOCATION.AG,
        icon: ICONS.GRADUATION,
        color: COLOR.SECONDARY,
        sites: [
            {
                name: 'Universidad Nacional de Comahue',
                url: 'https://app.crub.uncoma.edu.ar/inicio/novedades'
            }  
        ],
        details: []
    },
    {
        status: EDUCATION.SKI,
        startMonth: MONTHS.JUL,
        startYear: 2012,
        endMonth: MONTHS.OCT,
        endYear: 2019,
        city: LOCATION.BARILOCHE,
        nation: LOCATION.AG,
        icon: ICONS.SKI,
        color: COLOR.ACCENT,
        sites: [
            {
                name: 'Instituto Superiorde Esquiy Snowboard (AADIDESS)',
                url: 'https://www.aadidess.com/2026/'
            }, 
        ],
        details: []
    },
    {
        status: EDUCATION.COLEGIO,
        startMonth: MONTHS.JAN,
        startYear: 2008,
        endMonth: MONTHS.JAN,
        endYear: 2012,
        city: LOCATION.BARILOCHE,
        nation: LOCATION.AG,
        icon: ICONS.BOOKS,
        color: COLOR.PRIMARY,
        sites: [
            {
                name: 'Colegio San Patricio',
                url: 'https://spatricio.com.ar/'
            }
        ],
        details: []
    }
  ];

  cursos = [
    {
        status: COURSE.FIRST_AID_OUTDOOR,
        startMonth: MONTHS.APR,
        startYear: 2026,
        city: LOCATION.PARMA,
        nation: LOCATION.IT,
        icon: ICONS.HEALTH,
        color: COLOR.SECONDARY,
        sites: [
            {
                name: COURSE.AIGAE,
                url: 'https://www.aigae.org/events/parma-primo-soccorso-outdoor-inizio-18-04-2026/'
            }  
        ],
        details: ['Ferite da arma da fuoco', 'Crisi e convulsioni', 'Congelamento', 'Colpo di calore']
    },
    {
        status: COURSE.FIRST_AID_OUTDOOR,
        startMonth: MONTHS.APR,
        startYear: 2026,
        city: LOCATION.VERBIER,
        nation: LOCATION.CH,
        icon: ICONS.HEALTH,
        color: COLOR.SECONDARY,
        sites: [
            {
                name: COURSE.AIGAE,
                url: 'https://www.aigae.org/events/parma-primo-soccorso-outdoor-inizio-18-04-2026/'
            }  
        ],
        details: []
    },
    {
        status: 'TD1 Senderismo',
        startMonth: MONTHS.OCT,
        startYear: 2024,
        endMonth: MONTHS.NOV,
        endYear: 2024,
        city: LOCATION.POBLA,
        nation: LOCATION.SP,
        icon: ICONS.HIKING,
        color: COLOR.PRIMARY,
        sites: [
            {
                name: COURSE.ICEMP,
                url: 'https://icempallars.net/estudi/cicle-inicial-de-grau-mitja-de-senderisme/'
            }, 
        ],
        details: []
    },
    {
        status: 'Personal Trainer EQF Level 4',
        startMonth: MONTHS.OCT,
        startYear: 2024,
        endMonth: MONTHS.NOV,
        endYear: 2024,
        icon: ICONS.RUNNING,
        color: COLOR.ACCENT,
        sites: [
            {
                name: COURSE.ICEMP,
                url: 'https://icempallars.net/estudi/cicle-inicial-de-grau-mitja-de-senderisme/'
            }, 
        ],
        details: []
    }
  ];


  certifications = [
    {
        title: 'Primo Soccorso Outdoor',
        icon: 'pi pi-heart',
        description: 'Formazione dedicata alla gestione delle emergenze in ambiente outdoor, con particolare attenzione agli interventi in contesti isolati e montani.',
        points: [
            'Valutazione dello scenario e gestione del rischio',
            'Primo intervento in ambiente remoto',
            'Gestione traumi e situazioni di emergenza'
        ],
        document: 'assets/documents/primo-soccorso.pdf',
        language: 'Italiano'
    },
    {
        title: 'Guida Ambientale Escursionistica',
        icon: 'pi pi-map',
        description: 'Percorso formativo per la conduzione di escursioni e attività educative in ambiente naturale.',
        points: [
            'Accompagnamento escursionistico',
            'Interpretazione del territorio',
            'Educazione ambientale'
        ],
        document: 'assets/documents/gae.pdf',
        language: 'Italiano'
    },
    {
        title: 'Cartografia e Orientamento',
        icon: 'pi pi-compass',
        description: 'Competenze nella lettura delle mappe e nella navigazione terrestre in ambiente outdoor.',
        points: [
            'Lettura carta topografica',
            'Uso GPS e strumenti digitali',
            'Orientamento sul terreno'
        ],
        document: 'assets/documents/cartografia.pdf',
        language: 'Italiano'
    },
    {
        title: 'Nivologia e Autosoccorso',
        icon: 'pi pi-cloud',
        description: 'Formazione sulla sicurezza in ambiente innevato e sulla gestione del rischio valanghe.',
        points: [
            'Analisi del manto nevoso',
            'Utilizzo ARVA, pala e sonda',
            'Procedure di autosoccorso'
        ],
        document: 'assets/documents/nivologia.pdf',
        language: 'Italiano'
    },
    {
        title: 'Abilitazione Outdoor',
        icon: 'pi pi-star',
        description: 'Competenze certificate per attività professionali in ambiente naturale.',
        points: [
            'Gestione gruppi',
            'Pianificazione itinerari',
            'Sicurezza escursionistica'
        ],
        document: 'assets/documents/abilitazione.pdf',
        language: 'Italiano'
    },
    {
        title: 'Primo Intervento',
        icon: 'pi pi-plus-circle',
        description: 'Conoscenze di base per affrontare situazioni di emergenza durante attività outdoor.',
        points: [
            'Valutazione delle condizioni',
            'Supporto al soccorso',
            'Gestione delle emergenze'
        ],
        document: 'assets/documents/primo-intervento.pdf',
        language: 'Italiano'
    }
  ];

  technicalSkills: Skill[] = [
    {
      label: 'TREK',
      severity: 'info',
      icon: 'pi pi-users'
    },
    {
      label: 'PLAN',
      severity: 'success',
      icon: 'pi pi-pencil'
    },
    {
      label: 'RISK',
      severity: 'warn',
      icon: 'pi pi-exclamation-triangle'
    },
    {
      label: 'MAP',
      severity: 'secondary',
      icon: 'pi pi-map'
    },
    {
      label: 'LEADER',
      severity: 'info',
      icon: 'pi pi-crown'
    },
    /*{
      label: 'EM',
      severity: 'warn',
      icon: ''
    }*/
  ];

  languages: Language[] = [
    {
      label: 'ES',
      level: 'N',
      flag: LANGUAGE_CODES.ES
    },
    {
      label: 'EN',
      level: 'C1',
      flag: LANGUAGE_CODES.EN
    },
    {
      label: 'IT',
      level: 'B2',
      flag: LANGUAGE_CODES.IT
    },
    {
      label: 'PT',
      level: 'B2',
      flag: LANGUAGE_CODES.PT
    }
  ];


}
