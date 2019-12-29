import { Component } from '@angular/core';
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-test';
  constructor() { }
  ngOnInit() {
    console.log("config ...");
    console.log(GoogleLoginProvider.PROVIDER_ID);
    console.log("config ...");
  }
}
