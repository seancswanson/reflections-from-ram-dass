import { Component, OnInit } from "@angular/core";
import { QuoteService } from "../services/quote.service";
import { Quote } from "./quote.interface";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  allQuotes: Quote[];
  displayedQuote: Quote;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    const allQuotes$ = this.quoteService
      .getAllQuotes()
      .subscribe((res) => (this.allQuotes = res));
  }

  getQuoteClickHandler(selectedCategory) {
    const filteredQuotes = this.allQuotes.filter(
      (quote) => quote.category === selectedCategory
    );
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    this.displayedQuote = filteredQuotes[randomIndex];
  }
}
