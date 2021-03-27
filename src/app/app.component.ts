import { Component } from '@angular/core';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reflections-with-ram-dass';
  quote$;
  constructor(private quoteService: QuoteService) {

  }

  getQuoteClickHandler() {
    this.quoteService.getAllQuotes();
  }
}
