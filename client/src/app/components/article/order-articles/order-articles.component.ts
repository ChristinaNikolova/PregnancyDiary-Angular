import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-articles',
  templateUrl: './order-articles.component.html',
  styleUrls: ['./order-articles.component.css'],
})
export class OrderArticlesComponent {
  @Output() orderEventEmitter = new EventEmitter<string>();
  isShown: boolean;

  constructor() {
    this.isShown = false;
  }

  toogle(criteria: string): void {
    this.isShown = !this.isShown;

    if (criteria === 'no search') {
      return;
    }

    this.orderEventEmitter.emit(criteria);
  }
}
