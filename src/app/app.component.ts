import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <h1>Hey Guys</h1>

  <ul>
    <li *ngFor="let arr of myArr">{{arr}}</li>
  </ul>

  `,
styleUrls: ['./app.component.css']
})
export class AppComponent {
  myArr = ['him','hers','yours'];
}
