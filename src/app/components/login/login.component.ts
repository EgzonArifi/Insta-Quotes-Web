import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Router} from "@angular/router";
import {FirebaseService} from '../../services/firebase.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    public flashMessage:FlashMessagesService
    ) { }

  ngOnInit() {
  }

 loginWithEmail(event, email, password){
    event.preventDefault();
    this.firebaseService.loginWithEmail(email, password).then(() => {
      this.flashMessage.show('You are logged in',
      {cssClass: 'alert-success', timeout: 2000});
      this.router.navigate(['']);
    })
      .catch((error: any) => {
        if (error) {
          console.log(error);
          this.flashMessage.show('Wrong credentials',
          {cssClass: 'alert-danger', timeout: 3000});
        }
      });
  }
}