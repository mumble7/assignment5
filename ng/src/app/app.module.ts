import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { QuotesComponent } from './components/quotes.component';
import { QuoteComponent } from './components/quote.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { QuoteDetailsComponent } from './components/quote-details.component';
import { QuoteFormComponent } from './components/quote-form.component';
import { CommonModule } from '@angular/common';
import { InMemoryQuoteDBService } from './services/in-memory-quote-db.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryQuoteDBService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false
    }
    )

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
