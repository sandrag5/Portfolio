import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutMeComponent } from './modules/about-me/about-me.component';
import { ContactMeComponent } from './modules/contact-me/contact-me.component';
import { LandingViewComponent } from './modules/landing-view/landing-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    AboutMeComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
