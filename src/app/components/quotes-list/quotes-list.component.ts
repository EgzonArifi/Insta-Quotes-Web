import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

   listings:any;
  
  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
      this.firebaseService.getListings().subscribe(listings => {
      console.log(listings);
      this.listings = listings;
    });
  }

}
