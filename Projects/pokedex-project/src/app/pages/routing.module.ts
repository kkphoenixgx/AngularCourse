import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// --------- Components ---------
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

// ----------- Routes -----------

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: DetailsComponent }
];

// ---------- NgModule ----------

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }