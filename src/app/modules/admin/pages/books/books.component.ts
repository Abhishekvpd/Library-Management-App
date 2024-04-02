import { Component } from '@angular/core';
import { Book } from 'src/app/modules/user/models/model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  books: Book[] = [
    {
      title: 'book name',
      author: 'asgiugo',
      genre: 'horror',
      description: 'gofuwehf oiewhfweinf lewhfwf  wifjwf',
    },
    {
      title: 'book name',
      author: 'asgiugo',
      genre: 'horror',
      description: 'gofuwehf oiewhfweinf lewhfwf  wifjwf',
    },
    {
      title: 'book name',
      author: 'asgiugo',
      genre: 'horror',
      description: 'gofuwehf oiewhfweinf lewhfwf  wifjwf',
    },
    {
      title: 'book name',
      author: 'asgiugo',
      genre: 'horror',
      description: 'gofuwehf oiewhfweinf lewhfwf  wifjwf',
    },
    {
      title: 'book name',
      author: 'asgiugo',
      genre: 'horror',
      description: 'gofuwehf oiewhfweinf lewhfwf  wifjwf',
    },
  ];
}
