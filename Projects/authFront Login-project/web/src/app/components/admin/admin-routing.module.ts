import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ----------- Pages -----------
import { AdminHomePage } from './pages/home/adminHomePage.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
