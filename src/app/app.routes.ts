import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { MainPage } from './components/main-page/main-page';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: MainPage,
        outlet: 'content',
      },
    ],
  },
];
