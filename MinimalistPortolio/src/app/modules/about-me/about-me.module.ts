import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMePageComponent } from './page/about-me-page/about-me-page.component';
import { AboutMeComponent } from './about-me/about-me.component';



@NgModule({
  declarations: [AboutMePageComponent, AboutMeComponent],
  imports: [
    CommonModule
  ]
})
export class AboutMeModule { }
