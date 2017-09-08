import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { EditQuoteComponent } from './components/edit-quote/edit-quote.component';
import { LoginComponent } from './components/login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAwbv-7a5QaflgmfbbI1jhdSdrRrsFGhLs",
  authDomain: "insta-quotes.firebaseapp.com",
  databaseURL: "https://insta-quotes.firebaseio.com",
  projectId: "insta-quotes",
  storageBucket: "insta-quotes.appspot.com",
  messagingSenderId: "414447201120"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
 {path:'',component:HomeComponent},
 {path:'quotes-list',component:QuotesListComponent},
 {path:'quote/:id', component:QuoteComponent},
 {path:'add-quote',component:AddQuoteComponent},
 {path:'edit-quote/:id', component:EditQuoteComponent},
 {path:'login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuotesListComponent,
    NavbarComponent,
    QuoteComponent,
    AddQuoteComponent,
    EditQuoteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
