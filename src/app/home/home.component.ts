import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
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
  categorySentencePrefixes = [
    "In regards to",
    "On",
    "Concerning",
    "As it relates to",
    "About",
  ];
  categorySentencePrefix: string;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    const allQuotes$ = this.quoteService
      .getAllQuotes()
      .subscribe((res) => (this.allQuotes = res));
    this.categorySentencePrefix = this.categorySentencePrefixes[
      this.getRandomIndex(this.categorySentencePrefixes)
    ];
  }

  getQuoteClickHandler(selectedCategory) {
    const filteredQuotes = this.allQuotes.filter(
      (quote) => quote.category === selectedCategory
    );
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    this.displayedQuote = filteredQuotes[randomIndex];
  }

  getRandomIndex(arr?) {
    return Math.floor(Math.random() * (arr.length || 1));
  }

  getCategorySentencePrefix() {
    return this.categorySentencePrefix;
  }
}
