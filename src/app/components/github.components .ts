import { Component } from '@angular/core';

@Component({
  selector: 'gitApp',
  templateUrl: '<h1>My First Angualar app</h1>'
})
export class GithubComponent {
  constructor(){
      console.log('Github Component Init..');
  }
}