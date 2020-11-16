import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenmuseumComponent } from './renmuseum/renmuseum.component';
import { GaleryComponent } from './galery/galery.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MuseumsComponent } from './modules/museums/museums.component';

const routes: Routes = [
  { path: '', component: GaleryComponent },
  { path: 'renmuseum', component: RenmuseumComponent },
  { path: 'gallery', component: GaleryComponent },
  {
    path:'admin', component:DefaultComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'museumsad',
        component:MuseumsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
