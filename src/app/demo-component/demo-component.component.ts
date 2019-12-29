import { Component, OnInit } from '@angular/core';
import { SocialUser } from "angularx-social-login";
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {
  public user: SocialUser;
  public loggedIn: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {

    
  }
  onButtonClick(){
    console.log("Boton clickeado!");
    this.auth.googleSignin();
  }
}
