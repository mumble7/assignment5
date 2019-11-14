import { Component, OnInit } from "@angular/core";
import { Quote } from '../../models/quote';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotesService } from '../../services/quotes.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { rangeValidator } from '../../validators/range.validator';
import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'quote-form.component.html'
})
export class QuoteFormComponent implements OnInit {
    constructor(
        private quotesService: QuotesService,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private toastr: ToastrService) { }

    quoteExists: boolean = false
    quoteForm: FormGroup
    ngOnInit(): void {
        this.quoteForm = this.fb.group({
            quote: [null, Validators.required],
            author: [null, Validators.required],
            id: [null, Validators.required],
            source: [null, Validators.required],
            topic: [null, Validators.required],
            // added_at: [null, Validators.required],
            // updated_at: [null, Validators.required]
        })
        let quoteId = this.route.snapshot.params['id']

        if (quoteId !== undefined) {
            this.quoteExists = true;
            this.quotesService.getQuote(quoteId).subscribe(quote => this.quoteForm.setValue(quote))
        }
    }

    submitForm(f: NgForm): void {
       
        if (f.valid) {
            const quote: Quote = Object.assign({}, this.quoteForm.value)
            if (this.quoteExists) {
                this.quotesService.updateQuote(quote).subscribe(data => {
                    this.toastr.success("Your Quote has been updated successfully.")
                    this.router.navigate(['/quotes'])
                })
            } else {
                this.quotesService.addQuote(quote).subscribe(data => {
                    this.toastr.success("A new quote has been added successfully.")
                    this.router.navigate(['/quotes'])
                })
            }
        }

    }

    get quote() { return this.quoteForm.get('quote') }
    get author() { return this.quoteForm.get('author') }
    get id() { return this.quoteForm.get('id') }
    get source() { return this.quoteForm.get('source') }
    get topic() { return this.quoteForm.get('topic') }
    get added_at() { return this.quoteForm.get('added_at') }
    get updated_at() { return this.quoteForm.get('updated_at') }
    

}