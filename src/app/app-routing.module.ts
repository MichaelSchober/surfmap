import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurfspotsComponent } from './surfspots/surfspots.component';
import { SurfspotDetailComponent } from './surfspot-detail/surfspot-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/surfspots' },
  { path: 'surfspots', pathMatch: 'full', component: SurfspotsComponent },
  { path: 'surfspot/:id', component: SurfspotDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
