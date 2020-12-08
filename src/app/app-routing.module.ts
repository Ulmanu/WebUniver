import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RenmuseumComponent} from './renmuseum/renmuseum.component';
import {GaleryComponent} from './galery/galery.component';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {MuseumsComponent} from './modules/museums/museums.component';
import {MusformComponent} from './musform/musform.component';
 import {SectionsComponent} from './modules/sections/sections.component';
 import {GallerysComponent} from './modules/gallerys/gallerys.component';
 import {ExponatsComponent} from './modules/exponats/exponats.component';
import {UsersComponent} from './modules/users/users.component';
import {DataComponent} from './data/data.component';
// import {TursComponent} from './modules/turs/turs.component';
// import {PurchaseComponent} from './modules/purchase/purchase.component';
// import {PaymentComponent} from './modules/payment/payment.component';
// import {TurtypeComponent} from './modules/turtype/turtype.component';
// import {SouvenirsComponent} from './modules/souvenirs/souvenirs.component';
// import {SouvenirsamountComponent} from './modules/souvenirsamount/souvenirsamount.component';
import {LoginComponent} from './account/login/login.component';
import {RegisterComponent} from './account/register/register.component';
const routes: Routes = [
  {path: '', component: GaleryComponent},
  {path: 'renmuseum', component: RenmuseumComponent},
  {path: 'gallery', component: GaleryComponent},
  {
    path: 'admin', component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'museumsad',
        component: MuseumsComponent
      },
      {
        path: 'sectionadd',
        component: SectionsComponent
      },
      {
        path: 'galleryadd',
        component: GallerysComponent
      },
      {
        path: 'exponatadd',
        component: ExponatsComponent
      },

      {
        path: 'useradd',
        component: UsersComponent
      },

      // {
      //   path: 'turadd',
      //   component: TursComponent
      // },
      // {
      //   path: 'purchaseadd',
      //   component: PurchaseComponent
      // },
      // {
      //   path: 'paymentadd',
      //   component: PaymentComponent
      // },
      // {
      //   path: 'turtypeadd',
      //   component: TurtypeComponent
      // },
      // {
      //   path: 'souvenirsadd',
      //   component: SouvenirsComponent
      // },
      // {
      //   path: 'souvenirsamountadd',
      //   component: SouvenirsamountComponent
      // }


    ]
  },
  {path: 'musform', component: MusformComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'section/:id',component:DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
