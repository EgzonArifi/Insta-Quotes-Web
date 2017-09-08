import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { EditQuoteComponent } from './components/edit-quote/edit-quote.component';

const appRoutes: Routes = [
 {path:'',component:HomeComponent},
 {path:'quotes-list',component:QuotesListComponent},
 {path:'quote/:id', component:QuoteComponent},
 {path:'add-quote',component:AddQuoteComponent},
 {path:'edit-quote/:id', component:EditQuoteComponent}
]

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
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
