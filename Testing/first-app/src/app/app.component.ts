import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-project-binding></app-project-binding>
    <router-outlet></router-outlet>
    <app-attribute-directives></app-attribute-directives>
  `
})
export class AppComponent implements OnInit {

  ngOnInit(): void { }
}