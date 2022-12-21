import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectBindingComponent } from './project-binding/project-binding.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectBindingComponent,
    AttributeDirectivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
