import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { WorkExperience } from './pages/work-experience/work-experience';
import { Contacts } from './pages/contacts/contacts';
import { Skills } from './pages/skills/skills';
import { PhotoDiary } from './pages/photo-diary/photo-diary';

export const ROUTES = {
  WORK_EXPERIENCE: 'work-experiences',
  CONTACTS: 'contacts',
  SKILLS: 'skills',
  DIARY: 'photo-diary'
} as const;

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: ROUTES.WORK_EXPERIENCE,
        component: WorkExperience
    },
    {
        path: ROUTES.SKILLS,
        component: Skills
    },
    {
        path: ROUTES.DIARY,
        component: PhotoDiary
    },
    {
        path: ROUTES.CONTACTS,
        component: Contacts
    }
];
