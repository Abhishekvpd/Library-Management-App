import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookType } from '../../models/model';

@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.scss'],
})
export class BrowseBooksComponent implements OnInit {
  type: BookType = 'BORROW';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((response) => (this.type = response['type']));
  }
}
