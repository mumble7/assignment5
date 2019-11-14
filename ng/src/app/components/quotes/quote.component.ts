import { Component, Input } from "@angular/core";
import { Quote } from '../../models/quote';


//el stands for element
@Component({
    selector: "quote-el",
    templateUrl: "quote.component.html"
})
export class QuoteComponent {
    @Input() quote : Quote
}