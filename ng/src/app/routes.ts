import { Routes } from '@angular/router'
import { QuotesComponent } from './components/quotes/quotes.component'
import { QuoteDetailsComponent } from './components/quotes/quote-details.component';
import { QuoteFormComponent } from './components/quotes/quote-form.component';
import { RegisterFormComponent } from './components/users/register-form.component';
import { SignInFormComponent } from './components/users/signin-form.component';
import { AuthenticationGuard } from './services/authentication.guard';

export const routes: Routes = [
  { path: 'quotes', component: QuotesComponent },
  { path: 'quotes/new', component: QuoteFormComponent, canActivate: [AuthenticationGuard] },
  { path: 'quotes/:id', component: QuoteDetailsComponent },
  { path: 'quotes/:id/edit', component: QuoteFormComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/quotes', pathMatch: 'full' },
  { path: 'register', component: RegisterFormComponent },
  { path: 'signin', component: SignInFormComponent }
]