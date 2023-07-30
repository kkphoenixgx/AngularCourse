import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ----------- Routes -----------
import { AdminRoutingModule } from './admin-routing.module';

// ----------- Pages -----------
import { AdminHomePage } from './pages/home/adminHomePage.component';

@NgModule({
  declarations: [AdminHomePage],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
