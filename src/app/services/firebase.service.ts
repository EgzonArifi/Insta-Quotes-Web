import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  quote: FirebaseObjectObservable<any>;

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
  getListings() {
    return this.listings;
  }

  //quote to database
  addQuote(listing) {
    return this.listings.push(listing);
  }
  //Get quote by id
  getQuoteDetails(id) {
    this.quote = this.af.database.object('/listings/' + id) as FirebaseObjectObservable<Listing>
    return this.quote;
  }
  //Update quote
  updateQuote(id, listing) {
    return this.listings.update(id, listing);
  }
  //Delete Quote
  deleteQuote(id) {
    return this.listings.remove(id);
  }
}

interface Listing {
  $key?: string;
  title?: string;
  category?: string;
  imageUrl?: string;
}