import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { LandingPage } from './pages/landing/landing.page';

const routes: Routes = [
  { path: '', component: LandingPage },
  {
    path: 'landing-page',
    component: LandingPage,
  },
  {
    path: 'home', 
    component: HomePage,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
