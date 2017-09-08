import { Injectable } from '@angular/core';
import { AngularFire,AuthProviders,AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
  
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>
  }

//Login with email
  loginWithEmail(email, password) {
    return this.af.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }
//Get list with quotes
  getListings(){
    return this.listings;
  }

}

interface Listing {
  $key?:string;
  title?:string;
  imageUrl?:string;
}