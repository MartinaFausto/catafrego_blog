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
        status: EDUCATION.TD2,
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
            name: EDUCATION.UNCO,
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
            name: EDUCATION.AADIDESS,
            url: 'https://www.aadidess.com/2026/'
          }, 
        ],
        details: [EDUCATION.ISIA]
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
            name: EDUCATION.SECONDARY,
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
        details: []
    },
    {
        status: COURSE.CAG,
        startMonth: MONTHS.FEB,
        startYear: 2026,
        city: LOCATION.PIRENEOS,
        nation: LOCATION.SP,
        icon: ICONS.HIKING,
        color: COLOR.PRIMARY,
        sites: [
            {
                name: COURSE.ACNA,
                url: 'https://www.acna.cat/formacio/curs-allaus-per-a-guies-nivell-1/'
            }  
        ],
        details: []
    },
    {
        status: COURSE.TD1,
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
        status: COURSE.FIRST_AID_OUTDOOR,
        startMonth: MONTHS.DEC,
        startYear: 2023,
        city: LOCATION.VERBIER,
        nation: LOCATION.CH,
        icon: ICONS.HEALTH,
        color: COLOR.SECONDARY,
        sites: [
            {
                name: COURSE.NUCO,
                url: 'https://www.nucotraining.com/'
            }  
        ],
        details: []
    },
    {
        status: COURSE.PERSONAL_TRAINER,
        startMonth: MONTHS.SEP,
        startYear: 2020,
        icon: ICONS.RUNNING,
        color: COLOR.ACCENT,
        sites: [
            {
                name: COURSE.ALTO,
                url: 'https://altorendimiento.com/'
            }, 
        ],
        details: []
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
