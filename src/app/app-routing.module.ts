import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenmuseumComponent } from './renmuseum/renmuseum.component';
import { GaleryComponent } from './galery/galery.component';

const routes: Routes = [
  { path: '', component: GaleryComponent },
  { path: 'renmuseum', component: RenmuseumComponent },
  { path: 'gallery', component: GaleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
