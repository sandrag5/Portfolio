import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MinimalistPortolio';
  
  constructor(
    private router: Router
  ) { }

  //Info: https://stackoverflow.com/questions/53998080/how-to-scroll-with-router-navigation-in-angular-7
  @HostListener('window:wheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {
    // Scroll down
    if (evento.deltaY > 0) {
      switch (this.router.url) {
        case '/welcome': {
          this.router.navigate(['/about'])
          break
        }
        case '/about': {
          this.router.navigate(['/contact'])
          break
        }
        case '/contact': {
          break
        }
      }
    } else { 
      // Scroll up
      switch (this.router.url) {
        case '/welcome': {
          break
        }
        case '/about': {
          this.router.navigate(['/welcome'])
          break
        }
        case '/contact': {
          this.router.navigate(['/about'])
          break
        }
      }
    }
  }
}
