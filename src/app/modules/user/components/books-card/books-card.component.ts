import { Component, Input } from '@angular/core';
import { Book, BookType } from '../../models/model';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss'],
})
export class BooksCardComponent {
  @Input() book!: Book;
  @Input() action: BookType = 'BORROW';
}
