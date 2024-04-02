import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book, BookType } from 'src/app/modules/user/models/model';

@Component({
  selector: 'app-books-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss']
})
export class BooksCardComponent {
  @Input() book!: Book;
  @Input() action: BookType | "EDIT" = 'BORROW';
}
