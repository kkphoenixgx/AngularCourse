import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = 
[
  { path: "", component: HomeComponent, pathMatch: 'full' },
	{ path: "about",component: AboutComponent },
	{ path: "about/kkphoenix",component: AboutComponent },
	{ path: "404",component: ErrorComponent },
	{ path: "**",redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
