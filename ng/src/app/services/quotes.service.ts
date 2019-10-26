import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Quotes_10 } from '../models/quotes';
import { Quote } from '../models/quote';


@Injectable({
    providedIn: "root"
})

export class QuotesService {
    getQuotes(): Observable<Quote[]>{
        return of(Quotes_10)
    }

    
    getQuote(id : number) : Observable<Quote> {
        return this.getQuotes().pipe(
          
          map((quotes : Quote[]) => quotes.find((quote : Quote) => quote.id == id))
        );
      }
    
      addQuote(quote : Quote): any {
        this.getQuotes().subscribe((quotes : Quote[]) => {
          let m : Quote = quotes.find(mv => mv.id === quote.id)
          if(m === undefined){
            quote.added_at = new Date();
            quote.updated_at = new Date();
            Quotes_10.push(quote)
          }
        })
    
        return of(null)
      }
    
      updateQuote(quote : Quote) : any {
        console.log(Quotes_10)
        for(let m of Quotes_10){
          if(m.id == quote.id){
            quote.updated_at = new Date();
            Object.assign(m, quote)
          }
        }
    
        return of(null)
      }
    
      deleteQuote(quote : Quote) : any {
        Quotes_10.splice(Quotes_10.indexOf(quote), 1)
        return of(null)
      }
    }