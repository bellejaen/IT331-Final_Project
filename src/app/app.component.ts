import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../app/ionic-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private ionicAuthService: IonicAuthService) {}

  signOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('/welcome/sign-in');
      })
      .catch(error => {
        console.log(error);
      })
  }
  
}
