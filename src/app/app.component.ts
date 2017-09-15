import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//  templateUrl: './app.component.html',
  template: `

  <h1>Hey Guys</h1>
  <p>{{myObject.location}}</p>
  `,
styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'app works!';
  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  }

}
