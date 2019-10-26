import { Component, OnInit } from "@angular/core";
import { QuotesService } from '../services/quotes.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';
import { switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { build$ } from 'protractor/built/element';

declare var $: any;

@Component({
    templateUrl: 'quote-details.component.html'
})
export class QuoteDetailsComponent implements OnInit{
  
    quote : Quote
    isToConfirmDelete : boolean = false
    deleteModalStyle : string = 'none'
    constructor(private quotesService : QuotesService, 
    private route : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router,){}
    

    ngOnInit(): void {
        let quoteId = this.route.snapshot.params['id']
        this.quotesService.getQuote(quoteId).subscribe(val => this.quote = val);
    }
    /*
    ngOnInit(): void {
        this.movie$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => 
                this.moviesService.getMovie(params.get('id'))
            )
        )
    }
    */
    toggleConfirmDelete() : void {
        this.isToConfirmDelete = !this.isToConfirmDelete

        $('#deleteModal').modal('toggle');
    }

    deleteQuote(quote : Quote) : void {
        $('#deleteModal').modal('toggle');
        this.quotesService.deleteQuote(quote).subscribe(data => {
            this.toastr.success("This quote has been deleted.")
            this.router.navigate(['/quotes'])
        })
    }

}