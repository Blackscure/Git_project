import { Component } from '@angular/core';

@Component({
  selector: 'github',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
    constructor() {
        console.log('Github Component Int...');
    }
}
