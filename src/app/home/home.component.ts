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
  availableCategories: String[] = [];
  categoriesShown = false;
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
    const allQuotes$ = this.quoteService.getAllQuotes().subscribe((res) => {
      this.allQuotes = res;
      this.displayedQuote = this.allQuotes[this.getRandomIndex(this.allQuotes)];
      res.map((quote) => {
        if (this.availableCategories.indexOf(quote.category) === -1) {
         this.availableCategories.push(quote.category);
       }
      })
    });
    this.categorySentencePrefix = this.categorySentencePrefixes[
      this.getRandomIndex(this.categorySentencePrefixes)
    ];
  }

  getQuoteClickHandler() {
    this.categoriesShown = !this.categoriesShown;
  }

  getQuoteByCategory(selectedCategory) {
    this.categoriesShown = !this.categoriesShown;

    if (selectedCategory) {
      const filteredQuotes = this.allQuotes.filter(
        (quote) => quote.category === selectedCategory
      );
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      this.displayedQuote = filteredQuotes[randomIndex];

    } else {
      const randomIndex = Math.floor(Math.random() * this.allQuotes.length);
      this.displayedQuote = this.allQuotes[randomIndex]
    }

  }

  getRandomIndex(arr?) {
    return Math.floor(Math.random() * (arr.length || 1));
  }

  getCategorySentencePrefix() {
    return this.categorySentencePrefix;
  }
}
