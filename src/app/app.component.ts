import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hey Guys 1</h1>

  <img src="{{ angularLogo }}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">

  `,
styleUrls: ['./app.component.css']
})
export class AppComponent {

  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';

}
