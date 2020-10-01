import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutMeModule } from './modules/about-me/about-me.module';
import { ContactMeModule } from './modules/contact-me/contact-me.module';
import { LandingViewModule } from './modules/landing-view/landing-view.module';
import { PortfolioViewModule } from './modules/portfolio-view/portfolio-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMeModule,
    ContactMeModule,
    LandingViewModule,
    PortfolioViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
