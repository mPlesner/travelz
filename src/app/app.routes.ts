import { Routes } from '@angular/router';
import { BlackLayout } from './components/black-layout/black-layout';
import { MainPage } from './components/main-page/main-page';

export const routes: Routes = [
  {
    path: '',
    component: BlackLayout,
    children: [
      {
        path: '',
        component: MainPage,
        outlet: 'content',
      },
    ],
  },
];
