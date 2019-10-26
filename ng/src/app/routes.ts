import { Routes } from '@angular/router'
import { QuotesComponent } from './components/quotes.component'
import { QuoteDetailsComponent } from './components/quote-details.component';
import { QuoteFormComponent } from './components/quote-form.component';

export const routes: Routes = [
  { path: 'quotes', component: QuotesComponent },
  { path: 'quotes/new', component: QuoteFormComponent },
  { path: 'quotes/:id', component: QuoteDetailsComponent},
  { path: 'quotes/:id/edit', component: QuoteFormComponent},
  { path: '', redirectTo: '/quotes', pathMatch: 'full' }
]