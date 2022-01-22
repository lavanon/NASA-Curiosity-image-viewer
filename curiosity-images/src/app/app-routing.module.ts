import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.page';

const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingPage,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'landing-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
