import { Routes } from "@angular/router";

export const contentRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'lifecycles',
    loadChildren: () => import('src/app/modules//lifecycles/lifecycles.module').then(m => m.LifecyclesModule),
  },
];
