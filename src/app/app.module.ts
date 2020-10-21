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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    NoopAnimationsModule,
    // MDBBootstrapModule.forRoot()
   // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
