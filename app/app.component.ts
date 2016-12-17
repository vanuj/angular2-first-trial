import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <div>
      <calculator></calculator>
      <math></math>
      <newmath></newmath>
    </div>  
  `
})
export class AppComponent  { name = 'Angular 2.0 Test App'; }
