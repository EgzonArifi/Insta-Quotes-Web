import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { EditQuoteComponent } from './components/edit-quote/edit-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuotesListComponent,
    NavbarComponent,
    QuoteComponent,
    AddQuoteComponent,
    EditQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
