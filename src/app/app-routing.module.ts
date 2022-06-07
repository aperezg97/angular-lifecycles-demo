import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { contentRoutes } from './shared/routes/content-routes';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [],
    children: contentRoutes
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
