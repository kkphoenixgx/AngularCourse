import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-section></app-section>
    
    <app-footer [inputTask] = "inputText" ></app-footer>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  public inputText : { text: string , index :number  }[]  = []
}