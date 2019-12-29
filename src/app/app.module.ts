import { AuthService } from "angularx-social-login";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { DemoComponentComponent } from './demo-component/demo-component.component';

const config = {
  apiKey: "AIzaSyDBOnrSj5XYLAdoNad3TfAsOk6sON3jjGU",
  authDomain: "testlogin-97e9b.firebaseapp.com",
  databaseURL: "https://testlogin-97e9b.firebaseio.com",
  projectId: "testlogin-97e9b",
  storageBucket: "testlogin-97e9b.appspot.com",
  messagingSenderId: "653977420637",
  appId: "1:653977420637:web:8ca75429d3d1b77d3bdeb4",
  measurementId: "G-TZH6DMT1VQ"
}

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
