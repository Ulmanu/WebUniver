import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GaleryComponent } from './galery/galery.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
//import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { RenmuseumComponent } from './renmuseum/renmuseum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MusformComponent } from './musform/musform.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
//import {AgmCoreModule} from '@agm/core';
//import { MuseumsComponent } from './modules/museums/museums.component';
//import { HeaderComponent } from './shared/component/header/header.component';
//import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
//import { DefaultComponent } from './layouts/default/default.component';
//import { DashboardComponent } from './modules/dashboard/dashboard.component';
//import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SectionsComponent } from './modules/sections/sections.component';

import { GallerysComponent } from './modules/gallerys/gallerys.component';
import { ExponatsComponent } from './modules/exponats/exponats.component';
import { UsersComponent } from './modules/users/users.component';
import { DataComponent } from './data/data.component';
import { TursComponent } from './modules/turs/turs.component';
import { PurchasesComponent } from './modules/purchases/purchases.component';
import { PaymentsComponent } from './modules/payments/payments.component';
import { TurtypesComponent } from './modules/turtypes/turtypes.component';
import { SouvenirsComponent } from './modules/souvenirs/souvenirs.component';
import { SouvenirsamountComponent } from './modules/souvenirsamount/souvenirsamount.component';
import { MuseumComponent } from './products/museum/museum.component';
import { SectionComponent } from './products/section/section.component';
import { GalleryComponent } from './products/gallery/gallery.component';
//import { ExponatComponent } from './products/exponat/exponat.component';
// import { GallerysComponent } from './modules/gallerys/gallerys.component';
// import { ExponatsComponent } from './modules/exponats/exponats.component';
// import { UsersComponent } from './modules/users/users.component';
// import { TursComponent } from './modules/turs/turs.component';
// import { PurchaseComponent } from './modules/purchase/purchase.component';
// import { PaymentComponent } from './modules/payment/payment.component';
// import { TurtypeComponent } from './modules/turtype/turtype.component';
// import { SouvenirsComponent } from './modules/souvenirs/souvenirs.component';
// import { SouvenirsamountComponent } from './modules/souvenirsamount/souvenirsamount.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleryComponent,
    FooterComponent,
    MenuComponent,
    RegisterComponent,
    NavbarComponent,
    RenmuseumComponent,
    MusformComponent,
   // SectionsComponent,
    // GallerysComponent,
    // ExponatsComponent,
    // UsersComponent,
    // TursComponent,
    // PurchaseComponent,
    // PaymentComponent,
    // TurtypeComponent,
    // SouvenirsComponent,
    // SouvenirsamountComponent,
    LoginComponent,
    RegisterComponent,
    SectionsComponent,
    GallerysComponent,
    ExponatsComponent,
    UsersComponent,
    DataComponent,
    TursComponent,
    PurchasesComponent,
    PaymentsComponent,
    TurtypesComponent,
    SouvenirsComponent,
    SouvenirsamountComponent,
    MuseumComponent,
    SectionComponent,
    GalleryComponent


  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey:''
    // })
    // MDBBootstrapModule.forRoot()
    // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
