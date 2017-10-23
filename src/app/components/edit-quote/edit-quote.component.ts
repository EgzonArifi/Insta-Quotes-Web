import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {
  id;
  title;
  category;
  imageUrl;
  createdAt;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getQuoteDetails(this.id).subscribe(listing => {
      this.title = listing.title;
      this.category = listing.category;
      this.imageUrl = listing.imageUrl;
      this.createdAt = listing.createdAt;
      console.log(this.title);
    });
  }

  onEditSubmit() {
    let listing = {
      title: this.title,
      category: this.category,
      imageUrl: this.imageUrl,
      createdAt: Date.now()
    }
    this.firebaseService.updateQuote(this.id, listing);
    this.router.navigate(['/quotes-list']);
  }

}
