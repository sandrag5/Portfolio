import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './modules/about-me/page/about-me.component';
import { ContactMeComponent } from './modules/contact-me/page/contact-me.component';
import { LandingViewComponent } from './modules/landing-view/page/landing-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: LandingViewComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'contact', component: ContactMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
