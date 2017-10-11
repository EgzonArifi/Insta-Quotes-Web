import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  title:any;
  category:any;
  imageUrl:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }


  ngOnInit() {
  }

  onAddSubmit(){
    let listing = {
      title: this.title,
      category: this.category,
      imageUrl: this.imageUrl,
      createdAt: Date.now()
    }

    this.firebaseService.addQuote(listing);

    this.router.navigate(['quotes-list']);
  }
}
