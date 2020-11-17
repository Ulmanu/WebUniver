import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { GaleryComponent } from './galery/galery.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { RenmuseumComponent } from './renmuseum/renmuseum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MusformComponent } from './musform/musform.component';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
//import { MuseumsComponent } from './modules/museums/museums.component';
//import { HeaderComponent } from './shared/component/header/header.component';
//import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
//import { DefaultComponent } from './layouts/default/default.component';
//import { DashboardComponent } from './modules/dashboard/dashboard.component';
//import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    GaleryComponent,
    FooterComponent,
    MenuComponent,
    RegisterComponent,
    NavbarComponent,
    RenmuseumComponent,
    MusformComponent


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
    AgmCoreModule.forRoot({
      apiKey:''
    })
    // MDBBootstrapModule.forRoot()
   // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
