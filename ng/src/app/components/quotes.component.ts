import { Component, OnInit } from "@angular/core";
//import service
import {QuotesService} from "../services/quotes.service"
import { Quote } from "../models/quote";

@Component({
    selector: "quotes-el",
    templateUrl: "quotes.component.html"
})

export class QuotesComponent implements OnInit {
    constructor(private quotesService : QuotesService){}
    quotes : Quote[]

    ngOnInit(): void{
        this.quotesService.getQuotes().subscribe( data => this.quotes = data)
    }

    sortQuotes() : void {
        console.log("Sorting: TODO")
    }
}