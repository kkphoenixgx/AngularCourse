import { Component, OnInit } from '@angular/core';
import { TestingServiceService } from './services/testing-service.service';

@Component({
  selector: 'app-root',
  template: `
    <app-project-binding></app-project-binding>
    <router-outlet></router-outlet>
    <app-attribute-directives></app-attribute-directives>
  `
})
export class AppComponent {}